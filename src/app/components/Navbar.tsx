"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              KantinKu
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link 
                  href="/register"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Register
                </Link>
                <Link 
                  href="/login"
                  className="bg-foreground text-background hover:opacity-90 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              </>
            ) : (
              <Link 
                href="/dashboard"
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}