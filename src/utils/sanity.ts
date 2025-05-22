import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // `false` if you want to ensure fresh data
});

// Setup helper for generating image URLs with only the asset reference data in your documents
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
