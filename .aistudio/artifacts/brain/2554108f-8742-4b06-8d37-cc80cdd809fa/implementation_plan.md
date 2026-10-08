# Q'mem Baltna (ቅመም ባልትና) — Authentic Habesha Export Spices Storefront

An export-grade Ethiopian & Eritrean spice storefront and brand experience connecting diaspora communities and international food lovers to the warmth of authentic Habesha cooking.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following architectural decisions were confirmed during initial consultation and will guide the implementation:

- **Confirmed Decision 1 (Dual Currency)**: Enabled seamless ETB (Ethiopian Birr) and USD ($) currency switcher with real-time conversion for diaspora and international customers.
- **Confirmed Decision 2 (Berbere Pricing)**: 500g is set at 2,000 ETB / $16 USD; 1kg is set at 3,800 ETB / $30 USD (volume discount rate). Other products: Shiro (500 ETB / 1,000 ETB), Mitmita (1,800 ETB / 3,600 ETB), Genfo/Atmit (600 ETB / 1,200 ETB).
- **Confirmed Decision 3 (Visual Identity)**: Warm heritage luxury aesthetic blending deep terracotta (#942F12, #C84B20), roasted saffron amber (#E78200), dark cardamom espresso (#30120B), and warm parchment (#FDFBF7), honoring the authentic mortar-and-pestle brandmark.
- **Language Switcher**: Native English (EN) and Amharic (አማርኛ) dual-language toggle covering all UI text, product descriptions, cultural notes, and checkout steps.

---

## 1. Overview & Core Concept

- **What It Does**: Q'mem Baltna is a full-featured, export-ready Habesha spice web storefront and heritage showcase. Customers can explore 4 core artisanal spice blends (Berbere, Shiro, Mitmita, Genfo/Atmit), select packaging sizes (500g and 1kg), manage items in an interactive slide-over cart, proceed through a multi-step checkout (Telebirr, Chapa/International Cards, Bank Transfer, Cash on Delivery, and Direct Contact), and receive an instant export order voucher with Order ID.
- **Target Audience / Persona**:
  1. *Ethiopian & Eritrean Diaspora*: Families and individuals living abroad craving authentic, mother's-recipe taste prepared to sanitary export standards.
  2. *Commercial Kitchens & Caterers*: Restaurants needing consistent, high-volume, export-grade bulk blends.
  3. *Global Food Enthusiasts*: Gourmets exploring authentic East African culinary traditions.
- **Key Value**: Bridges nostalgia and international export reliability — *"When you taste Q'mem Baltna, you don't just taste a spice — you taste a memory."*

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Landing & Luxury Hero Reveal**:
   - The user lands on a warm, elegant stage featuring the high-contrast Q'mem Baltna brandmark.
   - A floating showcase animation presents the four hero export blends (Berbere, Shiro, Mitmita, Genfo) with a delicate shine reveal.
   - Quick access to Currency (ETB / USD) and Language (EN / አማርኛ) toggles directly in the Top Bar.
2. **Catalog & Weight Customization**:
   - Interactive 4-product showcase with crisp product photography, flavor profile badges (e.g., *Smoky Sun-Dried Chilies & Fenugreek*, *Slow-Roasted Chickpeas & Herbs*), and weight toggle (`500g` vs `1kg`).
   - Dynamic price calculation and instantaneous feedback when clicking "Add to Bag".
3. **Heritage Story, Product Deep-Dive & Social Proof**:
   - "Our Story": The mother's kitchen origin, mission, and vision.
   - "About Our Products — Four Spices, One Heritage": In-depth culinary usage (Doro Wat, Tibs, Kitfo, traditional Genfo breakfast).
   - "What Makes Us Different": 5 core pillars (Authenticity, Export Standard, Customer Connection, Cultural Pride, Innovation & Trust).
   - "Who We Serve": 3 distinct audience pillars (Catering & Restaurants, Retail & Supermarkets, Individual Diaspora Customers).
   - "Customer Feedback & Gallery": Testimonials from diaspora chefs and families, plus packaging gallery.
4. **Interactive Cart Drawer**:
   - Slides smoothly from the right edge with quantity increment/decrement, live totals, delivery notice, and checkout launch.
5. **Multi-Payment Checkout Modal**:
   - Step 1: Customer details & delivery address (Local Addis Ababa or International Diaspora express air shipping).
   - Step 2: Payment method selection with explicit instructions:
     - **Telebirr** (with merchant QR & payment steps)
     - **Chapa / International Card & Stripe** (simulated secure gateway with card validation)
     - **Bank Transfer** (CBE, Awash, BOA details)
     - **Cash on Delivery (COD)** (Addis Ababa delivery)
     - **Contact for Payment** (Direct WhatsApp / phone order line)
   - Step 3: Order confirmation voucher with unique Order ID (e.g., `QB-2026-8491`), print/copy receipt action, and WhatsApp confirmation link.
6. **Inquiry & Contact Hub**:
   - Bole Wollo Sefer Garad Building contact details, phone click-to-call (`+251 903 19 54 54`), email, inquiry form, and Nobe Business Holdings attribution.

### Visual Identity & Theme
- **Color Palette**:
  - Neutral Canvas: `#FDFBF7` (warm ivory parchment) & `#1A0F0B` (rich Ethiopian roasted coffee dark mode / accents).
  - Primary Brand Tones: Terracotta Clay `#C84B20`, Burnt Ochre `#942F12`, and Roasted Saffron `#E78200`.
  - Secondary Accents: Warm Gold `#D4AF37` and Cardamom Leaf `#3D5A40`.
- **Typography**:
  - Display / Headings: High-character Serif (`Cormorant Garamond` / `Playfair Display`) paired with clean Amharic typography (`Nyala` / `Noto Sans Ethiopic`).
  - Body Prose: Clean, refined sans (`Plus Jakarta Sans`) with optical balance.
  - Numbers: Tabular figures (`tabular-nums font-mono`) for pricing and order totals.
- **Top Bar Contract**:
  - Zone 1: Authentic Q'mem Baltna wordmark and mortar-and-pestle insignia.
  - Zone 2: Navigation anchors (`Home`, `About`, `Products`, `Heritage`, `Reviews`, `Contact`).
  - Zone 3: Currency Switcher (ETB/USD), Language Toggle (EN/AM), and Cart trigger with live item count pill.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Client-Side Reactive State with LocalStorage Persistence**
  - *Chosen Approach*: Persist cart items, language preference, and currency settings in `localStorage` with reactive React state.
  - *Why*: Instantaneous sub-100ms feedback, no latency or sign-in walls, preserves cart on refresh.
- **Decision 2: Realistic Multi-Rail Payment Simulation**
  - *Chosen Approach*: Implement full interactive flows for all 4 payment methods mentioned in brief (Telebirr instructions + reference input, Chapa/Card mock processor, Bank Transfer breakdown, COD verification).
  - *Why*: Gives customers living in Ethiopia and abroad a production-grade checkout experience without blocking on sandbox API keys.
- **Decision 3: Complete Bilingual Localization (EN & Amharic)**
  - *Chosen Approach*: Centralized translation dictionary covering headers, body copy, spice names (በርበሬ, ሽሮ, ሚጥሚጣ, ገንፎ), and order vouchers.
  - *Why*: Essential for cultural authenticity and diaspora elder accessibility.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                          App.tsx (Root State)                          │
│   • CartState (items, quantities, weight)                              │
│   • CurrencyState ('ETB' | 'USD')                                      │
│   • LanguageState ('EN' | 'AM')                                        │
│   • ActiveModals (CartDrawer, CheckoutModal, OrderConfirmationModal)   │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         ▼                         ▼                         ▼
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│  Navbar & Header │     │   Hero Section   │     │ Products Catalog │
│  • Brand Logo    │     │  • Tagline       │     │  • 4 Spices Grid │
│  • Nav Anchors   │     │  • Story Teaser  │     │  • 500g vs 1kg   │
│  • ETB/USD Switch│     │  • Floating Hero │     │  • Price Math    │
│  • EN/AM Switch  │     │    Spice Reveal  │     │  • Add to Bag    │
│  • Cart Count    │     │  • Shop CTA      │     │  • Quick Details │
└──────────────────┘     └──────────────────┘     └──────────────────┘
         │                         │                         │
         ├─────────────────────────┼─────────────────────────┤
         ▼                         ▼                         ▼
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│ Heritage & Story │     │ Value Pillars &  │     │ Gallery & Social │
│  • Mother's Rec. │     │ Who We Serve     │     │  • Customer Love │
│  • Export Standard     │  • 5 Advantages  │     │  • Packaging     │
│  • Mission/Vision│     │  • B2B & Diaspora│     │  • Social Links  │
└──────────────────┘     └──────────────────┘     └──────────────────┘
         │                         │                         │
         └─────────────────────────┼─────────────────────────┘
                                   │
         ┌─────────────────────────┴─────────────────────────┐
         ▼                                                   ▼
┌──────────────────────────────────┐       ┌──────────────────────────────────┐
│      CartDrawer (Slide-Over)     │       │       CheckoutModal Flow         │
│  • Item list & quantity controls │       │  • Step 1: Customer & Address    │
│  • Weight details (500g/1kg)     │       │  • Step 2: Payment Rail Choice   │
│  • Dynamic Subtotal & Shipping   │──────▶│    (Telebirr/Chapa/Bank/COD)     │
│  • Free shipping progress bar    │       │  • Step 3: Verified Voucher      │
│  • Proceed to Checkout CTA       │       │    (Unique Order ID & WhatsApp)  │
└──────────────────────────────────┘       └──────────────────────────────────┘
```

### Data Model & State Entities
- **SpiceProduct**:
  - `id`: string (`'berbere'`, `'shiro'`, `'mitmita'`, `'genfo'`)
  - `name`: `{ en: string, am: string }`
  - `tagline`: `{ en: string, am: string }`
  - `description`: `{ en: string, am: string }`
  - `flavorNotes`: string[]
  - `bestFor`: string[]
  - `heatLevel`: 1 | 2 | 3 | 4 | 5
  - `prices`: `{ '500g': { etb: number, usd: number }, '1kg': { etb: number, usd: number } }`
  - `image`: string
- **CartItem**:
  - `productId`: string
  - `weight`: `'500g'` | `'1kg'`
  - `quantity`: number
  - `unitPrice`: { etb: number, usd: number }
- **OrderVoucher**:
  - `orderId`: string (e.g. `QB-7842-ET`)
  - `items`: CartItem[]
  - `customer`: `{ name: string, phone: string, email: string, city: string, address: string, deliveryType: 'local' | 'international' }`
  - `paymentMethod`: `'telebirr' | 'chapa_stripe' | 'bank_transfer' | 'cod' | 'contact'`
  - `total`: { etb: number, usd: number }
  - `createdAt`: string
