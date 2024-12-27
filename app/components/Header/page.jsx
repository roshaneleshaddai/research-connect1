'use client';

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useRef } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline'; // For the outline version



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false); // State for AboutModal
  const menuRef = useRef(null);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.clear(); // Clear local storage
    router.push('/'); // Redirect to login page
  };

  // Function to handle profile navigation
  const goToProfile = () => {
    router.push('/profile'); // Redirect to profile page
  };

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Toggle About modal visibility
  const toggleAboutModal = () => {
    setIsAboutModalOpen((prev) => !prev);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 bg-[#F5F5F5] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex flex-col items-left">
          <h1 className="text-2xl font-bold text-black">
            Research Connect
          </h1>
          <p className="text-sm text-gray-600 hidden sm:block">
            Effortless Sharing, Seamless Reviews, & Actionable Insights
          </p>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex space-x-4">
          <Link
            href="/#home"
            className="text-base font-medium text-black px-3 py-2 rounded hover:bg-indigo-700/10 hover:text-indigo-700 transition-all"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-base font-medium text-black px-3 py-2 rounded hover:bg-indigo-700/10 hover:text-indigo-700 transition-all"
          >
            About
          </Link>
          <Link
            href="/mypapers"
            className="text-base font-medium text-black px-3 py-2 rounded hover:bg-indigo-700/10 hover:text-indigo-700 transition-all"
          >
            My Research Papers
          </Link>
          <Link
            href="/paper_submit"
            className="text-base font-medium text-black px-3 py-2 rounded hover:bg-indigo-700/10 hover:text-indigo-700 transition-all"
          >
            Submit Paper
          </Link>
          <Link
            href="/contact"
            className="text-base font-medium text-black px-3 py-2 rounded hover:bg-indigo-700/10 hover:text-indigo-700 transition-all"
          >
            Contact Us
          </Link>
          <div className="relative" ref={menuRef}>
          <div className="cursor-pointer" onClick={toggleMenu}>
            <UserCircleIcon className="h-8 w-8" />
          </div>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <button
                onClick={goToProfile}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          {isOpen ? (
            <FaTimes onClick={toggleMenu} className="text-2xl cursor-pointer" />
          ) : (
            <FaBars onClick={toggleMenu} className="text-2xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`fixed left-0 top-0 w-full h-full bg-[#604CC3] text-white flex flex-col items-center justify-center transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-6 text-center text-lg">
          <li>
            <Link href="/#home" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/mypapers" onClick={toggleMenu}>
              My Research Papers
            </Link>
          </li>
          <li>
            <Link href="/regi" onClick={toggleMenu}>
              Submit Paper
            </Link>
          </li>
          <li>
            <Link href="/contact_us" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;