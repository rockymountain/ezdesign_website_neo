Đồng ý. Trước khi code 7.10.5, ta nên coi đây là **service-specific upgrade**, không còn chỉ là generic service page nữa.

Dựa trên mockup mới, `StyleEZD.css`, và `mockup_ai_brand_character_review.md`, Task 7.10.5 nên được nâng cấp từ “AI Brand Character service upgrade” thành:

# Task 7.10.5 — AI Brand Character Service Page Update

## Mục tiêu chính

Biến `/services/ai-brand-character/` từ một service page generic thành một **product-led service landing page** riêng cho dịch vụ AI Brand Character.

Bản review chỉ ra rằng mockup mới đã giải quyết mạnh lỗi “Tell, don’t Show” bằng phần **Năng lực triển khai** có interactive UI, nhân vật 3D/character visual và chat bubble minh họa; phần này nên trở thành trọng tâm triển khai. 

Đồng thời, review cũng nhắc 2 điểm cần bổ sung: hero vẫn nên có “khuôn mặt” nhân vật ngay trong 3 giây đầu, và cần giữ lại case study/social proof như Yên AI Chat trước FAQ. 

---

# 1. Phạm vi file cần chỉnh

## File chính

```txt
src/pages/services/[slug].astro
```

Trang này vẫn là dynamic route, nhưng riêng slug:

```txt
ai-brand-character
```

sẽ render layout riêng.

## Component mới nên tạo

```txt
src/components/sections/AICharacterHero.astro
src/components/sections/AICharacterCapabilityShowcase.astro
src/components/sections/AICharacterUseCases.astro
src/components/sections/AICharacterCaseBanner.astro
src/components/sections/RelatedServicesGrid.astro
```

Có thể gom ít hơn nếu muốn nhanh, nhưng mình khuyến nghị tách component vì page này sẽ còn polish tiếp.

## Data mới nên tạo

```txt
src/data/ai-brand-character-page.json
```

Lý do: content collection `services/*.mdx` vẫn giữ SEO, title, excerpt, feature/useCase/FAQ cơ bản. Nhưng mockup mới có nội dung visual-specific như tabs, character card, use case cards có image placeholder, case banner, pricing expectation. Để tránh nhồi const vào `.astro`, nên tách thành JSON.

---

# 2. Strategy kỹ thuật

Trong `src/pages/services/[slug].astro`, thêm điều kiện:

```astro
const isAIBrandCharacter = service.data.slug === 'ai-brand-character';
```

Sau đó trong template:

```astro
{
  isAIBrandCharacter ? (
    <AIBrandCharacterPage service={service} />
  ) : (
    <GenericServicePage service={service} />
  )
}
```

Tuy nhiên để tránh refactor quá lớn ngay, ta có thể làm bước đầu nhẹ hơn:

```astro
{
  service.data.slug === 'ai-brand-character' ? (
    <>
      <!-- AI Brand Character custom sections -->
    </>
  ) : (
    <>
      <!-- Generic service sections hiện tại -->
    </>
  )
}
```

Mình khuyến nghị hướng sạch hơn:

```txt
7.10.5.1 — tạo component AIBrandCharacterPage.astro
7.10.5.2 — services/[slug].astro chỉ route điều kiện
```

Như vậy generic service page không bị phình.

---

# 3. Section structure theo mockup đã điều chỉnh

## Section 1 — Hero: blue gradient + character-first visual

Mockup hiện có gradient hero và card mô phỏng bên phải, nhưng review nói phần hero vẫn thiếu hình ảnh nhân vật/avatar, trong khi dịch vụ này bán “Character”. 

Hero nên gồm:

```txt
- Eyebrow: Service
- H1: AI Brand Character cho thương hiệu muốn có giọng nói riêng.
- Description ngắn
- CTA chính: Đặt lịch demo
- CTA phụ: Xem AI demo
- Visual bên phải:
  - Character avatar/placeholder nổi bật
  - Mini chat bubble
  - Voice / Role / Visual direction chips
```

Không dùng lại `ServiceVisualPanel` hiện tại làm hero chính nữa, vì mockup mới cần hero visual riêng hơn.

---

## Section 2 — Problem: “Vì sao chatbot cần có cá tính thương hiệu?”

Giữ section này gọn như mockup:

```txt
- 3 cards nhỏ
- Nội dung ngắn, scan nhanh
- Không dùng quá nhiều paragraph
```

Data đề xuất:

```json
"problems": [
  {
    "title": "Chatbot thường thiếu giọng thương hiệu",
    "description": "Khách nhận được câu trả lời đúng nhưng không cảm thấy đó là thương hiệu của bạn."
  },
  {
    "title": "Khó tạo cảm giác gần gũi",
    "description": "Các đoạn hội thoại máy móc khiến trải nghiệm tư vấn thiếu sự tin cậy."
  },
  {
    "title": "Không có nhân vật để khách nhớ",
    "description": "Website mất cơ hội tạo một điểm chạm nhận diện có thể lặp lại trong hành trình khách hàng."
  }
]
```

---

## Section 3 — Capability Showcase: trọng tâm của page

Đây là section quan trọng nhất. Review đánh giá phần này là “sự lột xác” vì chuyển từ text sang interactive UI với nút tính năng bên trái, nhân vật ở bên phải và chat bubble minh họa. 

Structure:

```txt
- Background soft blue
- Left column:
  - Character persona
  - Brand voice
  - Visual direction
- Right column:
  - Character visual placeholder
  - Chat bubble
  - Arrow controls hoặc tabs
  - Fade/slide transition khi đổi tab
```

Interaction nên làm bằng vanilla JS trước, không cần React island.

State data:

```json
"capabilities": [
  {
    "title": "Character persona",
    "description": "Xác định tên, vai trò, xưng hô, tính cách và giới hạn hành vi.",
    "chatName": "Anna — Tư vấn viên",
    "chatText": "Tuyệt vời. Mình có thể giúp bạn tư vấn dịch vụ theo phong cách nhẹ nhàng, gần gũi và đúng giọng thương hiệu."
  },
  {
    "title": "Brand voice",
    "description": "Thiết kế cách nhân vật nói chuyện: thân thiện, chuyên nghiệp, tinh tế hoặc vui tươi.",
    "chatName": "Anna — Brand voice",
    "chatText": "Mình sẽ trả lời theo giọng thương hiệu: rõ ràng, lịch sự và không nói quá mức."
  },
  {
    "title": "Visual direction",
    "description": "Định hướng visual, outfit, màu sắc và biểu cảm để nhân vật phù hợp với thương hiệu.",
    "chatName": "Anna — Visual direction",
    "chatText": "Visual có thể được tinh chỉnh theo ngành, màu thương hiệu và bối cảnh sử dụng."
  }
]
```

Ở Sprint này dùng placeholder image; sau đó thay bằng asset thật.

---

## Section 4 — Use Cases visual cards

Mockup đã cải thiện use case bằng cách đưa nhân vật AI vào từng card, giúp SME dễ liên hệ với ngành nghề của họ. Review đánh giá đây là cách giải quyết “visual vacuum” tốt hơn so với text cards cũ. 

Use cases nên là 2 hoặc 3 card:

```txt
- Website tư vấn dịch vụ
- Hospitality / F&B
- Spa / Salon / Clinic
```

Nếu mockup hiện mới có 2 card, ta vẫn nên chuẩn bị data 3 item nhưng render 2 trước hoặc render 3 responsive.

Card structure:

```txt
- visual placeholder bên trái
- title
- description
- link nhỏ “Xem ý tưởng demo →”
```

---

## Section 5 — Case Study / Social proof: bắt buộc giữ

Review nhấn mạnh mockup chưa thấy vị trí cho Case Study Yên AI Chat và khuyến nghị chèn lại một banner/card trước FAQ vì social proof là cốt lõi cho B2B sales. 

Đặt section này **sau Use Cases, trước FAQ**.

Structure:

```txt
- Eyebrow: Case Study
- Title: Yên AI Chat — khi AI trở thành một người nhà của thương hiệu.
- Description: Case flagship cho EZD AI Chat và AI Brand Character.
- Visual: chat/character preview placeholder
- CTA: Xem case Yên AI Chat
```

Không cần public số liệu nếu chưa có. Chỉ dùng safe proof:

```txt
- Character visual public
- Flow concept public
- No sensitive metrics
```

Điều này cũng khớp với BA alignment trước đó: Yên AI Chat là case nổi bật đầu tiên cho nhóm ngành cần tư vấn trước chuyển đổi. 

---

## Section 6 — FAQ

Giữ FAQ gọn như mockup:

```txt
- 2 columns desktop
- Card hoặc details accordion
```

Nếu muốn tiến thêm, dùng accordion cho FAQ, nhưng không bắt buộc trong 7.10.5.

---

## Section 7 — Related services grid

Mockup có “Các dịch vụ khác” dạng 6 cards. Phần này rất tốt cho funnel loop, vì khách có thể chuyển sang dịch vụ khác nếu AI Brand Character chưa đúng nhu cầu.

Render:

```txt
- EZD AI Chat
- AI Brand Character
- AR/VR/MR
- Digital Twin
- Game Activation
- Interactive Website
```

Trong đó AI Brand Character là current page, có thể disable hoặc active border.

---

## Section 8 — Final CTA

Giữ brand blue CTA:

```txt
Title: Muốn triển khai một điểm chạm số phù hợp với thương hiệu của bạn?
Description: Bắt đầu bằng một buổi tư vấn ngắn để EZDesign hiểu ngành, khách hàng và mục tiêu chuyển đổi của bạn.
Primary: Đặt lịch demo
Secondary: Xem demo AI Chat
```

---

# 4. StyleEZD.css áp dụng như thế nào?

`StyleEZD.css` có nhiều phần là output CSS đã build, không nên copy nguyên vào project. Ta chỉ nên rút các nguyên tắc:

```txt
- Brand color: blue dark / blue bright / turquoise
- Font weight black đang map về 700
- Heading max weight 700
- Rounded lớn
- Shadow blue tint
- Brand gradient
```

Một số token trong CSS hiện hữu cũng đã khớp direction này, ví dụ `--ezd-blue-dark`, `--ezd-blue`, `--ezd-turquoise`, `--ezd-brand`, `--ezd-accent`, `--ezd-bg-soft`, `--ezd-shadow-md/lg`. 

Do đó task 7.10.5 **không nên import StyleEZD.css**, chỉ dùng nó như reference.

---

# 5. Kế hoạch triển khai chi tiết

## 7.10.5.1 — Tạo data file

Tạo:

```txt
src/data/ai-brand-character-page.json
```

Bao gồm:

```txt
hero
problems
capabilities
useCases
caseStudy
relatedServices
finalCTA
```

FAQ vẫn có thể lấy từ content collection `service.data.faqs`.

---

## 7.10.5.2 — Tạo component `AIBrandCharacterPage.astro`

Tạo:

```txt
src/components/pages/AIBrandCharacterPage.astro
```

Props:

```ts
type Props = {
  service: CollectionEntry<'services'>;
};
```

Component này render toàn bộ page-specific sections.

---

## 7.10.5.3 — Tạo `AICharacterHero.astro`

Hero riêng, không dùng generic service hero.

Acceptance:

```txt
[ ] Có gradient blue hero
[ ] Có character avatar/placeholder ngay trong hero
[ ] Có mini chat card
[ ] CTA chính/phụ rõ
[ ] Mobile visual xuống dưới, không overflow
```

---

## 7.10.5.4 — Tạo `AICharacterCapabilityShowcase.astro`

Đây là section trọng tâm.

Acceptance:

```txt
[ ] Left tabs/capability buttons
[ ] Right visual character stage
[ ] Click capability đổi title/description/chat bubble
[ ] Có fade transition
[ ] Không dùng React nếu chưa cần
[ ] Mobile stack đẹp
```

Review đã nhắc khi code phần này nên có fade hoặc slide transition để tránh flash khi đổi nội dung. 

---

## 7.10.5.5 — Tạo `AICharacterUseCases.astro`

Acceptance:

```txt
[ ] Use case cards có visual placeholder
[ ] Tối thiểu 2 cards như mockup
[ ] Có thể mở rộng 3 cards
[ ] CTA nhỏ trong card
```

---

## 7.10.5.6 — Tạo `AICharacterCaseBanner.astro`

Acceptance:

```txt
[ ] Case Yên AI Chat xuất hiện trước FAQ
[ ] Có CTA tới /case-studies/yen-ai-chat/
[ ] Không bịa số liệu
[ ] Visual proof placeholder rõ
```

---

## 7.10.5.7 — Cập nhật `services/[slug].astro`

Logic:

```astro
if slug === 'ai-brand-character':
  render <AIBrandCharacterPage service={service} />
else:
  render generic service page hiện tại
```

Giữ lại SEO/JSON-LD trong `[slug].astro`, hoặc truyền metadata vào layout ngay trong `AIBrandCharacterPage`.

Mình khuyến nghị giữ `BaseLayout` ở `[slug].astro`, còn component `AIBrandCharacterPage` chỉ render `<main>...</main>` để không nhân đôi layout.

---

# 6. Không làm trong 7.10.5

Để task không bị phình:

```txt
- Chưa thay asset thật
- Chưa dùng React island
- Chưa làm pricing calculator
- Chưa làm animation phức tạp
- Chưa thay toàn bộ generic service system
```

Pricing expectation có thể để sang 7.10.5b nếu cần. Trong QA trước đó có đề xuất bổ sung định hướng chi phí cho dịch vụ character, nhưng mockup hiện tại chưa thể hiện rõ; nếu thêm ngay, đặt sau Case Study hoặc trước FAQ bằng section nhỏ “Chi phí phụ thuộc vào điều gì?”.

---

# 7. Acceptance criteria toàn task

```txt
[ ] /services/ai-brand-character/ không còn giống generic service page
[ ] Hero có nhân vật/character placeholder trong 3 giây đầu
[ ] Problem section gọn như mockup
[ ] Capability Showcase có character visual + chat bubble
[ ] Capability Showcase có tương tác click + fade
[ ] Use Cases có visual cards
[ ] Case Study Yên AI Chat được giữ trước FAQ
[ ] FAQ vẫn render từ collection
[ ] Related Services grid có đủ services
[ ] Final CTA đúng brand blue
[ ] Mobile không overflow
[ ] npm run check pass
[ ] npm run build pass
```

---

# Thứ tự triển khai đề xuất

```txt
1. Tạo src/data/ai-brand-character-page.json
2. Tạo AIBrandCharacterPage.astro
3. Tạo AICharacterHero.astro
4. Tạo AICharacterCapabilityShowcase.astro
5. Tạo AICharacterUseCases.astro
6. Tạo AICharacterCaseBanner.astro
7. Cập nhật services/[slug].astro để route riêng slug ai-brand-character
8. QA /services/ai-brand-character/
```

Bước đầu tiên nên là tạo `src/data/ai-brand-character-page.json`, vì sau đó các component sẽ chỉ nhận data và không hard-code nhiều trong `.astro`.
