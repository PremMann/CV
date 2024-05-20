import React from 'react';
import { 
  faDownload
 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contacts } from '../constants';
import { faTelegram, faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import IconHover from '../components/IconHover';

const Contact = () => {
  return (
    <div className="about pt-14 w-full flex flex-col h-dvh">
    <div className='header p-2.5 flex flex-col justify-center items-center'>
      <div className='text-justify max-w-5xl'>
        <h2 className='text-center text-6xl font-mono text-[#e65101] uppercase font-bold w-full'>
          contact me
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center p-12 w-full ">
      <div className="mx-auto w-full max-w-[550px] pr-2.5">
        <div className='skill-header text-center pb-2.5 max-[500px]:overflow-x-auto'>
          <h2 className='text-center text-3xl pb-2.5 font-mono text-[#e65101] uppercase'>
            Contact me here
          </h2>
         
            {contacts.map((item, index) => (
                <div key={index} className='flex flex-row justify-between w-full p-2 min-w-[400px]'>
                  <div className='flex items-center justify-between'>
                    <FontAwesomeIcon className='font-[10px] w-4 h-4' icon={item.icon} />
                    <span className='font-mono pl-2.5'>{item.label} : </span>
                  </div>
                  <div>
                    <span className='font-mono'>{item.value}</span>
                  </div>
              </div>
            ))}
              
            
        </div>
        <div className='skill-header text-center pb-2.5'>
          <div className='pb-2 flex justify-center pt-3.5 gap-3'>
              <IconHover info={'Telegram'} icon={faTelegram} />
              <IconHover info={'Facebook'} icon={faFacebook} />
              <IconHover info={'Github'} icon={faGithub} />
              <IconHover info={'LinkedIn'} icon={faLinkedin} />
            </div>
        </div>

      </div>
          <div className="mx-auto w-full max-w-[550px] pl-2.5">
            <form action="#" method="POST">
              <div className="mb-5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="font-mono w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  className="font-mono w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  className="font-mono w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  className="font-mono w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-1 px-3 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              <div>
                <button
                  className="hover:shadow-form rounded-md bg-[#e65101] py-1 px-4 text-base font-semibold text-white font-mono outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
            
          </div>
        
        </div>
    </div>
    </div>
  );
}

export default Contact;
