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
    title: 'CRM Solutions',
    description: 'Streamline customer relationships with our powerful CRM integrations and customizations.',
    icon: FaUsers,
  },
  {
    title: 'Marketing Automation',
    description: 'Drive growth with intelligent marketing automation tools and strategies.',
    icon: FaChartLine,
  },
  {
    title: 'Systems Integration',
    description: 'Seamlessly connect your business systems for maximum efficiency.',
    icon: FaCogs,
  },
  {
    title: 'Growth Tools',
    description: 'Accelerate your business growth with targeted marketing strategies.',
    icon: FaRocket,
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored solutions to meet your specific business needs and goals.',
    icon: FaLaptopCode,
  },
  {
    title: 'Task Management',
    description: 'Stay organized with our intuitive task management system.',
    icon: FaClipboardCheck,
  },
];

export default function Home() {
  return (
    <PageLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen pt-20 overflow-hidden bg-primary-light dark:bg-primary-navy transition-colors duration-300">
          {/* Video Background */}
          <VideoBackground videoSrc="/videos/Animation_video.mp4" overlayOpacity={70} />
          
          {/* Background Pattern - on top of video for texture */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] z-10"></div>
          
          {/* Gradient Orbs - Enhanced with animations */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-primary-blue to-primary-navy opacity-20 dark:opacity-30 rounded-full filter blur-3xl animate-pulse-slow z-10"></div>
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-primary-blue to-primary-navy opacity-20 dark:opacity-30 rounded-full filter blur-3xl animate-pulse-slow z-10"></div>
          
          {/* Additional decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-primary-blue/30 rounded-full filter blur-xl animate-float z-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-primary-blue/20 rounded-full filter blur-lg animate-float z-10" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-primary-blue/20 rounded-full filter blur-md animate-float z-10" style={{ animationDelay: '2s' }}></div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content - Enhanced with animated components */}
              <div className="max-w-xl">
                <div className="mb-2 inline-block">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="px-4 py-1 bg-white/20 text-white font-semibold rounded-full text-sm inline-block"
                  >
                    Innovative CRM Solutions
                  </motion.span>
                </div>
                
                <AnimatedText 
                  text="Transform Your Business with" 
                  className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-tight"
                />
                <AnimatedText 
                  text="TAS Solutions:" 
                  className="text-4xl font-bold tracking-tight text-sky-300 sm:text-5xl lg:text-6xl lg:leading-tight mt-2"
                  highlight={false}
                />
                <div className="mt-2 mb-6">
                  <RotatingText 
                    words={['CRM Solutions', 'Marketing Automation', 'Business Analytics', 'System Integration', 'Growth Tools']} 
                    interval={4000}
                    textColor="text-white"
                    className="text-2xl sm:text-3xl lg:text-4xl"
                  />
                </div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-6 text-lg leading-relaxed text-white/90"
                >
                  Empowering enterprises with cutting-edge CRM solutions and marketing automation.
                  Drive growth, enhance efficiency, and deliver exceptional customer experiences.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="mt-10 flex flex-wrap gap-4"
                >
                  <AnimatedButton primary={true}>
                    Get Started
                  </AnimatedButton>
                  <AnimatedButton primary={false}>
                    Learn More
                  </AnimatedButton>
                </motion.div>
                
                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700"
                >
                  <p className="text-sm text-white/70 mb-3">Trusted by leading companies worldwide</p>
                  <div className="flex flex-wrap items-center gap-8">
                    <div className="h-8 relative w-24">
                      <Image 
                        src="/images/photos/Salesforce_logo.png" 
                        alt="Salesforce" 
                        className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                        fill
                      />
                    </div>
                    <div className="h-8 relative w-24">
                      <Image 
                        src="/images/photos/Microsoft_dynamics_logo.png" 
                        alt="Microsoft Dynamics" 
                        className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                        fill
                      />
                    </div>
                    <div className="h-7 relative w-20">
                      <Image 
                        src="/images/photos/Hubspot_logo.png" 
                        alt="HubSpot" 
                        className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                        fill
                      />
                    </div>
                    <div className="h-8 relative w-24">
                      <Image 
                        src="/images/photos/Adobe_marketo_engage.png" 
                        alt="Adobe Marketo Engage" 
                        className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                        fill
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative hidden lg:flex items-center justify-center"
              >
                {/* Hero image using actual image */}
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/photos/Laptop_CRM_dashboard.png"
                    alt="CRM Dashboard on laptop"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-navy/20 to-transparent"></div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-10 right-10 w-40 h-40 bg-primary-blue/20 rounded-full filter blur-xl animate-pulse-slow"></div>
                  <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary-blue/20 rounded-full filter blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <AnimatedSection className="py-24 bg-white dark:bg-primary-slate transition-colors duration-300 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>
          <div className="absolute -top-40 right-20 w-[400px] h-[400px] bg-gradient-to-br from-primary-blue/5 to-primary-navy/5 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-40 left-20 w-[400px] h-[400px] bg-gradient-to-br from-primary-blue/5 to-primary-navy/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-base text-primary-blue font-semibold tracking-wide uppercase mb-3 inline-block px-4 py-1 bg-primary-blue/10 rounded-full"
              >
                Solutions
              </motion.h2>
              
              <AnimatedText 
                text="Powerful Features" 
                className="text-3xl font-bold text-primary-navy dark:text-white sm:text-4xl"
                highlight={true}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-4 text-lg text-primary-slate dark:text-gray-300"
              >
                Everything you need to streamline your business operations and drive growth.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                // Alternate icon variants for visual interest
                const variants = ['primary', 'secondary', 'gradient', 'outline'];
                const variant = variants[index % variants.length] as 'primary' | 'secondary' | 'gradient' | 'outline';
                
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                    className="group bg-white dark:bg-primary-navy/50 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:border-primary-blue/20 dark:hover:border-primary-blue/30 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Background gradient that appears on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-primary-navy/5 dark:from-primary-blue/10 dark:to-primary-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      {/* Feature image based on index */}
                      <div className="mb-6 h-48 relative rounded-lg overflow-hidden">
                        <Image
                          src={getFeatureImage(index)}
                          alt={feature.title}
                          fill
                          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/20 to-transparent"></div>
                        
                        {/* Icon overlay on the image */}
                        <div className="absolute bottom-3 right-3">
                          <AnimatedIcon 
                            icon={feature.icon} 
                            delay={0.1 + index * 0.1} 
                            variant={variant}
                            size="md"
                          />
                        </div>
                      </div>
                      
                      <h3 className="mt-4 text-xl font-semibold text-primary-navy dark:text-white group-hover:text-primary-blue dark:group-hover:text-primary-blue transition-colors duration-300">
                        {feature.title}
                      </h3>
                      
                      <p className="mt-3 text-primary-slate dark:text-gray-300">
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
        
        {/* Testimonials Section */}
        <AnimatedSection className="py-24 bg-gradient-primary text-white relative overflow-hidden">
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
        <AnimatedSection className="py-24 bg-gradient-primary text-white relative overflow-hidden">
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
              className="text-4xl font-extrabold mb-6 text-white"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl max-w-2xl mx-auto mb-10 text-white/90"
            >
              Join hundreds of businesses that have already improved their operations with TAS Solutions.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton 
                primary={false} 
                className="bg-white text-primary-navy hover:bg-primary-light border-none"
              >
                Schedule a Demo
              </AnimatedButton>
              
              <AnimatedButton 
                primary={false} 
                className="bg-transparent border-2 border-white text-primary-navy bg-white hover:bg-white/90"
              >
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
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
