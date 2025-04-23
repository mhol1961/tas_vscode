&apos;use client';

import Image from &apos;next/image';
import Link from &apos;next/link';
import { motion } from &apos;framer-motion';
import PageLayout from &apos;@/components/layout/PageLayout';
import AnimatedButton from &apos;@/components/ui/AnimatedButton';
import AnimatedText from &apos;@/components/ui/AnimatedText';
import AnimatedIcon from &apos;@/components/ui/AnimatedIcon';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import {
  FaNetworkWired,
  FaChartLine,
  FaUserFriends,
  FaLaptopCode,
  FaCogs,
  FaDatabase,
  FaExchangeAlt
} from &apos;react-icons/fa';

const testimonials = [
  {
    name: &apos;David Reynolds',
    title: &apos;CIO, Enterprise Solutions Inc.&apos;,
    quote: &apos;TAS transformed our CRM implementation and integration strategy. Their expertise helped us connect previously siloed systems, resulting in a 40% improvement in operational efficiency.&apos;
  },
  {
    name: &apos;Rebecca Chen',
    title: &apos;Marketing Director, GrowthTech',
    quote: &apos;The marketing automation solutions provided by Technology Alliance Solutions have revolutionized how we engage with customers. Our campaign efficiency has improved dramatically and ROI increased by 75%.&apos;
  },
  {
    name: &apos;Michael Torres',
    title: &apos;VP of Operations, Global Innovations',
    quote: &apos;Their technology integration services are exceptional. TAS helped us connect our CRM with our ERP system, creating a seamless flow of information that has transformed our customer relationships.&apos;
  }
];

const features = [
  {
    title: &apos;CRM Implementation',
    description: &apos;Expert implementation of leading CRM platforms customized to your business needs. We ensure seamless adoption, data migration, and integration with your existing systems.&apos;,
    icon: FaUserFriends,
    link: &apos;/services/crm'
  },
  {
    title: &apos;Technology Integration',
    description: &apos;Connect your critical business systems to create a unified ecosystem where data flows seamlessly and processes run efficiently across your organization.&apos;,
    icon: FaExchangeAlt,
    link: &apos;/services/technology-integration'
  },
  {
    title: &apos;Marketing Automation',
    description: &apos;Streamline your marketing processes with powerful automation tools that nurture leads, personalize customer journeys, and drive measurable results.&apos;,
    icon: FaChartLine,
    link: &apos;/services/marketing-automation'
  },
  {
    title: &apos;Custom Solutions',
    description: &apos;Tailored software solutions designed specifically for your unique business challenges, from custom integrations to bespoke applications.&apos;,
    icon: FaLaptopCode,
    link: &apos;/services/custom-solutions'
  },
  {
    title: &apos;System Optimization',
    description: &apos;Maximize the performance of your existing technology investments with expert analysis, fine-tuning, and enhancement of your systems.&apos;,
    icon: FaCogs,
    link: &apos;/services/system-optimization'
  },
  {
    title: &apos;Data Management',
    description: &apos;Comprehensive data solutions including migration, cleansing, governance, and analytics to help you leverage your business information effectively.&apos;,
    icon: FaDatabase,
    link: &apos;/services/data-management'
  }
];

const businessServices = [
  { name: &apos;CRM Strategy', description: &apos;Strategic planning for CRM implementation and adoption', link: &apos;/services/crm' },
  { name: &apos;System Integration', description: &apos;Connect your critical business applications', link: &apos;/services/technology-integration' },
  { name: &apos;Technology Consulting', description: &apos;Expert guidance on your technology ecosystem', link: &apos;/services/system-optimization' },
  { name: &apos;Automation Solutions', description: &apos;Streamline processes and boost efficiency', link: &apos;/services/marketing-automation' }
];

export default function Home() {
  return (
    <PageLayout>
      <main className=&quot;flex-1">
        {/* Hero Section */}
        <section className=&quot;relative h-screen overflow-hidden">
          {/* Background image with overlay */}
          <div className=&quot;absolute inset-0 z-0">
            <Image
              src=&quot;/images/hero/Techy_abstract_hero3.jpg&quot;
              alt=&quot;Technology abstract background&quot;
              fill
              className=&quot;object-cover object-center&quot;
              priority
              sizes=&quot;100vw&quot;
            />
            <div className=&quot;absolute inset-0 bg-gradient-to-r from-primary-navy/90 to-primary-blue/70"></div>
          </div>
          
          {/* Grid pattern overlay */}
          <div className=&quot;absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none z-[1]"></div>

          {/* Animated elements */}
          <motion.div 
            className=&quot;absolute top-1/3 left-[10%] w-64 h-64 rounded-full bg-blue-500/30 filter blur-3xl z-[1]&quot;
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: &quot;easeInOut&quot; }}
          />
          
          <motion.div 
            className=&quot;absolute bottom-1/4 right-[15%] w-80 h-80 rounded-full bg-indigo-500/20 filter blur-3xl z-[1]&quot;
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.25, 0.15, 0.25] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: &quot;easeInOut&quot; }}
          />
          
          {/* Digital particles effect - using gradient dots instead of image */}
          <div className=&quot;absolute inset-0 z-[2] opacity-30 bg-gradient-to-b from-blue-500/5 to-transparent
            [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_70%)]
            [background-size:20px_20px] [background-position:0_0,10px_10px]"></div>

          {/* Content Container */}
          <div className=&quot;relative h-full z-10 flex items-center">
            <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8">
              <div className=&quot;grid md:grid-cols-2 gap-8 items-center">
                {/* Left column: Text content */}
                <motion.div 
                  className=&quot;text-white md:pr-8&quot;
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h5 className=&quot;text-blue-300 font-medium tracking-wider mb-3 uppercase text-sm inline-flex items-center">
                    <span className=&quot;w-5 h-[2px] bg-blue-400 mr-2"></span>
                    TECHNOLOGY ALLIANCE SOLUTIONS
                  </h5>
                  <h1 className=&quot;text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 font-heading">
                    Transforming Business 
                    <span className=&quot;bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500 block mt-1">Through Technology</span>
                  </h1>
                  
                  <p className=&quot;text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
                    Enterprise-grade CRM implementation, system integration, and marketing automation expertise to optimize your operations and accelerate growth.
                  </p>

                  <div className=&quot;flex flex-wrap gap-4">
                    <Link href=&quot;/services">
                      <AnimatedButton className=&quot;bg-blue-600 hover:bg-blue-700 text-white border-white border-2 shadow-lg">
                        Explore Solutions
                      </AnimatedButton>
                    </Link>
                    <Link href=&quot;/contact">
                      <AnimatedButton className=&quot;bg-white/20 hover:bg-white/30 text-white border-white border-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105">
                        Get in Touch
                      </AnimatedButton>
                    </Link>
                  </div>
                  
                  {/* Trust indicators */}
                  <div className=&quot;mt-12 flex items-center">
                    <span className=&quot;text-white/70 text-sm mr-4">Trusted by leading platforms:</span>
                    <div className=&quot;flex items-center space-x-6">
                      <Image src=&quot;/images/photos/Microsoft_logo.png&quot; alt=&quot;Microsoft&quot; width={90} height={30} className=&quot;opacity-75 hover:opacity-100 transition-opacity h-7 w-auto object-contain&quot; />
                      <Image src=&quot;/images/photos/Salesforce_logo.png&quot; alt=&quot;Salesforce&quot; width={90} height={30} className=&quot;opacity-75 hover:opacity-100 transition-opacity h-7 w-auto object-contain&quot; />
                      <Image src=&quot;/images/photos/Hubspot_logo.png&quot; alt=&quot;HubSpot&quot; width={90} height={30} className=&quot;opacity-75 hover:opacity-100 transition-opacity h-7 w-auto object-contain&quot; />
                    </div>
                  </div>
                </motion.div>
                
                {/* Right column: Visual element */}
                <motion.div 
                  className=&quot;hidden md:block relative&quot;
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className=&quot;relative h-[450px] w-full">
                    {/* Decorative elements */}
                    <div className=&quot;absolute top-[10%] right-[15%] w-32 h-32 rounded-full border-4 border-blue-300/30 z-10"></div>
                    <div className=&quot;absolute bottom-[15%] left-[10%] w-20 h-20 rounded-full border-2 border-blue-400/40 z-10"></div>
                    
                    {/* Floating dashboard mockup */}
                    <motion.div 
                      className=&quot;absolute top-[5%] right-[5%] w-[65%] h-[65%] rounded-xl overflow-hidden shadow-2xl z-10&quot;
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: &quot;easeInOut&quot; }}
                    >
                      <Image 
                        src=&quot;/images/photos/Laptop_CRM_dashboard.png&quot; 
                        alt=&quot;CRM Dashboard&quot; 
                        fill
                        className=&quot;object-cover object-center&quot;
                      />
                      <div className=&quot;absolute inset-0 bg-gradient-to-tr from-primary-blue/10 to-transparent"></div>
                    </motion.div>
                    
                    {/* Secondary floating element */}
                    <motion.div 
                      className=&quot;absolute bottom-[5%] left-[5%] w-[65%] h-[50%] rounded-xl overflow-hidden shadow-2xl z-20&quot;
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: &quot;easeInOut&quot;, delay: 0.5 }}
                    >
                      <Image
                        src=&quot;/images/hero/OutOfTheBox_hero_photo.png&quot;
                        alt=&quot;Abstract Technology Cityscape&quot;
                        fill
                        className=&quot;object-contain object-center&quot;
                      />
                      <div className=&quot;absolute inset-0 bg-gradient-to-bl from-primary-blue/20 to-transparent"></div>
                    </motion.div>
                    
                    {/* Glowing orb */}
                    <div className=&quot;absolute left-[40%] top-[40%] w-24 h-24 rounded-full bg-blue-500/40 filter blur-xl z-0"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            className=&quot;absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20&quot;
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: &quot;easeInOut&quot; }}
          >
            <div className=&quot;w-8 h-12 rounded-full border-2 border-white/50 flex justify-center pt-2">
              <motion.div 
                className=&quot;w-1 h-3 bg-blue-400 rounded-full&quot;
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Services Overview */}
        <AnimatedSection className=&quot;py-20 bg-white dark:bg-primary-slate text-primary-navy dark:text-white relative overflow-hidden">
          <div className=&quot;absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className=&quot;text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=&quot;text-base text-primary-blue font-semibold tracking-wide uppercase mb-3 inline-block px-4 py-1 bg-primary-blue/10 rounded-full"
              >
                Our Services
              </motion.h2>
              <AnimatedText
                text=&quot;Complete Technology Solutions&quot;
                className=&quot;text-3xl font-bold text-primary-navy dark:text-white sm:text-4xl&quot;
                highlight={false}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className=&quot;mt-4 text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                We combine deep technical expertise with strategic business acumen to deliver technology solutions that drive measurable results.
              </motion.p>
            </div>

            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.slice(0, 6).map((feature, index) => {
                const variants = [&apos;primary', &apos;secondary', &apos;gradient', &apos;outline'];
                const variant = variants[index % variants.length] as &apos;primary' | &apos;secondary' | &apos;gradient' | &apos;outline';
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, boxShadow: &apos;0 20px 25px -5px rgba(35, 41, 70, 0.08), 0 10px 10px -5px rgba(35, 41, 70, 0.04)&apos; }}
                    className=&quot;group bg-primary-light dark:bg-primary-navy/50 p-8 rounded-xl shadow-md border border-primary-gray hover:border-primary-blue/40 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className=&quot;absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-primary-aqua/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className=&quot;relative z-10">
                      <div className=&quot;mb-6 flex justify-center">
                        <AnimatedIcon
                          icon={feature.icon}
                          delay={0.1 + index * 0.1}
                          variant={variant}
                          size=&quot;lg&quot;
                          className={index === 1 ? &quot;dark:text-white dark:border-sky-400 dark:border-2 dark:bg-white/10&quot; : &quot;dark:text-white&quot;}
                        />
                      </div>
                      <h3 className=&quot;mt-4 text-xl font-semibold text-primary-navy dark:text-blue-300 group-hover:text-primary-blue transition-colors duration-300 text-center">
                        {feature.title}
                      </h3>
                      <p className=&quot;mt-3 text-primary-slate dark:text-primary-light/80">
                        {feature.description}
                      </p>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className=&quot;mt-5"
                      >
                        <Link href={feature.link} className=&quot;inline-flex items-center text-primary-blue font-medium group-hover:underline cursor-pointer">
                          Learn more
                          <svg className=&quot;ml-2 w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg">
                            <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 5l7 7-7 7&quot; />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className=&quot;mt-12 text-center">
              <Link href=&quot;/services">
                <AnimatedButton className=&quot;bg-primary-blue text-white hover:bg-primary-blue/90 border-none shadow-md">
                  View All Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Technology Integration Section */}
        <AnimatedSection className=&quot;py-20 bg-primary-slate text-white relative overflow-hidden">
          <div className=&quot;absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className=&quot;grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className=&quot;text-3xl font-bold mb-6">
                  Seamless Technology Integration
                </h2>
                <p className=&quot;text-lg text-white/90 mb-8">
                  Connect your critical business systems to create a unified ecosystem where data flows seamlessly and processes run efficiently across your organization.
                </p>
                <ul className=&quot;space-y-4 mb-8">
                  {[
                    &apos;API & data integration expertise',
                    &apos;Connect CRM, ERP, and marketing platforms',
                    &apos;Eliminate data silos and duplications',
                    &apos;Automate cross-system workflows'
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      className=&quot;flex items-start&quot;
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      <span className=&quot;text-blue-400 mr-2">✓</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <Link href=&quot;/services/technology-integration">
                  <AnimatedButton className=&quot;bg-blue-600 hover:bg-blue-700 text-white border-transparent shadow-md">
                    Explore Integration Services
                  </AnimatedButton>
                </Link>
              </motion.div>
              
              <motion.div
                className=&quot;relative rounded-xl overflow-hidden shadow-2xl&quot;
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className=&quot;aspect-w-4 aspect-h-3 bg-primary-navy relative rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src=&quot;/images/photos/Table_with_laptops.png&quot;
                    alt=&quot;Technology Integration&quot;
                    fill
                    className=&quot;object-cover rounded-xl opacity-70&quot;
                    sizes=&quot;(max-width: 768px) 100vw, 50vw&quot;
                  />
                  <div className=&quot;absolute inset-0 bg-gradient-to-tr from-primary-blue/40 to-transparent"></div>
                  
                  {/* Integration Mockup */}
                  <div className=&quot;absolute inset-0 flex items-center justify-center">
                    <div className=&quot;bg-white/10 backdrop-blur-lg rounded-lg w-[80%] h-[80%] p-5 border border-white/20 shadow-xl">
                      <div className=&quot;border-b border-white/20 pb-2 mb-4">
                        <h3 className=&quot;text-xl font-bold">Systems Integration</h3>
                      </div>
                      
                      <div className=&quot;flex justify-center items-center h-[80%]">
                        <div className=&quot;relative w-full h-full">
                          <div className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary-blue/30 rounded-full flex items-center justify-center">
                            <FaExchangeAlt className=&quot;text-white text-2xl&quot; />
                          </div>
                          
                          {/* Connected systems */}
                          {[&apos;CRM', &apos;ERP', &apos;Marketing', &apos;Analytics'].map((system, index) => {
                            const angle = (index * Math.PI / 2);
                            const x = Math.cos(angle) * 120;
                            const y = Math.sin(angle) * 120;
                            return (
                              <div 
                                key={system}
                                className=&quot;absolute w-24 h-16 bg-white/10 rounded-lg flex items-center justify-center border border-white/20&quot;
                                style={{ 
                                  left: `calc(50% + ${x}px - 48px)`, 
                                  top: `calc(50% + ${y}px - 32px)`
                                }}
                              >
                                <span className=&quot;text-white font-medium">{system}</span>
                              </div>
                            );
                          })}
                          
                          {/* Connection lines */}
                          <svg className=&quot;absolute inset-0 w-full h-full&quot; xmlns=&quot;http://www.w3.org/2000/svg">
                            {[&apos;CRM', &apos;ERP', &apos;Marketing', &apos;Analytics'].map((_, index) => {
                              const angle = (index * Math.PI / 2);
                              const x = Math.cos(angle) * 120;
                              const y = Math.sin(angle) * 120;
                              return (
                                <line 
                                  key={index}
                                  x1=&quot;50%&quot; 
                                  y1=&quot;50%&quot; 
                                  x2={`calc(50% + ${x}px)`}
                                  y2={`calc(50% + ${y}px)`}
                                  stroke=&quot;rgba(255,255,255,0.3)&quot; 
                                  strokeWidth=&quot;2&quot;
                                  strokeDasharray=&quot;5,5&quot;
                                />
                              );
                            })}
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Business Services */}
        <section className=&quot;py-16 bg-white dark:bg-primary-navy">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-12">
              <h2 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mb-4">Technology Services</h2>
              <p className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-2xl mx-auto">
                Comprehensive suite of technology consulting and implementation services to optimize your business operations.
              </p>
            </div>
            
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessServices.map((service, index) => (
                <Link href={service.link} key={service.name}>
                  <motion.div
                    className=&quot;bg-primary-light dark:bg-primary-slate/40 rounded-xl p-6 h-full flex flex-col hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary-blue/20&quot;
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className=&quot;w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                      <FaNetworkWired className=&quot;text-blue-600 dark:text-blue-400&quot; />
                    </div>
                    <h3 className=&quot;text-xl font-semibold text-primary-navy dark:text-white mb-2">{service.name}</h3>
                    <p className=&quot;text-primary-slate dark:text-white/70 mb-4 flex-grow">{service.description}</p>
                    <span className=&quot;text-primary-blue font-medium flex items-center">
                      Learn more
                      <svg className=&quot;ml-1 w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24">
                        <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 5l7 7-7 7&quot; />
                      </svg>
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <AnimatedSection className=&quot;py-24 bg-primary-blue/5 dark:bg-primary-slate text-primary-navy dark:text-white relative overflow-hidden">
          {/* Background image with overlay */}
          <div className=&quot;absolute inset-0 z-0">
            <Image
              src=&quot;/images/photos/Two_People_looking_at_screen.png&quot;
              alt=&quot;Technology Collaboration&quot;
              fill
              className=&quot;object-cover object-center opacity-10&quot;
              sizes=&quot;100vw&quot;
            />
            <div className=&quot;absolute inset-0 bg-gradient-primary opacity-90"></div>
          </div>

          {/* Decorative elements */}
          <div className=&quot;absolute inset-0 bg-grid-pattern opacity-[0.05] dark:opacity-[0.05] pointer-events-none z-10"></div>
          <div className=&quot;absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 -translate-x-20 z-10"></div>
          <div className=&quot;absolute bottom-0 left-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20 z-10"></div>

          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className=&quot;text-center max-w-3xl mx-auto mb-16">
              <AnimatedText
                text=&quot;Client Success Stories&quot;
                className=&quot;text-3xl font-bold text-primary-navy dark:text-white sm:text-4xl&quot;
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className=&quot;mt-4 text-lg text-primary-navy/80 dark:text-white/90"
              >
                See how our clients have transformed their businesses with our technology solutions.
              </motion.p>
            </div>

            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: &apos;0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)&apos; }}
                  className=&quot;bg-white dark:bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-primary-gray dark:border-white/10 hover:border-primary-blue/40 dark:hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Quote icon */}
                  <div className=&quot;absolute top-4 right-4 text-primary-blue/20 dark:text-white/20 text-4xl font-serif group-hover:text-primary-blue/30 dark:group-hover:text-white/30 transition-colors duration-300">&ldquo;</div>

                  {/* Background gradient that appears on hover */}
                  <div className=&quot;absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className=&quot;relative z-10">
                    <p className=&quot;text-primary-navy/80 dark:text-white/90 italic mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className=&quot;flex items-center">
                      <div className=&quot;w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/40 to-primary-blue/40 mr-4 flex items-center justify-center border-2 border-primary-gray/20 dark:border-white/20 overflow-hidden">
                        {/* Client initial or avatar */}
                        <span className=&quot;text-white font-bold">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className=&quot;font-semibold text-primary-navy dark:text-white group-hover:text-primary-blue dark:group-hover:text-primary-blue/90 transition-colors duration-300">{testimonial.name}</h4>
                        <p className=&quot;text-sm text-primary-navy/70 dark:text-white/70">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className=&quot;mt-12 text-center">
              <Link href=&quot;/contact">
                <AnimatedButton className=&quot;bg-blue-600 hover:bg-blue-700 text-white border-transparent shadow-lg">
                  Become Our Next Success Story
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className=&quot;py-24 bg-white dark:bg-primary-slate text-primary-navy dark:text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className=&quot;absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          <div className=&quot;absolute top-0 right-0 w-1/3 h-full bg-primary-blue/5 skew-x-12 -translate-x-20"></div>
          <div className=&quot;absolute bottom-0 left-0 w-1/3 h-full bg-primary-blue/5 skew-x-12 translate-x-20"></div>

          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedText
              text=&quot;Ready to Transform Your Business?&quot;
              className=&quot;text-4xl font-extrabold mb-6 text-primary-navy dark:text-white&quot;
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className=&quot;text-xl max-w-2xl mx-auto mb-10 text-primary-slate dark:text-white/90"
            >
              Let our team of experts help you implement, integrate, and optimize your technology solutions for maximum business impact.
            </motion.p>

            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center">
              <Link href=&quot;/contact">
                <AnimatedButton className=&quot;bg-blue-600 text-white hover:bg-blue-700 border-none shadow-md">
                  Book a Consultation
                </AnimatedButton>
              </Link>

              <Link href=&quot;/services">
                <AnimatedButton className=&quot;bg-primary-navy text-white hover:bg-primary-navy/90 border-2 border-primary-blue shadow-md">
                  Browse Services
                </AnimatedButton>
              </Link>
            </div>

            {/* Stats section */}
            <div className=&quot;mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: &apos;200+&apos;, label: &apos;Clients Served' },
                { value: &apos;95%&apos;, label: &apos;Client Satisfaction' },
                { value: &apos;40%&apos;, label: &apos;Average Efficiency Gains' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
                  viewport={{ once: true }}
                  className=&quot;bg-primary-light dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 text-primary-navy dark:text-white shadow-md"
                >
                  <div className=&quot;text-4xl font-bold mb-2 text-blue-600 dark:text-blue-400">{stat.value}</div>
                  <div className=&quot;text-primary-slate dark:text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
