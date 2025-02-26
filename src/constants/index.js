import  krawma  from "/public/krawma.jpeg";
import allweb from "/public/allweb.png";
import weeeee from "/public/weeeeeee.jpeg";
import php from "/public/tech/php.png";
import html from "/public/tech/html.png";
import reactjs from "/public/tech/reactjs.png";
import css from "/public/tech/css.png";
import git from "/public/tech/git.png";
import Bootstrap from "/public/tech/bootstrap.png";
import tailwind from "/public/tech/tailwind.png";
import homecv from "/public/homecv.png";
import Javascript from "/public/tech/javascript.png";
import { 
  faDownload, 
  faEnvelope, 
  faLocationDot, 
  faEarth, 
  faPhone } from '@fortawesome/free-solid-svg-icons';

import btdc from "/public/btdc.png";
import btdccp from "/public/btdccp.png";

const experiences = [
    {
      title: "Web development",
      company_name: "Krawma & Associates",
      iconBg: "white",
      icon: krawma,
      date: "Feb 2022 - Present",
      points: [
       "Responsible for creating new features and services for the BongThom website backend, frontend, and mobile app.",
       "Implemented APIs for CV registration gateway and other features to improve platform functionality",
       "Conducted thorough testing and maintenance to fix bugs and improve system stability",
       "Designed and developed a reusable UI library to improve consistency and efficiency across the BongThom backend and frontend applications",
       "Presented key deliverables in sprint planning meetings by demoing user stories and finished features to the Product Owner, facilitating informed decision-making",
       "Participated in Agile development processes, including sprint planning, daily stand-ups, and retrospective meetings",
       "Researched and implemented new technologies to enhance system performance and maintainability",
      ],
    },
    {
      title: "Web Developer (PHP)",
      company_name: "ALLWEB Co., Ltd",
      iconBg: "white",
      icon: allweb,
      date: "January 2019 – December 2021",
      points: [
        "Design, build, and maintain efficient, reusable, and reliable PHP applications.",
        "Debug existing systems.",
        "Analyze the specifications given by the clients, feedback and impacts, regression and technical implements afterward.",
        "Review Code.",
        "Write Test Case.",
        "Help Teams (Cambodia, France, Vietnam)"
      ],
    },
    {
      title: "Internship",
      company_name: "W.E Bridge Technologies",
      icon: weeeee,
      iconBg: "rgb(0 191 237)",
      date: "June 2018 – December 2018",
      points: [
        "Working on Objective C",
        "Edit some feature on HenkelCRM App and iBrain Teacher App",
        "Create and testing on HR App",
      ],
    },
  ];

  const contacts = [
    {
        icon: faEnvelope,
        label: 'Email',
        value: 'Premmannpnc@gmail.com'
    },
    {
        icon: faPhone,
        label: 'Mobile Number',
        value: '+855 97 86 01 549'
    },
    {
        icon: faEarth,
        label: 'Languages',
        value: 'Khmer, English'
    },
    {
        icon: faLocationDot,
        label: 'Location',
        value: 'Phnom Penh, Cambodia'
    }
  ];
  const skills = [
    {
        icon: reactjs,
        label: 'ReactJS'
    },
    {
        icon: Bootstrap,
        label: 'Bootstrap'
    },
    {
        icon: git,
        label: 'GIT'
    },
    {
        icon: css,
        label: 'CSS'
    },
    {
        icon: tailwind,
        label: 'Tailwind CSS'
    },
    {
        icon: php,
        label: 'PHP'
    },
    {
        icon: reactjs,
        label: 'React Native'
    },
    {
        icon: Javascript,
        label: 'Javascript'
    },
    {
        icon: html,
        label: 'HTML'
    },

  ];

  const portfolios = [
    {
      id:1,
      name:'BONGTHOM.COM',
      link:'bongthom.com',
      image:btdc,
      url:'https://bongthom.com/'
    },
    {
      id:2,
      name:'Bongthom control panel',
      link:'account.bongthom.com',
      image:btdccp,
      url:'https://account.bongthom.com/'
    },
    {
      id:3,
      name:'PREM PORTFOLIO PAGE',
      link:'prem.info',
      image:homecv,
      url:'https://account.bongthom.com/'
    }
  ];


  export { experiences, skills, contacts, portfolios };