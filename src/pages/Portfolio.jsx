import React, { useState } from 'react';
import { faDownload, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { experiences, skills } from '../constants';
import WorkItem from '../components/WorkItem';
import profiles from "./../../public/profiles.jpeg";
import IconHover from '../components/IconHover';
import btdc from "./../../public/btdc.png";
import btdccp from "./../../public/btdccp.png";

const Portfolio = () => {

  return (
    <div className="about pt-14 w-full flex flex-col h-dvh">
      <div className='header p-2.5 flex flex-col justify-center items-center'>
        <div className='text-justify max-w-5xl p-2.5'>
          <h2 className='text-center text-6xl font-mono text-[#e65101] uppercase font-bold w-full'>
            PORTFULIO
          </h2>
        </div>
        <div class="mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3 w-full">

          <div className='group'>
            <div className='group-hover:hidden rounded-md p-8 text-center shadow
              cursor-pointer bg-cover bg-center h-[300px]' style={{ backgroundImage: `url(${btdc})`}}>
            </div>
            <div className='hidden group group-hover:block rounded-md bg-neutral-900/50 p-8 text-center shadow hover:bg-[#FFF5EE]
              cursor-pointer bg-cover bg-center h-[300px] place-content-center shadow-xl
              transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 duration-30' >
              <div className='flex flex-col items-center content-center '>
                <h2 className='text-center text-3xl pb-2.5 font-mono text-[#e65101] uppercase'>
                  Bongthom.com
                </h2>
                <FontAwesomeIcon className='border border-[#e0e0e0] bg-white hover:border-[#e65101] hover:bg-[#e65101] shadow-xl hover:text-white p-2.5 rounded-full cursor-pointer
                    transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 duration-30 w-4 h-4' icon={faLink} />
              </div>
            </div>
          </div>
          <div className='group'>
            <div className='group-hover:hidden rounded-md p-8 text-center shadow
              cursor-pointer bg-cover bg-center h-[300px]' style={{ backgroundImage: `url(${btdccp})`}}>
            </div>
            <div className='hidden group group-hover:block rounded-md bg-neutral-900/50 p-8 text-center shadow hover:bg-[#FFF5EE]
              cursor-pointer bg-cover bg-center h-[300px] place-content-center shadow-xl
              transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 duration-30' >
              <div className='flex flex-col items-center content-center '>
                <h2 className='text-center text-3xl pb-2.5 font-mono text-[#e65101] uppercase'>
                  Bongthom.com
                </h2>
                <FontAwesomeIcon className='border border-[#e0e0e0] bg-white hover:border-[#e65101] hover:bg-[#e65101] shadow-xl hover:text-white p-2.5 rounded-full cursor-pointer
                    transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 duration-30 w-4 h-4' icon={faLink} />
              </div>
            </div>
          </div>

          </div>
      </div>
    </div>
  );
}

export default Portfolio;