import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  kafka,
  reactjs,
  kubernetes,
  next,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  prompt,
  summarize,
  evara,
  threejs,
  ssmptc,
  brototype,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Apache Kafka ",
    icon: kafka,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "Brototype",
    icon: brototype,
    iconBg: "#383E56",
    date: "Sep 2022 - Present",
    points: [
      "Developing and maintaining web applications using MERN Stack and other related technologies.",
    ],
  },
  {
    title: "Electronics Engineering",
    company_name: "SSM Polytechnic",
    icon: ssmptc,
    iconBg: "#E6DEDD",
    date: "Mar 2019 - Jun 2022",
    points: [
      "Developing and maintaining iot device using Arduino c and other related technologies.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Prompt sharing",
    description:
      "Our cutting-edge platform allows users to share AI prompts, generating accurate results for the community. With hashtagged posts and OAuth 2.0 authentication, it's efficient and secure. A professional project driving AI progress.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: prompt,
    source_code_link: "https://github.com/fahizp/AI-Prompt-O-Matic",
    live_link: "https://ai-prompt-o-matic.fahiz.in/",
  },
  {
    name: "E-Commerce",
    description:
      "This e-commerce website exclusively focused on selling dresses. Browse through an extensive collection of stylish options, enjoy secure transactions, and access dedicated customer support for a seamless shopping experience.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "ejs",
        color: "pink-text-gradient",
      },
    ],
    image: evara,
    source_code_link: "https://github.com/fahizp/PROJECT-E-C0MMERCE",
    live_link: "https://evara.tk/",
  },
  {
    name: "Summarize Articles",
    description:
      "The Article Summarizer project uses RapidAPI's Open API. Condense lengthy articles into concise summaries effortlessly, saving time and providing valuable insights. Simplify your reading and research with this innovative tool.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient",
      },
    ],
    image: summarize,
    source_code_link:
      "https://github.com/fahizp/AI_ARTICLE-SUMMARIZER-RAPIDAPI",
    live_link: "https://incredible-muffin-58dfca.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
