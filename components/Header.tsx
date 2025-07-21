"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  RiArrowRightLongLine,
  RiCloseLine,
  RiMenu3Line,
} from "@remixicon/react";
import { navItems } from "@/data/data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();
  return (
    <header className="bg-dark-green-15 pt-3.5 pb-4">
      {/* Top bar */}
      <div className="container bg-dark-green-20 border border-dark-green-25 text-white rounded-md text-center w-full py-2.5 px-3 sm:px-4 flex flex-wrap items-center justify-center gap-3.5 mb-3.5">
        <p className="flex items-center gap-2.5 flex-wrap justify-center">
          <span>
            <img src="/images/cricket-ball-icon.svg" alt="icon" />
          </span>
          Join Our Personalized Nutrition Demo For Free
        </p>
        <Link href="#" className="hover:text-green-70 transition-colors">
          <RiArrowRightLongLine />
        </Link>
      </div>
      {/* Divider */}
      <div className="w-full h-[0.7px] bg-dark-green-20"></div>
      {/* nav bar */}
      <div className="container flex items-center justify-between pt-4">
        <Link href="/">
          <Image
            src="/images/Logo.png"
            alt="logo"
            width={147}
            height={34}
            priority
          />
        </Link>

        {/* Mobile Menu */}
        <nav className={`navbar ${isOpen ? "active" : ""}`} role="navbar">
          {/* wrapper */}
          <div className="flex items-center justify-between">
            <div>
              <Image
                src="/images/Logo.png"
                alt="logo"
                width={147}
                height={34}
              />
            </div>
            <button
              className="text-green-70"
              onClick={handleClick}
              aria-label="close menu"
            >
              <RiCloseLine aria-hidden="true" focusable="false" />
            </button>
          </div>

          {/* Nav list */}
          <ul className="mt-14 grid font-medium text-grey-97 text-center mb-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`block text-xl py-3 border-t border-dark-green-20 hover:text-green-70 transition-colors ${
                    pathname === item.href ? "text-green-70" : ""
                  }`}
                  onClick={handleClick}
                  aria-label="link"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact btn */}
          <Link
            href="/contact"
            className="primary-btn block text-center"
            onClick={handleClick}
            aria-label="contact us"
          >
            Contact us
          </Link>
        </nav>

        {/* lg menu */}
        <div className="max-lg:hidden flex items-center gap-8">
          <ul className="flex items-center gap-10 text-grey-97">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`hover:text-green-70 transition-colors font-semibold ${
                    pathname === item.href ? "text-green-70" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* lg contact btn */}
          <Link href="/contact" className="primary-btn">
            Contact us
          </Link>
        </div>
        {/* Menu toggle icon */}
        <button
          className="lg:hidden text-green-70 active:text-green-75"
          onClick={handleClick}
          aria-label="open menus"
        >
          <RiMenu3Line size={30} aria-hidden="true" focusable="false" />
        </button>

        <div
          className={`overlay ${isOpen ? "active" : ""}`}
          onClick={handleClick}
          aria-label="overlay"
        ></div>
      </div>
    </header>
  );
};

export default Header;
