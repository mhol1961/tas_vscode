import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Resources Admin Redirect - Technology Alliance Solutions',
  description: 'Resources administration has been removed pending Sanity CMS integration',
};

export default function ResourcesAdminPage() {
  // Redirect to home page as resources admin is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
