export const content = {
  name: "Mohamed Ali Atouhami",
  shortName: "Atouhami",
  role: "Full-stack developer",
  location: "Morocco",
  summary: "I build web products from the interface to the database.",
  bio: "I'm a Full Stack Web Developer with a background in Computer Science and hands-on experience building web applications. I enjoy turning ideas into practical digital solutions, from intuitive interfaces to robust backend systems.",
  about: {
    eyebrow: "Introduction",
    title: "About me",
    cards: [
      {
        title: "Languages",
        description: "JavaScript, React, Next.js, Vue, Node.js, Express, PHP, Laravel.",
      },
      {
        title: "Education",
        description: "Génie informatique, ENSA.",
      },
      {
        title: "Projects",
        description: "More than four products.",
      },
    ],
    toolsTitle: "Tools I use",
    tools: ["VS Code", "GitHub", "Postman", "PostgreSQL", "Docker"],
  },
  portrait: {
    src: "/images/portrait.jpg",
    alt: "Mohamed Ali Atouhami",
  },
  aboutImage: {
    src: "/images/about.jpeg",
    alt: "Mohamed Ali Atouhami",
  },
  cv: "/mohamed ali's CV.pdf",
  contactLead: {
    eyebrow: "Connect with me",
    title: "Get in touch",
    text: "I would love to hear from you. If you have a question or a project in mind, use the form below.",
  },
  contact: {
    email: "mohamedaliatouhami2002@gmail.com",
    whatsapp: "+212 707 582 164",
    whatsappHref: "https://wa.me/212707582164",
    github: "mohamed-ali-atouhami",
    githubHref: "https://github.com/mohamed-ali-atouhami",
    linkedin: "mohamed-ali-atouhami",
    linkedinHref: "https://linkedin.com/in/mohamed-ali-atouhami",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    {
      title: "Frontend",
      description: "Interfaces with React, Next.js, and Vue.",
    },
    {
      title: "Backend",
      description: "APIs and application logic with Node, Laravel, and Spring Boot.",
    },
    {
      title: "Data",
      description: "MySQL, PostgreSQL, and MongoDB, from the schema to the queries.",
    },
  ],
  projects: [
    {
      title: "MiniMarket",
      description: "Shop stock and sales.",
      image: "/images/minimarket.png",
      imageAlt: "MiniMarket stock dashboard",
    },
    {
      title: "Gestion de Stock",
      description: "Stock and deliveries.",
      image: "/images/stock.png",
      imageAlt: "Stock management dashboard",
    },
    {
      title: "Transport",
      description: "Trips and tracking.",
      image: "/images/transport.png",
      imageAlt: "Transport management dashboard",
    },
    {
      title: "School",
      description: "School records.",
      image: "/images/school.jpg",
      imageAlt: "School management illustration",
    },
  ] satisfies readonly Project[],
} as const

export type Project = {
  title: string
  description: string
  image: string
  imageAlt: string
  href?: string
}
