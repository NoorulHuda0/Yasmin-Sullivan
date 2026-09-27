/**
 * ALL business content, colors, services, and image URLs.
 * Edit this file to update the entire website without touching component code.
 */

export const business = {
  // Core Business Identity
  name: "Yasmin Sullivan",
  businessType: "Internet marketing services",
  tagline: "Grow Your Business Online",
  area: "Harrogate & London, United Kingdom",
  fullAddress: "9 Princes Square, Harrogate, London, United Kingdom, HG1 1ND",
  city: "Harrogate, London",
  postalCode: "HG1 1ND",
  country: "United Kingdom",
  
  // Contact & Social Actions
  phone: "447414010197",
  phoneFormatted: "+44 7414 010197",
  phoneTel: "tel:447414010197",
  whatsAppNumber: "447414010197",
  whatsAppUrl: "https://wa.me/447414010197",
  email: "cafechillcorner345@gmail.com",
  emailMailto: "mailto:cafechillcorner345@gmail.com",
  googleMapsUrl: "https://maps.google.com/?q=9+Princes+Square,+Harrogate,+HG1+1ND,+UK",
  openingHours: "Monday – Friday: 9:00 AM – 6:00 PM",
  openingHoursShort: "Mon – Fri: 9:00 AM – 6:00 PM",
  weekendHours: "Saturday & Sunday: Closed",

  // CTAs
  mainCtaText: "Message on WhatsApp",
  secondaryCtaText: "View Services",

  // Brand Styling & Design Tokens
  brandStyle: "Minimal",
  colors: {
    primary: "#1d4ed8",          // Refined Blue
    primaryHover: "#1e40af",     // Darker Blue for hover
    primaryLight: "#eff6ff",     // Soft blue tint
    secondary: "#f8fafc",        // Light Gray background
    secondaryMuted: "#f1f5f9",   // Neutral card fill
    border: "#e2e8f0",           // Subtle hairline border
    ink: "#0f172a",              // Near-black ink
    inkMuted: "#475569",         // Subdued body text
    inkSubtle: "#94a3b8",        // Captions / footnotes
    accent: "#2563eb",           // Accent blue for eyebrows/links
    white: "#ffffff",
  },

  // Navigation Links
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Why Choose Us", href: "#why-choose-us" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" }
    ],
    cta: {
      label: "Message on WhatsApp",
      href: "https://wa.me/447414010197",
      isExternal: true
    }
  },

  // Hero Section
  hero: {
    eyebrow: "9 Princes Square, Harrogate · Internet Marketing",
    headline: "Grow Your Business Online",
    description: "Search engine optimisation, precision Google Ads, and bespoke digital marketing designed to bring high-intent clients directly to your business in Harrogate, London, and nationwide.",
    primaryCta: {
      label: "Message on WhatsApp",
      href: "https://wa.me/447414010197",
      isExternal: true
    },
    secondaryCta: {
      label: "View Services",
      href: "#services",
      isExternal: false
    },
    trustLine: "Based in Harrogate & London · Direct specialist collaboration",
    backgroundImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80"
  },

  // Services Section
  services: {
    eyebrow: "Specialist Capabilities",
    title: "Internet Marketing Services",
    description: "Every service is delivered with direct specialist oversight, transparent tracking, and strategies built around your local and national market.",
    items: [
      {
        id: "seo-services",
        title: "SEO Services",
        description: "Comprehensive organic search strategy to improve rankings, drive relevant traffic, and boost qualified client inquiries.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "local-seo",
        title: "Local SEO",
        description: "Dominate local searches and Google Maps in Harrogate, London, and your target regional territories.",
        image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "google-ads",
        title: "Google Ads",
        description: "High-return paid search and display campaigns configured to capture active customer demand without wasted spend.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "social-media-marketing",
        title: "Social Media Marketing",
        description: "Targeted social campaigns that strengthen your brand presence and connect with your local community.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "content-marketing",
        title: "Content Marketing",
        description: "High-value articles, landing page copy, and case studies that establish authority and convert visitors into buyers.",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "email-marketing",
        title: "Email Marketing",
        description: "Structured subscriber retention, automated nurture workflows, and direct broadcast communications.",
        image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "keyword-research",
        title: "Keyword Research",
        description: "In-depth intent and competitor analysis identifying the exact high-value search terms your prospects use.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "seo-audit",
        title: "SEO Audit",
        description: "Detailed technical inspection diagnosing crawl bottlenecks, index issues, speed snags, and on-page gaps.",
        image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "link-building",
        title: "Link Building",
        description: "Authoritative, industry-relevant backlink acquisition that builds domain trust and search engine credibility.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "website-optimization",
        title: "Website Optimization",
        description: "Core Web Vitals enhancement, mobile UX refinements, and conversion rate architecture for speed and clarity.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "online-reputation",
        title: "Online Reputation",
        description: "Proactive review management and brand sentiment monitoring across essential business directories and search results.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        description: "Unified cross-channel growth roadmaps coordinating SEO, paid search, and content to compound your market share.",
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1600&q=80"
      }
    ]
  },

  // About Section
  about: {
    eyebrow: "About Yasmin Sullivan",
    title: "Direct Specialist Marketing for Growing Businesses",
    paragraphs: [
      "Operating from 9 Princes Square in Harrogate and advising businesses across London and the UK, Yasmin Sullivan provides focused internet marketing services built on clarity and measurable outcomes.",
      "Rather than dealing with account handoffs or vague agency reports, you work directly with a dedicated internet marketing specialist focused on sustainable search rankings, efficient Google Ads, and genuine business growth."
    ],
    details: [
      { label: "Location", value: "9 Princes Square, Harrogate, HG1 1ND" },
      { label: "Core Expertise", value: "SEO, Google Ads & Digital Marketing" },
      { label: "Client Model", value: "Direct Specialist Collaboration" }
    ],
    cta: {
      label: "Message on WhatsApp",
      href: "https://wa.me/447414010197",
      isExternal: true
    },
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80"
  },

  // Why Choose Us Section
  whyChooseUs: {
    eyebrow: "Why Choose Us",
    title: "Built on Clarity, Strategy, and Accountability",
    description: "Every campaign is grounded in specific business goals, transparent communication, and disciplined execution.",
    items: [
      {
        number: "01",
        title: "Tailored Search & Ad Strategies",
        description: "No generic templates. Every campaign is designed specifically for your industry, target audience, and local geography."
      },
      {
        number: "02",
        title: "Transparent Performance Reporting",
        description: "Clear monthly breakdowns detailing exactly what work was completed, ranking progression, and conversion volume."
      },
      {
        number: "03",
        title: "Direct Specialist Communication",
        description: "Speak directly with your internet marketing practitioner whenever you have questions or strategic opportunities."
      },
      {
        number: "04",
        title: "Local Market Focus with National Standards",
        description: "Deep understanding of regional search dynamics in Harrogate and London paired with cutting-edge marketing standards."
      }
    ]
  },

  // Testimonials / Reviews (Strict rule: rendered only if real testimonials exist. Empty array prevents rendering fake reviews.)
  testimonials: [],

  // FAQ Section
  faq: {
    eyebrow: "Frequently Asked Questions",
    title: "Clear Answers Before We Begin",
    description: "Common questions about working together, launch timelines, and how internet marketing services operate.",
    items: [
      {
        question: "How does local SEO help businesses in Harrogate and London?",
        answer: "Local SEO optimizes your Google Business presence, local citation signals, and on-page geographical structure so nearby customers searching for your services find you first in the Map Pack and localized search results."
      },
      {
        question: "What is included in an initial SEO audit?",
        answer: "The audit examines your website's technical health, crawlability, indexing status, page speed, backlink foundation, and keyword rankings, concluding with an actionable priority roadmap for improvements."
      },
      {
        question: "How quickly can Google Ads and SEO campaigns launch?",
        answer: "Google Ads campaigns typically launch within 3 to 5 business days following research and creative approval. Organic SEO foundations begin immediately, with search engines acknowledging optimizations steadily over successive weeks."
      },
      {
        question: "How will we communicate about project progress?",
        answer: "You have direct access via WhatsApp, phone, and email, alongside scheduled monthly reporting summaries so you are always updated without unnecessary jargon."
      }
    ]
  },

  // Contact Section
  contact: {
    eyebrow: "Get in Touch",
    title: "Start Growing Your Online Presence",
    description: "Ready to discuss your search rankings, Google Ads, or digital strategy? Reach out directly via WhatsApp, phone, or send a message below.",
    addressLabel: "Office Address",
    address: "9 Princes Square, Harrogate, London, United Kingdom, HG1 1ND",
    phoneLabel: "Phone",
    phone: "+44 7414 010197",
    phoneTel: "tel:447414010197",
    whatsAppLabel: "WhatsApp",
    whatsAppUrl: "https://wa.me/447414010197",
    whatsAppButtonText: "Message on WhatsApp",
    emailLabel: "Email",
    email: "cafechillcorner345@gmail.com",
    emailMailto: "mailto:cafechillcorner345@gmail.com",
    hoursLabel: "Opening Hours",
    hours: "Monday – Friday: 9:00 AM – 6:00 PM",
    weekendLabel: "Weekend",
    weekend: "Closed",
    directionsLabel: "Get Directions",
    directionsUrl: "https://maps.google.com/?q=9+Princes+Square,+Harrogate,+HG1+1ND,+UK",
    form: {
      title: "Send a Direct Message",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. James Thornton",
      emailLabel: "Email Address",
      emailPlaceholder: "e.g. james@example.co.uk",
      phoneLabel: "Phone Number (optional)",
      phonePlaceholder: "e.g. +44 7700 900077",
      serviceLabel: "Service of Interest",
      serviceOptions: [
        "SEO Services",
        "Local SEO",
        "Google Ads",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "SEO Audit",
        "Website Optimization",
        "Digital Marketing"
      ],
      messageLabel: "Tell us about your business goals",
      messagePlaceholder: "Briefly describe your business, current website, or what you'd like to achieve...",
      submitButtonText: "Send Inquiry",
      successTitle: "Inquiry Received",
      successMessage: "Thank you for reaching out. Your inquiry has been noted and you will receive a response within one business day."
    }
  },

  // Footer
  footer: {
    name: "Yasmin Sullivan",
    tagline: "Internet Marketing Services · Harrogate & London, UK",
    address: "9 Princes Square, Harrogate, London, United Kingdom, HG1 1ND",
    phone: "+44 7414 010197",
    phoneTel: "tel:447414010197",
    whatsAppUrl: "https://wa.me/447414010197",
    email: "cafechillcorner345@gmail.com",
    emailMailto: "mailto:cafechillcorner345@gmail.com",
    hours: "Mon – Fri: 9:00 AM – 6:00 PM",
    copyright: "© 2026 Yasmin Sullivan. All rights reserved.",
    quickLinksTitle: "Navigation",
    contactTitle: "Contact Details",
    hoursTitle: "Business Hours"
  }
};
