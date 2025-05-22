import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Case Studies Admin Redirect - Technology Alliance Solutions',
  description: 'Case studies administration has been removed pending Sanity CMS integration',
};

export default function CaseStudiesAdminPage() {
  // Redirect to home page as case studies admin is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
