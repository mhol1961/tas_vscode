import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'New Case Study Redirect - Technology Alliance Solutions',
  description: 'Case study creation has been removed pending Sanity CMS integration',
};

export default function NewCaseStudyPage() {
  // Redirect to home page as case study creation is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
