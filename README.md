# JAPAN 2ND LIFE

Website tĩnh giới thiệu cửa hàng hàng Nhật đã qua sử dụng bằng tiếng Lào và tiếng Việt. Dự án dùng Next.js App Router, TypeScript, Tailwind CSS và `next-intl`, cấu hình `output: 'export'` để deploy lên hosting tĩnh.

## Tính năng nổi bật

- Đa ngôn ngữ Lao và Việt
- Route tĩnh cho `/lo` và `/vi`
- Banner, giới thiệu cửa hàng, danh mục, lưới sản phẩm và thông tin liên hệ
- Chỉ hiển thị nội dung; không có menu, nút, form, link gọi điện, tìm kiếm hay bộ lọc
- Hai URL độc lập: `/lo` và `/vi`
- Build static export ra thư mục `out`
- Dữ liệu sản phẩm mẫu nằm trong TypeScript để dễ thay nội dung

## Cấu trúc dữ liệu chính

- `src/config/site.ts`: thương hiệu, slogan, dòng liên hệ và locale mặc định
- `src/data/products.ts`: danh mục và sản phẩm demo
- `messages/lo.json` và `messages/vi.json`: bản dịch giao diện
- `public/images`: ảnh banner, giới thiệu và sản phẩm mẫu

## Chạy local

```bash
npm install
npm run dev
```

Mở tiếng Lào tại http://localhost:3000/lo hoặc tiếng Việt tại http://localhost:3000/vi

## Build static export

```bash
npm run build
npm run lint
npx tsc --noEmit
```

Sau khi build, thư mục `out` sẽ được tạo. Bạn có thể đưa toàn bộ nội dung trong `out` lên hosting tĩnh như Netlify, GitHub Pages, S3, Nginx, Apache, v.v.

## Cập nhật nội dung

- Dòng liên hệ `SĐT: xxx`: `src/config/site.ts`
- Slogan, tên thương hiệu, website metadata: `src/config/site.ts`
- Sản phẩm: `src/data/products.ts`
- Bản dịch: `messages/lo.json` và `messages/vi.json`
- Ảnh banner, showroom, danh mục, sản phẩm: `public/images/`

> Nội dung, giá và hình ảnh sản phẩm hiện là dữ liệu mẫu; hãy thay bằng thông tin thực tế trước khi xuất bản.
