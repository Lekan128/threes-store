import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Collections", href: "#collections" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-2xl text-primary tracking-tight">
              Three's Store
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA (Desktop) */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/2348033488710"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white border border-transparent hover:border-accent px-4 py-2 rounded-full font-bold transition-all shadow-md"
            >
              <MessageCircle size={20} className="text-accent" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-primary hover:bg-accent/10 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/2348033488710"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary text-white border border-transparent hover:border-accent px-4 py-4 rounded-xl font-bold mt-6 shadow-md transition-all"
              >
                <MessageCircle size={24} className="text-accent" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
