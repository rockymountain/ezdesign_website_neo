# UI QA after Epic 7

## 1. Tối ưu Hệ thống Color Tokens (EZD AI Chat page)

Hiện trạng: HTML đang dùng biến CSS rất tốt (var(--ezd-brand), var(--ezd-text-muted)...).  

Đề xuất: Đảm bảo bạn có bộ màu Hover và Active riêng. Ở bảng Pricing, gói Starter và Pro có nút CTA màu trắng viền xám (hover:bg-[var(--ezd-surface-muted)]). Nên cân nhắc khi hover vào, viền hoặc text chuyển sang màu Xanh (var(--ezd-brand)) để kích thích click thay vì chỉ đổi nền xám nhạt.

Ngoài ra, khi mỏ trang này, user bị kéo ngay lập tức vào phần AI Feature, như vậy không hợp lý.

## 2. About page

Mặc dù UI rất sạch, hiện đại và điều hướng tốt, trang About hiện tại đang **thiếu đi một yếu tố cốt lõi của nguyên tắc xây dựng Niềm tin (Trust)**. Dưới đây là các đề xuất tối ưu:

**1. Thiếu yếu tố "Con người" (Human Touch)**
*   *Vấn đề:* Xuyên suốt mã nguồn trang About, toàn bộ giao diện đều là text, card, và các khối hình hộp/gradient tĩnh `[cite: 3]`. Không có một hình ảnh nào về đội ngũ (Team) hay không gian làm việc. Ở định vị cũ (Brand Guideline 2025), bạn đã từng dùng hình ảnh con người rất tốt để tạo sự gần gũi.
*   *Giải pháp:* Ngay cả khi bạn bán sản phẩm AI (máy móc), khách hàng B2B (SMEs) vẫn mua hàng từ "Con người". Hãy bổ sung một section **"Meet the Team"** hoặc hình ảnh người sáng lập/đội ngũ vận hành (dù là dạng minh họa 3D, avatar hay ảnh thật) để tạo độ tin cậy. 

**2. Thiếu Social Proof (Bằng chứng xã hội)**
*   *Vấn đề:* Trang About hiện tại đang là lời "tự kể" của EZDesign `[cite: 3]`. Khách hàng SMEs thường mang tâm lý phòng thủ và muốn biết "Ai đã từng làm việc với các bạn?".
*   *Giải pháp:* Nên chèn một dải (Marquee) các logo khách hàng cũ (dù là làm dịch vụ 2D cũ hay làm AI Chat mới), hoặc một trích dẫn (Testimonial) từ khách hàng vào giữa phần *Core Values* và phần *EZD AI Chat Spotlight*.

**3. Hiệu ứng cuộn trang (Scroll Animations)**
*   *Vấn đề:* Hiện tại các Card đã có hiệu ứng `hover` rất tốt `[cite: 3]`, nhưng để trang mang đậm chất "Interactive" hơn, nên có thêm hiệu ứng khi người dùng cuộn trang.
*   *Giải pháp:* Bổ sung các thư viện nhẹ (như AOS hoặc Framer Motion nếu dùng React/NextJS) để các khối nội dung (như 3 cục giá trị cốt lõi) được *Fade-in-up* lần lượt khi cuộn tới. Nó sẽ tăng trải nghiệm "tech-vibe" lên rất nhiều.

**Tổng kết:** 
Về mặt UI flow và cấu trúc mã nguồn HTML, trang About này đạt điểm rất cao trong việc chuyển tải thông điệp tái định vị của EZDesign. Nó gọn gàng, vào thẳng vấn đề và có tính kết nối cao với sản phẩm (AI Chat). Bạn chỉ cần bổ sung thêm yếu tố "Con người" (Hình ảnh team) và "Bằng chứng" (Logo đối tác) là trang About này sẽ trở thành một cỗ máy chốt sale hoàn hảo.

## 3. Contact page

Dù UI đã rất sát với chuẩn mực của một Product-led/SaaS website, vẫn có một số điểm có thể tối ưu thêm:

**1. "Luật Fitts" (Fitts's Law) đối với Nút Submit**
*   *Hiện trạng:* Nút *"Gửi yêu cầu tư vấn"* `[cite: 4]` đang nằm lọt thỏm cùng một hàng với dòng text lưu ý bảo mật trên giao diện Desktop (`sm:flex-row sm:items-center sm:justify-between`). 
*   *Đề xuất:* Nút Submit (Call-to-action quan trọng nhất trang) nên được thiết kế full-width (rộng 100% bằng với các ô input phía trên) hoặc đủ to để tạo thành một khối vững chắc. Nên chuyển dòng text lưu ý bảo mật xuống nằm *bên dưới* nút Submit, căn giữa. Điều này tạo ra một "đường lăn" thị giác (visual path) mượt mà từ trên xuống dưới cho người dùng.

**2. Trạng thái Loading / Success / Error của Form (Cần chuẩn bị cho Sprint sau)**
*   *Hiện trạng:* HTML hiện tại chỉ là placeholder `[cite: 4]`.
*   *Đề xuất UX:* Trong Sprint tới khi nối API, bạn phải thiết kế thêm UI cho 3 trạng thái:
    *   **Loading:** Khi nhấn gửi, nút bấm nên mờ đi, text đổi thành "Đang gửi..." và có icon xoay (spinner) để tránh khách hàng nhấp đúp (double-click).
    *   **Success:** Cần thiết kế một khối UI "Cảm ơn" (Inline Success Message) hoặc một popup mượt mà bật lên báo hiệu form đã gửi thành công, thay vì load lại toàn bộ trang.
    *   **Error:** Viền ô nhập liệu chuyển sang màu đỏ (`border-red-500`) nếu khách nhập sai định dạng email/sdt, kèm dòng text đỏ nhỏ thông báo lỗi ngay dưới ô đó.

**3. Khối "Zalo" / "Hotline" (Kênh liên hệ phụ)**
*   *Hiện trạng:* Bạn đang để *"Cập nhật sau"* `[cite: 4]`.
*   *Đề xuất:* Khi đưa dữ liệu thật vào, thay vì chỉ để dãy số trơn, hãy biến nó thành **Deep-link**. Ví dụ: Bấm vào thẻ Zalo thì mở thẳng app Zalo PC/Mobile (`zalo.me/sdt`); bấm vào Hotline trên Mobile thì tự động mở trình gọi điện (`tel:sdt`). Điều này cắt giảm hoàn toàn thao tác "Copy số -> Mở app -> Dán số" của khách hàng.

**Tổng kết:**
Trang Contact này là một ví dụ mẫu mực về UI sinh ra để phục vụ chức năng (Form follows function). Cấu trúc biểu mẫu, cách phân loại ngành nghề, và phần nội dung quản lý kỳ vọng (Expectation) ở nửa dưới trang cho thấy bạn rất hiểu tâm lý khách hàng doanh nghiệp SME. Khi hoàn thiện các hiệu ứng trạng thái form (Loading/Success) ở Sprint kế tiếp, trang này sẽ hoạt động cực kỳ hiệu quả trong việc thu thập và phân loại Lead.

## 4. Dịch Vụ Page (ai-brand-character/)

Trang này cấu trúc rất mượt, nhưng đang bị mắc lỗi **"Nói nhiều hơn Làm" (Tell, don't Show)** - một lỗi nguy hiểm khi bán dịch vụ thiết kế. Dưới đây là các điểm cần khắc phục:

**1. Khuyết thiếu hoàn toàn Visual Demo (Thiếu tính trực quan)**
*   *Vấn đề:* Trang đang bán dịch vụ *"AI Brand Character"*, nói về *"Visual direction"* và *"Outfit"* `[cite: 5]`, nhưng toàn bộ giao diện từ trên xuống dưới chỉ toàn là Chữ (Typography) và Khối màu (Gradient/Boxes). Người dùng không thể tưởng tượng một "Nhân vật AI" trông như thế nào.
*   *Giải pháp:* 
    *   Ở phần **Hero Section**, thay vì một box text trống bên phải, hãy đặt hình ảnh/GIF của một nhân vật AI đang nhấp nháy hoặc một thẻ ID nhân vật (Character ID Card) với hình đại diện, biểu đồ radar tính cách.
    *   Ở phần **Features**, các card (`Character persona`, `Visual direction`) `[cite: 5]` nên được gắn thêm hình ảnh minh họa nhỏ (ví dụ: ảnh 3D render của một cô gái/chàng trai AI mang đồng phục thương hiệu).

**2. Bỏ lỡ điểm chạm "Social Proof" (Bằng chứng thực tế)**
*   *Vấn đề:* Trong source code, bạn đã comment sẵn `<!-- Related Case Study -->` `[cite: 5]` nhưng lại để trống không render UI. 
*   *Giải pháp:* Bạn bắt buộc phải đưa Case Study "Yên AI Chat" vào vị trí này. Hãy thiết kế một banner full-width hoặc một Split-screen (một bên ảnh/video Yên AI Chat đang hoạt động, một bên là kết quả đạt được). Khách hàng B2B hiếm khi mua dịch vụ nếu chưa thấy ai dùng thử thành công.

**3. Bổ sung định hướng Chi phí (Pricing Expectation)**
*   *Vấn đề:* Không giống như trang chủ có bảng giá cho phần mềm AI Chat, dịch vụ Character có thể tùy biến sâu. Khách hàng sẽ ngần ngại bấm "Đặt lịch demo" nếu sợ giá quá đắt.
*   *Giải pháp:* Không cần báo giá cụ thể, nhưng nên bổ sung một phần UI nhỏ trước section FAQ để giải thích "Cách chúng tôi tính phí" (Ví dụ: *Chi phí phụ thuộc vào yêu cầu thiết kế 2D/3D, độ phức tạp của luồng hội thoại và số lượng ngôn ngữ*). Việc minh bạch cách tính giá giúp xây dựng niềm tin lớn.

**Tổng kết:**
Giao diện trang Service đã thiết lập sẵn một bộ khung xương (Skeleton) tuyệt vời để scale (nhân bản) ra cho các dịch vụ khác như AR/VR, Digital Twin `[cite: 5]`. Về mặt cấu trúc khối và code, không có gì để chê. Bạn chỉ cần bước vào pha "Visual Polish" (Đổ hình ảnh thực tế, chèn demo nhân vật AI) vào các thẻ lưới đang chứa text hiện tại là trang web sẽ cực kỳ có sức nặng và thuyết phục.

## 5. Casestudy Page

Để trang Case Study thực sự trở thành "cỗ máy bán hàng", bạn cần chú ý các điểm UI sau khi hoàn thiện nội dung (Sprint content):

**1. "Show the Bot" - Cần Visual thực tế**
*   **Vấn đề**: Hiện tại trang vẫn đang "nói" bằng chữ là chính[cite: 6]. 
*   **Giải pháp**: Trong phần Solution, bạn nên chèn các ảnh chụp màn hình (Screenshots) hoặc Video quay màn hình (Screen recording) cảnh nhân vật AI của Yên đang trò chuyện thật với khách. Khách hàng cần thấy "sản phẩm thật, người thật, việc thật".

**2. Tăng trọng số cho "Metrics" (Dữ liệu)**
*   **Vấn đề**: Bạn đang để Metrics ở trạng thái "Limited"[cite: 6]. 
*   **Giải pháp**: Dù không công khai số liệu nhạy cảm (doanh thu), nhưng UI nên có các **"Key Result Cards"** dạng con số ấn tượng nhưng an toàn. Ví dụ: *"Giảm 70% thời gian phản hồi"*, *"Tự động trả lời 85% FAQ"*, hoặc *"Hoạt động 24/7 không nghỉ"*. UI dạng số lớn (Big Numbers) luôn có sức nặng hơn ngàn lời nói.

**3. Hiệu ứng Micro-interaction cho Handoff**
*   **Vấn đề**: Case này nhấn mạnh vào Handoff (chuyển sang người thật)[cite: 6]. 
*   **Giải pháp**: Nên có một sơ đồ UI đơn giản (infographic) mô phỏng luồng: Khách hỏi AI -> AI thấy câu hỏi khó -> Tự động báo Zalo cho chủ quán. Việc trực quan hóa quy trình kỹ thuật này sẽ giúp các chủ SME (vốn không rành công nghệ) cảm thấy dễ hiểu và an tâm hơn.

**4. Đồng nhất CTA**
*   **Vấn đề**: Nút CTA ở Hero là "Đặt lịch demo" và "Xem EZD AI Chat"[cite: 6].
*   **Gợi ý**: Với trang Case Study, nút CTA mạnh nhất nên là: **"Thiết kế AI Assistant tương tự cho tôi"**. Nó tạo ra sự thôi thúc hành động mạnh mẽ hơn là một lời mời demo chung chung.

**Tổng kết**:
Trang Case Study Yên AI Chat là một "mẫu hạm" (Flagship) trong hệ thống UI của bạn[cite: 6]. Nó không chỉ đẹp mà còn rất có "tư duy chiến đấu" thông qua việc minh bạch hóa dữ liệu và cấu trúc theo phễu tâm lý. Chỉ cần bổ sung các hình ảnh thực tế của sản phẩm (Visual Proof) và các con số kết quả (Metrics), đây sẽ là trang có tỷ lệ chuyển đổi lead cao nhất trong toàn bộ website.

**The first principles**: Đối với một trang dịch vụ kỹ thuật cao như **AR/VR/MR**, giao diện không chỉ đóng vai trò truyền tải thông tin mà phải là một "lời hứa" về năng lực công nghệ. Nếu bạn bán "thực tế ảo" mà trang web lại quá "tĩnh", khách hàng sẽ nghi ngờ khả năng thực thi. UI skeleton của bạn đã rất vững về cấu trúc, nhưng cần được "bơm" thêm yếu tố trực quan để thuyết phục các SME vốn thường coi AR/VR là thứ gì đó xa xỉ và khó hiểu[cite: 7].

## 6. Dich Vu page (ar-vr-mr/)

Dù bộ khung (Skeleton) rất chắc chắn, nhưng với đặc thù của dịch vụ AR/VR, trang này cần những điều chỉnh UI đặc thù:

#### A. Khắc phục "Khoảng trống thị giác" (The Visual Vacuum)
*   **Vấn đề**: Giống như trang AI Chat, trang AR/VR hiện tại đang quá nhiều chữ[cite: 7]. Với một dịch vụ bán "trải nghiệm thị giác", việc không có hình ảnh minh họa là một điểm trừ lớn.
*   **Giải pháp**: 
    *   Trong thẻ **AR Activation**, hãy thêm một icon hoặc ảnh minh họa điện thoại đang quét QR và hiện lên mô hình 3D[cite: 7]. 
    *   Trong thẻ **VR Showcase**, hãy chèn hình ảnh người dùng đeo kính VR hoặc một góc nhìn từ bên trong không gian ảo[cite: 7].

#### B. Cân bằng Layout cho Use Cases
*   **Vấn đề**: Hiện tại phần Use Cases chỉ có 2 thẻ (Event và Storytelling) trên lưới 3 cột[cite: 7], tạo ra một khoảng trắng thừa ở bên phải, làm Layout trông như bị lỗi hoặc chưa hoàn thiện.
*   **Giải pháp**: Bổ sung thẻ Use Case thứ 3, ví dụ: **"Virtual Showroom"** (Showroom ảo cho bất động sản hoặc nội thất) để lấp đầy 3 cột, tạo sự cân bằng thị giác hoàn hảo[cite: 7].

#### C. Quản lý kỳ vọng qua FAQ
*   **Điểm sáng**: Câu hỏi "AR/VR có phù hợp với SME không?" và "Có cần app riêng không?"[cite: 7] rất thực tế.
*   **Tối ưu**: UI của FAQ nên có thêm trạng thái đóng/mở (Accordion) thay vì hiện toàn bộ text để trang trông gọn gàng hơn khi bạn bổ sung thêm nhiều câu hỏi sau này.

#### D. Nút CTA linh hoạt
*   **Đề xuất**: Với AR/VR, thay vì chỉ có "Đặt lịch demo", bạn có thể thêm một nút **"Trải nghiệm AR ngay"** dẫn đến một link Web-AR đơn giản (như quét card visit hiện lên logo 3D). Đây là cách "Product-led" mạnh mẽ nhất: cho khách hàng dùng thử công nghệ ngay trên trình duyệt trước khi họ liên hệ tư vấn[cite: 7].

**Tổng kết**: UI skeleton của trang dịch vụ 2 đã hoàn thành tốt nhiệm vụ thiết lập cấu trúc[cite: 7]. Bước tiếp theo bạn chỉ cần tập trung vào việc **"Visual hóa"** các khái niệm trừu tượng (AR/VR) bằng hình ảnh và demo thực tế để biến bộ khung này thành một trang bán hàng có sức thuyết phục cao.