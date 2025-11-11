import React, { useState, useRef, useEffect } from 'react';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { portfolios } from '../constants';

const ProjectCard = ({ item, dark, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const offset = (elementCenter - viewportCenter) * 0.1;
      setParallaxOffset(offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const overlayGradient = isHovered
    ? dark
      ? 'bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent opacity-100'
      : 'bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent opacity-100'
    : dark
      ? 'bg-gradient-to-t from-slate-950/65 via-transparent to-transparent opacity-80'
      : 'bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60';

  const badgeClasses = dark
    ? 'inline-flex rounded-full border border-[#e65101]/60 bg-white/10 px-3 py-1 text-xs font-semibold text-[#ffe8d5] backdrop-blur-md'
    : 'inline-flex rounded-full border border-[#e65101]/50 bg-white/80 px-3 py-1 text-xs font-semibold text-[#e65101] shadow-sm backdrop-blur-sm';

  const labelChipClasses = dark
    ? 'absolute right-4 top-4 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-md transition-all duration-300 group-hover:border-[#e65101]/60 group-hover:bg-[#e65101]/20 group-hover:text-[#ffe8d5]'
    : 'absolute right-4 top-4 inline-flex rounded-full border border-[#e65101]/30 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#e65101] shadow-sm backdrop-blur-md transition-all duration-300 group-hover:border-[#e65101]/60 group-hover:bg-[#e65101]/15 group-hover:text-[#9a3c00]';

  const titleClasses = dark ? 'text-2xl font-black text-white sm:text-3xl drop-shadow-[0_12px_25px_rgba(8,47,73,0.45)]' : 'text-2xl font-black text-white sm:text-3xl drop-shadow-[0_10px_20px_rgba(15,23,42,0.35)]';

  const descriptionClasses = dark ? 'mt-2 text-sm leading-relaxed text-slate-200/90 sm:text-base' : 'mt-2 text-sm leading-relaxed text-slate-100 sm:text-base';

  const primaryButtonClasses = dark
    ? 'inline-flex items-center gap-2 rounded-full bg-[#e65101] px-5 py-2 font-mono text-xs font-semibold text-white shadow-lg shadow-[#e65101]/50 transition-all duration-200 hover:-translate-y-1 hover:shadow-[#e65101]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e65101]'
    : 'inline-flex items-center gap-2 rounded-full bg-[#e65101] px-5 py-2 font-mono text-xs font-semibold text-white shadow-lg shadow-[#e65101]/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-[#f97316]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e65101]';

  const secondaryButtonClasses = dark
    ? 'inline-flex items-center justify-center rounded-full border-2 border-white/35 bg-white/10 p-2 text-white transition-all duration-200 hover:-translate-y-1 hover:border-[#e65101] hover:bg-[#e65101]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e65101]'
    : 'inline-flex items-center justify-center rounded-full border-2 border-[#e65101]/35 bg-white/90 p-2 text-[#9a3c00] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#e65101] hover:bg-[#ffe8d5]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e65101]';

  return (
    <article
      ref={cardRef}
      className={`group relative isolate h-80 w-full overflow-hidden rounded-2xl border transition-all duration-300 ${
        dark
          ? 'border-slate-800 bg-slate-900/40 shadow-[0_20px_45px_rgba(15,23,42,0.35)]'
          : 'border-white/50 bg-white/40 shadow-[0_20px_45px_rgba(15,23,42,0.12)]'
      } ${isHovered ? '-translate-y-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out"
        style={{
          backgroundImage: `url(${item.image})`,
          transform: `translateY(${parallaxOffset}px)`,
        }}
        aria-hidden="true"
      />

      {/* Dark Overlay Base */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${overlayGradient}`}
        aria-hidden="true"
      />

      {/* Glassmorphism Overlay Content */}
      <div
        className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 sm:p-8 ${
          isHovered ? 'backdrop-blur-sm' : 'backdrop-blur-none'
        }`}
      >
        {/* Project Info - Reveal on Hover */}
        <div className="space-y-4">
          <div
            className={`transform transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <h3 className={titleClasses}>
              {item.name}
            </h3>
            {item.description && (
              <p className={descriptionClasses}>
                {item.description}
              </p>
            )}
          </div>

          {/* Tech Stack Badges - Reveal on Hover */}
          {item.tech && (
            <div
              className={`flex flex-wrap gap-2 transition-all duration-300 delay-75 ${
                isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              {item.tech.map((tech, idx) => (
                <span key={idx} className={badgeClasses}>
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* CTA Buttons - Reveal on Hover */}
          <div
            className={`flex items-center gap-3 pt-2 transition-all duration-300 delay-150 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryButtonClasses}
              aria-label={`Visit ${item.name}`}
            >
              <FontAwesomeIcon icon={faExternalLink} className="h-3 w-3" aria-hidden="true" />
              <span className="hidden sm:inline">Visit</span>
            </a>
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButtonClasses}
                aria-label={`GitHub for ${item.name}`}
              >
                <FontAwesomeIcon icon={faGithub} className={dark ? 'h-4 w-4 text-white' : 'h-4 w-4 text-[#9a3c00]'} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Link Badge - Always Visible */}
        <span className={labelChipClasses}>
          Project
        </span>
      </div>
    </article>
  );
};

const Portfolio = ({ dark }) => {
  const heroContainerClasses =
    'relative mx-auto max-w-4xl overflow-hidden rounded-3xl border px-6 py-14 text-center shadow-[0_35px_80px_rgba(15,23,42,0.18)] backdrop-blur-lg sm:px-10 border-white/60 bg-white/75 dark:border-[#e65101]/25 dark:bg-slate-900/70 dark:shadow-[0_35px_80px_rgba(8,47,73,0.45)] dark:backdrop-blur-xl';

  const heroAccentClasses =
    'absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(230,81,1,0.18),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(230,81,1,0.22),transparent_60%)]';

  const heroBadgeClasses =
    'inline-flex items-center justify-center rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] shadow-sm backdrop-blur-md border-[#e65101]/30 bg-white/80 text-[#9a3c00] dark:border-[#e65101]/45 dark:bg-slate-950/50 dark:text-[#ffe8d5]';

  const heroFlareLeftClasses =
    'absolute left-10 top-10 h-28 w-28 rounded-full bg-gradient-to-br from-[#e65101]/20 via-transparent to-transparent blur-3xl dark:from-[#e65101]/30';

  const heroFlareRightClasses =
    'absolute right-6 bottom-8 h-24 w-24 rounded-full bg-gradient-to-br from-[#f97316]/20 via-transparent to-transparent blur-2xl dark:from-[#f97316]/30';

  const heroHeadingClasses =
    'mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white';

  const heroDividerClasses =
    'mx-auto mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-[#e65101] via-[#f59e0b] to-transparent dark:from-[#f97316] dark:via-[#e65101]';

  return (
    <main
      className={`relative w-full min-h-screen overflow-hidden transition-colors duration-500 ${
        dark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Background Gradient */}
      <div
        className={`pointer-events-none absolute inset-0 ${
          dark
            ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
            : 'bg-gradient-to-br from-white via-slate-50 to-slate-100'
        }`}
        aria-hidden="true"
      />

      {/* Radial Gradient Accent */}
      <div
        className={`pointer-events-none absolute inset-0 ${
          dark
            ? 'bg-[radial-gradient(circle_at_top,rgba(230,81,1,0.25),transparent_65%)]'
            : 'bg-[radial-gradient(circle_at_top,rgba(230,81,1,0.15),transparent_65%)]'
        }`}
        aria-hidden="true"
      />

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-[40vh] flex-col items-center justify-center px-4 py-16 sm:py-24 dark:bg-slate-800" aria-labelledby="portfolio-heading">
        <div className={heroContainerClasses}>
          <span className={heroAccentClasses} aria-hidden="true" />
          <span className={heroFlareLeftClasses} aria-hidden="true" />
          <span className={heroFlareRightClasses} aria-hidden="true" />

          <span className={heroBadgeClasses}>
            Featured Work
          </span>

          <h1
            id="portfolio-heading"
            className={heroHeadingClasses}
          >
            <span
              className={`bg-gradient-to-r ${
                dark
                  ? 'from-white via-[#ffe8d5] to-[#e65101]'
                  : 'from-[#1f2937] via-[#e65101] to-[#f97316]'
              } bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-[#1f2937] dark:via-[#e65101] dark:to-[#f97316]`}
            >
              Portfolio
            </span>
          </h1>
          <div
            className={heroDividerClasses}
            aria-hidden="true"
          />
          <p
            className={`mx-auto mt-6 max-w-2xl text-base font-mono leading-relaxed sm:text-lg ${
              dark ? 'text-slate-200' : 'text-slate-600'
            }`}
          >
            A cinematic look at platforms and experiences I’ve crafted—combining resilient engineering with immersive
            interaction design.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 px-4 pb-24 sm:px-6 lg:px-8 dark:bg-slate-800" aria-labelledby="projects-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="projects-heading" className="sr-only">
            Featured Projects
          </h2>
          <div className="grid auto-rows-max gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolios.map((item, index) => (
              <ProjectCard key={`${item.name}-${index}`} item={item} dark={dark} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;