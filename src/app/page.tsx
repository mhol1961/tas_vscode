'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedButton from '@/components/ui/AnimatedButton';
import AnimatedText from '@/components/ui/AnimatedText';
import AnimatedIcon from '@/components/ui/AnimatedIcon';
import AnimatedSection from '@/components/ui/AnimatedSection';
import {
  FaNetworkWired,
  FaChartLine,
  FaUserFriends,
  FaLaptopCode,
  FaCogs,
  FaDatabase,
  FaExchangeAlt
} from 'react-icons/fa';

const testimonials = [
  {
    name: 'David Reynolds',
    title: 'CIO, Enterprise Solutions Inc.',
    quote: 'TAS transformed our CRM implementation and integration strategy. Their expertise helped us connect previously siloed systems, resulting in a 40% improvement in operational efficiency.'
  },
  {
    name: 'Rebecca Chen',
    title: 'Marketing Director, GrowthTech',
    quote: 'The marketing automation solutions provided by Technology Alliance Solutions have revolutionized how we engage with customers. Our campaign efficiency has improved dramatically and ROI increased by 75%.'
  },
  {
    name: 'Michael Torres',
    title: 'VP of Operations, Global Innovations',
    quote: 'Their technology integration services are exceptional. TAS helped us connect our CRM with our ERP system, creating a seamless flow of information that has transformed our customer relationships.'
  }
];

const features = [
  {
    title: 'CRM Implementation',
    description: 'Expert implementation of leading CRM platforms customized to your business needs. We ensure seamless adoption, data migration, and integration with your existing systems.',
    icon: FaUserFriends,
    link: '/services/crm'
  },
  {
    title: 'Technology Integration',
    description: 'Connect your critical business systems to create a unified ecosystem where data flows seamlessly and processes run efficiently across your organization.',
    icon: FaExchangeAlt,
    link: '/services/technology-integration'
  },
  {
    title: 'Marketing Automation',
    description: 'Streamline your marketing processes with powerful automation tools that nurture leads, personalize customer journeys, and drive measurable results.',
    icon: FaChartLine,
    link: '/services/marketing-automation'
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored software solutions designed specifically for your unique business challenges, from custom integrations to bespoke applications.',
    icon: FaLaptopCode,
    link: '/services/custom-solutions'
  },
  {
    title: 'System Optimization',
    description: 'Maximize the performance of your existing technology investments with expert analysis, fine-tuning, and enhancement of your systems.',
    icon: FaCogs,
    link: '/services/system-optimization'
  },
  {
    title: 'Data Management',
    description: 'Comprehensive data solutions including migration, cleansing, governance, and analytics to help you leverage your business information effectively.',
    icon: FaDatabase,
    link: '/services/data-management'
  }
];

const businessServices = [
  { name: 'CRM Strategy', description: 'Strategic planning for CRM implementation and adoption', link: '/services/crm' },
  { name: 'System Integration', description: 'Connect your critical business applications', link: '/services/technology-integration' },
  { name: 'Technology Consulting', description: 'Expert guidance on your technology ecosystem', link: '/services/system-optimization' },
  { name: 'Automation Solutions', description: 'Streamline processes and boost efficiency', link: '/services/marketing-automation' }
];

export default function Home() {
  return (
    <PageLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/Techy_abstract_hero3.jpg"
              alt="Technology abstract background"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/90 to-primary-blue/70"></div>
          </div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none z-[1]"></div>

          {/* Animated elements */}
          <motion.div 
            className="absolute top-1/3 left-[10%] w-64 h-64 rounded-full bg-blue-500/30 filter blur-3xl z-[1]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div 
            className="absolute bottom-1/4 right-[15%] w-80 h-80 rounded-full bg-indigo-500/20 filter blur-3xl z-[1]"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.25, 0.15, 0.25] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Digital particles effect - using gradient dots instead of image */}
          <div className="absolute inset-0 z-[2] opacity-30 bg-gradient-to-b from-blue-500/5 to-transparent
            [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_70%)]
            [background-size:20px_20px] [background-position:0_0,10px_10px]"></div>

          {/* Content Container */}
          <div className="relative h-full z-10 flex items-center justify-center min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left column: Text content */}
                <motion.div 
                  className="text-white md:pr-8"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h5 className="text-blue-300 font-medium tracking-wider mb-3 uppercase text-xs sm:text-sm inline-flex items-center">
                    <span className="w-5 h-[2px] bg-blue-400 mr-2"></span>
                    TECHNOLOGY ALLIANCE SOLUTIONS
                  </h5>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 font-heading">
                    Transforming Business 
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500 block mt-1">Through Technology</span>
                  </h1>
                  
                  <p className="text-base sm:text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
                    Enterprise-grade CRM implementation, system integration, and marketing automation expertise to optimize your operations and accelerate growth.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services">
                      <AnimatedButton className="bg-blue-600 hover:bg-blue-700 text-white border-white border-2 shadow-lg">
                        Explore Solutions
                      </AnimatedButton>
                    </Link>
                    <Link href="/contact">
                      <AnimatedButton className="bg-white/20 hover:bg-white/30 text-white border-white border-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105">
                        Get in Touch
                      </AnimatedButton>
                    </Link>
                  </div>
                  
                  {/* Trust indicators */}
                  <div className="mt-8 sm:mt-12">
                    <span className="text-white/70 text-sm block sm:inline mr-4 mb-2 sm:mb-0">Trusted by leading platforms:</span>
                    <div className="flex items-center space-x-6 mt-3 sm:mt-0 sm:inline-flex">
                      <Image src="/images/photos/Microsoft_logo.png" alt="Microsoft" width={90} height={30} className="opacity-75 hover:opacity-100 transition-opacity h-7 w-auto object-contain" />
                      <Image src="/images/photos/Salesforce_logo.png" alt="Salesforce" width={90} height={30} className="opacity-75 hover:opacity-100 transition-opacity h-7 w-auto object-contain" />
                      <Image src="/images/photos/Hubspot_logo.png" alt="HubSpot" width={90} height={30} className="opacity-75 hover:opacity-100 transition-opacity h-7 w-auto object-contain" />
                    </div>
                  </div>
                </motion.div>
                
                {/* Right column: Visual element */}
                <motion.div 
                  className="hidden md:block relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="relative h-[450px] w-full">
                    {/* Decorative elements */}
                    <div className="absolute top-[10%] right-[15%] w-32 h-32 rounded-full border-4 border-blue-300/30 z-10"></div>
                    <div className="absolute bottom-[15%] left-[10%] w-20 h-20 rounded-full border-2 border-blue-400/40 z-10"></div>
                    
                    {/* Floating dashboard mockup */}
                    <motion.div 
                      className="absolute top-[5%] right-[5%] w-[65%] h-[65%] rounded-xl overflow-hidden shadow-2xl z-10"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Image 
                        src="/images/photos/Laptop_CRM_dashboard.png" 
                        alt="CRM Dashboard" 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/10 to-transparent"></div>
                    </motion.div>
                    
                    {/* Secondary floating element */}
                    <motion.div 
                      className="absolute bottom-[5%] left-[5%] w-[65%] h-[50%] rounded-xl overflow-hidden shadow-2xl z-20"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <Image
                        src="/images/hero/OutOfTheBox_hero_photo.png"
                        alt="Abstract Technology Cityscape"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-bl from-primary-blue/20 to-transparent"></div>
                    </motion.div>
                    
                    {/* Glowing orb */}
                    <div className="absolute left-[40%] top-[40%] w-24 h-24 rounded-full bg-blue-500/40 filter blur-xl z-0"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center pt-2">
              <motion.div 
                className="w-1 h-3 bg-blue-400 rounded-full"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Services Overview */}
        <AnimatedSection className="py-20 bg-white dark:bg-primary-slate text-primary-navy dark:text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-base text-primary-blue font-semibold tracking-wide uppercase mb-3 inline-block px-4 py-1 bg-primary-blue/10 rounded-full"
              >
                Our Services
              </motion.h2>
              <AnimatedText
                text="Complete Technology Solutions"
                className="text-3xl font-bold text-primary-navy dark:text-white sm:text-4xl"
                highlight={false}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-4 text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                We combine deep technical expertise with strategic business acumen to deliver technology solutions that drive measurable results.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.slice(0, 6).map((feature, index) => {
                const variants = ['primary', 'secondary', 'gradient', 'outline'];
                const variant = variants[index % variants.length] as 'primary' | 'secondary' | 'gradient' | 'outline';
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(35, 41, 70, 0.08), 0 10px 10px -5px rgba(35, 41, 70, 0.04)' }}
                    className="group bg-primary-light dark:bg-primary-navy/50 p-8 rounded-xl shadow-md border border-primary-gray hover:border-primary-blue/40 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-primary-aqua/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="mb-6 flex justify-center">
                        <AnimatedIcon
                          icon={feature.icon}
                          delay={0.1 + index * 0.1}
                          variant={variant}
                          size="lg"
                          className={index === 1 ? "dark:text-white dark:border-sky-400 dark:border-2 dark:bg-white/10" : "dark:text-white"}
                        />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-primary-navy dark:text-blue-300 group-hover:text-primary-blue transition-colors duration-300 text-center">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-primary-slate dark:text-primary-light/80">
                        {feature.description}
                      </p>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="mt-5"
                      >
                        <Link href={feature.link} className="inline-flex items-center text-primary-blue font-medium group-hover:underline cursor-pointer">
                          Learn more
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link href="/services">
                <AnimatedButton className="bg-primary-blue text-white hover:bg-primary-blue/90 border-none shadow-md">
                  View All Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Technology Integration Section */}
        <AnimatedSection className="py-16 md:py-20 bg-primary-slate text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">
                  Seamless Technology Integration
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Connect your critical business systems to create a unified ecosystem where data flows seamlessly and processes run efficiently across your organization.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'API & data integration expertise',
                    'Connect CRM, ERP, and marketing platforms',
                    'Eliminate data silos and duplications',
                    'Automate cross-system workflows'
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      <span className="text-blue-400 mr-2">✓</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <Link href="/services/technology-integration">
                  <AnimatedButton className="bg-blue-600 hover:bg-blue-700 text-white border-transparent shadow-md">
                    Explore Integration Services
                  </AnimatedButton>
                </Link>
              </motion.div>
              
              <motion.div
                className="relative rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="aspect-w-4 aspect-h-3 bg-primary-navy relative rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/photos/Table_with_laptops.png"
                    alt="Technology Integration"
                    fill
                    className="object-cover rounded-xl opacity-70"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/40 to-transparent"></div>
                  
                  {/* Integration Mockup */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-lg rounded-lg w-[80%] h-[80%] p-5 border border-white/20 shadow-xl">
                      <div className="border-b border-white/20 pb-2 mb-4">
                        <h3 className="text-xl font-bold">Systems Integration</h3>
                      </div>
                      
                      <div className="flex justify-center items-center h-[80%]">
                        <div className="relative w-full h-full">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary-blue/30 rounded-full flex items-center justify-center">
                            <FaExchangeAlt className="text-white text-2xl" />
                          </div>
                          
                          {/* Connected systems */}
                          {['CRM', 'ERP', 'Marketing', 'Analytics'].map((system, index) => {
                            const angle = (index * Math.PI / 2);
                            const x = Math.cos(angle) * 120;
                            const y = Math.sin(angle) * 120;
                            return (
                              <div 
                                key={system}
                                className="absolute w-24 h-16 bg-white/10 rounded-lg flex items-center justify-center border border-white/20"
                                style={{ 
                                  left: `calc(50% + ${x}px - 48px)`, 
                                  top: `calc(50% + ${y}px - 32px)`
                                }}
                              >
                                <span className="text-white font-medium">{system}</span>
                              </div>
                            );
                          })}
                          
                          {/* Connection lines */}
                          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            {['CRM', 'ERP', 'Marketing', 'Analytics'].map((_, index) => {
                              const angle = (index * Math.PI / 2);
                              const x = Math.cos(angle) * 120;
                              const y = Math.sin(angle) * 120;
                              return (
                                <line 
                                  key={index}
                                  x1="50%" 
                                  y1="50%" 
                                  x2={`calc(50% + ${x}px)`}
                                  y2={`calc(50% + ${y}px)`}
                                  stroke="rgba(255,255,255,0.3)" 
                                  strokeWidth="2"
                                  strokeDasharray="5,5"
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
        <section className="py-16 bg-white dark:bg-primary-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Technology Services</h2>
              <p className="text-lg text-primary-slate dark:text-white/80 max-w-2xl mx-auto">
                Comprehensive suite of technology consulting and implementation services to optimize your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessServices.map((service, index) => (
                <Link href={service.link} key={service.name}>
                  <motion.div
                    className="bg-primary-light dark:bg-primary-slate/40 rounded-xl p-6 h-full flex flex-col hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary-blue/20"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                      <FaNetworkWired className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-navy dark:text-white mb-2">{service.name}</h3>
                    <p className="text-primary-slate dark:text-white/70 mb-4 flex-grow">{service.description}</p>
                    <span className="text-primary-blue font-medium flex items-center">
                      Learn more
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <AnimatedSection className="py-24 bg-primary-blue/5 dark:bg-primary-slate text-primary-navy dark:text-white relative overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/photos/Two_People_looking_at_screen1.png"
              alt="Technology Collaboration"
              fill
              className="object-cover object-center opacity-10"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] dark:opacity-[0.05] pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 -translate-x-20 z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20 z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedText
                text="Client Success Stories"
                className="text-3xl font-bold text-primary-navy dark:text-white sm:text-4xl"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-4 text-lg text-primary-navy/80 dark:text-white/90"
              >
                See how our clients have transformed their businesses with our technology solutions.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-white dark:bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-primary-gray dark:border-white/10 hover:border-primary-blue/40 dark:hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 text-primary-blue/20 dark:text-white/20 text-4xl font-serif group-hover:text-primary-blue/30 dark:group-hover:text-white/30 transition-colors duration-300">&ldquo;</div>

                  {/* Background gradient that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <p className="text-primary-navy/80 dark:text-white/90 italic mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/40 to-primary-blue/40 mr-4 flex items-center justify-center border-2 border-primary-gray/20 dark:border-white/20 overflow-hidden">
                        {/* Client initial or avatar */}
                        <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-navy dark:text-white group-hover:text-primary-blue dark:group-hover:text-primary-blue/90 transition-colors duration-300">{testimonial.name}</h4>
                        <p className="text-sm text-primary-navy/70 dark:text-white/70">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact">
                <AnimatedButton className="bg-blue-600 hover:bg-blue-700 text-white border-transparent shadow-lg">
                  Become Our Next Success Story
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-24 bg-white dark:bg-primary-slate text-primary-navy dark:text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-blue/5 skew-x-12 -translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-primary-blue/5 skew-x-12 translate-x-20"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedText
              text="Ready to Transform Your Business?"
              className="text-4xl font-extrabold mb-6 text-primary-navy dark:text-white"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl max-w-2xl mx-auto mb-10 text-primary-slate dark:text-white/90"
            >
              Let our team of experts help you implement, integrate, and optimize your technology solutions for maximum business impact.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Link href="/contact">
                <AnimatedButton className="bg-blue-600 text-white hover:bg-blue-700 border-none shadow-md">
                  Book a Consultation
                </AnimatedButton>
              </Link>

              <Link href="/services">
                <AnimatedButton className="bg-primary-navy text-white hover:bg-primary-navy/90 border-2 border-primary-blue shadow-md">
                  Browse Services
                </AnimatedButton>
              </Link>
            </div>

            {/* Stats section */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {[
                { value: '200+', label: 'Clients Served' },
                { value: '95%', label: 'Client Satisfaction' },
                { value: '40%', label: 'Average Efficiency Gains' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
                  viewport={{ once: true }}
                  className="bg-primary-light dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 text-primary-navy dark:text-white shadow-md"
                >
                  <div className="text-4xl font-bold mb-2 text-blue-600 dark:text-blue-400">{stat.value}</div>
                  <div className="text-primary-slate dark:text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
