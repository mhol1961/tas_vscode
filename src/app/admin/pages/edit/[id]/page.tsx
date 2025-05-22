import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Edit Page Redirect - Technology Alliance Solutions',
  description: 'Page editing has been removed pending Sanity CMS integration',
};

export default function EditPagePage() {
  // Redirect to home page as page editing is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
