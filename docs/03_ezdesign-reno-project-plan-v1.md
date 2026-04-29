# EZDesign Website Reno — Project Plan v1.0

> Dự án: Reno website EZDesign sang Astro  
> Hero product: EZD AI Chat  
> Định hướng: Product-led marketing website cho SME B2C  
> Version: 1.0  
> Ngày lập: 2026-04-29

---

## 1. Mục tiêu tài liệu

Tài liệu này chuyển hóa BA Alignment đã thống nhất thành **Project Plan chi tiết** cho việc triển khai website mới của EZDesign bằng Astro.

Tài liệu bao gồm:

- Phạm vi dự án theo phase
- Sitemap chi tiết
- Backlog triển khai
- Component list
- Content list
- Technical architecture
- Tracking plan
- SEO plan
- Timeline triển khai
- Definition of Done
- Rủi ro và phương án kiểm soát

---

## 2. Executive Summary

Website mới của EZDesign sẽ được xây dựng lại từ website static single-page hiện tại thành một **product-led marketing website** nhiều trang, tối ưu SEO và có khả năng thu lead.

Trọng tâm của website là **EZD AI Chat**, sản phẩm chủ lực được định vị là:

> EZD AI Chat là AI brand assistant giúp SME B2C tư vấn khách, trả lời FAQ, thu lead và chuyển khách sang người thật khi cần.

Website mới không chỉ giới thiệu EZDesign như một studio sáng tạo, mà cần trở thành một hệ thống hỗ trợ bán hàng, bao gồm:

- Định vị thương hiệu mới
- Landing page sản phẩm EZD AI Chat
- Các service pages bổ trợ
- Case study Yên AI Chat
- Form lead hoạt động thật
- AI demo thật cho EZD Assistant và Yên AI
- SEO metadata đầy đủ
- Analytics và event tracking
- Nền tảng nội dung có thể mở rộng

---

## 3. Project Objectives

## 3.1. Business Objectives

| Mã | Mục tiêu | Mô tả |
|---|---|---|
| BO-01 | Tái định vị EZDesign | Từ website portfolio đơn trang thành website marketing nhiều trang |
| BO-02 | Đẩy EZD AI Chat | Biến EZD AI Chat thành hero product trên website |
| BO-03 | Tăng lead | Website có form demo/contact hoạt động thật |
| BO-04 | Tăng niềm tin | Dùng Yên AI Chat làm case study flagship |
| BO-05 | Tạo nền SEO | Mỗi sản phẩm/dịch vụ có URL, metadata và nội dung riêng |
| BO-06 | Chuẩn bị mở rộng | Codebase sẵn sàng cho insights/blog, industry landing pages và i18n |

## 3.2. Product Objectives

| Mã | Mục tiêu | Mô tả |
|---|---|---|
| PO-01 | Làm rõ EZD AI Chat | Giải thích khác biệt giữa AI Brand Assistant và chatbot thường |
| PO-02 | Cho trải nghiệm thật | Tích hợp AI thật cho EZD Assistant và Yên AI |
| PO-03 | Dẫn khách đến hành động | CTA chính là “Đặt lịch demo” |
| PO-04 | Public giá từ | Hiển thị pricing theo khoảng giá “từ” |
| PO-05 | Chứng minh use case | Trình bày ngành phù hợp và case Yên AI Chat |

## 3.3. Technical Objectives

| Mã | Mục tiêu | Mô tả |
|---|---|---|
| TO-01 | Astro-based website | Dùng Astro làm framework chính |
| TO-02 | React islands khi cần | Dùng React cho chat demo/component tương tác |
| TO-03 | Tailwind CSS | Dùng Tailwind cho styling |
| TO-04 | MDX + data files | Dùng content collections/data files để quản lý nội dung |
| TO-05 | Cloudflare Pages | Deploy production trên Cloudflare Pages |
| TO-06 | Cloudflare Worker form endpoint | Form gửi qua Worker đến Google Sheets và email notification |
| TO-07 | GA4 + GSC | Tích hợp Google Analytics 4 và Google Search Console |
| TO-08 | SEO foundation | Sitemap, robots, canonical, OG, schema nếu phù hợp |

---

## 4. Scope Overview

## 4.1. In Scope — Phase 1

```txt
Homepage mới
EZD AI Chat landing page
5 service pages
Case study Yên AI Chat
About page
Contact page
AI thật cho EZD Assistant
AI thật cho Yên AI
Contact/demo form hoạt động
Cloudflare Worker endpoint
Google Sheets lead storage
Email notification
SEO metadata
Sitemap.xml
Robots.txt
GA4 tracking
Google Search Console setup
Responsive UI
Cloudflare Pages deploy
```

## 4.2. Prepared but Not Promoted in Navigation

```txt
/insights/
/insights/[slug]/
```

Route và content structure có thể chuẩn bị sẵn nhưng chưa cần hiện trên main navigation trong Phase 1.

## 4.3. Out of Scope — Phase 1

```txt
Full SaaS dashboard
Tenant self-service
Payment tự động
Advanced CRM integration
Public setup fee cố định
Multi-language full implementation
Admin CMS
Industry landing pages
Blog publishing program đầy đủ
Motion/animation phức tạp
Privacy Policy riêng
Terms of Service riêng
```

---

## 5. Core Decisions

## 5.1. Brand Positioning

Định vị chính:

> EZDesign thiết kế các điểm chạm số biết trò chuyện, tương tác và chuyển đổi — từ AI brand assistant đến AR/VR, Digital Twin và Game Activation.

## 5.2. Hero Product

```txt
EZD AI Chat
```

EZD AI Chat là sản phẩm được ưu tiên trên homepage và có landing page riêng.

## 5.3. Business Model

```txt
Managed SaaS + setup fee
```

- Khách trả phí tháng.
- EZDesign setup và tối ưu định kỳ.
- Setup fee báo theo nhu cầu.
- Không public setup fee cố định ở Phase 1.

## 5.4. Target Audience

```txt
SMEs B2C cần tư vấn khách trước chuyển đổi
```

Buyer persona chính:

```txt
Chủ SME / Founder
```

## 5.5. CTA

CTA chính:

```txt
Đặt lịch demo
```

CTA phụ:

```txt
Tư vấn giải pháp
```

## 5.6. Pricing

```txt
Starter: từ 299k/tháng
Growth: từ 799k/tháng
Pro: tư vấn theo nhu cầu
```

Ghi chú:

```txt
Chi phí setup, custom character, outfit hoặc integration sẽ được báo riêng theo nhu cầu.
```

---

## 6. Sitemap Chi Tiết

## 6.1. Sitemap MVP

```txt
/
├── /ezd-ai-chat/
├── /services/
│   ├── /services/ai-brand-character/
│   ├── /services/ar-vr-mr/
│   ├── /services/digital-twin/
│   ├── /services/game-activation/
│   └── /services/interactive-website/
├── /case-studies/
│   └── /case-studies/yen-ai-chat/
├── /about/
└── /contact/
```

## 6.2. Routes Chuẩn Bị Cho Phase 2

```txt
/insights/
/insights/[slug]/

/ezd-ai-chat/homestay-retreat/
/ezd-ai-chat/spa-salon/
/ezd-ai-chat/cafe-restaurant/
/ezd-ai-chat/education-workshop/
```

## 6.3. Navigation Structure

## Main Navigation

| Label | URL | Ghi chú |
|---|---|---|
| EZD AI Chat | `/ezd-ai-chat/` | Hero product |
| Dịch vụ | `/services/ai-brand-character/` hoặc dropdown | Gom 5 service pages |
| Case Study | `/case-studies/yen-ai-chat/` | Case flagship |
| Về EZDesign | `/about/` | Brand/company |
| Liên hệ | `/contact/` | Lead/contact |

## CTA trong Header

| CTA | URL | Loại |
|---|---|---|
| Đặt lịch demo | `/contact/?intent=demo` | Primary |
| Tư vấn giải pháp | `/contact/?intent=consulting` | Secondary nếu cần |

## 6.4. Footer Navigation

| Nhóm | Links |
|---|---|
| Sản phẩm | EZD AI Chat, AI Brand Character |
| Dịch vụ | AR/VR/MR, Digital Twin, Game Activation, Interactive Website |
| Case | Yên AI Chat |
| Công ty | About, Contact |
| Liên hệ | Email, Hotline, Zalo |
| Pháp lý nhẹ | AI disclaimer hoặc note riêng nếu cần |

---

## 7. Page-by-Page Plan

## 7.1. Homepage — `/`

## Mục tiêu

- Giới thiệu định vị mới của EZDesign.
- Đặt EZD AI Chat làm hero product.
- Dẫn người dùng đến demo/contact.
- Giới thiệu hệ sinh thái dịch vụ.
- Tạo niềm tin bằng case Yên AI Chat.

## Section Structure

```txt
1. Hero
2. EZD AI Chat spotlight
3. Problems EZDesign solves
4. Digital touchpoints/services
5. Case study highlight: Yên AI Chat
6. How EZDesign works
7. Why EZDesign
8. Final CTA
```

## Main CTA

```txt
Đặt lịch demo
```

## Secondary CTA

```txt
Khám phá EZD AI Chat
```

## SEO

| Field | Gợi ý |
|---|---|
| Title | EZDesign — AI Brand Assistant & Digital Experience Studio |
| Meta description | EZDesign thiết kế các điểm chạm số biết trò chuyện, tương tác và chuyển đổi — từ EZD AI Chat đến AR/VR, Digital Twin và Game Activation. |
| H1 | Thiết kế điểm chạm số biết trò chuyện, tương tác và chuyển đổi |
| Primary keyword | AI brand assistant |
| Secondary keywords | digital experience studio, AI chatbot cho SME, AR VR marketing |

---

## 7.2. EZD AI Chat — `/ezd-ai-chat/`

## Mục tiêu

- Giải thích sản phẩm rõ ràng.
- Phân biệt với chatbot thường.
- Cho khách trải nghiệm AI thật.
- Trình bày use case, feature và pricing.
- Dẫn khách đặt lịch demo.

## Section Structure

```txt
1. Hero
2. Problem section
3. What is EZD AI Chat?
4. AI Brand Assistant vs chatbot thường
5. Live AI demo: EZD Assistant
6. Use cases theo ngành
7. Core features
8. How it works
9. Pricing
10. FAQ
11. Final CTA
```

## Live Demo

```txt
Character: EZD Assistant
Loại: AI thật
Lưu chat: Không
Disclaimer: Có
Tracking: open demo chat, quick reply click, CTA after chat
```

## Pricing Section

```txt
Starter: từ 299k/tháng
Growth: từ 799k/tháng
Pro: tư vấn theo nhu cầu
```

## SEO

| Field | Gợi ý |
|---|---|
| Title | EZD AI Chat — AI Brand Assistant cho SME B2C |
| Meta description | EZD AI Chat giúp SME B2C có nhân vật AI tư vấn khách, trả lời FAQ, thu lead và chuyển khách sang người thật khi cần. |
| H1 | AI Brand Assistant cho SME B2C |
| Primary keyword | AI chatbot cho SME |
| Secondary keywords | chatbot tư vấn khách hàng, AI thu lead website, AI assistant cho website |

---

## 7.3. AI Brand Character — `/services/ai-brand-character/`

## Mục tiêu

- Giải thích giá trị của nhân vật AI thương hiệu.
- Là service bổ trợ trực tiếp cho EZD AI Chat.
- Là page SEO cho nhóm keyword brand character.

## Section Structure

```txt
1. Hero
2. Vì sao chatbot cần có cá tính thương hiệu?
3. AI Brand Character gồm những gì?
4. Tone, personality, visual, outfit, animation
5. Use cases
6. Quy trình thiết kế character
7. Liên kết sang EZD AI Chat
8. FAQ
9. CTA
```

## SEO

| Field | Gợi ý |
|---|---|
| Title | AI Brand Character — Nhân vật AI thương hiệu |
| Meta description | EZDesign thiết kế AI Brand Character giúp thương hiệu có một nhân vật AI mang giọng nói, cá tính và hình ảnh riêng. |
| Primary keyword | AI brand character |
| Secondary keywords | nhân vật AI thương hiệu, virtual brand assistant |

---

## 7.4. AR/VR/MR — `/services/ar-vr-mr/`

## Mục tiêu

- Giữ năng lực cũ của EZDesign.
- Phục vụ khách cần trải nghiệm tương tác, activation, event.
- Mô tả ẩn danh các project cũ nếu có.

## Section Structure

```txt
1. Hero
2. AR/VR/MR giúp thương hiệu làm gì?
3. Use cases
4. Types of experiences
5. Process
6. Related anonymous projects
7. CTA
```

## SEO

| Field | Gợi ý |
|---|---|
| Title | AR/VR/MR Experience cho thương hiệu |
| Meta description | EZDesign thiết kế trải nghiệm AR, VR và MR giúp thương hiệu tạo tương tác sống động trong event, showroom, activation và chiến dịch marketing. |
| Primary keyword | AR VR marketing |
| Secondary keywords | mixed reality activation, trải nghiệm AR VR |

---

## 7.5. Digital Twin — `/services/digital-twin/`

## Mục tiêu

- Trình bày dịch vụ không gian số, virtual showroom, digital twin.
- Phù hợp với hospitality, showroom, real estate, exhibition.

## Section Structure

```txt
1. Hero
2. Digital Twin là gì?
3. Ứng dụng cho thương hiệu
4. Virtual space/showroom
5. Process
6. Related anonymous projects
7. CTA
```

## SEO

| Field | Gợi ý |
|---|---|
| Title | Digital Twin & Virtual Space cho thương hiệu |
| Meta description | EZDesign xây dựng Digital Twin và virtual space giúp thương hiệu đưa không gian, showroom hoặc trải nghiệm của mình lên môi trường số. |
| Primary keyword | digital twin showroom |
| Secondary keywords | virtual space, showroom ảo |

---

## 7.6. Game Activation — `/services/game-activation/`

## Mục tiêu

- Trình bày game activation như một công cụ tăng tương tác.
- Phù hợp chiến dịch marketing, event, loyalty, brand engagement.

## Section Structure

```txt
1. Hero
2. Game activation là gì?
3. Vì sao game giúp tăng tương tác?
4. Các dạng game activation
5. Use cases
6. Process
7. Related anonymous projects
8. CTA
```

## SEO

| Field | Gợi ý |
|---|---|
| Title | Game Activation Marketing cho thương hiệu |
| Meta description | EZDesign thiết kế game activation và mini game tương tác giúp thương hiệu tăng engagement, thu lead và tạo trải nghiệm chiến dịch đáng nhớ. |
| Primary keyword | game activation marketing |
| Secondary keywords | mini game marketing, interactive campaign |

---

## 7.7. Interactive Website — `/services/interactive-website/`

## Mục tiêu

- Trình bày năng lực làm website/microsite tương tác.
- Liên kết với chính dự án reno website EZDesign như một proof of capability.

## Section Structure

```txt
1. Hero
2. Website không chỉ để xem, mà để tương tác
3. Microsite campaign
4. Interactive storytelling
5. Integration với AI Chat
6. Process
7. Related anonymous projects
8. CTA
```

## SEO

| Field | Gợi ý |
|---|---|
| Title | Interactive Website & Microsite cho thương hiệu |
| Meta description | EZDesign thiết kế website và microsite tương tác giúp thương hiệu kể chuyện, tư vấn khách và tạo chuyển đổi tốt hơn. |
| Primary keyword | interactive website |
| Secondary keywords | microsite tương tác, website trải nghiệm |

---

## 7.8. Case Study Yên AI Chat — `/case-studies/yen-ai-chat/`

## Mục tiêu

- Là bằng chứng năng lực chính cho EZD AI Chat.
- Cho khách thấy một AI Brand Character có thể đại diện thương hiệu ra sao.
- Không public số liệu hoặc flow chat chi tiết.

## Public Scope

```txt
Tên Yên Retreat & Cafe: Có
Hình ảnh thật: Có
Character visual: Có
Quote/testimonial: Có
Số liệu: Không
Flow chat: Không
```

## Section Structure

```txt
1. Hero
2. Bối cảnh thương hiệu
3. Vấn đề cần giải quyết
4. Giải pháp Yên AI Chat
5. Character design
6. Tính năng nổi bật
7. AI demo: Yên AI
8. Kết quả định tính
9. Testimonial
10. CTA: Tôi muốn AI Chat tương tự
```

## SEO

| Field | Gợi ý |
|---|---|
| Title | Yên AI Chat Case Study — AI Brand Assistant cho retreat/hospitality |
| Meta description | Case study Yên AI Chat: cách EZDesign thiết kế nhân vật AI tư vấn khách, trả lời FAQ và hỗ trợ lead cho Yên Retreat & Cafe. |
| Primary keyword | case study AI chatbot |
| Secondary keywords | AI chatbot homestay, AI assistant retreat |

---

## 7.9. About — `/about/`

## Mục tiêu

- Kể câu chuyện EZDesign.
- Tạo niềm tin về năng lực sáng tạo + công nghệ.
- Giải thích vì sao EZDesign làm AI brand assistant và digital experience.

## Section Structure

```txt
1. Hero
2. EZDesign là ai?
3. Triết lý thiết kế điểm chạm số
4. Năng lực cốt lõi
5. Cách làm việc
6. Đối tượng khách hàng phù hợp
7. CTA
```

## SEO

| Field | Gợi ý |
|---|---|
| Title | Về EZDesign — Digital Experience & AI Brand Assistant Studio |
| Meta description | EZDesign là studio thiết kế điểm chạm số giúp thương hiệu tạo trải nghiệm biết trò chuyện, tương tác và chuyển đổi. |

---

## 7.10. Contact — `/contact/`

## Mục tiêu

- Thu lead.
- Cho khách chọn nhu cầu.
- Hỗ trợ đặt lịch demo EZD AI Chat.
- Cung cấp kênh liên hệ trực tiếp.

## Section Structure

```txt
1. Hero
2. Contact/demo form
3. Quick contact channels
4. What happens next?
5. Optional EZD Assistant
6. FAQ ngắn
```

## Form Fields

```txt
Họ tên
Tên doanh nghiệp
Email
Số điện thoại/Zalo
Website hiện tại
Ngành kinh doanh
Bạn quan tâm giải pháp nào?
Mô tả nhu cầu ngắn
```

## Additional Fields for EZD AI Chat

```txt
Kênh handoff mong muốn
Đã có FAQ/knowledge base chưa?
Website muốn gắn AI Chat
```

## SEO

| Field | Gợi ý |
|---|---|
| Title | Liên hệ EZDesign — Đặt lịch demo EZD AI Chat |
| Meta description | Liên hệ EZDesign để đặt lịch demo EZD AI Chat hoặc tư vấn giải pháp trải nghiệm số cho thương hiệu. |

---

## 8. Backlog Triển Khai

## 8.1. Epic List

| Epic | Tên | Mục tiêu |
|---|---|---|
| E01 | Project setup | Khởi tạo Astro project, Tailwind, cấu trúc repo |
| E02 | Design system | Layout, typography, colors, components cơ bản |
| E03 | Content architecture | MDX/data files, content collections |
| E04 | Core pages | Homepage, EZD AI Chat, services, case, about, contact |
| E05 | AI demo integration | Tích hợp AI thật cho EZD Assistant và Yên AI |
| E06 | Lead form backend | Cloudflare Worker, Google Sheets, email notification |
| E07 | SEO foundation | Metadata, sitemap, robots, schema |
| E08 | Tracking | GA4, GSC, custom events |
| E09 | Media & assets | Motion mockup, images, OG, visual assets |
| E10 | QA & deployment | Responsive, performance, accessibility, production deploy |

---

## 8.2. Detailed Backlog

## E01 — Project Setup

| ID | Task | Priority | Owner | Output |
|---|---|---|---|---|
| E01-T01 | Khởi tạo Astro project | Must | Dev | Astro app chạy local |
| E01-T02 | Cài Tailwind CSS | Must | Dev | Tailwind hoạt động |
| E01-T03 | Cài React integration | Must | Dev | React islands sẵn sàng |
| E01-T04 | Thiết lập TypeScript config | Must | Dev | TS config chuẩn |
| E01-T05 | Tạo folder structure | Must | Dev | `src/pages`, `components`, `content`, `data` |
| E01-T06 | Setup lint/format nếu cần | Should | Dev | ESLint/Prettier |
| E01-T07 | Setup environment variables | Must | Dev | `.env.example` |

---

## E02 — Design System

| ID | Task | Priority | Owner | Output |
|---|---|---|---|---|
| E02-T01 | Xác định color tokens | Must | Design/Dev | CSS variables/Tailwind tokens |
| E02-T02 | Xác định typography scale | Must | Design/Dev | Heading/body styles |
| E02-T03 | Tạo layout grid/container | Must | Dev | Responsive container |
| E02-T04 | Tạo button variants | Must | Dev | Primary, secondary, ghost |
| E02-T05 | Tạo card styles | Must | Dev | Product/card/case cards |
| E02-T06 | Tạo form styles | Must | Dev | Input/select/textarea/error |
| E02-T07 | Tạo section spacing system | Must | Dev | Section classes |
| E02-T08 | Tạo visual treatment cho AI/product | Should | Design/Dev | Gradient, device mockup, chat UI |

---

## E03 — Content Architecture

| ID | Task | Priority | Owner | Output |
|---|---|---|---|---|
| E03-T01 | Tạo `src/content/services` | Must | Dev | Service MDX collection |
| E03-T02 | Tạo `src/content/case-studies` | Must | Dev | Case MDX collection |
| E03-T03 | Tạo `src/content/insights` | Should | Dev | Insight collection chuẩn bị sẵn |
| E03-T04 | Tạo schema cho services | Must | Dev | Title, slug, SEO, sections |
| E03-T05 | Tạo schema cho case studies | Must | Dev | Client, industry, summary, SEO |
| E03-T06 | Tạo data navigation | Must | Dev | `navigation.ts` |
| E03-T07 | Tạo data pricing | Must | Dev | `pricing.ts` |
| E03-T08 | Tạo data industries | Should | Dev | `industries.ts` |
| E03-T09 | Tạo data site config | Must | Dev | `site.ts` |

---

## E04 — Core Pages

| ID | Task | Priority | Owner | Output |
|---|---|---|---|---|
| E04-T01 | Build BaseLayout | Must | Dev | Layout chung |
| E04-T02 | Build homepage | Must | Dev/Content | `/` |
| E04-T03 | Build EZD AI Chat page | Must | Dev/Content | `/ezd-ai-chat/` |
| E04-T04 | Build service dynamic page | Must | Dev | `/services/[slug]/` |
| E04-T05 | Viết 5 service MDX files | Must | Content | 5 service pages |
| E04-T06 | Build case study dynamic page | Must | Dev | `/case-studies/[slug]/` |
| E04-T07 | Viết Yên AI Chat case study | Must | Content | Case page |
| E04-T08 | Build About page | Must | Dev/Content | `/about/` |
| E04-T09 | Build Contact page | Must | Dev/Content | `/contact/` |
| E04-T10 | Build Insights routes nhưng chưa nav | Should | Dev | `/insights/`, `/insights/[slug]/` |

---

## E05 — AI Demo Integration

| ID | Task | Priority | Owner | Output |
|---|---|---|---|---|
| E05-T01 | Xác định embed/integration method cho EZD Assistant | Must | Dev | Chat component hoạt động |
| E05-T02 | Xác định embed/integration method cho Yên AI | Must | Dev | Chat component trong case |
| E05-T03 | Tạo React ChatWidget wrapper | Must | Dev | Reusable component |
| E05-T04 | Thêm AI disclaimer | Must | Dev/Content | Disclaimer hiển thị |
| E05-T05 | Tắt lưu nội dung chat theo yêu cầu | Must | Dev | Không lưu chat content |
| E05-T06 | Thêm event tracking open chat | Must | Dev | GA4 event |
| E05-T07 | Thêm event tracking quick reply | Must | Dev | GA4 event |
| E05-T08 | Thêm handoff link tracking | Should | Dev | GA4 event |
| E05-T09 | Kiểm thử guardrail/safety cơ bản | Must | Dev/QA | Test checklist |

---

## E06 — Lead Form Backend

| ID | Task | Priority | Owner | Output |
|---|---|---|---|---|
| E06-T01 | Tạo ContactForm component | Must | Dev | Form frontend |
| E06-T02 | Tạo Cloudflare Worker endpoint | Must | Dev | API endpoint |
| E06-T03 | Validate form input | Must | Dev | Server-side validation |
| E06-T04 | Tích hợp Google Sheets | Must | Dev | Lead ghi vào sheet |
| E06-T05 | Tích hợp email notification | Must | Dev | Email gửi khi có lead |
| E06-T06 | Thêm honeypot | Must | Dev | Chống spam cơ bản |
| E06-T07 | Thêm Cloudflare Turnstile nếu cần | Should | Dev | Chống spam nâng cao |
| E06-T08 | Thêm rate limit | Should | Dev | Giảm abuse |
| E06-T09 | Thêm success/error UI | Must | Dev | UX submit |
| E06-T10 | Track form submit | Must | Dev | GA4 event |

---

## E07 — SEO Foundation

| ID | Task | Priority | Owner | Output |
|---|---|---|---|---|
| E07-T01 | Tạo SEO component | Must | Dev | Title/meta/canonical/OG |
| E07-T02 | Tạo schema helper | Should | Dev | JSON-LD |
| E07-T03 | Tạo sitemap.xml | Must | Dev | Sitemap hoạt động |
| E07-T04 | Tạo robots.txt | Must | Dev | Robots hoạt động |
| E07-T05 | Tạo OG image strategy | Must | Design/Dev | OG images |
| E07-T06 | Thêm FAQ schema cho EZD AI Chat | Should | Dev/Content | FAQ structured data |
| E07-T07 | Thêm Organization schema | Should | Dev | JSON-LD |
| E07-T08 | Thêm Breadcrumb nếu cần | Should | Dev | Breadcrumb UX/SEO |
| E07-T09 | Kiểm tra H1/meta từng page | Must | QA/SEO | SEO checklist |

---

## E08 — Tracking

| ID | Task | Priority | Owner | Output |
|---|---|---|---|---|
| E08-T01 | Tạo GA4 property | Must | Owner | GA4 ready |
| E08-T02 | Gắn GA4 vào site | Must | Dev | Tracking base |
| E08-T03 | Setup Google Search Console | Must | Owner/Dev | GSC verified |
| E08-T04 | Track CTA click | Must | Dev | GA4 event |
| E08-T05 | Track form submit | Must | Dev | GA4 event |
| E08-T06 | Track click Zalo | Must | Dev | GA4 event |
| E08-T07 | Track click hotline | Must | Dev | GA4 event |
| E08-T08 | Track click email | Must | Dev | GA4 event |
| E08-T09 | Track open demo chat | Must | Dev | GA4 event |
| E08-T10 | Track quick reply click | Must | Dev | GA4 event |
| E08-T11 | Track pricing package click | Should | Dev | GA4 event |
| E08-T12 | Track case study click | Should | Dev | GA4 event |

---

## E09 — Media & Assets

| ID | Task | Priority | Owner | Output |
|---|---|---|---|---|
| E09-T01 | Gom logo vector | Must | Design | Logo asset |
| E09-T02 | Gom brand colors/font | Must | Design | Brand tokens |
| E09-T03 | Chuẩn bị EZD Assistant visual | Must | Design | Character asset |
| E09-T04 | Chuẩn bị Yên AI visual | Must | Design | Character asset |
| E09-T05 | Chuẩn bị motion mockup render hero | Must | Design | Hero video |
| E09-T06 | Chuẩn bị mockup EZD AI Chat | Must | Design | Product visual |
| E09-T07 | Chuẩn bị ảnh Yên Retreat & Cafe | Must | Design/Owner | Case images |
| E09-T08 | Chuẩn bị service illustrations | Should | Design | 5 service images |
| E09-T09 | Chuẩn bị OG images | Must | Design | OG per key page |
| E09-T10 | Optimize images/video | Must | Dev | Web-ready assets |

---

## E10 — QA & Deployment

| ID | Task | Priority | Owner | Output |
|---|---|---|---|---|
| E10-T01 | Kiểm thử responsive | Must | QA/Dev | Mobile/tablet/desktop |
| E10-T02 | Kiểm thử form submit | Must | QA/Dev | Lead ghi sheet + email |
| E10-T03 | Kiểm thử AI chat | Must | QA/Dev | EZD + Yên |
| E10-T04 | Kiểm thử tracking events | Must | QA/Dev | GA4 debug |
| E10-T05 | Kiểm thử SEO metadata | Must | QA/SEO | Checklist |
| E10-T06 | Kiểm thử performance | Must | QA/Dev | Lighthouse |
| E10-T07 | Kiểm thử accessibility cơ bản | Should | QA/Dev | Keyboard/contrast/alt |
| E10-T08 | Setup Cloudflare Pages | Must | Dev | Production pipeline |
| E10-T09 | Setup preview deploy nếu có | Should | Dev | PR/branch preview |
| E10-T10 | Deploy production | Must | Dev | Live site |
| E10-T11 | Post-launch smoke test | Must | QA/Owner | Production verified |

---

## 9. Component List

## 9.1. Layout Components

| Component | Type | Mô tả | Priority |
|---|---|---|---|
| `BaseLayout.astro` | Astro | Layout chung toàn site | Must |
| `Header.astro` | Astro | Navigation, CTA | Must |
| `Footer.astro` | Astro | Footer links/contact | Must |
| `SEO.astro` | Astro | Meta tags, canonical, OG | Must |
| `Breadcrumb.astro` | Astro | Breadcrumb cho page con | Should |
| `Section.astro` | Astro | Wrapper section spacing | Should |
| `Container.astro` | Astro | Max-width layout | Should |

## 9.2. Common UI Components

| Component | Type | Mô tả | Priority |
|---|---|---|---|
| `Button.astro` | Astro | Primary/secondary/ghost CTA | Must |
| `Card.astro` | Astro | Card base | Must |
| `Badge.astro` | Astro | Label/category/status | Should |
| `IconText.astro` | Astro | Icon + text block | Should |
| `CTASection.astro` | Astro | CTA cuối page | Must |
| `FAQ.astro` | Astro/React | FAQ accordion hoặc static | Must |
| `PricingCard.astro` | Astro | Pricing plan card | Must |
| `FeatureGrid.astro` | Astro | Feature cards | Must |
| `ProcessSteps.astro` | Astro | Quy trình 3–5 bước | Should |
| `Testimonial.astro` | Astro | Quote/testimonial | Must |
| `LogoCloud.astro` | Astro | Nếu có logo/case | Could |

## 9.3. Page-Specific Components

| Component | Type | Mô tả | Priority |
|---|---|---|---|
| `HomeHero.astro` | Astro | Hero homepage | Must |
| `ProductHero.astro` | Astro | Hero product/service | Must |
| `EZDChatHero.astro` | Astro | Hero riêng EZD AI Chat | Must |
| `ServiceCard.astro` | Astro | Card dẫn sang service pages | Must |
| `CaseStudyCard.astro` | Astro | Card case study | Should |
| `ComparisonTable.astro` | Astro | Chatbot thường vs EZD AI Chat | Must |
| `IndustryUseCases.astro` | Astro | Use cases theo ngành | Must |
| `CharacterShowcase.astro` | Astro | Trình bày AI character | Must |
| `HeroVideo.astro` | Astro | Motion mockup render | Must |
| `MediaMockup.astro` | Astro | Product/device mockup | Must |

## 9.4. Interactive Components

| Component | Type | Mô tả | Priority |
|---|---|---|---|
| `ChatWidget.tsx` | React | Wrapper cho AI chat demo | Must |
| `ContactForm.tsx` | React | Form submit + validation | Must |
| `PricingToggle.tsx` | React | Nếu cần toggle package | Could |
| `IndustrySelector.tsx` | React | Nếu cần filter use cases | Could |
| `EventTracker.tsx` | React/utility | Helper track GA4 events | Must |

## 9.5. Utility Modules

| Module | Mô tả | Priority |
|---|---|---|
| `src/utils/seo.ts` | Generate metadata | Must |
| `src/utils/schema.ts` | Generate JSON-LD | Should |
| `src/utils/routes.ts` | Central route config | Should |
| `src/utils/analytics.ts` | GA4 event helpers | Must |
| `src/utils/form-validation.ts` | Client-side validation | Must |
| `src/data/site.ts` | Site config | Must |
| `src/data/navigation.ts` | Nav/footer links | Must |
| `src/data/pricing.ts` | Pricing data | Must |
| `src/data/industries.ts` | Industry use cases | Should |

---

## 10. Content List

## 10.1. Global Content

| Content | Mục đích | Priority | Owner |
|---|---|---|---|
| Brand statement | Dùng homepage/about | Must | Content |
| Short company intro | Footer/about | Must | Content |
| Contact info | Footer/contact | Must | Owner |
| CTA copy | Toàn site | Must | Content |
| AI disclaimer | Chat demo | Must | Content |
| Pricing note | EZD AI Chat | Must | Content |
| Form success/error copy | Contact form | Must | Content |

## 10.2. Page Content

| Page | Content cần viết | Priority |
|---|---|---|
| Homepage | Hero, product spotlight, services, process, why EZDesign, CTA | Must |
| EZD AI Chat | Full landing page copy, FAQ, pricing, comparison | Must |
| AI Brand Character | Service page copy | Must |
| AR/VR/MR | Service page copy | Must |
| Digital Twin | Service page copy | Must |
| Game Activation | Service page copy | Must |
| Interactive Website | Service page copy | Must |
| Yên AI Chat Case | Case study copy | Must |
| About | Company story, philosophy, capabilities | Must |
| Contact | Contact intro, form labels, next steps | Must |
| Insights | Placeholder/index copy nếu route có sẵn | Should |

## 10.3. EZD AI Chat FAQ Draft

```txt
EZD AI Chat khác chatbot thường như thế nào?
EZD AI Chat phù hợp với ngành nào?
Có cần tự cấu hình AI không?
EZDesign có setup giúp không?
AI có trả lời sai không?
AI có lưu nội dung chat không?
Có thể chuyển khách sang Zalo/Messenger/hotline không?
Có thể tùy biến nhân vật AI không?
Chi phí gồm những gì?
Bao lâu có thể triển khai?
```

## 10.4. Service Page FAQ Draft

```txt
Dịch vụ này phù hợp với doanh nghiệp nào?
Thời gian triển khai thường bao lâu?
EZDesign có làm từ ý tưởng đến triển khai không?
Có thể tích hợp với website hiện tại không?
Chi phí được tính như thế nào?
Có thể làm dự án nhỏ/MVP trước không?
```

## 10.5. Case Study Content Checklist

```txt
Tên khách hàng
Ngành
Bối cảnh
Vấn đề
Giải pháp
Vai trò của EZDesign
Character visual
Ảnh thật được phép dùng
Testimonial/quote
Kết quả định tính
CTA liên quan
```

---

## 11. Technical Architecture

## 11.1. High-Level Architecture

```txt
User Browser
   ↓
Cloudflare Pages
   ↓
Astro Static Site
   ├── Static pages
   ├── MDX content
   ├── React islands
   └── AI chat embed/wrapper
   ↓
Cloudflare Worker
   ├── Form validation
   ├── Spam protection
   ├── Google Sheets write
   └── Email notification
   ↓
Google Sheets / Email Inbox
```

## 11.2. Frontend Stack

```txt
Astro
React islands
Tailwind CSS
MDX / Astro Content Collections
TypeScript
```

## 11.3. Hosting Stack

```txt
Cloudflare Pages
Cloudflare Worker
Cloudflare DNS
```

## 11.4. Analytics Stack

```txt
Google Analytics 4
Google Search Console
```

## 11.5. Proposed Repository Structure

```txt
ezdesign-astro/
├── public/
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── og/
│   ├── images/
│   └── videos/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── product/
│   │   ├── service/
│   │   ├── case-study/
│   │   ├── forms/
│   │   └── chat/
│   ├── content/
│   │   ├── services/
│   │   ├── case-studies/
│   │   └── insights/
│   ├── data/
│   │   ├── site.ts
│   │   ├── navigation.ts
│   │   ├── pricing.ts
│   │   └── industries.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ServiceLayout.astro
│   │   ├── CaseStudyLayout.astro
│   │   └── InsightLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── ezd-ai-chat.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── services/
│   │   │   └── [slug].astro
│   │   ├── case-studies/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── insights/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       ├── analytics.ts
│       ├── form-validation.ts
│       ├── routes.ts
│       ├── schema.ts
│       └── seo.ts
├── workers/
│   └── lead-form/
│       ├── src/
│       │   └── index.ts
│       └── wrangler.toml
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## 11.6. Astro Rendering Strategy

| Loại page/component | Strategy |
|---|---|
| Homepage | Static generated |
| EZD AI Chat page | Static + React island cho chat |
| Services | Static generated từ MDX |
| Case studies | Static generated từ MDX |
| Contact | Static + React form |
| Insights | Static generated từ MDX |
| Chat widget | React island |
| Contact form | React island |

## 11.7. Cloudflare Worker Form Flow

```txt
1. User submit form
2. Frontend validate basic fields
3. POST request to Cloudflare Worker
4. Worker validates payload
5. Worker checks honeypot/rate limit/Turnstile if enabled
6. Worker writes row to Google Sheets
7. Worker sends email notification
8. Worker returns success/error response
9. Frontend shows success/error message
10. GA4 tracks form_submit event
```

## 11.8. Environment Variables

## Astro / Frontend

```txt
PUBLIC_GA4_ID
PUBLIC_SITE_URL
PUBLIC_WORKER_FORM_ENDPOINT
PUBLIC_EZD_CHAT_WIDGET_ID
PUBLIC_YEN_CHAT_WIDGET_ID
```

## Cloudflare Worker

```txt
GOOGLE_SERVICE_ACCOUNT_EMAIL
GOOGLE_PRIVATE_KEY
GOOGLE_SHEET_ID
EMAIL_API_KEY
EMAIL_FROM
EMAIL_TO
ALLOWED_ORIGIN
TURNSTILE_SECRET_KEY
```

## 11.9. Security Notes

```txt
Không expose Google credentials phía frontend
Validate server-side tại Worker
Không lưu nội dung chat
Không gửi PII vào GA4 event parameters
Dùng honeypot/rate limit/Turnstile cho form
Set CORS đúng origin
Không log thông tin nhạy cảm ở Worker
```

---

## 12. SEO Plan

## 12.1. SEO Requirements Per Page

Mỗi page phải có:

```txt
Title
Meta description
Canonical URL
Open Graph title
Open Graph description
Open Graph image
H1 duy nhất
Alt text cho ảnh chính
Internal links
CTA rõ
```

## 12.2. Structured Data

| Page | Schema | Priority |
|---|---|---|
| Homepage | Organization/WebSite | Should |
| EZD AI Chat | Product/SoftwareApplication + FAQ | Should |
| Service pages | Service | Could |
| Case study | Article/CreativeWork | Could |
| Contact | LocalBusiness hoặc Organization contact | Could |

## 12.3. Sitemap

Sitemap cần include:

```txt
/
/ezd-ai-chat/
/services/ai-brand-character/
/services/ar-vr-mr/
/services/digital-twin/
/services/game-activation/
/services/interactive-website/
/case-studies/yen-ai-chat/
/about/
/contact/
```

Insights route nếu chưa public không cần submit vào nav, nhưng nếu route live thì vẫn có thể xuất hiện trong sitemap khi có bài.

## 12.4. SEO Keyword Mapping

| URL | Primary Keyword | Secondary Keywords |
|---|---|---|
| `/` | AI brand assistant | digital experience studio, AI chatbot cho SME |
| `/ezd-ai-chat/` | AI chatbot cho SME | chatbot tư vấn khách hàng, AI thu lead website |
| `/services/ai-brand-character/` | AI brand character | nhân vật AI thương hiệu, virtual brand assistant |
| `/services/ar-vr-mr/` | AR VR marketing | mixed reality activation, trải nghiệm AR VR |
| `/services/digital-twin/` | digital twin showroom | virtual space, showroom ảo |
| `/services/game-activation/` | game activation marketing | mini game marketing, interactive campaign |
| `/services/interactive-website/` | interactive website | microsite tương tác, website trải nghiệm |
| `/case-studies/yen-ai-chat/` | case study AI chatbot | AI chatbot homestay, AI assistant retreat |

---

## 13. Tracking Plan

## 13.1. GA4 Events

| Event name | Trigger | Parameters |
|---|---|---|
| `cta_click` | Click CTA chính/phụ | `cta_label`, `page_path`, `destination` |
| `form_submit` | Submit form thành công | `form_name`, `page_path`, `intent` |
| `form_error` | Form lỗi | `form_name`, `error_type` |
| `contact_click` | Click email/hotline/Zalo | `contact_type`, `page_path` |
| `chat_open` | Mở AI chat | `character`, `page_path` |
| `chat_quick_reply_click` | Click quick reply | `character`, `reply_label` |
| `chat_handoff_click` | Click handoff | `character`, `handoff_type` |
| `pricing_plan_click` | Click pricing CTA | `plan_name`, `page_path` |
| `case_study_click` | Click vào case | `case_slug`, `page_path` |
| `service_card_click` | Click service card | `service_slug`, `page_path` |

## 13.2. Tracking Constraints

```txt
Không gửi tên, email, số điện thoại vào GA4
Không gửi nội dung chat vào GA4
Không gửi nội dung message form vào GA4
Chỉ track event metadata không nhạy cảm
```

---

## 14. Timeline Triển Khai

## 14.1. Assumption

Timeline dưới đây giả định team tối thiểu:

```txt
1 developer chính
1 content/BA
1 designer hoặc người chuẩn bị asset
1 owner review/chốt nội dung
```

Nếu cùng một người đảm nhiệm nhiều vai trò, timeline có thể kéo dài hơn.

---

## 14.2. Recommended Timeline — 5 Tuần

## Phase 0 — Preparation & Asset Gathering

Thời lượng: 2–3 ngày

### Mục tiêu

- Chốt input cần thiết.
- Gom asset.
- Chuẩn bị thông tin tài khoản.
- Không bắt đầu dev khi thiếu nội dung cốt lõi.

### Tasks

```txt
Gom logo/vector/font/colors
Gom character visual EZD Assistant và Yên AI
Gom ảnh Yên Retreat & Cafe
Xác nhận email nhận lead
Xác nhận Google Sheet destination
Xác nhận GA4/GSC access
Xác nhận Cloudflare/GitHub access
Gom copy hiện có
```

### Deliverables

```txt
Asset folder
Access checklist
Content source folder
Lead form destination ready
```

---

## Phase 1 — Foundation Setup

Thời lượng: Tuần 1

### Mục tiêu

Xây nền kỹ thuật và UI system cơ bản.

### Tasks

```txt
Khởi tạo Astro project
Cài Tailwind
Cài React integration
Setup folder structure
Tạo BaseLayout/Header/Footer
Tạo SEO component
Tạo design tokens
Tạo common components
Setup content collections
Setup Cloudflare Pages project
```

### Deliverables

```txt
Astro app chạy local
Layout cơ bản
Component base
Content structure
Deploy preview đầu tiên
```

### Acceptance Criteria

```txt
Project build không lỗi
Header/Footer hiển thị
Tailwind hoạt động
SEO component nhận props
Có route test deploy trên Cloudflare Pages
```

---

## Phase 2 — Core Content Pages

Thời lượng: Tuần 2

### Mục tiêu

Hoàn thành khung các page chính và content đầu tiên.

### Tasks

```txt
Build homepage
Build EZD AI Chat page
Build service dynamic route
Tạo 5 service MDX files
Build about page
Build contact page UI
Build case study dynamic route
Tạo Yên AI Chat MDX draft
```

### Deliverables

```txt
Homepage draft
EZD AI Chat page draft
5 service pages draft
About page draft
Contact page UI
Yên AI Chat case draft
```

### Acceptance Criteria

```txt
Tất cả route chính truy cập được
Không có broken link nội bộ chính
Mỗi page có H1
Mỗi page có CTA
Content draft đủ để review
```

---

## Phase 3 — AI Demo, Form & Integrations

Thời lượng: Tuần 3

### Mục tiêu

Tích hợp các phần chuyển đổi quan trọng: AI thật và form lead.

### Tasks

```txt
Tích hợp EZD Assistant chat
Tích hợp Yên AI chat
Tạo ChatWidget wrapper
Thêm AI disclaimer
Tạo ContactForm component
Tạo Cloudflare Worker endpoint
Tích hợp Google Sheets
Tích hợp email notification
Thêm validation
Thêm honeypot/rate limit
Track form submit
Track chat open/quick reply
```

### Deliverables

```txt
AI chat hoạt động trên site
Contact/demo form submit thành công
Lead ghi vào Google Sheets
Email notification hoạt động
GA4 events cơ bản
```

### Acceptance Criteria

```txt
EZD Assistant chat hoạt động
Yên AI chat hoạt động
Form submit test thành công
Google Sheets có row mới
Email notification nhận được
Không lưu nội dung chat
Không expose secret trên frontend
```

---

## Phase 4 — SEO, Media & Polish

Thời lượng: Tuần 4

### Mục tiêu

Hoàn thiện SEO, media, responsive và UI polish.

### Tasks

```txt
Thêm metadata cho từng page
Tạo sitemap.xml
Tạo robots.txt
Thêm canonical URL
Thêm OG images
Thêm FAQ schema nếu kịp
Thêm Organization schema nếu kịp
Tích hợp motion mockup render hero
Optimize image/video
Responsive QA
Accessibility basic QA
Performance QA
Copy polish
```

### Deliverables

```txt
SEO-ready website
Motion mockup hero
Optimized images
Responsive layout
Content polished
```

### Acceptance Criteria

```txt
Mỗi page có title/meta/OG/canonical
Sitemap hoạt động
Robots hoạt động
Hero video load ổn
Mobile layout tốt
Form vẫn hoạt động sau polish
AI chat vẫn hoạt động
```

---

## Phase 5 — Final QA & Launch

Thời lượng: Tuần 5

### Mục tiêu

Kiểm thử production, launch và smoke test.

### Tasks

```txt
Full site QA
Cross-browser test
Mobile test
Form test production
AI chat test production
GA4 debug
GSC verification
Cloudflare Pages production deploy
DNS check nếu cần
Post-launch smoke test
Fix critical bugs
```

### Deliverables

```txt
Website production live
GA4 collecting data
GSC verified
Lead flow verified
Launch checklist completed
```

### Acceptance Criteria

```txt
Production site live trên domain chính
Không có broken route quan trọng
Form hoạt động production
AI chat hoạt động production
GA4 nhận event
GSC verified
Core pages indexable
Owner sign-off
```

---

## 14.3. Fast Track Timeline — 3 Tuần

Có thể dùng nếu cần launch nhanh.

## Tuần 1

```txt
Project setup
Design system tối thiểu
Homepage draft
EZD AI Chat draft
Service route
Contact page UI
```

## Tuần 2

```txt
5 service pages
Yên AI Chat case
AI chat integration
Cloudflare Worker form
Google Sheets/email
```

## Tuần 3

```txt
SEO
Tracking
Media
Responsive QA
Production deploy
Smoke test
```

Rủi ro của fast track:

```txt
Ít thời gian polish UI
Content có thể chưa đủ sâu
FAQ/schema có thể phải lùi sang sau launch
Service pages có thể ngắn hơn kỳ vọng
```

---

## 15. Milestones

| Milestone | Điều kiện hoàn thành |
|---|---|
| M1 — Foundation Ready | Astro, Tailwind, layout, content structure, deploy preview |
| M2 — Pages Draft Ready | Homepage, EZD AI Chat, services, case, about, contact có draft |
| M3 — Conversion Ready | AI chat + form + Google Sheets + email notification hoạt động |
| M4 — SEO/Tracking Ready | Metadata, sitemap, robots, GA4 events, GSC ready |
| M5 — Launch Ready | QA pass, production deploy, owner sign-off |

---

## 16. Definition of Done

## 16.1. Site-Level DoD

```txt
Website build thành công
Deploy thành công trên Cloudflare Pages
Tất cả routes MVP hoạt động
Header/footer navigation đúng
Responsive trên mobile/tablet/desktop
Không có lỗi JS nghiêm trọng trên console
Form lead hoạt động
AI chat hoạt động
SEO metadata đầy đủ
GA4 tracking hoạt động
GSC verified
```

## 16.2. Page-Level DoD

Mỗi page phải có:

```txt
H1 duy nhất
Title riêng
Meta description riêng
Canonical
OG image
CTA rõ
Internal links phù hợp
Responsive layout
Alt text cho ảnh quan trọng
Không có placeholder copy
Không có broken image
```

## 16.3. Form DoD

```txt
Validate input
Có success state
Có error state
Có chống spam
Ghi dữ liệu vào Google Sheets
Gửi email notification
Không expose secret
Track form_submit
Không gửi PII vào GA4
```

## 16.4. AI Demo DoD

```txt
EZD Assistant hoạt động
Yên AI hoạt động
Có disclaimer
Không lưu nội dung chat
Không thu thập thông tin nhạy cảm
Track open chat
Track quick reply click
Track handoff nếu có
```

## 16.5. SEO DoD

```txt
Sitemap.xml hoạt động
Robots.txt hoạt động
Canonical đúng
OG preview đúng cho page chính
Title/meta không trùng lặp quá mức
H1 không bị thiếu
GSC verified
```

---

## 17. Risks & Mitigation

| Rủi ro | Tác động | Khả năng | Giải pháp |
|---|---|---:|---|
| Content chậm | Trễ launch | Cao | Dùng content draft trước, polish sau |
| Asset thiếu | UI kém thuyết phục | Trung bình | Ưu tiên mockup EZD AI Chat và Yên AI trước |
| AI demo lỗi | Ảnh hưởng niềm tin | Trung bình | Có fallback CTA/form nếu chat không load |
| Form bị spam | Lead sheet bẩn | Trung bình | Honeypot + rate limit + Turnstile nếu cần |
| GA4 event thiếu | Khó đo hiệu quả | Trung bình | Tạo tracking checklist |
| Scope phình | Trễ timeline | Cao | Giữ out-of-scope rõ ràng |
| Không có staging riêng | Risk production | Thấp/Trung bình | Dùng preview deploy trước merge main |
| SEO content mỏng | SEO tăng chậm | Trung bình | Tối thiểu mỗi page có problem/solution/use case/FAQ |

---

## 18. Launch Checklist

## Technical

```txt
Build success
Cloudflare Pages production connected
Environment variables set
Worker deployed
Worker CORS correct
Google Sheets write tested
Email notification tested
GA4 installed
GSC verified
Sitemap submitted
Robots checked
```

## Content

```txt
Homepage final copy
EZD AI Chat final copy
5 service pages final copy
Yên AI Chat case final copy
About final copy
Contact final copy
FAQ reviewed
Pricing reviewed
AI disclaimer reviewed
```

## Design/Media

```txt
Logo correct
Colors correct
Hero video optimized
Images optimized
OG images uploaded
Mobile layout reviewed
Character visuals correct
Yên images approved
```

## QA

```txt
All links checked
All forms tested
AI chat tested
Tracking events tested
Responsive tested
Performance checked
Accessibility basics checked
No placeholder text
No broken images
No secret exposed
```

---

## 19. Post-Launch Plan

## Week 1 After Launch

```txt
Monitor GA4 events
Check Search Console coverage
Test form daily
Check Google Sheets lead data
Fix critical bugs
Review user behavior
Update copy nếu có feedback
```

## Month 1 After Launch

```txt
Review page performance
Review CTA clicks
Review form conversion
Review AI demo usage
Identify top pages
Identify drop-off points
Plan content improvements
Plan first insight articles
Plan industry landing pages
```

## Suggested Phase 2 Backlog

```txt
Industry landing pages cho EZD AI Chat
Insights/blog publishing
More case studies
FAQ/schema expansion
CMS evaluation
Better analytics dashboard
Lead source attribution
More advanced chat handoff tracking
English/i18n preparation
```

---

## 20. Recommended Next Steps

## Step 1 — Chốt Project Plan

Review tài liệu này và chốt:

```txt
Timeline 5 tuần hay fast track 3 tuần
Owner cho từng nhóm việc
Danh sách asset đã có/chưa có
Tài khoản cần cấp quyền
```

## Step 2 — Lập Content Brief

Tạo content brief riêng cho:

```txt
Homepage
EZD AI Chat
5 service pages
Yên AI Chat case
About
Contact
```

## Step 3 — Lập Technical Spec

Tạo technical spec riêng cho:

```txt
Astro architecture
Content collections
Chat widget integration
Cloudflare Worker form endpoint
GA4 event tracking
SEO implementation
```

## Step 4 — Lập Sprint Backlog

Chuyển backlog trong tài liệu này thành task cụ thể theo sprint/kanban:

```txt
Todo
In Progress
Review
Done
```

---

## 21. Final Summary

Phase 1 của dự án EZDesign Website Reno cần tập trung vào một mục tiêu chính:

> Launch một website Astro nhiều trang, có định vị rõ, có EZD AI Chat làm hero product, có AI demo thật, có form lead hoạt động, có SEO foundation và có tracking cơ bản.

Không nên mở rộng Phase 1 thành một SaaS dashboard hoặc CMS phức tạp. Website mới cần làm tốt vai trò marketing, bán hàng và chứng minh năng lực trước.

Khi Phase 1 ổn định, EZDesign có thể tiếp tục mở rộng sang:

```txt
Industry landing pages
Insights/blog
More case studies
CMS
Multi-language
Self-service SaaS dashboard
Advanced analytics
```
