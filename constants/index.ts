import { Users, Heart, Church } from "lucide-react";

// ─── Navigation ──────────────────────────────────────────────────────────────

/** Desktop nav bar links (shorter list) */
export const navlinks = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Give", href: "/give" },
];

/** Full site navigation used in the mobile menu */
export const navGroups = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Activities", href: "/activities" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
];

// ─── Home – Programs Section ──────────────────────────────────────────────────

export const programs = [
  {
    title: "Career Growth",
    description: "Mentorship and real talk about what's next.",
    image: "/assets/career.jpg",
    href: "/activities",
  },
  {
    title: "Pastoral Care",
    description: "One-on-one support, prayer, a safe space.",
    image: "/assets/pastoral.JPG",
    href: "/activities",
  },
  {
    title: "Games & Sports",
    description: "Football, tournaments, real friendships.",
    image: "/assets/teens.JPG",
    href: "/activities",
  },
];

// ─── Home – Gallery Section ───────────────────────────────────────────────────

export const previewImages = [
  {
    id: 1,
    src: "/assets/gallery1.JPG",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: "/assets/gallery2.JPG",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 3,
    src: "/assets/teens3.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    src: "/assets/gallery4.JPG",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    src: "/assets/gallery5.JPG",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 6,
    src: "/assets/service.jpeg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 7,
    src: "/assets/teens4.jpeg",
    className: "md:col-span-1 md:row-span-2",
  },
];

/** Full gallery preview items (used on gallery page) */
export const photos = [
  {
    id: 1,
    src: "/assets/gallery1.JPG",
    title: "Sunday Service",
    description: "",
    href: "/gallery",
  },
  {
    title: "Youth Camp",
    description: "",
    image: "/assets/gallery2.JPG",
    href: "/gallery",
  },
  {
    title: "Baptism Day",
    description: "",
    image: "/assets/gallery3.JPG",
    href: "/gallery",
  },
  {
    title: "Games Night",
    description: "",
    image: "/assets/gallery4.JPG",
    href: "/gallery",
  },
];

// ─── Home – Testimonials Section ─────────────────────────────────────────────

export const stories = [
  {
    id: 1,
    content:
      "Joining Mustard Seed Teens completely changed the way I saw myself. I found people who encouraged me, prayed with me, and helped me discover that I could actually use my gifts for something meaningful.",
    author: "Precious O.",
    role: "Mustard Seed Teen",
  },
  {
    id: 2,
    content:
      "I came because of the activities, but I stayed because of the people. I have grown spiritually and personally in ways I never expected.",
    author: "Destiny N.",
    role: "Mustard Seed Teen",
  },
  {
    id: 3,
    content:
      "I used to be very quiet and afraid to take responsibility. Being given opportunities to serve helped me become more confident and discover leadership in myself.",
    author: "Victor O.",
    role: "Media Personnel",
  },
];

// ─── Home – Announcements Section ────────────────────────────────────────────

export const announcements = [
  {
    id: 1,
    type: "PROGRAM",
    title: "Sunday Service",
    description:
      "Fellowship with us, worship and discover who God has called you to become.",
    image: "/assets/flyer.webp",
    date: "28 AUG 2026",
    href: "/events/teens-service",
    featured: true,
  },
  {
    id: 2,
    type: "MENTORSHIP",
    title: "Mentorship Class",
    description:
      "A space to learn, ask questions, build relationships and grow with people who can help you navigate your journey.",
    image: "/assets/mentorship.jpg",
    date: "21 AUG 2026",
    href: "/announcements/mentorship-class",
    featured: false,
  },
  {
    id: 3,
    type: "COMMUNITY",
    title: "Join Our WhatsApp Group",
    description: "Stay connected with everything happening at Mustard Seed.",
    image: "/assets/gallery1.JPG",
    date: "14 AUG 2026",
    href: "/get-involved/join",
    featured: false,
  },
  {
    id: 4,
    type: "SERVING",
    title: "Serve With Your Gifts",
    description:
      "Music, media, photography, technology, hospitality and more. There is a place for your gifts.",
    image: "/assets/teens-serving.jpg",
    date: "08 AUG 2026",
    href: "/get-involved/skills",
    featured: false,
  },
];

// ─── Home – Events Preview Section ───────────────────────────────────────────

/**
 * Upcoming events shown in the home page preview strip.
 * Uses pre-split date/month strings for direct display — see `events` for the
 * full event data used on the Events and Event Detail pages.
 */
export const eventPreviews = [
  {
    id: 1,
    date: "07",
    month: "SEP",
    title: "Teen Service",
    description:
      "A time of worship, the Word, friendship and growing together in Christ.",
    time: "10:00 AM",
    location: "Assemblies of God Church, Ikeja",
    href: "/events/teen-service",
  },
  {
    id: 2,
    date: "14",
    month: "SEP",
    title: "Bible Study",
    description:
      "Come with your questions as we explore Scripture and grow deeper in our faith.",
    time: "10:00 AM",
    location: "Assemblies of God Church, Ikeja",
    href: "/events/bible-study",
  },
  {
    id: 3,
    date: "05",
    month: "OCT",
    title: "Worship Night",
    description:
      "An evening set apart for worship, prayer and encountering God together.",
    time: "5:00 PM",
    location: "Assemblies of God Church, Ikeja",
    href: "/events/worship-night",
  },
];

// ─── Events Page / Event Detail Page ─────────────────────────────────────────

/** Full event data used on the Events listing and Event detail pages */
export const events = [
  {
    id: "1",
    title: "Sunday Service",
    slug: "sunday-service",
    description:
      "A time for worship, the Word, friendship and growing together in Christ.",
    date: "2026-09-11",
    time: "08:00 AM",
    location: "Assemblies of God Church, Ikeja",
    image: "/assets/flyer.webp",
    category: "Sunday Service",
    details: `
      Our Sunday Service is a place where teenagers can encounter God,
      build genuine friendships and grow in their understanding of Scripture.

      Come expecting worship, practical teaching, prayer, conversations and
      time with the Mustard Seed family.
    `,
  },
  {
    id: "2",
    title: "Bible Study",
    slug: "bible-study",
    description:
      "Come with your questions. Let's explore Scripture and grow deeper in faith together.",
    date: "2026-09-14",
    time: "10:00 AM",
    location: "Assemblies of God Church, Ikeja",
    image: "/assets/teens2.jpeg",
    category: "Bible Study",
    details: `
      Bible Study is an opportunity to slow down, ask honest questions and
      discover what Scripture actually says.

      You don't need to know everything before you come. Bring your Bible,
      your questions and your curiosity.
    `,
  },
  {
    id: "3",
    title: "Worship Night",
    slug: "worship-night",
    description:
      "An evening set apart for worship, prayer and encountering God together.",
    date: "2026-10-05",
    time: "5:00 PM",
    location: "Assemblies of God Church, Ikeja",
    image: "/assets/kenocordinate.jpg",
    category: "Worship",
    details: `
      An evening dedicated to worship, prayer and seeking God together.

      Come with an open heart as we create space to worship Jesus, pray for
      one another and believe God for what He wants to do in our generation.
    `,
  },
];

// ─── About / Leadership ───────────────────────────────────────────────────────

export const coordinators = [
  {
    name: "Pst. Oreva Ogbor",
    role: "Lead Pastor / AG Ikeja Sectional Teens Co-ordinator",
    image: "/assets/pastor-oreva.jpg",
  },
  {
    name: "Mr Keno Erijo",
    role: "Lead Teens Co-ordinator",
    image: "/assets/mrkeno.jpg",
  },
  {
    name: "Mr Sunday Adagbon",
    role: "Teens Co-ordinator",
    image: "/assets/sunday.jpg",
  },
  {
    name: "Deacon Patrick Ajah",
    role: "AG Ikeja Senior Teens Co-ordinator",
    image: "/assets/orbit2.jpg",
  },
];

// ─── Join Page ────────────────────────────────────────────────────────────────

export const values = [
  {
    icon: Users,
    title: "Community",
    text: "Real friendships with people who are walking the same journey.",
  },
  {
    icon: Heart,
    title: "Growth",
    text: "A place where you can ask questions, learn and grow in your faith.",
  },
  {
    icon: Church,
    title: "Belonging",
    text: "Not just someone who attends. Someone who has a place here.",
  },
];

// ─── Give Page ────────────────────────────────────────────────────────────────

export const bankAccounts = [
  {
    bank: "AG Mortage Bank Plc",
    accountName: "THE MUSTARD SEED (AG TEENS CHURCH IKEJA)",
    accountNumber: "0000498238",
  },
  {
    bank: "Access Bank",
    accountName: "Mustard Seed Teens",
    accountNumber: "0123456789",
  },
];

export const journeyPeople = [
  {
    src: "/assets/orbit3.jpg",
    alt: "Mustard Seed Church pioneer",
    position: "top-[2%] left-[3%]",
    size: "w-28 h-36 md:w-32 md:h-40",
    rotate: "-rotate-6",
    delay: 0,
  },
  {
    src: "/assets/orbit4.jpg",
    alt: "Mustard Seed Church pioneer",
    position: "top-[4%] right-[8%]",
    size: "w-28 h-36 md:w-32 md:h-40",
    rotate: "rotate-5",
    delay: 0.8,
  },
  {
    src: "/assets/orbit5.jpg",
    alt: "Mustard Seed Church pioneer",
    position: "bottom-[8%] left-[1%]",
    size: "w-28 h-36 md:w-32 md:h-40",
    rotate: "rotate-4",
    delay: 1.4,
  },
  {
    src: "/assets/orbit6.jpg",
    alt: "Mustard Seed Church pioneer",
    position: "bottom-[2%] right-[3%]",
    size: "w-28 h-36 md:w-32 md:h-40",
    rotate: "-rotate-5",
    delay: 0.5,
  },
  {
    src: "/assets/orbit7.jpg",
    alt: "Mustard Seed Church pioneer",
    position: "top-[35%] left-[-2%]",
    size: "w-24 h-32 md:w-28 md:h-36",
    rotate: "-rotate-3",
    delay: 1.8,
  },
  {
    src: "/assets/orbit8.jpg",
    alt: "Mustard Seed Church pioneer",
    position: "top-[40%] right-[-1%]",
    size: "w-24 h-32 md:w-28 md:h-36",
    rotate: "rotate-6",
    delay: 1.1,
  },
];
