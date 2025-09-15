import React from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences, skills } from '../constants';
import cv from "./../../public/PREM_MANN-Web_Application_Developer.pdf";

const ExperienceCard = ({ experience, dark }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: dark ? 'rgb(30 41 59)' : 'rgb(255,245,238)',
      color: dark ? '#FAE3B4' : '#222',
      boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)',
      border: dark ? '1px solid #334155' : '1px solid #e5e7eb',
      borderRadius: '1rem',
      padding: '1.5rem',
    }}
    contentArrowStyle={{ borderRight: `7px solid ${dark ? '#334155' : '#e5e7eb'}` }}
    date={experience.date}
    dateClassName={dark ? 'text-[#FAE3B4]' : 'text-slate-500'}
    iconStyle={{ background: experience.iconBg, boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)' }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon} alt={experience.company_name} className="w-2/3 h-2/3 object-contain" />
      </div>
    }
  >
    <div>
      <h3 className="text-xl font-semibold font-mono mb-1 dark:text-[#FAE3B4] text-slate-900">{experience.title}</h3>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-300 mb-2">{experience.company_name}</p>
    </div>
    <ul className="list-disc ml-5 space-y-1">
      {Array.isArray(experience.points)
        ? experience.points.map((point, idx) => (
            <li key={idx} className="text-[15px] text-slate-700 dark:text-slate-200 font-mono">
              {typeof point === 'string' ? point : point.point}
              {point.sub_point && (
                <ul className="ml-5 list-disc text-[13px] text-slate-500 dark:text-slate-400">
                  {point.sub_point.map((sub, i) => (
                    <li key={i}>{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))
        : null}
    </ul>
  </VerticalTimelineElement>
);


const About = ({ dark }) => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'PREM-MANN.pdf';
    link.click();
  };

  return (
    <div className={`w-full min-h-screen flex flex-col items-center bg-white dark:bg-slate-900 transition-colors duration-300`}>
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center pt-20 pb-10 px-4">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-mono text-slate-900 dark:text-[#FAE3B4] mb-2">Prem Mann</h1>
          <h2 className="text-lg md:text-2xl font-mono text-slate-500 dark:text-slate-300 mb-4">Full-Stack Developer </h2>
          <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 font-mono mb-6">
            Experienced Web Developer specializing in React.js, PHP (CodeIgniter, Laravel), and PostgreSQL. Passionate about building scalable, high-performance applications and delivering clean, consistent UI/UX. Currently at Krawma & Associates Co., Ltd., focusing on API integration, frontend improvements, and system optimization.
          </p>
          <button
            onClick={downloadCV}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#e65101] dark:border-[#FAE3B4] text-[#e65101] dark:text-[#FAE3B4] font-mono font-semibold hover:bg-[#e65101] hover:text-white dark:hover:bg-[#FAE3B4] dark:hover:text-slate-900 transition-colors duration-200 shadow-sm"
          >
            <FontAwesomeIcon icon={faDownload} /> Download CV
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-5xl px-4 mb-16">
        <h2 className="text-2xl font-bold font-mono text-slate-900 dark:text-[#FAE3B4] mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center bg-[rgb(255,245,238)] dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-700 p-4 transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:scale-105"
            >
              <img src={skill.icon} alt={skill.label} className="w-16 h-16 object-contain mb-2 group-hover:scale-110 transition-transform duration-200" />
              <span className="mt-1 text-sm font-mono text-slate-700 dark:text-[#FAE3B4] group-hover:text-[#e65101] dark:group-hover:text-[#e65101] transition-colors duration-200">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="w-full max-w-5xl px-4 mb-20">
        <h2 className="text-2xl font-bold font-mono text-slate-900 dark:text-[#FAE3B4] mb-6 text-center">Work Experience</h2>
        <VerticalTimeline lineColor={dark ? '#334155' : '#e5e7eb'}>
          {experiences.map((experience, idx) => (
            <ExperienceCard key={idx} experience={experience} dark={dark} />
          ))}
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default About;