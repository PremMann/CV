import React, { useState, useEffect, useReducer } from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences, skills } from '../constants';
import cv from "./../../public/tech/PREM_MANN-Web_Application_Developer.pdf";

const ExperienceCard = ({ experience, dark }) => (

  <VerticalTimelineElement    
    contentStyle={{ background: dark ? 'rgb(51 65 85)' : 'rgb(255,245,238)', color: '#fff'}}
    contentArrowStyle={{ borderRight: '7px solid #fff5ee'}}
    date={experience.date}
    dateClassName={'text-[#000] dark:text-[#FAE3B4]'}
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-slate-950 text-[24px] font-bold font-mono dark:text-[#FAE3B4] dark:font-bold">
          {experience.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold text-slate-950 font-mono dark:text-[#FAE3B4]" style={{ margin: 0}}>
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li kay={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider text-slate-950 font-mono dark:text-[#FAE3B4]">
              {point}
          </li>
        ))}
    </ul>

  </VerticalTimelineElement>
)

const About = ({ dark }) => {
 
  const downloadCV = () => {
    const cvURL = cv; 
    const link = document.createElement('a');
    link.href = cvURL;
    link.download = 'PREM-MANN.pdf'; 
    link.click();
  };
  return (
    <div className="about pt-14 w-full flex flex-col">
      <div className='header p-2.5 flex flex-col justify-center items-center'>
        <div className='text-justify max-w-5xl'>
          <h2 className='text-center text-6xl pb-2.5 font-mono font-bold text-[#e65101] uppercase dark:text-[#FAE3B4] dark:font-bold'>
            About me 
          </h2>
          <span className='font-mono dark:text-[#FAE3B4] '>
            Experienced Web Developer with a strong background in full-stack 
            development, specializing in React.js, PHP (CodeIgniter, Laravel), and 
            PostgreSQL. Proficient in building scalable and high-performance 
            applications, implementing RESTful APIs, and optimizing UI/UX consistency. 
            Currently working at Krawma & Associates Co., Ltd., I contribute to the 
            development and enhancement of the BongThom platform, focusing on API 
            integration, frontend improvements, and system performance optimization. I 
            actively participate in Agile (Scrum) development, collaborating with cross￾functional teams to deliver high-quality software solutions. 
          </span>
        </div>
        <div className='pb-2 flex justify-center pt-3.5' onClick={downloadCV}>
              <a className='flex flex-row justify-between pl-3 content-center text-[#541600] dark:text-[#FAE3B4]
                            w-[170px] items-center border border-[#e65101] dark:border-[#FAE3B4] rounded-full cursor-pointer
                            hover:bg-[#e65101] hover:text-white'>
                <span className='font-mono'>Download CV</span>
                <FontAwesomeIcon className='border border-[#e65101] bg-[#e65101] p-2.5 rounded-full' icon={faDownload} />
              </a>
            </div>
      </div>

      <div className='flex flex-col justify-center items-center w-full'>
        <div className='max-w-5xl w-full'>
            <div className='skill-header text-center pb-2.5'>
              <h2 className='text-center text-3xl pb-2.5 font-mono text-[#e65101] dark:text-[#FAE3B4] dark:font-bold'>
                My Skill
              </h2>
              <span className='font-italic text-center w-full dark:text-[#FAE3B4]'>Some of various tools that I have used so far.</span>
            </div>
            <div className=' grid gap-2 grid-cols-3 max-[360px]:grid-cols-2 md:grid-cols-4 skill-lists w-full place-items-center '>
              {skills.map((skill, index) => (
                  <div key={index} className="bg-[#FFF5EE] dark:bg-slate-700 rounded-lg p-2.5 ring-1 ring-slate-900/5 
                    shadow-xl flex flex-col w-full justify-between items-center cursor-pointer
                    transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 duration-30">
                      <div className='basis-1/4'>
                        <img 
                          src={skill.icon}
                          alt={skill.label}
                          className="w-24 h-28 object-contain"
                        />          
                      </div>
                      <span className='bg-[#e65101] rounded-full w-full text-center text-white dark:text-[#FAE3B4]'>{skill.label}</span>
                  </div>
              ))}
          </div>
        </div>
      </div>
      
      <div className='flex flex-col justify-center items-center max-w-5xl self-center'>
        <div className='skill-header text-center pb-2.5 pt-2.5'>
              <h2 className='text-center text-3xl pb-2.5 font-mono text-[#e65101] dark:text-[#FAE3B4] dark:font-bold'>
                WORK EXPERIENCE
              </h2>
            <span className='font-italic text-center w-full dark:text-[#FAE3B4]'>Some of various tools that I have used so far.</span>
          </div>
        <VerticalTimeline 
            lineColor={dark ? "#FAE3B4" : "#e65101"}
            >
              {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} dark={dark} />
              ))}
        </VerticalTimeline>
  
      </div>

      
    </div>
  );
}

export default About;