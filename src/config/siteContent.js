/**
 * siteContent.js
 * Central Content Configuration for "Nails by Sailee"
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
    name: "Nails by Sailee",
    shortName: "Sailee",
    studioTitle: "Bespoke Nail Artistry & Sculptural Aesthetics",
    tagline: "Your nails. Your signature.",
    alternativeTagline: "Where nail art becomes an expression.",
    subCopy: "Discover beautiful nail designs, thoughtful details and your next signature look. A private sanctuary dedicated to structural nail architecture and unhurried artistry.",
    byline: "A Digital Experience by CAVENTRA",
    caventraTagline: "Ideas to Impact.",
    year: "2025",
  },

  contact: {
    // Leave empty or set to test number. If empty, the booking system activates
    // a beautiful interactive Preview & Copy mode with one-click clipboard copy.
    whatsappNumber: "", // e.g. "919876543210" (when verified)
    instagramUrl: "https://instagram.com/nailsbysailee",
    instagramHandle: "@nailsbysailee",
    email: "enquire@nailsbysailee.concept",
    location: "Bespoke Studio • By Appointment Only",
    locationCity: "Mumbai, India",
    isLocationVerified: false,
    hours: "Tuesday – Sunday • 10:00 AM – 7:00 PM (By Reservation)",
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
    tag: "THE PHILOSOPHY",
    headline: "Little details. Lasting impressions.",
    leadParagraph:
      "Nails are not an afterthought; they are the most personal canvas you carry into every room. At Nails by Sailee, every set begins with an intimate appreciation for proportion, subtle light, and natural contours.",
    bodyParagraph:
      "From soft, milky glazed finishes to intricate hand-painted micro-florals and sculptural 3D chrome accents, our work bridges couture editorial beauty and wearable everyday luxury.",
    stats: [
      { label: "Precision Focus", value: "100%", detail: "Handcrafted execution" },
      { label: "Couture Form", value: "Bespoke", detail: "Tailored to your nail architecture" },
      { label: "Curated Finish", value: "Pure Sheen", detail: "Long-wearing Japanese gels" },
    ],
    editorialQuote: "“To look at one's hands and feel a quiet sense of elevation — that is the true purpose of our craft.”",
  },

  // Section 04: Services (Demonstration Categories - Editable)
  services: {
    sectionNum: "02",
    tag: "CURATED OFFERINGS",
    headline: "The art of self-expression.",
    description:
      "Explore proposed signature treatments. Every service is customized to your nail health, lifestyle, and aesthetic sensibility.",
    isConceptNotice: true,
    categories: [
      {
        id: "signature-looks",
        title: "Signature Looks",
        subtitle: "Effortless, luminous minimalism with editorial refinement.",
        image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85",
        treatments: [
          {
            name: "The Glazed Pearl Manicure",
            description: "Soft porcelain base overlaid with micro-fine iridescent chrome dust and high-gloss sculpted topcoat.",
            duration: "75–90 min (est.)",
            price: "Enquire for Pricing",
            features: ["Gentle Russian/Dry E-file prep", "Nourishing keratin infusion", "Signature pearl sheen"],
          },
          {
            name: "Blush Aura & Sheer Gradient",
            description: "Airbrushed soft rose center diffusing into translucent milky nude, crowned with a glass gel gloss.",
            duration: "90 min (est.)",
            price: "Enquire for Pricing",
            features: ["Custom color mixing", "Seamless diffused gradient", "High-retention builder gel"],
          },
          {
            name: "French Architectural Micro-Tip",
            description: "An ultra-fine, razor-precise smile line in muted rose, chrome, or deep espresso against a flawless sheer bed.",
            duration: "80 min (est.)",
            price: "Enquire for Pricing",
            features: ["Precision optical lengthening", "Custom edge proportion", "Chip-resistant finish"],
          },
        ],
      },
      {
        id: "nail-art-details",
        title: "Nail Art Details",
        subtitle: "Delicate micro-illustrations, organic mineral stones & metallic foils.",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85",
        treatments: [
          {
            name: "Sculptural Liquid Gold & 3D Gel",
            description: "Tactile, raised drops of liquid gold chrome, clear quartz gel droplets, and organic molten metal accents.",
            duration: "105–120 min (est.)",
            price: "Enquire for Pricing",
            features: ["Hand-formed dimensional gel", "Mirror-finish metallic leaf", "Structural reinforcement"],
          },
          {
            name: "Botanical Micro-Inlay",
            description: "Ethereal hand-painted flora, dried baby's breath encased in crystal builder gel, and delicate gold thread.",
            duration: "120 min (est.)",
            price: "Enquire for Pricing",
            features: ["Genuine encased florals", "Micro-detail brushwork", "Deep dimensional depth"],
          },
          {
            name: "Celestial Chrome Constellations",
            description: "Starlight motifs, micro-pearls, and soft geometric line work plotted seamlessly across all ten fingertips.",
            duration: "90–110 min (est.)",
            price: "Enquire for Pricing",
            features: ["Hand-placed Austrian crystals", "Fine-line calligraphy pen work", "Prismatic finish"],
          },
        ],
      },
      {
        id: "custom-designs",
        title: "Custom & Bridal Bespoke",
        subtitle: "Collaborative, one-of-a-kind sets tailored for weddings and editorial campaigns.",
        image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=85",
        treatments: [
          {
            name: "The Haute Bridal Suite",
            description: "Private consultation, trial set, and ceremonial nail design harmonized with your bridal trousseau and jewelry.",
            duration: "Consultation + 150 min",
            price: "By Consultation",
            features: ["Complete bridal consultation", "Color-matched to attire", "Luxury hand massage & scrub"],
          },
          {
            name: "Editorial Campaign Runway Set",
            description: "Extreme sculptural extensions, high-concept textures, and custom removable press-on sets for production shoots.",
            duration: "Custom Project",
            price: "By Consultation",
            features: ["Full artistic license", "Reusable heirloom press-ons", "On-set touchup kit included"],
          },
        ],
      },
    ],
  },

  // Section 05: Signature Nail Gallery
  gallery: {
    sectionNum: "03",
    tag: "EDITORIAL PORTFOLIO",
    headline: "A canvas at your fingertips.",
    description: "Curated selections illustrating aesthetic breadth, delicate balance, and tactile finishes. Click any image to view in full resolution.",
    isConceptNotice: true,
    items: [
      {
        id: 1,
        title: "Porcelain Sheer & Micro-Chrome",
        category: "Minimalist Luxe",
        aspect: "portrait",
        image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1400&q=85",
        caption: "Delicate frosted ivory with ultra-fine champagne edge detail.",
      },
      {
        id: 2,
        title: "Glazed Rose Quartz Sheen",
        category: "Sculpted Glow",
        aspect: "landscape",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=85",
        caption: "Diffused milky rose base beneath high-transmission mirror topcoat.",
      },
      {
        id: 3,
        title: "Liquid Gold Drops & Organic Forms",
        category: "3D Artistry",
        aspect: "portrait",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
        caption: "Hand-sculpted raised molten droplets reflecting natural studio light.",
      },
      {
        id: 4,
        title: "Bridal Ivory & Micro-Pearl Accents",
        category: "Bridal Bespoke",
        aspect: "square",
        image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1400&q=85",
        caption: "Understated opulence tailored for bridal ceremonies.",
      },
      {
        id: 5,
        title: "Espresso Contrast Micro-French",
        category: "Editorial Minimal",
        aspect: "portrait",
        image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1400&q=85",
        caption: "Deep espresso precision tip balanced over translucent porcelain.",
      },
      {
        id: 6,
        title: "Aura Diffused Sunset Blush",
        category: "Soft Luxury",
        aspect: "landscape",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
        caption: "Soft chromatic gradient evoking warm dusk twilight.",
      },
    ],
  },

  // Section 06: The Artistry / Process
  artistry: {
    sectionNum: "04",
    tag: "THE CRAFTSMANSHIP",
    headline: "Made with patience. Finished with precision.",
    description: "Every bespoke set follows an unhurried, ceremonial process ensuring nail health, durability, and editorial perfection.",
    stages: [
      {
        num: "01",
        name: "Design & Consultation",
        subtitle: "Architectural assessment and creative alignment",
        description:
          "We examine your natural nail bed curvature, skin undertones, and everyday lifestyle. Together, we select color palettes, finishes, and artistic motifs to harmonize with your personal aesthetic.",
        points: ["Natural nail morphology check", "Palette curation & skin tone matching", "Moodboard & motif alignment"],
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
      },
      {
        num: "02",
        name: "Prep & Structural Sculpting",
        subtitle: "Flawless dry manicure and balanced apex construction",
        description:
          "A meticulous, gentle Russian dry manicure refines the cuticle perimeter with diamond-grit bits. Premium Japanese builder gel is carefully sculpted to create a natural, feather-light structural apex.",
        points: ["Zero-trauma dry e-file manicure", "Natural apex balance for strength", "Premium non-toxic Japanese bases"],
        image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85",
      },
      {
        num: "03",
        name: "Artistic Detail & High-Gloss Finish",
        subtitle: "Micro-brush painting and mirror-seal perfection",
        description:
          "With zero-gauge fine brushes, pigments, liquid chromes, and 3D gels are placed millimeter by millimeter. Two tempered layers of diamond topcoat seal the artwork for up to 4+ weeks of glass-like brilliance.",
        points: ["Micro-calligraphy & hand-placed art", "Multi-stage UV/LED flash cure", "Diamond-tempered scratch-free seal"],
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },

  // Section 07: Meet Sailee
  about: {
    sectionNum: "05",
    tag: "THE ARTIST",
    headline: "Behind every detail is a personal touch.",
    name: "Sailee",
    title: "Founder & Bespoke Nail Artist",
    isPlaceholder: true,
    portraitImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    biography: [
      "Welcome to Nails by Sailee. For me, nail artistry is the intersection of architecture, jewelry, and meditative fine art. Every client who sits in my chair receives an unhurried experience designed around quiet luxury and meticulous care.",
      "Trained in modern European dry manicure techniques and Japanese gel sculpting, my philosophy favors understated elegance over noisy trends — crafting hands that look radiant, polished, and effortlessly elevated.",
    ],
    quote: "“Your hands speak before you utter a single word. Let them tell a story of elegance and quiet grace.”",
    signatureNote: "— Sailee",
  },

  // Section 08: Client Experiences
  testimonials: {
    sectionNum: "06",
    tag: "CLIENT VOICES",
    headline: "An experience designed around you.",
    subtitle: "A sanctuary of quiet luxury and thoughtful attention.",
    isVerifiedPlaceholder: true,
    noticeText: "Verified client reviews and private client reflections will be presented here upon official studio launch. We respect our patrons' privacy and only publish genuine, consented testimonials.",
    sampleEditorialHighlights: [
      {
        client: "Private Client Reflection",
        occasion: "Bridal Ceremony Suite",
        text: "The attention to detail is unlike anything else. The glazed pearl finish lasted past four weeks without a single chip, and the quiet studio environment was so calming before my wedding week.",
        tag: "Bridal Suite",
      },
      {
        client: "Private Client Reflection",
        occasion: "Custom 3D Art Set",
        text: "Sailee treats each fingertip like a miniature sculpture. The subtle liquid gold details caught the light in every photograph during Paris Fashion Week.",
        tag: "Editorial Set",
      },
      {
        client: "Private Client Reflection",
        occasion: "Monthly Signature Care",
        text: "Finally, a nail artist who understands delicate restraint. My natural nails have grown significantly healthier since switching to her dry manicure technique.",
        tag: "Signature Care",
      },
    ],
  },

  // Section 09: Cinematic Booking Finale
  booking: {
    sectionNum: "07",
    tag: "RESERVATIONS",
    headline: "Ready for your next signature look?",
    subCopy: "Let's create something that feels uniquely yours. Prepare an appointment enquiry below to reserve your private session.",
    ctaButton: "BOOK YOUR APPOINTMENT",
    alternativeCta: "PREPARE ENQUIRY VIA WHATSAPP",
    notice: "Private studio visits are arranged strictly in advance to ensure an unhurried, one-on-one session.",
    serviceOptions: [
      "The Glazed Pearl Manicure",
      "Blush Aura & Sheer Gradient",
      "French Architectural Micro-Tip",
      "Sculptural Liquid Gold & 3D Gel",
      "Botanical Micro-Inlay",
      "Celestial Chrome Constellations",
      "The Haute Bridal Suite",
      "Editorial Runway Custom Set",
      "Other / Custom Art Consultation",
    ],
  },

  // Handoff & Concept Disclosure Checklist
  handoffNotice: {
    isConcept: true,
    message: "This website is a bespoke concept preview designed & built by CAVENTRA. All stock imagery and demonstration categories are illustrative placeholders ready for immediate substitution upon client onboarding.",
  },
};
