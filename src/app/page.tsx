"use client";

import LoginForm from "@/components/auth/LoginForm";

// Main Component
export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <LoginForm />
    </div>
  );
}
