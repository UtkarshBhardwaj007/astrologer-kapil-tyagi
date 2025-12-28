export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  date: string;
  source: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Udit",
    rating: 4.5,
    review: "He is a very good astrologer and gives practical solutions. If you are facing any problems, please visit at least once. His guidance has been truly helpful in navigating through difficult times.",
    date: "November 2019",
    source: "Justdial",
  },
  {
    id: "2",
    name: "Yashika Maheshwari",
    rating: 4.5,
    review: "Kapil Tyagi ji is a very good astrologer. His predictions are accurate and the remedies he suggests are practical and easy to follow. Highly recommended for anyone seeking astrological guidance.",
    date: "June 2020",
    source: "Justdial",
  },
  {
    id: "3",
    name: "Mohit Tomer",
    rating: 5,
    review: "Excellent experience with Kapil Tyagi ji. His knowledge of Vedic astrology is impressive and his readings are very insightful. The consultation was worth every moment.",
    date: "November 2024",
    source: "Justdial",
  },
  {
    id: "4",
    name: "Neeraj Sharma",
    rating: 5,
    review: "I have been consulting Kapil Tyagi ji for many years now. His predictions have always been accurate and his remedies have helped me overcome many obstacles in life. A true expert in Vedic astrology.",
    date: "February 2017",
    source: "Justdial",
  },
  {
    id: "5",
    name: "ANU",
    rating: 5,
    review: "Very knowledgeable and professional astrologer. The consultation was detailed and the guidance provided was very helpful. I would definitely recommend Kapil Tyagi ji to anyone looking for astrological advice.",
    date: "December 2021",
    source: "Justdial",
  },
  {
    id: "6",
    name: "JAGRIT",
    rating: 5,
    review: "Outstanding service and accurate predictions. Kapil Tyagi ji takes time to explain everything in detail and provides practical solutions. His expertise in gemstones and rudraksha is exceptional.",
    date: "June 2018",
    source: "Justdial",
  },
];

// Re-export statistics from centralized constants
import { STATS } from "@/lib/constants";
export const { averageRating, totalReviews, yearsOfExperience, totalConsultations } = STATS;

