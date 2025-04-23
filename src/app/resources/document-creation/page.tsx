'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedButton from '@/components/ui/AnimatedButton';
import AnimatedText from '@/components/ui/AnimatedText';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { 
  FaFileAlt, 
  FaFileDownload, 
  FaFileSignature, 
  FaFileInvoiceDollar, 
  FaFileContract, 
  FaFileCode, 
  FaCheck 
} from 'react-icons/fa';

// Document types that can be generated
const documentTypes = [
  {
    id: 'nda',
    name: 'Non-Disclosure Agreement',
    icon: FaFileContract,
    description: 'Protect your confidential information and business secrets with a legally binding NDA.',
    color: 'bg-blue-600'
  },
  {
    id: 'contract',
    name: 'Service Contract',
    icon: FaFileSignature,
    description: 'Establish clear terms and expectations with a professional service agreement.',
    color: 'bg-purple-600'
  },
  {
    id: 'invoice',
    name: 'Invoice',
    icon: FaFileInvoiceDollar,
    description: 'Create professional invoices for your business transactions with customizable fields.',
    color: 'bg-green-600'
  },
  {
    id: 'proposal',
    name: 'Business Proposal',
    icon: FaFileAlt,
    description: 'Present your services or products with a professionally structured business proposal.',
    color: 'bg-orange-600'
  },
  {
    id: 'hr',
    name: 'HR Documents',
    icon: FaFileCode,
    description: 'Generate compliant HR forms including offer letters, policies, and evaluations.',
    color: 'bg-red-600'
  },
  {
    id: 'lease',
    name: 'Lease Agreement',
    icon: FaFileContract,
    description: 'Create legally sound lease agreements with customizable terms and conditions.',
    color: 'bg-teal-600'
  }
];

// Form fields for the document generator
const formFields = [
  { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Your Company Name' },
  { id: 'contactName', label: 'Contact Name', type: 'text', placeholder: 'Your Name' },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'email@example.com' },
  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(555) 123-4567' },
  { id: 'documentType', label: 'Document Type', type: 'select', options: documentTypes.map(doc => ({ value: doc.id, label: doc.name })) },
  { id: 'additionalInfo', label: 'Additional Information', type: 'textarea', placeholder: 'Enter any specific requirements or details for your document...' }
];

export default function DocumentCreationPage() {
  const [selectedDocType, setSelectedDocType] = useState<string | null>(null);
  const [generatingDocument, setGeneratingDocument] = useState(false);
  const [documentGenerated, setDocumentGenerated] = useState(false);
  
  const handleDocTypeSelect = (docId: string) => {
    setSelectedDocType(docId);
    // Scroll to the form section
    const formSection = document.getElementById('document-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGenerateDocument = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneratingDocument(true);
    
    // Simulate document generation process
    setTimeout(() => {
      setGeneratingDocument(false);
      setDocumentGenerated(true);
    }, 2000);
  };

  return (
    <PageLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-navy to-primary-blue/70 z-0"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none z-10"></div>

          <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                AI-Powered Document Creation
              </h1>
              
              <p className="text-lg text-white/90 mb-10">
                Generate professional, legally-sound business documents in seconds with our advanced AI technology. Customize, download, and use them right away.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="#document-types">
                  <AnimatedButton className="bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                    Create Documents Now
                  </AnimatedButton>
                </a>
                <Link href="/contact">
                  <AnimatedButton className="bg-transparent hover:bg-white/10 text-white border-white">
                    Get Custom Document
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Document Types Section */}
        <section id="document-types" className="py-16 md:py-24 bg-white dark:bg-primary-slate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <AnimatedText
                text="Select Document Type"
                className="text-3xl font-bold text-primary-navy dark:text-white sm:text-4xl"
                highlight={false}
              />
              <p className="mt-4 text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                Choose from our range of document templates, each designed to be fully customizable and legally compliant.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documentTypes.map((docType) => (
                <motion.div
                  key={docType.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  onClick={() => handleDocTypeSelect(docType.id)}
                  className={`group bg-primary-light dark:bg-primary-navy/50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${selectedDocType === docType.id ? 'ring-4 ring-green-500/50' : ''}`}
                >
                  <div className={`p-5 flex items-center space-x-4 ${docType.color} text-white`}>
                    <docType.icon className="text-4xl" />
                    <h3 className="text-xl font-bold">{docType.name}</h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-primary-slate dark:text-gray-300 mb-4">{docType.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-green-600 text-sm font-medium flex items-center">
                        <FaCheck className="mr-1" /> AI-Generated
                      </div>
                      <span className="text-primary-blue font-semibold">Select</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Document Form Section */}
        <section id="document-form" className="py-16 bg-primary-light dark:bg-primary-navy border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">
                Customize Your Document
              </h2>
              <p className="text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                Fill in the details below to generate your personalized document.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Form */}
              <div>
                <div className="bg-white dark:bg-primary-slate/50 rounded-xl shadow-xl p-8">
                  <form onSubmit={handleGenerateDocument}>
                    {formFields.map((field) => (
                      <div key={field.id} className="mb-5">
                        <label htmlFor={field.id} className="block text-primary-navy dark:text-white font-medium mb-2">
                          {field.label}
                        </label>
                        
                        {field.type === 'select' ? (
                          <select
                            id={field.id}
                            name={field.id}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-primary-slate text-primary-navy dark:text-white focus:ring-2 focus:ring-primary-blue outline-none transition-all"
                            value={selectedDocType || ''}
                            onChange={(e) => setSelectedDocType(e.target.value)}
                            required
                          >
                            <option value="">Select a document type</option>
                            {field.options?.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        ) : field.type === 'textarea' ? (
                          <textarea
                            id={field.id}
                            name={field.id}
                            rows={4}
                            placeholder={field.placeholder}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-primary-slate text-primary-navy dark:text-white focus:ring-2 focus:ring-primary-blue outline-none transition-all"
                          />
                        ) : (
                          <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            placeholder={field.placeholder}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-primary-slate text-primary-navy dark:text-white focus:ring-2 focus:ring-primary-blue outline-none transition-all"
                            required
                          />
                        )}
                      </div>
                    ))}

                    <div className="mt-8">
                      <button
                        type="submit"
                        disabled={!selectedDocType || generatingDocument}
                        className={`w-full py-3 px-4 rounded-md text-white font-medium transition-all ${
                          !selectedDocType ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
                        } ${generatingDocument ? 'animate-pulse' : ''}`}
                      >
                        {generatingDocument ? 'Generating Document...' : 'Generate Document'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              {/* Right side - Preview or Result */}
              <div>
                <div className="bg-white dark:bg-primary-slate/50 rounded-xl shadow-xl p-8 h-full">
                  {documentGenerated ? (
                    <div className="text-center">
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                          <FaFileAlt className="text-green-600 text-3xl" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-4">Document Generated!</h3>
                      <p className="text-primary-slate dark:text-white/80 mb-8">
                        Your document has been created successfully. You can now download it in your preferred format.
                      </p>
                      <div className="grid grid-cols-3 gap-3 mb-8">
                        {['PDF', 'DOCX', 'TXT'].map((format) => (
                          <button
                            key={format}
                            className="py-2 px-4 bg-primary-blue/10 hover:bg-primary-blue/20 text-primary-blue rounded-md flex items-center justify-center space-x-2 transition-colors"
                          >
                            <FaFileDownload />
                            <span>{format}</span>
                          </button>
                        ))}
                      </div>
                      <button 
                        onClick={() => {
                          setDocumentGenerated(false);
                          setSelectedDocType(null);
                        }}
                        className="text-primary-blue hover:underline"
                      >
                        Create Another Document
                      </button>
                    </div>
                  ) : selectedDocType ? (
                    <div>
                      <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-4">
                        {documentTypes.find(doc => doc.id === selectedDocType)?.name} Preview
                      </h3>
                      <div className="bg-gray-100 dark:bg-primary-navy rounded-md p-4 h-[300px] flex items-center justify-center border border-dashed border-gray-300 dark:border-gray-700">
                        <div className="text-center opacity-70">
                          <FaFileAlt className="mx-auto text-4xl mb-3 text-primary-slate dark:text-white/60" />
                          <p className="text-primary-slate dark:text-white/80">
                            Complete the form to generate your document preview
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center h-full flex flex-col items-center justify-center">
                      <FaFileAlt className="text-primary-slate/30 dark:text-white/10 text-6xl mb-4" />
                      <p className="text-primary-slate dark:text-white/60">
                        Select a document type to get started
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white dark:bg-primary-slate border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">
                Why Use Our Document Creator
              </h2>
              <p className="text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                Our AI-powered document generation system saves you time, money, and effort while ensuring professional results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Legal Compliance',
                  description: 'All documents are created with legal compliance in mind, regularly updated to meet changing regulations.',
                  icon: FaFileContract
                },
                {
                  title: 'Customizable Templates',
                  description: 'Personalize every document to fit your specific business needs with our flexible templates.',
                  icon: FaFileCode
                },
                {
                  title: 'Multiple Formats',
                  description: 'Download your documents in various formats including PDF, DOCX, and TXT for ultimate versatility.',
                  icon: FaFileDownload
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-light dark:bg-primary-navy/50 p-6 rounded-xl shadow-md"
                >
                  <div className="rounded-full w-12 h-12 bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                    <feature.icon className="text-green-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-primary-slate dark:text-white/80">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-primary-light dark:bg-primary-navy border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: 'Are these documents legally binding?',
                  answer: 'Yes, all documents are created with legal compliance in mind. However, we recommend having any critical legal documents reviewed by a legal professional before use, particularly for complex business situations.'
                },
                {
                  question: 'How is my information handled?',
                  answer: 'Your privacy is important to us. All information submitted through our document creator is encrypted and never stored longer than necessary to generate your document. We do not share your information with third parties.'
                },
                {
                  question: 'Can I edit my document after creation?',
                  answer: 'Absolutely! All documents can be downloaded in editable formats (DOCX, TXT) allowing you to make any additional changes or customizations needed.'
                },
                {
                  question: 'Do you offer custom document creation?',
                  answer: 'Yes, if you need a specialized document that isn\'t available in our standard templates, please contact us for custom document creation services.'
                }
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-primary-slate/50 rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary-navy dark:text-white mb-3">{faq.question}</h3>
                    <p className="text-primary-slate dark:text-white/80">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/contact">
                <AnimatedButton className="bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                  Contact for Custom Documents
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection className="py-20 bg-primary-slate text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedText
              text="Start Creating Professional Documents Today"
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              highlight={false}
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-10 max-w-3xl mx-auto"
            >
              Save time and ensure legal compliance with our AI-powered document generation system.
            </motion.p>
            
            <a href="#document-types">
              <AnimatedButton className="bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                Create Your First Document
              </AnimatedButton>
            </a>
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
