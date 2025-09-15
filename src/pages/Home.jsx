import React, { useState } from 'react';
import homeImage from './../../public/profiles.jpeg'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-vertical-timeline-component/style.min.css';
import cv from "./../../public/cv.pdf";
import cv2 from "./../../public/PREM_MANN-Web_Application_Developer.pdf";
import KaTaskTracking from './../components/KaTaskTracking'
const Home = () => {

  const [currentStage, setCurrentStage] = useState(2);

  const downloadCV = () => {
    const cvURL = cv2; 
    const link = document.createElement('a');
    link.href = cvURL;
    link.download = 'PREM-MANN.pdf'; 
    link.click();
  };


  return (
      <div className="grid md:grid-cols-2 h-screen ">
        {/* <div className="container mx-auto mt-10">
          <KaTaskTracking currentStage={currentStage} />
        </div> */}
        <div className="h-full rounded-lg flex items-center p-10">
          <img className="w-full rotate-90 object-cover rounded-lg" src={homeImage} alt="Modern building architecture" />
        </div>
        <div className="flex flex-col justify-end md:justify-center pb-0 p-10 md:p-10 order-first md:order-last">
            <h1 className="text-5xl pb-5 font-mono text-[#e65101] dark:text-[#FAE3B4]">
                Full-Stack Developer
              </h1>
              <p className="font-mono pb-2.5 text-[#541600] dark:text-[#FAE3B4]">
                I design and build scalable web applications using React.js and Next.js. 
                Passionate about full-stack development, automated testing, and modern tools such as Prisma and Docker, 
                I’m always learning and focused on delivering high-quality, maintainable software.
              </p>
            <div className='pb-2 flex justify-center cursor-pointer w-fit self-center' onClick={downloadCV}>
              <a className='flex flex-row justify-between pl-3 content-center text-[#541600] dark:text-[#FAE3B4]
                            w-[170px] items-center border border-[#e65101] dark:border-[#FAE3B4] rounded-full cursor-pointer
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
