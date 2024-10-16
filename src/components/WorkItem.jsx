import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook } from '@fortawesome/free-brands-svg-icons';
import profiles from "./../../public/profiles.jpeg";

const WorkItem = () => {

  return (
      <div className='flex justify-center  gap-3 group relative w-fit rounded-full group cursor-pointer'>
        <div  className='group-hover:hidden' style={{ backgroundImage: `url(${profiles})` }}>
                Hello World
        </div>
        <div className='hidden group-hover:flex'>
                link
        </div>
        {/* <FontAwesomeIcon className='border border-[#e0e0e0] bg-white hover:border-[#e65101] hover:bg-[#e65101] shadow-xl hover:text-white p-2.5 rounded-full cursor-pointer
            transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 duration-30' icon={icon} /> */}
      </div>
  );
}

export default WorkItem;