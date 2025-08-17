export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Sebastian Su",
  jobDescription: "Software Engineer",
  about: `I'm a full-stack engineer with expertise in distributed systems and a passion for AI-driven, data-powered solutions. I love exploring system design, business logic, and data flows to uncover new ways technology can optimize performance and efficiency at scale.
  `,

  experience: [
    {
      name: "Microsoft",
      location: "Mountain View, CA",
      startDate: "Mar 2022",
      endDate: "Current",
      description: [
        "- Built APIs and infrastructure for Copilot and Teams, working on large-scale systems requiring high reliability",
        "- Raised critical API reliability to 99.97% through system optimization and monitoring improvements",
        "- Led vendor teams to fully automate testing pipelines, boosting code quality and developer velocity",
        "- Carried global on-call responsibilities, solving high-priority incidents for Fortune 500 customers across eight regions",
        "- Designed systems for scale, resilience, and user trust in productivity applications",
      ],
    },

    {
      name: "Michaels",
      location: "San Jose, CA",
      startDate: "Oct 2020",
      endDate: "Mar 2022",
      description: [
        "- Led transformation from legacy e-commerce system to modern, scalable platform",
        "- Built backend authentication flows, in-app messaging, and secure user management with JWT and Spring Boot",
        "- Created interactive dashboards and management tools using React and Redux",
        "- Delivered end-to-end ownership across the full stack, from API design to user-facing features",
      ],
    },

    {
      name: "Qcompass Voyage Limited (Qeeq.com)",
      location: "Hong Kong",
      startDate: "Jan 2018",
      endDate: "Aug 2019",
      description: [
        "- Built analytics dashboards used daily by 200+ employees across product, marketing, and finance teams",
        "- Optimized large-scale data pipelines to handle millions of data points efficiently",
        "- Enabled smarter pricing and operational strategies through data insights",
        "- Operated as both full-stack engineer and data analyst in fast-growing car rental startup (160+ countries)",
      ],
    },
  ],

  education: [
    {
      name: "University of California, Berkeley",
      location: "Berkeley, CA",
      startDate: "Fall 2015",
      endDate: "Fall 2019",
      description: [
        "B.S. Computer Science",
      ],
    },
  ],

  skills: [
    {
      category: "Programming",
      items: ["Java", "Python", "JavaScript", "HTML", "CSS", "Typescript", "Kotlin", "C#"]
    },
    {
      category: "Tech Frameworks",
      items: ["Redis", "Sprint Boot", "MySQL", "MongoDB", "Kafka", "Elastic Search", "Jmeter", "React.js Redux", "Docker", "AOP", "DynamoDB", "JWT", "API Gateway", "Flink", "n8n", "Playwright"]
    },
    {
      category: "Data Science skills",
      items: ["Regression", "AB Testing", "Pandas", "Power BI", "Tableau", "Google Analytics"]
    }
  ],

  socialMedia: {
    facebook: "",
    twitter: "",
    github: "https://github.com/sebastianzsu",
    email: "mailto:sebzsu1299@gmail.com",
    linkedin: "https://www.linkedin.com/in/sebastian-su-1750581b6/",
  },

  projects: [
    {
      title: "Custom Macros for Dynamics",
      isFeatured: true,
      thumbnail: "/assets/images/astro-portfolio.png",
      githubUrl: "",
      liveUrl: "",
      description: "Created a feature that lets customers write and run custom JavaScript inside Dynamics to automate repetitive workflows. This became a key enabler for migrating enterprise clients from outdated systems to a modern SaaS platform.",
      year: "2024",
    },
    {
      title: "Agent Diagnostic Tool",
      isFeatured: true,
      thumbnail: "/assets/images/astro-portfolio.png",
      githubUrl: "",
      liveUrl: "",
      description: "Built a self-service diagnostic system inside Dynamics 365 that empowered support agents to troubleshoot their own environment issues. By running pre-defined diagnostic rules and generating detailed reports, agents could resolve problems faster.",
      year: "2023",
    },
    {
      title: "In-App Messaging for Marketplaces",
      isFeatured: true,
      thumbnail: "/assets/images/astro-portfolio.png",
      githubUrl: "",
      liveUrl: "",
      description: "Designed an in-app messaging service with text, image sharing, push notifications, and broadcast messaging capabilities. Integrated with Twilio's APIs to increase engagement and keep conversations flowing across devices.",
      year: "2021",
    },
    {
      title: "Identity & Access Management",
      isFeatured: false,
      thumbnail: "/assets/images/astro-portfolio.png",
      githubUrl: "",
      liveUrl: "",
      description: "Developed a complete role-based access control (RBAC) system with APIs for managing users, roles, and permissions. Included detailed activity logs, multithreaded processing for scale, and email notifications for security alerts.",
      year: "2020",
    },
  ],
};
