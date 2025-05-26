import { NextRequest, NextResponse } from 'next/server';
import { caseStudies, industries, serviceTypes } from '@/data/caseStudiesData';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // Get filter parameters
    const industry = searchParams.get('industry');
    const service = searchParams.get('service');
    const featured = searchParams.get('featured');
    
    // Apply filters
    let filteredCaseStudies = [...caseStudies];
    
    if (industry) {
      filteredCaseStudies = filteredCaseStudies.filter(cs => 
        cs.industry.toLowerCase() === industry.toLowerCase()
      );
    }
    
    if (service) {
      filteredCaseStudies = filteredCaseStudies.filter(cs => 
        cs.services.some(s => s.toLowerCase() === service.toLowerCase())
      );
    }
    
    if (featured === 'true') {
      filteredCaseStudies = filteredCaseStudies.filter(cs => cs.featured);
    }
    
    // Sort by ID (assuming newer case studies have higher IDs)
    filteredCaseStudies.sort((a, b) => {
      // Convert IDs to numbers if possible, otherwise compare as strings
      const idA = parseInt(a.id) || a.id;
      const idB = parseInt(b.id) || b.id;
      return typeof idA === 'number' && typeof idB === 'number' 
        ? idB - idA  // Sort numerically if both are numbers
        : String(idB).localeCompare(String(idA));  // Sort as strings otherwise
    });
    
    return NextResponse.json({
      caseStudies: filteredCaseStudies,
      filters: {
        industries,
        serviceTypes
      }
    });
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
