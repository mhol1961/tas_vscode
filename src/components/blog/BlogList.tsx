'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  published_at: string;
}

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl font-semibold mb-2">No blog posts found</h3>
        <p className="text-gray-600">Check back soon for new content!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
          {post.featured_image && (
            <div className="relative h-48 w-full">
              <Image
                src={post.featured_image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 line-clamp-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                {post.title}
              </Link>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {new Date(post.published_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            {post.excerpt && (
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
            )}
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
