import pythonIcon from '../assets/logos/python-icon.svg';
import reactIcon from '../assets/logos/react-icon.svg';
import mysqlIcon from '../assets/logos/mysql-icon.svg';
import javascriptIcon from '../assets/logos/javascript-icon.svg';
import flaskIcon from '../assets/logos/flask-icon.svg';
import mongoIcon from '../assets/logos/mongo-icon.svg';
import cplusplusIcon from '../assets/logos/c++-icon.svg';
import cIcon from '../assets/logos/c-icon.svg';
import htmlIcon from '../assets/logos/html-icon.svg';
import cssIcon from '../assets/logos/css-icon.svg';
import tailwindIcon from '../assets/logos/tailwind-icon.svg';
import nodejsIcon from '../assets/logos/nodejs-icon.svg';
import bootstrapIcon from '../assets/logos/bootstrap-icon.svg';
import phoneIcon from '../assets/logos/mobile-icon.svg';
import emailIcon from '../assets/logos/email-icon.svg';
import locationIcon from '../assets/logos/location-icon.svg';

import project1 from "../assets/projects/project1.png";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";




export const MY_SHORT_INTRO = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const SKILLS_ICON = [
  { src: reactIcon, alt: "React Icon" },
  { src: pythonIcon, alt: "Python Icon" },
  { src: mysqlIcon, alt: "MySQL Icon" },
  { src: javascriptIcon, alt: "JavaScript Icon" },
  { src: flaskIcon, alt: "Flask Icon" },
  { src: mongoIcon, alt: "MongoDB Icon" },
  { src: cplusplusIcon, alt: "C++ Icon" },
  { src: cIcon, alt: "C Icon" },
  { src: htmlIcon, alt: "HTML5 Icon" },
  { src: cssIcon, alt: "CSS3 Icon" },
  { src: tailwindIcon, alt: "Tailwind Icon" },
  { src: nodejsIcon, alt: "Node.js Icon" },
  { src: bootstrapIcon, alt: "Bootstrap Icon" },
];

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project1,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project1,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = [
  { icon: emailIcon, alt: "Email", value: "sakshamagarwal330@gmail.com" },
  { icon: phoneIcon, alt: "Phone", value: "+91-9660969228" },
  { icon: locationIcon, alt: "Location", value: "Jaipur,Rajasthan,India" },
];