import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Settings Admin Redirect - Technology Alliance Solutions',
  description: 'Settings administration has been removed pending Sanity CMS integration',
};

export default function SettingsAdminPage() {
  // Redirect to home page as settings admin is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
