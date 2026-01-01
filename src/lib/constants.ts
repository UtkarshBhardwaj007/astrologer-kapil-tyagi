// Helper function to get correct image path with basePath
export const getImagePath = (path: string): string => {
  const basePath = process.env.NODE_ENV === "production" ? "/astrologer-kapil-tyagi" : "";
  return `${basePath}${path}`;
};

// Statistics Constants (centralized for easy updates)
export const STATS = {
  yearsOfExperience: 25,
  totalConsultations: 200000,
  averageRating: 4.9,
  totalReviews: 150,
  countriesServed: 30,
};

export const SITE_CONFIG = {
  name: "Astrologer Kapil Tyagi",
  title: "Astrologer Kapil Tyagi",
  tagline: "Vedic Astrology & Spiritual Guidance",
  description: `Renowned Vedic astrologer with over ${STATS.yearsOfExperience} years of experience in astrology, numerology, vastu shastra, and gemstone consultation. Get personalized predictions and spiritual guidance.`,
  keywords: "astrologer, vedic astrology, horoscope, kundali, numerology, vastu, gemstones, rohini delhi",
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
