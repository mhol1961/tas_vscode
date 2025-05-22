import { Metadata } from 'next';
import Link from 'next/link';
import { createClient } from '@/utils/supabase-server';

export const metadata: Metadata = {
  title: 'Resources & Downloads | Intelligrow',
  description: 'Access our library of resources, guides, templates, and downloadable documents to help grow your business.',
};

interface Document {
  id: string;
  title: string;
  description: string | null;
  file_path: string;
  file_type: string;
  file_size: number;
}

interface Resource {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  resource_type: string;
  status: string;
  published_at: string | null;
  created_at: string;
  documents: Document[];
}

export default async function ResourcesPage() {
  // Fetch resources
  const supabase = await createClient();
  
  const { data: resources, error } = await supabase
    .from('resources')
    .select(`
      *,
      documents:documents(*)
    `)
    .eq('status', 'published')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching resources:', error);
  }
  
  // Group resources by type
  const resourcesByType: Record<string, Resource[]> = {};
  
  resources?.forEach((resource) => {
    if (!resourcesByType[resource.resource_type]) {
      resourcesByType[resource.resource_type] = [];
    }
    resourcesByType[resource.resource_type].push(resource);
  });
  
  // Get resource type display name
  const getResourceTypeDisplay = (type: string) => {
    const typeMap: Record<string, string> = {
      document: 'Documents',
      template: 'Templates',
      guide: 'Guides',
      whitepaper: 'Whitepapers',
      ebook: 'E-Books',
      checklist: 'Checklists',
      tool: 'Tools',
      other: 'Other Resources',
    };
    
    return typeMap[type] || type;
  };
  
  // Get file icon based on type
  const getFileIcon = (fileType: string) => {
    const iconMap: Record<string, string> = {
      pdf: '📄',
      doc: '📝',
      docx: '📝',
      xls: '📊',
      xlsx: '📊',
      ppt: '📊',
      pptx: '📊',
      txt: '📄',
      zip: '📦',
      rar: '📦',
      jpg: '🖼️',
      jpeg: '🖼️',
      png: '🖼️',
      gif: '🖼️',
    };
    
    return iconMap[fileType.toLowerCase()] || '📄';
  };
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Resources & Downloads</h1>
          <p className="mt-4 max-w-2xl text-lg">
            Access our library of resources, guides, templates, and downloadable documents to help grow your business.
          </p>
        </div>
      </div>
      
      {/* Content section */}
      <div className="container mx-auto px-4 py-12">
        {/* Resource types navigation */}
        <div className="mb-12 overflow-x-auto">
          <div className="inline-flex min-w-full space-x-1 rounded-lg bg-gray-100 p-1">
            <button 
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm"
              onClick={() => {
                document.getElementById('all-resources')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              All Resources
            </button>
            
            {Object.keys(resourcesByType).map((type) => (
              <button
                key={type}
                className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                onClick={() => {
                  document.getElementById(`resource-type-${type}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {getResourceTypeDisplay(type)}
              </button>
            ))}
          </div>
        </div>
        
        {/* All resources section */}
        <div id="all-resources" className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">All Resources</h2>
          
          {resources && resources.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource) => (
                <Link
                  key={resource.id}
                  href={`/resources/${resource.slug}`}
                  className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                        {getResourceTypeDisplay(resource.resource_type)}
                      </span>
                      <span className="text-sm text-gray-500">
                        {formatDate(resource.created_at)}
                      </span>
                    </div>
                    
                    <h3 className="mb-2 text-lg font-medium text-gray-900 group-hover:text-blue-600">
                      {resource.title}
                    </h3>
                    
                    {resource.description && (
                      <p className="mb-4 text-sm text-gray-600">
                        {resource.description.length > 120
                          ? `${resource.description.substring(0, 120)}...`
                          : resource.description}
                      </p>
                    )}
                    
                    {resource.documents && resource.documents.length > 0 && (
                      <div className="mt-4">
                        <p className="text-xs font-medium uppercase text-gray-500">
                          Includes {resource.documents.length} {resource.documents.length === 1 ? 'document' : 'documents'}
                        </p>
                        
                        <div className="mt-2 flex flex-wrap gap-2">
                          {resource.documents.slice(0, 3).map((doc: Document) => (
                            <div key={doc.id} className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs">
                              <span className="mr-1">{getFileIcon(doc.file_type)}</span>
                              <span className="truncate max-w-[100px]">{doc.title}</span>
                            </div>
                          ))}
                          
                          {resource.documents.length > 3 && (
                            <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs">
                              +{resource.documents.length - 3} more
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-4 flex items-center text-sm font-medium text-blue-600">
                      View Resource
                      <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
              <p className="text-gray-500">No resources available at the moment.</p>
            </div>
          )}
        </div>
        
        {/* Resources by type */}
        {Object.keys(resourcesByType).map((type) => (
          <div key={type} id={`resource-type-${type}`} className="mb-16 scroll-mt-24">
            <h2 className="mb-6 text-2xl font-bold">{getResourceTypeDisplay(type)}</h2>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resourcesByType[type].map((resource) => (
                <Link
                  key={resource.id}
                  href={`/resources/${resource.slug}`}
                  className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                        {getResourceTypeDisplay(resource.resource_type)}
                      </span>
                      <span className="text-sm text-gray-500">
                        {formatDate(resource.created_at)}
                      </span>
                    </div>
                    
                    <h3 className="mb-2 text-lg font-medium text-gray-900 group-hover:text-blue-600">
                      {resource.title}
                    </h3>
                    
                    {resource.description && (
                      <p className="mb-4 text-sm text-gray-600">
                        {resource.description.length > 120
                          ? `${resource.description.substring(0, 120)}...`
                          : resource.description}
                      </p>
                    )}
                    
                    {resource.documents && resource.documents.length > 0 && (
                      <div className="mt-4">
                        <p className="text-xs font-medium uppercase text-gray-500">
                          Includes {resource.documents.length} {resource.documents.length === 1 ? 'document' : 'documents'}
                        </p>
                        
                        <div className="mt-2 flex flex-wrap gap-2">
                          {resource.documents.slice(0, 3).map((doc: Document) => (
                            <div key={doc.id} className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs">
                              <span className="mr-1">{getFileIcon(doc.file_type)}</span>
                              <span className="truncate max-w-[100px]">{doc.title}</span>
                            </div>
                          ))}
                          
                          {resource.documents.length > 3 && (
                            <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs">
                              +{resource.documents.length - 3} more
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-4 flex items-center text-sm font-medium text-blue-600">
                      View Resource
                      <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
        
        {/* CTA section */}
        <div className="mt-16 rounded-lg bg-blue-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900">Need Custom Solutions?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-700">
            Our team can help you create custom documents, templates, and automation solutions tailored to your business needs.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
