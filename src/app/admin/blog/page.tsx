import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog Admin Redirect - Technology Alliance Solutions',
  description: 'Blog administration has been removed pending Sanity CMS integration',
};

export default function BlogAdminPage() {
  // Redirect to home page as blog admin is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
