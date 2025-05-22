import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'New Service Redirect - Technology Alliance Solutions',
  description: 'Service creation has been removed pending Sanity CMS integration',
};

export default function NewServicePage() {
  // Redirect to home page as service creation is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
