import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Edit Case Study Redirect - Technology Alliance Solutions',
  description: 'Case study editing has been removed pending Sanity CMS integration',
};

export default function EditCaseStudyPage() {
  // Redirect to home page as case study editing is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
