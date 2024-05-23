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
       "Web application development",
       "Billing systems development and reconciliation",
       "Database management, Data summary & analysis",
       "Build reusable code and libraries for future use",
       "Optimize application for maximum speed and scalability",
       "Roll-out concepts and timing",
       "Present and defend work and key milestone deliverables to the development team, management, and stakeholders",
       "Establish and promote design guidelines, best practices, and standards",
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
      image:btdc
    },
    {
      id:2,
      name:'Bongthom control panel',
      link:'account.bongthom.com',
      image:btdccp
    },
    {
      id:3,
      name:'PREM PORTFOLIO PAGE',
      link:'prem.info',
      image:homecv
    }
  ];


  export { experiences, skills, contacts, portfolios };