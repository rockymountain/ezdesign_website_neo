# EZDesign Website Reno — BA Alignment v1.0

## 1. Mục đích tài liệu

Tài liệu này tổng hợp toàn bộ các điểm đã thống nhất cho dự án reno website EZDesign sang framework Astro, đồng thời bổ sung định vị sản phẩm chủ lực mới **EZD AI Chat**.

BA Alignment này là cơ sở để triển khai các bước tiếp theo:

* Lập project plan chi tiết
* Thiết kế sitemap và information architecture
* Viết content brief cho từng page
* Thiết kế UI/UX system
* Xây technical architecture
* Lập backlog triển khai Astro
* Chuẩn bị tracking, form lead, SEO và deploy

---

# 2. Bối cảnh dự án

Website EZDesign hiện tại là website static đơn trang, phù hợp với giai đoạn giới thiệu năng lực ban đầu nhưng chưa đủ tốt cho định hướng mở rộng thành website nhiều trang, quản trị SEO chuyên nghiệp và hỗ trợ bán sản phẩm/dịch vụ rõ ràng hơn.

EZDesign sẽ reno website theo hướng **product-led marketing website**, trong đó website không chỉ là portfolio mà còn là hệ thống định vị, giới thiệu sản phẩm, chứng minh năng lực và thu lead.

Framework được chọn cho bản reno là **Astro**, với định hướng xây website nhanh, nhẹ, SEO tốt, dễ mở rộng nội dung và phù hợp với mô hình nhiều landing page.

---

# 3. Định vị thương hiệu

## 3.1. Định vị chính

EZDesign đi theo hướng định vị **Hybrid**:

> EZDesign thiết kế các điểm chạm số biết trò chuyện, tương tác và chuyển đổi — từ AI brand assistant đến AR/VR, Digital Twin và Game Activation.

## 3.2. Vai trò của EZD AI Chat

**EZD AI Chat là hero product** của website mới.

Điều này có nghĩa:

* Homepage cần ưu tiên giới thiệu EZD AI Chat trước.
* EZD AI Chat có landing page riêng.
* Các dịch vụ khác vẫn hiện diện nhưng đóng vai trò hệ sinh thái/năng lực bổ trợ.
* Website mới cần giúp khách hiểu nhanh rằng EZDesign đang có một sản phẩm AI cụ thể, không chỉ là một studio dịch vụ sáng tạo.

## 3.3. Thông điệp thương hiệu tổng quát

Thông điệp đề xuất cho website mới:

> EZDesign giúp thương hiệu tạo ra các điểm chạm số biết trò chuyện, tương tác và chuyển đổi — từ AI brand assistant cho website đến AR/VR, Digital Twin, Game Activation và microsite tương tác.

## 3.4. Cảm nhận thương hiệu mong muốn

Website mới cần tạo cảm giác:

* Hiện đại
* Đáng tin
* Có tính tương tác
* Dễ tiếp cận
* Có hơi thở AI
* Creative friendly

EZDesign muốn nghiêng về hướng **creative friendly** hơn là quá tech-heavy hoặc enterprise-heavy.

---

# 4. Sản phẩm chủ lực: EZD AI Chat

## 4.1. Định nghĩa sản phẩm

> EZD AI Chat là AI brand assistant giúp SME B2C tư vấn khách, trả lời FAQ, thu lead và chuyển khách sang người thật khi cần.

EZD AI Chat không được định vị như một chatbot phổ thông. Sản phẩm cần được trình bày như một **AI Brand Character / AI Brand Assistant** có khả năng đại diện thương hiệu trong tương tác với khách hàng trên website.

## 4.2. Mô hình sản phẩm

Mô hình đã thống nhất:

```txt
Managed SaaS + setup fee
```

Cụ thể:

* EZDesign setup cấu hình cho từng khách hàng.
* Khách trả phí hàng tháng.
* Team EZD vận hành và tối ưu định kỳ.
* Có setup fee, nhưng không public giá cố định trên website.
* Setup fee sẽ được báo theo nhu cầu.

## 4.3. Điểm khác biệt ưu tiên

Thứ tự điểm khác biệt của EZD AI Chat:

```txt
1. AI Brand Character
2. Tư vấn và thu lead
3. Dễ triển khai cho SME
4. Handoff sang người thật
5. Visual/outfit/animation monetization
```

## 4.4. Ý nghĩa BA của định vị này

EZD AI Chat cần được truyền thông theo hướng:

* Không chỉ trả lời câu hỏi.
* Không chỉ là chatbot FAQ.
* Không chỉ là automation.
* Là một nhân vật AI có giọng nói thương hiệu.
* Có thể tư vấn, dẫn dắt, thu lead và chuyển tiếp sang người thật.
* Có thể tùy biến visual/outfit/animation để trở thành một phần nhận diện thương hiệu.

---

# 5. Khách hàng mục tiêu

## 5.1. Nhóm khách hàng chính

Website mới ưu tiên nói với:

```txt
SMEs B2C cần tư vấn khách trước chuyển đổi
```

Các ngành ưu tiên:

* Homestay
* Retreat
* Khách sạn nhỏ
* Cafe
* Nhà hàng
* Spa
* Salon
* Studio
* Wedding/event
* Giáo dục
* Workshop/lớp học
* Local brand

## 5.2. Buyer persona chính

Persona chính:

```txt
Chủ SME / Founder
```

Lý do:

* Đây là nhóm ra quyết định nhanh.
* Phù hợp với pricing subscription vừa phải.
* Phù hợp với mô hình managed SaaS.
* Có nhu cầu tăng lead nhưng thiếu nguồn lực kỹ thuật.
* Quan tâm nhiều đến hiệu quả thực tế hơn là công nghệ phức tạp.

## 5.3. Nỗi đau chính của khách hàng

Các nỗi đau cần phản ánh trong nội dung website:

* Khách hỏi nhiều câu giống nhau nhưng nhân sự trả lời không kịp.
* Website có traffic nhưng không chuyển đổi tốt thành lead.
* Chatbot truyền thống quá máy móc.
* Khách cần được tư vấn trước khi mua, đặt lịch hoặc để lại thông tin.
* SME không có đội kỹ thuật để tự xây hệ thống AI riêng.
* Thương hiệu muốn tạo trải nghiệm khác biệt nhưng vẫn phải dễ triển khai.

---

# 6. Sitemap MVP

## 6.1. Sitemap đã thống nhất

MVP website mới gồm các page chính:

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

## 6.2. Định hướng mở rộng

Phase 1 chưa cần hiển thị blog/insights trên navigation, nhưng codebase cần chuẩn bị sẵn route:

```txt
/insights/
/insights/[slug]/
```

Trong tương lai có thể mở rộng thêm các landing page theo ngành:

```txt
/ezd-ai-chat/homestay-retreat/
/ezd-ai-chat/spa-salon/
/ezd-ai-chat/cafe-restaurant/
/ezd-ai-chat/education-workshop/
```

## 6.3. Cấu trúc route kỹ thuật

Đã thống nhất hướng **Hybrid**:

* EZD AI Chat viết riêng vì là hero product.
* Các service pages còn lại dùng dynamic route.

Đề xuất cấu trúc:

```txt
src/pages/index.astro
src/pages/ezd-ai-chat.astro
src/pages/services/[slug].astro
src/pages/case-studies/[slug].astro
src/pages/about.astro
src/pages/contact.astro
src/pages/insights/index.astro
src/pages/insights/[slug].astro
```

---

# 7. Page strategy

## 7.1. Homepage

Homepage có nhiệm vụ:

* Giới thiệu định vị mới của EZDesign.
* Đẩy EZD AI Chat như hero product.
* Dẫn người dùng sang các service pages.
* Tạo niềm tin bằng case Yên AI Chat.
* Dẫn về CTA chính: Đặt lịch demo.

Cấu trúc đề xuất:

```txt
Hero
EZD AI Chat spotlight
Các điểm chạm số EZDesign thiết kế
Case study nổi bật: Yên AI Chat
Quy trình làm việc
Vì sao chọn EZDesign
CTA đặt lịch demo
```

## 7.2. EZD AI Chat page

Đây là landing page quan trọng nhất của website.

Mục tiêu:

* Giải thích EZD AI Chat là gì.
* Phân biệt với chatbot thường.
* Cho thấy giá trị tư vấn, thu lead và handoff.
* Cho khách trải nghiệm AI thật.
* Trình bày pricing khoảng giá.
* Dẫn về form đặt lịch demo.

Cấu trúc đề xuất:

```txt
Hero
Pain points của SME B2C
AI Brand Assistant khác chatbot thường như thế nào
Live AI demo
Use cases theo ngành
Core features
Pricing
FAQ
CTA đặt lịch demo
```

## 7.3. Service pages

Các service pages:

```txt
/services/ai-brand-character/
/services/ar-vr-mr/
/services/digital-twin/
/services/game-activation/
/services/interactive-website/
```

Mỗi page cần có:

* Hero riêng
* Problem statement
* Solution overview
* Use cases
* Feature/capability list
* Process
* Related case/project
* FAQ
* CTA
* SEO metadata riêng

## 7.4. Case study Yên AI Chat

Case Yên AI Chat là bằng chứng năng lực chính cho EZD AI Chat.

Được phép public:

```txt
Tên Yên Retreat & Cafe: Có
Hình ảnh thật: Có
Số liệu: Không
Flow chat: Không
Character visual: Có
Quote/testimonial: Có
```

Không public:

* Số liệu nhạy cảm
* Flow chat chi tiết
* Cấu hình nội bộ
* Dữ liệu vận hành cụ thể

## 7.5. Các project cũ

Các project cũ thuộc nhóm:

* AR/VR
* Game Activation
* Digital Twin
* Website/microsite

Sẽ được mô tả ẩn danh nếu đưa vào website.

---

# 8. Content & Copywriting

## 8.1. Tone of voice

Tone đã thống nhất:

```txt
Dễ hiểu
Chuyên nghiệp
Có chất sáng tạo
```

Nội dung cần tránh:

* Quá kỹ thuật
* Quá hàn lâm
* Quá chung chung kiểu agency profile
* Lạm dụng thuật ngữ AI mà không giải thích lợi ích

Nội dung cần ưu tiên:

* Nói bằng ngôn ngữ của chủ SME/founder.
* Tập trung vào vấn đề kinh doanh.
* Giải thích công nghệ theo lợi ích thực tế.
* Có CTA rõ ràng.
* Có ví dụ theo ngành.

## 8.2. Ngôn ngữ

Launch bằng tiếng Việt trước.

Tuy nhiên, codebase cần chuẩn bị cấu trúc có thể mở rộng i18n trong tương lai.

## 8.3. Nội dung gốc cần chuẩn bị

Danh sách content cần chuẩn bị:

```txt
- Brand statement mới của EZDesign
- Danh sách sản phẩm/dịch vụ chính
- Mô tả chi tiết EZD AI Chat
- Pricing/package sơ bộ
- Case study Yên AI Chat
- Portfolio/project cũ có thể public
- Hình ảnh/video/demo hiện có
- FAQ về EZD AI Chat
- Quy trình làm việc của EZDesign
- Thông tin liên hệ, Zalo, email, hotline
```

---

# 9. Visual Identity & UX

## 9.1. Hướng visual

Đã thống nhất hướng **Hybrid**:

* Giữ logo.
* Giữ màu nhận diện chính.
* Giữ tinh thần công nghệ.
* Làm lại UI system.
* Làm lại layout.
* Component hóa giao diện.
* Nghiêng về creative friendly.

## 9.2. Design direction

Design keywords:

```txt
Modern
Trustworthy
Interactive
Warm
AI-native
Premium but accessible
```

Bản tiếng Việt:

```txt
Hiện đại
Đáng tin
Có tính tương tác
Dễ tiếp cận
Có hơi thở AI
```

## 9.3. Motion và media

Đã thống nhất:

* Không cần motion/animation phức tạp trong Phase 1.
* Có video hero.
* Video hero là **motion mockup render**.
* Website dùng mockup render là chính.
* Không làm mới character visual trong Phase 1.
* Cần có ít nhất 1 mockup mạnh cho EZD AI Chat.
* Cần có 1 visual system nhất quán cho AI character.

---

# 10. AI Demo trên website

## 10.1. Mức độ demo

Đã thống nhất:

```txt
AI thật cho cả EZD Assistant và Yên AI
```

Trạng thái:

```txt
Đã hoàn thành
```

## 10.2. Cách sử dụng character

```txt
EZD Assistant: dùng trên homepage/contact hoặc khu vực tư vấn chung
Yên AI: dùng trong case study Yên AI Chat
```

## 10.3. Yêu cầu BA cho AI demo

AI demo cần có:

* Disclaimer ngắn về AI.
* Không lưu nội dung chat.
* Không yêu cầu consent trước khi chat.
* Không thu thập thông tin nhạy cảm trong chat.
* Có giới hạn hoặc guardrail để tránh abuse.
* Có event tracking cho open demo chat và quick reply click.
* Có handoff sang kênh người thật khi cần.

## 10.4. Tracking liên quan AI demo

Cần track:

```txt
Open demo chat
Quick reply click
Handoff click
CTA click sau khi chat
```

---

# 11. Pricing & Packaging

## 11.1. Cách public pricing

Đã thống nhất:

```txt
Public khoảng giá “từ”
```

Pricing gợi ý:

```txt
Starter: từ 299k/tháng
Growth: từ 799k/tháng
Pro: tư vấn theo nhu cầu
```

## 11.2. Setup fee

Đã thống nhất:

```txt
Setup fee báo theo nhu cầu
```

Không public setup fee cố định trong Phase 1.

## 11.3. Ghi chú pricing

Cần hiển thị ghi chú:

```txt
Chi phí setup, custom character, outfit hoặc integration sẽ được báo riêng theo nhu cầu.
```

## 11.4. Add-ons tiềm năng

Các add-on có thể đề cập hoặc chuẩn bị cho Phase 2:

* Custom outfit
* Seasonal outfit
* Animation pack
* Done-for-you knowledge setup
* Extra AI usage
* Google Sheets/CRM integration
* Monthly optimization review

---

# 12. Lead Flow & Contact

## 12.1. CTA chính

CTA chính toàn site:

```txt
Đặt lịch demo
```

CTA phụ:

```txt
Tư vấn giải pháp
```

## 12.2. Form lead

Đã thống nhất:

```txt
Form → Cloudflare Worker → Google Sheets + email notification
```

## 12.3. Trường dữ liệu form đề xuất

Form nên có:

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

Riêng form liên quan EZD AI Chat có thể thêm:

```txt
Kênh muốn handoff: Zalo / Messenger / WhatsApp / Hotline
Đã có FAQ/knowledge base chưa?
Muốn dùng AI cho website nào?
```

## 12.4. Chống spam

Form lead cần có chống spam.

Các hướng có thể dùng:

* Honeypot field
* Turnstile của Cloudflare
* Rate limit ở Cloudflare Worker
* Validate input server-side

---

# 13. SEO Alignment

## 13.1. SEO focus giai đoạn đầu

Ưu tiên SEO cho hai nhóm:

```txt
AI Chat
Brand Character
```

## 13.2. Keyword nhóm AI Chat

```txt
AI chatbot cho SME
chatbot tư vấn khách hàng
AI thu lead website
AI assistant cho website
```

## 13.3. Keyword nhóm Brand Character

```txt
AI brand character
nhân vật AI thương hiệu
virtual brand assistant
```

## 13.4. SEO requirements

Mỗi page cần có:

* Title riêng
* Meta description riêng
* Canonical URL
* Open Graph image
* H1 duy nhất
* Internal links
* FAQ nếu phù hợp
* Structured data nếu phù hợp
* Sitemap.xml
* Robots.txt

## 13.5. Insights/blog

Đã thống nhất:

```txt
Chưa hiện blog/insights trên nav trong Phase 1
Nhưng codebase chuẩn bị sẵn /insights/
```

---

# 14. Công nghệ

## 14.1. Frontend framework

Đã thống nhất:

```txt
Astro + React islands khi cần
```

Nguyên tắc:

* Không biến toàn bộ site thành React app.
* Astro dùng cho page/layout/content chính.
* React chỉ dùng cho các component tương tác như demo chat, pricing toggle, selector nếu cần.

## 14.2. Styling

Đã thống nhất:

```txt
Tailwind CSS
```

## 14.3. Content management

Đã thống nhất:

```txt
MDX + data files trong Phase 1
Phase 2 cân nhắc CMS
```

Gợi ý:

* Product/service content dùng MDX hoặc content collection.
* Pricing, industries, navigation dùng data files.
* Case study dùng MDX.
* Insights/blog chuẩn bị content collection nhưng chưa cần publish trên nav.

## 14.4. Form/backend

Đã thống nhất:

```txt
Cloudflare Worker + Google Sheets + email notification
```

Worker chịu trách nhiệm:

* Nhận form submit
* Validate dữ liệu
* Chống spam/rate limit
* Ghi lead vào Google Sheets
* Gửi email notification
* Trả response cho frontend

---

# 15. Deploy & Operations

## 15.1. Deploy target

Đã thống nhất:

```txt
Cloudflare Pages
```

## 15.2. Domain và hosting

```txt
Domain: Cloudflare
Hosting hiện tại: Cloudflare Pages
```

## 15.3. _headers

Không nhất thiết phải giữ `_headers` hiện tại.

Tuy nhiên, nếu cần security headers hoặc cache headers, có thể cấu hình lại theo chuẩn Cloudflare Pages.

## 15.4. Redirect URL cũ

Không cần redirect URL cũ vì website hiện tại chủ yếu là single page và không có nhiều URL cũ cần bảo toàn.

## 15.5. Staging

Không cần staging site riêng.

Tuy nhiên, thống nhất theo kiến nghị:

* Có thể dùng preview deploy tự động của Cloudflare Pages theo branch/PR nếu workflow cho phép.
* Không cần public staging domain chính thức.
* Trước khi merge vào main vẫn nên test preview deploy.

## 15.6. Release flow

Đã thống nhất:

```txt
main branch → production
```

---

# 16. Tracking & Analytics

## 16.1. Tools

Đã thống nhất dùng:

```txt
Google Search Console
GA4
```

## 16.2. Events cần track

```txt
CTA click
Form submit
Click Zalo
Click hotline
Click email
Open demo chat
Quick reply click
Pricing package click
Case study click
```

## 16.3. Tracking principle

Tracking cần phục vụ các câu hỏi:

* Page nào tạo lead tốt nhất?
* CTA nào được click nhiều nhất?
* EZD AI Chat demo có được mở không?
* Người dùng có tương tác với quick replies không?
* Pricing có được xem/click không?
* Case Yên AI Chat có hỗ trợ chuyển đổi không?

---

# 17. Legal, Privacy & Safety

## 17.1. Quyết định đã thống nhất

```txt
Privacy Policy riêng: Không
Terms of Service: Không
Lưu nội dung chat: Không
Consent trước khi chat: Không
Analytics lưu PII: Không
AI disclaimer: Có
Form lead chống spam: Có
```

## 17.2. AI disclaimer

Dù chưa cần Privacy Policy riêng trong Phase 1, AI demo cần có disclaimer ngắn.

Gợi ý:

> AI hỗ trợ tư vấn ban đầu và có thể chưa chính xác trong mọi trường hợp. EZDesign không lưu nội dung hội thoại cá nhân và không dùng chat để thu thập thông tin nhạy cảm.

## 17.3. Dữ liệu chat

Đã thống nhất:

```txt
Không lưu nội dung chat
```

Điều này cần được phản ánh trong thiết kế kỹ thuật của AI demo.

## 17.4. Dữ liệu lead form

Dữ liệu form được gửi vào Google Sheets và email notification.

Cần đảm bảo:

* Không thu thập dữ liệu không cần thiết.
* Validate input.
* Có chống spam.
* Không expose secret/token phía frontend.

---

# 18. Asset & Media

## 18.1. Asset cần kiểm kê

```txt
Logo vector
Brand colors
Font
Icon style
Ảnh project cũ
Video demo
Mockup AI Chat
Character visual
Ảnh Yên AI Chat
Ảnh AR/VR/Game/Digital Twin
OG images cho từng page
```

## 18.2. Quyết định media

Đã thống nhất:

```txt
Làm mới character visual: Không
Motion/animation phức tạp: Không
Video hero: Có
Dạng video hero: Motion mockup render
Dùng ảnh thật hay mockup render: Mockup render
```

## 18.3. Asset tối thiểu cho Phase 1

Cần có:

* 1 motion mockup render cho hero.
* 1 mockup mạnh cho EZD AI Chat.
* Character visual cho EZD Assistant.
* Character visual cho Yên AI.
* Ảnh thật của Yên Retreat & Cafe nếu dùng trong case.
* OG image cho homepage.
* OG image cho EZD AI Chat page.
* OG image cho case Yên AI Chat.
* Hình minh họa cho 5 service pages.

---

# 19. Scope Phase 1

## 19.1. Must-have

```txt
Homepage mới
EZD AI Chat page
Ít nhất 5 page sản phẩm/dịch vụ còn lại
Case Yên AI Chat
Contact/demo form hoạt động
AI thật cho EZD Assistant và Yên AI
SEO metadata
Sitemap/robots
Responsive
Basic analytics
Cloudflare Worker form endpoint
Google Sheets lead storage
Email notification
```

## 19.2. Should-have

```txt
Pricing section
FAQ schema
Case studies listing
Insights structure
Preview deploy trước khi merge main
Tracking events đầy đủ
```

## 19.3. Could-have

```txt
Blog publish ngay
Industry landing pages
Interactive calculator
Admin CMS
Multi-language
```

## 19.4. Won’t-have trong Phase 1

```txt
Full SaaS dashboard
Payment tự động
Tenant self-service
Advanced CRM integration
Public setup fee cố định
Privacy Policy riêng
Terms of Service riêng
Motion/animation phức tạp
```

---

# 20. Key decisions summary

```txt
Định vị:
Hybrid — điểm chạm số biết trò chuyện, tương tác và chuyển đổi.

Hero product:
EZD AI Chat.

Mô hình bán:
Managed SaaS + setup fee.

Setup fee:
Báo theo nhu cầu.

Target:
SMEs B2C cần tư vấn khách trước chuyển đổi.

Buyer persona:
Chủ SME / Founder.

CTA chính:
Đặt lịch demo.

CTA phụ:
Tư vấn giải pháp.

Sitemap:
Homepage + EZD AI Chat + 5 service pages + Yên AI Chat case + About + Contact.

Tech:
Astro + React islands + Tailwind + MDX/data files.

Deploy:
Cloudflare Pages.

Form:
Cloudflare Worker + Google Sheets + email notification.

Analytics:
Google Search Console + GA4.

SEO focus:
AI Chat + Brand Character.

AI demo:
AI thật cho cả EZD Assistant và Yên AI.

Hero media:
Motion mockup render.

Pricing:
Public giá từ, setup fee báo theo nhu cầu.

Privacy:
Không lưu nội dung chat, có AI disclaimer.
```

---

# 21. Open items còn lại trước Project Plan

Dù các quyết định chính đã chốt, trước khi lập project plan chi tiết vẫn nên xác nhận thêm một số thông tin vận hành:

## 21.1. Thông tin liên hệ chính thức

Cần có:

```txt
Email nhận lead
Email gửi notification
Số hotline
Zalo link
Messenger link nếu có
WhatsApp link nếu có
Địa chỉ doanh nghiệp nếu muốn public
```

## 21.2. Asset source

Cần gom:

```txt
Logo vector
File màu nhận diện
Character visual EZD Assistant
Character visual Yên AI
Ảnh thật Yên Retreat & Cafe
Mockup AI Chat hiện có
Video/motion mockup render
```

## 21.3. Nội dung chi tiết từng page

Cần viết hoặc chuẩn bị:

```txt
Homepage copy
EZD AI Chat landing page copy
5 service page copy
Case Yên AI Chat
About page
Contact page
FAQ
Pricing copy
AI disclaimer
```

## 21.4. Tài khoản và quyền truy cập

Cần chuẩn bị:

```txt
Cloudflare account
GitHub repository
Google Sheets destination
Email sending method/API
GA4 property
Google Search Console access
Domain/DNS access
```

---

# 22. Kết luận BA Alignment

Dự án reno EZDesign Website đã thống nhất định hướng rõ ràng:

> Website mới sẽ là một product-led marketing website xây bằng Astro, trong đó EZD AI Chat là hero product, nhắm đến SME B2C cần tư vấn khách và thu lead trên website.

Trọng tâm của Phase 1 không phải xây một SaaS dashboard đầy đủ, mà là xây một website nhiều trang có khả năng:

* Định vị lại EZDesign.
* Giới thiệu EZD AI Chat rõ ràng.
* Cho khách trải nghiệm AI thật.
* Trình bày các service bổ trợ.
* Tạo niềm tin bằng case Yên AI Chat.
* Thu lead qua form hoạt động thật.
* Có nền tảng SEO, tracking và content mở rộng.

BA Alignment này đủ điều kiện để chuyển sang bước tiếp theo:

```txt
Project Plan chi tiết
Sitemap chi tiết
Content Brief
Technical Architecture
Backlog triển khai Astro
UI Component Inventory
SEO Metadata Plan
Tracking Plan
```
