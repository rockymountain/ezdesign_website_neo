type ContactPayload = {
  name?: string;
  contact?: string;
  interest?: string;
  industry?: string;
  website?: string;
  message?: string;
  sourcePath?: string;
  submittedAt?: string;
  userAgent?: string;
  honeypot?: string;
  turnstileToken?: string;
};

export type ContactEnv = {
  TURNSTILE_SECRET_KEY: string;
  ALLOWED_ORIGIN?: string;

  GOOGLE_SHEET_ID: string;
  GOOGLE_SHEET_RANGE?: string;
  GOOGLE_SERVICE_ACCOUNT_EMAIL: string;
  GOOGLE_PRIVATE_KEY: string;

  RESEND_API_KEY?: string;
  LEAD_NOTIFY_FROM?: string;
  LEAD_NOTIFY_TO?: string;
};

type JsonResponseBody = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
};

const TURNSTILE_SITEVERIFY_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

const RESEND_EMAILS_URL = 'https://api.resend.com/emails';

const MAX_LENGTH = {
  name: 120,
  contact: 160,
  interest: 120,
  industry: 120,
  website: 240,
  message: 2000,
  sourcePath: 240,
  userAgent: 500,
};

function jsonResponse(
  body: JsonResponseBody,
  status = 200,
  origin = '*',
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      Vary: 'Origin',
    },
  });
}

function getAllowedOrigin(request: Request, env: ContactEnv): string {
  const requestOrigin = request.headers.get('Origin') || '';

  if (!env.ALLOWED_ORIGIN) {
    return requestOrigin || '*';
  }

  return requestOrigin === env.ALLOWED_ORIGIN
    ? requestOrigin
    : env.ALLOWED_ORIGIN;
}

function normalizeString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function validatePayload(payload: ContactPayload): Record<string, string> {
  const errors: Record<string, string> = {};

  const name = normalizeString(payload.name);
  const contact = normalizeString(payload.contact);
  const interest = normalizeString(payload.interest);
  const industry = normalizeString(payload.industry);
  const website = normalizeString(payload.website);
  const message = normalizeString(payload.message);
  const sourcePath = normalizeString(payload.sourcePath);
  const userAgent = normalizeString(payload.userAgent);
  const turnstileToken = normalizeString(payload.turnstileToken);

  if (!name) errors.name = 'Vui lòng nhập tên của bạn.';
  if (!contact) errors.contact = 'Vui lòng nhập email hoặc số điện thoại.';
  if (!interest) errors.interest = 'Vui lòng chọn giải pháp bạn quan tâm.';
  if (!message) errors.message = 'Vui lòng mô tả ngắn nhu cầu của bạn.';
  if (!turnstileToken) {
    errors.turnstileToken = 'Vui lòng hoàn tất xác minh chống spam.';
  }

  if (name.length > MAX_LENGTH.name) errors.name = 'Tên quá dài.';
  if (contact.length > MAX_LENGTH.contact) {
    errors.contact = 'Thông tin liên hệ quá dài.';
  }
  if (interest.length > MAX_LENGTH.interest) {
    errors.interest = 'Giải pháp quan tâm quá dài.';
  }
  if (industry.length > MAX_LENGTH.industry) errors.industry = 'Ngành quá dài.';
  if (message.length > MAX_LENGTH.message) {
    errors.message = 'Nội dung ghi chú quá dài.';
  }
  if (sourcePath.length > MAX_LENGTH.sourcePath) {
    errors.sourcePath = 'Source path quá dài.';
  }
  if (userAgent.length > MAX_LENGTH.userAgent) {
    errors.userAgent = 'User agent quá dài.';
  }

  if (website) {
    if (!/^https?:\/\/.+/i.test(website)) {
      errors.website = 'Website nên bắt đầu bằng https:// hoặc http://';
    }

    if (website.length > MAX_LENGTH.website) {
      errors.website = 'Website quá dài.';
    }
  }

  return errors;
}

async function validateTurnstileToken(
  token: string,
  request: Request,
  env: ContactEnv,
): Promise<boolean> {
  if (!env.TURNSTILE_SECRET_KEY) {
    console.error('[EZD Contact] Missing TURNSTILE_SECRET_KEY.');
    return false;
  }

  const ip = request.headers.get('CF-Connecting-IP') || '';

  const formData = new FormData();
  formData.append('secret', env.TURNSTILE_SECRET_KEY);
  formData.append('response', token);

  if (ip) {
    formData.append('remoteip', ip);
  }

  const response = await fetch(TURNSTILE_SITEVERIFY_URL, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    return false;
  }

  const outcome = (await response.json()) as {
    success?: boolean;
    'error-codes'?: string[];
  };

  if (!outcome.success) {
    console.warn('[EZD Contact] Turnstile failed:', outcome['error-codes']);
  }

  return outcome.success === true;
}

async function readJsonPayload(request: Request): Promise<ContactPayload | null> {
  const contentType = request.headers.get('Content-Type') || '';

  if (!contentType.includes('application/json')) {
    return null;
  }

  try {
    return (await request.json()) as ContactPayload;
  } catch {
    return null;
  }
}

function base64UrlEncode(input: string | ArrayBuffer): string {
  const bytes =
    typeof input === 'string'
      ? new TextEncoder().encode(input)
      : new Uint8Array(input);

  let binary = '';

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary)
    .replaceAll('+', '-')
    .replaceAll('/', '_')
    .replaceAll('=', '');
}

function normalizePrivateKey(privateKey: string): string {
  return privateKey.replace(/\\n/g, '\n').trim();
}

function pemToArrayBuffer(pem: string): ArrayBuffer {
  const normalized = normalizePrivateKey(pem)
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\s/g, '');

  const binary = atob(normalized);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes.buffer;
}

async function createGoogleJwt(env: ContactEnv): Promise<string> {
  const now = Math.floor(Date.now() / 1000);

  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const claimSet = {
    iss: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    scope: GOOGLE_SHEETS_SCOPE,
    aud: GOOGLE_TOKEN_URL,
    exp: now + 3600,
    iat: now,
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedClaimSet = base64UrlEncode(JSON.stringify(claimSet));
  const unsignedJwt = `${encodedHeader}.${encodedClaimSet}`;

  const key = await crypto.subtle.importKey(
    'pkcs8',
    pemToArrayBuffer(env.GOOGLE_PRIVATE_KEY),
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256',
    },
    false,
    ['sign'],
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    key,
    new TextEncoder().encode(unsignedJwt),
  );

  return `${unsignedJwt}.${base64UrlEncode(signature)}`;
}

async function getGoogleAccessToken(env: ContactEnv): Promise<string> {
  if (
    !env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
    !env.GOOGLE_PRIVATE_KEY ||
    !env.GOOGLE_SHEET_ID
  ) {
    throw new Error('Missing Google Sheets environment variables.');
  }

  const assertion = await createGoogleJwt(env);

  const body = new URLSearchParams();
  body.set('grant_type', 'urn:ietf:params:oauth:grant-type:jwt-bearer');
  body.set('assertion', assertion);

  const response = await fetch(GOOGLE_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  if (!response.ok) {
    const errorText = await response.text();
    // console.error('[EZD Contact] Google token error:', errorText);
    console.error('[EZD Contact] Google token error:', {
      status: response.status,
      statusText: response.statusText,
      serviceAccount: env.GOOGLE_SERVICE_ACCOUNT_EMAIL || 'missing',
      hasPrivateKey: Boolean(env.GOOGLE_PRIVATE_KEY),
      privateKeyStartsWithBegin: Boolean(
        env.GOOGLE_PRIVATE_KEY?.includes('BEGIN PRIVATE KEY'),
      ),
      errorText,
    });
    throw new Error('Unable to get Google access token.');
  }

  const result = (await response.json()) as {
    access_token?: string;
  };

  if (!result.access_token) {
    throw new Error('Google access token missing.');
  }

  return result.access_token;
}

function buildSheetRow(payload: ContactPayload): string[] {
  return [
    normalizeString(payload.submittedAt) || new Date().toISOString(),
    normalizeString(payload.name),
    normalizeString(payload.contact),
    normalizeString(payload.interest),
    normalizeString(payload.industry),
    normalizeString(payload.website),
    normalizeString(payload.message),
    normalizeString(payload.sourcePath),
    normalizeString(payload.userAgent),
    'New',
    '',
  ];
}

async function appendLeadToGoogleSheet(
  payload: ContactPayload,
  env: ContactEnv,
): Promise<void> {
  const accessToken = await getGoogleAccessToken(env);

  const sheetRange = env.GOOGLE_SHEET_RANGE || 'Leads!A:K';
  const encodedRange = encodeURIComponent(sheetRange);

  const appendUrl =
    `https://sheets.googleapis.com/v4/spreadsheets/${env.GOOGLE_SHEET_ID}` +
    `/values/${encodedRange}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const response = await fetch(appendUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      values: [buildSheetRow(payload)],
    }),
  });

  // if (!response.ok) {
  //   const errorText = await response.text();
  //   console.error('[EZD Contact] Google Sheets append error:', errorText);
  //   throw new Error('Unable to append lead to Google Sheet.');
  // }
  if (!response.ok) {
    const errorText = await response.text();

    console.error('[EZD Contact] Google Sheets append error:', {
      status: response.status,
      statusText: response.statusText,
      range: env.GOOGLE_SHEET_RANGE || 'Leads!A:K',
      sheetIdPrefix: env.GOOGLE_SHEET_ID
        ? `${env.GOOGLE_SHEET_ID.slice(0, 6)}...`
        : 'missing',
      serviceAccount: env.GOOGLE_SERVICE_ACCOUNT_EMAIL || 'missing',
      errorText,
    });

    throw new Error('Unable to append lead to Google Sheet.');
  }
}

function buildLeadEmailHtml(payload: ContactPayload): string {
  const submittedAt = escapeHtml(
    normalizeString(payload.submittedAt) || new Date().toISOString(),
  );

  const name = escapeHtml(normalizeString(payload.name));
  const contact = escapeHtml(normalizeString(payload.contact));
  const interest = escapeHtml(normalizeString(payload.interest));
  const industry = escapeHtml(normalizeString(payload.industry) || '—');
  const website = escapeHtml(normalizeString(payload.website) || '—');
  const message = escapeHtml(normalizeString(payload.message)).replaceAll(
    '\n',
    '<br />',
  );
  const sourcePath = escapeHtml(normalizeString(payload.sourcePath) || '—');

  return `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
      <h2 style="margin: 0 0 12px; color: #0f766e;">New EZDesign lead</h2>
      <p style="margin: 0 0 20px; color: #475569;">
        Một lead mới vừa được gửi từ website EZDesign.
      </p>

      <table cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700;">Submitted At</td>
          <td style="padding: 10px; border: 1px solid #e2e8f0;">${submittedAt}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700;">Name</td>
          <td style="padding: 10px; border: 1px solid #e2e8f0;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700;">Contact</td>
          <td style="padding: 10px; border: 1px solid #e2e8f0;">${contact}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700;">Interest</td>
          <td style="padding: 10px; border: 1px solid #e2e8f0;">${interest}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700;">Industry</td>
          <td style="padding: 10px; border: 1px solid #e2e8f0;">${industry}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700;">Website</td>
          <td style="padding: 10px; border: 1px solid #e2e8f0;">${website}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700;">Source</td>
          <td style="padding: 10px; border: 1px solid #e2e8f0;">${sourcePath}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700;">Message</td>
          <td style="padding: 10px; border: 1px solid #e2e8f0;">${message}</td>
        </tr>
      </table>
    </div>
  `;
}

function buildLeadEmailText(payload: ContactPayload): string {
  return [
    'New EZDesign lead',
    '',
    `Submitted At: ${normalizeString(payload.submittedAt) || new Date().toISOString()}`,
    `Name: ${normalizeString(payload.name)}`,
    `Contact: ${normalizeString(payload.contact)}`,
    `Interest: ${normalizeString(payload.interest)}`,
    `Industry: ${normalizeString(payload.industry) || '—'}`,
    `Website: ${normalizeString(payload.website) || '—'}`,
    `Source: ${normalizeString(payload.sourcePath) || '—'}`,
    '',
    'Message:',
    normalizeString(payload.message),
  ].join('\n');
}

async function sendLeadNotificationEmail(
  payload: ContactPayload,
  env: ContactEnv,
): Promise<void> {
  if (!env.RESEND_API_KEY || !env.LEAD_NOTIFY_FROM || !env.LEAD_NOTIFY_TO) {
    console.warn('[EZD Contact] Email notification skipped: missing Resend env vars.');
    return;
  }

  const name = normalizeString(payload.name) || 'Website lead';
  const interest = normalizeString(payload.interest) || 'Contact form';

  const response = await fetch(RESEND_EMAILS_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.LEAD_NOTIFY_FROM,
      to: env.LEAD_NOTIFY_TO
        .split(',')
        .map((email) => email.trim())
        .filter(Boolean),
      subject: `[EZDesign Lead] ${name} — ${interest}`,
      html: buildLeadEmailHtml(payload),
      text: buildLeadEmailText(payload),
      reply_to: normalizeString(payload.contact) || undefined,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('[EZD Contact] Resend error:', errorText);
    throw new Error('Unable to send lead notification email.');
  }
}

export async function handleContactRequest(
  request: Request,
  env: ContactEnv,
): Promise<Response> {
  const allowedOrigin = getAllowedOrigin(request, env);

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        Vary: 'Origin',
      },
    });
  }

  if (request.method !== 'POST') {
    return jsonResponse(
      {
        ok: false,
        message: 'Method not allowed.',
      },
      405,
      allowedOrigin,
    );
  }

  const payload = await readJsonPayload(request);

  if (!payload) {
    return jsonResponse(
      {
        ok: false,
        message: 'Invalid JSON payload.',
      },
      400,
      allowedOrigin,
    );
  }

  const honeypot = normalizeString(payload.honeypot);

  if (honeypot) {
    return jsonResponse(
      {
        ok: true,
        message: 'Cảm ơn bạn. EZDesign đã nhận được thông tin.',
      },
      200,
      allowedOrigin,
    );
  }

  const errors = validatePayload(payload);

  if (Object.keys(errors).length > 0) {
    return jsonResponse(
      {
        ok: false,
        message: 'Một vài thông tin chưa hợp lệ.',
        errors,
      },
      400,
      allowedOrigin,
    );
  }

  const turnstileToken = normalizeString(payload.turnstileToken);

  const isTurnstileValid = await validateTurnstileToken(
    turnstileToken,
    request,
    env,
  );

  if (!isTurnstileValid) {
    return jsonResponse(
      {
        ok: false,
        message: 'Xác minh chống spam không hợp lệ hoặc đã hết hạn.',
        errors: {
          turnstileToken: 'Vui lòng xác minh lại trước khi gửi.',
        },
      },
      400,
      allowedOrigin,
    );
  }

  try {
    await appendLeadToGoogleSheet(payload, env);
  } catch (error) {
    console.error('[EZD Contact] Lead append failed:', error);

    return jsonResponse(
      {
        ok: false,
        message:
          'Form đã được xác minh nhưng chưa thể lưu lead. Vui lòng thử lại hoặc liên hệ EZDesign qua email/Zalo.',
      },
      500,
      allowedOrigin,
    );
  }

  try {
    await sendLeadNotificationEmail(payload, env);
  } catch (error) {
    console.error('[EZD Contact] Email notification failed:', error);
  }

  return jsonResponse(
    {
      ok: true,
      message:
        'Cảm ơn bạn. EZDesign đã nhận được thông tin và sẽ phản hồi sớm.',
    },
    200,
    allowedOrigin,
  );
}