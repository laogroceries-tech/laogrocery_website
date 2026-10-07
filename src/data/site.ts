export const site = {
  name: "LAO",
  fullName: "LAO Groceries",
  tagline: "Discounted Groceries Delivered to Your Doorstep.",
  description:
    "Discounted groceries, dairy, snacks, household and baby care delivered to your doorstep in Mandideep, MP. Free delivery on your first order and above ₹149.",
  // The brand's home. This site is served at the root of `${url}`; see
  // astro.config.mjs.
  url: "https://www.laogroceries.in",
  // The customer web app (app_customer_fe) lives on its own host, so every
  // "Order" button goes here, not to `url`.
  appUrl: "https://app.laogroceries.in",
  // Empty until the app is listed on Google Play: every "Download App" button
  // then sends people to the web app at `appUrl` and the Play badge reads
  // "Coming soon". Set it to the listing (…/store/apps/details?id=…) to switch.
  playStoreUrl: "",
  // The delivery rule, which must match what checkout charges (priceBasket
  // in app_admin's customer-orders): free on a customer's first order and at
  // or above `freeDeliveryAbove` of items; `deliveryFee` below that.
  freeDeliveryAbove: 149,
  deliveryFee: 10,
  // Customers write to support@; partners, suppliers and press to contact@.
  supportEmail: "support@laogroceries.in",
  businessEmail: "contact@laogroceries.in",
  supportPhones: ["+91-88398-50065", "+91-99930-75757"],
  supportHours: "9 AM – 9 PM, every day",
  foundingCity: "Mandideep, Madhya Pradesh",
  // The company that operates LAO. D&B (D-U-N-S) and the app stores check the
  // site against these, so keep them identical to the MCA record.
  legal: {
    name: "ETI TECH PRIVATE LIMITED",
    cin: "U47912MP2026PTC087197",
    registeredOffice: "SR. L.I.G-60, Amrawati South, Near AIIMS, Housing Board, Bhopal, Madhya Pradesh 462043, India",
    address: {
      street: "SR. L.I.G-60, Amrawati South, Near AIIMS, Housing Board",
      locality: "Bhopal",
      region: "Madhya Pradesh",
      postalCode: "462043",
      country: "IN",
    },
    // Required by the Consumer Protection (E-Commerce) Rules, 2020.
    grievanceOfficer: "Ashutosh Sharma",
  },
  // Placeholders until the accounts are created — update the handles then.
  social: {
    instagram: "https://instagram.com/laogrocery",
    facebook: "https://facebook.com/laogrocery",
    linkedin: "https://linkedin.com/company/laogrocery",
  },
};

// The main call to action: the Play listing once there is one, the web app
// until then.
export const primaryCta = site.playStoreUrl
  ? { href: site.playStoreUrl, label: "Download App" }
  : { href: site.appUrl, label: "Order Online" };

// Every file under public/ must go through this: the site is served under a
// base path, so a bare "/logo.png" would resolve against the app at the root.
export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;

export const navLinks = [
  { label: "Home", href: withBase("/#home") },
  { label: "Our Services", href: withBase("/#services") },
  { label: "Why LAO", href: withBase("/#why-lao") },
  { label: "Where We Deliver", href: withBase("/#cities") },
  { label: "Contact Us", href: withBase("/#contact") },
];

export const trustBadges = [
  { icon: "truck", title: "Fast Delivery" },
  { icon: "percent", title: "Discounted Home Delivery" },
  { icon: "store", title: "Store Pickup Coming Soon" },
  { icon: "pin", title: "Now Available in Mandideep" },
];

export const services = [
  {
    icon: "carrot",
    image: "/images/service-fresh-product.webp",
    title: "Fresh Produce",
    description: "Fruits and vegetables, picked fresh.",
    accent: "brand",
  },
  {
    icon: "milk",
    image: "/images/service-dairy.webp",
    title: "Dairy",
    description: "Milk, Ghee, Butter and More.",
    accent: "sand",
  },
  {
    icon: "cookie",
    title: "Snacks",
    description: "Chips, Namkeen, Biscuits and More.",
    accent: "brand",
  },
  {
    icon: "sparkles",
    image: "/images/service-beauty.webp",
    title: "Personal products & beauty",
    description: "Moisturizer, cream, makeup and More.",
    accent: "brand",
  },
  {
    icon: "spray",
    image: "/images/service-household-goods.webp",
    title: "Household Goods",
    description: "Cleaning, Laundry, Kitchen and More.",
    accent: "sand",
  },
  {
    icon: "baby",
    image: "/images/service-baby-care.webp",
    title: "Baby Care",
    description: "Diaper, Wipes, Toys and More.",
    accent: "sand",
  },
];

export const whyLaoPoints = [
  {
    number: 1,
    title: "Best Prices",
    description:
      "No hidden charges. Home delivery is priced below your local store, and every fee is shown before you pay.",
  },
  {
    number: 2,
    title: "Made for Everyday Needs",
    description:
      "From daily groceries to last-minute essentials, get what you need without the long wait.",
  },
  {
    number: 3,
    title: "Local Stores, Wider Access",
    description:
      "Bringing everyday essentials closer to communities that are often left behind.",
  },
  {
    number: 4,
    title: "9AM-9PM Support",
    description: "Call or email us any day between 9 AM and 9 PM.",
  },
];

export const nearbyTowns = ["Sehore", "Vidisha"];

// No pickup store is open yet, so this is one "coming soon" entry rather than
// invented addresses. Replace it with real stores as they open.
export const storeLocations = [
  {
    name: "Pickup points in Mandideep",
    area: "Coming soon",
  },
];

// The policy pages under src/pages/ (shell: src/layouts/LegalPage.astro).
export const legalLinks = [
  { label: "Privacy Policy", href: withBase("/privacy/") },
  { label: "Terms of Service", href: withBase("/terms/") },
  { label: "Refund & Cancellation Policy", href: withBase("/refunds/") },
];

export const footerLinks = {
  // Categories, each linking to the "Our Services" section.
  shop: [
    "Groceries",
    "Snacks",
    "Cold Drinks",
    "Dairy & Eggs",
    "Bakery",
    "Skincare",
    "Personal Care",
    "Household Essentials",
    "Baby Care",
    "Ready-to-Eat",
  ],
  // Customer help. There is no "Track Your Order" link: the web app has no
  // orders URL to link to, so orders are tracked inside the app after sign-in.
  help: [
    { label: "Order Online", href: site.appUrl },
    { label: "FAQs", href: withBase("/#faq") },
    { label: "Contact Us", href: withBase("/#contact") },
    { label: "Report an Issue", href: `mailto:${site.supportEmail}?subject=${encodeURIComponent("Issue with my LAO order")}` },
  ],
};

export const faqs = [
  {
    question: "Which cities does LAO deliver to?",
    answer:
      "LAO delivers in Mandideep, Madhya Pradesh today. We plan to expand to nearby towns across the state next.",
  },
  {
    question: "Is there a delivery fee?",
    answer:
      `Your first order is delivered free. After that, delivery is free on orders of ₹${site.freeDeliveryAbove} or more, and ₹${site.deliveryFee} below that. A small handling fee applies to every order. Every fee is shown in the app before you pay — there are no hidden charges.`,
  },
  {
    question: "Can I pick up my order instead of getting it delivered?",
    answer:
      "Pickup is coming soon. Once our pickup points in Mandideep open, you will be able to choose pickup instead of delivery when you place an order.",
  },
  {
    question: "What can I order from LAO?",
    answer:
      "Fresh produce, dairy, snacks, household goods, personal care and beauty products, and baby care essentials.",
  },
  {
    question: "How do I get support if something goes wrong with my order?",
    answer:
      `Call us on ${site.supportPhones.join(" or ")} or email ${site.supportEmail}, any day between 9 AM and 9 PM.`,
  },
];
