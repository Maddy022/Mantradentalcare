// ============================================================
// Dental Clinic — Static Placeholder Data
// Replace with real content or fetch from database
// ============================================================

export const clinicInfo = {
  name: "Mantra Dental Care and Implant Centre",
  branch: "Mavdi Branch",
  tagline: "Your Smile, Our Passion",
  description:
    "Providing exceptional, pain-free dental care at our premier Mavdi Branch in Rajkot. Led by Dr. Chandni Rughani and our expert dental team, we use state-of-the-art technology to deliver lasting, radiant smiles.",
  phone: "+91 94082 04290",
  secondaryPhone: "+91 84018 37974",
  email: "info@mantradentalcare.com",
  address: "Shop No. 133-134, Crystal Heaven Complex, Mavdi-Kankot Road, Mavdi, Rajkot, Gujarat 360004",
  city: "Rajkot",
  state: "Gujarat",
  country: "India",
  postalCode: "360004",
  lat: 22.2618,
  lng: 70.7767,
  openingHours: "Mon–Sat: 9:00 AM – 8:30 PM",
  openingHoursStructured: "Mo-Sa 09:00-20:30",
  yearEstablished: 2012,
  googleBusinessUrl: "https://share.google/A6xeJXLBSpj31GKVy",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mantra+Dental+Care+and+Implant+Centre+Crystal+Heaven+Mavdi+Rajkot",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=Mantra+Dental+Care+and+Implant+Centre+Crystal+Heaven+Complex+Mavdi+Rajkot&t=&z=15&ie=UTF8&iwloc=&output=embed",
  calendlyUrl: "https://calendly.com/mantra-dental",
  socialMedia: {
    facebook: "https://facebook.com/mantradentalcare",
    instagram: "https://instagram.com/mantradentalcare",
    twitter: "https://twitter.com/mantradentalcare",
    youtube: "https://youtube.com/@mantradentalcare",
  },
};

export const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10,000+", label: "Happy Patients" },
  { value: "5.0", label: "Google Rating (133 Reviews)" },
  { value: "24+", label: "Treatments" },
];

export type TreatmentCategory =
  | "general"
  | "restorative"
  | "cosmetic"
  | "orthodontics";

export interface Treatment {
  id: string;
  name: string;
  description: string;
  icon: string; // lucide icon name
  category: TreatmentCategory;
  image?: string;
}

export const treatments: Treatment[] = [
  // General & Preventive
  {
    id: "checkups",
    name: "Dental Checkups & Cleanings",
    description:
      "Comprehensive oral exams and professional cleaning to maintain healthy teeth and gums.",
    icon: "Stethoscope",
    category: "general",
  },
  {
    id: "xrays",
    name: "Digital X-Rays & Diagnostics",
    description:
      "Advanced digital imaging for accurate diagnosis with minimal radiation exposure.",
    icon: "ScanLine",
    category: "general",
  },
  {
    id: "sealants",
    name: "Dental Sealants",
    description:
      "Thin protective coatings applied to chewing surfaces to prevent cavities.",
    icon: "Shield",
    category: "general",
  },
  {
    id: "pediatric",
    name: "Children's Dentistry",
    description:
      "Gentle, fun dental care tailored for kids in a comfortable environment.",
    icon: "Baby",
    category: "general",
  },
  {
    id: "emergency",
    name: "Emergency Dental Care",
    description:
      "Immediate treatment for dental emergencies — toothaches, broken teeth, and trauma.",
    icon: "Siren",
    category: "general",
  },

  // Restorative
  {
    id: "fillings",
    name: "Tooth-Colored Fillings",
    description:
      "Natural-looking composite fillings that blend seamlessly with your teeth.",
    icon: "Paintbrush",
    category: "restorative",
  },
  {
    id: "crowns",
    name: "Dental Crowns & Bridges",
    description:
      "Custom-crafted crowns and bridges to restore damaged or missing teeth.",
    icon: "Crown",
    category: "restorative",
  },
  {
    id: "rootcanal",
    name: "Root Canal Therapy",
    description:
      "Pain-free root canal treatment to save infected teeth and relieve discomfort.",
    icon: "HeartPulse",
    category: "restorative",
  },
  {
    id: "implants",
    name: "Dental Implants",
    description:
      "Permanent tooth replacement with titanium implants for a natural look and feel.",
    icon: "Anchor",
    category: "restorative",
  },
  {
    id: "dentures",
    name: "Dentures & Partials",
    description:
      "Comfortable, well-fitting dentures to restore your smile and chewing ability.",
    icon: "Smile",
    category: "restorative",
  },
  {
    id: "extractions",
    name: "Tooth Extractions",
    description:
      "Safe, gentle tooth removal including wisdom teeth extraction.",
    icon: "Minus",
    category: "restorative",
  },

  // Cosmetic
  {
    id: "whitening",
    name: "Professional Teeth Whitening",
    description:
      "In-office and take-home whitening options for a brighter, more radiant smile.",
    icon: "Sparkles",
    category: "cosmetic",
  },
  {
    id: "veneers",
    name: "Porcelain Veneers",
    description:
      "Ultra-thin porcelain shells to transform the shape, size, and color of your teeth.",
    icon: "Layers",
    category: "cosmetic",
  },
  {
    id: "bonding",
    name: "Dental Bonding",
    description:
      "Quick, affordable repair for chipped, cracked, or discolored teeth.",
    icon: "Puzzle",
    category: "cosmetic",
  },
  {
    id: "makeover",
    name: "Smile Makeovers",
    description:
      "Comprehensive smile transformation combining multiple cosmetic treatments.",
    icon: "Star",
    category: "cosmetic",
  },
  {
    id: "gumcontouring",
    name: "Gum Contouring",
    description:
      "Reshaping the gum line for a more balanced, aesthetically pleasing smile.",
    icon: "Scissors",
    category: "cosmetic",
  },

  // Orthodontics
  {
    id: "invisalign",
    name: "Invisalign / Clear Aligners",
    description:
      "Nearly invisible aligners that straighten teeth without traditional braces.",
    icon: "AlignCenter",
    category: "orthodontics",
  },
  {
    id: "braces",
    name: "Traditional Braces",
    description:
      "Time-tested metal and ceramic braces for effective teeth alignment.",
    icon: "Grid3x3",
    category: "orthodontics",
  },
];

export const treatmentCategories: {
  key: TreatmentCategory;
  label: string;
  description: string;
}[] = [
  {
    key: "general",
    label: "General & Preventive",
    description: "Routine care to keep your smile healthy",
  },
  {
    key: "restorative",
    label: "Restorative",
    description: "Repair and restore damaged teeth",
  },
  {
    key: "cosmetic",
    label: "Cosmetic",
    description: "Enhance the beauty of your smile",
  },
  {
    key: "orthodontics",
    label: "Orthodontics",
    description: "Straighten and align your teeth",
  },
];

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  qualifications: string[];
  experience: string;
  image: string;
}

export const doctors: Doctor[] = [
  {
    id: "dr-chandni-rughani",
    name: "Dr. Chandni Rughani",
    title: "Chief Dental Surgeon & Founder",
    specialty: "Cosmetic Dentistry & Aesthetic Restorations",
    bio: "With over 12 years of clinical excellence, Dr. Chandni Rughani is known for her gentle, patient-first approach. She specializes in pain-free root canals, aesthetic crowns, and complete smile enhancements.",
    qualifications: ["B.D.S. - Dental Surgeon", "Certified in Aesthetic Dentistry", "Fellow in Advanced Endodontics"],
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dr-nilesh-rughani",
    name: "Dr. Nilesh Rughani",
    title: "Senior Implantologist & Dental Surgeon",
    specialty: "Dental Implants & Oral Rehabilitation",
    bio: "Dr. Nilesh Rughani has transformed hundreds of smiles with advanced dental implants and full-mouth rehabilitation. His precision diagnostics and surgical mastery deliver natural, long-lasting results.",
    qualifications: ["B.D.S. - Dental Surgeon", "Fellowship in Oral Implantology", "Certified Implant Specialist"],
    experience: "14+ Years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dr-ananya-gupta",
    name: "Dr. Ananya Gupta",
    title: "Consultant Endodontist",
    specialty: "Microscopic Root Canal Therapy",
    bio: "Specializing in pain-free single-sitting root canal treatments using advanced rotary and microscopic systems.",
    qualifications: ["BDS", "MDS Endodontics & Conservative Dentistry"],
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dr-rajesh-patel",
    name: "Dr. Rajesh Patel",
    title: "Consultant Orthodontist",
    specialty: "Clear Aligners & Braces",
    bio: "Certified clear aligner specialist delivering discreet, comfortable orthodontic corrections for teens and adults.",
    qualifications: ["BDS", "MDS Orthodontics", "Invisalign Certified"],
    experience: "11+ Years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  source: "google" | "manual";
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t-implant",
    name: "Hareshbhai Trivedi",
    rating: 5,
    text: "Got my dental implant treatment done at Mantra Dental Care Mavdi. The procedure was totally painless and done with advanced equipment. Dr. Chandni guided me very well and the new implant tooth feels just like my natural tooth. Very happy with the result.",
    source: "google",
    date: "1 month ago",
  },
  {
    id: "t1",
    name: "Darshan Patel",
    rating: 5,
    text: "Root canal treatment for me done very nicely and I am happy and no pain.",
    source: "google",
    date: "1 month ago",
  },
  {
    id: "t2",
    name: "Hasmukhbhai Vora",
    rating: 5,
    text: "My Complete Denture is done by Dr. Chandni Rughani and I am very happy. I can eat everything and it feels like my real teeth.",
    source: "google",
    date: "3 weeks ago",
  },
  {
    id: "t3",
    name: "Bhavna Ben",
    rating: 5,
    text: "Dr. Mam's nature is very familiar, supportive and perfect advice of taking care after treatment.",
    source: "google",
    date: "2 weeks ago",
  },
  {
    id: "t4",
    name: "Pooja Rathod",
    rating: 5,
    text: "Best dental clinic in Mavdi area. Very clean and hygienic clinic. Dr Chandni gives very good advice.",
    source: "google",
    date: "1 month ago",
  },
  {
    id: "t5",
    name: "Ketan Sheth",
    rating: 5,
    text: "Got dental scaling and cavity filling done. Painless experience and very cooperative staff.",
    source: "google",
    date: "2 months ago",
  },
  {
    id: "t6",
    name: "Meera Jadeja",
    rating: 5,
    text: "Doctor explains everything in detail and charges are reasonable. Good clinic in Crystal Heaven complex.",
    source: "google",
    date: "3 months ago",
  },
  {
    id: "t7",
    name: "Vikram Singh",
    rating: 4,
    text: "Treatment was good and quick. Clinic has modern machines. Satisfied with the service.",
    source: "google",
    date: "2 months ago",
  },
  {
    id: "t8",
    name: "Hardik Dave",
    rating: 4,
    text: "Visited for teeth cleaning. Friendly staff and good hygiene maintained.",
    source: "google",
    date: "3 weeks ago",
  },
  {
    id: "t9",
    name: "Ramesh Solanki",
    rating: 4,
    text: "Very polite doctor. My tooth pain was solved properly. Good dental clinic in Mavdi.",
    source: "google",
    date: "1 month ago",
  },
];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "clinic" | "team" | "before-after";
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80", alt: "Modern clinic reception & patient lounge", category: "clinic" },
  { id: "g2", src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80", alt: "State-of-the-art operatory suite", category: "clinic" },
  { id: "g3", src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80", alt: "Advanced 3D digital imaging diagnostics", category: "clinic" },
  { id: "g4", src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80", alt: "Precision laser & surgical instruments", category: "clinic" },
  { id: "g5", src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80", alt: "Our specialist dental doctors team", category: "team" },
  { id: "g6", src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80", alt: "Dr. Sharma conducting a patient smile design", category: "team" },
  { id: "g7", src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80", alt: "Laser teeth whitening transformation", category: "before-after" },
  { id: "g8", src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80", alt: "Porcelain veneer smile makeover", category: "before-after" },
  { id: "g9", src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80", alt: "Complete full-mouth implant rehabilitation", category: "before-after" },
  { id: "g10", src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80", alt: "Autoclave hospital-grade sterilization suite", category: "clinic" },
  { id: "g11", src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80", alt: "Clinical staff meeting & hygiene briefing", category: "team" },
  { id: "g12", src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80", alt: "Clear aligners orthodontic alignment", category: "before-after" },
];

export const galleryCategories = [
  { key: "all", label: "All Photos" },
  { key: "clinic", label: "Our Clinic" },
  { key: "team", label: "Our Team" },
  { key: "before-after", label: "Before & After" },
] as const;

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What should I expect during my first visit?",
    answer:
      "During your first visit, we'll take digital X-rays, perform a comprehensive oral exam, and discuss your dental history and goals. The appointment typically takes 45-60 minutes. Please bring a valid ID and insurance card if applicable.",
  },
  {
    question: "Do you accept dental insurance?",
    answer:
      "Yes, we accept most major dental insurance plans. Our front desk team will verify your coverage and help you understand your benefits before treatment. We also offer flexible payment plans for uninsured patients.",
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Professional teeth whitening is completely safe when performed by a qualified dentist. We use clinically proven whitening systems that protect your enamel while delivering dramatic results.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend visiting every 6 months for a routine checkup and professional cleaning. However, some patients may need more frequent visits depending on their oral health needs.",
  },
  {
    question: "What payment options do you offer?",
    answer:
      "We accept cash, credit/debit cards, UPI, and offer EMI options through select banks. We also have affordable dental care packages for families.",
  },
  {
    question: "Are dental X-rays safe?",
    answer:
      "Yes, our digital X-rays use up to 90% less radiation than traditional film X-rays. They are safe for all patients, including children and pregnant women (with appropriate shielding).",
  },
];

export const officeHours = [
  { day: "Monday", hours: "9:00 AM – 7:00 PM" },
  { day: "Tuesday", hours: "9:00 AM – 7:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 7:00 PM" },
  { day: "Thursday", hours: "9:00 AM – 7:00 PM" },
  { day: "Friday", hours: "9:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];
