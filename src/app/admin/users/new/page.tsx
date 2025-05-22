import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'New User Redirect - Technology Alliance Solutions',
  description: 'User creation has been removed pending Sanity CMS integration',
};

export default function NewUserPage() {
  // Redirect to home page as user creation is removed pending Sanity integration
  redirect("/");
  
  // This code won't run due to redirect, but is needed for TypeScript
  return null;
}
