# EZDesign Website — Project Handoff & Technical Debt Inventory

## 0. Executive Summary — EZDesign Website Reno

### 0.1. Mục tiêu dự án

Dự án **EZDesign Website Reno** được thực hiện nhằm tái cấu trúc website EZDesign từ một website giới thiệu dịch vụ cơ bản thành một nền tảng truyền thông và chuyển đổi rõ ràng hơn cho định vị mới của EZDesign:

**AI-first digital experience studio cho SME/B2C brands.**

Trọng tâm của website mới là:

```txt
- Định vị EZDesign rõ hơn quanh AI, interactive experience và brand assistant.
- Biến EZD AI Chat thành hero product.
- Tổ chức lại hệ sinh thái dịch vụ thành các landing page có cấu trúc.
- Tăng độ tin cậy thông qua case study, trust layer và visual proof.
- Thiết lập SEO foundation.
- Thiết lập contact form có khả năng nhận lead thật.
```

Kết quả hiện tại: website đã có nền tảng UI, content, SEO và lead capture đủ tốt để bước vào giai đoạn **Production Launch QA**.

---

### 0.2. Phạm vi đã hoàn thành

Trong giai đoạn này, dự án đã hoàn thành các nhóm công việc chính sau:

#### Layout & Design System Foundation

Website đã được chuẩn hóa với hệ thống layout và component dùng chung:

```txt
- BaseLayout
- Header / Footer
- CTASection
- SectionHeader
- ButtonLink
- Card
- FAQAccordion
- PricingGrid
- FeatureGrid
- FeatureSpotlight
```

Các token thương hiệu, typography, màu sắc, contrast, CTA và spacing đã được điều chỉnh theo hướng nhất quán hơn với brand guideline và mockup mới.

#### SEO Foundation

Website đã có nền tảng SEO cơ bản:

```txt
- Title / description / canonical
- Open Graph / Twitter Card
- Robots meta
- Sitemap / robots setup
- JSON-LD structured data
- Breadcrumb schema
- Service schema
- Article schema
```

Các dynamic routes cho service, case study và insights đã được xử lý để hoạt động ổn định.

#### Page System & Content Structure

Nội dung nhiều trang đã được tách ra JSON/content collection để dễ bảo trì:

```txt
- Homepage
- About
- Contact
- EZD AI Chat
- AI Brand Character
- AR/VR/MR
- Navigation
- Contact form contract
```

Các trang quan trọng hiện có:

```txt
/
/ezd-ai-chat/
/about/
/contact/
/services/ai-brand-character/
/services/ar-vr-mr/
/services/digital-twin/
/services/game-activation/
/services/interactive-website/
/case-studies/yen-ai-chat/
/insights/
/insights/ai-brand-assistant-la-gi/
```

#### Product & Service Landing Pages

Trang **EZD AI Chat** đã được refactor theo hướng product-led landing page, có:

```txt
- Hero product section
- Pain points
- Feature spotlight
- Use cases
- Pricing
- FAQ
- Conversion CTA
```

Trang **AI Brand Character** đã được nâng cấp thành service-specific page riêng, có:

```txt
- Character-first hero
- Capability showcase tương tác
- Use case visual cards
- Case Study Yên AI Chat banner
- Related services grid
```

Trang **AR/VR/MR** cũng đã được nâng cấp riêng, có:

```txt
- AR/VR/MR hero visual
- Experience type sections
- Use cases including Virtual Showroom
- Process section
- FAQ accordion
```

Các service còn lại vẫn dùng generic service layout nhưng đã có visual proof placeholder.

#### Case Study Conversion Upgrade

Case study **Yên AI Chat** đã được nâng từ bài kể case đơn thuần thành một sales/conversion asset:

```txt
- Disclosure
- Key results
- Challenge
- Solution
- Visual proof placeholder
- Handoff flow
- Highlights
- Testimonial
- Related services
- Strong final CTA
```

Không sử dụng metric giả. Các phần visual proof và metrics được giữ ở mức an toàn cho đến khi có asset/nội dung được phép công khai.

#### Contact Form & Lead Capture Integration

Contact form đã được tích hợp end-to-end:

```txt
Frontend /contact/
→ Cloudflare Turnstile
→ /api/contact
→ Cloudflare Pages Function
→ Server-side validation
→ Google Sheets [EZD]_Leads
→ Resend email notification
```

Các lớp bảo vệ miễn phí hiện có:

```txt
- Cloudflare Turnstile server-side validation
- Honeypot
- Minimum form fill time
- submittedAt freshness guard
- Hard origin check
- Duplicate submit guard
```

Dự án thống nhất chưa bật KV rate limit hoặc paid WAF/rate limit ở giai đoạn này để giữ chi phí 0 đồng và tránh over-engineering.

---

### 0.3. Kết quả đạt được

Website hiện đã chuyển từ trạng thái “có thông tin” sang trạng thái **có cấu trúc bán hàng rõ ràng hơn**.

Các cải thiện chính:

```txt
- Thông điệp thương hiệu rõ hơn.
- Hero product EZD AI Chat nổi bật hơn.
- Dịch vụ AI Brand Character và AR/VR/MR có page riêng thuyết phục hơn.
- Case study Yên AI Chat có khả năng hỗ trợ conversion tốt hơn.
- Navigation có dropdown tới sub-pages.
- Contact form có thể nhận lead thật.
- SEO foundation đã sẵn sàng để launch QA.
- Documentation và handoff checklist đã được chuẩn bị.
```

---

### 0.4. Kiến trúc hiện tại

Website hiện dùng Astro làm frontend framework, static output, deploy dự kiến qua Cloudflare Pages.

Backend chỉ dùng cho contact form thông qua Cloudflare Pages Function:

```txt
functions/api/contact.ts
src/server/contact-handler.ts
```

Dữ liệu lead được lưu vào:

```txt
Google Sheet: [EZD]_Leads
Tab: Leads
Range: Leads!A:K
```

Email notification gửi qua:

```txt
Resend
```

Các secrets/env production chính gồm:

```txt
PUBLIC_TURNSTILE_SITE_KEY
TURNSTILE_SECRET_KEY
ALLOWED_ORIGIN
GOOGLE_SHEET_ID
GOOGLE_SHEET_RANGE
GOOGLE_SERVICE_ACCOUNT_EMAIL
GOOGLE_PRIVATE_KEY
RESEND_API_KEY
LEAD_NOTIFY_FROM
LEAD_NOTIFY_TO
```

---

### 0.5. Các quyết định kỹ thuật quan trọng

Một số quyết định đã được thống nhất trong quá trình thực hiện:

```txt
- Dùng Cloudflare Pages Function thay vì standalone Worker.
- Dùng Google Sheets làm lightweight lead database.
- Dùng Resend cho email notification.
- Dùng Cloudflare Turnstile để giảm spam.
- Không bật KV rate limit ở giai đoạn hiện tại.
- Không dùng paid Cloudflare WAF/rate limit hiện tại.
- Giữ placeholder visuals cho đến khi có asset thật.
- Không bịa số liệu case study.
- Email fail không block user nếu lead đã được lưu vào Sheet.
- Sheet append fail sẽ block success để tránh mất lead.
```

---

### 0.6. Technical debt còn lại

Các technical debt chính đã được ghi nhận:

```txt
1. Placeholder visuals
- AI character
- AR/VR/MR
- Case study visual proof
- About logo/testimonial
- Generic service visuals

2. Một số service pages còn generic
- Digital Twin
- Game Activation
- Interactive Website

3. Chưa có analytics/event tracking
- CTA clicks
- Form funnel
- Pricing CTA
- Feature interactions

4. Chưa có automated E2E tests
- Hiện QA vẫn chủ yếu bằng manual checklist

5. Accessibility chưa audit đầy đủ
- Đã có semantic/focus basics
- Chưa audit toàn site bằng tool

6. Contact form chưa có server-side rate limit
- Đã thống nhất chấp nhận ở giai đoạn hiện tại

7. OG images và real assets chưa hoàn thiện

8. Một số nội dung proof/social proof còn placeholder
```

Phần lớn technical debt hiện tại được phân loại là **post-launch enhancement**, không phải launch blocker, miễn là stakeholder chấp nhận các placeholder còn lại.

---

### 0.7. Rủi ro production cần chú ý

Các rủi ro chính trước khi launch:

```txt
1. Google Sheets append lỗi ở production
- Thường do private key format, service account permission, sheet ID hoặc tab name.

2. Turnstile production mismatch
- Site key/secret không khớp hoặc domain chưa được allow.

3. Resend email không gửi
- Domain chưa verify, API key sai hoặc email vào spam.

4. ALLOWED_ORIGIN sai
- Có thể gây 403 ở production.

5. Placeholder visuals tạo cảm giác website chưa hoàn thiện
- Cần stakeholder chấp nhận hoặc thay asset trước launch.
```

---

### 0.8. Tài liệu đã chuẩn bị

Hai tài liệu handoff chính nên có trong repo:

```txt
docs/contact-form-handoff.md
docs/project-handoff.md
```

Trong đó:

```txt
contact-form-handoff.md
→ Ghi rõ setup, env vars, Google Sheet, Turnstile, Resend, QA và troubleshooting cho contact form.

project-handoff.md
→ Ghi lại toàn bộ kiến trúc, routes, component inventory, decisions, technical debt, production risks và launch checklist.
```

---

### 0.9. Trạng thái sẵn sàng

Dự án hiện sẵn sàng bước vào:

```txt
Epic 9 — Production launch QA & deployment cleanup
```

Điều kiện cần kiểm tra trước khi public launch:

```txt
- npm run check pass
- npm run build pass
- Cloudflare Pages deployment pass
- All key routes live
- /api/contact reachable
- Valid contact form saves lead to [EZD]_Leads
- Valid contact form sends email notification
- Turnstile production works
- Header/mobile navigation works
- SEO metadata and sitemap verified
- No severe mobile overflow
- Stakeholders accept remaining placeholders
```

---

### 0.10. Khuyến nghị tiếp theo

Thứ tự tiếp theo được đề xuất:

```txt
1. Epic 9 — Production launch QA & deployment cleanup
2. Epic 10 — Analytics & conversion tracking
3. Epic 11 — Asset replacement & proof upgrade
4. Epic 12 — Remaining service-specific pages
```

Trong đó Epic 9 nên tập trung vào:

```txt
- Route smoke test
- Contact form production QA
- SEO production QA
- Mobile/responsive QA
- Accessibility quick audit
- Performance check
- Cloudflare deployment settings cleanup
- Launch go/no-go checklist
```
---

### 0.11. Cây thư mục

```txt
.
├── .gitignore
├── .prettierrc
├── astro.config.mjs
├── docs
│   ├── 00_summary.md
│   ├── 01_BA.md
│   ├── 02_BA_alignment.md
│   ├── 03_ezdesign-reno-project-plan-v1.md
│   ├── 04_sprint_1.md
│   ├── 05_epic_7_plan.md
│   ├── 06_epic_7_qaqc.md
│   ├── 07_ui_qa_remediation_plan.md
│   ├── 08_epic_7.10.5_ai_brand_character.md
│   ├── 09_epic_8_docs_handoff.md
│   ├── project-handoff.md
│   ├── prompt.md
│   └── seo-qa-checklist.md
├── functions
│   ├── api
│   │   ├── contact.ts
│   │   └── tsconfig.json
│   └── types.d.ts
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── favicon.svg
│   └── robots.txt
├── README.md
├── src
│   ├── assets
│   │   └── .gitkeep
│   ├── components
│   │   ├── case-studies
│   │   │   └── .gitkeep
│   │   ├── common
│   │   │   ├── BrandMark.astro
│   │   │   ├── ButtonLink.astro
│   │   │   ├── Card.astro
│   │   │   ├── CTASection.astro
│   │   │   ├── FAQAccordion.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Header.astro
│   │   │   ├── SectionHeader.astro
│   │   │   └── .gitkeep
│   │   ├── ezd-ai-chat
│   │   │   └── .gitkeep
│   │   ├── forms
│   │   │   └── .gitkeep
│   │   ├── home
│   │   │   └── .gitkeep
│   │   ├── pages
│   │   │   ├── AIBrandCharacterPage.astro
│   │   │   └── ARVRMRPage.astro
│   │   ├── seo
│   │   │   ├── JsonLd.astro
│   │   │   ├── SEO.astro
│   │   │   └── .gitkeep
│   │   ├── services
│   │   │   └── .gitkeep
│   │   ├── sections
│   │   │   ├── AICharacterCapabilityShowcase.astro
│   │   │   ├── AICharacterCaseBanner.astro
│   │   │   ├── AICharacterHero.astro
│   │   │   ├── AIChatPreview.astro
│   │   │   ├── ARVRExperienceGrid.astro
│   │   │   ├── ARVRHero.astro
│   │   │   ├── ARVRUseCaseShowcase.astro
│   │   │   ├── CaseStudyHandoffFlow.astro
│   │   │   ├── CaseStudyResults.astro
│   │   │   ├── CaseStudyVisualProof.astro
│   │   │   ├── FAQGrid.astro
│   │   │   ├── FeatureGrid.astro
│   │   │   ├── FeatureSpotlight.astro
│   │   │   ├── PainPointGrid.astro
│   │   │   ├── PricingGrid.astro
│   │   │   ├── ProductHero.astro
│   │   │   ├── RelatedServicesGrid.astro
│   │   │   ├── ServiceVisualPanel.astro
│   │   │   └── UseCaseGrid.astro
│   │   └── widget
│   │       └── .gitkeep
│   ├── content
│   │   ├── case-studies
│   │   │   ├── yen-ai-chat.mdx
│   │   │   └── .gitkeep
│   │   ├── insights
│   │   │   ├── ai-brand-assistant-la-gi.mdx
│   │   │   └── .gitkeep
│   │   └── services
│   │       ├── ai-brand-character.mdx
│   │       ├── ar-vr-mr.mdx
│   │       ├── digital-twin.mdx
│   │       ├── game-activation.mdx
│   │       ├── interactive-website.mdx
│   │       └── .gitkeep
│   ├── content.config.ts
│   ├── data
│   │   ├── about.json
│   │   ├── ai-brand-character-page.json
│   │   ├── ar-vr-mr-page.json
│   │   ├── contact-form-contract.json
│   │   ├── contact.json
│   │   ├── ezd-ai-chat.json
│   │   ├── home.json
│   │   ├── industries.json
│   │   ├── insights-page.json
│   │   ├── navigation.json
│   │   ├── pricing.json
│   │   ├── services.json
│   │   └── site.json
│   ├── layouts
│   │   ├── BaseLayout.astro
│   │   └── .gitkeep
│   ├── pages
│   │   ├── about.astro
│   │   ├── case-studies
│   │   │   ├── [slug].astro
│   │   │   └── .gitkeep
│   │   ├── contact.astro
│   │   ├── ezd-ai-chat.astro
│   │   ├── insights
│   │   │   ├── [slug].astro
│   │   │   ├── index.astro
│   │   │   └── .gitkeep
│   │   ├── index.astro
│   │   ├── services
│   │   │   ├── [slug].astro
│   │   │   └── .gitkeep
│   │   └── .gitkeep
│   ├── scripts
│   ├── server
│   │   └── contact-handler.ts
│   ├── styles
│   │   └── global.css
│   ├── utils
│   │   ├── routes.ts
│   │   ├── schema.ts
│   │   ├── seo.ts
│   │   └── tracking.ts
│   └── workers
│       └── contact.ts
├── tsconfig.json
└── wrangler.toml
```

---

### 0.12. Kết luận

Giai đoạn Reno đã hoàn thành phần lớn nền tảng quan trọng của website EZDesign: UI system, SEO foundation, content architecture, product/service landing pages, case study conversion flow và contact form lead capture.

Website hiện chưa phải bản “final polished brand campaign” vì vẫn còn placeholder visuals và một số service pages generic, nhưng đã đủ nền tảng để tiến vào **Production Launch QA** và có thể launch nếu các kiểm tra production quan trọng pass.

Trọng tâm trước launch không còn là xây thêm feature mới, mà là:

```txt
- Xác nhận production contact form hoạt động.
- Rà lại toàn bộ routes/SEO/responsive.
- Chốt placeholder nào được chấp nhận.
- Cleanup deployment/env.
- Chuẩn bị go/no-go decision.
```

---

## 1. Project overview

Project: **EZDesign Website — Reno**

Mục tiêu của giai đoạn hiện tại là refactor website EZDesign theo hướng:

- Có foundation layout/component rõ ràng.
- Có design system nhẹ dựa trên EZD Brand Guideline.
- Có SEO foundation cơ bản.
- Có các page quan trọng cho sản phẩm/dịch vụ/case study.
- Có contact form hoạt động thật với Cloudflare Pages Function, Cloudflare Turnstile, Google Sheets và email notification.
- Chuẩn bị website sẵn sàng cho Production Launch QA.

Website hiện tại định vị EZDesign theo hướng:

- AI-first digital experience studio.
- Hero product: **EZD AI Chat**.
- Service ecosystem: AI Brand Character, AR/VR/MR, Digital Twin, Game Activation, Interactive Website.
- Case study flagship: **Yên AI Chat**.

---

## 2. Current stack

### Frontend

- Astro
- Astro Content Collections
- MDX
- Tailwind CSS v4
- Custom CSS tokens trong `src/styles/global.css`
- Static output

### Backend / serverless

- Cloudflare Pages Functions
- Shared handler tại `src/server/contact-handler.ts`
- API route:

```txt
/api/contact
```

### Integrations

* Cloudflare Turnstile
* Google Sheets API
* Google Service Account
* Resend email API

### Deployment target

* Cloudflare Pages

---

## 3. Important commands

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Type/check

```bash
npm run check
```

### Cloudflare Pages local test

```bash
npm run build
npx wrangler pages dev dist --compatibility-date=2026-05-02 --port 8788
```

Important:

```txt
/api/contact only works through wrangler pages dev or Cloudflare Pages deployment.
It does not run through plain astro dev.
```

---

## 4. Folder structure summary

```txt
src/
  components/
    common/
    pages/
    sections/
  content/
    case-studies/
    insights/
    services/
  data/
  layouts/
  pages/
  server/
  styles/
  utils/

functions/
  api/
    contact.ts

docs/
```

Key files:

```txt
src/layouts/BaseLayout.astro
src/styles/global.css
src/components/common/Header.astro
src/components/common/Footer.astro
src/components/common/CTASection.astro
src/components/common/ButtonLink.astro
src/components/common/Card.astro
src/components/common/SectionHeader.astro
src/pages/contact.astro
src/server/contact-handler.ts
functions/api/contact.ts
```

---

## 5. Completed epics summary

### Epic 5 — Layout foundation

Completed:

* Created `BaseLayout.astro`.
* Created shared Header and Footer.
* Refactored pages to use BaseLayout.
* Created CTASection component.
* Created SectionHeader component.

Outcome:

```txt
Website has consistent page shell, global metadata support, header/footer and reusable CTA/header sections.
```

---

### Epic 6 — SEO foundation

Completed:

* Added SEO props into BaseLayout.
* Added meta title/description/canonical.
* Added Open Graph and Twitter meta.
* Added sitemap and robots setup.
* Added basic JSON-LD structured data support.
* Added SEO QA checklist.

Important files:

```txt
src/layouts/BaseLayout.astro
src/utils/schema.ts
astro.config.mjs
```

Known SEO decisions:

* Dynamic pages use content collection metadata.
* JSON-LD is passed through `jsonLd` prop to BaseLayout.
* `sitemap.xml` and `robots.txt` are part of launch QA.
* Draft/private content should be noindex if implemented.

---

### Epic 7 — UI Components / Page Section Components

Completed major tasks:

* Brand token alignment and contrast fixes.
* Montserrat typography system.
* UI primitives:

  * BrandMark
  * ButtonLink
  * Card
* ProductHero and AIChatPreview.
* Section grids:

  * PainPointGrid
  * FeatureGrid
  * UseCaseGrid
* FeatureSpotlight component.
* PricingGrid and FAQGrid.
* Page content JSON extraction.
* Refactor `/ezd-ai-chat/` to match mockup direction.
* Apply direction lightly to homepage/shared pages.
* About + Contact polish.
* Dynamic service/case/insight page polish.
* CTASection brand correction.
* Navigation dropdown for service/case sub-pages.
* Contact form UX readiness.
* About trust layer.
* Service visual proof system.
* AI Brand Character service-specific page.
* Case Study conversion upgrade.
* AR/VR service-specific polish.

Outcome:

```txt
Website has a stronger design system, better conversion flow, service-specific visual systems for key pages, and improved trust/CTA structure.
```

---

### Epic 8 — Contact Form & Lead Capture Integration

Completed:

* Contact form data contract.
* Cloudflare Turnstile integration.
* Cloudflare Pages Function endpoint.
* Google Sheets append integration.
* Resend email notification.
* Production env/deployment QA checklist.
* Spam hardening with zero-cost approach.
* Contact form handoff documentation.

Important files:

```txt
src/pages/contact.astro
src/server/contact-handler.ts
functions/api/contact.ts
src/data/contact-form-contract.json
docs/contact-form-handoff.md
```

Outcome:

```txt
Contact form is production-ready pending final env/launch verification.
```

---

## 6. Current routes inventory

### Static pages

```txt
/
/ezd-ai-chat/
/about/
/contact/
/insights/
```

### Dynamic service pages

```txt
/services/ai-brand-character/
/services/ar-vr-mr/
/services/digital-twin/
/services/game-activation/
/services/interactive-website/
```

### Dynamic case study pages

```txt
/case-studies/yen-ai-chat/
```

### Dynamic insight pages

```txt
/insights/ai-brand-assistant-la-gi/
```

---

## 7. Page status inventory

### Homepage `/`

Status:

```txt
Polished enough for current phase.
Uses shared components and JSON content.
Needs final production QA.
```

Known debt:

```txt
May need stronger real visual proof/assets before public brand launch.
```

---

### Product page `/ezd-ai-chat/`

Status:

```txt
Strong product-led landing page.
Pricing, FAQ, FeatureSpotlight, visual direction, CTA and content JSON separation are implemented.
```

Important decisions:

* Hero headline uses “nhân viên tư vấn”.
* Growth pricing plan is recommended/highlighted.
* FeatureSpotlight uses arrows only, no tab row.
* FeatureSpotlight no longer auto-scrolls user into section.

Known debt:

```txt
AIChatPreview is still mock/preview. Production chat widget will replace it later.
Placeholder visuals remain in several sections.
```

---

### About `/about/`

Status:

```txt
Trust layer added.
Includes social proof placeholder, testimonial placeholder, team/human touch, EZD AI Chat spotlight and final CTA.
```

Known debt:

```txt
Social proof logos and testimonials are placeholders.
Needs real team/client assets before full brand launch if available.
```

---

### Contact `/contact/`

Status:

```txt
Production-ready form UX and backend integration pending final production validation.
```

Implemented:

* Client validation.
* Cloudflare Turnstile.
* Honeypot.
* Duplicate submit guard.
* formStartedAt timing payload.
* API submit to `/api/contact`.
* Google Sheet append.
* Resend email notification.

Known debt:

```txt
No KV/server-side rate limit.
No paid Cloudflare WAF/rate limit.
This is an accepted decision for current phase.
```

---

### Services — generic

Generic service layout remains for:

```txt
/services/digital-twin/
/services/game-activation/
/services/interactive-website/
```

Status:

```txt
Functional, SEO-ready, has ServiceVisualPanel placeholder.
```

Known debt:

```txt
These pages are still generic compared with AI Brand Character and AR/VR/MR.
They should receive service-specific polish in later epics.
```

---

### Service — AI Brand Character

Route:

```txt
/services/ai-brand-character/
```

Status:

```txt
Custom service-specific landing page implemented.
```

Implemented sections:

* Custom hero with character preview.
* Problem section.
* Capability showcase with interactive tabs.
* Use cases visual cards.
* Yên AI Chat case banner.
* FAQ from content collection.
* Related services grid.
* Final CTA.

Important fix:

```txt
Capability tabs use aria-selected state to avoid selected/hover state getting stuck.
```

Known debt:

```txt
Character image is placeholder.
No real character asset yet.
No pricing/implementation scope section yet.
```

---

### Service — AR/VR/MR

Route:

```txt
/services/ar-vr-mr/
```

Status:

```txt
Custom service-specific page implemented.
```

Implemented sections:

* AR/VR/MR hero visual.
* Experience types: AR Activation, VR Showcase, Mixed Reality Concept.
* Use case showcase including Virtual Showroom.
* Process section.
* FAQ accordion.
* Final CTA.

Known debt:

```txt
All visuals are placeholders.
No real WebAR demo URL yet.
No actual 3D/video asset.
```

---

### Case Study — Yên AI Chat

Route:

```txt
/case-studies/yen-ai-chat/
```

Status:

```txt
Conversion-upgraded case study page.
```

Implemented:

* Disclosure section.
* Key Results.
* Overview/MDX content.
* Challenge.
* Solution.
* Visual Proof placeholder.
* Handoff Flow.
* Highlights.
* Testimonial.
* Related Services.
* Strong final CTA.

Important fix:

```txt
Testimonial contrast was corrected to avoid low contrast text on soft background.
```

Known debt:

```txt
Metrics are intentionally not public/fake.
Visual proof remains placeholder unless approved assets are provided.
```

---

### Insights

Routes:

```txt
/insights/
/insights/ai-brand-assistant-la-gi/
```

Status:

```txt
Content collection and dynamic slug route fixed.
Basic listing/detail page implemented.
```

Known debt:

```txt
Need more articles and stronger internal linking over time.
```

---

## 8. Component inventory

### Common components

```txt
src/components/common/BrandMark.astro
src/components/common/ButtonLink.astro
src/components/common/Card.astro
src/components/common/CTASection.astro
src/components/common/Footer.astro
src/components/common/Header.astro
src/components/common/SectionHeader.astro
src/components/common/FAQAccordion.astro
```

### Product / section components

```txt
src/components/sections/ProductHero.astro
src/components/sections/AIChatPreview.astro
src/components/sections/PainPointGrid.astro
src/components/sections/FeatureGrid.astro
src/components/sections/UseCaseGrid.astro
src/components/sections/FeatureSpotlight.astro
src/components/sections/PricingGrid.astro
src/components/sections/FAQGrid.astro
src/components/sections/ServiceVisualPanel.astro
```

### AI Brand Character-specific components

```txt
src/components/pages/AIBrandCharacterPage.astro
src/components/sections/AICharacterHero.astro
src/components/sections/AICharacterCapabilityShowcase.astro
src/components/sections/AICharacterUseCases.astro
src/components/sections/AICharacterCaseBanner.astro
src/components/sections/RelatedServicesGrid.astro
```

### AR/VR/MR-specific components

```txt
src/components/pages/ARVRMRPage.astro
src/components/sections/ARVRHero.astro
src/components/sections/ARVRExperienceGrid.astro
src/components/sections/ARVRUseCaseShowcase.astro
```

### Case Study-specific components

```txt
src/components/sections/CaseStudyResults.astro
src/components/sections/CaseStudyVisualProof.astro
src/components/sections/CaseStudyHandoffFlow.astro
```

---

## 9. Data/content inventory

### JSON data files

```txt
src/data/navigation.json
src/data/home.json
src/data/about.json
src/data/contact.json
src/data/ezd-ai-chat.json
src/data/ai-brand-character-page.json
src/data/ar-vr-mr-page.json
src/data/contact-form-contract.json
```

### Content collections

```txt
src/content/services/
src/content/case-studies/
src/content/insights/
```

Important past issue:

```txt
Dynamic [slug] pages were returning 404 because content collections were missing/misconfigured or empty.
This was fixed by ensuring collection config and actual content entries exist.
```

---

## 10. SEO implementation summary

Implemented:

* Title.
* Description.
* Canonical.
* Robots.
* Open Graph.
* Twitter card.
* JSON-LD support.
* Sitemap integration.
* Robots file.

JSON-LD utilities:

```txt
src/utils/schema.ts
```

Schemas used:

```txt
Organization / Website basics through layout if configured
Service
Article
BreadcrumbList
```

SEO QA before launch:

```txt
[ ] Check title length
[ ] Check description length
[ ] Check canonical URL
[ ] Check OG image URL
[ ] Check JSON-LD script exists
[ ] Check sitemap includes all public routes
[ ] Check robots.txt allows production indexing
[ ] Check draft/private pages noindex if any
```

---

## 11. Navigation

Header supports:

* Desktop navigation.
* Dropdown on hover/click.
* Dropdown remains open for user selection.
* Click outside / Escape closes dropdown.
* Mobile nested menu.

Dropdown groups:

```txt
Dịch vụ
Case Study
```

Known QA points:

```txt
[ ] Hover dropdown works
[ ] Click dropdown holds open
[ ] Click outside closes dropdown
[ ] Escape closes dropdown
[ ] Active state works on service/case sub-pages
[ ] Mobile nested menu works
```

---

## 12. Contact form architecture

See also:

```txt
docs/contact-form-handoff.md
```

Flow:

```txt
Frontend /contact/
→ POST /api/contact
→ Cloudflare Pages Function
→ contact-handler.ts
→ Origin check
→ Payload validation
→ Timing guard
→ Honeypot
→ Turnstile Siteverify
→ Google Sheets append
→ Resend email notification
→ JSON response
```

Google Sheet:

```txt
[EZD]_Leads
Tab: Leads
Range: Leads!A:K
```

Columns:

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

---

## 13. Production environment summary

Production variables in Cloudflare Pages:

```txt
PUBLIC_TURNSTILE_SITE_KEY
TURNSTILE_SECRET_KEY
ALLOWED_ORIGIN
GOOGLE_SHEET_ID
GOOGLE_SHEET_RANGE
GOOGLE_SERVICE_ACCOUNT_EMAIL
GOOGLE_PRIVATE_KEY
RESEND_API_KEY
LEAD_NOTIFY_FROM
LEAD_NOTIFY_TO
```

Current known production values pattern:

```txt
ALLOWED_ORIGIN=https://ezdesign.vn
GOOGLE_SHEET_RANGE=Leads!A:K
LEAD_NOTIFY_FROM=EZDesign Website <leads@notification.ezdesign.vn>
LEAD_NOTIFY_TO=info@ezdesign.vn
```

Sensitive values should be secrets:

```txt
TURNSTILE_SECRET_KEY
GOOGLE_PRIVATE_KEY
GOOGLE_SERVICE_ACCOUNT_EMAIL
GOOGLE_SHEET_ID
RESEND_API_KEY
```

Non-sensitive/plaintext acceptable:

```txt
PUBLIC_TURNSTILE_SITE_KEY
ALLOWED_ORIGIN
GOOGLE_SHEET_RANGE
LEAD_NOTIFY_FROM
LEAD_NOTIFY_TO
```

---

## 14. Security and anti-spam decisions

Implemented zero-cost protections:

```txt
[✓] Cloudflare Turnstile server-side validation
[✓] Honeypot
[✓] Minimum form fill time
[✓] submittedAt freshness guard
[✓] Hard origin check
[✓] Frontend duplicate submit guard
```

Not implemented:

```txt
[ ] KV rate limiting
[ ] Paid Cloudflare WAF/rate limit rules
```

Decision:

```txt
Current website is informational and only accepts demo requests.
Risk is acceptable without KV/rate limit at current phase.
If real abuse happens, temporary shutdown of form/API is an acceptable emergency layer.
```

---

## 15. Technical debt inventory

### Debt 1 — Placeholder visuals

Current placeholders:

```txt
AI character placeholder
AR/VR/MR visual placeholder
Case Study visual proof placeholder
About social proof/logo placeholder
About testimonial placeholder
Generic service visual placeholders
```

Impact:

```txt
Medium for brand polish.
Low for technical functionality.
```

Recommended action:

```txt
Replace with approved real assets before or shortly after public launch.
```

Classification:

```txt
Post-launch debt unless brand team requires visual polish before launch.
```

---

### Debt 2 — Service pages are not equally polished

Custom pages:

```txt
AI Brand Character
AR/VR/MR
```

Still generic:

```txt
Digital Twin
Game Activation
Interactive Website
```

Impact:

```txt
Medium.
Users browsing generic service pages may see less compelling proof.
```

Recommended action:

```txt
Create service-specific polish tasks for remaining service pages.
```

Classification:

```txt
Post-launch enhancement.
```

---

### Debt 3 — No analytics/event tracking

Missing:

```txt
CTA click tracking
Form start tracking
Form submit success/fail tracking
Pricing CTA tracking
FeatureSpotlight interaction tracking
Navigation dropdown tracking
```

Impact:

```txt
Medium for growth/optimization.
Low for launch functionality.
```

Recommended action:

```txt
Add privacy-friendly analytics in a future epic.
```

Classification:

```txt
Post-launch enhancement.
```

---

### Debt 4 — No automated end-to-end tests

Current QA:

```txt
Manual checklist.
```

Missing:

```txt
Playwright smoke tests
Form validation tests
Navigation dropdown tests
Build-time route tests
```

Impact:

```txt
Medium.
Manual QA is acceptable for current phase but will slow future changes.
```

Recommended action:

```txt
Add Playwright smoke tests for key routes and contact form.
```

Classification:

```txt
Post-launch technical debt.
```

---

### Debt 5 — Accessibility not fully audited

Implemented:

```txt
Semantic sections
Focus rings
Button/link basics
FAQ details/summary
ARIA status for contact form
Dropdown keyboard close with Escape
```

Not fully audited:

```txt
Full keyboard navigation
Screen reader pass
Automated color contrast scan
ARIA dropdown semantics beyond basics
Reduced motion preferences
```

Impact:

```txt
Medium.
```

Recommended action:

```txt
Run accessibility audit before major public campaign.
```

Classification:

```txt
Launch QA item if accessibility is required, otherwise post-launch debt.
```

---

### Debt 6 — Contact form has no server-side rate limit

Current protection:

```txt
Turnstile + honeypot + timing + origin + duplicate guard
```

Missing:

```txt
KV or Durable Object rate limit
Paid WAF/rate limit
```

Impact:

```txt
Low to medium.
Accepted for current phase.
```

Recommended action:

```txt
If spam appears, enable KV rate limit or temporary shutdown.
```

Classification:

```txt
Accepted decision.
```

---

### Debt 7 — Contact form depends on external services

Dependencies:

```txt
Cloudflare Turnstile
Google Sheets API
Google Service Account
Resend
```

Impact:

```txt
Medium.
If any env or third-party service fails, contact form may partially fail.
```

Current behavior:

```txt
If Sheet append fails, user sees error to avoid losing lead.
If email fails after Sheet append, user still sees success because lead is saved.
```

Recommended action:

```txt
Monitor logs after production launch.
```

Classification:

```txt
Launch QA item.
```

---

### Debt 8 — Production debug logs still exist server-side

Current logs:

```txt
Google token error
Google Sheets append error
Resend error
Turnstile failed
Lead append failed
Email notification failed
```

Impact:

```txt
Low.
Logs are useful for launch.
Need to avoid leaking secrets.
Current logs avoid printing full private key.
```

Recommended action:

```txt
Review logs after production issue resolved.
Remove overly verbose debug details if no longer needed.
```

Classification:

```txt
Post-launch cleanup.
```

---

### Debt 9 — OG/social images are likely placeholders

Impact:

```txt
Medium for social sharing.
```

Recommended action:

```txt
Create real OG images for key pages:
/
/ezd-ai-chat/
/services/ai-brand-character/
/services/ar-vr-mr/
/case-studies/yen-ai-chat/
```

Classification:

```txt
Launch polish or post-launch enhancement.
```

---

### Debt 10 — Content depth varies by page

Strong content:

```txt
/ezd-ai-chat/
/services/ai-brand-character/
/services/ar-vr-mr/
/case-studies/yen-ai-chat/
```

Needs more depth/proof:

```txt
Digital Twin
Game Activation
Interactive Website
Insights library
About social proof
```

Impact:

```txt
Medium.
```

Recommended action:

```txt
Create content roadmap after launch.
```

Classification:

```txt
Post-launch content debt.
```

---

## 16. UX/content debt inventory

### Placeholder copy

Some sections still intentionally mention placeholder/demo readiness.

Examples:

```txt
Visual Proof placeholder
Logo placeholders
Character visual placeholder
```

Action:

```txt
Replace before a polished public campaign.
Acceptable for internal staging.
```

---

### Missing real proof

Missing or limited:

```txt
Client logos
Approved screenshots
Approved testimonials
Public metrics
Before/after visuals
Real AI character image
Real AR/VR demo
```

Action:

```txt
Collect approved assets and update components/data.
```

---

### Pricing clarity

Implemented pricing on `/ezd-ai-chat/`.

Missing:

```txt
Service-specific pricing guidance for AI Brand Character and AR/VR/MR.
```

Action:

```txt
Add “cost depends on” or scope/pricing expectation section later.
```

---

## 17. Known production risks

### Risk 1 — Google Sheet append production failure

Symptoms:

```txt
User sees:
Form đã được xác minh nhưng chưa thể lưu lead...
```

Likely causes:

```txt
GOOGLE_PRIVATE_KEY format
Wrong service account email
Service account not shared with Sheet
Wrong GOOGLE_SHEET_ID
Wrong tab/range
```

Mitigation:

```txt
Check Cloudflare logs.
Use docs/contact-form-handoff.md troubleshooting.
```

---

### Risk 2 — Turnstile domain mismatch

Symptoms:

```txt
Turnstile does not render or backend rejects token.
```

Likely causes:

```txt
Production site key/secret mismatch
Domain not allowed in Turnstile dashboard
Preview using production-only key
```

Mitigation:

```txt
Check Cloudflare Turnstile settings.
Use matching site key and secret.
```

---

### Risk 3 — Resend sender/domain issue

Symptoms:

```txt
Lead saved to Sheet but email not received.
```

Likely causes:

```txt
Domain not verified
Wrong LEAD_NOTIFY_FROM
Resend API key invalid
Email in spam
```

Mitigation:

```txt
Check Resend logs.
Since Sheet append succeeded, lead is not lost.
```

---

### Risk 4 — ALLOWED_ORIGIN mismatch

Symptoms:

```txt
Production form returns 403.
```

Likely causes:

```txt
ALLOWED_ORIGIN set to wrong domain
www vs non-www mismatch
Preview deployment origin not included
```

Mitigation:

```txt
Set ALLOWED_ORIGIN to correct origin.
If needed, support comma-separated origins:
https://ezdesign.vn,https://www.ezdesign.vn
```

---

### Risk 5 — Placeholder visuals look unfinished

Symptoms:

```txt
Stakeholder perceives site as unfinished.
```

Mitigation:

```txt
Decide before launch whether placeholders are acceptable.
Replace high-visibility placeholders first:
- Hero/product visuals
- Case study visual proof
- About trust layer
```

---

## 18. Launch blocker vs post-launch debt

### Launch blockers

```txt
[ ] npm run build fails
[ ] /api/contact not reachable
[ ] Valid contact submit does not save lead
[ ] Turnstile production broken
[ ] Header/navigation unusable
[ ] Mobile layout major overflow
[ ] Critical pages 404
[ ] SEO title/canonical missing on important pages
```

### Should fix before launch if possible

```txt
[ ] Production Google Sheet append logs clean
[ ] Resend notification works
[ ] Contact success/error messages clear
[ ] Sitemap and robots verified
[ ] No obvious contrast issues
[ ] No payload log in production browser console
```

### Acceptable post-launch debt

```txt
[ ] Placeholder visuals
[ ] Missing analytics
[ ] No automated tests
[ ] Remaining generic service pages
[ ] No KV rate limiting
[ ] Limited proof/metrics
```

---

## 19. Recommended next epics

### Epic 9 — Production launch QA & deployment cleanup

Suggested tasks:

```txt
9.1 Route smoke test
9.2 SEO production QA
9.3 Contact form production QA
9.4 Mobile/responsive QA
9.5 Performance and asset QA
9.6 Accessibility quick audit
9.7 Cloudflare deployment settings cleanup
9.8 Launch go/no-go checklist
```

---

### Epic 10 — Analytics & conversion tracking

Suggested tasks:

```txt
10.1 Decide analytics tool
10.2 CTA click tracking
10.3 Form funnel tracking
10.4 Pricing CTA tracking
10.5 Service page CTA tracking
10.6 Privacy/cookie policy review
```

---

### Epic 11 — Asset replacement & proof upgrade

Suggested tasks:

```txt
11.1 Replace AI character placeholder
11.2 Add approved case study screenshots
11.3 Add client logos/testimonials
11.4 Create OG image set
11.5 Add AR/VR demo visual or video
```

---

### Epic 12 — Remaining service-specific pages

Suggested tasks:

```txt
12.1 Digital Twin custom page
12.2 Game Activation custom page
12.3 Interactive Website custom page
12.4 Cross-service related funnel
```

---

## 20. Epic 9 launch readiness checklist

### Build and deployment

```txt
[ ] npm run check pass
[ ] npm run build pass
[ ] Cloudflare Pages build pass
[ ] Production deployment uses correct branch
[ ] Functions deployed
[ ] /api/contact reachable
```

### Routes

```txt
[ ] /
[ ] /ezd-ai-chat/
[ ] /about/
[ ] /contact/
[ ] /services/ai-brand-character/
[ ] /services/ar-vr-mr/
[ ] /services/digital-twin/
[ ] /services/game-activation/
[ ] /services/interactive-website/
[ ] /case-studies/yen-ai-chat/
[ ] /insights/
[ ] /insights/ai-brand-assistant-la-gi/
```

### Header/footer

```txt
[ ] Header desktop works
[ ] Service dropdown works
[ ] Case Study dropdown works
[ ] Mobile menu works
[ ] Footer links correct
[ ] CTA links correct
```

### Contact form

```txt
[ ] Turnstile renders
[ ] Empty form errors
[ ] Invalid website error
[ ] Valid submit saves Sheet row
[ ] Valid submit sends email
[ ] Success message appears
[ ] Form resets
[ ] Turnstile resets
[ ] Production browser console has no lead payload log
```

### SEO

```txt
[ ] Meta title
[ ] Meta description
[ ] Canonical
[ ] OG tags
[ ] Twitter tags
[ ] JSON-LD
[ ] Sitemap
[ ] Robots
```

### Responsive

```txt
[ ] 375px mobile
[ ] 768px tablet
[ ] 1440px desktop
[ ] No horizontal overflow
[ ] Hero sections readable
[ ] Contact form usable
[ ] FeatureSpotlight usable
[ ] AR/VR visual not broken
```

### Content/visual

```txt
[ ] No accidental lorem ipsum
[ ] Placeholder labels are intentional
[ ] CTA copy approved
[ ] Pricing copy approved
[ ] Contact email/phone links correct
```

---

## 21. Emergency shutdown guide

### Disable form frontend

Temporary remove/disable submit button in:

```txt
src/pages/contact.astro
```

### Disable API backend

Add early return in `handleContactRequest`:

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

### Disable external integrations

Options:

```txt
Remove/rotate Turnstile keys
Remove Google Sheet env vars
Remove Resend env vars
Unpublish Cloudflare Pages deployment
```

### Restore

```txt
Revert shutdown commit
Restore env vars
Redeploy
Submit test lead
Confirm Sheet and email
```

---

## 22. Current accepted decisions

```txt
[✓] Use Cloudflare Pages Function, not standalone Worker
[✓] Use Google Sheets as lightweight lead database
[✓] Use Resend for email notification
[✓] Use Turnstile server-side validation
[✓] Do not enable KV rate limit in current phase
[✓] Do not use paid Cloudflare rate limit/WAF in current phase
[✓] Keep email failure non-blocking after Sheet append
[✓] Keep Sheet append failure blocking to avoid lost lead
[✓] Keep placeholder visuals until real assets are available
```

---

## 23. Final note

This project is currently ready to enter:

```txt
Epic 9 — Production launch QA & deployment cleanup
```

Before public launch, the most important checks are:

```txt
1. Production contact form saves lead to [EZD]_Leads.
2. Production email notification works.
3. All key routes are live and not 404.
4. Header navigation works on desktop/mobile.
5. No severe mobile overflow.
6. SEO metadata and sitemap are valid.
7. Stakeholders accept remaining placeholder visuals.
```
