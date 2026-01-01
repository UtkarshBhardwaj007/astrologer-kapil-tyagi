import { totalReviews, averageRating, yearsOfExperience, totalConsultations, countriesServed } from "./testimonials";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
}

export const services: Service[] = [
  {
    id: "kundali",
    title: "Kundali Making",
    shortDescription: "Comprehensive birth chart creation and life predictions",
    description: "Get a detailed Kundali (birth chart) prepared by expert Vedic astrologers. Understand your life path, strengths, challenges, and opportunities through precise planetary analysis.",
    icon: "ScrollText",
    features: [
      "Complete birth chart preparation",
      "Planetary positions and their effects",
      "Dasha period calculations",
      "Divisional charts (D-9, D-10, etc.)",
      "Health and longevity insights",
      "Relationship compatibility indicators",
    ],
    href: "/kundali/",
  },
  {
    id: "career",
    title: "Career & Business",
    shortDescription: "Professional guidance for career growth and business success",
    description: "Receive expert astrological guidance for your career and business decisions. Understand the best times for job changes, business ventures, investments, and professional growth based on your birth chart.",
    icon: "Briefcase",
    features: [
      "Career path analysis based on birth chart",
      "Best timing for job changes",
      "Business venture compatibility",
      "Partnership compatibility analysis",
      "Financial growth predictions",
      "Remedies for career obstacles",
    ],
    href: "/career/",
  },
  {
    id: "mahurat",
    title: "Muhurat Advice",
    shortDescription: "Auspicious timing for important life events",
    description: "Find the most auspicious time (Muhurat) for important events like marriages, housewarming, business launches, and other significant occasions. Ensure success by starting at the right cosmic moment.",
    icon: "Calendar",
    features: [
      "Marriage muhurat selection",
      "Griha Pravesh (housewarming) timing",
      "Business inauguration muhurat",
      "Vehicle purchase timing",
      "Travel muhurat",
      "Education and exam timing",
    ],
    href: "/mahurat/",
  },
  {
    id: "horoscope",
    title: "Horoscope Reading",
    shortDescription: "Daily, weekly, monthly, and yearly predictions",
    description: "Receive personalized horoscope readings tailored to your zodiac sign. Understand the cosmic influences affecting your life and make informed decisions about career, relationships, and personal growth.",
    icon: "Star",
    features: [
      "Personalized daily predictions",
      "Weekly and monthly forecasts",
      "Yearly overview",
      "Lucky days and numbers",
      "Favorable times for important decisions",
    ],
    href: "/zodiac/aries/",
  },
  {
    id: "matchmaking",
    title: "Marriage Compatibility",
    shortDescription: "Kundali matching for matrimonial purposes",
    description: "Ensure a harmonious and prosperous married life with our comprehensive Kundali matching service. We analyze both horoscopes to determine compatibility across various life aspects.",
    icon: "Heart",
    features: [
      "Gun Milan (36 points matching)",
      "Manglik Dosha analysis",
      "Nadi Dosha check",
      "Overall compatibility score",
      "Remedies for doshas if present",
    ],
    href: "/marriage/",
  },
  {
    id: "vastu",
    title: "Vastu Consultation",
    shortDescription: "Home and office Vastu analysis and remedies",
    description: "Create positive energy flow in your living and working spaces with expert Vastu Shastra consultation. We provide practical remedies to correct Vastu defects without major structural changes.",
    icon: "Home",
    features: [
      "Complete property analysis",
      "Room-by-room recommendations",
      "Office Vastu for business success",
      "Practical remedies without demolition",
      "New construction guidelines",
    ],
    href: "/vastu/",
  },
  {
    id: "numerology",
    title: "Numerology",
    shortDescription: "Name analysis and lucky number consultation",
    description: "Discover the power of numbers in your life. Our numerology services help you understand your life path number, choose auspicious names, and identify lucky numbers for important decisions.",
    icon: "Hash",
    features: [
      "Life path number analysis",
      "Name numerology",
      "Business name consultation",
      "Lucky numbers identification",
      "Mobile number selection",
    ],
    href: "/numerology/",
  },
  {
    id: "gemstones",
    title: "Gemstone Recommendation",
    shortDescription: "Personalized gemstone suggestions based on your chart",
    description: "Harness the power of precious and semi-precious gemstones to strengthen favorable planets and mitigate malefic effects. Get personalized recommendations based on your birth chart.",
    icon: "Gem",
    features: [
      "Birth chart based recommendations",
      "Gemstone quality guidance",
      "Wearing instructions and mantras",
      "Metal and finger selection",
      "Energization rituals",
    ],
    href: "/gemstones/",
  },
  {
    id: "rudraksha",
    title: "Rudraksha Consultation",
    shortDescription: "Sacred Rudraksha beads for spiritual growth",
    description: "Experience the divine blessings of Rudraksha beads. We help you select the right Rudraksha based on your planetary positions and spiritual goals.",
    icon: "Circle",
    features: [
      "Mukhi selection guidance",
      "Authenticity verification",
      "Wearing and maintenance instructions",
      "Energization process",
      "Combination recommendations",
    ],
    href: "/rudraksha/",
  },
  {
    id: "puja",
    title: "Puja & Remedies",
    shortDescription: "Customized puja services and astrological remedies",
    description: "Strengthen your planetary positions and overcome obstacles through powerful Vedic pujas and remedies. We provide guidance for various rituals based on your specific needs.",
    icon: "Flame",
    features: [
      "Planetary pujas",
      "Dosha remedies",
      "Festival-specific rituals",
      "Mantra recommendations",
      "Donation and charity guidance",
    ],
    href: "/puja/",
  },
];

export const serviceHighlights = [
  {
    number: `${yearsOfExperience}+`,
    label: "Years Experience",
    labelKey: "yearsExperience",
  },
  {
    number: `${totalConsultations.toLocaleString()}+`,
    label: "Consultations",
    labelKey: "consultations",
  },
  {
    number: `${countriesServed}+`,
    label: "Countries Served",
    labelKey: "countriesServed",
  },
  {
    number: String(averageRating),
    label: "Average Rating",
    labelKey: "averageRating",
  },
];
