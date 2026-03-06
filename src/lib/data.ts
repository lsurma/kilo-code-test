export type Course = {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  category: string;
  level: "Początkujący" | "Średniozaawansowany" | "Zaawansowany";
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  tags: string[];
  featured?: boolean;
};

export const courses: Course[] = [
  {
    id: "react-fundamentals",
    title: "React – Podstawy i Hooks",
    description: "Naucz się budować nowoczesne interfejsy użytkownika z React. Poznaj komponenty, state, props, hooks i wiele więcej.",
    instructor: "Anna Kowalska",
    instructorAvatar: "AK",
    category: "Programowanie",
    level: "Początkujący",
    duration: "12h 30min",
    lessons: 48,
    students: 3420,
    rating: 4.8,
    reviews: 892,
    price: 149,
    image: "bg-gradient-to-br from-blue-400 to-blue-600",
    tags: ["React", "JavaScript", "Frontend"],
    featured: true,
  },
  {
    id: "python-data-science",
    title: "Python dla Data Science",
    description: "Kompleksowy kurs analizy danych z Pythonem. Pandas, NumPy, Matplotlib i podstawy Machine Learning.",
    instructor: "Piotr Nowak",
    instructorAvatar: "PN",
    category: "Data Science",
    level: "Średniozaawansowany",
    duration: "18h 45min",
    lessons: 72,
    students: 5180,
    rating: 4.9,
    reviews: 1240,
    price: 199,
    image: "bg-gradient-to-br from-yellow-400 to-orange-500",
    tags: ["Python", "Data Science", "ML"],
    featured: true,
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design od podstaw",
    description: "Projektuj piękne i użyteczne interfejsy. Figma, prototypowanie, badania użytkowników i design thinking.",
    instructor: "Marta Wiśniewska",
    instructorAvatar: "MW",
    category: "Design",
    level: "Początkujący",
    duration: "10h 15min",
    lessons: 38,
    students: 2890,
    rating: 4.7,
    reviews: 634,
    price: 129,
    image: "bg-gradient-to-br from-pink-400 to-purple-500",
    tags: ["Figma", "UX", "Design"],
    featured: true,
  },
  {
    id: "nodejs-backend",
    title: "Node.js i Express – Backend",
    description: "Twórz skalowalne API REST z Node.js. Autentykacja JWT, bazy danych, middleware i deployment.",
    instructor: "Tomasz Zielński",
    instructorAvatar: "TZ",
    category: "Programowanie",
    level: "Średniozaawansowany",
    duration: "15h 20min",
    lessons: 58,
    students: 2110,
    rating: 4.6,
    reviews: 478,
    price: 169,
    image: "bg-gradient-to-br from-green-400 to-teal-600",
    tags: ["Node.js", "Express", "Backend"],
  },
  {
    id: "digital-marketing",
    title: "Marketing Cyfrowy 2024",
    description: "SEO, SEM, social media marketing, email marketing i analityka. Zdobądź klientów w internecie.",
    instructor: "Karolina Dąbrowska",
    instructorAvatar: "KD",
    category: "Marketing",
    level: "Początkujący",
    duration: "8h 0min",
    lessons: 32,
    students: 4560,
    rating: 4.5,
    reviews: 1020,
    price: 99,
    image: "bg-gradient-to-br from-red-400 to-rose-600",
    tags: ["SEO", "Social Media", "Marketing"],
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Practitioner",
    description: "Przygotowanie do certyfikatu AWS. Usługi chmurowe, architektury, bezpieczeństwo i koszty.",
    instructor: "Marek Lewandowski",
    instructorAvatar: "ML",
    category: "Cloud",
    level: "Zaawansowany",
    duration: "22h 10min",
    lessons: 85,
    students: 1890,
    rating: 4.8,
    reviews: 412,
    price: 249,
    image: "bg-gradient-to-br from-orange-400 to-amber-600",
    tags: ["AWS", "Cloud", "DevOps"],
  },
];

export const categories = [
  { name: "Programowanie", count: 142, icon: "💻" },
  { name: "Data Science", count: 89, icon: "📊" },
  { name: "Design", count: 67, icon: "🎨" },
  { name: "Marketing", count: 54, icon: "📣" },
  { name: "Cloud", count: 38, icon: "☁️" },
  { name: "Biznes", count: 91, icon: "💼" },
];

export const stats = [
  { label: "Studentów", value: "50,000+" },
  { label: "Kursów", value: "500+" },
  { label: "Instruktorów", value: "120+" },
  { label: "Certyfikatów wydanych", value: "30,000+" },
];
