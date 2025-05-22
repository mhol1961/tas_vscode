// Define types for case studies
export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  featured: boolean;
  featured_image: string;
  overview: string;
  overview_details?: string;
  challenge: string;
  challenge_details?: string;
  solution: string;
  solution_details?: string;
  solution_images?: {
    url: string;
    alt?: string;
  }[];
  results: string;
  results_details?: string;
  key_metrics?: {
    value: string;
    label: string;
  }[];
  testimonial?: {
    quote: string;
    name: string;
    position: string;
    company: string;
    avatar?: string;
  };
  project_duration?: string;
  technologies?: string[];
}

// Define industry categories
export const industries = [
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'finance', name: 'Finance & Banking' },
  { id: 'ecommerce', name: 'E-Commerce' },
  { id: 'real-estate', name: 'Real Estate' },
  { id: 'education', name: 'Education' },
  { id: 'manufacturing', name: 'Manufacturing' },
  { id: 'technology', name: 'Technology' },
  { id: 'hospitality', name: 'Hospitality' },
  { id: 'nonprofit', name: 'Non-Profit' },
  { id: 'professional-services', name: 'Professional Services' }
];

// Define service types
export const serviceTypes = [
  { id: 'seo', name: 'SEO Services' },
  { id: 'website', name: 'Website Creation' },
  { id: 'email', name: 'Email Marketing' },
  { id: 'lead-gen', name: 'Lead Generation' },
  { id: 'crm', name: 'CRM & Automation' },
  { id: 'reputation', name: 'Reputation Management' },
  { id: 'social-media', name: 'Social Media Management' },
  { id: 'integration', name: 'Technology Integration' },
  { id: 'marketing-automation', name: 'Marketing Automation' },
  { id: 'custom', name: 'Custom Solutions' },
  { id: 'optimization', name: 'System Optimization' },
  { id: 'consulting', name: 'Technology Consulting' }
];

// Sample case studies data
export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'healthcare-provider-crm-implementation',
    title: 'Healthcare Provider CRM Implementation',
    client: 'MedCare Solutions',
    industry: 'Healthcare',
    services: ['CRM & Automation', 'Technology Integration', 'System Optimization'],
    featured: true,
    featured_image: '/images/photos/Laptop_CRM_dashboard.png',
    overview: 'MedCare Solutions needed a comprehensive CRM solution to manage patient relationships, streamline appointment scheduling, and improve follow-up care coordination.',
    overview_details: '<p>MedCare Solutions is a multi-location healthcare provider with over 50 physicians and specialists. They were struggling with fragmented patient data across multiple systems, leading to inefficiencies in scheduling, follow-ups, and patient communication.</p><p>Our team was tasked with implementing a unified CRM solution that would integrate with their existing electronic health record (EHR) system while adding powerful automation capabilities to improve patient engagement and operational efficiency.</p>',
    challenge: 'The client was using multiple disconnected systems for patient management, resulting in data silos, communication gaps, and inefficient workflows.',
    challenge_details: '<ul><li>Legacy systems with limited integration capabilities</li><li>Compliance requirements for HIPAA and other healthcare regulations</li><li>Staff resistance to adopting new technology</li><li>Need for minimal disruption during transition</li><li>Complex appointment scheduling across multiple locations and specialties</li></ul>',
    solution: 'We implemented a customized GoHighLevel solution with HIPAA compliance, integrated with their existing EHR system, and developed automated workflows for appointment scheduling and patient follow-ups.',
    solution_details: '<p>Our implementation approach included:</p><ul><li>Custom GoHighLevel configuration with HIPAA-compliant settings</li><li>Secure API integration with their existing EHR system</li><li>Automated appointment reminders via SMS and email</li><li>Patient satisfaction surveys with feedback collection</li><li>Custom dashboards for monitoring key performance metrics</li><li>Comprehensive staff training program</li></ul>',
    solution_images: [
      {
        url: '/images/photos/Laptop_CRM_dashboard.png',
        alt: 'CRM Dashboard for Healthcare Provider'
      },
      {
        url: '/images/photos/cust_service_trans.png',
        alt: 'Patient Communication Interface'
      }
    ],
    results: 'The implementation resulted in a 35% reduction in missed appointments, 28% improvement in patient satisfaction scores, and 20% increase in staff efficiency.',
    results_details: '<p>Within six months of implementation, MedCare Solutions experienced significant improvements across their operations:</p>',
    key_metrics: [
      {
        value: '35%',
        label: 'Reduction in missed appointments'
      },
      {
        value: '28%',
        label: 'Improvement in patient satisfaction'
      },
      {
        value: '20%',
        label: 'Increase in staff efficiency'
      },
      {
        value: '40%',
        label: 'Faster patient onboarding'
      },
      {
        value: '$120K',
        label: 'Annual cost savings'
      }
    ],
    testimonial: {
      quote: "The CRM solution implemented by Intelligrow has transformed how we manage patient relationships. The automated appointment reminders alone have saved us countless hours and significantly reduced no-shows. The team's understanding of healthcare compliance requirements was exceptional.",
      name: "Dr. Sarah Johnson",
      position: "Medical Director",
      company: "MedCare Solutions",
      avatar: "/images/photos/placeholder.txt"
    },
    project_duration: "4 months",
    technologies: ["GoHighLevel", "Zapier", "Twilio", "Custom API Integration"]
  },
  {
    id: '2',
    slug: 'real-estate-agency-marketing-automation',
    title: 'Real Estate Agency Marketing Automation',
    client: 'Premier Properties',
    industry: 'Real Estate',
    services: ['Marketing Automation', 'Email Marketing', 'Lead Generation', 'Website Creation'],
    featured: true,
    featured_image: '/images/photos/Marketing_growth_success.jpg',
    overview: 'Premier Properties wanted to modernize their marketing approach and generate more qualified leads for their luxury real estate listings.',
    overview_details: '<p>Premier Properties is a high-end real estate agency specializing in luxury properties. They were struggling with traditional marketing methods that weren\'t generating enough qualified leads for their exclusive listings. They needed a modern, digital-first approach to reach potential buyers effectively.</p>',
    challenge: 'The client was relying heavily on traditional marketing methods and was struggling to reach potential buyers for their luxury properties in an increasingly digital marketplace.',
    challenge_details: '<ul><li>Limited online presence despite high-value inventory</li><li>No system for nurturing leads through the long sales cycle of luxury properties</li><li>Inefficient manual processes for follow-ups</li><li>Difficulty showcasing properties effectively online</li><li>Limited data on marketing performance and ROI</li></ul>',
    solution: 'We developed a comprehensive digital marketing strategy including a new website with virtual tours, automated email nurturing sequences, and targeted social media campaigns.',
    solution_details: '<p>Our solution included:</p><ul><li>Custom-built responsive website with virtual property tours</li><li>Segmented email marketing campaigns based on property interests</li><li>Automated lead nurturing sequences</li><li>Targeted social media advertising campaigns</li><li>CRM implementation with lead scoring</li><li>Performance analytics dashboard</li></ul>',
    solution_images: [
      {
        url: '/images/photos/Marketing_growth_success.jpg',
        alt: 'Real Estate Marketing Dashboard'
      },
      {
        url: '/images/photos/LeadGenService.png',
        alt: 'Lead Generation System'
      }
    ],
    results: 'Within the first year, Premier Properties saw a 150% increase in qualified leads, 45% higher website engagement, and a 30% increase in property sales.',
    results_details: '<p>The results exceeded the client\'s expectations:</p>',
    key_metrics: [
      {
        value: '150%',
        label: 'Increase in qualified leads'
      },
      {
        value: '45%',
        label: 'Higher website engagement'
      },
      {
        value: '30%',
        label: 'Increase in property sales'
      },
      {
        value: '60%',
        label: 'Reduction in marketing cost per acquisition'
      }
    ],
    testimonial: {
      quote: "The marketing automation system has completely transformed our business. We're now reaching the right buyers with the right properties at the right time. The virtual tours and automated follow-ups have been game-changers for our agents.",
      name: "Michael Reynolds",
      position: "Managing Director",
      company: "Premier Properties",
      avatar: "/images/photos/placeholder.txt"
    },
    project_duration: "3 months",
    technologies: ["ActiveCampaign", "WordPress", "Matterport", "Facebook Ads", "Google Analytics"]
  },
  {
    id: '3',
    slug: 'ecommerce-seo-and-conversion-optimization',
    title: 'E-Commerce SEO & Conversion Optimization',
    client: 'Urban Threads Apparel',
    industry: 'E-Commerce',
    services: ['SEO Services', 'Website Creation', 'System Optimization'],
    featured: true,
    featured_image: '/images/photos/WebsiteConversion.png',
    overview: 'Urban Threads Apparel was struggling with low organic traffic and poor conversion rates on their e-commerce store despite having quality products.',
    overview_details: '<p>Urban Threads Apparel is an online clothing retailer specializing in sustainable fashion. Despite having high-quality products and competitive pricing, they were experiencing low organic traffic and poor conversion rates. They needed a comprehensive approach to improve their online visibility and optimize the customer journey.</p>',
    challenge: 'The client\'s website had poor technical SEO, slow loading times, and a confusing checkout process, resulting in high bounce rates and abandoned carts.',
    challenge_details: '<ul><li>Poor search engine rankings for key product categories</li><li>Slow page loading times affecting user experience</li><li>High cart abandonment rate (over 80%)</li><li>Mobile responsiveness issues</li><li>Lack of structured product data for search engines</li><li>Ineffective product categorization and filtering</li></ul>',
    solution: 'We performed a comprehensive SEO audit, implemented technical fixes, restructured the product catalog, and optimized the checkout process to improve user experience.',
    solution_details: '<p>Our solution included:</p><ul><li>Technical SEO audit and implementation of fixes</li><li>Website speed optimization</li><li>Mobile responsiveness improvements</li><li>Structured data implementation for products</li><li>User experience redesign of product pages</li><li>Simplified checkout process</li><li>Content strategy for category pages</li></ul>',
    solution_images: [
      {
        url: '/images/photos/WebsiteConversion.png',
        alt: 'E-Commerce Website Optimization'
      },
      {
        url: '/images/photos/SEO_Services.png',
        alt: 'SEO Performance Dashboard'
      }
    ],
    results: 'Within six months, organic traffic increased by 210%, conversion rate improved by 85%, and revenue grew by 125%.',
    results_details: '<p>The optimization efforts delivered significant improvements:</p>',
    key_metrics: [
      {
        value: '210%',
        label: 'Increase in organic traffic'
      },
      {
        value: '85%',
        label: 'Improvement in conversion rate'
      },
      {
        value: '125%',
        label: 'Growth in revenue'
      },
      {
        value: '50%',
        label: 'Reduction in cart abandonment'
      },
      {
        value: '3.2s',
        label: 'Decrease in page load time'
      }
    ],
    testimonial: {
      quote: "The SEO and conversion optimization work has completely transformed our online business. We're now ranking for competitive keywords we never thought possible, and customers are completing purchases at a much higher rate. The ROI on this project has been phenomenal.",
      name: "Emma Chen",
      position: "E-Commerce Director",
      company: "Urban Threads Apparel",
      avatar: "/images/photos/placeholder.txt"
    },
    project_duration: "6 months",
    technologies: ["Shopify", "Google Analytics", "SEMrush", "Hotjar", "Schema.org"]
  },
  {
    id: '4',
    slug: 'manufacturing-company-system-integration',
    title: 'Manufacturing Company System Integration',
    client: 'Precision Manufacturing Inc.',
    industry: 'Manufacturing',
    services: ['Technology Integration', 'System Optimization', 'Custom Solutions'],
    featured: false,
    featured_image: '/images/photos/System_optimization.png',
    overview: 'Precision Manufacturing Inc. needed to integrate their production systems, inventory management, and customer ordering platforms to create a unified workflow.',
    challenge: 'The client was operating with disconnected systems for production, inventory, and orders, causing delays, errors, and inefficiencies throughout their operations.',
    solution: 'We designed and implemented a custom integration solution that connected their ERP, inventory management, and customer portal systems into a seamless workflow.',
    results: 'The integration reduced order processing time by 65%, decreased inventory discrepancies by 80%, and improved production planning efficiency by 40%.',
    testimonial: {
      quote: "The system integration has eliminated the data silos that were causing so many problems in our operations. We now have real-time visibility across our entire process from order to delivery.",
      name: "Robert Martinez",
      position: "Operations Director",
      company: "Precision Manufacturing Inc."
    },
    project_duration: "8 months",
    technologies: ["Microsoft Dynamics", "Custom API Development", "Power Automate", "Azure Logic Apps"]
  },
  {
    id: '5',
    slug: 'financial-services-lead-generation',
    title: 'Financial Services Lead Generation',
    client: 'Secure Wealth Advisors',
    industry: 'Finance & Banking',
    services: ['Lead Generation', 'Marketing Automation', 'Email Marketing'],
    featured: false,
    featured_image: '/images/photos/LeadGenService.png',
    overview: 'Secure Wealth Advisors wanted to increase their client base by implementing a sophisticated lead generation and nurturing system for high-net-worth individuals.',
    challenge: 'The client was struggling to attract qualified leads for their wealth management services and had no systematic approach to nurturing prospects through their long sales cycle.',
    solution: 'We developed a multi-channel lead generation strategy with targeted content, webinars, and a sophisticated lead scoring and nurturing system.',
    results: 'The campaign generated 120 qualified leads in the first quarter, resulting in 18 new clients with an average portfolio value of $1.2M.',
    key_metrics: [
      {
        value: '120',
        label: 'Qualified leads in Q1'
      },
      {
        value: '18',
        label: 'New clients acquired'
      },
      {
        value: '$1.2M',
        label: 'Average portfolio value'
      },
      {
        value: '320%',
        label: 'ROI on marketing spend'
      }
    ],
    testimonial: {
      quote: "The lead generation system has transformed how we acquire new clients. The quality of leads and the nurturing sequences have allowed our advisors to focus on the most promising prospects.",
      name: "Jennifer Blackwell",
      position: "Marketing Director",
      company: "Secure Wealth Advisors"
    }
  },
  {
    id: '6',
    slug: 'education-platform-website-redesign',
    title: 'Education Platform Website Redesign',
    client: 'Global Learning Academy',
    industry: 'Education',
    services: ['Website Creation', 'SEO Services', 'User Experience Design'],
    featured: false,
    featured_image: '/images/photos/Abstract_laptop.png',
    overview: 'Global Learning Academy needed a complete website redesign to improve user experience, mobile responsiveness, and conversion rates for their online courses.',
    challenge: 'The client\'s existing website was outdated, difficult to navigate, and performed poorly on mobile devices, resulting in high bounce rates and low course enrollments.',
    solution: 'We designed and developed a modern, responsive website with an intuitive course catalog, streamlined enrollment process, and optimized content strategy.',
    results: 'The new website increased mobile enrollments by 75%, reduced bounce rate by 40%, and improved overall course registrations by 50%.',
    key_metrics: [
      {
        value: '75%',
        label: 'Increase in mobile enrollments'
      },
      {
        value: '40%',
        label: 'Reduction in bounce rate'
      },
      {
        value: '50%',
        label: 'Improvement in course registrations'
      },
      {
        value: '65%',
        label: 'Increase in pages per session'
      }
    ]
  }
];
