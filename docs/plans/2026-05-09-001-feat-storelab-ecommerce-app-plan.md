---
title: Build StoreLab E-Commerce Application
type: feat
status: completed
date: 2026-05-09
---

# ✨ feat: Build StoreLab E-Commerce Application

## Overview

Build StoreLab — a full-featured e-commerce demo app using Fake Store API as the data source. The app covers the complete shopping flow: product discovery, filtering/search/sort, cart and wishlist management, dummy authentication, and a simulated checkout. Target use: portfolio showcase demonstrating real-world frontend skills with Next.js 16 App Router, TypeScript, Tailwind CSS 4, and Zustand.

Current state: fresh `create-next-app` scaffold — only `app/layout.tsx`, `app/page.tsx`, and `app/globals.css` exist. All features must be built from scratch.

---

## Problem Statement

Portfolio e-commerce projects commonly show only a product list and a simple cart, which reads as a template rather than a demonstration of real problem-solving. StoreLab adds product filtering, sorting, search, wishlist logic, product badge classification, a checkout flow with form validation, and dummy auth to create a full shopping experience that looks and behaves like production software.

---

## Proposed Solution

Implement all 14 MVP features from the PRD across 8 app routes using Next.js App Router, with Server Components fetching API data and Client Components handling interactivity. State (cart, wishlist, auth token) lives in Zustand stores persisted to localStorage. Checkout is simulated with React Hook Form + Zod validation.

---

## Technical Approach

### Architecture

**Server vs Client split:**

| Layer | Type | Reason |
|---|---|---|
| `app/*/page.tsx` (product listing, detail) | Server Component | fetch from Fake Store API on the server, no secrets needed |
| Cart, Wishlist, Auth stores | Client Component | require `localStorage` and React state |
| Filter / Search / Sort controls | Client Component | user interaction, `useState` |
| Product cards with "add to cart" CTA | Client Component | button click handlers |
| Navbar | Server Component shell + Client Component search | mixed |
| Checkout form | Client Component | React Hook Form, browser APIs |

**Data flow pattern:**

```
Server page.tsx
  → await fetch(fakestoreapi)
  → pass data as props
    → Client ProductGrid / ProductDetail component
      → reads/writes Zustand cart/wishlist store
        → persisted to localStorage
```

**Critical Next.js 16 breaking changes (read before coding):**

1. `params` in page components is now a **`Promise`** — always `await params`:
   ```tsx
   // src/app/products/[id]/page.tsx
   export default async function Page({ params }: { params: Promise<{ id: string }> }) {
     const { id } = await params
   }
   ```
2. `fetch` is **not cached by default** — no need to set `cache: 'no-store'`; cached fetches require `'use cache'` directive
3. Tailwind CSS 4 uses `@import 'tailwindcss'` (not `@tailwind base`/`components`/`utilities`)
4. `next build` **no longer runs linter** automatically — run `npm run lint` separately
5. ESLint config must be `eslint.config.mjs` (flat config), not `.eslintrc`
6. Turbopack is the default dev bundler

**Zustand + localStorage persistence pattern:**

```tsx
// src/stores/cart-store.ts
'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({ ... }),
    { name: 'cart-storage' }
  )
)
```

**Tailwind CSS 4 config:**

No `tailwind.config.js` needed for basic usage. In `app/globals.css`:
```css
@import 'tailwindcss';
```

**Folder structure (diverges from default — needs `src/` migration):**

The PRD specifies a `src/` layout but `create-next-app` placed `app/` at the root. Either move the `app/` directory into `src/app/` or keep it at root. Recommended: keep at root to avoid migration overhead since only the scaffold exists.

---

### Implementation Phases

#### Phase 1: Project Foundation & Setup

**Goal:** Install all dependencies, configure folder structure, set up path aliases, add base types.

**Tasks:**

- [x] Install runtime dependencies:
  ```bash
  npm install zustand react-hook-form zod lucide-react sonner
  ```
- [x] Update `tsconfig.json` to add `@/*` path alias pointing to the project root:
  ```json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": { "@/*": ["./*"] }
    }
  }
  ```
- [x] Create folder skeleton at root:
  ```
  app/
  components/layout/  components/product/  components/cart/
  components/wishlist/  components/checkout/  components/ui/
  lib/
  stores/
  types/
  constants/
  ```
- [x] Create `types/index.ts` — Product, CartItem, WishlistItem, AuthState types (from PRD §14)
- [x] Create `constants/index.ts` — API base URL, badge thresholds
- [x] Verify Tailwind 4 setup: `app/globals.css` uses `@import 'tailwindcss'` (already correct from scaffold)
- [x] Confirm `postcss.config.mjs` uses `@tailwindcss/postcss`

**Files:**
- `types/index.ts`
- `constants/index.ts`
- `tsconfig.json` (update paths)
- `package.json` (add deps)

**Success criteria:** `npm run dev` starts without errors; all imports via `@/` resolve.

---

#### Phase 2: API Service Layer

**Goal:** Single source-of-truth for all Fake Store API calls, callable from Server Components.

**Tasks:**

- [x] Create `lib/api.ts` with typed fetch functions:
  - `getProducts(): Promise<Product[]>`
  - `getProduct(id: number): Promise<Product>`
  - `getCategories(): Promise<string[]>`
  - `getProductsByCategory(category: string): Promise<Product[]>`
  - `login(username: string, password: string): Promise<{ token: string }>`
- [x] All functions use the native `fetch` API (no extra HTTP library needed)
- [x] Add error handling: throw typed errors on non-2xx responses

**Files:**
- `lib/api.ts`

---

#### Phase 3: Zustand Stores

**Goal:** Global state for cart, wishlist, and auth — all persisted to localStorage.

**Tasks:**

- [x] Create `stores/cart-store.ts` — implements full CartStore interface from PRD §14.1
  - Actions: `addToCart`, `removeFromCart`, `increaseQuantity`, `decreaseQuantity`, `clearCart`, `getTotalItems`, `getTotalPrice`
  - Persist with `zustand/middleware` `persist`
- [x] Create `stores/wishlist-store.ts` — implements WishlistStore from PRD §14.2
  - Actions: `addToWishlist`, `removeFromWishlist`, `toggleWishlist`, `isInWishlist`
  - Persist with `zustand/middleware` `persist`
- [x] Create `stores/auth-store.ts` — implements AuthStore from PRD §14.3
  - Actions: `login(token)`, `logout()`
  - Persist token to localStorage

**Files:**
- `stores/cart-store.ts`
- `stores/wishlist-store.ts`
- `stores/auth-store.ts`

---

#### Phase 4: UI Primitives & Layout

**Goal:** Reusable UI atoms and the persistent Navbar/Footer shell.

**Tasks:**

**UI components (`components/ui/`):**
- [x] `Button.tsx` — variants: primary, secondary, ghost; sizes: sm, md, lg
- [x] `Input.tsx` — styled text input with label and error message support
- [x] `Badge.tsx` — colored pill for product badges (Best Rated, Popular Choice, etc.)
- [x] `Skeleton.tsx` — animated loading placeholder blocks
- [x] `EmptyState.tsx` — icon + message + optional CTA slot

**Layout components (`components/layout/`):**
- [x] `Navbar.tsx` — Server Component shell; includes:
  - Logo (left)
  - Nav links: Products, Wishlist (center)
  - Cart icon with count badge + Login link (right) — these are Client Components since they read Zustand stores
  - `CartCount.tsx` (Client) — reads `useCartStore().getTotalItems()`
  - `WishlistCount.tsx` (Client) — reads `useWishlistStore()`
- [x] `Footer.tsx` — simple static footer (Server Component)
- [x] `Container.tsx` — max-width wrapper with horizontal padding

**Root layout update:**
- [x] Update `app/layout.tsx` to include `<Navbar>`, `<Container>`, `<Footer>`, and Sonner `<Toaster>`

**Files:**
- `components/ui/Button.tsx`
- `components/ui/Input.tsx`
- `components/ui/Badge.tsx`
- `components/ui/Skeleton.tsx`
- `components/ui/EmptyState.tsx`
- `components/layout/Navbar.tsx`
- `components/layout/CartCount.tsx`
- `components/layout/WishlistCount.tsx`
- `components/layout/Footer.tsx`
- `components/layout/Container.tsx`
- `app/layout.tsx` (update)

---

#### Phase 5: Product Badge Logic

**Goal:** Utility function implementing the badge rules from PRD §10.

**Tasks:**

- [x] Create `lib/badge.ts` with `getProductBadge(product: Product): string`
  - Best Rated: `rating.rate >= 4.5`
  - Popular Choice: `rating.count >= 300`
  - Budget Pick: `price <= 50`
  - Premium Item: `price >= 200`
  - Standard Product: default

**Files:**
- `lib/badge.ts`

---

#### Phase 6: Homepage (`/`)

**Goal:** Landing page with hero, category shortcuts, featured products, and benefits section.

**Tasks:**

- [x] `app/page.tsx` — async Server Component
  - Fetches all products (`getProducts()`) and categories (`getCategories()`)
  - Passes to Client sub-components
- [x] `components/home/HeroSection.tsx` — headline copy + CTA buttons (Shop Now → /products, Explore Products → /products)
- [x] `components/home/CategoryShortcut.tsx` (Client) — category pills linking to `/products?category=X`
- [x] `components/home/FeaturedProducts.tsx` — renders 8 random/first products as `<ProductCard>` components
- [x] `components/home/BenefitSection.tsx` — static section (free shipping, returns, etc.)

**Files:**
- `app/page.tsx`
- `components/home/HeroSection.tsx`
- `components/home/CategoryShortcut.tsx`
- `components/home/FeaturedProducts.tsx`
- `components/home/BenefitSection.tsx`

---

#### Phase 7: Product Listing Page (`/products`)

**Goal:** Full product grid with search, category filter, and sort — all client-side after initial server fetch.

**Architecture note:** Fetch all products on the server; pass to a single `<ProductsClient>` Client Component that manages filter/search/sort state locally. This avoids round-trips for every filter change while keeping the initial page load server-rendered.

**Tasks:**

- [x] `app/products/page.tsx` — async Server Component; fetches products + categories; renders `<ProductsClient>`
- [x] `components/product/ProductsClient.tsx` (Client) — manages search/filter/sort state with `useState`; derives filtered product list; renders controls + grid
- [x] `components/product/ProductSearch.tsx` (Client) — controlled text input; debounced
- [x] `components/product/ProductFilter.tsx` (Client) — category pill buttons; "All" resets to full list
- [x] `components/product/ProductSort.tsx` (Client) — dropdown: Price Low-High, Price High-Low, Rating Highest, Name A-Z, Name Z-A
- [x] `components/product/ProductGrid.tsx` — renders grid of `<ProductCard>` with responsive columns
- [x] `components/product/ProductCard.tsx` (Client) — product image, name, price, category, rating, badge; "Add to Cart" button calls `useCartStore().addToCart()`; links to detail page
- [x] `app/products/loading.tsx` — skeleton grid using `<Skeleton>`

**Files:**
- `app/products/page.tsx`
- `app/products/loading.tsx`
- `components/product/ProductsClient.tsx`
- `components/product/ProductSearch.tsx`
- `components/product/ProductFilter.tsx`
- `components/product/ProductSort.tsx`
- `components/product/ProductGrid.tsx`
- `components/product/ProductCard.tsx`

---

#### Phase 8: Product Detail Page (`/products/[id]`)

**Goal:** Individual product page with full info, badges, add-to-cart, add-to-wishlist.

**Tasks:**

- [x] `app/products/[id]/page.tsx` — async Server Component:
  ```tsx
  export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params  // REQUIRED: params is a Promise in Next.js 16
    const product = await getProduct(Number(id))
    ...
  }
  ```
- [x] `components/product/ProductDetail.tsx` (Client) — renders full product detail; includes Add to Cart and Add to Wishlist buttons wired to stores
- [x] `components/product/ProductBadge.tsx` — renders badge pill from `getProductBadge(product)`
- [x] `components/product/RelatedProducts.tsx` (Client) — shows 4 products from same category (from same server fetch, passed as prop)
- [x] `app/products/[id]/loading.tsx` — skeleton layout

**Files:**
- `app/products/[id]/page.tsx`
- `app/products/[id]/loading.tsx`
- `components/product/ProductDetail.tsx`
- `components/product/ProductBadge.tsx`
- `components/product/RelatedProducts.tsx`

---

#### Phase 9: Cart Page (`/cart`)

**Goal:** Cart management — view items, change quantity, remove, see totals.

**Tasks:**

- [x] `app/cart/page.tsx` — Client Component (reads Zustand cart store; no server data needed)
- [x] `components/cart/CartItem.tsx` — product image, name, price × qty, subtotal; uses `<QuantityControl>` and remove button
- [x] `components/cart/QuantityControl.tsx` — decrement / count / increment buttons; calls `increaseQuantity` / `decreaseQuantity`
- [x] `components/cart/CartSummary.tsx` — subtotal, total, "Proceed to Checkout" button (links to `/checkout`; disabled if cart empty)
- [x] Empty state when cart is empty: `<EmptyState>` with "Continue Shopping" CTA

**Files:**
- `app/cart/page.tsx`
- `components/cart/CartItem.tsx`
- `components/cart/QuantityControl.tsx`
- `components/cart/CartSummary.tsx`

---

#### Phase 10: Wishlist Page (`/wishlist`)

**Goal:** Saved products grid — view, remove, add to cart from wishlist.

**Tasks:**

- [x] `app/wishlist/page.tsx` — Client Component (reads Zustand wishlist store)
- [x] `components/wishlist/WishlistButton.tsx` (Client) — heart icon toggle; calls `toggleWishlist()`; used on product cards and detail pages
- [x] Wishlist page renders `<ProductCard>` variants with "Remove from Wishlist" and "Add to Cart" actions
- [x] Empty state when wishlist is empty

**Files:**
- `app/wishlist/page.tsx`
- `components/wishlist/WishlistButton.tsx`

---

#### Phase 11: Login Page (`/login`)

**Goal:** Dummy auth using Fake Store API `/auth/login` endpoint.

**Tasks:**

- [x] `app/login/page.tsx` — Client Component with React Hook Form
- [x] On submit: POST to `https://fakestoreapi.com/auth/login` with `{ username, password }`
- [x] On success: store token via `useAuthStore().login(token)`; redirect to `/` or `/checkout` (if `?redirect=checkout` param)
- [x] On error: display error message
- [x] Loading state during fetch
- [x] Pre-fill hint: show the demo credentials from PRD §8.9

**Files:**
- `app/login/page.tsx`

---

#### Phase 12: Checkout Page (`/checkout`)

**Goal:** Simulate checkout with form validation and order summary.

**Tasks:**

- [x] `app/checkout/page.tsx` — Client Component; redirects to `/cart` if cart is empty
- [x] `components/checkout/CheckoutForm.tsx` (Client) — React Hook Form + Zod schema for:
  - Full name (required)
  - Email (required, valid email)
  - Phone number (required)
  - Address (required)
  - City (required)
  - Postal code (required, numeric)
- [x] `components/checkout/OrderSummary.tsx` — renders cart items + total from Zustand store
- [x] Dummy payment method selector (static; no real processing)
- [x] On submit: clear cart (`clearCart()`), redirect to `/order-success`

**Zod schema sketch:**
```ts
// components/checkout/checkout-schema.ts
import { z } from 'zod'
export const checkoutSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  address: z.string().min(5),
  city: z.string().min(2),
  postalCode: z.string().regex(/^\d+$/),
})
```

**Files:**
- `app/checkout/page.tsx`
- `components/checkout/CheckoutForm.tsx`
- `components/checkout/checkout-schema.ts`
- `components/checkout/OrderSummary.tsx`

---

#### Phase 13: Order Success Page (`/order-success`)

**Goal:** Confirmation page shown after checkout completes.

**Tasks:**

- [x] `app/order-success/page.tsx` — Client Component (needs to show order details from session/state)
- [x] Display success message, order number (generated client-side), summary
- [x] "Back to Home" button → `/`
- [x] "Continue Shopping" button → `/products`

**Files:**
- `app/order-success/page.tsx`

---

#### Phase 14: Polish & Production Readiness

**Goal:** Error handling, empty states, responsive testing, Vercel deployment.

**Tasks:**

- [x] Add `app/error.tsx` — global error boundary (Client Component, required by Next.js for error.tsx)
- [x] Add `app/not-found.tsx` — 404 page
- [x] Add `app/products/[id]/not-found.tsx` — product not found
- [x] Verify all loading states use `<Skeleton>` components
- [x] Verify all empty states use `<EmptyState>` component
- [x] Responsive testing: 1-col mobile, 2-col tablet, 3–4-col desktop
- [x] Lighthouse audit target: 80+ performance
- [x] `next.config.ts` — add `images.remotePatterns` for `fakestoreapi.com` images:
  ```ts
  // next.config.ts
  const nextConfig = {
    images: {
      remotePatterns: [{ hostname: 'fakestoreapi.com' }],
    },
  }
  ```
- [x] Deploy to Vercel

**Files:**
- `app/error.tsx`
- `app/not-found.tsx`
- `app/products/[id]/not-found.tsx`
- `next.config.ts` (update)

---

## Alternative Approaches Considered

| Approach | Why Rejected |
|---|---|
| Client-side-only fetch (useEffect) for products | Worse SEO, slower initial paint; server fetch is free in App Router |
| React Query for data fetching | Overhead for a portfolio app; native fetch + Server Components suffices |
| Context API instead of Zustand | More boilerplate for cart/wishlist/auth; Zustand persist middleware is better for localStorage |
| SWR for products client | Unnecessary; products are fetched once per page load, not real-time |
| `src/` migration | The scaffold placed `app/` at root; migration has cost with zero benefit for this project |

---

## System-Wide Impact

### Interaction Graph

```
User adds to cart (ProductCard button)
  → useCartStore().addToCart(product)
    → Zustand updates cart state
      → zustand/persist writes to localStorage('cart-storage')
        → CartCount in Navbar re-renders (subscribes to getTotalItems)
          → Sonner toast notification fires
```

```
User submits checkout form
  → CheckoutForm.handleSubmit()
    → Zod validates form data
      → useCartStore().clearCart()
        → localStorage('cart-storage') cleared
          → CartCount badge drops to 0
            → router.push('/order-success')
```

### Error & Failure Propagation

- **Fake Store API down:** `getProducts()` / `getProduct()` throws; Next.js activates `app/error.tsx`; user sees error UI with retry CTA
- **Login fails (401):** `api.login()` throws; caught in login page; error message shown inline; no redirect
- **Cart localStorage unavailable (private browsing):** `zustand/persist` silently degrades to in-memory only; cart works but doesn't survive refresh — acceptable for portfolio
- **Checkout with empty cart:** Page guard redirects to `/cart`; no orphaned order state

### State Lifecycle Risks

| Risk | Mitigation |
|---|---|
| Cart persists stale products (API data changes) | Acceptable: Fake Store API data is static |
| Order success page accessed directly (empty order) | Show generic success; no crash since page is display-only |
| Wishlist item added to cart — duplicates | `addToCart` increments quantity if product already in cart (by id check) |
| Checkout page accessed without login | Allowed — dummy auth is optional per PRD; no route protection needed |

### API Surface Parity

All API calls go through `lib/api.ts`. If the Fake Store API base URL changes, only one file needs updating.

### Integration Test Scenarios

1. **Add → cart count → checkout → clear:** Add 2 products → verify Navbar count = 2 → checkout → verify count = 0 and `/order-success` shown
2. **Filter + search combination:** Select "electronics" category → search "phone" → verify only matching products shown
3. **Wishlist toggle persistence:** Add to wishlist → refresh page → wishlist item still present (localStorage)
4. **Product not found:** Navigate to `/products/9999` → `not-found.tsx` renders, no unhandled error
5. **Login redirect:** Visit `/login?redirect=checkout` → login → lands on `/checkout`

---

## Acceptance Criteria

### Functional Requirements

- [x] All 14 MVP features from PRD §7.1 implemented
- [x] Product data loads from `https://fakestoreapi.com`
- [x] Search filters products by title (case-insensitive) and combines with category filter
- [x] Sort works: Price Low-High, Price High-Low, Rating Highest, Name A-Z, Name Z-A
- [x] Cart: add, remove, increase/decrease quantity, clear; subtotal and total visible
- [x] Wishlist: toggle add/remove; active indicator on already-wishlisted items
- [x] Cart and wishlist persist across browser refresh (localStorage)
- [x] Checkout form validates all fields before submit; clears cart on success
- [x] Login posts to Fake Store API; token stored; error shown on failure
- [x] Product badge logic applied to all products per PRD §10 rules
- [x] `params.id` is awaited properly in `app/products/[id]/page.tsx`

### Non-Functional Requirements

- [x] Responsive: 1-col mobile, 2-col tablet, 3–4-col desktop
- [x] Lighthouse performance score ≥ 80
- [x] All images use `next/image` with `remotePatterns` config for `fakestoreapi.com`
- [x] No TypeScript errors (`tsc --noEmit` passes)
- [x] Loading state on every route that fetches data
- [x] Error state when API call fails
- [x] Empty state when no products match filter/search

### Quality Gates

- [x] `npm run lint` passes
- [x] `npm run build` succeeds without errors
- [x] Deployed and accessible on Vercel

---

## Success Metrics

| Metric | Target |
|---|---|
| Product data loads successfully | 100% of page loads |
| Cart add / remove / quantity | Working |
| Checkout simulation completes | Working |
| Search + filter + sort | Working in combination |
| Mobile usable | Yes (1-col grid, touch-friendly CTAs) |
| Lighthouse performance | ≥ 80 |
| Live deployment | Vercel URL accessible |
| Zero TypeScript errors | Yes |
| Zero runtime console errors | Yes |

---

## Dependencies & Prerequisites

| Dependency | Version | Purpose |
|---|---|---|
| `zustand` | latest | Cart, wishlist, auth state |
| `react-hook-form` | latest | Checkout form management |
| `zod` | latest | Checkout form schema validation |
| `lucide-react` | latest | Icons (cart, heart, search, etc.) |
| `sonner` | latest | Toast notifications |

All from PRD §17 suggested tech stack.

**External dependency:** Fake Store API (`https://fakestoreapi.com`) — no API key required, rate limits unknown, data is static/fake.

---

## Risk Analysis & Mitigation

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Fake Store API downtime | Low | High | Error state + retry CTA on all product pages |
| Next.js 16 breaking changes undetected | Medium | High | Read `node_modules/next/dist/docs/` before each phase; test with `next build` after each phase |
| Tailwind v4 utility class regressions | Medium | Medium | Test UI at each phase; Tailwind v4 utilities are largely backward-compatible |
| Zustand v5 breaking changes | Low | Medium | Check Zustand changelog after `npm install`; `persist` middleware API may have changed |
| Product images slow to load | Medium | Medium | Use `next/image` with lazy loading; add skeleton loaders |
| localStorage unavailable (SSR hydration mismatch) | Medium | Low | Use `zustand/persist`'s `skipHydration` option or check `typeof window !== 'undefined'` |

---

## Resource Requirements

- **Developer:** 1 frontend developer
- **Timeline:** ~4 weeks (per PRD §24 development timeline)
- **Infrastructure:** Vercel free tier (sufficient for portfolio demo)
- **External APIs:** Fake Store API (free, no registration)

---

## Future Considerations (Post-MVP)

From PRD §25:
1. Dark mode (Tailwind `dark:` variants)
2. Recently viewed products (localStorage array)
3. Supabase integration for real persistence
4. Real authentication
5. Order history page
6. Admin dashboard
7. Product comparison feature

---

## Sources & References

### Internal References

- PRD: [PRD.md](../../PRD.md) — full product requirements, user stories, API contracts
- Current app scaffold: [app/layout.tsx](../../app/layout.tsx), [app/page.tsx](../../app/page.tsx)

### Framework Documentation

- Next.js 16 App Router getting started: `node_modules/next/dist/docs/01-app/01-getting-started/`
- Server vs Client Components: `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`
- Data fetching: `node_modules/next/dist/docs/01-app/01-getting-started/06-fetching-data.md`
- Tailwind CSS 4 setup: `node_modules/next/dist/docs/01-app/01-getting-started/11-css.md`
- Next.js params as Promise: `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`

### External References

- Fake Store API: https://fakestoreapi.com/docs
- Zustand docs: https://zustand.docs.pmnd.rs
- React Hook Form + Zod: https://react-hook-form.com/get-started#SchemaValidation
- Sonner toast: https://sonner.emilkowal.ski
