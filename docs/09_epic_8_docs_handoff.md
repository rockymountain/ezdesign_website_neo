Ok, tiếp tục **Task 8.7 — Documentation + handoff checklist**.

Mục tiêu task này là ghi lại toàn bộ hệ thống contact form để sau này deploy, debug, bàn giao hoặc đổi người vận hành không bị mất context.

# Task 8.7 — Documentation + Handoff Checklist

Ta sẽ tạo 1 file documentation trong project:

```txt
docs/contact-form-handoff.md
```

Nếu chưa có thư mục `docs`, tạo mới:

```bash
mkdir -p docs
```

Sau đó tạo file:

```txt
docs/contact-form-handoff.md
```

với nội dung dưới đây.

````md
# EZDesign Contact Form — Handoff Checklist

## 1. Overview

Contact form của EZDesign nằm tại:

```txt
/contact/
````

Form gửi dữ liệu đến Cloudflare Pages Function:

```txt
/api/contact
```

Backend xử lý theo flow:

```txt
1. Validate method và origin
2. Parse JSON payload
3. Honeypot silent accept nếu bot điền field ẩn
4. Validate required fields
5. Validate timing guard
6. Validate Cloudflare Turnstile server-side
7. Append lead vào Google Sheet [EZD]_Leads
8. Gửi email notification qua Resend
9. Trả response JSON cho frontend
```

---

## 2. Main files

### Frontend

```txt
src/pages/contact.astro
```

Chức năng:

```txt
- Render contact form
- Render Cloudflare Turnstile widget
- Validate required fields phía client
- Build payload
- Chống double submit
- Gửi POST /api/contact
- Reset form và Turnstile sau khi gửi thành công
```

### Backend shared handler

```txt
src/server/contact-handler.ts
```

Chức năng:

```txt
- Validate payload
- Validate origin
- Validate timing guard
- Validate Turnstile token
- Append Google Sheets
- Send Resend email notification
```

### Cloudflare Pages Function route

```txt
functions/api/contact.ts
```

Route:

```txt
/api/contact
```

Expected export:

```ts
import {
  handleContactRequest,
  type ContactEnv,
} from '../../src/server/contact-handler';

export const onRequest: PagesFunction<ContactEnv> = async (context) => {
  return handleContactRequest(context.request, context.env);
};
```

### Contact form data contract

```txt
src/data/contact-form-contract.json
```

Chức năng:

```txt
- Mô tả field contract
- Google Sheets column contract
- Validation message
```

---

## 3. Payload contract

Frontend gửi payload dạng:

```json
{
  "name": "Nguyễn An",
  "contact": "an@example.com",
  "interest": "EZD AI Chat",
  "industry": "Spa / Salon",
  "website": "https://example.com",
  "message": "Tôi muốn tư vấn AI Chat cho website.",
  "sourcePath": "/contact/",
  "submittedAt": "2026-05-02T10:30:00.000Z",
  "formStartedAt": "2026-05-02T10:29:45.000Z",
  "userAgent": "Mozilla/5.0...",
  "honeypot": "",
  "turnstileToken": "cloudflare-turnstile-token"
}
```

Required fields:

```txt
name
contact
interest
message
submittedAt
formStartedAt
turnstileToken
```

Optional fields:

```txt
industry
website
sourcePath
userAgent
honeypot
```

---

## 4. Google Sheet setup

Google Sheet name:

```txt
[EZD]_Leads
```

Required tab name:

```txt
Leads
```

Required range:

```txt
Leads!A:K
```

Header row:

```txt
Submitted At
Name
Contact
Interest
Industry
Website
Message
Source Path
User Agent
Status
Notes
```

The service account email must be shared into the Google Sheet with:

```txt
Editor permission
```

---

## 5. Cloudflare environment variables

Set these in:

```txt
Cloudflare Dashboard
→ Workers & Pages
→ Project
→ Settings
→ Variables and Secrets
```

### Production variables

```env
PUBLIC_TURNSTILE_SITE_KEY="production_site_key_from_cloudflare_turnstile"

TURNSTILE_SECRET_KEY="production_secret_key_from_cloudflare_turnstile"
ALLOWED_ORIGIN="https://ezdesign.vn"

GOOGLE_SHEET_ID="spreadsheet_id_of_[EZD]_Leads"
GOOGLE_SHEET_RANGE="Leads!A:K"
GOOGLE_SERVICE_ACCOUNT_EMAIL="service-account@project.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

RESEND_API_KEY="re_xxxxxxxxx"
LEAD_NOTIFY_FROM="EZDesign Website <leads@notification.ezdesign.vn>"
LEAD_NOTIFY_TO="info@ezdesign.vn"
```

Recommended secret variables:

```txt
TURNSTILE_SECRET_KEY
GOOGLE_SHEET_ID
GOOGLE_SERVICE_ACCOUNT_EMAIL
GOOGLE_PRIVATE_KEY
RESEND_API_KEY
```

Plaintext variables are acceptable for:

```txt
PUBLIC_TURNSTILE_SITE_KEY
ALLOWED_ORIGIN
GOOGLE_SHEET_RANGE
LEAD_NOTIFY_FROM
LEAD_NOTIFY_TO
```

---

## 6. Local `.dev.vars`

Create local file:

```txt
.dev.vars
```

Example for Wrangler Pages local test:

```env
TURNSTILE_SECRET_KEY="1x0000000000000000000000000000000AA"
ALLOWED_ORIGIN="http://localhost:8788"

GOOGLE_SHEET_ID="PASTE_SPREADSHEET_ID_HERE"
GOOGLE_SHEET_RANGE="Leads!A:K"
GOOGLE_SERVICE_ACCOUNT_EMAIL="service-account@project.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

RESEND_API_KEY="re_xxxxxxxxx"
LEAD_NOTIFY_FROM="EZDesign Website <leads@notification.ezdesign.vn>"
LEAD_NOTIFY_TO="info@ezdesign.vn"
```

Do not commit `.dev.vars`.

`.gitignore` should include:

```gitignore
.dev.vars
.dev.vars.*
.env
.env.*
```

---

## 7. Cloudflare Turnstile setup

Frontend uses:

```txt
PUBLIC_TURNSTILE_SITE_KEY
```

Backend validates with:

```txt
TURNSTILE_SECRET_KEY
```

Turnstile client widget alone is not enough. Token must be verified server-side in `contact-handler.ts`.

Local test keys may be used for development.

Production must use real site key and secret key from Cloudflare Turnstile dashboard.

---

## 8. Resend setup

Required:

```txt
RESEND_API_KEY
LEAD_NOTIFY_FROM
LEAD_NOTIFY_TO
```

Production sender should use a verified domain.

Recommended sender:

```txt
EZDesign Website <leads@notification.ezdesign.vn>
```

Notification recipient:

```txt
info@ezdesign.vn
```

If email sending fails after Google Sheet append succeeds, backend still returns success to the user. The lead is not lost because it has already been saved in Google Sheets.

---

## 9. Spam protection layers

Current zero-cost spam protection:

```txt
1. Cloudflare Turnstile server-side validation
2. Honeypot field
3. Minimum form fill time
4. submittedAt freshness guard
5. Hard origin check
6. Frontend duplicate submit guard
```

Not currently enabled:

```txt
- KV rate limit
- Paid Cloudflare WAF/rate limit rules
```

Reason:

```txt
The site is informational and only accepts demo requests. Current risk is acceptable. If an attack happens, temporary shutdown of the form/API is an acceptable emergency protection layer.
```

---

## 10. Timing guard

Backend requires:

```txt
submittedAt must be within 10 minutes of server time
formStartedAt must exist
submittedAt - formStartedAt must be at least 3.5 seconds
```

If users report valid submissions failing, check:

```txt
- Browser clock is extremely wrong
- formStartedAt missing from payload
- page restored from long inactive tab
```

---

## 11. Local QA command

Build site:

```bash
npm run build
```

Run Cloudflare Pages local:

```bash
npx wrangler pages dev dist --compatibility-date=2026-05-02 --port 8788
```

Open:

```txt
http://localhost:8788/contact/
```

Important: API route `/api/contact` only works through Wrangler Pages local. It does not run through plain `astro dev`.

---

## 12. QA checklist

### Frontend validation

```txt
[ ] Submit empty form shows inline errors
[ ] Website without https:// shows website error
[ ] Missing Turnstile shows Turnstile error
[ ] Double click submit sends only one request
[ ] Success resets form
[ ] Success resets Turnstile
[ ] Production does not log lead payload in browser console
```

### Backend validation

```txt
[ ] GET /api/contact returns 405
[ ] POST invalid JSON returns 400
[ ] POST empty JSON returns 400
[ ] Origin mismatch returns 403
[ ] Honeypot filled returns fake success and does not append sheet
[ ] Turnstile invalid returns 400 and does not append sheet
[ ] Valid submit appends Google Sheet
[ ] Valid submit sends email
```

### Google Sheets

```txt
[ ] New row appears in [EZD]_Leads → Leads tab
[ ] Status defaults to New
[ ] Notes is blank
[ ] Submitted At is populated
[ ] Source Path is populated
```

### Email

```txt
[ ] Email arrives at LEAD_NOTIFY_TO
[ ] Subject format: [EZDesign Lead] Name — Interest
[ ] HTML email includes name/contact/interest/industry/website/source/message
[ ] Text fallback exists
```

---

## 13. Curl tests

### Method guard

```bash
curl -i https://ezdesign.vn/api/contact
```

Expected:

```txt
405
```

### Empty payload

```bash
curl -i -X POST https://ezdesign.vn/api/contact \
  -H "Content-Type: application/json" \
  -d '{}'
```

Expected:

```txt
400
```

### Honeypot local test

```bash
curl -i -X POST http://localhost:8788/api/contact \
  -H "Content-Type: application/json" \
  -H "Origin: http://localhost:8788" \
  -d '{
    "name": "Bot",
    "contact": "bot@example.com",
    "interest": "EZD AI Chat",
    "message": "Spam",
    "submittedAt": "2026-05-02T10:30:00.000Z",
    "formStartedAt": "2026-05-02T10:29:50.000Z",
    "honeypot": "filled",
    "turnstileToken": "dummy"
  }'
```

Expected:

```txt
200
No Google Sheet append
No email
```

---

## 14. Troubleshooting

### Error shown to user

```txt
Form đã được xác minh nhưng chưa thể lưu lead. Vui lòng thử lại hoặc liên hệ EZDesign qua email/Zalo.
```

Meaning:

```txt
Turnstile passed, but Google Sheet append failed.
```

Check Cloudflare logs for:

```txt
[EZD Contact] Google token error
[EZD Contact] Google Sheets append error
```

Common causes:

```txt
- GOOGLE_PRIVATE_KEY format wrong
- GOOGLE_SERVICE_ACCOUNT_EMAIL wrong
- Service account not shared into Google Sheet
- GOOGLE_SHEET_ID wrong
- Tab name is not Leads
- GOOGLE_SHEET_RANGE wrong
```

### Google token error

Check:

```txt
- GOOGLE_PRIVATE_KEY includes BEGIN PRIVATE KEY
- GOOGLE_PRIVATE_KEY uses literal \n if set as one line
- GOOGLE_SERVICE_ACCOUNT_EMAIL matches service account
```

Recommended private key format in Cloudflare:

```txt
-----BEGIN PRIVATE KEY-----\nMIIEv...\n-----END PRIVATE KEY-----\n
```

### Google Sheets append 403

Usually:

```txt
Service account does not have Editor access to the Google Sheet.
```

Fix:

```txt
Share [EZD]_Leads to GOOGLE_SERVICE_ACCOUNT_EMAIL with Editor permission.
```

### Google Sheets append 404

Usually:

```txt
Wrong GOOGLE_SHEET_ID.
```

Fix:

```txt
Use ID from https://docs.google.com/spreadsheets/d/<ID>/edit
```

### Google Sheets range error

Usually:

```txt
Tab is not named Leads.
```

Fix:

```txt
Rename tab to Leads or update GOOGLE_SHEET_RANGE.
```

### Turnstile invalid

Check:

```txt
- PUBLIC_TURNSTILE_SITE_KEY is production site key
- TURNSTILE_SECRET_KEY is matching production secret
- Domain is allowed in Turnstile settings
```

### Email not received

Check:

```txt
- RESEND_API_KEY valid
- LEAD_NOTIFY_FROM domain is verified
- LEAD_NOTIFY_TO correct
- Resend logs
- Spam folder
```

Email failure does not block user success if Google Sheet append succeeded.

---

## 15. Emergency shutdown options

If spam or abuse happens:

### Option A — disable frontend submit

Temporarily disable the submit button or remove the form from `/contact/`.

### Option B — block API

Return 503 early in `handleContactRequest`.

Example:

```ts
return jsonResponse(
  {
    ok: false,
    message: 'Contact form is temporarily unavailable.',
  },
  503,
  allowedOrigin,
);
```

### Option C — rotate Turnstile keys

Create new Turnstile keys and update Cloudflare variables.

### Option D — remove Google/Resend env vars

This will cause backend to fail safely instead of storing/sending leads.

---

## 16. Deployment checklist

Before deploy:

```txt
[ ] npm run build pass
[ ] wrangler pages dev dist pass
[ ] .dev.vars not committed
[ ] Production variables set
[ ] Production secrets set
[ ] Google Sheet shared with service account
[ ] Resend sender verified
[ ] Turnstile domain allowed
```

After deploy:

```txt
[ ] Open https://ezdesign.vn/contact/
[ ] Submit valid test lead
[ ] Confirm Google Sheet row
[ ] Confirm email notification
[ ] Confirm browser console has no payload log
[ ] Confirm /api/contact GET returns 405
[ ] Confirm empty POST returns 400
```

---

## 17. Current known decisions

```txt
- No KV rate limit in current phase
- No paid Cloudflare WAF/rate limit
- Honeypot submissions return fake success
- Email failure does not block success if Sheet append succeeded
- Sheet append failure blocks success to avoid losing lead
- Production should not log lead payload in browser console
```

````

Sau khi tạo doc, commit:

```bash
git add docs/contact-form-handoff.md
git commit -m "docs: add contact form handoff checklist"
````

Checklist hoàn tất Task 8.7:

```txt
[ ] Có docs/contact-form-handoff.md
[ ] Tài liệu ghi rõ file liên quan
[ ] Tài liệu ghi rõ env vars
[ ] Tài liệu ghi rõ Google Sheet setup
[ ] Tài liệu ghi rõ Turnstile setup
[ ] Tài liệu ghi rõ Resend setup
[ ] Tài liệu có QA checklist
[ ] Tài liệu có troubleshooting
[ ] Tài liệu có emergency shutdown options
```

Sau 8.7, Epic 8 có thể xem là **feature-complete**. Bước tiếp theo hợp lý là **Epic 9 — Production launch QA & deployment cleanup**.
