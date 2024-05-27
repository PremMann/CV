import React from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { portfolios } from '../constants';

const Portfolio = () => {
  return (
    <div className="about pt-14 w-full flex flex-col h-dvh">
      <div className='header p-2.5 flex flex-col justify-center items-center'>
        <div className='text-justify max-w-5xl p-2.5'>
          <h2 className='text-center text-6xl font-mono text-[#e65101] uppercase font-bold w-full dark:text-[#FAE3B4] dark:font-bold'>
            PORTFULIO
          </h2>
        </div>
        <div class="mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {portfolios.map((item, index)=>(
            <div className='group' kay={index}>
              <div className='group-hover:hidden rounded-md p-8 text-center shadow dark:bg-slate-700
                cursor-pointer bg-cover bg-center h-[300px]' style={{ backgroundImage: `url(${item.image})`}}>
              </div>
              <div className='hidden group group-hover:block rounded-md bg-neutral-900/50 p-8 text-center shadow hover:bg-[#FFF5EE]
                cursor-pointer bg-cover bg-center h-[300px] place-content-center shadow-xl
                transition ease-in-outhover:-translate-y-1 hover:scale-10 dark:hover:bg-slate-700' >
                <div className='flex flex-col items-center content-center'>
                  <h2 className='text-balance text-center text-3xl pb-2.5 font-mono text-[#e65101] uppercase dark:text-[#FAE3B4]'>
                    {item.name}
                  </h2>
                  <FontAwesomeIcon className='border border-[#e0e0e0] bg-white dark:bg-slate-700 hover:border-[#e65101] 
                  hover:bg-[#e65101] dark:hover:border-[#FAE3B4] dark:hover:bg-slate-700 shadow-xl hover:text-white p-2.5 
                  rounded-full cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-10 dark:text-[#FAE3B4] w-4 h-4' icon={faLink} />
                </div>
              </div>
            </div>
          ))}
          </div>
      </div>
    </div>
  );
}

export default Portfolio;