import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  azure,
  csharp,
  Mc,
  tcs,
  dodgeball,
  metalink,
  racetrack,
  buzzapper,
  airbnb,
  towwerdefence,
  angular,
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
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "C# .Net",
    icon: csharp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Azure",
    icon: azure,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Tata Consultancy Services Ltd",
    icon: tcs,
    iconBg: "#383E56",
    date: "September 2017 - April 2020",
    points: [
      "Developing and maintaining banking applications using Angular, Typescript, HTML, CSS & Bootstrap.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "End to End testing and production support.",
      "Packaging and deploying of code to the relevant platform."
    ],
  },
  {
    title: "Lead Full Stack Developer",
    company_name: "Maistering B.V",
    icon: Mc,
    iconBg: "#E6DEDD",
    date: "June 2021 - Present",
    points: [
      "Lead Developer with full array of responsibilities from planning, designing, developing and testing software.",
      "Web applications developed using Angular, React, C#.Net, SQL and Azure.",
      "Handle complex data pipelines for ETL and create data landing zone.",
      "Code optimizations on both frontend and backend stack.",
      "Participating in code reviews and providing constructive guidance and feedback to developers.",
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
    name: "Prison Dodgeball",
    description:
      "A gaming application built on Unity with Artificial Intelligence. Each player is controlled and coordinated using Finite State Machines.",
    tags: [
      {
        name: "c#",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "artificial-intelligence",
        color: "pink-text-gradient",
      },
    ],
    image: dodgeball,
    source_code_link: "https://github.com/yochitha/prison-dodgeball",
  },
  {
    name: "Metalink",
    description:
      "A fully responsive NFT website built using HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: metalink,
    source_code_link: "https://github.com/yochitha/crypto-app",
  },
  {
    name: "Race Track",
    description:
      "Fuzzy logic game artificial intelligence agent that can race on a procedurally generated track.",
    tags: [
      {
        name: "c#",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "artificial-intelligence",
        color: "pink-text-gradient",
      },
    ],
    image: racetrack,
    source_code_link: "https://github.com/yochitha/race-track",
  },
  {
    name: "Buzzapper",
    description:
      "A fully responsive digital marketing agency website built using HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: buzzapper,
    source_code_link: "https://github.com/yochitha/digital-agency",
  },
  {
    name: "Tower Defence",
    description:
      "Tower defence game built using PyGame module.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
    ],
    image: towwerdefence,
    source_code_link: "https://github.com/yochitha/tower-defence",
  },
  {
    name: "Booking App",
    description:
      "MERN stack booking application for short and long-term homestays and experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/yochitha/booking-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
