import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pages Admin Redirect - Technology Alliance Solutions',
  description: 'Pages administration has been removed pending Sanity CMS integration',
};

export default function PagesAdminPage() {
  // Redirect to home page as pages admin is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
