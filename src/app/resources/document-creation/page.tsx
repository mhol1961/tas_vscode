&apos;use client';

import { useState } from &apos;react';
import Link from &apos;next/link';
import { motion } from &apos;framer-motion';
import PageLayout from &apos;@/components/layout/PageLayout';
import AnimatedButton from &apos;@/components/ui/AnimatedButton';
import AnimatedText from &apos;@/components/ui/AnimatedText';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import { 
  FaFileAlt, 
  FaFileDownload, 
  FaFileSignature, 
  FaFileInvoiceDollar, 
  FaFileContract, 
  FaFileCode, 
  FaCheck 
} from &apos;react-icons/fa';

// Document types that can be generated
const documentTypes = [
  {
    id: &apos;nda',
    name: &apos;Non-Disclosure Agreement',
    icon: FaFileContract,
    description: &apos;Protect your confidential information and business secrets with a legally binding NDA.&apos;,
    color: &apos;bg-blue-600'
  },
  {
    id: &apos;contract',
    name: &apos;Service Contract',
    icon: FaFileSignature,
    description: &apos;Establish clear terms and expectations with a professional service agreement.&apos;,
    color: &apos;bg-purple-600'
  },
  {
    id: &apos;invoice',
    name: &apos;Invoice',
    icon: FaFileInvoiceDollar,
    description: &apos;Create professional invoices for your business transactions with customizable fields.&apos;,
    color: &apos;bg-green-600'
  },
  {
    id: &apos;proposal',
    name: &apos;Business Proposal',
    icon: FaFileAlt,
    description: &apos;Present your services or products with a professionally structured business proposal.&apos;,
    color: &apos;bg-orange-600'
  },
  {
    id: &apos;hr',
    name: &apos;HR Documents',
    icon: FaFileCode,
    description: &apos;Generate compliant HR forms including offer letters, policies, and evaluations.&apos;,
    color: &apos;bg-red-600'
  },
  {
    id: &apos;lease',
    name: &apos;Lease Agreement',
    icon: FaFileContract,
    description: &apos;Create legally sound lease agreements with customizable terms and conditions.&apos;,
    color: &apos;bg-teal-600'
  }
];

// Form fields for the document generator
const formFields = [
  { id: &apos;company', label: &apos;Company Name', type: &apos;text', placeholder: &apos;Your Company Name' },
  { id: &apos;contactName', label: &apos;Contact Name', type: &apos;text', placeholder: &apos;Your Name' },
  { id: &apos;email', label: &apos;Email Address', type: &apos;email', placeholder: &apos;email@example.com' },
  { id: &apos;phone', label: &apos;Phone Number', type: &apos;tel', placeholder: &apos;(555) 123-4567' },
  { id: &apos;documentType', label: &apos;Document Type', type: &apos;select', options: documentTypes.map(doc => ({ value: doc.id, label: doc.name })) },
  { id: &apos;additionalInfo', label: &apos;Additional Information', type: &apos;textarea', placeholder: &apos;Enter any specific requirements or details for your document...&apos; }
];

export default function DocumentCreationPage() {
  const [selectedDocType, setSelectedDocType] = useState<string | null>(null);
  const [generatingDocument, setGeneratingDocument] = useState(false);
  const [documentGenerated, setDocumentGenerated] = useState(false);
  
  const handleDocTypeSelect = (docId: string) => {
    setSelectedDocType(docId);
    // Scroll to the form section
    const formSection = document.getElementById(&apos;document-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: &apos;smooth' });
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
      <main className=&quot;flex-1">
        {/* Hero Section */}
        <section className=&quot;relative py-20 md:py-28 overflow-hidden">
          {/* Background gradient */}
          <div className=&quot;absolute inset-0 bg-gradient-to-br from-primary-navy to-primary-blue/70 z-0"></div>
          <div className=&quot;absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none z-10"></div>

          <div className=&quot;relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;max-w-3xl mx-auto"
            >
              <h1 className=&quot;text-3xl md:text-5xl font-bold text-white mb-6">
                AI-Powered Document Creation
              </h1>
              
              <p className=&quot;text-lg text-white/90 mb-10">
                Generate professional, legally-sound business documents in seconds with our advanced AI technology. Customize, download, and use them right away.
              </p>

              <div className=&quot;flex flex-wrap justify-center gap-4">
                <a href=&quot;#document-types">
                  <AnimatedButton className=&quot;bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                    Create Documents Now
                  </AnimatedButton>
                </a>
                <Link href=&quot;/contact">
                  <AnimatedButton className=&quot;bg-transparent hover:bg-white/10 text-white border-white">
                    Get Custom Document
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Document Types Section */}
        <section id=&quot;document-types&quot; className=&quot;py-16 md:py-24 bg-white dark:bg-primary-slate">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-16">
              <AnimatedText
                text=&quot;Select Document Type&quot;
                className=&quot;text-3xl font-bold text-primary-navy dark:text-white sm:text-4xl&quot;
                highlight={false}
              />
              <p className=&quot;mt-4 text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                Choose from our range of document templates, each designed to be fully customizable and legally compliant.
              </p>
            </div>

            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documentTypes.map((docType) => (
                <motion.div
                  key={docType.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  onClick={() => handleDocTypeSelect(docType.id)}
                  className={`group bg-primary-light dark:bg-primary-navy/50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${selectedDocType === docType.id ? &apos;ring-4 ring-green-500/50' : &apos;&apos;}`}
                >
                  <div className={`p-5 flex items-center space-x-4 ${docType.color} text-white`}>
                    <docType.icon className=&quot;text-4xl&quot; />
                    <h3 className=&quot;text-xl font-bold">{docType.name}</h3>
                  </div>
                  
                  <div className=&quot;p-6">
                    <p className=&quot;text-primary-slate dark:text-gray-300 mb-4">{docType.description}</p>
                    <div className=&quot;flex justify-between items-center">
                      <div className=&quot;text-green-600 text-sm font-medium flex items-center">
                        <FaCheck className=&quot;mr-1&quot; /> AI-Generated
                      </div>
                      <span className=&quot;text-primary-blue font-semibold">Select</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Document Form Section */}
        <section id=&quot;document-form&quot; className=&quot;py-16 bg-primary-light dark:bg-primary-navy border-t border-gray-200 dark:border-gray-800">
          <div className=&quot;max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-12">
              <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">
                Customize Your Document
              </h2>
              <p className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                Fill in the details below to generate your personalized document.
              </p>
            </div>
            
            <div className=&quot;grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Form */}
              <div>
                <div className=&quot;bg-white dark:bg-primary-slate/50 rounded-xl shadow-xl p-8">
                  <form onSubmit={handleGenerateDocument}>
                    {formFields.map((field) => (
                      <div key={field.id} className=&quot;mb-5">
                        <label htmlFor={field.id} className=&quot;block text-primary-navy dark:text-white font-medium mb-2">
                          {field.label}
                        </label>
                        
                        {field.type === &apos;select' ? (
                          <select
                            id={field.id}
                            name={field.id}
                            className=&quot;w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-primary-slate text-primary-navy dark:text-white focus:ring-2 focus:ring-primary-blue outline-none transition-all&quot;
                            value={selectedDocType || &apos;&apos;}
                            onChange={(e) => setSelectedDocType(e.target.value)}
                            required
                          >
                            <option value=&quot;">Select a document type</option>
                            {field.options?.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        ) : field.type === &apos;textarea' ? (
                          <textarea
                            id={field.id}
                            name={field.id}
                            rows={4}
                            placeholder={field.placeholder}
                            className=&quot;w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-primary-slate text-primary-navy dark:text-white focus:ring-2 focus:ring-primary-blue outline-none transition-all&quot;
                          />
                        ) : (
                          <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            placeholder={field.placeholder}
                            className=&quot;w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-primary-slate text-primary-navy dark:text-white focus:ring-2 focus:ring-primary-blue outline-none transition-all&quot;
                            required
                          />
                        )}
                      </div>
                    ))}

                    <div className=&quot;mt-8">
                      <button
                        type=&quot;submit&quot;
                        disabled={!selectedDocType || generatingDocument}
                        className={`w-full py-3 px-4 rounded-md text-white font-medium transition-all ${
                          !selectedDocType ? &apos;bg-gray-400 cursor-not-allowed' : &apos;bg-green-600 hover:bg-green-700'
                        } ${generatingDocument ? &apos;animate-pulse' : &apos;&apos;}`}
                      >
                        {generatingDocument ? &apos;Generating Document...&apos; : &apos;Generate Document'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              {/* Right side - Preview or Result */}
              <div>
                <div className=&quot;bg-white dark:bg-primary-slate/50 rounded-xl shadow-xl p-8 h-full">
                  {documentGenerated ? (
                    <div className=&quot;text-center">
                      <div className=&quot;flex justify-center mb-6">
                        <div className=&quot;w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                          <FaFileAlt className=&quot;text-green-600 text-3xl&quot; />
                        </div>
                      </div>
                      <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white mb-4">Document Generated!</h3>
                      <p className=&quot;text-primary-slate dark:text-white/80 mb-8">
                        Your document has been created successfully. You can now download it in your preferred format.
                      </p>
                      <div className=&quot;grid grid-cols-3 gap-3 mb-8">
                        {[&apos;PDF', &apos;DOCX', &apos;TXT'].map((format) => (
                          <button
                            key={format}
                            className=&quot;py-2 px-4 bg-primary-blue/10 hover:bg-primary-blue/20 text-primary-blue rounded-md flex items-center justify-center space-x-2 transition-colors"
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
                        className=&quot;text-primary-blue hover:underline"
                      >
                        Create Another Document
                      </button>
                    </div>
                  ) : selectedDocType ? (
                    <div>
                      <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white mb-4">
                        {documentTypes.find(doc => doc.id === selectedDocType)?.name} Preview
                      </h3>
                      <div className=&quot;bg-gray-100 dark:bg-primary-navy rounded-md p-4 h-[300px] flex items-center justify-center border border-dashed border-gray-300 dark:border-gray-700">
                        <div className=&quot;text-center opacity-70">
                          <FaFileAlt className=&quot;mx-auto text-4xl mb-3 text-primary-slate dark:text-white/60&quot; />
                          <p className=&quot;text-primary-slate dark:text-white/80">
                            Complete the form to generate your document preview
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className=&quot;text-center h-full flex flex-col items-center justify-center">
                      <FaFileAlt className=&quot;text-primary-slate/30 dark:text-white/10 text-6xl mb-4&quot; />
                      <p className=&quot;text-primary-slate dark:text-white/60">
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
        <section className=&quot;py-16 bg-white dark:bg-primary-slate border-t border-gray-200 dark:border-gray-800">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-16">
              <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">
                Why Use Our Document Creator
              </h2>
              <p className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                Our AI-powered document generation system saves you time, money, and effort while ensuring professional results.
              </p>
            </div>
            
            <div className=&quot;grid md:grid-cols-3 gap-8">
              {[
                {
                  title: &apos;Legal Compliance',
                  description: &apos;All documents are created with legal compliance in mind, regularly updated to meet changing regulations.&apos;,
                  icon: FaFileContract
                },
                {
                  title: &apos;Customizable Templates',
                  description: &apos;Personalize every document to fit your specific business needs with our flexible templates.&apos;,
                  icon: FaFileCode
                },
                {
                  title: &apos;Multiple Formats',
                  description: &apos;Download your documents in various formats including PDF, DOCX, and TXT for ultimate versatility.&apos;,
                  icon: FaFileDownload
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;bg-primary-light dark:bg-primary-navy/50 p-6 rounded-xl shadow-md"
                >
                  <div className=&quot;rounded-full w-12 h-12 bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                    <feature.icon className=&quot;text-green-600 text-xl&quot; />
                  </div>
                  <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white mb-2">{feature.title}</h3>
                  <p className=&quot;text-primary-slate dark:text-white/80">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className=&quot;py-16 bg-primary-light dark:bg-primary-navy border-t border-gray-200 dark:border-gray-800">
          <div className=&quot;max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-12">
              <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className=&quot;space-y-6">
              {[
                {
                  question: &apos;Are these documents legally binding?&apos;,
                  answer: &apos;Yes, all documents are created with legal compliance in mind. However, we recommend having any critical legal documents reviewed by a legal professional before use, particularly for complex business situations.&apos;
                },
                {
                  question: &apos;How is my information handled?&apos;,
                  answer: &apos;Your privacy is important to us. All information submitted through our document creator is encrypted and never stored longer than necessary to generate your document. We do not share your information with third parties.&apos;
                },
                {
                  question: &apos;Can I edit my document after creation?&apos;,
                  answer: &apos;Absolutely! All documents can be downloaded in editable formats (DOCX, TXT) allowing you to make any additional changes or customizations needed.&apos;
                },
                {
                  question: &apos;Do you offer custom document creation?&apos;,
                  answer: &apos;Yes, if you need a specialized document that isn\'t available in our standard templates, please contact us for custom document creation services.&apos;
                }
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;bg-white dark:bg-primary-slate/50 rounded-xl shadow-md overflow-hidden"
                >
                  <div className=&quot;p-6">
                    <h3 className=&quot;text-lg font-bold text-primary-navy dark:text-white mb-3">{faq.question}</h3>
                    <p className=&quot;text-primary-slate dark:text-white/80">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className=&quot;text-center mt-12">
              <Link href=&quot;/contact">
                <AnimatedButton className=&quot;bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                  Contact for Custom Documents
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection className=&quot;py-20 bg-primary-slate text-white relative overflow-hidden">
          <div className=&quot;absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          
          <div className=&quot;max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedText
              text=&quot;Start Creating Professional Documents Today&quot;
              className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;
              highlight={false}
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className=&quot;text-xl text-white/90 mb-10 max-w-3xl mx-auto"
            >
              Save time and ensure legal compliance with our AI-powered document generation system.
            </motion.p>
            
            <a href=&quot;#document-types">
              <AnimatedButton className=&quot;bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                Create Your First Document
              </AnimatedButton>
            </a>
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
