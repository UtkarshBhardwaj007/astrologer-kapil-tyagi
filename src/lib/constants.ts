// Helper function to get correct image path with basePath
// Note: With a custom domain, no basePath prefix is needed as the site is at root
export const getImagePath = (path: string): string => {
  return path;
};

// Statistics Constants (centralized for easy updates)
export const STATS = {
  yearsOfExperience: 25,
  totalConsultations: 200000,
  averageRating: 4.9,
  totalReviews: 150,
  countriesServed: 30,
};

// ============================================
// SEO CONFIGURATION
// ============================================
export const SEO_CONFIG = {
  domain: "https://astrologerkapiltyagi.com",
  siteName: "Astrologer Kapil Tyagi",
  
  // Primary Keywords (High Priority)
  primaryKeywords: [
    "Astrologer Kapil Tyagi",
    "Kapil Tyagi astrologer",
    "Kapil Tyagi jyotish",
    "Pandit Kapil Tyagi",
    "Acharya Kapil Tyagi",
    "Tyagi astrologer Delhi",
    "Jyotish Tyagi Delhi",
    "best astrologer in Delhi",
    "top astrologer in Delhi",
    "famous astrologer in Delhi",
    "Jyotish acharya in Delhi",
    "Vedic astrologer Delhi",
  ],
  
  // Location Keywords
  locationKeywords: [
    "Delhi",
    "Delhi NCR",
    "Rohini Delhi",
    "North Delhi",
    "India",
  ],
  
  // Service Keywords
  serviceKeywords: {
    vastu: [
      "Vastu consultant Delhi",
      "Vastu expert Delhi",
      "best Vastu consultant Delhi",
      "Vastu shastra Delhi",
      "Vastu for home Delhi",
      "Vastu for office Delhi",
      "residential Vastu Delhi",
      "commercial Vastu Delhi",
    ],
    kundali: [
      "Kundli making Delhi",
      "Kundali making Delhi",
      "Janam kundli Delhi",
      "birth chart Delhi",
      "horoscope reading Delhi",
      "kundali analysis Delhi",
    ],
    marriage: [
      "Kundli matching Delhi",
      "marriage astrologer Delhi",
      "kundali matching for marriage Delhi",
      "Gun milan Delhi",
      "horoscope matching Delhi",
      "Manglik dosha specialist Delhi",
    ],
    numerology: [
      "numerologist Delhi",
      "name numerology Delhi",
      "numerology expert Delhi",
      "lucky number consultation Delhi",
    ],
    gemstone: [
      "gemstone consultant Delhi",
      "gemstone astrologer Delhi",
      "ratna specialist Delhi",
    ],
    muhurat: [
      "muhurat Delhi",
      "shubh muhurat Delhi",
      "wedding muhurat Delhi",
      "griha pravesh muhurat Delhi",
    ],
    career: [
      "career astrologer Delhi",
      "business astrologer Delhi",
      "job problem solution Delhi",
    ],
    puja: [
      "puja services Delhi",
      "graha shanti puja Delhi",
      "astrological remedies Delhi",
    ],
  },
  
  // Hindi Keywords for Local SEO
  hindiKeywords: [
    "दिल्ली में सर्वश्रेष्ठ ज्योतिषी",
    "दिल्ली में वास्तु सलाहकार",
    "कुंडली मिलान दिल्ली",
    "जन्म कुंडली दिल्ली",
    "ज्योतिष आचार्य दिल्ली",
    "पंडित कपिल त्यागी",
    "आचार्य कपिल त्यागी",
  ],
  
  // Credentials Keywords
  credentials: [
    "Jyotish Acharya",
    "Silver Medalist",
    "Vedic Scholar",
    "25+ years experience",
  ],
  
  // Default meta description
  defaultDescription: `Consult Astrologer Kapil Tyagi - Delhi's renowned Jyotish Acharya with ${STATS.yearsOfExperience}+ years experience. Expert in Vedic astrology, Vastu consultation, kundli matching, horoscope reading & marriage predictions. Trusted by ${STATS.totalConsultations.toLocaleString()}+ clients.`,
  
  // Open Graph default image
  ogImage: "/images/og-image.jpg",
};

// Page-specific SEO metadata
export const PAGE_SEO = {
  home: {
    title: "Astrologer Kapil Tyagi | Best Vedic Astrologer in Delhi | Vastu Expert",
    description: `Consult Astrologer Kapil Tyagi - Delhi's renowned Jyotish Acharya for accurate horoscope reading, Vastu consultation, kundli matching & marriage predictions. ${STATS.yearsOfExperience}+ years experience. Call +91 9811349874.`,
    keywords: "Astrologer Kapil Tyagi, best astrologer in Delhi, top astrologer Delhi, famous astrologer Delhi, Jyotish acharya Delhi, Vastu consultant Delhi, Vedic astrologer Delhi, Tyagi astrologer Delhi",
  },
  about: {
    title: "About Astrologer Kapil Tyagi | Famous Jyotish Acharya Delhi | 25+ Years Experience",
    description: `Learn about Pandit Kapil Tyagi - Delhi's trusted Vedic astrologer with ${STATS.yearsOfExperience}+ years experience. Jyotish Acharya, Silver Medalist, expert in astrology, numerology & Vastu Shastra. ${STATS.totalConsultations.toLocaleString()}+ consultations done.`,
    keywords: "Pandit Kapil Tyagi, Acharya Kapil Tyagi, Jyotish Acharya Delhi, famous astrologer Delhi, experienced astrologer Delhi, Vedic scholar Delhi",
  },
  services: {
    title: "Astrology Services in Delhi | Kundli, Vastu, Numerology | Astrologer Kapil Tyagi",
    description: "Comprehensive astrology services by Astrologer Kapil Tyagi in Delhi - Kundli making, Vastu consultation, marriage matching, numerology, gemstone advice, muhurat selection & more. Book appointment today.",
    keywords: "astrology services Delhi, kundli making Delhi, Vastu consultation Delhi, marriage matching Delhi, numerology Delhi, gemstone consultation Delhi",
  },
  contact: {
    title: "Book Appointment | Contact Astrologer Kapil Tyagi Delhi | +91 9811349874",
    description: "Book consultation with Astrologer Kapil Tyagi in Rohini, Delhi. Call +91 9811349874 for appointments. Visit B-8/106, Sector 3, Rohini, Delhi - 110085. Online & in-person consultations available.",
    keywords: "astrologer appointment Delhi, book astrologer Delhi, contact astrologer Delhi, Rohini astrologer, astrologer near me Delhi",
  },
  reviews: {
    title: "Client Reviews | Astrologer Kapil Tyagi Delhi | 4.9 Rating | 150+ Reviews",
    description: `Read ${STATS.totalReviews}+ genuine client reviews of Astrologer Kapil Tyagi. ${STATS.averageRating} star rating. Trusted by thousands for accurate predictions & effective remedies in Delhi NCR.`,
    keywords: "astrologer reviews Delhi, Kapil Tyagi reviews, best rated astrologer Delhi, trusted astrologer Delhi",
  },
  vastu: {
    title: "Best Vastu Consultant in Delhi | Vastu Shastra Expert | Astrologer Kapil Tyagi",
    description: "Expert Vastu consultation in Delhi by Astrologer Kapil Tyagi. Home Vastu, office Vastu, commercial & industrial Vastu. Practical remedies without demolition. Book Vastu consultation today.",
    keywords: "Vastu consultant Delhi, Vastu expert Delhi, best Vastu consultant Delhi, Vastu shastra Delhi, home Vastu Delhi, office Vastu Delhi, Vastu remedies Delhi",
  },
  kundali: {
    title: "Kundli Making in Delhi | Janam Kundali Analysis | Astrologer Kapil Tyagi",
    description: "Get accurate Kundli (birth chart) made by expert Vedic astrologer in Delhi. Detailed Janam Kundali analysis, Dasha predictions, dosha identification & remedies. Book kundali consultation now.",
    keywords: "kundli making Delhi, janam kundali Delhi, birth chart Delhi, kundali analysis Delhi, horoscope Delhi, Vedic birth chart Delhi",
  },
  marriage: {
    title: "Marriage Astrologer Delhi | Kundli Matching | Gun Milan | Astrologer Kapil Tyagi",
    description: "Expert kundli matching for marriage in Delhi. 36 Guna Milan, Manglik dosha check, Nadi dosha analysis & remedies. Find compatible life partner with accurate horoscope matching by Astrologer Kapil Tyagi.",
    keywords: "kundli matching Delhi, marriage astrologer Delhi, Gun milan Delhi, horoscope matching Delhi, Manglik dosha Delhi, marriage compatibility Delhi",
  },
  numerology: {
    title: "Numerologist in Delhi | Name Numerology Expert | Astrologer Kapil Tyagi",
    description: "Expert numerology consultation in Delhi. Name numerology, lucky numbers, business name analysis, mobile number selection. Discover the power of numbers with Numerologist Kapil Tyagi.",
    keywords: "numerologist Delhi, numerology expert Delhi, name numerology Delhi, lucky number Delhi, business name numerology Delhi",
  },
  gemstones: {
    title: "Gemstone Consultant Delhi | Ratna Expert | Astrologer Kapil Tyagi",
    description: "Expert gemstone recommendation in Delhi based on birth chart. Ruby, Pearl, Emerald, Yellow Sapphire & more. Authentic gemstones with proper energization. Consult gemstone expert Kapil Tyagi.",
    keywords: "gemstone consultant Delhi, gemstone astrologer Delhi, ratna expert Delhi, gemstone recommendation Delhi, Pukhraj Delhi, Neelam Delhi",
  },
  rudraksha: {
    title: "Rudraksha Consultant Delhi | Original Rudraksha | Astrologer Kapil Tyagi",
    description: "Authentic Rudraksha consultation in Delhi. 1 to 14 Mukhi Rudraksha selection based on your horoscope. Original Nepal Rudraksha with certification. Book Rudraksha consultation today.",
    keywords: "Rudraksha consultant Delhi, original Rudraksha Delhi, Rudraksha astrologer Delhi, Mukhi Rudraksha Delhi",
  },
  puja: {
    title: "Puja Services Delhi | Graha Shanti | Vedic Remedies | Astrologer Kapil Tyagi",
    description: "Powerful Vedic puja services in Delhi. Graha Shanti puja, Navgraha puja, Kaal Sarp dosh nivaran, Pitra dosh puja & more. Effective astrological remedies by Pandit Kapil Tyagi.",
    keywords: "puja services Delhi, graha shanti puja Delhi, Navgraha puja Delhi, Kaal Sarp dosh remedy Delhi, astrological remedies Delhi",
  },
  mahurat: {
    title: "Muhurat Consultation Delhi | Shubh Muhurat | Astrologer Kapil Tyagi",
    description: "Expert Muhurat selection in Delhi for marriage, griha pravesh, business inauguration & more. Get auspicious timing for all important events. Book muhurat consultation with Astrologer Kapil Tyagi.",
    keywords: "muhurat Delhi, shubh muhurat Delhi, marriage muhurat Delhi, griha pravesh muhurat Delhi, wedding date Delhi",
  },
  career: {
    title: "Career Astrologer Delhi | Business & Job Guidance | Astrologer Kapil Tyagi",
    description: "Expert career and business astrology in Delhi. Job change timing, business success predictions, partnership compatibility & career path guidance. Consult career astrologer Kapil Tyagi.",
    keywords: "career astrologer Delhi, business astrologer Delhi, job astrology Delhi, career guidance Delhi, business prediction Delhi",
  },
};

export const SITE_CONFIG = {
  name: "Astrologer Kapil Tyagi",
  title: "Astrologer Kapil Tyagi",
  tagline: "Vedic Astrologer in Delhi",
  description: SEO_CONFIG.defaultDescription,
  keywords: SEO_CONFIG.primaryKeywords.join(", "),
};

export const CONTACT_INFO = {
  phone: "+91 9811349874",
  phoneClean: "919811349874",
  email: "tykapil@gmail.com",
  address: {
    line1: "B-8/106",
    line2: "Sector 3, Rohini",
    city: "Delhi",
    pincode: "110085",
    country: "India",
    full: "B-8/106, Sector 3, Rohini, Delhi, 110085 - India",
  },
  googleMapsUrl: "https://www.google.com/maps/place/Astrologer+Kapil+Tyagi/@28.7016145,77.1082165,714m",
  googleReviewUrl: "https://g.page/r/CWAETaQW-JixEBE/review",
  consultationHours: "10:00 AM - 9:00 PM IST",
  callingHours: "10:00 AM - 6:00 PM IST",
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/14VHKPY9XWU/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/astrologer_kapil_tyagi?igsh=YzRycDk2N3RlOWVo",
  youtube: "https://youtube.com/@tykapil?si=w2NXTHuStqG6KcTv",
  whatsapp: `https://wa.me/${CONTACT_INFO.phoneClean}`,
  telegram: "#", // Replace with actual URL
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services", hasDropdown: true, dropdownType: "services" },
  { href: "/zodiac/aries/", label: "Zodiac Signs", hasDropdown: true, dropdownType: "zodiac" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/contact/", label: "Book Appointment" },
];

export const SERVICE_NAV_LINKS = [
  { href: "/services/", label: "All Services" },
  { href: "/kundali/", label: "Kundali Making" },
  { href: "/career/", label: "Career & Business" },
  { href: "/mahurat/", label: "Muhurat Advice" },
  { href: "/marriage/", label: "Marriage Matching" },
  { href: "/vastu/", label: "Vastu Shastra" },
  { href: "/numerology/", label: "Numerology" },
  { href: "/gemstones/", label: "Gemstones" },
];

export const ZODIAC_NAV_LINKS = [
  { href: "/zodiac/aries/", label: "Aries" },
  { href: "/zodiac/taurus/", label: "Taurus" },
  { href: "/zodiac/gemini/", label: "Gemini" },
  { href: "/zodiac/cancer/", label: "Cancer" },
  { href: "/zodiac/leo/", label: "Leo" },
  { href: "/zodiac/virgo/", label: "Virgo" },
  { href: "/zodiac/libra/", label: "Libra" },
  { href: "/zodiac/scorpio/", label: "Scorpio" },
  { href: "/zodiac/sagittarius/", label: "Sagittarius" },
  { href: "/zodiac/capricorn/", label: "Capricorn" },
  { href: "/zodiac/aquarius/", label: "Aquarius" },
  { href: "/zodiac/pisces/", label: "Pisces" },
];

export const FOOTER_LINKS = {
  services: [
    { href: "/services/", label: "All Services" },
    { href: "/kundali/", label: "Kundali Making" },
    { href: "/career/", label: "Career & Business" },
    { href: "/mahurat/", label: "Muhurat Advice" },
    { href: "/numerology/", label: "Numerology" },
    { href: "/vastu/", label: "Vastu Shastra" },
    { href: "/gemstones/", label: "Gemstone Consultation" },
  ],
  information: [
    { href: "/about/", label: "About" },
    { href: "/reviews/", label: "Client Reviews" },
    { href: "/contact/", label: "Contact" },
  ],
};
