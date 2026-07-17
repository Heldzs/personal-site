"use client";

import { useState, useEffect } from "react";
import { ThemeButton } from "../ThemeButton";
import { AnimatePresence, motion } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-zinc-200 dark:border-zinc-800 ${
        isScrolled
          ? "py-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b shadow-sm"
          : "py-6 bg-transparent border-b-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold tracking-widest uppercase text-zinc-900 dark:text-zinc-50"
        >
          Helder Junior
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium tracking-wide  text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50 transition-colors group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-zinc-900 dark:bg-zinc-50 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          ))}

          <ThemeButton />
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeButton />

          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Alternar menu"
          >
            <span
              className={`absolute text-xl transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? "rotate-90 opacity-0 scale-50"
                  : "rotate-0 opacity-100 scale-100"
              }`}
            >
              ☰
            </span>
            <span
              className={`absolute text-xl transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? "rotate-0 opacity-100 scale-100"
                  : "-rotate-90 opacity-0 scale-50"
              }`}
            >
              ✕
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              clipPath: "polygon(100% 0, 100% 0, 100% 0, 100% 0)",
            }}
            animate={{
              opacity: 1,
              clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
            }}
            exit={{
              opacity: 0,
              clipPath: "polygon(100% 0, 100% 0, 100% 0, 100% 0)",
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-lg py-4 px-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
