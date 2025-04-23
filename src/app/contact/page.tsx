&apos;use client';

import { useState } from &apos;react';
import PageLayout from &apos;@/components/layout/PageLayout';
import Image from &apos;next/image';
import { motion } from &apos;framer-motion';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLinkedin, FaTwitter } from &apos;react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: &apos;&apos;,
    email: &apos;&apos;,
    phone: &apos;&apos;,
    company: &apos;&apos;,
    message: &apos;&apos;,
    service: &apos;general'
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: &apos;&apos;
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your backend or a form service
    // For now, we&apos;ll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: &apos;Thank you for your message! We will get back to you shortly.&apos;
    });

    // Reset form after successful submission
    setFormData({
      name: &apos;&apos;,
      email: &apos;&apos;,
      phone: &apos;&apos;,
      company: &apos;&apos;,
      message: &apos;&apos;,
      service: &apos;general'
    });

    // In a real implementation, you would handle errors as well
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className=&quot;relative bg-primary-slate text-white py-16 overflow-hidden">
        <div className=&quot;absolute inset-0 z-0 opacity-20">
          <Image 
            src=&quot;https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80&quot; 
            alt=&quot;Contact Us&quot; 
            fill 
            className=&quot;object-cover&quot;
          />
        </div>
        <div className=&quot;absolute inset-0 bg-primary-navy/50 z-0"></div>
        <div className=&quot;container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=&quot;text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=&quot;text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Have questions or ready to start your project? Reach out to our team today.
          </motion.p>
        </div>
      </div>

      {/* Contact Information and Form Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className=&quot;lg:w-1/3">
              <h2 className=&quot;text-2xl font-bold mb-6 text-primary-navy dark:text-white">Get in Touch</h2>
              
              <div className=&quot;mb-8">
                <div className=&quot;flex items-start mb-4">
                  <div className=&quot;text-primary-blue mr-4 mt-1">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className=&quot;font-semibold text-primary-navy dark:text-white mb-1">Our Office</h3>
                    <p className=&quot;text-primary-slate dark:text-gray-300">
                      123 Tech Avenue, Suite 400<br />
                      Boston, MA 02110<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className=&quot;flex items-start mb-4">
                  <div className=&quot;text-primary-blue mr-4 mt-1">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h3 className=&quot;font-semibold text-primary-navy dark:text-white mb-1">Phone</h3>
                    <p className=&quot;text-primary-slate dark:text-gray-300">
                      +1 (617) 555-0123
                    </p>
                  </div>
                </div>
                
                <div className=&quot;flex items-start mb-4">
                  <div className=&quot;text-primary-blue mr-4 mt-1">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className=&quot;font-semibold text-primary-navy dark:text-white mb-1">Email</h3>
                    <p className=&quot;text-primary-slate dark:text-gray-300">
                      info@tascompany.com
                    </p>
                  </div>
                </div>
                
                <div className=&quot;flex items-start mb-4">
                  <div className=&quot;text-primary-blue mr-4 mt-1">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h3 className=&quot;font-semibold text-primary-navy dark:text-white mb-1">Business Hours</h3>
                    <p className=&quot;text-primary-slate dark:text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className=&quot;font-semibold text-primary-navy dark:text-white mb-3">Connect With Us</h3>
                <div className=&quot;flex gap-4">
                  <a href=&quot;https://linkedin.com&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-primary-blue hover:text-primary-navy dark:hover:text-white transition-colors">
                    <FaLinkedin size={24} />
                  </a>
                  <a href=&quot;https://twitter.com&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-primary-blue hover:text-primary-navy dark:hover:text-white transition-colors">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className=&quot;lg:w-2/3 bg-slate-50 dark:bg-primary-navy/30 p-8 rounded-lg shadow-md">
              <h2 className=&quot;text-2xl font-bold mb-6 text-primary-navy dark:text-white">Send Us a Message</h2>
              
              {formStatus.submitted && formStatus.success ? (
                <div className=&quot;bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <p>{formStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor=&quot;name&quot; className=&quot;block text-primary-navy dark:text-white mb-2">Name *</label>
                      <input 
                        type=&quot;text&quot; 
                        id=&quot;name&quot; 
                        name=&quot;name&quot; 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className=&quot;w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue dark:bg-primary-slate dark:text-white&quot;
                      />
                    </div>
                    <div>
                      <label htmlFor=&quot;email&quot; className=&quot;block text-primary-navy dark:text-white mb-2">Email *</label>
                      <input 
                        type=&quot;email&quot; 
                        id=&quot;email&quot; 
                        name=&quot;email&quot; 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className=&quot;w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue dark:bg-primary-slate dark:text-white&quot;
                      />
                    </div>
                    <div>
                      <label htmlFor=&quot;phone&quot; className=&quot;block text-primary-navy dark:text-white mb-2">Phone</label>
                      <input 
                        type=&quot;tel&quot; 
                        id=&quot;phone&quot; 
                        name=&quot;phone&quot; 
                        value={formData.phone}
                        onChange={handleChange}
                        className=&quot;w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue dark:bg-primary-slate dark:text-white&quot;
                      />
                    </div>
                    <div>
                      <label htmlFor=&quot;company&quot; className=&quot;block text-primary-navy dark:text-white mb-2">Company</label>
                      <input 
                        type=&quot;text&quot; 
                        id=&quot;company&quot; 
                        name=&quot;company&quot; 
                        value={formData.company}
                        onChange={handleChange}
                        className=&quot;w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue dark:bg-primary-slate dark:text-white&quot;
                      />
                    </div>
                  </div>
                  
                  <div className=&quot;mb-6">
                    <label htmlFor=&quot;service&quot; className=&quot;block text-primary-navy dark:text-white mb-2">Service of Interest</label>
                    <select 
                      id=&quot;service&quot; 
                      name=&quot;service&quot; 
                      value={formData.service}
                      onChange={handleChange}
                      className=&quot;w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue dark:bg-primary-slate dark:text-white"
                    >
                      <option value=&quot;general">General Inquiry</option>
                      <option value=&quot;crm">CRM Solutions</option>
                      <option value=&quot;marketing">Marketing Automation</option>
                      <option value=&quot;integration">Integration Services</option>
                      <option value=&quot;consulting">Strategy Consulting</option>
                    </select>
                  </div>
                  
                  <div className=&quot;mb-6">
                    <label htmlFor=&quot;message&quot; className=&quot;block text-primary-navy dark:text-white mb-2">Message *</label>
                    <textarea 
                      id=&quot;message&quot; 
                      name=&quot;message&quot; 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className=&quot;w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue dark:bg-primary-slate dark:text-white"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type=&quot;submit&quot; 
                      className=&quot;bg-primary-blue text-white py-3 px-6 rounded-md hover:bg-primary-blue/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection className=&quot;py-16 bg-slate-100 dark:bg-primary-navy">
        <div className=&quot;container mx-auto px-4">
          <h2 className=&quot;text-2xl font-bold mb-8 text-center text-primary-navy dark:text-white">Find Us</h2>
          <div className=&quot;rounded-lg overflow-hidden shadow-lg h-[400px] relative">
            {/* In a real implementation, you would use a proper map component like Google Maps or Mapbox */}
            {/* For now, we&apos;ll use a placeholder image */}
            <Image 
              src=&quot;https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80&quot; 
              alt=&quot;Map location&quot; 
              fill 
              className=&quot;object-cover&quot;
            />
            <div className=&quot;absolute inset-0 flex items-center justify-center">
              <div className=&quot;bg-white dark:bg-primary-slate p-4 rounded-lg shadow-lg">
                <p className=&quot;text-primary-navy dark:text-white font-semibold">TAS Headquarters</p>
                <p className=&quot;text-primary-slate dark:text-gray-300">123 Tech Avenue, Boston, MA</p>
              </div>
            </div>
          </div>
          <p className=&quot;text-center mt-4 text-primary-slate dark:text-gray-300">
            We&apos;re conveniently located in downtown Boston, easily accessible by public transportation.  
          </p>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <h2 className=&quot;text-2xl font-bold mb-8 text-center text-primary-navy dark:text-white">Frequently Asked Questions</h2>
          <div className=&quot;max-w-3xl mx-auto">
            <div className=&quot;mb-6">
              <h3 className=&quot;text-xl font-semibold mb-2 text-primary-navy dark:text-white">What services do you offer?</h3>
              <p className=&quot;text-primary-slate dark:text-gray-300">
                We offer a comprehensive suite of CRM and marketing automation services, including implementation, integration, optimization, strategy consulting, and ongoing support.  
              </p>
            </div>
            <div className=&quot;mb-6">
              <h3 className=&quot;text-xl font-semibold mb-2 text-primary-navy dark:text-white">How quickly can you respond to inquiries?</h3>
              <p className=&quot;text-primary-slate dark:text-gray-300">
                We typically respond to all inquiries within 24 business hours. For urgent matters, please call our office directly.  
              </p>
            </div>
            <div className=&quot;mb-6">
              <h3 className=&quot;text-xl font-semibold mb-2 text-primary-navy dark:text-white">Do you work with clients internationally?</h3>
              <p className=&quot;text-primary-slate dark:text-gray-300">
                Yes, we work with clients across the globe. Our team is experienced in managing remote projects and can accommodate different time zones.  
              </p>
            </div>
            <div>
              <h3 className=&quot;text-xl font-semibold mb-2 text-primary-navy dark:text-white">How do I get started with your services?</h3>
              <p className=&quot;text-primary-slate dark:text-gray-300">
                Simply fill out our contact form or give us a call. We&apos;ll schedule an initial consultation to understand your needs and discuss how we can help.  
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
