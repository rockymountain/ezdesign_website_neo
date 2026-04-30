Dưới đây là **plan chi tiết để điều chỉnh UI theo mockup**, đã cập nhật các quyết định vừa thống nhất.

# UI Direction đã chốt

```txt
1. Mockup áp dụng trước cho /ezd-ai-chat/
   nhưng component, token, typography và visual direction sẽ dùng chung cho toàn website.

2. Hero headline dùng:
   “Biến website thành nhân viên tư vấn 24/7 với AI Brand Assistant.”

3. FeatureSpotlight dùng placeholder image trong Sprint này.
   Sau này thay bằng asset nhân vật AI thật.

4. Dùng Google Fonts Montserrat từ Task 7.2.

5. Pricing: Growth plan được highlight là recommended.
```

---

# Epic 7 — UI Components / Page Section Components

## Mục tiêu Epic 7

Chuyển website từ skeleton layout sang UI system có định hướng rõ theo EZD Brand Guideline và mockup mới:

```txt
- Blue-first visual system
- Montserrat typography
- High-contrast CTA
- Minimal, modern, easy-to-scan layout
- Hero gradient/noise style
- Reusable section components
- EZD AI Chat page refactor theo mockup
```

---

# Sprint Scope khuyến nghị

Epic 7 nên chia thành 8 task chính:

```txt
Task 7.1 — Brand token alignment + contrast fix
Task 7.2 — Typography system with Montserrat
Task 7.3 — UI primitives: BrandMark, Button, Card
Task 7.4 — ProductHero + ChatMockup components
Task 7.5 — Section grids: PainPointGrid, FeatureGrid, UseCaseGrid
Task 7.6 — FeatureSpotlight component
Task 7.7 — PricingGrid + FAQGrid components
Task 7.8 — Refactor /ezd-ai-chat/ to match mockup
Task 7.9 — Apply direction lightly to homepage and shared pages
Task 7.10 — UI QA pass
```

Có thể làm lần lượt, mỗi task commit riêng.

---

# Task 7.1 — Brand token alignment + contrast fix

## Mục tiêu

Chốt lại token màu theo Brand Guideline, đồng thời sửa vấn đề chữ đen trên nền blue.

## Việc cần làm

Cập nhật `src/styles/global.css`:

```txt
- Dark blue làm màu brand chính
- Pure blue làm màu CTA/active/gradient
- Turquoise làm accent
- White/black làm contrast
- Thêm token text contrast cho nền brand
```

Token cần có:

```css
--ezd-blue-dark: #20267f;
--ezd-blue: #0047ff;
--ezd-blue-bright: #0057ff;
--ezd-turquoise: #23c7c9;
--ezd-black: #050505;
--ezd-white: #ffffff;

--ezd-brand: var(--ezd-blue-dark);
--ezd-brand-dark: #15195f;
--ezd-brand-bright: var(--ezd-blue);
--ezd-brand-soft: #eef2ff;
--ezd-brand-contrast: #ffffff;

--ezd-accent: var(--ezd-turquoise);
--ezd-accent-soft: #dffafa;
```

Thêm utility:

```css
.ezd-brand-gradient {
  background:
    radial-gradient(circle at 20% 20%, rgb(35 199 201 / 0.34), transparent 32rem),
    radial-gradient(circle at 85% 35%, rgb(0 87 255 / 0.45), transparent 30rem),
    linear-gradient(135deg, var(--ezd-blue) 0%, var(--ezd-blue-dark) 58%, #15195f 100%);
}

.ezd-blue-panel {
  background: var(--ezd-blue-dark);
  color: var(--ezd-white);
}

.ezd-mono-media {
  filter: grayscale(1);
}
```

Sửa các component đang có nền `bg-[var(--ezd-brand)]` để dùng chữ:

```txt
text-[var(--ezd-brand-contrast)]
```

## File ảnh hưởng

```txt
src/styles/global.css
src/components/common/Header.astro
src/components/common/Footer.astro
src/components/common/CTASection.astro
các page có button bg-[var(--ezd-brand)]
```

## Acceptance criteria

```txt
[ ] Không còn button nền xanh chữ đen
[ ] Active nav đọc rõ
[ ] CTA header đọc rõ
[ ] CTA hero đọc rõ
[ ] Brand color chuyển sang blue-first
[ ] npm run check pass
[ ] npm run build pass
```

---

# Task 7.2 — Typography system with Montserrat

## Mục tiêu

Đưa Montserrat thành font chính theo Brand Guideline, đồng thời chuẩn hóa type scale.

## Việc cần làm

Trong `BaseLayout.astro`, thêm Google Fonts trong `<head>`:

```astro
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
  rel="stylesheet"
/>
```

Trong `global.css`, cập nhật body:

```css
body {
  font-family:
    Montserrat, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
}
```

Thêm utility typography:

```css
.ezd-heading-display {
  font-weight: 900;
  letter-spacing: -0.06em;
  line-height: 0.95;
}

.ezd-heading-section {
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
}

.ezd-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--ezd-brand);
}
```

## File ảnh hưởng

```txt
src/layouts/BaseLayout.astro
src/styles/global.css
src/components/common/SectionHeader.astro
```

## Acceptance criteria

```txt
[ ] Montserrat load trên site
[ ] Heading dày, modern, sát mockup
[ ] Body vẫn dễ đọc tiếng Việt
[ ] SectionHeader dùng style mới
[ ] npm run build pass
```

---

# Task 7.3 — UI primitives: BrandMark, Button, Card

## Mục tiêu

Tạo các primitive component dùng chung, tránh lặp class Tailwind và đảm bảo đúng visual system.

## Component 1: `BrandMark.astro`

File:

```txt
src/components/common/BrandMark.astro
```

Props:

```ts
type Props = {
  variant?: 'full' | 'mark';
  tone?: 'dark' | 'light';
  showTagline?: boolean;
};
```

Dùng cho Header/Footer.

## Component 2: `ButtonLink.astro`

File:

```txt
src/components/common/ButtonLink.astro
```

Props:

```ts
type Props = {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};
```

Style:

```txt
primary = blue background, white text
secondary = white background, dark text, border
dark = black/dark background, white text
ghost = transparent/nav style
```

## Component 3: `Card.astro`

File:

```txt
src/components/common/Card.astro
```

Props:

```ts
type Props = {
  variant?: 'default' | 'soft' | 'glass' | 'outline' | 'dark';
  hover?: boolean;
};
```

Dùng slot.

## File ảnh hưởng

```txt
src/components/common/BrandMark.astro
src/components/common/ButtonLink.astro
src/components/common/Card.astro
src/components/common/Header.astro
src/components/common/Footer.astro
```

## Acceptance criteria

```txt
[ ] Header dùng BrandMark
[ ] Footer dùng BrandMark
[ ] Các button chính có thể dùng ButtonLink
[ ] Card render đúng các variant
[ ] Không còn contrast lỗi
```

---

# Task 7.4 — ProductHero + ChatMockup components

## Mục tiêu

Tạo hero giống mockup cho `/ezd-ai-chat/`.

## Component 1: `ChatMockup.astro`

File:

```txt
src/components/sections/ChatMockup.astro
```

Props:

```ts
type Message = {
  role: 'assistant' | 'user';
  text: string;
};

type Props = {
  eyebrow?: string;
  messages: Message[];
  note?: string;
};
```

UI:

```txt
- Card trắng lớn
- Inner panel xanh rất nhạt
- Bubble assistant màu trắng
- Bubble user màu blue
- Rounded lớn
- Shadow nhẹ
```

## Component 2: `ProductHero.astro`

File:

```txt
src/components/sections/ProductHero.astro
```

Props:

```ts
type Props = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
};
```

Cho `/ezd-ai-chat/`, content đã chốt:

```txt
Eyebrow:
EZD AI CHAT

Title:
Biến website thành nhân viên tư vấn 24/7 với AI Brand Assistant.

Description:
EZD AI Chat giúp website của bạn có một nhân vật AI mang giọng thương hiệu,
biết trả lời FAQ, tư vấn khách, dẫn dắt lead flow và chuyển khách sang người thật khi cần.
```

CTA:

```txt
Primary: Đặt lịch demo → /contact/
Secondary: Xem AI demo → #live-demo
```

## Acceptance criteria

```txt
[ ] Hero có background gradient blue/turquoise
[ ] Text trắng dễ đọc
[ ] CTA contrast tốt
[ ] Chat mockup giống hướng mockup
[ ] Responsive mobile ổn
```

---

# Task 7.5 — Section grids: PainPointGrid, FeatureGrid, UseCaseGrid

## Mục tiêu

Chuẩn hóa các grid section trong mockup.

## Component 1: `PainPointGrid.astro`

File:

```txt
src/components/sections/PainPointGrid.astro
```

Content đề xuất:

```txt
Title:
Website có traffic, nhưng bạn đang đánh rơi khách hàng mỗi ngày?

Description:
Các điểm chạm số tốt hơn giúp bạn giữ lại khách đang quan tâm và dẫn họ tới hành động phù hợp hơn.

Items:
- Khách hỏi lặp lại nhưng không ai phản hồi kịp.
- Website có traffic nhưng ít lead.
- Chatbot cũ quá máy móc và không đúng giọng thương hiệu.
- Khách cần được tư vấn trước khi đặt lịch hoặc mua hàng.
- Đội ngũ nhỏ không đủ người trực chat liên tục.
```

## Component 2: `FeatureGrid.astro`

Dùng cho section:

```txt
Không chỉ là chatbot.
Đây là một AI brand assistant.
```

Cards:

```txt
- Nhân vật AI đại diện thương hiệu
- Biết tư vấn và dẫn khách tới hành động
- Dễ triển khai theo mô hình managed SaaS
```

## Component 3: `UseCaseGrid.astro`

Dùng data từ `industries.json`.

## Acceptance criteria

```txt
[ ] Pain points render giống mockup
[ ] Difference cards render giống mockup
[ ] Use cases render từ data
[ ] Cards dùng Card component hoặc class thống nhất
```

---

# Task 7.6 — FeatureSpotlight component

## Mục tiêu

Tạo section turquoise gradient với feature cards và placeholder nhân vật AI.

File:

```txt
src/components/sections/FeatureSpotlight.astro
```

## UI theo mockup

```txt
- Background turquoise gradient
- Section eyebrow: AI FEATURES
- Title: Một lớp AI nhẹ, dễ triển khai và có khả năng dẫn dắt chuyển đổi.
- 3 card nổi bật ở giữa
- Card active ở giữa có placeholder image nhân vật
- Tabs dưới: AI Brand Character, FAQ Guardrail, Quick Replies, Lead Flow, Human Handoff, Basic Analytics
```

## Placeholder image

Sprint này dùng:

```txt
public/images/placeholders/ai-character-placeholder.png
```

Nếu chưa có ảnh, dùng box placeholder:

```txt
AI Character Placeholder
```

hoặc tạm dùng CSS block.

## Content features

```txt
AI Brand Character
FAQ Guardrail
Quick Replies
Lead Flow
Human Handoff
Basic Analytics
```

## Acceptance criteria

```txt
[ ] Section visually nổi bật
[ ] Active card giữa có placeholder character
[ ] Feature tabs render bên dưới
[ ] Không cần interactive thật ở Sprint này
[ ] Mobile không vỡ
```

---

# Task 7.7 — PricingGrid + FAQGrid components

## Mục tiêu

Chuẩn hóa pricing/FAQ giống mockup.

## Component 1: `PricingGrid.astro`

File:

```txt
src/components/sections/PricingGrid.astro
```

Dùng `pricing.json`.

Yêu cầu:

```txt
- 3 cards
- Growth được highlight recommended
- Starter: Từ 299k/tháng
- Growth: Từ 799k/tháng
- Pro: Tư vấn theo nhu cầu
- Note setup fee bên dưới
```

Cần cập nhật data nếu chưa có field:

```json
"isRecommended": true
```

cho Growth.

## Component 2: `FAQGrid.astro`

File:

```txt
src/components/sections/FAQGrid.astro
```

Props:

```ts
type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  faqs: FAQ[];
};
```

## Acceptance criteria

```txt
[ ] Pricing giống mockup
[ ] Growth nổi bật
[ ] FAQ 2 cột desktop
[ ] Mobile 1 cột
```

---

# Task 7.8 — Refactor `/ezd-ai-chat/` to match mockup

## Mục tiêu

Áp dụng toàn bộ component đã tạo vào:

```txt
src/pages/ezd-ai-chat.astro
```

## Section order final

```txt
1. ProductHero
2. PainPointGrid
3. FeatureGrid / Difference
4. LiveDemo section
5. UseCaseGrid
6. FeatureSpotlight
7. PricingGrid
8. FAQGrid
9. CTASection
```

## Content final cho hero

```txt
Biến website thành nhân viên tư vấn 24/7 với AI Brand Assistant.
```

## Visual direction

```txt
- Hero blue gradient
- Cards trắng, border nhẹ
- Các section xen kẽ white / light blue
- FeatureSpotlight turquoise gradient
- Final CTA black/dark
```

## Acceptance criteria

```txt
[ ] /ezd-ai-chat/ nhìn gần mockup
[ ] Content đúng quyết định đã chốt
[ ] Hero không còn chữ đen trên nền xanh
[ ] Growth pricing highlighted
[ ] FeatureSpotlight có placeholder
[ ] Build pass
```

---

# Task 7.9 — Apply direction lightly to homepage and shared pages

## Mục tiêu

Vì mockup là định hướng chung toàn website, cần áp dụng nhẹ cho homepage và shared components, nhưng không refactor quá sâu.

## Việc cần làm

```txt
- Homepage dùng ProductHero hoặc hero variant tương tự nhưng tổng quát hơn.
- Header/Footer giữ brand blue.
- About/Contact/Services giữ card + section style nhất quán.
- CTASection dùng black/dark hoặc blue đúng contrast.
```

Homepage không cần giống hoàn toàn `/ezd-ai-chat/`, nhưng cần cùng system.

## Acceptance criteria

```txt
[ ] Homepage không bị lệch style so với /ezd-ai-chat/
[ ] Services/case/about/contact vẫn ổn với token mới
[ ] Không có section teal cũ quá nổi
```

---

# Task 7.10 — UI QA pass

## Mục tiêu

Soát lại UI theo mockup + Brand Guideline.

## Checklist QA

```txt
Brand:
[ ] Dark blue / pure blue / turquoise dùng đúng vai trò
[ ] Button blue luôn chữ trắng
[ ] Logo/brand mark rõ
[ ] Typography Montserrat hoạt động
[ ] Layout tối giản, rõ ràng

Mockup:
[ ] /ezd-ai-chat/ có hero gradient
[ ] Có chat mockup
[ ] Có pain point grid
[ ] Có "Không chỉ là chatbot"
[ ] Có Live Demo
[ ] Có Use Cases
[ ] Có FeatureSpotlight turquoise
[ ] Có Pricing Growth highlighted
[ ] Có FAQ
[ ] Có final CTA dark

Responsive:
[ ] Mobile hero không vỡ
[ ] Cards về 1 cột
[ ] Header mobile dùng menu tốt
[ ] FeatureSpotlight không overflow

SEO:
[ ] BaseLayout vẫn render metadata
[ ] JSON-LD vẫn còn
[ ] Sitemap/build không lỗi

Performance:
[ ] Google Font không gây layout shift quá nặng
[ ] Không dùng JS nếu chưa cần
[ ] Placeholder image có kích thước hợp lý
```

Commit:

```bash
git add .
git commit -m "refactor: align EZD AI Chat UI with brand mockup"
```

---

# Lộ trình thực thi đề xuất

Mình đề xuất đi theo thứ tự này:

```txt
1. Task 7.1 — Fix tokens + contrast
2. Task 7.2 — Montserrat
3. Task 7.3 — BrandMark, ButtonLink, Card
4. Task 7.4 — ProductHero + ChatMockup
5. Task 7.5 — Grids
6. Task 7.6 — FeatureSpotlight
7. Task 7.7 — PricingGrid + FAQGrid
8. Task 7.8 — Refactor /ezd-ai-chat/
9. Task 7.9 — Apply direction to shared pages
10. Task 7.10 — QA
```

Bước tiếp theo nên bắt đầu bằng **Task 7.1 — Brand token alignment + contrast fix**, vì đây là nền cho toàn bộ UI và đang có lỗi contrast thực tế trong screenshot.
