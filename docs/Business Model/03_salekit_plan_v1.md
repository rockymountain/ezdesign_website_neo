Đúng. Ta nên xem **Salekit v1** không phải là “bộ tài liệu bán hàng”, mà là **bộ giao thức triển khai pilot** cho EZD AI Chat.

Vì mục tiêu trước mắt không phải bán đại trà qua kênh OTP/Zalo ngắn, mà là:

```txt
Website salekit + tư vấn trực tiếp
→ chốt 2–3 khách hàng thân thuộc
→ triển khai tenant thật
→ thu dữ liệu hội thoại thật
→ bắt đầu tạo Friction Objects sạch
```

Nền kỹ thuật hiện đã đủ sẵn để mở tenant mới: widget nhúng qua `chat.ezdesign.vn`, Gateway trên Cloudflare Workers, tenant registry/config/assets nằm trong R2, backend Cloud Run, và Sprint 7 đã chứng minh Yên Retreat có thể hoạt động như một client website bình thường của EZD AI Chat.  Về chiến lược, BMC đã xác định rõ EZD AI Chat là **Friction Intelligence System**, tài sản lõi là **Verified Friction-to-Conversion Pattern Library**, không phải chỉ là một chatbot trả lời FAQ. 

---

# Kế hoạch soạn Salekit v1 cho EZD AI Chat

## Mục tiêu của Salekit v1

Salekit phải làm được 4 việc:

```txt
1. Giải thích rõ EZD AI Chat là gì.
2. Thuyết phục khách hàng pilot triển khai nhanh.
3. Chuẩn hóa dữ liệu đầu vào để tạo tenant config.
4. Thiết lập Data Partnership: khách nhận giá trị, EZD nhận pattern ẩn danh để học.
```

Nói cách khác:

```txt
Salekit = Sales Material + Onboarding Protocol + Data Rights Agreement + Pilot Playbook
```

---

# 1. Cấu trúc Salekit trên website

Mình đề xuất tạo một landing page/salekit riêng, có thể là:

```txt
https://ezdesign.vn/ezd-ai-chat/founding-partner/
```

Hoặc nếu muốn đơn giản hơn:

```txt
https://ezdesign.vn/ezd-ai-chat/
```

và thêm section “Founding Partner Pilot”.

Cấu trúc nên gồm 10 phần.

---

## Section 1 — Hero / Hook

Mục tiêu: định vị ngay từ đầu rằng đây không phải chatbot.

Headline đề xuất:

```txt
EZD AI Chat
Nhân viên thương hiệu AI giúp website của bạn tư vấn, xử lý băn khoăn và chuyển khách thành lead 24/7.
```

Subheadline:

```txt
Không chỉ trả lời câu hỏi. EZD AI Chat giúp bạn hiểu khách hàng đang ngại điều gì trước khi mua — và tự động gỡ những ma sát đó trong cuộc trò chuyện.
```

CTA:

```txt
Đăng ký Pilot Founding Partner
```

Hoặc:

```txt
Trao đổi triển khai thử nghiệm
```

---

## Section 2 — Vấn đề

Mục tiêu: đánh vào nỗi đau thật của SME B2C.

Nội dung:

```txt
Khách vào website nhưng không để lại thông tin.
Khách hỏi giá rồi im lặng.
Khách cần tư vấn nhưng nhân sự không phản hồi kịp.
Khách có nhiều băn khoăn nhưng chủ doanh nghiệp không biết chính xác họ đang kẹt ở đâu.
```

Thông điệp chốt:

```txt
Vấn đề không chỉ là thiếu người trả lời.
Vấn đề là doanh nghiệp chưa đo được những ma sát khiến khách chưa mua.
```

---

## Section 3 — Giải pháp

Mục tiêu: mô tả EZD AI Chat bằng ngôn ngữ khách hàng hiểu.

```txt
EZD AI Chat là một AI Brand Receptionist được nhúng vào website của bạn.

AI này có thể:
- Chào khách theo giọng thương hiệu.
- Trả lời câu hỏi thường gặp.
- Tư vấn dịch vụ/sản phẩm phù hợp.
- Xử lý các băn khoăn trước khi mua.
- Dẫn khách sang Zalo/cuộc gọi/form khi họ sẵn sàng.
- Ghi nhận các tín hiệu cho thấy khách đang kẹt ở đâu trong hành trình mua.
```

Không dùng quá nhiều thuật ngữ “Friction Object” ở phần public. Nên dịch ra ngôn ngữ dễ hiểu:

```txt
Báo cáo lý do khách chưa mua.
```

---

## Section 4 — Khác gì chatbot thường?

Đây là section rất quan trọng.

Bảng so sánh:

| Chatbot thường                 | EZD AI Chat                          |
| ------------------------------ | ------------------------------------ |
| Trả lời FAQ                    | Tư vấn theo ngữ cảnh                 |
| Có sẵn kịch bản cứng           | Linh hoạt theo dữ liệu thương hiệu   |
| Tập trung giảm tải support     | Tập trung tăng chuyển đổi            |
| Không biết khách rời đi vì sao | Ghi nhận ma sát khiến khách chưa mua |
| Mỗi khách tự tối ưu riêng      | Học pattern theo từng ngành          |

Thông điệp chốt:

```txt
Chatbot thường trả lời câu hỏi.
EZD AI Chat tìm cách giảm lý do khiến khách chưa xuống tiền.
```

---

## Section 5 — Use Case theo ngành

Mục tiêu: giúp khách thấy “cái này dành cho mình”.

### Hospitality / Retreat / Homestay

```txt
Khách thường hỏi:
- Có xa trung tâm không?
- Có phù hợp cho gia đình/nhóm bạn không?
- Giá đã gồm gì?
- Có riêng tư không?
- Có ăn uống/BBQ không?
- Nếu trời mưa thì sao?
```

AI giúp:

```txt
- Tư vấn loại phòng/gói phù hợp.
- Giải thích tiện nghi.
- Gỡ lo ngại về vị trí, thời tiết, chi phí.
- Chuyển khách sang Zalo để đặt lịch.
```

### Education

```txt
Khách thường hỏi:
- Con mất gốc có học được không?
- Bao lâu thì tiến bộ?
- Giáo viên là ai?
- Có học thử không?
- Lịch học có linh hoạt không?
- Học phí bao nhiêu?
```

AI giúp:

```txt
- Tư vấn lộ trình.
- Trấn an phụ huynh.
- Thu lead học thử/tư vấn.
- Ghi nhận nhóm băn khoăn phổ biến.
```

### Services / Agency / Design

```txt
Khách thường hỏi:
- Làm website bao nhiêu tiền?
- Bao lâu thì xong?
- Khác gì thuê freelancer?
- Có bảo hành không?
- Có cam kết ra khách không?
- Tôi chỉ muốn sửa web cũ được không?
```

AI giúp:

```txt
- Tư vấn gói dịch vụ.
- Giải thích quy trình.
- Gỡ lo ngại về giá, năng lực, thời gian.
- Chuyển khách sang tư vấn trực tiếp.
```

---

## Section 6 — Case Study: Yên Retreat

Mục tiêu: chứng minh hệ thống đã chạy thật.

Không cần nêu số liệu nếu chưa có dashboard đầy đủ. Có thể dùng dạng “implementation proof”.

```txt
EZD AI Chat bắt nguồn từ dự án AI Receptionist cho Yên Retreat & Cafe.

Từ một AI chat tích hợp riêng trong website Yên, hệ thống đã được tách thành nền tảng multi-tenant riêng:
- Widget nhúng độc lập.
- Gateway riêng tại chat.ezdesign.vn.
- Tenant config/assets nằm trong R2.
- Backend AI xử lý qua Cloud Run và Gemini.
- Yên hiện là tenant/reference case đầu tiên.
```

Thông điệp:

```txt
Đây không phải bản demo ý tưởng.
Hệ thống đã có tenant thật, website thật và luồng chat thật.
```

---

## Section 7 — Founding Partner Pilot

Đây là section bán hàng chính.

Tên gói:

```txt
Founding Partner Pilot
```

Định vị:

```txt
Gói triển khai dành cho một số doanh nghiệp thân thuộc đầu tiên muốn thử nghiệm AI Brand Receptionist trên website với chi phí thấp, đồng thời cùng EZD xây dựng bộ dữ liệu hiểu ma sát khách hàng theo ngành.
```

Khách nhận được:

```txt
- 01 AI Brand Receptionist nhúng vào website.
- Cấu hình theo thương hiệu riêng.
- FAQ/dịch vụ/giọng nói thương hiệu riêng.
- Lead flow hoặc booking flow cơ bản.
- Nút handoff sang Zalo/call/form.
- Theo dõi các event cơ bản: mở chat, gửi tin nhắn, bấm Zalo, hoàn thành lead flow.
- Báo cáo pilot ban đầu: khách hỏi gì, băn khoăn gì, điểm nào nên tối ưu.
```

EZD nhận lại:

```txt
- Quyền dùng dữ liệu đã ẩn danh/tổng hợp để cải thiện hệ thống.
- Feedback định kỳ về chất lượng lead.
- Quyền xin phép dùng tên/logo/case study nếu khách đồng ý.
```

---

## Section 8 — Data Rights & Privacy

Phần này bắt buộc phải có, vì mô hình dài hạn dựa trên dữ liệu.

Nội dung nên viết rất rõ:

```txt
Cam kết dữ liệu:

- Dữ liệu hội thoại thô thuộc phạm vi của doanh nghiệp sử dụng.
- Thông tin cá nhân như tên, số điện thoại, email, địa chỉ, nội dung lead không được bán cho bên thứ ba.
- EZD chỉ sử dụng các pattern đã được ẩn danh và tổng hợp để cải thiện chất lượng AI.
- EZD không công bố dữ liệu riêng hoặc hiệu suất riêng của từng doanh nghiệp nếu chưa được đồng ý.
- Doanh nghiệp tham gia pilot sẽ được hưởng lợi từ các cải tiến chung của hệ thống theo ngành.
```

Cách nói đơn giản:

```txt
Dữ liệu riêng là của bạn.
Tri thức ẩn danh giúp hệ thống tốt hơn cho cả ngành.
```

---

## Section 9 — Quy trình triển khai

Mục tiêu: làm khách thấy dễ tham gia.

Timeline đề xuất:

```txt
Bước 1 — Khảo sát nhanh
Thu thập thông tin thương hiệu, dịch vụ, FAQ, quy trình tư vấn.

Bước 2 — Tạo AI Brand Receptionist
EZD cấu hình nhân vật, giọng nói, knowledge base, lead flow.

Bước 3 — Test nội bộ
Hai bên test câu trả lời, tone, thông tin dịch vụ, handoff.

Bước 4 — Nhúng widget vào website
Thêm script widget vào website khách hàng.

Bước 5 — Theo dõi pilot
Ghi nhận câu hỏi, băn khoăn, handoff, lead signal.

Bước 6 — Review & tối ưu
EZD gửi nhận định ban đầu về các ma sát mua hàng phổ biến.
```

Có thể ghi thời gian mềm:

```txt
Triển khai pilot thường gồm 3 giai đoạn: chuẩn bị dữ liệu, cấu hình/test, nhúng & theo dõi.
```

Tránh hứa cứng nếu chưa muốn bị ràng buộc.

---

## Section 10 — CTA cuối

CTA:

```txt
Tôi muốn tham gia Founding Partner Pilot
```

Form nên hỏi ngắn:

```txt
- Tên doanh nghiệp
- Website
- Ngành
- Người liên hệ
- Số điện thoại/Zalo
- Mục tiêu chính: tư vấn / đặt lịch / lấy lead / hỗ trợ khách / khác
```

Sau khi submit, bạn tư vấn trực tiếp.

---

# 2. Bộ tài liệu cần soạn kèm Salekit

Ngoài landing page, nên có 5 tài liệu nội bộ/đính kèm.

## Tài liệu 1 — One-page Sales Brief

Dùng khi tư vấn trực tiếp.

Cấu trúc:

```txt
1. EZD AI Chat là gì?
2. Dành cho ai?
3. Giúp gì cho doanh nghiệp?
4. Khác gì chatbot thường?
5. Gói Founding Partner Pilot gồm gì?
6. Quy trình triển khai.
7. Cam kết dữ liệu.
```

Độ dài: 1–2 trang.

---

## Tài liệu 2 — Pilot Offer Sheet

Dùng để chốt scope.

Nội dung:

```txt
Tên gói: Founding Partner Pilot

Bao gồm:
- AI Brand Receptionist widget.
- Cấu hình tenant.
- Knowledge/FAQ cơ bản.
- Lead/handoff flow.
- Nhúng website.
- Theo dõi analytics event cơ bản.
- Review sau pilot.

Không bao gồm ở v1:
- CRM/POS integration sâu.
- Dashboard nâng cao.
- Cam kết tăng doanh thu cụ thể.
- Xử lý toàn bộ kênh inbox/social.
```

Phần “không bao gồm” rất quan trọng để tránh scope creep.

---

## Tài liệu 3 — Data Rights Note

Dùng để tạo niềm tin.

Nội dung ngắn, dễ hiểu:

```txt
EZD không bán dữ liệu thô.
EZD không dùng thông tin cá nhân của khách hàng cuối cho mục đích ngoài vận hành tenant.
EZD chỉ học từ pattern đã ẩn danh và tổng hợp.
Mục tiêu là giúp AI xử lý tốt hơn các băn khoăn phổ biến trong từng ngành.
```

---

## Tài liệu 4 — Onboarding Form

Đây là phần quan trọng nhất để chuẩn hóa input.

Form nên chia thành 9 nhóm.

### Nhóm 1 — Thông tin doanh nghiệp

```txt
- Tên thương hiệu
- Website
- Ngành
- Địa chỉ/khu vực phục vụ
- Người phụ trách
- Zalo/call/email handoff
```

### Nhóm 2 — Khách hàng mục tiêu

```txt
- Khách hàng thường là ai?
- Họ đến từ đâu?
- Họ thường cần gì?
- Họ thường lo điều gì trước khi mua?
```

### Nhóm 3 — Dịch vụ / sản phẩm chính

```txt
- Dịch vụ chính
- Gói phổ biến
- Giá hoặc khoảng giá nếu được phép tư vấn
- Điều kiện/giới hạn cần nói rõ
```

### Nhóm 4 — FAQ thô

```txt
- 10–30 câu khách thường hỏi nhất
- Câu trả lời hiện tại của nhân viên/chủ doanh nghiệp
```

### Nhóm 5 — Objections / Frictions

```txt
- Khách thường ngại điều gì?
- Lý do phổ biến khiến khách chưa chốt?
- Câu hỏi nào thường xuất hiện trước khi khách im lặng?
```

### Nhóm 6 — Brand voice

```txt
- Thương hiệu nên nói chuyện như thế nào?
- Thân thiện / chuyên nghiệp / vui vẻ / cao cấp / nhẹ nhàng?
- Có từ nào nên dùng?
- Có từ nào không nên dùng?
```

### Nhóm 7 — Lead flow

```txt
- Khi nào nên xin thông tin khách?
- Cần xin thông tin gì?
- Tên / số điện thoại / nhu cầu / ngày mong muốn / ngân sách?
- Sau khi có lead thì chuyển về đâu?
```

### Nhóm 8 — Handoff rule

```txt
- Khi nào chuyển sang Zalo/call?
- Link Zalo/call là gì?
- Có giờ làm việc không?
- Có câu nhắn mặc định khi handoff không?
```

### Nhóm 9 — Data feedback

```txt
- Ai sẽ xác nhận lead chất lượng?
- Muốn feedback theo tuần hay theo đợt?
- Trạng thái lead nào cần dùng: booked/lost/pending/spam?
```

---

## Tài liệu 5 — Internal Tenant Build Checklist

Dùng cho đội EZD sau khi khách gửi onboarding form.

Checklist:

```txt
1. Tạo tenantId.
2. Tạo local seed config ngoài src.
3. Chuẩn bị tenant.json.
4. Chuẩn bị character.json.
5. Chuẩn bị theme.json.
6. Chuẩn bị chat.json.
7. Chuẩn bị knowledge.json.
8. Chuẩn bị faq.json.
9. Chuẩn bị prompt.json.
10. Chuẩn bị backend.json.
11. Upload config lên R2.
12. Upload assets nếu có.
13. Cập nhật registry/tenants.json.
14. Test /api/widget-config.
15. Test /api/chat.
16. Test /api/analytics.
17. Nhúng widget vào website.
18. Smoke test production.
19. Theo dõi analytics.
20. Ghi nhận friction candidates đầu tiên.
```

Điểm này bám sát kiến trúc hiện tại: thêm tenant mới qua R2 registry/config/assets, không sửa `src/tenants`. 

---

# 3. Thứ tự thực hiện

Mình đề xuất chia thành 4 phase.

## Phase 1 — Soạn nội dung website salekit

Deliverable:

```txt
- Hero
- Problem
- Solution
- Difference vs chatbot
- Use cases
- Case Yên
- Founding Partner Pilot
- Data Rights
- Implementation Timeline
- CTA
```

Mục tiêu: có trang đủ tốt để gửi link trước khi tư vấn trực tiếp.

---

## Phase 2 — Soạn bộ tư vấn trực tiếp

Deliverable:

```txt
- One-page Sales Brief
- Pilot Offer Sheet
- Data Rights Note
```

Mục tiêu: khi gặp khách hàng thân thuộc, bạn có tài liệu để trình bày gọn, không bị nói lan man.

---

## Phase 3 — Soạn onboarding form

Deliverable:

```txt
- Form thu thập dữ liệu đầu vào.
- Mapping form → tenant config.
- Mapping form → friction taxonomy ban đầu.
```

Đây là phần quan trọng nhất để dữ liệu không bị nhiễu.

---

## Phase 4 — Soạn internal deployment checklist

Deliverable:

```txt
- Tenant Build Checklist.
- Pilot Success Criteria.
- First 30 Conversations Review Template.
```

Mục tiêu: mỗi khách hàng pilot đều được triển khai cùng một quy trình.

---

# 4. Tiêu chí hoàn thành Salekit v1

Salekit v1 được coi là hoàn thành khi bạn có đủ:

```txt
1. Một landing page có thể gửi cho khách.
2. Một tài liệu tư vấn trực tiếp.
3. Một form onboarding đủ để tạo tenant config.
4. Một đoạn Data Rights rõ ràng.
5. Một offer pilot có scope rõ.
6. Một checklist nội bộ để triển khai tenant.
```

Không cần đẹp hoàn hảo ngay. Giai đoạn này cần **rõ, đủ, triển khai được**.

---

# 5. Ưu tiên nội dung nên viết trước

Thứ tự nên làm:

```txt
1. One-page Positioning
2. Founding Partner Pilot Offer
3. Data Rights
4. Onboarding Form
5. Website Landing Page
6. Internal Tenant Checklist
7. Case Study Yên Retreat
```

Lý do: 4 phần đầu giúp bạn đi tư vấn ngay. Landing page có thể hoàn thiện sau nhưng nên có bản đầu nhanh.

---

# 6. Bản chốt chiến lược cho Salekit

Salekit nên xoay quanh một câu:

```txt
EZD AI Chat giúp doanh nghiệp biết khách đang ngại điều gì trước khi mua — và có một AI Brand Receptionist để xử lý những băn khoăn đó 24/7 ngay trên website.
```

Còn bản nội bộ:

```txt
Salekit v1 không chỉ để bán.
Salekit v1 là Data Onboarding Protocol để biến mỗi founding tenant thành một nguồn Friction Object sạch.
```

Kế hoạch hợp lý nhất tiếp theo là soạn **Website Salekit Outline v1** trước, sau đó mở rộng thành **Onboarding Form** và **Pilot Offer Sheet**.
