/**
 * siteContent.js
 * Central Content Configuration for "Gloss Atelier"
 * Project Name: Gloss Atelier — Premium Nail Art Website Concept
 * Client / Company: Independent nail-art brand concept. Client identity undisclosed. Location not yet verified.
 * Project by CAVENTRA — "Ideas to Impact."
 *
 * NOTE FOR CLIENT / HANDOFF:
 * All business details, service menus, prices, WhatsApp contact,
 * and portfolio imagery can be updated directly in this file.
 * Fields currently marked as [CONCEPT] will automatically update
 * across the site when filled with verified client data.
 */

export const siteContent = {
  brand: {
    name: "Gloss Atelier",
    shortName: "Gloss Atelier",
    projectName: "Gloss Atelier — Premium Nail Art Website Concept",
    studioTitle: "Independent Studio for Custom Manicures & Structural Gel",
    tagline: "Beauty, in every detail.",
    alternativeTagline: "Hand-painted nail art. Built to last.",
    subCopy: "Specializing in Russian dry manicures, Japanese builder gel reinforcement, and fine-line hand-painted art. Each set is shaped to your hands and built to wear for weeks.",
    byline: "A Digital Experience by CAVENTRA",
    caventraTagline: "Ideas to Impact.",
    year: "2025",
  },

  contact: {
    // Leave empty or set to verified WhatsApp number upon onboarding
    whatsappNumber: "", 
    instagramUrl: "https://instagram.com/glossatelier.concept",
    instagramHandle: "@glossatelier",
    email: "enquire@glossatelier.concept",
    location: "Independent Brand Concept • Location Not Yet Verified",
    locationCity: "Client Identity Undisclosed • Location Pending",
    isLocationVerified: false,
    clientDisclosure: "Independent nail-art brand concept. Client identity undisclosed. Location not yet verified.",
    hours: "By Private Reservation Only • Schedule Pending Verification",
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "Story", href: "#story" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Artistry", href: "#artistry" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Enquire", href: "#booking" },
  ],

  // Section 03: Brand Story
  story: {
    sectionNum: "01",
    tag: "THE STUDIO CRAFT",
    headline: "Little details. Lasting impressions.",
    leadParagraph:
      "A great manicure starts with anatomy and nail health. At Gloss Atelier, every service focuses on precision cuticle alignment, proper apex balance, and long-lasting gel adhesion that protects your natural nail bed.",
    bodyParagraph:
      "Whether you prefer a sheer milky glaze, a minimalist micro-French tip, or custom three-dimensional chrome sculpting, our work is executed with fine-gauge brushes and professional Japanese gel systems.",
    stats: [
      { label: "Cuticle Care", value: "Dry E-File", detail: "Diamond bits, zero water soaking" },
      { label: "Structure", value: "Builder Gel", detail: "Balanced apex for natural strength" },
      { label: "Longevity", value: "3–4 Weeks", detail: "Chip-resistant tempered seal" },
    ],
    editorialQuote: "“Clean cuticle lines, a balanced apex, and intentional art. When a manicure is done right, it holds up to everyday life without losing its finish.”",
  },

  // Section 04: Services (Demonstration Categories - Editable)
  services: {
    sectionNum: "02",
    tag: "SERVICE MENU",
    headline: "The art of self-expression.",
    description:
      "Proposed service menu and signature treatments. Every appointment includes comprehensive dry e-file preparation, cuticle refinement, and premium gel systems.",
    isConceptNotice: true,
    categories: [
      {
        id: "signature-looks",
        title: "Signature Looks",
        subtitle: "Minimalist manicures with high-gloss finishes and clean lines.",
        image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85",
        treatments: [
          {
            name: "The Glazed Pearl Manicure",
            description: "Soft porcelain base layered with micro-fine iridescent chrome powder and finished with a sculpted high-gloss topcoat.",
            duration: "75–90 min (est.)",
            price: "Enquire for Pricing",
            features: ["Russian dry e-file prep", "Natural nail reinforcement", "High-gloss chrome finish"],
          },
          {
            name: "Blush Aura & Sheer Gradient",
            description: "Soft rose center diffused into a translucent milky nude base, sealed under self-leveling builder gel.",
            duration: "90 min (est.)",
            price: "Enquire for Pricing",
            features: ["Custom pigment blending", "Diffused ombre gradient", "Flexible builder gel overlay"],
          },
          {
            name: "French Micro-Tip",
            description: "Ultra-fine hand-painted smile line in muted rose, metallic chrome, or deep espresso over a sheer nude bed.",
            duration: "80 min (est.)",
            price: "Enquire for Pricing",
            features: ["Precision line work", "Proportion matched to nail bed", "Chip-resistant edge seal"],
          },
        ],
      },
      {
        id: "nail-art-details",
        title: "Nail Art Details",
        subtitle: "Hand-painted illustrations, 3D gel sculpting, and metallic accents.",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85",
        treatments: [
          {
            name: "Sculptural Liquid Gold & 3D Gel",
            description: "Raised, tactile drops of clear sculpting gel and hand-burnished liquid gold chrome accents.",
            duration: "105–120 min (est.)",
            price: "Enquire for Pricing",
            features: ["Hand-formed dimensional gel", "Smooth non-snagging finish", "Reinforced apex structure"],
          },
          {
            name: "Botanical Micro-Inlay",
            description: "Hand-painted botanical motifs and real dried floral fragments encapsulated beneath clear Japanese builder gel.",
            duration: "120 min (est.)",
            price: "Enquire for Pricing",
            features: ["Encapsulated botanical elements", "Size 0 detail brushwork", "Smooth glass surface finish"],
          },
          {
            name: "Chrome & Celestial Line Work",
            description: "Fine-line geometric stars, micro-pearls, and metallic chrome details mapped across each finger.",
            duration: "90–110 min (est.)",
            price: "Enquire for Pricing",
            features: ["Individually placed accents", "Non-tarnish chrome pigments", "Reinforced seal"],
          },
        ],
      },
      {
        id: "custom-designs",
        title: "Custom & Bridal Sets",
        subtitle: "Tailored sets for weddings, events, and editorial campaigns.",
        image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=85",
        treatments: [
          {
            name: "Bridal Consultation & Manicure Suite",
            description: "Initial design consultation, trial set, and ceremonial manicure planned to match bridal attire and jewelry.",
            duration: "Consultation + 150 min",
            price: "By Consultation",
            features: ["In-depth color matching", "Cuticle hydration treatment", "High-durability wedding week finish"],
          },
          {
            name: "Custom Editorial & Press-On Sets",
            description: "Made-to-order reusable press-on extensions or full editorial sets designed for photoshoots and special projects.",
            duration: "Custom Project",
            price: "By Consultation",
            features: ["Custom nail sizing", "Reusable salon-grade tips", "Application and care kit included"],
          },
        ],
      },
    ],
  },

  // Section 05: Signature Nail Gallery
  gallery: {
    sectionNum: "03",
    tag: "PORTFOLIO",
    headline: "A canvas at your fingertips.",
    description: "Sample work illustrating range in finishes, builder gel shaping, and hand-painted art. Click any image to inspect details.",
    isConceptNotice: true,
    items: [
      {
        id: 1,
        title: "Porcelain Sheer & Micro-Chrome",
        category: "Minimalist Sets",
        aspect: "portrait",
        image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1400&q=85",
        caption: "Milky porcelain base with an ultra-fine champagne chrome border.",
      },
      {
        id: 2,
        title: "Glazed Rose Quartz Sheen",
        category: "Chrome & Sheen",
        aspect: "landscape",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=85",
        caption: "Soft blush base sealed under a mirror-finish iridescent chrome glaze.",
      },
      {
        id: 3,
        title: "Liquid Gold Drops & Organic Forms",
        category: "3D Nail Art",
        aspect: "portrait",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
        caption: "Hand-sculpted raised gel droplets finished in mirror gold chrome.",
      },
      {
        id: 4,
        title: "Bridal Ivory & Micro-Pearl Accents",
        category: "Bridal Sets",
        aspect: "square",
        image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1400&q=85",
        caption: "Clean sheer ivory base with subtle hand-set pearl detailing.",
      },
      {
        id: 5,
        title: "Espresso Contrast Micro-French",
        category: "Minimalist Sets",
        aspect: "portrait",
        image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1400&q=85",
        caption: "Fine dark espresso tip hand-painted over a clean translucent nail bed.",
      },
      {
        id: 6,
        title: "Aura Diffused Sunset Blush",
        category: "Chrome & Sheen",
        aspect: "landscape",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
        caption: "Seamless central aura blend transitioning from warm rose to sheer cream.",
      },
    ],
  },

  // Section 06: The Artistry / Process
  artistry: {
    sectionNum: "04",
    tag: "THE PROCESS",
    headline: "Made with patience. Finished with precision.",
    description: "Every appointment follows a structured three-stage protocol designed to protect natural nail health and deliver clean, chip-free wear.",
    stages: [
      {
        num: "01",
        name: "Consultation & Assessment",
        subtitle: "Natural nail morphology and design selection",
        description:
          "We examine your natural nail bed shape, cuticle health, and daily routine. Together, we choose a suitable nail shape, gel formula, and art direction that holds up to your everyday lifestyle.",
        points: ["Nail plate condition check", "Shape & proportion selection", "Color and finish planning"],
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
      },
      {
        num: "02",
        name: "Dry E-File Prep & Apex Reinforcement",
        subtitle: "Gentle cuticle detailing and structural balance",
        description:
          "Using sanitized diamond-grit bits, we cleanly refine the cuticle area without water soaking or tissue trauma. Premium Japanese builder gel is then sculpted to construct a balanced apex, providing strength without bulk.",
        points: ["Dry Russian e-file cuticle clean", "Self-leveling builder gel apex", "Non-toxic, high-adhesion bases"],
        image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85",
      },
      {
        num: "03",
        name: "Fine-Line Art & Tempered Topcoat",
        subtitle: "Hand-painted detailing and long-lasting gloss",
        description:
          "Designs are hand-painted using size 0 detail brushes and flash-cured under low-heat LED lamps. Two coats of tempered scratch-resistant topcoat lock in the artwork for 3 to 4 weeks of high gloss.",
        points: ["Precision hand-painted motifs", "Low-heat LED flash curing", "Scratch-resistant tempered topcoat"],
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },

  // Section 07: Lead Artist & Atelier Concept
  about: {
    sectionNum: "05",
    tag: "THE STUDIO",
    headline: "Behind every detail is a personal touch.",
    name: "The Lead Artist",
    title: "Founder & Nail Artist • Client Identity Undisclosed",
    isPlaceholder: true,
    portraitImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    biography: [
      "Gloss Atelier is an independent nail-art brand concept created and designed by CAVENTRA. The studio concept centers on Russian dry manicures, Japanese soft and hard gel systems, and hand-painted nail art.",
      "The approach emphasizes natural nail preservation, clean cuticle work, and structural apex reinforcement over rushed services. Client identity and verified artist profile remain undisclosed pending formal onboarding.",
    ],
    quote: "“A great manicure is balanced, durable, and clean at the cuticle. It should look just as sharp in week three as it did on day one.”",
    signatureNote: "— Gloss Atelier",
  },

  // Section 08: Client Experiences
  testimonials: {
    sectionNum: "06",
    tag: "CLIENT EXPERIENCES",
    headline: "An experience designed around you.",
    subtitle: "Demonstration client reflections reflecting standard studio outcomes.",
    isVerifiedPlaceholder: true,
    noticeText: "Verified client reviews and private reflections will be published here upon official client onboarding. Demonstration feedback below illustrates anticipated service feedback.",
    sampleEditorialHighlights: [
      {
        client: "Demonstration Client Feedback",
        occasion: "Bridal Suite Consultation",
        text: "The glazed pearl finish lasted past four weeks without a single chip or lift at the cuticle. The shape stayed completely intact throughout the wedding week.",
        tag: "Bridal Set",
      },
      {
        client: "Demonstration Client Feedback",
        occasion: "3D Chrome Accent Set",
        text: "The raised 3D gold details were completely smooth to the touch and didn't catch on hair or fabrics. The level of precision is immediately noticeable.",
        tag: "Custom Art Set",
      },
      {
        client: "Demonstration Client Feedback",
        occasion: "Monthly Builder Gel Maintenance",
        text: "My natural nails were thin and snapping before starting builder gel here. After two appointments, they've grown strong and healthy past my fingertips.",
        tag: "Dry Manicure",
      },
    ],
  },

  // Section 09: Booking Section
  booking: {
    sectionNum: "07",
    tag: "RESERVATIONS",
    headline: "Ready for your next signature look?",
    subCopy: "Select your preferred service and date below to prepare an appointment enquiry. Consultations and custom set requests are confirmed directly.",
    ctaButton: "BOOK YOUR APPOINTMENT",
    alternativeCta: "PREPARE ENQUIRY VIA WHATSAPP",
    notice: "Appointments are scheduled individually to ensure dedicated time for cuticle care, shaping, and detailed hand painting.",
    serviceOptions: [
      "The Glazed Pearl Manicure",
      "Blush Aura & Sheer Gradient",
      "French Micro-Tip",
      "Sculptural Liquid Gold & 3D Gel",
      "Botanical Micro-Inlay",
      "Chrome & Celestial Line Work",
      "Bridal Consultation & Manicure Suite",
      "Custom Editorial & Press-On Sets",
      "Other / Custom Art Consultation",
    ],
  },

  // Handoff & Concept Disclosure Checklist
  handoffNotice: {
    isConcept: true,
    message: "Gloss Atelier is an independent nail-art brand concept designed & built by CAVENTRA. Client identity undisclosed. Location not yet verified.",
  },
};
