# PRD.md — StoreLab: Modern E-Commerce App with Fake Store API

## 1. Document Information

| Item | Description |
|---|---|
| Product Name | StoreLab |
| Document Type | Product Requirement Document |
| Version | v1.0 |
| Status | Draft |
| Owner | Alif Rizqullah |
| Tech Stack | Next.js, TypeScript, Tailwind CSS, Zustand, Fake Store API |
| API Source | https://fakestoreapi.com |
| Target Platform | Web App |
| Deployment Target | Vercel |

---

## 2. Background

StoreLab adalah aplikasi e-commerce modern berbasis web yang menggunakan Fake Store API sebagai sumber data produk, kategori, cart, user, dan autentikasi dummy.

Project ini dibuat sebagai portfolio frontend/full-stack simulation untuk menunjukkan kemampuan dalam membangun aplikasi e-commerce yang memiliki flow belanja lengkap, mulai dari melihat produk, mencari produk, melihat detail produk, menambahkan ke keranjang, login dummy, hingga checkout simulasi.

Aplikasi ini tidak hanya menampilkan daftar produk, tetapi juga menambahkan beberapa logic tambahan seperti product filtering, sorting, cart state management, wishlist, dan smart product badge agar aplikasi terlihat lebih realistis dan tidak seperti template biasa.

---

## 3. Objective

Tujuan utama dari project ini adalah membangun aplikasi e-commerce modern yang:

1. Mengambil data produk dari Fake Store API.
2. Menampilkan produk dalam UI yang bersih, responsive, dan mudah digunakan.
3. Memiliki flow belanja dari product discovery sampai checkout.
4. Mengelola cart dan wishlist menggunakan local state.
5. Menyediakan login dummy menggunakan endpoint Fake Store API.
6. Menjadi project portfolio yang layak ditampilkan untuk freelance, internship, atau job application.

---

## 4. Product Vision

StoreLab bertujuan menjadi contoh aplikasi e-commerce modern yang sederhana namun memiliki alur belanja lengkap dan UX yang baik.

Visi produk:

> Membuat aplikasi e-commerce demo yang clean, responsive, dan memiliki flow belanja nyata menggunakan Fake Store API.

---

## 5. Target User

### 5.1 Primary User

#### General Online Shopper

User yang ingin melihat, mencari, dan membeli produk secara online.

Karakteristik:

- Terbiasa menggunakan marketplace atau toko online.
- Ingin mencari produk dengan cepat.
- Membutuhkan informasi produk yang jelas.
- Ingin menambahkan produk ke cart sebelum checkout.

Kebutuhan:

- Bisa melihat produk.
- Bisa mencari produk.
- Bisa filter berdasarkan kategori.
- Bisa melihat detail produk.
- Bisa menambahkan produk ke cart.
- Bisa checkout dengan mudah.

---

### 5.2 Secondary User

#### Recruiter / Client / Reviewer

Orang yang melihat project ini sebagai portfolio teknis.

Karakteristik:

- Ingin menilai kualitas UI, struktur kode, dan logic aplikasi.
- Ingin melihat kemampuan developer dalam consuming API.
- Ingin melihat pemahaman state management dan routing.

Kebutuhan:

- UI terlihat profesional.
- Flow aplikasi jelas.
- Codebase rapi.
- Fitur e-commerce berjalan dengan baik.
- Project bisa diakses secara live melalui deployment.

---

## 6. Problem Statement

Banyak project e-commerce portfolio hanya menampilkan daftar produk dan cart sederhana tanpa alur yang jelas. Hal ini membuat project terlihat seperti template biasa dan kurang menunjukkan kemampuan problem solving developer.

StoreLab dibuat untuk menyelesaikan masalah tersebut dengan membangun aplikasi e-commerce yang memiliki:

- Product discovery.
- Search dan filtering.
- Dynamic product detail.
- Cart management.
- Wishlist.
- Dummy authentication.
- Checkout simulation.
- Product insight/badge logic.

---

## 7. Scope

### 7.1 In Scope

Fitur yang masuk dalam versi MVP:

1. Homepage.
2. Product listing.
3. Product detail page.
4. Category filtering.
5. Search product.
6. Sort product.
7. Cart.
8. Wishlist.
9. Checkout dummy.
10. Login dummy.
11. Order success page.
12. Responsive layout.
13. Product badge logic.
14. Error, loading, dan empty state.

---

### 7.2 Out of Scope

Fitur yang tidak masuk dalam versi MVP:

1. Payment gateway asli.
2. Database production.
3. Real user registration.
4. Real order processing.
5. Admin panel production.
6. Inventory management.
7. Email notification.
8. Real shipping integration.
9. Review submission dari user.
10. Multi-vendor marketplace.

---

## 8. User Stories

### 8.1 Homepage

#### User Story

Sebagai user, saya ingin melihat halaman utama yang menampilkan produk pilihan dan kategori agar saya bisa mulai menjelajahi toko dengan cepat.

#### Acceptance Criteria

- User dapat melihat hero section.
- User dapat melihat beberapa featured products.
- User dapat melihat shortcut kategori.
- User dapat menekan tombol menuju halaman products.
- Tampilan responsive di desktop dan mobile.

---

### 8.2 Product Listing

#### User Story

Sebagai user, saya ingin melihat semua produk dalam bentuk grid agar saya bisa memilih produk yang menarik.

#### Acceptance Criteria

- Sistem mengambil data dari endpoint `/products`.
- Produk ditampilkan dalam card.
- Setiap card menampilkan:
  - Gambar produk.
  - Nama produk.
  - Harga produk.
  - Kategori.
  - Rating.
  - Tombol detail.
  - Tombol add to cart.
- Jika data sedang dimuat, tampilkan loading state.
- Jika data gagal dimuat, tampilkan error state.

---

### 8.3 Product Detail

#### User Story

Sebagai user, saya ingin melihat detail produk agar saya bisa memahami informasi produk sebelum membeli.

#### Acceptance Criteria

- Sistem mengambil data dari endpoint `/products/:id`.
- Halaman detail menampilkan:
  - Gambar produk.
  - Title.
  - Description.
  - Category.
  - Price.
  - Rating rate.
  - Rating count.
  - Product badge.
  - Tombol add to cart.
  - Tombol add to wishlist.
- Jika produk tidak ditemukan, tampilkan not found state.

---

### 8.4 Category Filter

#### User Story

Sebagai user, saya ingin memfilter produk berdasarkan kategori agar saya bisa menemukan produk yang sesuai kebutuhan.

#### Acceptance Criteria

- Sistem mengambil kategori dari endpoint `/products/categories`.
- User dapat memilih kategori.
- Produk berubah sesuai kategori yang dipilih.
- User dapat kembali melihat semua produk.
- Kategori aktif diberi style berbeda.

---

### 8.5 Search Product

#### User Story

Sebagai user, saya ingin mencari produk berdasarkan nama agar saya bisa menemukan produk dengan lebih cepat.

#### Acceptance Criteria

- User dapat mengetik keyword pada search input.
- Produk difilter berdasarkan title.
- Search bersifat case-insensitive.
- Jika tidak ada hasil, tampilkan empty state.
- Search dapat dikombinasikan dengan filter kategori.

---

### 8.6 Sort Product

#### User Story

Sebagai user, saya ingin mengurutkan produk berdasarkan harga, rating, atau nama agar saya bisa membandingkan produk dengan lebih mudah.

#### Acceptance Criteria

User dapat melakukan sorting berdasarkan:

- Price: Low to High.
- Price: High to Low.
- Rating: Highest.
- Name: A-Z.
- Name: Z-A.

---

### 8.7 Cart

#### User Story

Sebagai user, saya ingin menambahkan produk ke cart agar saya bisa membeli beberapa produk sekaligus.

#### Acceptance Criteria

- User dapat menambahkan produk ke cart.
- Jika produk sudah ada di cart, quantity bertambah.
- User dapat mengurangi quantity.
- User dapat menghapus produk dari cart.
- User dapat melihat subtotal per item.
- User dapat melihat total harga semua produk.
- Data cart tersimpan di localStorage.
- Jika cart kosong, tampilkan empty cart state.

---

### 8.8 Wishlist

#### User Story

Sebagai user, saya ingin menyimpan produk favorit agar saya bisa melihatnya kembali nanti.

#### Acceptance Criteria

- User dapat menambahkan produk ke wishlist.
- User dapat menghapus produk dari wishlist.
- Wishlist tersimpan di localStorage.
- Produk yang sudah ada di wishlist diberi indikator aktif.
- Jika wishlist kosong, tampilkan empty state.

---

### 8.9 Login Dummy

#### User Story

Sebagai user, saya ingin login agar aplikasi terasa seperti e-commerce nyata.

#### Acceptance Criteria

- User dapat membuka halaman login.
- User dapat mengisi username dan password.
- Sistem mengirim request ke endpoint `/auth/login`.
- Jika login berhasil, token disimpan.
- Jika login gagal, tampilkan pesan error.
- Setelah login berhasil, user diarahkan ke homepage atau checkout.

Contoh credential dari Fake Store API:

```txt
username: mor_2314
password: 83r5^_
```

---

### 8.10 Checkout Dummy

#### User Story

Sebagai user, saya ingin melakukan checkout agar saya bisa menyelesaikan proses pembelian secara simulasi.

#### Acceptance Criteria

- User dapat membuka halaman checkout jika cart tidak kosong.
- User mengisi form checkout:
  - Full name.
  - Email.
  - Phone number.
  - Address.
  - City.
  - Postal code.
- Form memiliki validasi.
- User dapat melihat order summary.
- Setelah submit, user diarahkan ke order success page.
- Cart dikosongkan setelah checkout berhasil.

---

### 8.11 Order Success

#### User Story

Sebagai user, saya ingin melihat halaman konfirmasi setelah checkout agar saya tahu pesanan berhasil dibuat.

#### Acceptance Criteria

- Halaman menampilkan pesan order success.
- Halaman menampilkan ringkasan order.
- Ada tombol kembali ke homepage.
- Ada tombol lanjut belanja.

---

## 9. API Requirements

Base URL:

```txt
https://fakestoreapi.com
```

### 9.1 Products

```http
GET /products
```

Digunakan untuk mengambil semua produk.

Expected data:

```json
{
  "id": 1,
  "title": "Product title",
  "price": 109.95,
  "description": "Product description",
  "category": "men's clothing",
  "image": "https://...",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

---

### 9.2 Product Detail

```http
GET /products/:id
```

Digunakan untuk mengambil detail produk berdasarkan ID.

---

### 9.3 Categories

```http
GET /products/categories
```

Digunakan untuk mengambil semua kategori produk.

---

### 9.4 Products by Category

```http
GET /products/category/:category
```

Digunakan untuk mengambil produk berdasarkan kategori.

---

### 9.5 Login

```http
POST /auth/login
```

Request body:

```json
{
  "username": "mor_2314",
  "password": "83r5^_"
}
```

Response:

```json
{
  "token": "jwt-token"
}
```

---

## 10. Product Badge Logic

Agar aplikasi tidak terlihat terlalu sederhana, setiap produk dapat memiliki badge berdasarkan logic tertentu.

### Badge Rules

| Badge | Condition |
|---|---|
| Best Rated | rating.rate >= 4.5 |
| Popular Choice | rating.count >= 300 |
| Budget Pick | price <= 50 |
| Premium Item | price >= 200 |
| Standard Product | default condition |

Contoh logic:

```ts
function getProductBadge(product) {
  if (product.rating.rate >= 4.5) return "Best Rated";
  if (product.rating.count >= 300) return "Popular Choice";
  if (product.price <= 50) return "Budget Pick";
  if (product.price >= 200) return "Premium Item";

  return "Standard Product";
}
```

---

## 11. User Flow

### 11.1 General Shopping Flow

```txt
User membuka homepage
↓
User melihat featured products dan kategori
↓
User masuk ke halaman products
↓
User mencari / filter / sort produk
↓
User membuka product detail
↓
User menambahkan produk ke cart
↓
User membuka cart
↓
User mengatur quantity produk
↓
User lanjut ke checkout
↓
User mengisi data checkout
↓
User submit order
↓
User masuk ke halaman order success
```

---

### 11.2 Login Flow

```txt
User membuka halaman login
↓
User mengisi username dan password
↓
Sistem mengirim request ke Fake Store API
↓
Jika berhasil, token disimpan
↓
User diarahkan ke homepage atau checkout
↓
Jika gagal, pesan error ditampilkan
```

---

### 11.3 Wishlist Flow

```txt
User melihat produk
↓
User klik icon wishlist
↓
Produk disimpan ke wishlist
↓
User membuka halaman wishlist
↓
User dapat melihat produk favorit
↓
User dapat menghapus produk dari wishlist
```

---

## 12. Page Requirements

## 12.1 Homepage `/`

### Components

- Navbar.
- Hero Section.
- Category Shortcut.
- Featured Products.
- Product Benefit Section.
- Footer.

### Content

Hero copy:

```txt
Discover quality products with a simple and modern shopping experience.
```

CTA:

```txt
Shop Now
Explore Products
```

---

## 12.2 Products Page `/products`

### Components

- Product grid.
- Search input.
- Category filter.
- Sort dropdown.
- Product card.
- Loading skeleton.
- Empty state.

---

## 12.3 Product Detail Page `/products/[id]`

### Components

- Product image.
- Product information.
- Product price.
- Rating.
- Product badge.
- Add to cart button.
- Add to wishlist button.
- Related products.

---

## 12.4 Cart Page `/cart`

### Components

- Cart item list.
- Quantity control.
- Remove button.
- Order summary.
- Checkout button.
- Empty cart state.

---

## 12.5 Wishlist Page `/wishlist`

### Components

- Wishlist item grid.
- Remove from wishlist.
- Add to cart.
- Empty wishlist state.

---

## 12.6 Login Page `/login`

### Components

- Login form.
- Username input.
- Password input.
- Submit button.
- Error message.
- Loading state.

---

## 12.7 Checkout Page `/checkout`

### Components

- Checkout form.
- Order summary.
- Payment method dummy.
- Submit order button.
- Validation message.

---

## 12.8 Order Success Page `/order-success`

### Components

- Success message.
- Order summary.
- Back to home button.
- Continue shopping button.

---

## 13. Component Structure

```txt
components/
├── layout/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── Container.tsx
│
├── product/
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── ProductBadge.tsx
│   ├── ProductFilter.tsx
│   ├── ProductSort.tsx
│   └── ProductSearch.tsx
│
├── cart/
│   ├── CartItem.tsx
│   ├── CartSummary.tsx
│   └── QuantityControl.tsx
│
├── wishlist/
│   └── WishlistButton.tsx
│
├── checkout/
│   ├── CheckoutForm.tsx
│   └── OrderSummary.tsx
│
└── ui/
    ├── Button.tsx
    ├── Input.tsx
    ├── Card.tsx
    ├── Badge.tsx
    ├── Skeleton.tsx
    └── EmptyState.tsx
```

---

## 14. State Management

Gunakan Zustand untuk mengelola state global.

### 14.1 Cart Store

Data yang disimpan:

```ts
type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};
```

Actions:

```ts
addToCart(product)
removeFromCart(productId)
increaseQuantity(productId)
decreaseQuantity(productId)
clearCart()
getTotalItems()
getTotalPrice()
```

---

### 14.2 Wishlist Store

Data yang disimpan:

```ts
type WishlistItem = {
  id: number;
  title: string;
  price: number;
  image: string;
};
```

Actions:

```ts
addToWishlist(product)
removeFromWishlist(productId)
toggleWishlist(product)
isInWishlist(productId)
```

---

### 14.3 Auth Store

Data yang disimpan:

```ts
type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
};
```

Actions:

```ts
login(token)
logout()
```

---

## 15. Data Handling

### Loading State

Setiap halaman yang mengambil data dari API harus memiliki loading state.

Contoh:

```txt
Loading products...
```

Atau menggunakan skeleton card.

---

### Error State

Jika API gagal dipanggil:

```txt
Failed to load products. Please try again later.
```

---

### Empty State

Jika tidak ada data hasil search/filter:

```txt
No products found.
Try changing your search keyword or filter.
```

---

## 16. UI/UX Requirements

### General Style

- Clean.
- Modern.
- Minimal.
- Responsive.
- Consistent spacing.
- Product-focused layout.

### Suggested Design Direction

```txt
Style: Modern marketplace
Layout: Card-based grid
Border radius: 12px - 16px
Spacing: 16px - 32px
Typography: clean sans-serif
Color: neutral background with strong CTA button
```

### Responsive Breakpoints

| Device | Layout |
|---|---|
| Mobile | 1 column product grid |
| Tablet | 2 columns product grid |
| Desktop | 3-4 columns product grid |

---

## 17. Suggested Tech Stack

| Area | Tool |
|---|---|
| Framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| State Management | Zustand |
| Form | React Hook Form |
| Validation | Zod |
| API | Fake Store API |
| Deployment | Vercel |
| Icon | Lucide React |
| Notification | Sonner / React Hot Toast |

---

## 18. Folder Structure

```txt
src/
├── app/
│   ├── page.tsx
│   ├── products/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   ├── cart/
│   │   └── page.tsx
│   ├── wishlist/
│   │   └── page.tsx
│   ├── checkout/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   └── order-success/
│       └── page.tsx
│
├── components/
├── features/
├── lib/
├── stores/
├── types/
└── constants/
```

---

## 19. Success Metrics

Karena ini adalah project portfolio, metrik keberhasilannya bukan revenue asli, tetapi kualitas aplikasi dan kelengkapan fitur.

| Metric | Target |
|---|---|
| Product data loaded successfully | 100% |
| User can add product to cart | Yes |
| User can checkout dummy order | Yes |
| User can search product | Yes |
| User can filter by category | Yes |
| User can use app on mobile | Yes |
| Lighthouse performance | 80+ |
| UI consistency | Good |
| Deployment success | Live on Vercel |
| Portfolio readiness | Ready to showcase |

---

## 20. Acceptance Criteria Summary

Project dianggap selesai jika:

1. User dapat melihat daftar produk dari Fake Store API.
2. User dapat membuka halaman detail produk.
3. User dapat mencari produk.
4. User dapat filter produk berdasarkan kategori.
5. User dapat sorting produk.
6. User dapat menambahkan produk ke cart.
7. User dapat mengubah quantity cart.
8. User dapat menghapus produk dari cart.
9. User dapat menyimpan produk ke wishlist.
10. User dapat login dummy.
11. User dapat checkout dummy.
12. User dapat melihat order success page.
13. Aplikasi responsive di mobile dan desktop.
14. Loading, error, dan empty state tersedia.
15. Project berhasil dideploy ke Vercel.

---

## 21. Constraints

### Technical Constraints

- Data berasal dari Fake Store API.
- Data tidak benar-benar tersimpan di server.
- Cart dan wishlist disimpan di localStorage.
- Checkout hanya simulasi.
- Payment tidak menggunakan payment gateway asli.
- Login hanya dummy token dari API.

### Product Constraints

- Tidak ada real transaction.
- Tidak ada real inventory.
- Tidak ada real shipping.
- Tidak ada admin CMS.
- Tidak ada database production.

---

## 22. Assumptions

Beberapa asumsi dalam project ini:

1. User memiliki koneksi internet untuk mengambil data dari API.
2. Fake Store API tersedia dan dapat diakses.
3. User memahami bahwa checkout adalah simulasi.
4. Cart dan wishlist cukup disimpan secara lokal.
5. Project ini dibuat untuk portfolio, bukan production commerce.

---

## 23. Risk & Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| Fake Store API down | Produk tidak muncul | Tambahkan error state dan fallback UI |
| Image produk lambat dimuat | UX buruk | Gunakan image optimization dan skeleton |
| Cart hilang setelah refresh | User experience buruk | Simpan cart di localStorage |
| UI terlihat terlalu biasa | Portfolio kurang menarik | Tambahkan smart badge, wishlist, dan checkout flow |
| API data terbatas | Variasi produk sedikit | Tambahkan sorting, filtering, dan rekomendasi sederhana |

---

## 24. Development Timeline

### Week 1 — Foundation

- Setup Next.js project.
- Setup Tailwind CSS.
- Setup folder structure.
- Setup API service.
- Setup layout, navbar, footer.

### Week 2 — Product Features

- Build homepage.
- Build product listing.
- Build product detail.
- Build category filter.
- Build search and sorting.

### Week 3 — Cart & Wishlist

- Setup Zustand.
- Build cart store.
- Build cart page.
- Build wishlist store.
- Build wishlist page.
- Add localStorage persistence.

### Week 4 — Checkout & Polish

- Build checkout page.
- Add form validation.
- Build order success page.
- Add loading/error/empty states.
- Responsive testing.
- Deploy to Vercel.

---

## 25. Future Improvements

Fitur yang bisa ditambahkan setelah MVP:

1. Admin dashboard.
2. Product analytics.
3. Dark mode.
4. Product comparison.
5. Recently viewed products.
6. Recommendation system.
7. Supabase integration.
8. Real authentication.
9. Real database.
10. Payment gateway simulation.
11. Order history.
12. User profile page.

---

## 26. Final Notes

StoreLab adalah project e-commerce yang cocok digunakan sebagai portfolio karena mencakup banyak aspek penting dalam frontend development:

- API integration.
- Dynamic routing.
- State management.
- Cart logic.
- Wishlist logic.
- Authentication flow.
- Form validation.
- Responsive design.
- UI/UX states.
- Deployment.

Project ini harus dibuat dengan kualitas UI yang baik dan struktur kode yang rapi agar bisa digunakan sebagai showcase untuk freelance, internship, maupun job application.
