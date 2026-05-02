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
};

type JsonResponseBody = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
};

const TURNSTILE_SITEVERIFY_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

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

  // Task 8.3: append Google Sheets here.
  // Task 8.4: send email notification here.

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