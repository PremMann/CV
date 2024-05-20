import React, { useState } from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { experiences, skills } from '../constants';
import WorkItem from '../components/WorkItem';
import profiles from "./../../public/profiles.jpeg";

const Portfolio = () => {

  return (
    <div className="about pt-14 w-full flex flex-col h-dvh">
      <div className='header p-2.5 flex flex-col justify-center items-center'>
        <div className='text-justify max-w-5xl p-2.5'>
          <h2 className='text-center text-6xl font-mono text-[#e65101] uppercase font-bold w-full'>
            PORTFULIO
          </h2>
        </div>
        <WorkItem />
        <div className='flex flex-col justify-center items-center w-full pt-2.5'>
          <div className='max-w-5xl w-full'>
              <div className=' grid gap-2 grid-cols-3 max-[360px]:grid-cols-2 md:grid-cols-4 skill-lists w-full place-items-center '>
                {skills.map((skill, index) => (
                    <div key={index} className="hover:bg-[#FFF5EE] dark:bg-slate-800 rounded-lg p-2.5 ring-1 ring-slate-900/5 
                      shadow-xl flex flex-col w-full justify-between items-center cursor-pointer
                      transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 duration-30" style={{ backgroundImage: `url(${profiles})` }}>
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
      </div>
    </div>
  );
}

export default Portfolio;