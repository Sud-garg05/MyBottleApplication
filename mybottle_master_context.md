# MyBottle -- Master Context Document

## 1. Overview

MyBottle is a digital bottle wallet and hospitality infrastructure
platform designed for clubs, bars, and nightlife venues.

It enables customers to: - Reserve a full liquor bottle as a prepaid serving entitlement -
Consume partially across multiple visits - Store remaining balance
digitally - Redeem servings via QR-based system

It enables clubs to: - Convert inventory into prepaid revenue - Drive
guaranteed repeat visits - Improve operational control and trust

------------------------------------------------------------------------

## 2. Core Insight

Liquor bottles are not just products.

They are: \> Multi-visit retention assets

Traditional: - 1 bottle = 1 visit

MyBottle: - 1 bottle = 5 visits (retention loop)

------------------------------------------------------------------------

## 3. Core Model

### 5-Serving Model

-   Each reservation = fixed number of servings (e.g., 5)
-   Entitlement is brand-level (e.g., "5 servings of JW Black Label")
    not a specific physical bottle — club pours from any matching stock
-   Each visit = 1 serving redeemed
-   Balance tracked digitally

### Flow

1.  Customer reserves bottle (full prepaid serving entitlement)
2.  Bottle mapped to user account
3.  QR scan → serving issued
4.  Remaining balance updated
5.  Customer returns to redeem

### Serving Validity Policy

-   Validity period: 90 days from date of reservation
-   Days 1–75: free redemption, reminders sent at serving 3 and 4 unused
-   Day 76: "Expiring soon" notification pushed to customer
-   Day 90: unredeemed servings expire, club reclaims stock credit
-   Grace option: club can extend by 30 days (configurable in dashboard)
-   No refunds on expired servings
-   Revenue recognition: MyBottle fee at reservation; club revenue upfront

### Serving Redemption Policy

-   Unlimited servings per visit (no cap)
-   Natural behavior: most customers consume 1–2 servings per visit
-   NOTE (pitch strategy): do NOT highlight unlimited redemption in
    club owner pitch deck — it could undermine the repeat-visit
    retention narrative. Lead with behavioral data instead.

### Operational Flow Comparison

Traditional peg order (6 steps):
1.  Customer orders
2.  Bartender checks pricing
3.  Creates bill
4.  Processes payment (cash/card/UPI)
5.  Pours drink
6.  Reconciles at end of night

MyBottle redemption (3 steps):
1.  Customer shows QR
2.  Bartender scans and validates
3.  Pours drink

Result: zero payment handling at bar, auto-reconciled, less operational
friction than a standard peg order

### Trust & Fraud Prevention

-   Customer-initiated redemption only: club cannot deduct servings
    unilaterally; customer must generate QR code in-app
-   Real-time push notification on every redemption:
    "1 serving of [brand] redeemed at [club]. X servings remaining."
-   Dispute mechanism: customer can raise in-app dispute;
    MyBottle reviews redemption log (timestamp, location, device)
-   Standard serving defined: 1 serving = 1 standard peg (60ml)
-   Clubs with repeated short-pour complaints flagged in ratings

### Sharing & Social

-   Only the account holder can generate QR and authorize redemption
-   Physical pour can be shared at the table (no policing of who drinks)
-   Shared servings act as social proof — organic growth driver
-   Future feature: "Gift a Serving" — transfer 1 serving to a friend's
    MyBottle account (drives viral app downloads)

------------------------------------------------------------------------

## 4. Value Proposition

### For Customers

-   No wastage
-   Secure digital tracking
-   Flexibility across visits
-   Premium experience
-   Transparency
-   Price advantage: bottle price (at club rate, above MRP) is still
    ~20% cheaper than equivalent total peg cost across visits
-   Converts peg buyers into bottle reservers by showing the savings
    (e.g., 2 pegs today + 3 pegs next visit > 1 bottle reserved now)

### For Clubs

-   Upfront revenue
-   Higher ticket size
-   Guaranteed repeat visits
-   Increased LTV
-   Reduced inventory risk
-   Improved trust
-   Breakage revenue: if customer doesn't redeem all servings,
    club retains both payment and remaining stock

------------------------------------------------------------------------

## 5. Revenue Impact

### Key Drivers

-   Full upfront payments
-   Repeat visits (5x)
-   Ancillary revenue:
    -   food
    -   mixers
    -   tables
    -   service
-   Breakage revenue: unredeemed servings = club keeps full payment
    AND retains the stock as credit (zero-loss model for clubs)

### Core Outcome

Inventory → Revenue Engine

------------------------------------------------------------------------

## 6. Problem Statement

### Customer Problems

-   Lack of trust in bottle storage
-   Fragmented experience
-   Wastage of unused alcohol
-   No ownership visibility

### Club Problems

-   Low margins (4--9%)
-   High CAC (₹2000--₹5000)
-   Low retention (\~32%)
-   Dead premium inventory
-   Midweek demand drop

------------------------------------------------------------------------

## 7. Product Architecture

### Customer App

-   Bottle wallet (serving entitlements)
-   Serving tracker
-   QR scan redemption
-   Purchase flow
-   Notifications

### Club Dashboard

-   Inventory tracking
-   Bottle lifecycle
-   Redemption logs
-   Analytics
-   Customer insights

------------------------------------------------------------------------

## 8. AI Concierge (Future Layer)

Capabilities: - Party planning - Table booking - Bottle
recommendations - Upsell flows - Natural language queries

------------------------------------------------------------------------

## 9. Business Model

-   Transaction fee: 5--10%
-   SaaS subscription (clubs)
-   Featured placement
-   Premium memberships
-   SOR facilitation

### Payment Flow

-   Pass-through model: customer pays via MyBottle app (UPI/card)
-   MyBottle collects full amount via payment aggregator (Razorpay/Cashfree)
-   MyBottle deducts 5–10% platform fee
-   Remainder settled to club on T+1 or T+2 cycle
-   Full transaction data captured for analytics
-   Requires payment aggregator partnership (not a PA license itself)

------------------------------------------------------------------------

## 10. Market Opportunity

-   Global alcohol market: \$2.12T
-   India bars market: \~\$30B by 2030
-   Premium spirits CAGR: \~27%

------------------------------------------------------------------------

## 11. Competitive Landscape

### Existing Categories

-   Discovery: Zomato
-   Booking: Dineout
-   Concierge: Talia
-   Bottle service: Discotech

### Gap

No platform provides: - Bottle ownership tracking - Multi-visit
consumption - Retention engine

### Defensibility / Moat

1.  Supply-side lock-in: clubs with active customer entitlements
    can't switch without disrupting customers (high switching cost)
2.  Data moat: brand preferences, visit frequency, redemption patterns,
    spending behavior — powers AI concierge and recommendations
3.  Category creation: first mover defining "digital bottle wallet"
    — different positioning from discovery (Zomato) or booking (Dineout)
4.  Structural mismatch: Zomato/Dineout operate at listing-level,
    not SKU-level inventory integration; different product thesis
    and revenue model

------------------------------------------------------------------------

## 12. Regulatory Considerations

### Key Principle

MyBottle does NOT sell alcohol.

It: - Acts as digital ledger - Tracks prepaid consumption

### Compliance Rules

-   Alcohol owned & served by licensed venue
-   No inventory ownership by MyBottle
-   No cross-venue transfer (Phase 1: venue-specific only)
-   Phase 2: cross-club within same ownership group (premium tier)
-   Phase 3: open network with inter-club settlement (long-term)
-   Age verification required:
    -   App registration: DOB + Aadhaar/PAN via DigiLocker API
    -   At venue: club's existing ID check at entry
    -   ToS requires 21+ (or as per state law)
    -   Club retains serving-point verification responsibility

### Risks

-   Cross-club redemption
-   Ownership misrepresentation
-   Payment classification
-   Club closure with active customer entitlements

### Risk Mitigation

-   ToS clarity: serving entitlement is between customer and club,
    facilitated by MyBottle; MyBottle is not the seller
-   Club onboarding vetting: valid license + 1+ year operational history
-   Settlement holdback (Phase 2): 2–3% rolling reserve for 30 days;
    used to credit affected customers with wallet balance at other
    partner clubs if a club shuts down

------------------------------------------------------------------------

## 13. Safe Legal Positioning

MyBottle is: - Technology platform - Digital wallet for servings -
Hospitality infrastructure

NOT: - Alcohol seller - Distributor - Marketplace

### Tax Positioning (Recommended — requires CA validation)

-   Alcohol sale tax (GST/VAT/excise): club's responsibility, unchanged
-   MyBottle platform fee: IT services (SAC 998314), 18% GST
-   MyBottle invoices the club for platform fee, not the customer
-   Payment collection: MyBottle acts as collection agent, not seller

### Pre-Launch Action Items

-   [ ] CA consultation on GST/tax classification for platform fee
-   [ ] Legal review of ToS and serving entitlement language
-   [ ] Payment aggregator partnership agreement (Razorpay/Cashfree)
-   [ ] Club onboarding contract template (legal review)

------------------------------------------------------------------------

## 14. Go-To-Market Strategy

### Cold Start Strategy

-   Club-first, not customer-first
-   Target 3–5 premium clubs in one city (Bangalore/Mumbai)
-   Free onboarding for 3 months — club uses MyBottle for existing customers
-   Customers onboarded at the venue (bartender/host pitch, table tents,
    menu inserts, in-venue QR codes)
-   Club IS the distribution channel — no need for massive marketing spend

### Phase 1

-   Single venue pilots
-   Premium clubs
-   Manual + digital tracking

### Phase 2

-   Multi-club groups
-   Retention analytics
-   Cross-venue discovery for existing app users
-   FOMO-driven club adoption (competitor clubs onboarding)

### Phase 3

-   Network expansion
-   AI concierge

------------------------------------------------------------------------

## 15. Key Metrics

### Customer

-   CAC \< ₹1500
-   LTV \> ₹6000
-   LTV:CAC \> 4:1

### Club

-   20+ bottles/month
-   85% retention

### Platform

-   ₹50L monthly GMV
-   5000+ MAU

### Fundraising

-   Stage: Pre-seed
-   Raising: ₹1.5 Cr (~$180K)
-   Runway: 12–15 months

### Unit Economics (Example: Mid-tier bottle at ₹5,000)

-   Club bottle price: ₹5,000
-   Equivalent 5 pegs at club: ₹6,250 (₹1,250 × 5)
-   Customer saving: ~20% (₹1,250)
-   MyBottle fee (8%): ₹400
-   Club receives net: ₹4,600
-   Club wholesale cost: ~₹3,000
-   Club gross margin: ₹1,600 (35%)
-   Ancillary revenue from 4 return visits: ~₹4,000
-   Total club value per reservation: ₹5,600
-   MyBottle net revenue per txn (after gateway): ₹300
-   At 2,000 txns/month (20 clubs): ₹6L monthly revenue
-   Use of funds:
    -   Product & Engineering: 40% (₹60L)
    -   Sales & Club Onboarding: 25% (₹37.5L)
    -   Marketing & Customer Acquisition: 15% (₹22.5L)
    -   Operations & Legal: 10% (₹15L)
    -   Buffer: 10% (₹15L)
-   12-month milestones:
    -   Live product (apps + dashboard)
    -   20 partner clubs across 2 cities
    -   5,000+ active customer accounts
    -   ₹50L monthly GMV
    -   Unit economics proven (LTV:CAC > 4:1)
    -   Ready for Seed round with traction data

------------------------------------------------------------------------

## 16. Founding Team

### Sudarshan Garg — Co-founder (Product & Business)

-   12 years in software development
-   8 years running an events company in Bangalore:
    standalone events (Holi, Dandiya, Bhajan) and
    club collaborations (New Year Eve parties)
-   Direct relationships with club owners and operators
-   Deep understanding of nightlife operations and customer behavior

### Hargobind — Co-founder (Technology)

-   Startup founder building applications for global clients
-   Expertise in blockchain, AI, and ML solutions
-   Proven ability to ship consumer-facing products

### Founder-Market Fit

-   Both founders are regular club-goers who lived this problem
-   Origin story: "We went to a club, consumed half of 2 bottles,
    didn't want to carry them home. Had to buy pegs. Went back
    2 weeks later to the same club — had to buy pegs again.
    It cost us significantly more than if we could have just
    reserved the bottle and come back for it."
-   Sudarshan's 8-year event industry network = distribution
    advantage for club onboarding (cold start solved)

------------------------------------------------------------------------

## 17. Exit Strategy

1.  Acquisition by hospitality/fintech platform (Zomato, Swiggy/Dineout,
    Paytm, PhonePe) entering nightlife commerce
2.  Acquisition by global nightlife platform (Discotech, SevenRooms)
    expanding into India
3.  Growth into full hospitality infrastructure company → standalone IPO
-   Most likely (3–5 year): acquisition at 8–15x revenue

------------------------------------------------------------------------

## 18. Vision

MyBottle becomes: - Digital bottle wallet - Retention infrastructure -
Nightlife operating layer - AI-powered hospitality platform

------------------------------------------------------------------------

## 17. Positioning

Not a nightlife app.

> Revenue and retention infrastructure for clubs

------------------------------------------------------------------------

## 18. Taglines

-   Your Bottle. Your Rules.
-   Own It. Store It. Pour It.
-   Drink Today. Save the Rest.

------------------------------------------------------------------------

## 19. Key Differentiator

No existing platform: - Tracks bottle usage - Enables multi-visit
consumption - Converts inventory into retention

MyBottle creates a new category: \> Alcohol Fintech + Retention
Infrastructure
