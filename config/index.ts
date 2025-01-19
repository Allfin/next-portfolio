export const siteConfig = {
  title: "All Fine Maulianro — Frontend Developer",
  author: "All Fine Maulianro",
  description:
    "Frontend Developer based in Indonesia. I specialize in building user-friendly web applications using Next.js, with expertise in HTML, CSS, and JavaScript.",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
};

export const siteContent = {
  hero: {
    name: "All Fine Maulinaro",
    specialty: "Frontend Developer",
    summary:
      "Frontend Developer based in Indonesia. I specialize in building user-friendly web applications using Next.js, with expertise in HTML, CSS, and JavaScript.",
    email: "allfinemaulinaro@email.com",
  },
  experience: [
    {
      company: "Kubu.id",
      position: "Fronten Developer",
      startDate: "Jan 2023",
      endDate: "Dec 2020",
      summary: [
        "Developed an admin management system to oversee 500+ registered users and activities using Node.js, React.js, and Material UI, ensuring a maintainable and scalable website architecture.",
        "Implemented key features like user management, activity monitoring, and reporting, enhancing operational efficiency by 20%.",
        "Integrated RESTful APIs to enable efficient communication between frontend and backend, ensuring seamless data flow and real-time updates.",
      ],
    },
  ],
  project: [
    {
      nameProject: "E-Commerce",
      specialty: "Fullstack Developer",
      summary: "an e-commerce app that uses Midtrans as a payment gateway.",
      img: "/assets/img/proshop.png",
      source: "https://github.com/Allfin/proshop-v2",
      preview: "https://proshop-v2-90mo.onrender.com/ ",
    },
    {
      nameProject: "Movie App",
      specialty: "Frontend Developer",
      summary: "A movie app that ruplicate themoviedb",
      img: "/assets/img/movieApp.png",
      source: "https://github.com/Allfin/next-movie",
      preview: "https://movie-next-iota.vercel.app/",
    },
  ],
};
