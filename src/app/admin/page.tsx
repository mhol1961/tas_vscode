import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Admin Dashboard Redirect - Intelligrow',
  description: 'Admin dashboard has been removed pending Sanity CMS integration',
};

export default function AdminDashboardPage() {
  // Redirect to home page as admin dashboard is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
