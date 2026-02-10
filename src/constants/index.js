export const myProjects = [
  {
    id: 1,
    title: "Heaven's Door - Fast Food Ordering Website",
    description:
      "Fully functional fast food ordering website with recommendation system, discount coupons and recoverable order bills",
    subDescription: [
    "Developed a scalable Dockerized e-commerce platform using Django and PostgreSQL, featuring a secure session-based shopping cart and seamless Esewa payment gateway integration",
    "Implemented a dynamic coupon system for promotions and automated PDF invoice generation",
    "Enhanced user engagement by building a real-time product recommendation engine using Redis for fast, personalized suggestions",
    "Designed a fully responsive frontend and deployed the multi-container application with Docker Compose, utilizing Gunicorn and Nginx for production-ready performance"
    ],
    href: "https://github.com/Priyansh-A/Food",
    logo: "",
    image: "/assets/projects/fastfood.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 2,
        name: "Django",
        path: "/assets/logos/django.png",
      },
      {
        id: 3,
        name: "Postgresql",
        path: "/assets/logos/postgresql.png",
      },
      {
        id: 4,
        name: "Docker",
        path: "/assets/logos/docker.png",
      },
      {
        id: 5,
        name: "Redis",
        path: "/assets/logos/redis.png",
      },
      {
        id: 6,
        name: "eSewa",
        path: "/assets/logos/esewa.png",
      },
    ],
  },
  {
    id: 2,
    title: "Social Media API",
    description:
      "Fully functional & secure social media API with authentication",
    subDescription: [
    "Developed a secure and scalable social media API using FastAPI", "featuring JWT-based authentication for managing users, posts and likes",
    "Utilized SQLModel for type-safe database interactions and Alembic for version-controlled migrations with PostgreSQL",
    "Engineered a clean, maintainable architecture with full CRUD operations, relational data integrity", 
    "and Docker containerization for streamlined development and deployment"
    ],
    href: "https://github.com/Priyansh-A/api",
    logo: "",
    image: "/assets/projects/fastapi.png",
    tags: [
      {
        id: 1,
        name: "FastAPI",
        path: "/assets/logos/fastapi.png",
      },
      {
        id: 2,
        name: "Postgresql",
        path: "/assets/logos/postgresql.png",
      },
      {
        id: 3,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 4,
        name: "SQLModel",
        path: "/assets/logos/sqlmodel.png",
      },
    ],
  },
  {
    id: 3,
    title: "Learning Management System",
    description:
      "A modern, interactive LMS with real time chat, course management and scalable architecture",
    subDescription: [
    "Developed a scalable, containerized LMS platform with Django featuring real-time chat capabilities via Django Channels and WebSockets.",
    "Designed an intuitive course management system with modular content organization and rich media support.", 
    "Deployed a production-ready architecture using Docker Compose with PostgreSQL, Redis, Gunicorn, Daphne, and Nginx, implementing custom SSL certificates for secure, high-performance educational delivery.",
    ],
    href: "https://github.com/Priyansh-A/E-learning",
    logo: "",
    image: "/assets/projects/learning.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 2,
        name: "Django",
        path: "/assets/logos/django.png",
      },
      {
        id: 3,
        name: "Postgresql",
        path: "/assets/logos/postgresql.png",
      },
      {
        id: 4,
        name: "Docker",
        path: "/assets/logos/docker.png",
      },
    ],
  },
  {
    id: 4,
    title: "E-Commerce Website",
    description:
      "An E-commerce website made in nextjs with diverse catalog and stripe payment gateway",
    subDescription: [
    "Engineered a high-performance e-commerce solution with Next.js, leveraging SSR and static generation for fast page loads and superior search visibility.", 
    "Integrated Stripe payment processing with webhook support for automated order fulfillment.", 
    "Created a scalable product catalog system with intuitive navigation, faceted search, and personalized recommendations.", "Built a complete shopping experience with cart persistence, and responsive design."
    ],
    href: "https://shopey.vercel.app/",
    logo: "",
    image: "/assets/projects/ecomm.png",
    tags: [
      {
        id: 1,
        name: "JS",
        path: "/assets/logos/javascript.png",
      },
      {
        id: 2,
        name: "NextJs",
        path: "/assets/logos/nextjs.png",
      },
      {
        id: 3,
        name: "Tailwind",
        path: "/assets/logos/tailwind.png",
      },
      {
        id: 4,
        name: "Typescript",
        path: "/assets/logos/typescript.png",
      },
    ],
  },
  {
    id: 5,
    title: "3D T-Shirt Customizer",
    description:
      "A fully customizable t-shirt with image insertion and color dynamics",
    subDescription: [
    "Engineered a browser-based 3D apparel design tool with Three.js featuring real-time visualization of customizable T-shirts.", "Developed core functionality for color modification, texture application, and user-uploaded design integration directly onto 3D models.", 
    "Implemented a download system to export personalized creations as high-resolution images, delivering an immersive digital customization experience without requiring specialized software."
    ],
    href:"https://threejs-indol.vercel.app/",
    logo: "",
    image: "/assets/projects/tshirt.png",
    tags: [
      {
        id: 1,
        name: "Javascript",
        path: "/assets/logos/javascript.png",
      },
      {
        id: 2,
        name: "ThreeJs",
        path: "/assets/logos/threejs.png",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.png",
      },
      {
        id: 4,
        name: "CSS",
        path: "/assets/logos/css.png",
      },
    ],
  },
  {
    id: 6,
    title: "2D Fighting Game",
    description:
      "2D browser-based fighting game using HTML5 Canvas.",
    subDescription: [
    "Built a client-side 2D fighting game with vanilla JavaScript and HTML5 Canvas, enabling real-time two-player combat.", 
    "Engineered core gameplay mechanics like character physics, attack collision detection, and fluid sprite animation taken from itch.io.", 
    "Designed an intuitive dual-control scheme (WASD & Arrow Keys) for local multiplayer and a cohesive visual theme for characters and background."
    ],
    href: "https://priyansh-a.github.io/fighting-game/",
    logo: "",
    image: "/assets/projects/fighting.png",
    tags: [
      {
        id: 1,
        name: "HTML5",
        path: "/assets/logos/html.png",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/javascript.png",
      },
      {
        id: 3,
        name: "CSS",
        path: "/assets/logos/css.png",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/Priyansh-A",
    icon: "/assets/logos/github.png",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/prem-raj-awasthi-393901262/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/p4yansh/",
    icon: "/assets/socials/instagram.svg",
  },
];
