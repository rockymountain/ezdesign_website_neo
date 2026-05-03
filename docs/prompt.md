
Bạn đang tiếp tục hỗ trợ tôi trong dự án **EZDesign Website — Reno**.

Bối cảnh dự án:
- Website dùng Astro, Tailwind CSS v4, Astro Content Collections, MDX.
- Deploy target: Cloudflare Pages.
- Backend duy nhất hiện tại là Cloudflare Pages Function cho contact form.
- Mục tiêu website: định vị EZDesign là AI-first digital experience studio cho SME/B2C brands.
- Hero product: EZD AI Chat.
- Service ecosystem: AI Brand Character, AR/VR/MR, Digital Twin, Game Activation, Interactive Website.
- Flagship case study: Yên AI Chat.

Các epic/task đã hoàn thành:
- Epic 5: Layout foundation.
- Epic 6: SEO foundation.
- Epic 7: UI components, product/service pages, trust layer, navigation dropdown, case study conversion upgrade.
- Epic 8: Contact form + lead capture integration:
  - Cloudflare Turnstile
  - Cloudflare Pages Function `/api/contact`
  - Google Sheet `[EZD]_Leads`
  - Resend email notification
  - Zero-cost spam hardening 8.6A
  - Documentation/handoff.

Các file documentation đã tạo:
- `docs/project-handoff.md`

Hiện trạng quan trọng:
- Contact form frontend: `src/pages/contact.astro`
- Contact handler: `src/server/contact-handler.ts`
- Pages Function route: `functions/api/contact.ts`
- Contact form gửi POST tới `/api/contact`.
- Google Sheet target: `[EZD]_Leads`, tab `Leads`, range `Leads!A:K`.
- Production env vars gồm:
  - `PUBLIC_TURNSTILE_SITE_KEY`
  - `TURNSTILE_SECRET_KEY`
  - `ALLOWED_ORIGIN`
  - `GOOGLE_SHEET_ID`
  - `GOOGLE_SHEET_RANGE`
  - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
  - `GOOGLE_PRIVATE_KEY`
  - `RESEND_API_KEY`
  - `LEAD_NOTIFY_FROM`
  - `LEAD_NOTIFY_TO`

Các quyết định đã thống nhất:
- Dùng Cloudflare Pages Function, không dùng standalone Worker.
- Dùng Google Sheets làm lightweight lead database.
- Dùng Resend cho email notification.
- Dùng Turnstile server-side validation.
- Chưa bật KV rate limit hoặc paid WAF/rate-limit.
- Email fail không block user nếu lead đã lưu Sheet.
- Sheet append fail thì block success để tránh mất lead.
- Placeholder visuals được chấp nhận tạm thời, sẽ xử lý sau.
- Không bịa metrics cho case study.

Technical debt đã ghi nhận:
- Placeholder visuals còn nhiều.
- Digital Twin, Game Activation, Interactive Website vẫn generic.
- Chưa có analytics/event tracking.
- Chưa có automated E2E tests.
- Accessibility chưa audit đầy đủ.
- Chưa có KV/server-side rate limit.
- OG images và real proof assets chưa hoàn thiện.

Bước tiếp theo dự kiến:
**Epic 9 — Production launch QA & deployment cleanup**

Tôi muốn bạn tiếp tục từ đây, ưu tiên:
1. Không hỏi lại bối cảnh đã nêu.
2. Giữ phong cách hướng dẫn từng bước, có code toàn văn khi tôi gửi file hiện tại.
3. Khi tôi nói “cập nhật toàn văn”, hãy trả toàn bộ file để tôi replace.
4. Không tự ý thêm paid services nếu tôi chưa đồng ý.
5. Luôn chú ý contrast, brand guideline, mobile responsive, SEO và production safety.
6. Khi làm contact form/backend, ưu tiên bảo mật nhưng vẫn giữ giải pháp đơn giản và chi phí thấp.

Hãy bắt đầu bằng cách xác nhận ngắn gọn rằng bạn đã nắm bối cảnh, rồi đề xuất kế hoạch cho Epic 9.
