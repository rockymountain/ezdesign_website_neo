# EZDesign Website Neo — SEO QA Checklist

## 1. Global SEO

- [ ] Tất cả pages dùng `BaseLayout`
- [ ] Mỗi page có `<title>` riêng
- [ ] Mỗi page có `<meta name="description">` riêng
- [ ] Mỗi page có canonical URL
- [ ] Mỗi page có robots meta phù hợp
- [ ] Default language là `vi`
- [ ] `<html lang="vi">` tồn tại
- [ ] `<meta charset="UTF-8">` tồn tại
- [ ] `<meta name="viewport">` tồn tại

## 2. Open Graph / Social Preview

- [ ] Có `og:site_name`
- [ ] Có `og:type`
- [ ] Có `og:title`
- [ ] Có `og:description`
- [ ] Có `og:url`
- [ ] Có `og:image`
- [ ] Có `og:locale`
- [ ] Có `twitter:card`
- [ ] Có `twitter:title`
- [ ] Có `twitter:description`
- [ ] Có `twitter:image`

## 3. JSON-LD Structured Data

### Global pages

- [ ] Homepage có `Organization`
- [ ] Homepage có `WebSite`

### Service pages

- [ ] Service pages có `Organization`
- [ ] Service pages có `WebSite`
- [ ] Service pages có `Service`
- [ ] Service pages có `BreadcrumbList`

### Case study pages

- [ ] Case study pages có `Organization`
- [ ] Case study pages có `WebSite`
- [ ] Case study pages có `Article`
- [ ] Case study pages có `BreadcrumbList`

### Insight pages

- [ ] Insight listing page có global schema
- [ ] Insight detail pages có `Article`
- [ ] Draft insight pages có `noindex`
- [ ] Draft insight pages không được đưa vào main navigation

## 4. Sitemap / Robots

- [ ] `astro.config.mjs` có `site: "https://ezdesign.vn"`
- [ ] `astro.config.mjs` có `trailingSlash: "always"`
- [ ] `@astrojs/sitemap` đã được cài
- [ ] `robots.txt` tồn tại
- [ ] `robots.txt` trỏ đúng sitemap
- [ ] `sitemap-index.xml` hoặc `sitemap.xml` được generate sau build
- [ ] Sitemap có homepage
- [ ] Sitemap có `/ezd-ai-chat/`
- [ ] Sitemap có `/about/`
- [ ] Sitemap có `/contact/`
- [ ] Sitemap có service pages
- [ ] Sitemap có case study pages
- [ ] Draft pages được xử lý đúng trước production launch

## 5. Core Routes

Kiểm tra các URL sau:

- [ ] `/`
- [ ] `/ezd-ai-chat/`
- [ ] `/about/`
- [ ] `/contact/`
- [ ] `/services/ai-brand-character/`
- [ ] `/services/ar-vr-mr/`
- [ ] `/services/digital-twin/`
- [ ] `/services/game-activation/`
- [ ] `/services/interactive-website/`
- [ ] `/case-studies/yen-ai-chat/`
- [ ] `/insights/`
- [ ] `/insights/ai-brand-assistant-la-gi/`

## 6. Content Quality

- [ ] H1 chỉ nên có một trên mỗi page
- [ ] H1 phản ánh đúng intent chính của page
- [ ] Section headings dùng H2/H3 hợp lý
- [ ] Không có placeholder quan trọng trên production pages
- [ ] Không có text mojibake/lỗi encoding
- [ ] Không có typo rõ ràng
- [ ] CTA chính rõ ràng
- [ ] Internal links hoạt động
- [ ] Không có link `href="#"` trên production, trừ placeholder đã được tracking rõ

## 7. Images / Assets

- [ ] `og:images` tồn tại trong `public/og/`
- [ ] Favicon tồn tại
- [ ] Logo/favicon không lỗi 404
- [ ] Image paths dùng absolute URL trong OG/JSON-LD
- [ ] Alt text được bổ sung khi có image thật

## 8. Build QA

Chạy:

```bash
npm run check
npm run build
npm run preview