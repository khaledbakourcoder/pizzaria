"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/context/CartContext";

export default function HomeNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleCart, items } = useCart();

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="w-full flex justify-between items-center px-8 py-5 bg-background/80 backdrop-blur-md border-b border-border relative z-50">
        <Link href="/" className="flex flex-col relative z-50">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_var(--color-primary)]" />
            <h1 className="text-2xl font-black tracking-tighter italic uppercase text-foreground">
              POINT<span className="text-primary">PIZZA</span>
            </h1>
          </div>
          <p className="text-[10px] text-muted tracking-[0.4em] uppercase pl-5">
            Flensburg
          </p>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center text-[10px] font-black uppercase tracking-[0.3em] text-foreground">
          <Link href="/" className="hover:text-primary transition-all">
            Startseite
          </Link>
          <Link href="/menu" className="hover:text-primary transition-all">
            Speisekarte
          </Link>
          <Link href="/#about" className="hover:text-primary transition-all">
            Story
          </Link>
          <button
            onClick={toggleCart}
            className="flex items-center gap-2 bg-primary text-primary-fg px-6 py-2 rounded-full hover:bg-foreground hover:text-background transition-all shadow-lg font-black uppercase"
          >
            <span>Warenkorb</span>
            {totalItems > 0 && (
              <span className="bg-black text-primary px-2 py-0.5 rounded-full text-[10px]">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Hamburger & Cart Icons */}
        <div className="md:hidden flex items-center gap-6 relative z-50">
          <button
            onClick={toggleCart}
            className="relative text-primary flex items-center justify-center"
            aria-label="Warenkorb öffnen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-foreground text-background text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <button
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü umschalten"
          >
            <span className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-primary transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col gap-10 items-center text-sm font-black uppercase tracking-[0.3em] text-foreground">
          <Link
            href="/"
            className="hover:text-primary transition-all"
            onClick={() => setIsOpen(false)}
          >
            Startseite
          </Link>
          <Link
            href="/menu"
            className="hover:text-primary transition-all"
            onClick={() => setIsOpen(false)}
          >
            Speisekarte
          </Link>
          <Link
            href="/#about"
            className="hover:text-primary transition-all"
            onClick={() => setIsOpen(false)}
          >
            Story
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
              toggleCart();
            }}
            className="bg-primary text-primary-fg px-8 py-3 rounded-full hover:bg-foreground hover:text-background transition-all shadow-lg font-black uppercase mt-4 flex items-center gap-3"
          >
            <span>Warenkorb</span>
            {totalItems > 0 && (
              <span className="bg-black text-primary px-2 py-0.5 rounded-full text-xs">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
