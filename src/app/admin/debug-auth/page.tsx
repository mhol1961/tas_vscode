import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Debug Auth Redirect - Intelligrow',
  description: 'Debug auth functionality has been removed pending Sanity CMS integration',
}

export default function DebugAuthPage() {
  // Redirect to home page as debug auth functionality is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
