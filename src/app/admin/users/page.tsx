import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Users Admin Redirect - Technology Alliance Solutions',
  description: 'Users administration has been removed pending Sanity CMS integration',
};

export default function UsersAdminPage() {
  // Redirect to home page as users admin is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
