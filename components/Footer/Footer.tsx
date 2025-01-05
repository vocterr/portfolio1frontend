"use client";

import { usePathname } from 'next/navigation'
import React from 'react'
import { FiLinkedin, FiTwitch, FiTwitter, FiYoutube } from 'react-icons/fi'

export const Footer = () => {
    const pathname = usePathname();

    if (pathname === "/signin" || pathname === "/signup" || pathname == "/create-goal" || pathname == "/create-account" || pathname == "/create-transaction" || pathname == "/create-budget" || pathname == "/user" || pathname == "/ai-insights") {
        return null;
    }
  return (
    <footer className={`relative bg-zinc-900 text-gray-300 pt-16 pb-8 ${pathname === "/" ? "mt-0" : "mt-[500px]" }`}>
          <div className="container mx-auto px-6">
            {/* Top Footer Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
              {/* Brand / Logo placeholder */}
              <div className="text-center md:text-left">
                <h1 className="text-2xl font-bold text-white mb-2">finAI</h1>
                <p className="max-w-sm text-gray-400">
                  Your AI-powered companion for smarter financial decisions.
                </p>
              </div>

              {/* Useful Links */}
              <div className="flex space-x-8 justify-center">
                <div className="flex flex-col text-sm">
                  <span className="font-semibold text-white mb-3">
                    Company
                  </span>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                  <a href="#" className="hover:text-white transition">
                    Press
                  </a>
                </div>
                <div className="flex flex-col text-sm">
                  <span className="font-semibold text-white mb-3">
                    Resources
                  </span>
                  <a href="#" className="hover:text-white transition">
                    Help Center
                  </a>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                  <a href="#" className="hover:text-white transition">
                    Security
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 justify-center">
                <a
                  href="#"
                  className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition"
                >
                  <FiTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition"
                >
                  <FiLinkedin size={24} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition"
                >
                  <FiYoutube size={24} />
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 border-b border-zinc-700" />

            {/* Bottom Footer Section */}
            <div className="flex flex-col md:flex-row items-center justify-between text-sm">
              <p className="mb-4 md:mb-0">© 2024 finAI. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
  )
}
