import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Edit Resource Redirect - Technology Alliance Solutions',
  description: 'Resource editing has been removed pending Sanity CMS integration',
};

export default function EditResourcePage() {
  // Redirect to home page as resource editing is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
