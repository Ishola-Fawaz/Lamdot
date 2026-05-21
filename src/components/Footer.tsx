"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-900 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/assets/logo.jpg" 
                alt="Lamdot" 
                width={140} 
                height={40} 
              />
            </div>
            <p className="text-gray-900 text-sm leading-relaxed max-w-md font-sans">
              Premium footwear designed for every step. Built for performance, styled for comfort.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-300 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-200" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-300 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-200" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-300 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-200" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-300 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-200" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

{/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-sans mb-6 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/shop" className="text-gray-900 hover:text-orange-500 transition-colors font-sans text-sm block hover:underline">Shop</Link></li>
              <li><Link href="#categories" className="text-gray-900 hover:text-orange-500 transition-colors font-sans text-sm block hover:underline">Categories</Link></li>
              <li><Link href="#new-arrivals" className="text-gray-900 hover:text-orange-500 transition-colors font-sans text-sm block hover:underline">New Arrivals</Link></li>
              <li><Link href="#sale" className="text-gray-900 hover:text-orange-500 transition-colors font-sans text-sm block hover:underline">Sale</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold font-sans mb-6 text-gray-900">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-900 hover:text-orange-500 transition-colors font-sans text-sm block hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-900 hover:text-orange-500 transition-colors font-sans text-sm block hover:underline">Contact</Link></li>
              <li><Link href="#" className="text-gray-900 hover:text-orange-500 transition-colors font-sans text-sm block hover:underline">Careers</Link></li>
              <li><Link href="#" className="text-gray-900 hover:text-orange-500 transition-colors font-sans text-sm block hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold font-sans mb-6 text-gray-900">Stay Updated</h3>
            <p className="text-gray-900 text-sm mb-4 font-sans">Get the latest drops and exclusive offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-gray-100 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 font-sans text-sm"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold font-mono text-sm transition-all duration-200 whitespace-nowrap text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Contact Info */}
          <div className="flex items-center gap-4 text-sm text-gray-900 font-sans flex-wrap">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+234 808 088 1473</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>olasojiolamide10@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Ikotun, Lagos</span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-900 font-sans">
            © {currentYear} Lamdot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
