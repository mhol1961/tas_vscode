import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Admin Login Redirect - Intelligrow',
  description: 'Admin login functionality has been removed pending Sanity CMS integration',
}

export default function AdminLoginPage() {
  // Redirect to home page as admin login functionality is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
