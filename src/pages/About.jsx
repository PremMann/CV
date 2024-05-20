import React, { useState } from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences, skills } from '../constants';


const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: 'rgb(255,245,238)', color: '#fff'}}
    contentArrowStyle={{ borderRight: '7px solid #fff5ee'}}
    date={experience.date}
    dateClassName={'text-[#000]'}
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
      <h3 className="text-slate-950 text-[24px] font-bold font-mono">
          {experience.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold text-slate-950 font-mono" style={{ margin: 0}}>
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li kay={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider text-slate-950 font-mono">
              {point}
          </li>
        ))}
    </ul>

  </VerticalTimelineElement>
)

const About = () => {


  const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    const WorkIcon = () => <></>;

  return (
    <div className="about pt-14 w-full flex flex-col">
      <div className='header p-2.5 flex flex-col justify-center items-center'>
        <div className='text-justify max-w-5xl'>
          <h2 className='text-center text-6xl pb-2.5 font-mono text-[#e65101] uppercase'>
            About me 
          </h2>
          <span className='font-mono'>
            Hi there, my name is Prem MANN and I'm a software developer with experience in web application 
            development. I'm currently working as a frontend Developer at Krawma & Associates, 
            where I specialize in billing systems development and optimizing applications for maximum speed and scalability. 
            My expertise in front-end development includes proficiency in technologies such as JavaScript, React.js, and Tailwind CSS. 
            In addition, I have experience working with PHP and React Native.
          </span>
        </div>
        <div className='pb-2 flex justify-center pt-3.5'>
              <a className='flex flex-row justify-between pl-3 content-center  text-[#541600]
                            w-[170px] items-center border border-[#e65101] rounded-full cursor-pointer
                            hover:bg-[#e65101] hover:text-white'>
                <span className='font-mono'>Download CV</span>
                <FontAwesomeIcon className='border border-[#e65101] bg-[#e65101] p-2.5 rounded-full' icon={faDownload} />
              </a>
          </div>
      </div>

      <div className='flex flex-col justify-center items-center w-full'>
        <div className='max-w-5xl w-full'>
            <div className='skill-header text-center pb-2.5'>
              <h2 className='text-center text-3xl pb-2.5 font-mono text-[#e65101]'>
                My Skill
              </h2>
              <span className='font-italic text-center w-full'>Some of various tools that I have used so far.</span>
            </div>
            <div className=' grid gap-2 grid-cols-3 max-[360px]:grid-cols-2 md:grid-cols-4 skill-lists w-full place-items-center '>
              {skills.map((skill, index) => (
                  <div key={index} className="bg-[#FFF5EE] dark:bg-slate-800 rounded-lg p-2.5 ring-1 ring-slate-900/5 
                    shadow-xl flex flex-col w-full justify-between items-center cursor-pointer
                    transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 duration-30">
                      <div className='basis-1/4'>
                        <img 
                          src={skill.icon}
                          alt={skill.label}
                          className="w-24 h-28 object-contain"
                        />          
                      </div>
                                
                      <span className='bg-[#e65101] rounded-full w-full text-center text-white'>{skill.label}</span>
                  </div>
              ))}
          </div>
        </div>
      </div>
      
      <div className='flex flex-col justify-center items-center max-w-5xl self-center'>
        <div className='skill-header text-center pb-2.5 pt-2.5'>
              <h2 className='text-center text-3xl pb-2.5 font-mono text-[#e65101]'>
                WORK EXPERIENCE
              </h2>
            <span className='font-italic text-center w-full'>Some of various tools that I have used so far.</span>
          </div>
        <VerticalTimeline 
            lineColor="#e65101"
            >
              {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
              ))}
        </VerticalTimeline>
  
      </div>

      
    </div>
  );
}

export default About;