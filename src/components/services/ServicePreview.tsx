'use client';

import React from 'react';

interface ServicePreviewProps {
  title: string;
  description?: string;
  content?: string;
  featuredImage?: string;
  icon?: string;
}

export default function ServicePreview({
  title,
  description,
  content,
  featuredImage,
  icon
}: ServicePreviewProps) {
  return (
    <div className="service-preview">
      <div className="mb-6">
        {icon && (
          <div className="flex items-center mb-4">
            <span className="text-primary-red mr-2 text-2xl">
              <i className={icon}></i>
            </span>
          </div>
        )}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
        
        {description && (
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        )}
      </div>
      
      {featuredImage && (
        <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
          <img 
            src={featuredImage} 
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      
      {content && (
        <div className="prose dark:prose-invert max-w-none">
          {/* Simple markdown-like rendering */}
          {content.split('\n\n').map((paragraph, i) => {
            // Check if paragraph is a heading
            if (paragraph.startsWith('# ')) {
              return <h2 key={i} className="text-2xl font-bold mt-6 mb-4">{paragraph.substring(2)}</h2>;
            } else if (paragraph.startsWith('## ')) {
              return <h3 key={i} className="text-xl font-bold mt-5 mb-3">{paragraph.substring(3)}</h3>;
            } else if (paragraph.startsWith('### ')) {
              return <h4 key={i} className="text-lg font-bold mt-4 mb-2">{paragraph.substring(4)}</h4>;
            } else if (paragraph.startsWith('- ')) {
              // Simple list rendering
              const items = paragraph.split('\n- ');
              return (
                <ul key={i} className="list-disc pl-5 my-4">
                  {items.map((item, j) => (
                    <li key={j} className="mb-2">{item.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            } else {
              return <p key={i} className="mb-4">{paragraph}</p>;
            }
          })}
        </div>
      )}
      
      {!content && !featuredImage && (
        <div className="flex flex-col items-center justify-center h-64 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-500 dark:text-gray-400">Add content to see preview</p>
        </div>
      )}
    </div>
  );
}
