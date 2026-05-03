var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../src/server/contact-handler.ts
var TURNSTILE_SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
var GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
var GOOGLE_SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";
var RESEND_EMAILS_URL = "https://api.resend.com/emails";
var MIN_FORM_FILL_TIME_MS = 3500;
var MAX_SUBMITTED_AT_SKEW_MS = 10 * 60 * 1e3;
var MAX_LENGTH = {
  name: 120,
  contact: 160,
  interest: 120,
  industry: 120,
  website: 240,
  message: 2e3,
  sourcePath: 240,
  userAgent: 500
};
function jsonResponse(body, status = 200, origin = "*") {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      Vary: "Origin"
    }
  });
}
__name(jsonResponse, "jsonResponse");
function getAllowedOrigins(env) {
  return (env.ALLOWED_ORIGIN || "").split(",").map((origin) => origin.trim()).filter(Boolean);
}
__name(getAllowedOrigins, "getAllowedOrigins");
function getAllowedOrigin(request, env) {
  const requestOrigin = request.headers.get("Origin") || "";
  const allowedOrigins = getAllowedOrigins(env);
  if (allowedOrigins.length === 0) {
    return requestOrigin || "*";
  }
  if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
    return requestOrigin;
  }
  return allowedOrigins[0];
}
__name(getAllowedOrigin, "getAllowedOrigin");
function isAllowedRequestOrigin(request, env) {
  const allowedOrigins = getAllowedOrigins(env);
  if (allowedOrigins.length === 0) {
    return true;
  }
  const requestOrigin = request.headers.get("Origin") || "";
  return Boolean(requestOrigin && allowedOrigins.includes(requestOrigin));
}
__name(isAllowedRequestOrigin, "isAllowedRequestOrigin");
function normalizeString(value) {
  return typeof value === "string" ? value.trim() : "";
}
__name(normalizeString, "normalizeString");
function parseDateMs(value) {
  if (typeof value !== "string") {
    return null;
  }
  const time = Date.parse(value);
  return Number.isNaN(time) ? null : time;
}
__name(parseDateMs, "parseDateMs");
function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
__name(escapeHtml, "escapeHtml");
function validatePayload(payload) {
  const errors = {};
  const name = normalizeString(payload.name);
  const contact = normalizeString(payload.contact);
  const interest = normalizeString(payload.interest);
  const industry = normalizeString(payload.industry);
  const website = normalizeString(payload.website);
  const message = normalizeString(payload.message);
  const sourcePath = normalizeString(payload.sourcePath);
  const userAgent = normalizeString(payload.userAgent);
  const turnstileToken = normalizeString(payload.turnstileToken);
  if (!name) errors.name = "Vui l\xF2ng nh\u1EADp t\xEAn c\u1EE7a b\u1EA1n.";
  if (!contact) errors.contact = "Vui l\xF2ng nh\u1EADp email ho\u1EB7c s\u1ED1 \u0111i\u1EC7n tho\u1EA1i.";
  if (!interest) errors.interest = "Vui l\xF2ng ch\u1ECDn gi\u1EA3i ph\xE1p b\u1EA1n quan t\xE2m.";
  if (!message) errors.message = "Vui l\xF2ng m\xF4 t\u1EA3 ng\u1EAFn nhu c\u1EA7u c\u1EE7a b\u1EA1n.";
  if (!turnstileToken) {
    errors.turnstileToken = "Vui l\xF2ng ho\xE0n t\u1EA5t x\xE1c minh ch\u1ED1ng spam.";
  }
  if (name.length > MAX_LENGTH.name) errors.name = "T\xEAn qu\xE1 d\xE0i.";
  if (contact.length > MAX_LENGTH.contact) {
    errors.contact = "Th\xF4ng tin li\xEAn h\u1EC7 qu\xE1 d\xE0i.";
  }
  if (interest.length > MAX_LENGTH.interest) {
    errors.interest = "Gi\u1EA3i ph\xE1p quan t\xE2m qu\xE1 d\xE0i.";
  }
  if (industry.length > MAX_LENGTH.industry) {
    errors.industry = "Ng\xE0nh qu\xE1 d\xE0i.";
  }
  if (message.length > MAX_LENGTH.message) {
    errors.message = "N\u1ED9i dung ghi ch\xFA qu\xE1 d\xE0i.";
  }
  if (sourcePath.length > MAX_LENGTH.sourcePath) {
    errors.sourcePath = "Source path qu\xE1 d\xE0i.";
  }
  if (userAgent.length > MAX_LENGTH.userAgent) {
    errors.userAgent = "User agent qu\xE1 d\xE0i.";
  }
  if (website) {
    if (!/^https?:\/\/.+/i.test(website)) {
      errors.website = "Website n\xEAn b\u1EAFt \u0111\u1EA7u b\u1EB1ng https:// ho\u1EB7c http://";
    }
    if (website.length > MAX_LENGTH.website) {
      errors.website = "Website qu\xE1 d\xE0i.";
    }
  }
  return errors;
}
__name(validatePayload, "validatePayload");
function validateSubmissionTiming(payload) {
  const errors = {};
  const now = Date.now();
  const submittedAtMs = parseDateMs(payload.submittedAt);
  const formStartedAtMs = parseDateMs(payload.formStartedAt);
  if (!submittedAtMs) {
    errors.submittedAt = "Submitted timestamp kh\xF4ng h\u1EE3p l\u1EC7.";
  } else if (Math.abs(now - submittedAtMs) > MAX_SUBMITTED_AT_SKEW_MS) {
    errors.submittedAt = "Submitted timestamp \u0111\xE3 h\u1EBFt h\u1EA1n.";
  }
  if (!formStartedAtMs) {
    errors.formStartedAt = "Form start timestamp kh\xF4ng h\u1EE3p l\u1EC7.";
  } else if (submittedAtMs && submittedAtMs - formStartedAtMs < MIN_FORM_FILL_TIME_MS) {
    errors.formStartedAt = "Form \u0111\u01B0\u1EE3c g\u1EEDi qu\xE1 nhanh.";
  }
  return errors;
}
__name(validateSubmissionTiming, "validateSubmissionTiming");
async function validateTurnstileToken(token, request, env) {
  if (!env.TURNSTILE_SECRET_KEY) {
    console.error("[EZD Contact] Missing TURNSTILE_SECRET_KEY.");
    return false;
  }
  const ip = request.headers.get("CF-Connecting-IP") || "";
  const formData = new FormData();
  formData.append("secret", env.TURNSTILE_SECRET_KEY);
  formData.append("response", token);
  if (ip) {
    formData.append("remoteip", ip);
  }
  const response = await fetch(TURNSTILE_SITEVERIFY_URL, {
    method: "POST",
    body: formData
  });
  if (!response.ok) {
    return false;
  }
  const outcome = await response.json();
  if (!outcome.success) {
    console.warn("[EZD Contact] Turnstile failed:", outcome["error-codes"]);
  }
  return outcome.success === true;
}
__name(validateTurnstileToken, "validateTurnstileToken");
async function readJsonPayload(request) {
  const contentType = request.headers.get("Content-Type") || "";
  if (!contentType.includes("application/json")) {
    return null;
  }
  try {
    return await request.json();
  } catch {
    return null;
  }
}
__name(readJsonPayload, "readJsonPayload");
function base64UrlEncode(input) {
  const bytes = typeof input === "string" ? new TextEncoder().encode(input) : new Uint8Array(input);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}
__name(base64UrlEncode, "base64UrlEncode");
function normalizePrivateKey(privateKey) {
  return privateKey.replace(/\\n/g, "\n").trim();
}
__name(normalizePrivateKey, "normalizePrivateKey");
function pemToArrayBuffer(pem) {
  const normalized = normalizePrivateKey(pem).replace("-----BEGIN PRIVATE KEY-----", "").replace("-----END PRIVATE KEY-----", "").replace(/\s/g, "");
  const binary = atob(normalized);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes.buffer;
}
__name(pemToArrayBuffer, "pemToArrayBuffer");
async function createGoogleJwt(env) {
  const now = Math.floor(Date.now() / 1e3);
  const header = {
    alg: "RS256",
    typ: "JWT"
  };
  const claimSet = {
    iss: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    scope: GOOGLE_SHEETS_SCOPE,
    aud: GOOGLE_TOKEN_URL,
    exp: now + 3600,
    iat: now
  };
  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedClaimSet = base64UrlEncode(JSON.stringify(claimSet));
  const unsignedJwt = `${encodedHeader}.${encodedClaimSet}`;
  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemToArrayBuffer(env.GOOGLE_PRIVATE_KEY),
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256"
    },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(unsignedJwt)
  );
  return `${unsignedJwt}.${base64UrlEncode(signature)}`;
}
__name(createGoogleJwt, "createGoogleJwt");
async function getGoogleAccessToken(env) {
  if (!env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !env.GOOGLE_PRIVATE_KEY || !env.GOOGLE_SHEET_ID) {
    throw new Error("Missing Google Sheets environment variables.");
  }
  const assertion = await createGoogleJwt(env);
  const body = new URLSearchParams();
  body.set("grant_type", "urn:ietf:params:oauth:grant-type:jwt-bearer");
  body.set("assertion", assertion);
  const response = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body
  });
  if (!response.ok) {
    const errorText = await response.text();
    console.error("[EZD Contact] Google token error:", {
      status: response.status,
      statusText: response.statusText,
      serviceAccount: env.GOOGLE_SERVICE_ACCOUNT_EMAIL || "missing",
      hasPrivateKey: Boolean(env.GOOGLE_PRIVATE_KEY),
      privateKeyStartsWithBegin: Boolean(
        env.GOOGLE_PRIVATE_KEY?.includes("BEGIN PRIVATE KEY")
      ),
      errorText
    });
    throw new Error("Unable to get Google access token.");
  }
  const result = await response.json();
  if (!result.access_token) {
    throw new Error("Google access token missing.");
  }
  return result.access_token;
}
__name(getGoogleAccessToken, "getGoogleAccessToken");
function buildSheetRow(payload) {
  return [
    normalizeString(payload.submittedAt) || (/* @__PURE__ */ new Date()).toISOString(),
    normalizeString(payload.name),
    normalizeString(payload.contact),
    normalizeString(payload.interest),
    normalizeString(payload.industry),
    normalizeString(payload.website),
    normalizeString(payload.message),
    normalizeString(payload.sourcePath),
    normalizeString(payload.userAgent),
    "New",
    ""
  ];
}
__name(buildSheetRow, "buildSheetRow");
async function appendLeadToGoogleSheet(payload, env) {
  const accessToken = await getGoogleAccessToken(env);
  const sheetRange = env.GOOGLE_SHEET_RANGE || "Leads!A:K";
  const encodedRange = encodeURIComponent(sheetRange);
  const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${env.GOOGLE_SHEET_ID}/values/${encodedRange}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
  const response = await fetch(appendUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
      values: [buildSheetRow(payload)]
    })
  });
  if (!response.ok) {
    const errorText = await response.text();
    console.error("[EZD Contact] Google Sheets append error:", {
      status: response.status,
      statusText: response.statusText,
      range: env.GOOGLE_SHEET_RANGE || "Leads!A:K",
      sheetIdPrefix: env.GOOGLE_SHEET_ID ? `${env.GOOGLE_SHEET_ID.slice(0, 6)}...` : "missing",
      serviceAccount: env.GOOGLE_SERVICE_ACCOUNT_EMAIL || "missing",
      errorText
    });
    throw new Error("Unable to append lead to Google Sheet.");
  }
}
__name(appendLeadToGoogleSheet, "appendLeadToGoogleSheet");
function buildLeadEmailHtml(payload) {
  const submittedAt = escapeHtml(
    normalizeString(payload.submittedAt) || (/* @__PURE__ */ new Date()).toISOString()
  );
  const name = escapeHtml(normalizeString(payload.name));
  const contact = escapeHtml(normalizeString(payload.contact));
  const interest = escapeHtml(normalizeString(payload.interest));
  const industry = escapeHtml(normalizeString(payload.industry) || "\u2014");
  const website = escapeHtml(normalizeString(payload.website) || "\u2014");
  const message = escapeHtml(normalizeString(payload.message)).replaceAll(
    "\n",
    "<br />"
  );
  const sourcePath = escapeHtml(normalizeString(payload.sourcePath) || "\u2014");
  return `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
      <h2 style="margin: 0 0 12px; color: #0f766e;">New EZDesign lead</h2>
      <p style="margin: 0 0 20px; color: #475569;">
        M\u1ED9t lead m\u1EDBi v\u1EEBa \u0111\u01B0\u1EE3c g\u1EEDi t\u1EEB website EZDesign.
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
__name(buildLeadEmailHtml, "buildLeadEmailHtml");
function buildLeadEmailText(payload) {
  return [
    "New EZDesign lead",
    "",
    `Submitted At: ${normalizeString(payload.submittedAt) || (/* @__PURE__ */ new Date()).toISOString()}`,
    `Name: ${normalizeString(payload.name)}`,
    `Contact: ${normalizeString(payload.contact)}`,
    `Interest: ${normalizeString(payload.interest)}`,
    `Industry: ${normalizeString(payload.industry) || "\u2014"}`,
    `Website: ${normalizeString(payload.website) || "\u2014"}`,
    `Source: ${normalizeString(payload.sourcePath) || "\u2014"}`,
    "",
    "Message:",
    normalizeString(payload.message)
  ].join("\n");
}
__name(buildLeadEmailText, "buildLeadEmailText");
async function sendLeadNotificationEmail(payload, env) {
  if (!env.RESEND_API_KEY || !env.LEAD_NOTIFY_FROM || !env.LEAD_NOTIFY_TO) {
    console.warn("[EZD Contact] Email notification skipped: missing Resend env vars.");
    return;
  }
  const name = normalizeString(payload.name) || "Website lead";
  const interest = normalizeString(payload.interest) || "Contact form";
  const response = await fetch(RESEND_EMAILS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: env.LEAD_NOTIFY_FROM,
      to: env.LEAD_NOTIFY_TO.split(",").map((email) => email.trim()).filter(Boolean),
      subject: `[EZDesign Lead] ${name} \u2014 ${interest}`,
      html: buildLeadEmailHtml(payload),
      text: buildLeadEmailText(payload),
      reply_to: normalizeString(payload.contact) || void 0
    })
  });
  if (!response.ok) {
    const errorText = await response.text();
    console.error("[EZD Contact] Resend error:", errorText);
    throw new Error("Unable to send lead notification email.");
  }
}
__name(sendLeadNotificationEmail, "sendLeadNotificationEmail");
async function handleContactRequest(request, env) {
  const allowedOrigin = getAllowedOrigin(request, env);
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        Vary: "Origin"
      }
    });
  }
  if (request.method !== "POST") {
    return jsonResponse(
      {
        ok: false,
        message: "Method not allowed."
      },
      405,
      allowedOrigin
    );
  }
  if (!isAllowedRequestOrigin(request, env)) {
    return jsonResponse(
      {
        ok: false,
        message: "Request origin kh\xF4ng h\u1EE3p l\u1EC7."
      },
      403,
      allowedOrigin
    );
  }
  const payload = await readJsonPayload(request);
  if (!payload) {
    return jsonResponse(
      {
        ok: false,
        message: "Invalid JSON payload."
      },
      400,
      allowedOrigin
    );
  }
  const honeypot = normalizeString(payload.honeypot);
  if (honeypot) {
    return jsonResponse(
      {
        ok: true,
        message: "C\u1EA3m \u01A1n b\u1EA1n. EZDesign \u0111\xE3 nh\u1EADn \u0111\u01B0\u1EE3c th\xF4ng tin."
      },
      200,
      allowedOrigin
    );
  }
  const errors = {
    ...validatePayload(payload),
    ...validateSubmissionTiming(payload)
  };
  if (Object.keys(errors).length > 0) {
    return jsonResponse(
      {
        ok: false,
        message: "M\u1ED9t v\xE0i th\xF4ng tin ch\u01B0a h\u1EE3p l\u1EC7.",
        errors
      },
      400,
      allowedOrigin
    );
  }
  const turnstileToken = normalizeString(payload.turnstileToken);
  const isTurnstileValid = await validateTurnstileToken(
    turnstileToken,
    request,
    env
  );
  if (!isTurnstileValid) {
    return jsonResponse(
      {
        ok: false,
        message: "X\xE1c minh ch\u1ED1ng spam kh\xF4ng h\u1EE3p l\u1EC7 ho\u1EB7c \u0111\xE3 h\u1EBFt h\u1EA1n.",
        errors: {
          turnstileToken: "Vui l\xF2ng x\xE1c minh l\u1EA1i tr\u01B0\u1EDBc khi g\u1EEDi."
        }
      },
      400,
      allowedOrigin
    );
  }
  try {
    await appendLeadToGoogleSheet(payload, env);
  } catch (error) {
    console.error("[EZD Contact] Lead append failed:", error);
    return jsonResponse(
      {
        ok: false,
        message: "Form \u0111\xE3 \u0111\u01B0\u1EE3c x\xE1c minh nh\u01B0ng ch\u01B0a th\u1EC3 l\u01B0u lead. Vui l\xF2ng th\u1EED l\u1EA1i ho\u1EB7c li\xEAn h\u1EC7 EZDesign qua email/Zalo."
      },
      500,
      allowedOrigin
    );
  }
  try {
    await sendLeadNotificationEmail(payload, env);
  } catch (error) {
    console.error("[EZD Contact] Email notification failed:", error);
  }
  return jsonResponse(
    {
      ok: true,
      message: "C\u1EA3m \u01A1n b\u1EA1n. EZDesign \u0111\xE3 nh\u1EADn \u0111\u01B0\u1EE3c th\xF4ng tin v\xE0 s\u1EBD ph\u1EA3n h\u1ED3i s\u1EDBm."
    },
    200,
    allowedOrigin
  );
}
__name(handleContactRequest, "handleContactRequest");

// api/contact.ts
var onRequest = /* @__PURE__ */ __name(async (context) => {
  return handleContactRequest(context.request, context.env);
}, "onRequest");

// ../.wrangler/tmp/pages-kiwVSw/functionsRoutes-0.6019066021238356.mjs
var routes = [
  {
    routePath: "/api/contact",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest]
  }
];

// ../node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");

// ../node_modules/wrangler/templates/pages-template-worker.ts
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");

// ../node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// ../.wrangler/tmp/bundle-M5Q3e2/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_template_worker_default;

// ../node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// ../.wrangler/tmp/bundle-M5Q3e2/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=functionsWorker-0.7933077168659093.mjs.map
