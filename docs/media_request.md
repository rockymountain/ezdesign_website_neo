# 1. Chuẩn media chung toàn site

## Format ưu tiên

```txt
Ảnh tĩnh: .webp
Ảnh cần trong suốt: .webp hoặc .png nếu cần alpha sạch
Vector logo/icon đơn giản: .svg
Animation nhẹ: .json Lottie
Video chỉ dùng khi thật sự cần: .webm + poster .webp
```

## Tiêu chuẩn ảnh WebP

```txt
Quality: 75–85
Color: sRGB
Không nhúng metadata nặng
Tên file lowercase-kebab-case
Có bản desktop và mobile nếu hero/visual lớn
```

Kích thước khuyến nghị:

```txt
Hero / large visual desktop: 1600–1920px wide
Hero / large visual mobile: 768–960px wide
Card / section visual: 800–1200px wide
Logo client: 300–600px wide, nền transparent nếu có thể
Avatar/team: 600x600px hoặc 800x800px
OG image: 1200x630px
```

## Tiêu chuẩn Lottie JSON

```txt
File size mục tiêu: < 250KB, tối đa nên < 500KB
Duration: 3–8 giây
Loop: được, nhưng motion phải nhẹ
FPS: 30fps
Không dùng animation quá nhiều chi tiết nhỏ
Không dùng text live trong Lottie nếu cần SEO/readability
Nếu Lottie có raster asset, export kèm folder assets hoặc ưu tiên convert shape vector
Luôn có fallback poster .webp
```

## Cấu trúc folder đề xuất

```txt
public/
  media/
    home/
    ezd-ai-chat/
    about/
    contact/
    shared/
    og/
    lottie/
```

---

# 2. Global / BaseLayout

File: `BaseLayout.astro`

Hiện tại layout đã nhận prop:

```ts
ogImage?: string;
```

Nhưng các page đang gọi:

```astro
<BaseLayout title={title} description={description}>
```

Tức là **chưa truyền OG image riêng cho từng page**.

## Media cần chuẩn bị

| Asset            |   Format |     Size | Ưu tiên | Ghi chú                         |
| ---------------- | -------: | -------: | ------: | ------------------------------- |
| Default OG image | WebP/JPG | 1200x630 |      P0 | Dùng fallback toàn site         |
| Homepage OG      | WebP/JPG | 1200x630 |      P0 | Nên có riêng                    |
| EZD AI Chat OG   | WebP/JPG | 1200x630 |      P0 | Quan trọng nhất                 |
| About OG         | WebP/JPG | 1200x630 |      P1 | Có thể dùng brand/team visual   |
| Contact OG       | WebP/JPG | 1200x630 |      P1 | Có thể dùng contact/demo visual |

## Naming đề xuất

```txt
public/media/og/ezdesign-default-og.webp
public/media/og/home-og.webp
public/media/og/ezd-ai-chat-og.webp
public/media/og/about-og.webp
public/media/og/contact-og.webp
```

## Ghi chú implementation sau này

Khi có asset, các page nên đổi thành:

```astro
<BaseLayout
  title={title}
  description={description}
  ogImage="/media/og/home-og.webp"
>
```

---

# 3. Homepage `/`

File: `index.astro`

Homepage hiện có 3 vùng cần media rõ nhất:

```txt
1. Hero visual bên phải
2. Services overview cards
3. Featured case study Yên AI Chat
```

Hiện hero đang dùng một card text highlight, chưa có hình/animation thật. Featured case study đang dùng chat bubble mockup bằng HTML.

## Media requirements

| Vị trí              | Asset cần có                                |            Format ưu tiên |                          Size | Ưu tiên |
| ------------------- | ------------------------------------------- | ------------------------: | ----------------------------: | ------: |
| Hero right panel    | Motion mockup “AI-first digital touchpoint” | Lottie JSON + poster WebP | JSON < 300KB, poster 1200x900 |      P0 |
| Hero fallback       | Static hero mockup                          |                      WebP |                     1400x1000 |      P0 |
| Services cards      | Icon/mini visual cho từng service           |             SVG hoặc WebP |                       512x512 |      P1 |
| Featured case study | Yên AI Chat mockup / character + chat UI    |          WebP hoặc Lottie |                      1200x900 |      P0 |
| Background texture  | Subtle AI grid/noise pattern                |                  WebP/SVG |                      1600x900 |      P2 |

## Hero media direction

Nên thể hiện EZDesign là:

```txt
AI-first digital experience studio
```

Visual nên có:

```txt
- Website/browser mockup
- AI chat bubble
- Brand character/avatar
- Subtle orbit/nodes/interaction lines
- Màu brand turquoise/blue
```

Không nên dùng visual quá “enterprise AI dashboard” lạnh. Nên giữ cảm giác creative friendly, gần SME/B2C.

## Lottie phù hợp cho homepage hero

Tên đề xuất:

```txt
public/media/lottie/home-ai-touchpoint.json
public/media/home/home-ai-touchpoint-poster.webp
```

Motion gợi ý:

```txt
- Chat bubble xuất hiện nhẹ
- Các điểm chạm số kết nối vào một assistant
- CTA/lead icon sáng lên
- Loop mượt 5–6 giây
```

## Service visual/icon set

Cần 6 visual nhỏ:

```txt
ezd-ai-chat
ai-brand-character
ar-vr-mr
digital-twin
game-activation
interactive-website
```

Naming:

```txt
public/media/shared/service-ezd-ai-chat.webp
public/media/shared/service-ai-brand-character.webp
public/media/shared/service-ar-vr-mr.webp
public/media/shared/service-digital-twin.webp
public/media/shared/service-game-activation.webp
public/media/shared/service-interactive-website.webp
```

Hoặc nếu icon vector:

```txt
public/media/shared/icon-ezd-ai-chat.svg
...
```

## Case study media trên homepage

Hiện đang mock bằng chat bubble. Nên thay bằng một visual mạnh hơn:

```txt
public/media/home/yen-ai-chat-card.webp
```

Tiêu chuẩn:

```txt
Size: 1200x900
Ratio: 4:3 hoặc 3:2
Nội dung: Yên AI character + website/chat mockup
Không dùng số liệu nếu chưa được duyệt
Không lộ flow chat thật hoặc dữ liệu khách thật
```

---

# 4. EZD AI Chat `/ezd-ai-chat/`

File: `ezd-ai-chat.astro`

Đây là page cần media nhiều nhất và nên ưu tiên cao nhất.

Các vùng media chính:

```txt
1. ProductHero preview
2. Live Demo section
3. Pain points / difference / feature visual support
4. Use cases by industry
5. FeatureSpotlight
6. Pricing/FAQ ít cần media
```

Vì `ProductHero` là component ngoài file upload, mình chỉ thấy page truyền `previewMessages` và `previewNote`. Khả năng cao hero hiện là mock chat UI bằng component.

## Media requirements

| Vị trí                 | Asset cần có                                     |         Format ưu tiên |         Size | Ưu tiên |
| ---------------------- | ------------------------------------------------ | ---------------------: | -----------: | ------: |
| Product hero           | EZD AI Chat product mockup                       | WebP + optional Lottie |    1600x1200 |      P0 |
| Product hero animation | Assistant chat interaction                       |   Lottie JSON + poster | JSON < 350KB |      P0 |
| Live demo area         | Real widget placeholder/fallback visual          |                   WebP |     1200x900 |      P0 |
| Assistant avatar       | EZD Assistant character/avatar                   |         WebP/PNG alpha |      800x800 |      P0 |
| Use case cards         | Industry visuals: spa, homestay, cafe, education |                   WebP |      800x600 |      P1 |
| FeatureSpotlight       | 3–5 feature illustrations                        |               WebP/SVG |     1000x750 |      P1 |
| Chat handoff visual    | Zalo/human handoff diagram                       |        Lottie hoặc SVG | JSON < 250KB |      P1 |

## Hero product mockup

Tên đề xuất:

```txt
public/media/ezd-ai-chat/ezd-ai-chat-hero-mockup.webp
public/media/lottie/ezd-ai-chat-hero-flow.json
public/media/ezd-ai-chat/ezd-ai-chat-hero-poster.webp
```

Nội dung nên có:

```txt
- Browser/device frame
- EZD Assistant avatar
- Chat tư vấn khách
- Lead capture / handoff chip
- CTA “Đặt lịch demo” hoặc “Chuyển sang Zalo”
```

Tránh:

```txt
- Giao diện quá giống app SaaS dashboard phức tạp
- Quá nhiều chart/số liệu giả
- Chat content quá dài
```

## Live demo section

Trong code đang có:

```txt
Live Widget Area
Soon
placeholderTitle
placeholderDescription
```

Đây là vùng cần asset hoặc widget thật. Trước khi có widget thật, nên có media fallback:

```txt
public/media/ezd-ai-chat/live-demo-placeholder.webp
```

Tiêu chuẩn:

```txt
Size: 1200x900
Nội dung: khung chat demo đẹp, có trạng thái “demo area”
Không nói “Soon” nếu chuẩn bị public launch
Có thể dùng copy trung tính: “Demo widget preview”
```

Nếu dùng Lottie:

```txt
public/media/lottie/ezd-ai-chat-live-demo-loop.json
```

Motion:

```txt
- Assistant typing
- Quick replies appear
- Handoff chip highlight
```

## Assistant avatar / character

Asset quan trọng:

```txt
public/media/ezd-ai-chat/ezd-assistant-avatar.webp
public/media/ezd-ai-chat/ezd-assistant-character.webp
```

Tiêu chuẩn:

```txt
Avatar: 800x800, nền transparent hoặc nền soft brand
Full/half body character nếu có: 1200x1600 hoặc 1000x1400
Style đồng bộ với brand: friendly, modern, AI-native
Không quá trẻ con, không quá anime nếu brand không muốn
```

## Use case media

Nếu `UseCaseGrid` sau này hỗ trợ image, cần chuẩn bị:

```txt
public/media/ezd-ai-chat/usecase-spa-salon.webp
public/media/ezd-ai-chat/usecase-homestay-retreat.webp
public/media/ezd-ai-chat/usecase-cafe-restaurant.webp
public/media/ezd-ai-chat/usecase-education-workshop.webp
```

Tiêu chuẩn:

```txt
Size: 900x675 hoặc 800x600
Tone: warm, SME/B2C, không stock quá generic
Có thể dùng mockup minh họa thay vì ảnh thật
```

---

# 5. About `/about/`

File: `about.astro`

About hiện đang có nhiều placeholder rõ ràng:

```txt
Logo placeholders
Testimonial placeholder
Team initials avatar
AI Chat Spotlight mockup
```

Đây là page cần media để tăng trust.

## Media requirements

| Vị trí             | Asset cần có                         |            Format ưu tiên |           Size | Ưu tiên |
| ------------------ | ------------------------------------ | ------------------------: | -------------: | ------: |
| Social proof logos | Logo khách hàng/partner/project      | SVG hoặc WebP transparent | 300–600px wide |   P0/P1 |
| Testimonial avatar | Ảnh người/brand đại diện testimonial |                      WebP |        600x600 |      P1 |
| Team cards         | Ảnh team hoặc illustrated avatars    |                      WebP |        800x800 |      P1 |
| About hero         | Studio/team/process visual           |          WebP hoặc Lottie |       1400x900 |      P1 |
| AI Chat spotlight  | Product/assistant visual reuse       |               WebP/Lottie |       1200x900 |      P1 |

## Logo placeholders

Hiện code render logo bằng text từ `pageContent.socialProof.logos`.

Nên chuẩn bị logo thật:

```txt
public/media/about/logo-yen-retreat.webp
public/media/about/logo-client-02.webp
public/media/about/logo-client-03.webp
public/media/about/logo-client-04.webp
```

Tiêu chuẩn:

```txt
Nền transparent nếu có thể
Bản dark/mono nếu logo nhiều màu khó nhìn
Chiều cao hiển thị đồng đều khoảng 32–48px
Không kéo giãn logo
```

Nếu chưa có quyền public logo khách hàng, dùng nhãn an toàn:

```txt
Hospitality Brand
F&B Concept
Local Service SME
```

Nhưng về media, logo thật vẫn nên là P1 sau khi được duyệt.

## Testimonial

Hiện đang ghi rõ:

```txt
Testimonial placeholder
```

Cần một trong hai hướng:

### Hướng A — Có testimonial thật

```txt
public/media/about/testimonial-yen.webp
```

Tiêu chuẩn:

```txt
Avatar/logo: 600x600
Quote đã được khách duyệt
Tên/chức danh được phép public
```

### Hướng B — Chưa được duyệt

Không dùng ảnh người thật. Dùng brand card hoặc abstract proof visual:

```txt
public/media/about/proof-card-placeholder.webp
```

Nội dung nên tránh tạo cảm giác “fake testimonial”.

## Team member media

Hiện team card dùng initials. Nếu muốn tăng trust:

```txt
public/media/about/team-member-01.webp
public/media/about/team-member-02.webp
public/media/about/team-member-03.webp
```

Tiêu chuẩn:

```txt
Square 800x800
Ánh sáng đồng nhất
Background đơn giản
Crop từ ngực/lưng trở lên hoặc avatar minh họa nhất quán
Không cần quá corporate
```

Nếu chưa muốn public người thật, dùng illustrated avatar thống nhất style:

```txt
public/media/about/team-avatar-design.webp
public/media/about/team-avatar-tech.webp
public/media/about/team-avatar-strategy.webp
```

## About hero visual

Page About hero hiện chỉ là text + gradient blobs. Có thể thêm một visual nhẹ:

```txt
public/media/about/about-hero-studio.webp
```

Hoặc Lottie:

```txt
public/media/lottie/about-digital-touchpoints.json
```

Motion phù hợp:

```txt
- Các touchpoint: website, AI chat, AR/VR, game, digital twin
- Kết nối về EZDesign ở trung tâm
```

---

# 6. Contact `/contact/`

File: `contact.astro`

Contact hiện thiên về form và cards, không cần nhiều media nặng. Media ở đây nên phục vụ trust và giảm cảm giác form khô.

Các vùng có thể thêm media:

```txt
1. Hero visual
2. Contact side panel
3. Process / next steps
4. Demo expectations
```

## Media requirements

| Vị trí                  | Asset cần có                       |       Format ưu tiên |         Size | Ưu tiên |
| ----------------------- | ---------------------------------- | -------------------: | -----------: | ------: |
| Contact hero            | Friendly contact/demo illustration | Lottie JSON + poster | JSON < 250KB |      P1 |
| Form side panel         | Lead capture / consultation visual |                 WebP |     1000x800 |      P1 |
| Next steps              | 3 small process icons              |      SVG/Lottie mini |      256–512 |      P2 |
| Direct contact channels | Email/Zalo/Phone icons             |                  SVG |       64–128 |      P1 |
| Contact OG              | Contact/demo OG image              |             WebP/JPG |     1200x630 |      P1 |

## Hero/contact animation

Tên đề xuất:

```txt
public/media/lottie/contact-demo-request.json
public/media/contact/contact-demo-request-poster.webp
```

Motion:

```txt
- User gửi request
- Lead đi vào sheet/card
- Notification tới team EZDesign
- Team phản hồi/demo
```

Nên giữ motion nhẹ vì contact page cần nhanh, ổn định, tập trung vào form.

## Contact channel icons

```txt
public/media/contact/icon-email.svg
public/media/contact/icon-zalo.svg
public/media/contact/icon-phone.svg
```

Tiêu chuẩn:

```txt
SVG đơn sắc hoặc brand-compatible
Stroke consistent
Không dùng icon marketplace không rõ license
```

## Form media lưu ý

Không nên thêm media làm phân tán trong form chính. Contact form là conversion point, nên media chỉ nên nằm bên cạnh hoặc phía trên, không chen vào form fields.

---

# 7. Asset ưu tiên triển khai theo impact

## P0 — Nên làm trước

```txt
1. /ezd-ai-chat/ hero product mockup WebP
2. /ezd-ai-chat/ EZD Assistant avatar/character
3. /ezd-ai-chat/ live demo placeholder/fallback
4. Homepage hero Lottie hoặc hero WebP
5. Homepage Yên AI Chat case visual
6. OG image cho homepage và EZD AI Chat
```

## P1 — Làm sau P0

```txt
1. About logo/social proof assets
2. About testimonial visual hoặc proof card
3. About team avatars/photos
4. Contact hero/contact illustration
5. Service icon/visual set dùng lại ở homepage
6. Use case visuals cho EZD AI Chat
7. OG image cho About và Contact
```

## P2 — Polish

```txt
1. Background texture/pattern
2. Small process icons
3. Micro Lottie cho next steps
4. Extra card illustrations
5. Additional responsive/mobile-specific crops
```

---

# 8. Danh sách file media đề xuất

```txt
public/media/og/home-og.webp
public/media/og/ezd-ai-chat-og.webp
public/media/og/about-og.webp
public/media/og/contact-og.webp
public/media/og/ezdesign-default-og.webp

public/media/home/home-ai-touchpoint-poster.webp
public/media/home/yen-ai-chat-card.webp
public/media/lottie/home-ai-touchpoint.json

public/media/ezd-ai-chat/ezd-ai-chat-hero-mockup.webp
public/media/ezd-ai-chat/ezd-ai-chat-hero-poster.webp
public/media/ezd-ai-chat/live-demo-placeholder.webp
public/media/ezd-ai-chat/ezd-assistant-avatar.webp
public/media/ezd-ai-chat/ezd-assistant-character.webp
public/media/lottie/ezd-ai-chat-hero-flow.json
public/media/lottie/ezd-ai-chat-live-demo-loop.json

public/media/about/about-hero-studio.webp
public/media/about/logo-yen-retreat.webp
public/media/about/testimonial-yen.webp
public/media/about/team-member-01.webp
public/media/about/team-member-02.webp
public/media/about/team-member-03.webp
public/media/lottie/about-digital-touchpoints.json

public/media/contact/contact-demo-request-poster.webp
public/media/contact/icon-email.svg
public/media/contact/icon-zalo.svg
public/media/contact/icon-phone.svg
public/media/lottie/contact-demo-request.json

public/media/shared/service-ezd-ai-chat.webp
public/media/shared/service-ai-brand-character.webp
public/media/shared/service-ar-vr-mr.webp
public/media/shared/service-digital-twin.webp
public/media/shared/service-game-activation.webp
public/media/shared/service-interactive-website.webp
```

---

# 9. Kết luận ngắn

Với các file hiện tại, mình sẽ ưu tiên media theo hướng:

```txt
EZD AI Chat page trước
→ Homepage case/hero
→ About trust assets
→ Contact supporting illustration
→ OG image set
```

Lý do: `/ezd-ai-chat/` là hero product và là trang có tác động conversion mạnh nhất; homepage cần visual để định vị nhanh; About cần asset thật để tăng trust; Contact chỉ cần media nhẹ để không làm giảm tập trung vào form.
