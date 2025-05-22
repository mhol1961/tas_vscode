import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'New Page Redirect - Technology Alliance Solutions',
  description: 'Page creation has been removed pending Sanity CMS integration',
};

export default function NewPagePage() {
  // Redirect to home page as page creation is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
