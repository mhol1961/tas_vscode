import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'New Resource Redirect - Technology Alliance Solutions',
  description: 'Resource creation has been removed pending Sanity CMS integration',
};

export default function NewResourcePage() {
  // Redirect to home page as resource creation is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
