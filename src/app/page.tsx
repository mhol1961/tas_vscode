'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';

const features = [
  {
    title: 'CRM Solutions',
    description: 'Streamline customer relationships with our powerful CRM integrations and customizations.',
    icon: '🤝',
  },
  {
    title: 'Marketing Automation',
    description: 'Drive growth with intelligent marketing automation tools and strategies.',
    icon: '📈',
  },
  {
    title: 'Systems Integration',
    description: 'Seamlessly connect your business systems for maximum efficiency.',
    icon: '🔄',
  },
];

export default function Home() {
  return (
    <PageLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen pt-20 overflow-hidden bg-primary-light dark:bg-primary-navy">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
          
          {/* Gradient Orbs */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-primary-blue to-primary-navy opacity-20 dark:opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-primary-blue to-primary-navy opacity-20 dark:opacity-30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          
          {/* Animated Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066CC22_1px,transparent_1px),linear-gradient(to_bottom,#0066CC22_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#3498DB33_1px,transparent_1px),linear-gradient(to_bottom,#3498DB33_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-xl"
              >
                <h1 className="text-4xl font-bold tracking-tight text-primary-navy dark:text-white sm:text-5xl lg:text-6xl lg:leading-tight">
                  Transform Your Business with
                  <span className="block mt-2 text-gradient-primary">TAS Solutions</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-primary-slate dark:text-gray-300">
                  Empowering enterprises with cutting-edge CRM solutions and marketing automation.
                  Drive growth, enhance efficiency, and deliver exceptional customer experiences.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <button className="bg-gradient-primary text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    Get Started
                  </button>
                  <button className="bg-white/90 dark:bg-primary-slate backdrop-blur-sm text-primary-navy dark:text-white px-8 py-4 rounded-full font-medium border-2 border-primary-blue/20 hover:border-primary-blue hover:bg-primary-light dark:hover:bg-primary-navy/30 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105">
                    Learn More
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative hidden lg:block"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero.jpg"
                    alt="Business team collaborating"
                    width={1920}
                    height={1080}
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gray-50 dark:bg-primary-navy/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-base text-primary-blue font-semibold tracking-wide uppercase mb-3 inline-block px-4 py-1 bg-primary-blue/10 rounded-full">Solutions</h2>
              <p className="text-4xl font-extrabold text-primary-navy dark:text-white mb-4">
                Transform Your Business
              </p>
              <p className="text-xl text-primary-slate dark:text-gray-300 max-w-2xl mx-auto">
                Leverage our expertise in CRM and marketing automation to drive your business forward.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-primary-slate rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center">
                    <span className="text-5xl mb-6 block">{feature.icon}</span>
                    <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-4">{feature.title}</h3>
                    <p className="text-primary-slate dark:text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
