Đã nhận file QA/QC sau Epic 7. Các đánh giá này rất hữu ích và mình đồng ý phần lớn. Mình đề xuất biến nó thành một **Epic 7.10 — UI QA Remediation**, tức là sprint vá/polish sau khi hoàn thành 7.9, trước khi chuyển sang Epic 8 Contact Form Integration.

Các vấn đề chính trong file gồm: cần hover/active token rõ hơn cho CTA pricing, About thiếu yếu tố con người và social proof, Contact cần tối ưu submit button + chuẩn bị trạng thái form, Service pages đang “nói nhiều hơn cho thấy”, Case Study cần visual proof/metrics/handoff infographic, và AR/VR page cần visual demo + use case thứ 3 + CTA trải nghiệm AR. 

# Đề xuất kế hoạch tiếp theo

## Epic 7.10 — UI QA Remediation

### Task 7.10.1 — Interaction & Token polish

Mục tiêu: xử lý các lỗi nhỏ nhưng ảnh hưởng cảm giác UI.

Làm:

```txt
- Thêm hover/active token semantic vào global.css
- Cập nhật ButtonLink secondary hover:
  border chuyển brand
  text chuyển brand
  nền vẫn sáng
- Kiểm tra Pricing Starter/Pro CTA hover không còn chỉ xám nhạt
- Xử lý lỗi khi mở /ezd-ai-chat/ bị tự kéo xuống AI Feature
```

Điểm “bị kéo ngay lập tức vào AI Feature” cần kiểm tra kỹ. Khả năng cao do browser giữ hash/scroll restoration, hoặc script `FeatureSpotlight` tự `scrollIntoView()` khi init. Nếu đúng, ta bỏ `scrollIntoView()` trong lần `updateContent(0)` đầu tiên, chỉ scroll khi user click tab.

---

### Task 7.10.2 — About trust layer

Mục tiêu: bổ sung trust/human touch cho `/about/`.

Làm:

```txt
- Tạo section Meet the Team hoặc Human Touch
- Tạo section Social Proof / Client Logos / Trusted by
- Content đặt trong src/data/about.json
- UI dùng Card, grayscale/mono placeholder theo brand guideline
```

Sprint này có thể dùng placeholder:

```txt
- Founder / Design Lead
- AI Implementation
- Visual & Motion
```

Và logo strip placeholder:

```txt
Yên Retreat & Cafe
SME B2C
Local Brand
Hospitality
Education
```

Sau này thay bằng logo thật.

---

### Task 7.10.3 — Contact form UX readiness

Mục tiêu: làm form sẵn sàng cho Epic 8.

Làm:

```txt
- Submit button full-width
- Privacy note xuống dưới button, căn giữa
- Chuẩn bị vùng inline status message
- Thêm data attributes cho form: data-contact-form, data-form-status
- Chưa cần nối API
```

Ta chưa cần implement loading/success/error thật ở task này, nhưng nên chuẩn bị markup để Epic 8 chỉ cần thêm script/backend.

---

### Task 7.10.4 — Service visual proof system

Mục tiêu: sửa lỗi “Tell, don’t show” cho service pages.

Làm:

```txt
- Tạo component ServiceVisualPanel.astro
- Với ai-brand-character: hiển thị Character ID Card placeholder
- Với ar-vr-mr: hiển thị AR/VR visual placeholder
- Với digital-twin: hiển thị spatial/digital twin panel
- Với game-activation: hiển thị game mechanic cards
- Với interactive-website: hiển thị interactive flow panel
```

Bước này giải quyết nhận xét rằng trang AI Brand Character và AR/VR quá nhiều chữ, thiếu visual demo. 

---

### Task 7.10.5 — AI Brand Character service upgrade

Mục tiêu: nâng riêng trang `/services/ai-brand-character/`.

Làm:

```txt
- Hero visual bên phải là Character ID Card
- Feature cards có visual/icon nhỏ
- Related Case Study Yên AI Chat bắt buộc render
- Thêm Pricing Expectation section trước FAQ
```

Phần pricing expectation không cần giá cụ thể, chỉ cần minh bạch:

```txt
Chi phí phụ thuộc vào:
- 2D/3D visual style
- outfit/custom identity
- độ phức tạp hội thoại
- số ngôn ngữ
- animation/motion pack
```

---

### Task 7.10.6 — Case Study conversion upgrade

Mục tiêu: biến case study thành sales asset mạnh hơn.

Làm:

```txt
- Thêm Key Result Cards
- Thêm Visual Proof placeholder/screenshot panel
- Thêm Handoff Flow infographic
- Đổi CTA chính thành “Thiết kế AI Assistant tương tự cho tôi”
```

Vì metrics đang “Limited”, dùng safe metrics không quá nhạy cảm:

```txt
24/7 support-ready
FAQ-first response flow
Zalo handoff prepared
Privacy-safe analytics
```

Không nên bịa số như 70%/85% nếu chưa có dữ liệu thật.

---

### Task 7.10.7 — AR/VR service-specific polish

Mục tiêu: làm `/services/ar-vr-mr/` phù hợp bản chất dịch vụ thị giác.

Làm:

```txt
- Thêm visual cho AR Activation
- Thêm visual cho VR Showcase
- Bổ sung use case thứ 3: Virtual Showroom
- FAQ chuyển sang Accordion component
- CTA phụ: “Trải nghiệm AR ngay” nếu có link demo; nếu chưa có, dùng disabled/coming soon hoặc link contact
```

Không nên tạo CTA “Trải nghiệm AR ngay” nếu chưa có demo thật. Có thể dùng “Xem ý tưởng WebAR demo” trước.

---

# Thứ tự triển khai khuyến nghị

Mình khuyến nghị đi theo thứ tự này:

```txt
7.10.1 — Interaction & Token polish
7.10.3 — Contact form UX readiness
7.10.2 — About trust layer
7.10.4 — Service visual proof system
7.10.5 — AI Brand Character service upgrade
7.10.6 — Case Study conversion upgrade
7.10.7 — AR/VR service-specific polish
```

Lý do: 7.10.1 và 7.10.3 là quick win, ít rủi ro. Sau đó mới đến visual/content-heavy tasks.

# Sau Epic 7.10

Khi 7.10 pass, ta mới chuyển sang:

```txt
Epic 8 — Contact Form & Lead Capture Integration
```

với stack đã thống nhất:

```txt
Cloudflare Worker + Google Sheets + email notification
```

Bước tiếp theo nên bắt đầu với **Task 7.10.1 — Interaction & Token polish**, vì nó xử lý ngay lỗi pricing hover và lỗi auto-scroll trên `/ezd-ai-chat/`.
