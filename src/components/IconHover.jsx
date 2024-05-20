import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook } from '@fortawesome/free-brands-svg-icons';

const IconHover = ({icon, info}) => {

  return (
      <div className=' flex justify-center  gap-3 group relative w-fit rounded-full'>
        <div className='group ease-in-out duration-400 -translate-y-4 pointer-events-none transition-all group-hover:-translate-y-10 
                        absolute left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2'>
          <span className='absolute group-hover:flex hidden bg-[#e65101] border border-[#e65101] font-mono text-sm rounded-md p-1 text-white'>
          <div className="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 z-50 "></div>
            {info}
          </span>
        </div>
        <FontAwesomeIcon className='border border-[#e0e0e0] bg-white hover:border-[#e65101] hover:bg-[#e65101] shadow-xl hover:text-white p-2.5 rounded-full cursor-pointer
            transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 duration-30' icon={icon} />
      </div>
  );
}

export default IconHover;