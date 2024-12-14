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
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";




export const MY_SHORT_INTRO = `I am an aspiring software engineer and B.Tech student specializing in Information Technology at AIET. Proficient in technologies like React, Flask, and Node.js, I focus on building scalable, user-centric web applications and robust software solutions. With a passion for learning and innovation, I aim to contribute to impactful projects in full-stack development and beyond.`;

export const ABOUT_TEXT = `I am a highly motivated and ambitious B.Tech student specializing in Information Technology at Arya Institute of Engineering & Technology (AIET). With a solid foundation in programming languages such as C, C++, and Python, along with web technologies like HTML, CSS, and JavaScript, and frameworks including React, Flask, and Node.js, I am dedicated to crafting innovative and efficient software solutions.

My academic journey and hands-on project experience have honed my skills in front-end development, backend integration, and full-stack application design. Leveraging frameworks like React and Flask, I have successfully developed user-friendly, scalable, and impactful applications that address real-world challenges.

In addition to my technical expertise, I am a proactive learner, problem solver, and collaborative team player. My passion for technology drives me to explore emerging tools and methodologies, with a keen interest in full-stack development and software engineering. I am committed to delivering excellence and contributing to meaningful projects that create a lasting impact.`;

export const SKILLS_ICON = [
  { src: reactIcon, alt: "React Icon" },
  { src: javascriptIcon, alt: "JavaScript Icon" },
  { src: pythonIcon, alt: "Python Icon" },
  { src: flaskIcon, alt: "Flask Icon" },
  { src: mysqlIcon, alt: "MySQL Icon" },
  { src: nodejsIcon, alt: "Node.js Icon" },
  { src: mongoIcon, alt: "MongoDB Icon" },
  { src: cplusplusIcon, alt: "C++ Icon" },
  { src: cIcon, alt: "C Icon" },
  { src: tailwindIcon, alt: "Tailwind Icon" },
  { src: htmlIcon, alt: "HTML5 Icon" },
  { src: cssIcon, alt: "CSS3 Icon" },
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
    title: "NewsApp",
    image: project1,
    description:
      "NewsApp is a responsive platform offering personalized news updates across categories like technology, sports, and entertainment, ensuring seamless browsing and timely information.",
    technologies: ["Bootstrap","React", "Node.js"],
  },
  {
    title: "My_Notebook",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS","Bootstrap", "Express", "MongoDB"],
  },
  {
    title: "TextAnalyzer",
    image: project3,
    description:
      "Text Analyzer is a versatile tool that counts letters and words, converts text between lowercase and uppercase, copies text, and formats it effortlessly.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Python", "Flask", "MySql"],
  },
  {
    title: "Netflix landing page",
    image: project5,
    description:
      "Netflix's landing page features a clean, user-friendly interface with intuitive navigation, eye-catching visuals.",
    technologies: ["HTML", "CSS"],
  },
];

export const CONTACT = [
  { icon: emailIcon, alt: "Email", value: "sakshamagarwal330@gmail.com" },
  { icon: phoneIcon, alt: "Phone", value: "+91-9660969228" },
  { icon: locationIcon, alt: "Location", value: "Jaipur,Rajasthan,India" },
];