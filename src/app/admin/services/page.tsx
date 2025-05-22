import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Services Admin Redirect - Technology Alliance Solutions',
  description: 'Services administration has been removed pending Sanity CMS integration',
};

export default function ServicesAdminPage() {
  // Redirect to home page as services admin is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
