&apos;use client';

import Link from &apos;next/link';
import Image from &apos;next/image';
import { motion } from &apos;framer-motion';
import { FaCalendarAlt, FaUser, FaSearch } from &apos;react-icons/fa';
import PageLayout from &apos;@/components/layout/PageLayout';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import AnimatedButton from &apos;@/components/ui/AnimatedButton';
import { useState } from &apos;react';

// Define blog posts data
const blogPosts = [
  {
    id: &apos;crm-implementation-best-practices',
    title: &apos;CRM Implementation Best Practices for Enterprise Organizations',
    excerpt: &apos;Learn the essential best practices for successful CRM implementation in large organizations. From stakeholder alignment to data migration strategies.&apos;,
    date: &apos;April 15, 2025',
    author: &apos;Jacquelin Johnson',
    category: &apos;CRM',
    tags: [&apos;CRM Implementation', &apos;Enterprise', &apos;Data Migration'],
    image: &apos;/images/photos/Laptop_CRM_dashboard.png',
    featured: true
  },
  {
    id: &apos;marketing-automation-roi',
    title: &apos;Measuring ROI of Marketing Automation Investments',
    excerpt: &apos;Discover effective methods to track and measure the return on investment from your marketing automation technology.&apos;,
    date: &apos;April 8, 2025',
    author: &apos;Chris Johnson',
    category: &apos;Marketing',
    tags: [&apos;Marketing Automation', &apos;ROI', &apos;Analytics'],
    image: &apos;/images/photos/Marketing_growth_success.jpg',
    featured: true
  },
  {
    id: &apos;system-integration-challenges',
    title: &apos;Overcoming Common System Integration Challenges',
    excerpt: &apos;Explore solutions to the most frequent challenges organizations face when integrating disparate systems and technologies.&apos;,
    date: &apos;March 30, 2025',
    author: &apos;Chris Johnson',
    category: &apos;Integration',
    tags: [&apos;System Integration', &apos;API', &apos;Technology Stack'],
    image: &apos;/images/photos/Table_with_laptops.png',
    featured: false
  },
  {
    id: &apos;sales-enablement-technologies',
    title: &apos;Top Sales Enablement Technologies for 2025',
    excerpt: &apos;Review of the most impactful technologies helping sales teams improve productivity and close more deals in 2025.&apos;,
    date: &apos;March 22, 2025',
    author: &apos;Jacquelin Johnson',
    category: &apos;Sales',
    tags: [&apos;Sales Enablement', &apos;Technology', &apos;Productivity'],
    image: &apos;/images/photos/Two_people_looking_at_screen1.png',
    featured: false
  },
  {
    id: &apos;data-migration-strategies',
    title: &apos;Effective Data Migration Strategies for System Transitions',
    excerpt: &apos;Learn proven approaches to ensuring smooth data migration when transitioning between critical business systems.&apos;,
    date: &apos;March 15, 2025',
    author: &apos;Chris Johnson',
    category: &apos;Integration',
    tags: [&apos;Data Migration', &apos;System Transition', &apos;Data Quality'],
    image: &apos;/images/photos/Static_tech_image.png',
    featured: false
  },
  {
    id: &apos;ai-crm-capabilities',
    title: &apos;How AI is Enhancing CRM Capabilities in 2025',
    excerpt: &apos;Explore the latest artificial intelligence features transforming customer relationship management platforms.&apos;,
    date: &apos;March 8, 2025',
    author: &apos;Jacquelin Johnson',
    category: &apos;CRM',
    tags: [&apos;AI', &apos;CRM', &apos;Technology Trends'],
    image: &apos;/images/photos/Abstract_laptop.png',
    featured: false
  }
];

// Category definitions for filtering
const categories = [
  { id: &apos;all', name: &apos;All Articles' },
  { id: &apos;crm', name: &apos;CRM' },
  { id: &apos;marketing', name: &apos;Marketing' },
  { id: &apos;integration', name: &apos;Integration' },
  { id: &apos;sales', name: &apos;Sales' }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState(&apos;all');
  const [searchQuery, setSearchQuery] = useState(&apos;&apos;);

  // Filter blog posts based on selected category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === &apos;all' || 
                            post.category.toLowerCase() === selectedCategory.toLowerCase();
    
    const matchesSearch = searchQuery === &apos;&apos; || 
                         post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <PageLayout>
      <main className=&quot;flex-1">
        {/* Hero Section */}
        <section className=&quot;relative bg-gradient-to-r from-primary-navy to-primary-blue py-20 md:py-28">
          <div className=&quot;absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=&quot;text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Technology Alliance Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className=&quot;text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Expert insights, best practices, and thought leadership on CRM, marketing automation, and technology integration.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=&quot;max-w-xl mx-auto mt-8 mb-4"
            >
              <div className=&quot;relative">
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search articles...&quot;
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className=&quot;w-full px-5 py-3 pr-12 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm&quot;
                />
                <FaSearch className=&quot;absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70&quot; />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-navy">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4"
              >
                Featured Articles
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                Our most important and relevant content selected by our technology experts
              </motion.p>
            </div>

            {/* Featured Posts Grid */}
            <div className=&quot;grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className=&quot;bg-white dark:bg-primary-slate/40 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col"
                >
                  {/* Image */}
                  <div className=&quot;relative h-64 w-full">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className=&quot;object-cover&quot;
                      sizes=&quot;(max-width: 768px) 100vw, 50vw&quot;
                    />
                    {/* Overlay with category */}
                    <div className=&quot;absolute top-4 left-4">
                      <span className=&quot;bg-primary-blue/90 text-white text-sm px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className=&quot;p-6 flex-1 flex flex-col">
                    <h3 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className=&quot;text-primary-slate dark:text-white/80 mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta information */}
                    <div className=&quot;flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className=&quot;flex items-center mr-4">
                        <FaCalendarAlt className=&quot;mr-1&quot; />
                        <span>{post.date}</span>
                      </div>
                      <div className=&quot;flex items-center">
                        <FaUser className=&quot;mr-1&quot; />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <Link href={`/blog/${post.id}`}>
                      <span className=&quot;text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center">
                        Read full article
                        <svg className=&quot;ml-1 w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg">
                          <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 5l7 7-7 7&quot; />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* All Articles Section */}
        <AnimatedSection className=&quot;py-16 bg-primary-light dark:bg-primary-slate">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4"
              >
                All Articles
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                Browse our complete library of technology insights and best practices
              </motion.p>
            </div>

            {/* Category Filter */}
            <div className=&quot;flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === category.id
                      ? &apos;bg-primary-blue text-white shadow-md'
                      : &apos;bg-gray-100 dark:bg-primary-slate/60 text-primary-navy dark:text-white/80 hover:bg-gray-200 dark:hover:bg-primary-slate'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Article Grid */}
            {filteredPosts.length > 0 ? (
              <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className=&quot;bg-white dark:bg-primary-navy/50 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 flex flex-col h-full"
                  >
                    {/* Image */}
                    <div className=&quot;relative h-48 w-full">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        fill
                        className=&quot;object-cover&quot;
                        sizes=&quot;(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw&quot;
                      />
                      {/* Overlay with category */}
                      <div className=&quot;absolute top-4 left-4">
                        <span className=&quot;bg-primary-blue/90 text-white text-xs px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className=&quot;p-6 flex-1 flex flex-col">
                      <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className=&quot;text-sm text-primary-slate dark:text-white/80 mb-4 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta information */}
                      <div className=&quot;flex flex-wrap text-xs text-gray-500 dark:text-gray-400 mt-auto">
                        <div className=&quot;flex items-center mr-3 mb-2">
                          <FaCalendarAlt className=&quot;mr-1 text-xs&quot; />
                          <span>{post.date}</span>
                        </div>
                        <div className=&quot;flex items-center mb-2">
                          <FaUser className=&quot;mr-1 text-xs&quot; />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      
                      <Link href={`/blog/${post.id}`} className=&quot;mt-3">
                        <span className=&quot;text-primary-blue hover:text-primary-blue/80 text-sm font-medium inline-flex items-center">
                          Read more
                          <svg className=&quot;ml-1 w-3 h-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg">
                            <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 5l7 7-7 7&quot; />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              // No results message
              <div className=&quot;text-center py-12">
                <div className=&quot;text-5xl mb-4">🔍</div>
                <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white mb-2">No Articles Found</h3>
                <p className=&quot;text-primary-slate dark:text-white/80">
                  Try adjusting your search criteria or browse a different category.
                </p>
                <button 
                  onClick={() => {setSearchQuery(&apos;&apos;); setSelectedCategory(&apos;all');}}
                  className=&quot;mt-4 text-primary-blue hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Newsletter Section */}
        <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-navy">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;bg-gradient-to-r from-primary-blue/10 to-blue-400/10 dark:from-primary-blue/20 dark:to-blue-500/20 rounded-xl p-8 md:p-12">
              <div className=&quot;max-w-3xl mx-auto text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className=&quot;text-2xl md:text-3xl font-bold text-primary-navy dark:text-white mb-4"
                >
                  Subscribe to Our Technology Newsletter
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;text-lg text-primary-slate dark:text-white/80 mb-8"
                >
                  Get the latest insights, tips, and technology updates delivered to your inbox monthly.
                </motion.p>
                
                <motion.form
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className=&quot;flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
                >
                  <input
                    type=&quot;email&quot;
                    placeholder=&quot;Your email address&quot;
                    className=&quot;flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-blue&quot;
                    required
                  />
                  <AnimatedButton className=&quot;bg-primary-blue text-white hover:bg-primary-blue/90 border-none shadow-md whitespace-nowrap">
                    Subscribe Now
                  </AnimatedButton>
                </motion.form>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className=&quot;mt-4 text-sm text-primary-slate/80 dark:text-white/60"
                >
                  By subscribing, you agree to our Privacy Policy and consent to receive technology-related updates.
                </motion.p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className=&quot;py-16 bg-primary-light dark:bg-primary-slate">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;bg-gradient-to-r from-primary-blue to-blue-600 rounded-xl overflow-hidden shadow-lg">
              <div className=&quot;px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className=&quot;text-3xl font-bold mb-4"
                >
                  Ready to Transform Your Business?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;text-lg text-white/90 mb-8 max-w-3xl mx-auto"
                >
                  Let our technology experts help you implement, integrate, and optimize your business systems for maximum impact.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link href=&quot;/contact">
                    <AnimatedButton className=&quot;bg-white text-primary-blue hover:bg-white/90 border-transparent">
                      Schedule Your Consultation
                    </AnimatedButton>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
