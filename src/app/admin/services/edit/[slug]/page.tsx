import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Edit Service Redirect - Technology Alliance Solutions',
  description: 'Service editing has been removed pending Sanity CMS integration',
};

export default function EditServicePage() {
  // Redirect to home page as service editing is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
