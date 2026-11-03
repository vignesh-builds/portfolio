// =========================================================
// All portfolio content lives here.
// To update the site, edit this file. No need to touch components.
// =========================================================

export const profile = {
  name: "S. Vignesh",
  firstName: "Vignesh",
  location: "Thiruvarur · Open to relocate anywhere & remote",
  role: "Java Full Stack Developer",
  email: "vignesh.builds@gmail.com",
  emailLink:
    "https://mail.google.com/mail/?view=cm&fs=1&to=vignesh.builds@gmail.com",
  resume: "/Resume.pdf",
  github: {
    label: "github.com/vignesh-builds",
    url: "https://github.com/vignesh-builds",
  },
  linkedin: {
    label: "linkedin.com/in/vignesh1926",
    url: "https://www.linkedin.com/in/vignesh1926/",
  },
  leetcode: {
    label: "leetcode.com/u/cfJ4qQ138F",
    url: "https://leetcode.com/u/cfJ4qQ138F",
  },
};

// Quick-scan numbers shown right under the hero
export const stats = [
  { value: "140+", label: "LeetCode problems solved" },
  { value: "2", label: "Full-stack apps built" },
  { value: "1st", label: "Place in coding and debugging contests" },
  { value: "2027", label: "B.E. Computer Science graduate" },
];

export const about = [
  "I'm a final-year Computer Science Engineering student focused on Java backend and full-stack development.",
  "I use Java and Spring Boot to build REST APIs, backend services and database-driven applications, and React to build responsive interfaces on top of them.",
  "Right now I'm strengthening Spring Security, PostgreSQL, REST API design and problem solving by building and deploying practical applications.",
];

export const strengths = [
  "Quick learner",
  "Strong problem solving",
  "Team player",
  "Eager to learn new technologies",
];

export const skills = [
  {
    group: "Backend",
    icon: "coffee",
    items: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "JPA / Hibernate",
    ],
  },
  {
    group: "Frontend",
    icon: "layout",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  { group: "Database", icon: "db", items: ["PostgreSQL", "MySQL", "SQL"] },
  {
    group: "Tools & Others",
    icon: "tools",
    items: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "Maven", "DSA"],
  },
];

export const projects = [
  {
    title: "CarePoint",
    image: "/carepoint.jpg", // Prepended leading slash for path consistency
    type: "Personal project",
    kind: "hospital",
    tone: "blue",
    flow: ["React", "Spring Boot REST API", "PostgreSQL"],
    summary:
      "A full-stack healthcare portal streamlining patient onboarding, doctor scheduling, and appointment lifecycle management.",
    points: [
      "Engineered robust CRUD REST endpoints with Spring Boot to handle medical records, triage, and doctor availability.",
      "Architected normalized PostgreSQL schema optimizing relation integrity between patients, practitioners, and visit logs.",
      "Developed a responsive React interface featuring real-time form validation and intuitive booking workflows.",
      "Validated comprehensive request/response payloads, edge cases, and status codes via Postman test collections.",
    ],
    stack: ["Java", "Spring Boot", "React", "PostgreSQL", "REST APIs", "Maven"],
    links: [
      {
        label: "View live demo",
        url: "https://hospital-frontend-7jfj.onrender.com",
        primary: true,
      },
      {
        label: "View code on GitHub",
        url: "https://github.com/vignesh-builds/hospital-management",
      },
    ],
  },
  {
    title: "ShopEasy",
    image: "/shopeasy.jpg",
    type: "Personal project",
    kind: "shop",
    tone: "sun",
    flow: ["React", "Spring Boot REST API", "PostgreSQL"],
    summary:
      "A full-stack e-commerce platform supporting product discovery, cart state persistence, secure checkout, and order fulfillment.",
    points: [
      "Developed modular REST APIs with Spring Boot to handle catalog filtering, cart operations, and transaction flows.",
      "Implemented role-based access control (RBAC) and route protection using Spring Security and JWT authentication.",
      "Modeled relational database schemas in PostgreSQL with indexes on high-frequency product and order queries.",
      "Built a modern React storefront incorporating client-side state management for cart synchronization and responsive checkout.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "PostgreSQL",
      "Maven",
    ],
    links: [
      {
        label: "View live demo",
        url: "https://shopeasy-frontend-wvvl.onrender.com",
        primary: true,
      },
      {
        label: "View code on GitHub",
        url: "https://github.com/vignesh-builds/ShopEasy",
      },
    ],
  },
];

export const education = [
  {
    period: "2023 – 2027",
    title: "B.E. Computer Science and Engineering",
    place: "Anjalai Ammal Mahalingam Engineering College",
  },
  {
    title: "Higher Secondary Education",
    place: "V S Boys Higher Secondary School, Thiruvarur",
    note: "",
  },
];

export const achievements = [
  {
    title: "Problem solving on LeetCode",
    text: "Solved 140+ problems covering arrays, strings, HashMap, stack and queue.",
    link: { label: "View LeetCode profile", url: profile.leetcode.url },
  },
  {
    title: "Technical symposium winner",
    text: "Won first place in the Debugging and Coding competitions, with prize money and certificates.",
  },
  {
    title: "NCC",
    text: "Took part in NCC during school, building discipline, teamwork and leadership.",
  },
  {
    title: "Typewriting examinations",
    text: "Junior level : First Class,  Senior level : Distinction with First Class.",
  },
];
