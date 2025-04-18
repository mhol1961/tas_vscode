'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedButton from '@/components/ui/AnimatedButton';
import AnimatedText from '@/components/ui/AnimatedText';
import AnimatedIcon from '@/components/ui/AnimatedIcon';
import AnimatedSection from '@/components/ui/AnimatedSection';
import VideoBackground from '@/components/ui/VideoBackground';
import RotatingText from '@/components/ui/RotatingText';
import { FaChartLine, FaUsers, FaCogs, FaRocket, FaLaptopCode, FaClipboardCheck } from 'react-icons/fa';
import CircularServices from '@/components/sections/CircularServices';
import HeroRotator from '@/components/ui/HeroRotator';

// Function to get the appropriate image for each feature
function getFeatureImage(index: number): string {
  switch (index) {
    case 0: // CRM Solutions
      return '/images/photos/Laptop_CRM_dashboard.png';
    case 1: // Marketing Automation
      return '/images/photos/Marketing_growth_success.jpg';
    case 2: // Systems Integration
      return '/images/photos/Static_tech_image.png';
    case 3: // Growth Tools
      return '/images/photos/illustrations/Arrows_segments_marketing.png';
    case 4: // Custom Solutions
      return '/images/photos/Abstract_laptop.png';
    case 5: // Task Management
      return '/images/photos/Table_with_laptops.png';
    default:
      return '/images/photos/Two_People_looking_at_screen.png';
  }
}

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Marketing Director, TechCorp',
    quote: 'TAS Solutions transformed our customer management process. Their CRM system is intuitive and powerful, helping us increase customer retention by 35%.',
  },
  {
    name: 'Michael Chen',
    title: 'CEO, Innovate Inc',
    quote: 'The marketing automation tools provided by TAS have revolutionized how we engage with customers. Our campaign efficiency has improved dramatically.',
  },
  {
    name: 'Emily Rodriguez',
    title: 'Operations Manager, Global Services',
    quote: 'Implementing TAS Solutions has streamlined our entire workflow. The customer support team is exceptional and always ready to help.',
  },
];

const features = [
  {
    title: 'CRM Systems',
    description: 'Empowering organizations with tailored CRM solutions—including Microsoft Dynamics 365, Salesforce, and HubSpot—to solve unique business challenges and drive measurable growth.',
    icon: FaUsers,
  },
  {
    title: 'Marketing Automation',
    description: 'Delivering expert automation solutions in Marketo, Dynamics 365 Customer Insights, ClickDimensions, and HubSpot, designed to align with your goals and maximize ROI.',
    icon: FaChartLine,
  },
  {
    title: 'Systems Integration',
    description: 'Creating seamless connections between CRM and marketing automation platforms through native and custom solutions to optimize workflows and enhance efficiency.',
    icon: FaCogs,
  },
  {
    title: 'Strategy Consulting',
    description: 'Providing expert guidance in CRM and marketing automation, with actionable insights and strategies that deliver measurable results and drive success.',
    icon: FaRocket,
  },
];

export default function Home() {
  return (
    <PageLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <HeroRotator />
        
        {/* Main content section with darker blue-gray background */}
        <div className="py-12 bg-slate-300 dark:bg-slate-800 border-t border-b border-slate-400 dark:border-slate-700">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-primary-navy dark:text-white mb-5">
              Expert CRM & Marketing Automation Solutions
            </h1>
            
            <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg leading-relaxed text-primary-navy dark:text-white/90 mb-6"
                >
                  We empower mid-to-large enterprises to streamline operations and enhance customer engagement through cutting-edge CRM solutions and marketing automation. Our tailored technology strategies drive measurable growth, improve efficiency, and deliver exceptional customer experiences.
            </motion.p>
                
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 flex flex-wrap justify-center gap-4"
            >
              <AnimatedButton className="bg-primary-blue text-white hover:bg-primary-blue/90 border-none shadow-md">
                Request a Consultation
              </AnimatedButton>
              <AnimatedButton className="bg-white border-2 border-primary-blue text-primary-navy hover:bg-primary-light shadow-md">
                Learn More
              </AnimatedButton>
            </motion.div>
          </div>
        </div>

        {/* Circular Services Section */}
        <div className="bg-white dark:bg-primary-slate transition-colors duration-300">
          <CircularServices />
        </div>

        {/* Features Section */}
        <AnimatedSection className="py-16 lg:py-24 bg-primary-slate text-primary-light transition-colors duration-300 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>
          <div className="absolute -top-40 right-20 w-[400px] h-[400px] bg-primary-blue/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-40 left-20 w-[400px] h-[400px] bg-primary-blue/10 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-24">
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
                text="Expert Solutions, Proven Results" 
                className="text-3xl font-bold text-primary-light sm:text-4xl"
                highlight={false}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-4 text-lg text-primary-gray"
              >
                Leading organizations rely on TAS for technology-driven transformation, operational excellence, and measurable business value.
              </motion.p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {features.map((feature, index) => {
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
                      <motion.a
                        whileHover={{ x: 5 }}
                        className="mt-5 inline-flex items-center text-primary-blue font-medium group-hover:underline cursor-pointer"
                      >
                        Learn more
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Differentiators Section */}
        <section className="py-16 bg-primary-light dark:bg-primary-slate border-t border-primary-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-primary-navy dark:text-primary-light mb-4">Why Choose TAS?</h2>
              <p className="text-lg text-primary-slate dark:text-primary-light/80 max-w-2xl mx-auto">We deliver measurable results through deep expertise, innovative solutions, and a relentless focus on your business objectives.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl text-primary-blue mb-4"><FaChartLine /></span>
                <h3 className="font-semibold text-primary-navy dark:text-primary-light mb-2">Proven Expertise</h3>
                <p className="text-primary-slate dark:text-primary-light/80">Years of experience across leading CRM and marketing platforms.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl text-primary-blue mb-4"><FaCogs /></span>
                <h3 className="font-semibold text-primary-navy dark:text-primary-light mb-2">Tailored Solutions</h3>
                <p className="text-primary-slate dark:text-primary-light/80">Custom strategies aligned to your unique business needs and goals.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl text-primary-blue mb-4"><FaRocket /></span>
                <h3 className="font-semibold text-primary-navy dark:text-primary-light mb-2">Measurable ROI</h3>
                <p className="text-primary-slate dark:text-primary-light/80">Every engagement is focused on delivering quantifiable business value.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl text-primary-blue mb-4"><FaUsers /></span>
                <h3 className="font-semibold text-primary-navy dark:text-primary-light mb-2">Trusted Partnership</h3>
                <p className="text-primary-slate dark:text-primary-light/80">We work as an extension of your team for lasting success.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <AnimatedSection className="py-24 bg-white dark:bg-primary-slate text-primary-navy dark:text-white relative overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/photos/Two_People_looking_at_screen.png"
              alt="Collaboration"
              fill
              className="object-cover object-center opacity-10"
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
                text="What Our Clients Say" 
                className="text-3xl font-bold text-white sm:text-4xl"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-4 text-lg text-white/90"
              >
                Don't just take our word for it. Hear from some of our amazing customers.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 text-white/20 text-4xl font-serif group-hover:text-white/30 transition-colors duration-300">"</div>
                  
                  {/* Background gradient that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <p className="text-white/90 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-blue/40 to-primary-navy/40 mr-4 flex items-center justify-center border-2 border-white/20 overflow-hidden">
                        {/* Client initial or avatar */}
                        <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-primary-blue/90 transition-colors duration-300">{testimonial.name}</h4>
                        <p className="text-sm text-white/70">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-24 bg-white dark:bg-primary-slate text-primary-navy dark:text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 -translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
          
          {/* Animated particles with fixed positions to prevent hydration mismatch */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { top: "15%", left: "80%" },
              { top: "82%", left: "25%" },
              { top: "23%", left: "97%" },
              { top: "85%", left: "81%" },
              { top: "17%", left: "8%" },
              { top: "37%", left: "84%" }
            ].map((position, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-white/20"
                style={{
                  top: position.top,
                  left: position.left,
                }}
                animate={{
                  y: [0, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
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
              Join hundreds of businesses that have already improved their operations with TAS Solutions.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton className="bg-primary-blue text-white hover:bg-primary-blue/90 border-none shadow-md">
                Schedule a Demo
              </AnimatedButton>
              
              <AnimatedButton className="bg-primary-navy text-white hover:bg-primary-navy/90 border-2 border-primary-blue shadow-md">
                View Case Studies
              </AnimatedButton>
            </div>
            
            {/* Stats section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: '500+', label: 'Clients Worldwide' },
                { value: '98%', label: 'Customer Satisfaction' },
                { value: '35%', label: 'Average ROI Increase' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-primary-navy dark:text-white"
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
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
