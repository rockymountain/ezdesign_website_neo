Dưới đây là bản **Sprint 1 Task & Checklist chi tiết** cho dự án **EZDesign Website Reno với Astro**.

# Sprint 1 — Foundation, IA & Project Setup

## 1. Mục tiêu Sprint 1

Sprint 1 tập trung vào việc dựng nền móng cho toàn bộ website mới.

Mục tiêu chính:

```txt id="9s26wn"
- Khởi tạo codebase Astro
- Thiết lập Tailwind, React islands, cấu trúc thư mục
- Xây layout nền tảng
- Chốt sitemap kỹ thuật
- Tạo routing chính
- Tạo content schema ban đầu
- Setup SEO foundation
- Setup deploy Cloudflare Pages
- Chuẩn bị form architecture
- Chuẩn bị tracking architecture
```

Sprint 1 chưa cần hoàn thiện toàn bộ giao diện đẹp hoặc content final. Mục tiêu là có một nền tảng chạy được, đúng cấu trúc, dễ mở rộng trong các sprint sau.

---

# 2. Sprint 1 Outcome

Kết thúc Sprint 1 cần có:

```txt id="4zb0dq"
- Astro project chạy local ổn định
- Tailwind hoạt động
- React islands sẵn sàng dùng
- Cấu trúc src/ rõ ràng
- Layout chính hoạt động
- Header/Footer bản đầu
- Routing cho các page MVP
- Dynamic route cho services
- Dynamic route cho case studies
- Content collection/schema ban đầu
- SEO component bản đầu
- Sitemap/robots setup
- Cloudflare Pages deploy thành công
- Preview deploy hoạt động nếu có PR/branch
```

---

# 3. Sprint 1 Duration

Đề xuất:

```txt id="dbeasa"
Sprint length: 5–7 ngày làm việc
```

Nếu làm nhanh:

```txt id="hl2yqa"
Fast-track: 3–4 ngày làm việc
```

---

# 4. Sprint 1 Scope

## In scope

```txt id="8ms3f2"
Astro setup
Tailwind setup
React integration
Project folder structure
Base layout
SEO component
Header/Footer basic
Routing structure
Content collections
Service page dynamic route
Case study dynamic route
Homepage placeholder
EZD AI Chat page placeholder
Contact page placeholder
About page placeholder
Sitemap/robots
Cloudflare Pages deployment
Environment variables structure
Form Worker architecture draft
GA4/GSC placeholder setup
```

## Out of scope

```txt id="ubcyvn"
Final UI polish
Full copywriting
Final motion mockup render
Full AI chat integration UI
Cloudflare Worker production code
Google Sheets integration production code
Email notification production code
Final GA4 event tracking
Final case study content
Responsive QA toàn site
Performance optimization sâu
```

---

# 5. Sprint 1 Task Breakdown

---

## Epic 1 — Project Initialization

### Task 1.1 — Khởi tạo Astro project

**Mục tiêu:** tạo project Astro mới làm nền cho website EZDesign.

Checklist:

```txt id="0racp1"
[ ] Tạo repository mới hoặc branch mới cho bản reno
[ ] Khởi tạo Astro project
[ ] Chọn TypeScript
[ ] Chạy thử local dev server
[ ] Kiểm tra build production
[ ] Commit initial project setup
```

Gợi ý command:

```bash id="22flwm"
npm create astro@latest ezdesign-website-reno
cd ezdesign-website-reno
npm install
npm run dev
```

Acceptance criteria:

```txt id="2zjiw4"
- Project chạy được bằng npm run dev
- Project build được bằng npm run build
- Không có lỗi TypeScript/blocking error
```

---

### Task 1.2 — Setup package scripts

Checklist:

```txt id="l2h5rf"
[ ] Kiểm tra script dev
[ ] Kiểm tra script build
[ ] Kiểm tra script preview
[ ] Thêm script format nếu dùng Prettier
[ ] Thêm script lint nếu dùng ESLint
```

Package scripts đề xuất:

```json id="mjp72s"
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "format": "prettier --write .",
    "check": "astro check"
  }
}
```

Acceptance criteria:

```txt id="clkyfn"
- npm run dev chạy được
- npm run build chạy được
- npm run preview chạy được sau build
- npm run check không báo lỗi nghiêm trọng
```

---

## Epic 2 — Framework & Styling Setup

### Task 2.1 — Setup Tailwind CSS

Checklist:

```txt id="0ufybz"
[ ] Cài Tailwind cho Astro
[ ] Tạo file global.css
[ ] Import Tailwind base/components/utilities
[ ] Test class Tailwind trên homepage
[ ] Kiểm tra build không lỗi
```

Acceptance criteria:

```txt id="u39rd8"
- Tailwind class hoạt động trên Astro component
- Có thể dùng utility classes trong .astro files
- Global CSS được load toàn site
```

---

### Task 2.2 — Setup React integration

Vì dự án cần React islands cho demo chat, pricing toggle hoặc interactive selector.

Checklist:

```txt id="tu8k8v"
[ ] Cài @astrojs/react
[ ] Cấu hình astro.config.mjs
[ ] Tạo component React test
[ ] Render React component trong một Astro page
[ ] Test hydration bằng client:load hoặc client:visible
```

Acceptance criteria:

```txt id="rh0nf7"
- React component render được trong Astro
- Hydration hoạt động
- Không làm toàn site thành React app
```

---

### Task 2.3 — Setup design tokens cơ bản

Checklist:

```txt id="mufuyg"
[ ] Tạo màu brand chính
[ ] Tạo màu background chính
[ ] Tạo màu text chính
[ ] Tạo màu border/subtle
[ ] Tạo spacing convention
[ ] Tạo border radius convention
[ ] Tạo shadow convention
```

Token ban đầu có thể gồm:

```txt id="8zen0j"
--color-brand
--color-brand-soft
--color-bg
--color-surface
--color-text
--color-muted
--color-border
```

Acceptance criteria:

```txt id="tt3kbc"
- Có bộ token cơ bản để dùng xuyên suốt UI
- Không hard-code màu lung tung ở nhiều nơi
- Có thể mở rộng về sau
```

---

## Epic 3 — Project Structure

### Task 3.1 — Tạo cấu trúc thư mục chuẩn

Cấu trúc đề xuất:

```txt id="zv1alz"
src/
├── assets/
├── components/
│   ├── common/
│   ├── home/
│   ├── ezd-ai-chat/
│   ├── services/
│   ├── case-studies/
│   ├── forms/
│   └── seo/
├── content/
│   ├── services/
│   ├── case-studies/
│   └── insights/
├── data/
│   ├── site.ts
│   ├── navigation.ts
│   ├── services.ts
│   ├── pricing.ts
│   └── industries.ts
├── layouts/
│   ├── BaseLayout.astro
│   ├── ServiceLayout.astro
│   ├── CaseStudyLayout.astro
│   └── InsightLayout.astro
├── pages/
│   ├── index.astro
│   ├── ezd-ai-chat.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── services/
│   │   └── [slug].astro
│   ├── case-studies/
│   │   └── [slug].astro
│   └── insights/
│       ├── index.astro
│       └── [slug].astro
├── styles/
│   └── global.css
└── utils/
    ├── seo.ts
    ├── schema.ts
    ├── routes.ts
    └── tracking.ts
```

Checklist:

```txt id="cxn0au"
[ ] Tạo components/common
[ ] Tạo components/home
[ ] Tạo components/ezd-ai-chat
[ ] Tạo components/services
[ ] Tạo components/case-studies
[ ] Tạo components/forms
[ ] Tạo components/seo
[ ] Tạo layouts
[ ] Tạo data
[ ] Tạo utils
[ ] Tạo content collections folders
```

Acceptance criteria:

```txt id="15yrit"
- Cấu trúc thư mục đúng với Project Plan
- Các page chính import được layout/component từ đúng nơi
- Không để component trôi nổi không phân loại
```

---

## Epic 4 — Routing & Pages Skeleton

### Task 4.1 — Tạo homepage skeleton

Route:

```txt id="t329cf"
/
```

Checklist:

```txt id="21x9k2"
[ ] Tạo src/pages/index.astro
[ ] Gắn BaseLayout
[ ] Tạo placeholder hero
[ ] Tạo placeholder EZD AI Chat spotlight
[ ] Tạo placeholder services overview
[ ] Tạo placeholder case study section
[ ] Tạo placeholder CTA section
```

Acceptance criteria:

```txt id="ue0vv5"
- Homepage truy cập được
- Có layout/header/footer
- Có các section placeholder đúng thứ tự
```

---

### Task 4.2 — Tạo EZD AI Chat page skeleton

Route:

```txt id="gebsz4"
/ezd-ai-chat/
```

Checklist:

```txt id="x901me"
[ ] Tạo src/pages/ezd-ai-chat.astro
[ ] Gắn BaseLayout
[ ] Tạo placeholder hero
[ ] Tạo placeholder pain points
[ ] Tạo placeholder live AI demo
[ ] Tạo placeholder use cases
[ ] Tạo placeholder features
[ ] Tạo placeholder pricing
[ ] Tạo placeholder FAQ
[ ] Tạo CTA cuối trang
```

Acceptance criteria:

```txt id="6cvssd"
- /ezd-ai-chat/ hoạt động
- Page có skeleton đầy đủ section quan trọng
- Chưa cần final design/content
```

---

### Task 4.3 — Tạo dynamic services route

Route:

```txt id="09r1rm"
/services/[slug]/
```

Service slugs:

```txt id="loyctp"
ai-brand-character
ar-vr-mr
digital-twin
game-activation
interactive-website
```

Checklist:

```txt id="bl3eo4"
[ ] Tạo src/pages/services/[slug].astro
[ ] Tạo ServiceLayout.astro
[ ] Tạo content collection services
[ ] Tạo 5 file content service placeholder
[ ] Render title/excerpt/sections từ content
[ ] Generate static paths cho từng service
```

Acceptance criteria:

```txt id="hf95w7"
- 5 service URLs truy cập được
- Mỗi URL render đúng nội dung placeholder riêng
- Route build static thành công
```

---

### Task 4.4 — Tạo dynamic case study route

Route:

```txt id="gvjs8r"
/case-studies/[slug]/
```

Case đầu tiên:

```txt id="dj4wd4"
yen-ai-chat
```

Checklist:

```txt id="0n07lu"
[ ] Tạo src/pages/case-studies/[slug].astro
[ ] Tạo CaseStudyLayout.astro
[ ] Tạo content collection case-studies
[ ] Tạo file yen-ai-chat.mdx placeholder
[ ] Render case title/client/summary/body
[ ] Generate static paths
```

Acceptance criteria:

```txt id="nk3s94"
- /case-studies/yen-ai-chat/ hoạt động
- Content lấy từ MDX/content collection
- Build static không lỗi
```

---

### Task 4.5 — Tạo About page skeleton

Route:

```txt id="n16qoe"
/about/
```

Checklist:

```txt id="p9hqzi"
[ ] Tạo src/pages/about.astro
[ ] Gắn BaseLayout
[ ] Tạo placeholder brand story
[ ] Tạo placeholder capabilities
[ ] Tạo placeholder process
[ ] Tạo CTA cuối trang
```

Acceptance criteria:

```txt id="3mfl56"
- /about/ hoạt động
- Có SEO metadata placeholder
```

---

### Task 4.6 — Tạo Contact page skeleton

Route:

```txt id="2drfnj"
/contact/
```

Checklist:

```txt id="5m0eep"
[ ] Tạo src/pages/contact.astro
[ ] Gắn BaseLayout
[ ] Tạo contact hero
[ ] Tạo contact form placeholder
[ ] Tạo contact info section
[ ] Tạo Zalo/hotline/email link placeholder
```

Acceptance criteria:

```txt id="nl8evi"
- /contact/ hoạt động
- Có form UI placeholder
- Chưa cần submit thật ở Sprint 1
```

---

### Task 4.7 — Tạo insights route chuẩn bị sẵn

Routes:

```txt id="objdpf"
/insights/
/insights/[slug]/
```

Checklist:

```txt id="e7khga"
[ ] Tạo src/pages/insights/index.astro
[ ] Tạo src/pages/insights/[slug].astro
[ ] Tạo content collection insights
[ ] Tạo 1 bài placeholder draft hoặc sample
[ ] Không đưa Insights vào main nav trong Sprint 1
```

Acceptance criteria:

```txt id="pv3h10"
- /insights/ tồn tại nhưng có thể chưa public mạnh
- Insights chưa cần xuất hiện trên nav chính
- Codebase sẵn sàng mở rộng blog sau này
```

---

## Epic 5 — Layout & Common Components

### Task 5.1 — BaseLayout

Checklist:

```txt id="jmmric"
[ ] Tạo BaseLayout.astro
[ ] Nhận props title, description, ogImage, canonical
[ ] Import global.css
[ ] Render SEO component
[ ] Render Header
[ ] Render slot
[ ] Render Footer
```

Acceptance criteria:

```txt id="4y1j8p"
- Tất cả page chính dùng BaseLayout
- Metadata cơ bản truyền qua props
- Không lặp cấu trúc HTML ở từng page
```

---

### Task 5.2 — Header component

Checklist:

```txt id="28p6eu"
[ ] Tạo Header.astro
[ ] Logo placeholder
[ ] Main navigation
[ ] CTA button Đặt lịch demo
[ ] Mobile menu placeholder hoặc basic responsive
[ ] Active link state nếu đơn giản
```

Navigation MVP:

```txt id="sweyp6"
EZD AI Chat
Dịch vụ
Case Study
About
Contact
```

Acceptance criteria:

```txt id="blnul2"
- Header xuất hiện toàn site
- Link đúng route
- Mobile không vỡ layout
```

---

### Task 5.3 — Footer component

Checklist:

```txt id="qnzv0o"
[ ] Tạo Footer.astro
[ ] Brand summary ngắn
[ ] Link navigation
[ ] Contact email placeholder
[ ] Hotline/Zalo placeholder
[ ] Social links nếu có
[ ] Copyright
```

Acceptance criteria:

```txt id="zvbp8g"
- Footer xuất hiện toàn site
- Có link về các page chính
- Có chỗ để bổ sung contact thật
```

---

### Task 5.4 — CTASection component

Checklist:

```txt id="1jnu89"
[ ] Tạo CTASection.astro
[ ] Props: title, description, primaryCTA, secondaryCTA
[ ] Dùng được ở homepage, service page, case study, contact
```

Acceptance criteria:

```txt id="fxtply"
- CTASection tái sử dụng được
- Có CTA chính Đặt lịch demo
- Có CTA phụ Tư vấn giải pháp nếu cần
```

---

### Task 5.5 — SectionHeader component

Checklist:

```txt id="ziczah"
[ ] Tạo SectionHeader.astro
[ ] Props: eyebrow, title, description, align
[ ] Dùng trong homepage và service pages
```

Acceptance criteria:

```txt id="o03hei"
- Giảm lặp markup heading/description
- Giữ style nhất quán
```

---

## Epic 6 — SEO Foundation

### Task 6.1 — SEO component

Checklist:

```txt id="v1qqvu"
[ ] Tạo SEO.astro hoặc HeadSEO.astro
[ ] Nhận title
[ ] Nhận description
[ ] Nhận canonical
[ ] Nhận ogImage
[ ] Nhận noindex optional
[ ] Render Open Graph tags
[ ] Render Twitter card tags
```

Metadata cần có:

```html id="ojfm19"
<title></title>
<meta name=\"description\" content=\"\" />
<link rel=\"canonical\" href=\"\" />
<meta property=\"og:title\" content=\"\" />
<meta property=\"og:description\" content=\"\" />
<meta property=\"og:image\" content=\"\" />
<meta property=\"og:type\" content=\"website\" />
<meta name=\"twitter:card\" content=\"summary_large_image\" />
```

Acceptance criteria:

```txt id="dxud9d"
- Mỗi page có title riêng
- Mỗi page có meta description riêng
- OG tags render đúng
- Canonical render đúng
```

---

### Task 6.2 — Site config

Checklist:

```txt id="7kqplc"
[ ] Tạo src/data/site.ts
[ ] Khai báo siteName
[ ] Khai báo siteUrl
[ ] Khai báo defaultTitle
[ ] Khai báo defaultDescription
[ ] Khai báo defaultOgImage
[ ] Khai báo contact info placeholder
```

Example:

```ts id="mhegr5"
export const siteConfig = {
  name: 'EZDesign',
  url: 'https://ezdesign.vn',
  defaultTitle: 'EZDesign — Điểm chạm số biết trò chuyện, tương tác và chuyển đổi',
  defaultDescription:
    'EZDesign thiết kế AI brand assistant, AR/VR, Digital Twin, Game Activation và website tương tác cho thương hiệu.',
  defaultOgImage: '/og/default.jpg',
};
```

Acceptance criteria:

```txt id="b3n7ve"
- SEO component lấy được default config
- Không hard-code site URL rải rác
```

---

### Task 6.3 — Sitemap và robots

Checklist:

```txt id="3wfili"
[ ] Cài hoặc cấu hình sitemap integration
[ ] Tạo robots.txt
[ ] Kiểm tra sitemap generated sau build
[ ] Đảm bảo service/case dynamic pages có trong sitemap
```

Acceptance criteria:

```txt id="gh56zd"
- /sitemap-index.xml hoặc /sitemap.xml được generate
- /robots.txt tồn tại
- Dynamic routes nằm trong sitemap
```

---

## Epic 7 — Content Collections & Data Model

### Task 7.1 — Define services content schema

Checklist:

```txt id="uzmr2j"
[ ] Tạo content config cho services
[ ] Define fields: title, slug, excerpt, seoTitle, seoDescription, heroTitle, heroDescription
[ ] Define fields: problems, features, useCases, faqs
[ ] Validate schema
```

Service content fields đề xuất:

```ts id="f8rru9"
{
  title: string;
  slug: string;
  excerpt: string;
  heroTitle: string;
  heroDescription: string;
  seoTitle: string;
  seoDescription: string;
  ogImage?: string;
  problems?: string[];
  features?: {
    title: string;
    description: string;
  }[];
  useCases?: {
    title: string;
    description: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}
```

Acceptance criteria:

```txt id="m7tid4"
- Services content validate được
- Missing required field báo lỗi khi build/check
```

---

### Task 7.2 — Tạo 5 service content placeholder

Files:

```txt id="qp1s59"
src/content/services/ai-brand-character.mdx
src/content/services/ar-vr-mr.mdx
src/content/services/digital-twin.mdx
src/content/services/game-activation.mdx
src/content/services/interactive-website.mdx
```

Checklist:

```txt id="6xy4o2"
[ ] Tạo ai-brand-character.mdx
[ ] Tạo ar-vr-mr.mdx
[ ] Tạo digital-twin.mdx
[ ] Tạo game-activation.mdx
[ ] Tạo interactive-website.mdx
[ ] Mỗi file có frontmatter hợp lệ
[ ] Mỗi file có body placeholder
```

Acceptance criteria:

```txt id="a0hp9x"
- 5 service pages build được
- Không page nào bị thiếu metadata bắt buộc
```

---

### Task 7.3 — Define case study schema

Checklist:

```txt id="yvnr2f"
[ ] Tạo content schema cho case-studies
[ ] Define title, client, industry, product, summary
[ ] Define challenge, solution, resultNotes
[ ] Define publish permissions
[ ] Define seo fields
```

Case study fields đề xuất:

```ts id="v8xmr6"
{
  title: string;
  slug: string;
  client: string;
  industry: string;
  product: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  ogImage?: string;
  canPublicName: boolean;
  canPublicImages: boolean;
  canPublicMetrics: boolean;
  canPublicFlow: boolean;
  canPublicCharacter: boolean;
  hasTestimonial: boolean;
}
```

Acceptance criteria:

```txt id="ojerch"
- Case study content validate được
- Các permission flag thể hiện đúng quyết định BA
```

---

### Task 7.4 — Tạo case Yên AI Chat placeholder

File:

```txt id="cej9ro"
src/content/case-studies/yen-ai-chat.mdx
```

Checklist:

```txt id="sqg4jc"
[ ] Tạo frontmatter hợp lệ
[ ] Set client = Yên Retreat & Cafe
[ ] Set product = EZD AI Chat
[ ] Set canPublicMetrics = false
[ ] Set canPublicFlow = false
[ ] Set canPublicCharacter = true
[ ] Tạo body placeholder
```

Acceptance criteria:

```txt id="nisy6h"
- /case-studies/yen-ai-chat/ render được
- Permission flag đúng với BA Alignment
```

---

## Epic 8 — Form & Integration Architecture

### Task 8.1 — Tạo form UI placeholder

Checklist:

```txt id="t95a4f"
[ ] Tạo LeadForm component
[ ] Fields: name, businessName, email, phoneOrZalo, website, industry, interest, message
[ ] Thêm hidden honeypot field
[ ] Thêm submit button
[ ] Chưa cần submit thật
```

Acceptance criteria:

```txt id="z0iwfx"
- Form hiển thị được ở /contact/
- Form UI không vỡ mobile
- Có đủ field theo BA Alignment
```

---

### Task 8.2 — Draft Cloudflare Worker contract

Sprint 1 chưa cần code production hoàn chỉnh, nhưng cần chốt contract.

Endpoint đề xuất:

```txt id="lj4ked"
POST /api/lead
```

Request body:

```json id="lt2ebv"
{
  "name": "",
  "businessName": "",
  "email": "",
  "phoneOrZalo": "",
  "website": "",
  "industry": "",
  "interest": "",
  "message": "",
  "sourcePage": "",
  "utmSource": "",
  "utmMedium": "",
  "utmCampaign": ""
}
```

Checklist:

```txt id="ow3h6u"
[ ] Xác định endpoint
[ ] Xác định request payload
[ ] Xác định response success
[ ] Xác định response error
[ ] Xác định validation rules
[ ] Xác định env variables cần dùng
[ ] Xác định Google Sheets target
[ ] Xác định email notification method
```

Acceptance criteria:

```txt id="jn9v1n"
- Có API contract rõ cho Sprint 2
- Frontend form có thể code theo contract này
```

---

### Task 8.3 — Environment variables draft

Checklist:

```txt id="v52whu"
[ ] Liệt kê biến cho Google Sheets
[ ] Liệt kê biến cho email sending
[ ] Liệt kê biến cho anti-spam/rate limit nếu cần
[ ] Không commit secret vào repo
```

Env draft:

```txt id="shg8vd"
GOOGLE_SHEETS_CLIENT_EMAIL
GOOGLE_SHEETS_PRIVATE_KEY
GOOGLE_SHEETS_SPREADSHEET_ID
GOOGLE_SHEETS_LEADS_SHEET_NAME
EMAIL_FROM
EMAIL_TO
EMAIL_API_KEY
TURNSTILE_SECRET_KEY
```

Acceptance criteria:

```txt id="gcjzu5"
- Có .env.example
- Không có secret thật trong repo
```

---

## Epic 9 — Analytics & Tracking Architecture

### Task 9.1 — Setup tracking utility placeholder

Checklist:

```txt id="xcpmd9"
[ ] Tạo src/utils/tracking.ts
[ ] Define event names
[ ] Tạo function trackEvent
[ ] Không cần GA4 thật nếu measurement ID chưa có
[ ] Có fallback không gây lỗi khi window.gtag chưa tồn tại
```

Event names:

```ts id="5p8r9q"
export const TRACKING_EVENTS = {
  CTA_CLICK: 'cta_click',
  FORM_SUBMIT: 'form_submit',
  ZALO_CLICK: 'zalo_click',
  HOTLINE_CLICK: 'hotline_click',
  EMAIL_CLICK: 'email_click',
  DEMO_CHAT_OPEN: 'demo_chat_open',
  QUICK_REPLY_CLICK: 'quick_reply_click',
  PRICING_PACKAGE_CLICK: 'pricing_package_click',
  CASE_STUDY_CLICK: 'case_study_click',
} as const;
```

Acceptance criteria:

```txt id="a5igrq"
- Codebase có convention tracking event
- Các sprint sau không đặt tên event tùy tiện
```

---

### Task 9.2 — GA4 placeholder

Checklist:

```txt id="ud66oh"
[ ] Tạo component Analytics.astro
[ ] Nhận GA4 measurement ID từ env/config
[ ] Nếu chưa có ID thì không render script
[ ] Gắn vào BaseLayout
```

Acceptance criteria:

```txt id="n4zo6y"
- Sẵn sàng gắn GA4 khi có measurement ID
- Không làm lỗi build nếu chưa có GA4 ID
```

---

## Epic 10 — Deployment Setup

### Task 10.1 — Setup Cloudflare Pages

Checklist:

```txt id="x65d26"
[ ] Kết nối GitHub repo với Cloudflare Pages
[ ] Set build command
[ ] Set output directory
[ ] Deploy lần đầu
[ ] Kiểm tra production URL
[ ] Kiểm tra build logs
```

Cloudflare Pages config gợi ý:

```txt id="i9nnvv"
Build command: npm run build
Output directory: dist
```

Acceptance criteria:

```txt id="bs7t32"
- Website deploy thành công lên Cloudflare Pages
- Production URL mở được
- Không lỗi build trên Cloudflare
```

---

### Task 10.2 — Preview deploy workflow

Không cần staging riêng, nhưng nên có preview deploy trước khi merge main.

Checklist:

```txt id="9utl58"
[ ] Kiểm tra Cloudflare Pages preview deploy theo branch/PR
[ ] Tạo test branch
[ ] Push test branch
[ ] Xác nhận preview URL được tạo
[ ] Document cách dùng preview URL
```

Acceptance criteria:

```txt id="v4uqgt"
- Có cách test trước khi merge main
- Không cần staging domain riêng
```

---

## Epic 11 — Documentation

### Task 11.1 — README project

Checklist:

```txt id="nqqp62"
[ ] Viết project overview
[ ] Ghi tech stack
[ ] Ghi command chạy local
[ ] Ghi cấu trúc thư mục
[ ] Ghi deploy target
[ ] Ghi env setup
```

Acceptance criteria:

```txt id="mxplvd"
- Dev mới có thể clone và chạy project
- README đủ rõ để maintain sau này
```

---

### Task 11.2 — Sprint 1 notes

Checklist:

```txt id="o0pf9a"
[ ] Ghi lại quyết định kỹ thuật quan trọng
[ ] Ghi lại việc chưa làm
[ ] Ghi lại blockers nếu có
[ ] Ghi lại việc chuyển sang Sprint 2
```

Acceptance criteria:

```txt id="arixkw"
- Có tài liệu bàn giao Sprint 1
- Sprint 2 có đầu vào rõ ràng
```

---

# 6. Sprint 1 Backlog Summary

## Must-have

```txt id="q36d92"
[ ] Astro project setup
[ ] Tailwind setup
[ ] React integration
[ ] Folder structure
[ ] BaseLayout
[ ] Header basic
[ ] Footer basic
[ ] SEO component
[ ] Site config
[ ] Homepage skeleton
[ ] EZD AI Chat skeleton
[ ] Services dynamic route
[ ] 5 service placeholder content files
[ ] Case study dynamic route
[ ] Yên AI Chat placeholder content
[ ] About page skeleton
[ ] Contact page skeleton
[ ] LeadForm UI placeholder
[ ] Content collections schema
[ ] Sitemap/robots
[ ] Cloudflare Pages deploy
[ ] README
```

## Should-have

```txt id="70hjzs"
[ ] Preview deploy workflow
[ ] Tracking utility placeholder
[ ] GA4 component placeholder
[ ] Insights route skeleton
[ ] CTASection component
[ ] SectionHeader component
[ ] Cloudflare Worker API contract
[ ] .env.example
```

## Could-have

```txt id="tglwyl"
[ ] Basic mobile menu interaction
[ ] Breadcrumb component
[ ] FAQ component placeholder
[ ] PricingCard component placeholder
[ ] ServiceCard component placeholder
[ ] CaseStudyCard component placeholder
```

---

# 7. Component List cho Sprint 1

## Common components

```txt id="894bb0"
Header.astro
Footer.astro
BaseLayout.astro
SEO.astro
CTASection.astro
SectionHeader.astro
```

## Page section components

```txt id="59r2s6"
HomeHero.astro
HomeEzdAiSpotlight.astro
ServicesOverview.astro
FeaturedCaseStudy.astro
EzdAiHero.astro
ServiceHero.astro
CaseStudyHero.astro
ContactHero.astro
```

## Form components

```txt id="5rtge0"
LeadForm.astro
FormField.astro
SubmitButton.astro
```

## Utility/future components

```txt id="yyswgf"
Breadcrumb.astro
FAQList.astro
PricingCard.astro
ServiceCard.astro
CaseStudyCard.astro
```

Trong Sprint 1, không nhất thiết phải hoàn thiện tất cả. Ưu tiên common components, layout và route skeleton.

---

# 8. Content List cho Sprint 1

## Required placeholder content

```txt id="8kqxfp"
Homepage placeholder copy
EZD AI Chat placeholder copy
AI Brand Character placeholder content
AR/VR/MR placeholder content
Digital Twin placeholder content
Game Activation placeholder content
Interactive Website placeholder content
Yên AI Chat case placeholder
About placeholder
Contact placeholder
```

## Required metadata placeholder

```txt id="s0uod4"
Homepage title/description
EZD AI Chat title/description
5 service page titles/descriptions
Yên AI Chat case title/description
About title/description
Contact title/description
Default OG image path
```

---

# 9. Technical Architecture Sprint 1

## Frontend

```txt id="v0p7vd"
Astro
TypeScript
Tailwind CSS
React islands
MDX/content collections
```

## Hosting

```txt id="k09kzj"
Cloudflare Pages
main branch → production
Preview deploy qua branch/PR nếu có
```

## Content

```txt id="gpds6x"
Services: MDX content collection
Case studies: MDX content collection
Insights: MDX content collection, chưa hiện nav
Global data: TypeScript data files
```

## Form architecture

```txt id="5kstqj"
Frontend LeadForm
→ POST /api/lead
→ Cloudflare Worker
→ Validate + anti-spam
→ Google Sheets
→ Email notification
```

Sprint 1 chỉ cần contract và UI placeholder. Implementation production để Sprint 2.

## Analytics architecture

```txt id="9ucnc2"
GA4 script through Analytics component
Tracking utility in src/utils/tracking.ts
Standard event naming
No PII in analytics events
```

---

# 10. Sprint 1 Timeline đề xuất

## Option A — 5 ngày làm việc

### Day 1 — Project foundation

```txt id="d6yppd"
[ ] Astro init
[ ] Tailwind setup
[ ] React setup
[ ] Folder structure
[ ] Site config
```

### Day 2 — Layout and routing

```txt id="z9h1m2"
[ ] BaseLayout
[ ] Header
[ ] Footer
[ ] Homepage skeleton
[ ] EZD AI Chat skeleton
[ ] About/Contact skeleton
```

### Day 3 — Content collections

```txt id="sa21te"
[ ] Services schema
[ ] 5 service MDX placeholders
[ ] Services dynamic route
[ ] Case study schema
[ ] Yên AI Chat placeholder
[ ] Case study dynamic route
```

### Day 4 — SEO, form, tracking

```txt id="w263c0"
[ ] SEO component
[ ] Sitemap/robots
[ ] LeadForm UI placeholder
[ ] Worker API contract
[ ] Tracking utility
[ ] GA4 placeholder
```

### Day 5 — Deploy and documentation

```txt id="dopnqh"
[ ] Cloudflare Pages deploy
[ ] Preview deploy check
[ ] README
[ ] Sprint 1 QA
[ ] Sprint 1 handoff notes
```

---

## Option B — 7 ngày làm việc

Phù hợp nếu muốn kỹ hơn về structure và QA.

```txt id="x70ftp"
Day 1: Project setup
Day 2: Tailwind/React/design tokens
Day 3: Layout/common components
Day 4: Page skeletons
Day 5: Content collections/dynamic routes
Day 6: SEO/form/tracking architecture
Day 7: Deploy/QA/documentation
```

---

# 11. Sprint 1 QA Checklist

## Build QA

```txt id="nbmtz1"
[ ] npm run dev chạy được
[ ] npm run build chạy được
[ ] npm run preview chạy được
[ ] npm run check không lỗi nghiêm trọng
```

## Routing QA

```txt id="az3p6r"
[ ] / hoạt động
[ ] /ezd-ai-chat/ hoạt động
[ ] /services/ai-brand-character/ hoạt động
[ ] /services/ar-vr-mr/ hoạt động
[ ] /services/digital-twin/ hoạt động
[ ] /services/game-activation/ hoạt động
[ ] /services/interactive-website/ hoạt động
[ ] /case-studies/yen-ai-chat/ hoạt động
[ ] /about/ hoạt động
[ ] /contact/ hoạt động
```

## Layout QA

```txt id="80c9gs"
[ ] Header xuất hiện đúng
[ ] Footer xuất hiện đúng
[ ] CTA chính hiển thị
[ ] Mobile layout không vỡ nghiêm trọng
[ ] Không có horizontal scroll
```

## SEO QA

```txt id="6xzorr"
[ ] Mỗi page có title
[ ] Mỗi page có meta description
[ ] Mỗi page có canonical
[ ] OG tags render
[ ] robots.txt tồn tại
[ ] sitemap được generate
```

## Deploy QA

```txt id="m23930"
[ ] Cloudflare Pages build pass
[ ] Production URL mở được
[ ] Assets load đúng
[ ] Không lỗi 404 với route chính
```

---

# 12. Definition of Done cho Sprint 1

Sprint 1 được xem là hoàn thành khi:

```txt id="w2r1ot"
[ ] Astro project đã khởi tạo và build thành công
[ ] Tailwind hoạt động
[ ] React islands hoạt động
[ ] Cấu trúc thư mục chuẩn
[ ] BaseLayout/Header/Footer hoạt động
[ ] Các route MVP tồn tại
[ ] 5 service pages render từ dynamic route
[ ] Case Yên AI Chat render từ dynamic route
[ ] SEO component hoạt động
[ ] Sitemap/robots có mặt
[ ] LeadForm UI placeholder có mặt
[ ] Worker API contract đã được ghi lại
[ ] Tracking event naming đã chuẩn hóa
[ ] Cloudflare Pages deploy thành công
[ ] README có hướng dẫn chạy project
```

---

# 13. Output bàn giao cuối Sprint 1

```txt id="tq7pnz"
- GitHub repo/branch đã setup
- Cloudflare Pages production hoặc preview URL
- Astro codebase foundation
- Routing skeleton đầy đủ
- Content schema ban đầu
- Placeholder content cho services/case
- SEO foundation
- Form UI placeholder
- Worker API contract
- Tracking event convention
- README
- Sprint 1 handoff notes
```

---

# 14. Gợi ý Sprint 2 sau khi Sprint 1 xong

Sprint 2 nên tập trung vào:

```txt id="22f8st"
- UI system chi tiết
- Homepage content + layout hoàn chỉnh
- EZD AI Chat landing page chi tiết
- Pricing section
- FAQ section
- Live AI demo UI integration
- Lead form submit thật qua Cloudflare Worker
- Google Sheets + email notification
- GA4 event tracking thật
```

Sprint 1 là nền móng. Sprint 2 mới bắt đầu biến website từ “khung chạy được” thành “landing page có khả năng thuyết phục và thu lead”.
