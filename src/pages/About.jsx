import React, { useMemo } from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences, skills } from '../constants';
import cv from "./../../public/PREM_MANN-Web_Application_Developer.pdf";

const skillCategoryConfig = [
  {
    title: 'Frontend Engineering',
    description:
      'Crafting performant, accessible interfaces with modern component systems and thoughtful design patterns.',
    items: ['ReactJS', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'CSS', 'HTML', 'React Native'],
  },
  {
    title: 'Backend & APIs',
    description:
      'Designing resilient services, scalable APIs, and data models that keep applications fast and reliable.',
    items: ['Node.js', 'PHP', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'Tooling & Platforms',
    description:
      'Driving automation, CI/CD, and collaborative workflows that enable rapid iteration and quality delivery.',
    items: ['Git', 'Docker', 'Vite', 'NextAuth', 'TypeScript', 'Javascript'],
  },
];

const highlightStats = [
  { label: 'Experiences', value: '7+' },
  { label: 'shipped', value: '15+' },
  { label: 'Skills', value: '20+' },
];

const ExperienceCard = ({ experience, dark }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: dark ? 'rgb(15 23 42)' : 'rgb(255,245,238)',
      color: dark ? '#FAE3B4' : '#1f2937',
      boxShadow: '0 20px 35px 0 rgba(15,23,42,0.12)',
      border: dark ? '1px solid rgba(148,163,184,0.25)' : '1px solid rgba(226,232,240,0.9)',
      borderRadius: '1.25rem',
      padding: '1.75rem',
    }}
    contentArrowStyle={{ borderRight: `8px solid ${dark ? '#1e293b' : '#e2e8f0'}` }}
    date={experience.date}
    dateClassName={dark ? 'text-[#FAE3B4]' : 'text-slate-500'}
    iconStyle={{
      background: experience.iconBg,
      border: '2px solid rgba(230,81,1,0.65)',
      boxShadow: '0 12px 30px rgba(230,81,1,0.25)',
    }}
    icon={
      <div className="flex h-full w-full items-center justify-center">
        <img src={experience.icon} alt={experience.company_name} className="h-2/3 w-2/3 object-contain" />
      </div>
    }
  >
    <div>
      <h3 className="font-mono text-xl font-semibold tracking-tight text-slate-900 dark:text-[#FAE3B4]">
        {experience.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-300">{experience.company_name}</p>
    </div>
    <ul className="mt-4 space-y-2 text-[15px] text-slate-700 dark:text-slate-200" role="list">
      {Array.isArray(experience.points)
        ? experience.points.map((point, idx) => (
            <li key={idx} className="font-mono leading-relaxed">
              {typeof point === 'string' ? point : point.point}
              {point.sub_point && (
                <ul className="mt-2 space-y-1 pl-4 text-sm text-slate-500 dark:text-slate-300" role="list">
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
  const categorizedSkills = useMemo(() => {
    const iconMap = new Map();
    skills.forEach((skill) => {
      iconMap.set(skill.label, skill.icon);
    });

    return skillCategoryConfig
      .map((category) => ({
        ...category,
        items: category.items
          .map((label) => ({ label, icon: iconMap.get(label) }))
          .filter((item) => Boolean(item && item.icon)),
      }))
      .filter((category) => category.items.length > 0);
  }, [skills]);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'PREM-MANN.pdf';
    link.rel = 'noopener';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const accentVariants = ['from-[#e65101]', 'from-[#f97316]', 'from-[#fb923c]'];

  return (
    <main className="relative w-full min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#ffe4d6]/80 via-white/60 to-transparent dark:from-slate-900 dark:via-slate-900/40"
        aria-hidden="true"
      />

      <section className="relative w-full px-4 pt-20 pb-16 md:pt-24 md:pb-20" aria-labelledby="about-hero-heading">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-center">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-flex items-center justify-center rounded-full border border-[#e65101]/30 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#e65101] shadow-sm backdrop-blur-md dark:border-[#e65101]/40 dark:bg-slate-900/70">
              Web Applications Developer
            </span>
            <h1 id="about-hero-heading" className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-[#FAE3B4] sm:text-5xl lg:text-[3.5rem]">
              Prem Mann
            </h1>
            <p className="mt-4 text-base font-mono leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
              I craft resilient web experiences anchored in React, Next.js, and modern platform engineering. My focus is on
              building scalable systems, automating workflows, and mentoring teams to deliver accessible, maintainable
              software.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <button
                type="button"
                onClick={downloadCV}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e65101] px-8 py-3 font-mono text-sm font-semibold text-white shadow-lg shadow-[#e65101]/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e65101] dark:bg-[#e65101]"
                aria-label="Download CV as PDF"
              >
                <FontAwesomeIcon icon={faDownload} className="text-base" aria-hidden="true" />
                <span>Download CV</span>
              </button>
              <p className="text-sm font-mono text-slate-600 dark:text-slate-300">
                Available for contract work.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-3" role="list">
              {highlightStats.map((stat, idx) => {
                const accent = accentVariants[idx % accentVariants.length];
                return (
                  <li
                    key={stat.label}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 p-6 text-center shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(230,81,1,0.18)] dark:border-slate-700/70 dark:bg-slate-900/80 dark:shadow-slate-900/40"
                    aria-label={stat.label}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r ${accent} via-transparent to-transparent opacity-80`}
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 bg-gradient-to-br from-white/0 via-white/40 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-80 dark:from-slate-900/0 dark:via-slate-900/60 dark:to-slate-900/10"
                    />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
                      {stat.label}
                    </p>
                    <p className="mt-4 text-3xl font-black text-slate-900 transition-colors duration-300 group-hover:text-[#e65101] dark:text-[#FAE3B4]">
                      {stat.value}
                    </p>
                    <span
                      aria-hidden="true"
                      className="mt-5 inline-flex h-1 w-14 justify-center rounded-full bg-gradient-to-r from-[#e65101] via-[#f59e0b] to-transparent"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative w-full px-4 pb-16" aria-labelledby="skills-heading">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 id="skills-heading" className="text-3xl font-bold text-slate-900 dark:text-[#FAE3B4]">
              Skills Snapshot
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm font-mono text-slate-600 dark:text-slate-300">
              A blend of frontend craft, backend rigor, and delivery tooling that supports fast, dependable product increments.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categorizedSkills.map((category) => (
              <article
                key={category.title}
                className="group h-full rounded-2xl border border-slate-200 bg-white/90 p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e65101]/50 hover:shadow-2xl hover:shadow-[#e65101]/10 dark:border-slate-700 dark:bg-slate-900/80"
              >
                <header>
                  <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#e65101] dark:text-[#FAE3B4]">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm font-mono leading-relaxed text-slate-600 dark:text-slate-300">
                    {category.description}
                  </p>
                </header>
                <ul className="mt-6 grid grid-cols-2 gap-4" role="list">
                  {category.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[rgb(255,245,238)]/70 p-3 text-sm font-semibold text-slate-700 transition dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-100">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e65101]/30 bg-white/70 dark:border-[#e65101]/40 dark:bg-slate-900/70">
                        <img src={item.icon} alt="" className="h-6 w-6 object-contain" aria-hidden="true" />
                      </span>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full px-4 pb-20" aria-labelledby="experience-heading">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 id="experience-heading" className="text-3xl font-bold text-slate-900 dark:text-[#FAE3B4]">
              Work Experience
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-mono text-slate-600 dark:text-slate-300">
              Impact across fintech, SaaS, and agency teams—shipping dependable features, guiding cross-functional delivery, and
              evolving platforms over time.
            </p>
          </div>

          <div className="mt-12">
            <VerticalTimeline lineColor={dark ? '#1e293b' : '#e2e8f0'}>
              {experiences.map((experience, idx) => (
                <ExperienceCard key={experience.title + idx} experience={experience} dark={dark} />
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;