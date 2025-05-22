// This file previously contained Supabase database types
// Since we're switching to Sanity CMS, these types will be defined differently
// in the future based on Sanity schema

export type SanityDocument = {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  [key: string]: unknown;
};

// Temporary export to avoid breaking existing code
// This will be properly defined when integrating with Sanity
export interface Database {
  public: {
    Tables: Record<string, unknown>;
    Views: Record<string, unknown>;
    Functions: Record<string, unknown>;
    Enums: Record<string, unknown>;
  }
}

// Placeholder for future Sanity schema types
// These will be populated when integrating with Sanity CMS
