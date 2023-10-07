import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    //typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    // nodejs,
    // mongodb,
    git,
    // figma,
    // docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    java,
    mysql,
    c,
    Hassan,
    Riyam,
    Hamza,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "JAVA Developer",
      icon: backend,
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
      name: "Java",
      icon: java,
    },
    {
      name : "C",
      icon: c,
    },
    {
      name: "mysql",
      icon : mysql,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      
    "I never thought university projects could rival professional work, but Samad demonstrated it's possible.",
      name: "Riyam Sarfaraz",
      designation: "Python Developr",
      company: "Location Lab",
      image: Riyam,
    },
    {
      testimonial:
      "In the vast tech landscape, Samad stands out as a software engineer with unmatched adaptibility and promise.",
      name: "Hassan Qadri",
      designation: "Software Engineer",
      company: "Folio3",
      image: Hassan,
    },
    {
      testimonial:

      "I've deeply admired Samad's talent in crafting websites that are both visually captivating and functional." ,
      name: "Muhammad Hamza",
      designation: "Project Manager",
      company: "PearPixels",
      image: Hamza,
    },
  ];
  
  const projects = [
    {
      name: "Expense Management System",
      description:
        "Console based project allowing you to manage your expense and keep tracking of your every dime spent",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/SamadAmir/OOP_Project",
    },
    {
      name: "Movie search App",
      description:
        "Web application that enables users to search for recent movies and its release date with its genre",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/SamadAmir/react_movie_app",
    },
    {
      name: "FlipKart Clone",
      description:
        "A web based site just like Flip kart and enhancing its functionalities and its styles using simple formats",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
       
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/SamadAmir/Flipkart_Clone",
    },
  ];
  
  export { services, technologies, testimonials, projects };