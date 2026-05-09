<div align="center">

# 🛍️ StoreLab

**A modern, full-featured e-commerce web application built for portfolio showcase.**

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Zustand](https://img.shields.io/badge/Zustand-State_Management-orange?style=flat-square)](https://zustand-demo.pmnd.rs)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

[Live Demo](#) · [Report Bug](https://github.com/yourusername/shop-wise/issues) · [Request Feature](https://github.com/yourusername/shop-wise/issues)

</div>

---

## 📖 About

StoreLab is a production-grade e-commerce demo application that simulates a complete online shopping experience — from product discovery to checkout. Built as a portfolio project to demonstrate real-world frontend development skills using modern technologies.

> Data is sourced from the public [Fake Store API](https://fakestoreapi.com). No real transactions occur.

---

## ✨ Features

### 🛒 Shopping Experience
- **Product Listing** — browse all products in a responsive grid
- **Search** — real-time filtering by product name (case-insensitive)
- **Category Filter** — filter products by electronics, jewelry, and clothing
- **Sort** — sort by price (low/high), rating, or name (A-Z / Z-A)
- **Product Detail** — full product page with description, rating, and related products

### 🧠 Smart Product Badges
Products are automatically classified using rating and price logic:

| Badge | Condition |
|-------|-----------|
| ⭐ Best Rated | `rating.rate >= 4.5` |
| 🔥 Popular Choice | `rating.count >= 300` |
| 💰 Budget Pick | `price <= $50` |
| 👑 Premium Item | `price >= $200` |

### 🛍️ Cart & Wishlist
- Add, remove, and adjust product quantities
- Subtotal per item + total price calculation
- Wishlist toggle with heart icon indicator
- **Persisted to `localStorage`** — survives browser refresh

### 🔐 Authentication
- Dummy login flow via Fake Store API (`/auth/login`)
- JWT token stored in global Zustand state + localStorage
- Redirect support after login (`?redirect=checkout`)

### 💳 Checkout
- Multi-field form with **React Hook Form** + **Zod** validation
- Order summary with cart items
- Simulated order submission → Order Success page

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | [TypeScript 5](https://typescriptlang.org) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| State Management | [Zustand](https://zustand-demo.pmnd.rs) + `persist` middleware |
| Form Handling | [React Hook Form](https://react-hook-form.com) |
| Validation | [Zod](https://zod.dev) |
| Icons | [Lucide React](https://lucide.dev) |
| Notifications | [Sonner](https://sonner.emilkowal.ski) |
| Font | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) + [Geist](https://vercel.com/font) |
| Deployment | [Vercel](https://vercel.com) |

---

## 📂 Project Structure

```
shop-wise/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Homepage
│   ├── products/
│   │   ├── page.tsx            # Product listing
│   │   └── [id]/page.tsx       # Product detail
│   ├── cart/page.tsx
│   ├── wishlist/page.tsx
│   ├── login/page.tsx
│   ├── checkout/page.tsx
│   └── order-success/page.tsx
│
├── components/
│   ├── layout/                 # Navbar, Footer, Container
│   ├── product/                # ProductCard, ProductDetail, etc.
│   ├── cart/                   # CartItem, CartSummary, QuantityControl
│   ├── checkout/               # CheckoutForm, OrderSummary
│   ├── home/                   # HeroSection, CategoryShortcut, etc.
│   ├── ui/                     # Button, Input, Badge, Skeleton, EmptyState
│   └── wishlist/               # WishlistButton
│
├── stores/                     # Zustand stores (cart, wishlist, auth)
├── lib/                        # API service (api.ts), badge logic (badge.ts)
├── types/                      # TypeScript type definitions
└── constants/                  # API base URL, badge thresholds, sort options
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 20.x`
- npm / yarn / pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/shop-wise.git
cd shop-wise

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🌐 API Reference

All data is fetched from [Fake Store API](https://fakestoreapi.com):

| Endpoint | Usage |
|----------|-------|
| `GET /products` | Fetch all products |
| `GET /products/:id` | Fetch single product |
| `GET /products/categories` | Fetch all categories |
| `GET /products/category/:name` | Fetch by category |
| `POST /auth/login` | Dummy authentication |

**Demo credentials:**
```
username: mor_2314
password: 83r5^_
```

---

## 📦 Deployment

This project is optimized for deployment on **Vercel**:

```bash
# Push to GitHub, then import at vercel.com/new
# No environment variables required
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/shop-wise)

---

## 🗺️ Pages Overview

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, categories, and featured products |
| `/products` | Full product listing with search, filter, and sort |
| `/products/[id]` | Product detail with related products |
| `/cart` | Shopping cart with quantity controls |
| `/wishlist` | Saved products |
| `/login` | Dummy authentication |
| `/checkout` | Order form with validation |
| `/order-success` | Order confirmation |

---

## 👨‍💻 Author

**Alif Rizqullah M**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- Portfolio: [yourwebsite.com](https://yourwebsite.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Built with ❤️ using **Next.js** · **TypeScript** · **Tailwind CSS**

</div>
