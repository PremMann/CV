import React from 'react';
import homeImage from './../../public/profiles.jpeg'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Home = () => {
  return (
      <div className="grid md:grid-cols-2 h-screen ">
        <div className="h-full rounded-lg flex items-center p-10">
          <img className="w-full rotate-90 object-cover rounded-lg" src={homeImage} alt="Modern building architecture" />
        </div>
        <div className="flex flex-col justify-end md:justify-center pb-0 p-10 md:p-10 order-first md:order-last">
            <h1 className='text-5xl pb-5 font-mono text-[#e65101]'>Hi, I'm Prem. A Frontend Developer</h1>
            <p className='font-mono pb-2.5 text-[#541600]'>
              I'm a frontend developer based in the city of Phnom Penh, Cambodia. 
              I'm a passionate about creating beautiful and functional websites.
            </p>
            <div className='pb-2 flex justify-center'>
              <a className='flex flex-row justify-between pl-3 content-center  text-[#541600]
                            w-[170px] items-center border border-[#e65101] rounded-full cursor-pointer
                            hover:bg-[#e65101] hover:text-white'>
                <span className='font-mono'>Download CV</span>
                <FontAwesomeIcon className='border border-[#e65101] bg-[#e65101] p-2.5 rounded-full' icon={faDownload} />
              </a>
            </div>
           
            
        </div>
        
      </div>
      
  );
}

export default Home;
