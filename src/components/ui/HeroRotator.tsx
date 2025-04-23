import React, { useEffect, useState } from &apos;react';
import Image from &apos;next/image';
import AnimatedButton from &apos;./AnimatedButton';

// Service slides data
const heroSlides = [
  {
    image: &apos;/images/hero/Blue_abstract_hero1.png',
    headline: &apos;Empowering Growth with Tailored CRM Solutions',
    subheadline: &apos;Dynamics 365, Salesforce, HubSpot — Expert Implementation & Optimization',
    cta: &apos;Request a Consultation',
  },
  {
    image: &apos;/images/hero/Tech_abstract_cityScape_hero.png',
    headline: &apos;Accelerate Engagement with Intelligent Marketing Automation',
    subheadline: &apos;Marketo, D365, ClickDimensions, HubSpot — Omnichannel Campaigns & ROI',
    cta: &apos;Request a Consultation',
  },
  {
    image: &apos;/images/hero/Techy_abstract_hero3.jpg',
    headline: &apos;Seamless Integration for a Connected Enterprise',
    subheadline: &apos;Custom & Native Integrations — Optimize Workflows, Enhance Efficiency',
    cta: &apos;Request a Consultation',
  },
  {
    image: &apos;/images/hero/Techy_cuty_image_hero2.jpg',
    headline: &apos;Strategic Guidance for Digital Transformation',
    subheadline: &apos;Actionable Insights, Proven Results — Your Trusted Advisors',
    cta: &apos;Request a Consultation',
  },
];

const ROTATE_INTERVAL = 6000; // 6 seconds

const HeroRotator: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className=&quot;relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary-slate mt-[-80px] pt-[80px]">
      {/* Background Image */}
      <div className=&quot;absolute inset-0 z-0">
        <Image 
          src={slide.image} 
          alt={slide.headline}
          fill
          className=&quot;object-cover object-center w-full h-full&quot; 
          priority
        />
        {/* Overlay for contrast - reducing opacity */}
        <div className=&quot;absolute inset-0 bg-primary-slate/40&quot; />
      </div>
      {/* Content */}
      <div className=&quot;relative z-10 max-w-3xl mx-auto text-center px-4 py-12">
        <h1 className=&quot;text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 font-[&apos;Montserrat',&apos;IBM Plex Sans',&apos;Inter',sans-serif] drop-shadow-lg">
          {slide.headline}
        </h1>
        <p className=&quot;text-lg md:text-xl text-primary-light mb-8 font-medium drop-shadow">
          {slide.subheadline}
        </p>
        <AnimatedButton className=&quot;bg-primary-blue text-white hover:bg-primary-aqua font-semibold text-lg px-10 py-4 shadow-lg">
          {slide.cta}
        </AnimatedButton>
      </div>
      {/* Slide indicators */}
      <div className=&quot;absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, idx) => (
          <span
            key={idx}
            className={`inline-block w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? &apos;bg-primary-blue' : &apos;bg-primary-light/40'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroRotator;
