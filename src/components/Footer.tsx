import { Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience Comfort?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Order now via our WhatsApp channel. The fastest way to get your
            premium goods delivered.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/2348033488710"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-primary border-2 border-transparent hover:border-accent px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-colors"
          >
            <MessageCircle size={28} className="text-accent" />
            Message us on WhatsApp
          </motion.a>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          <a href="#" className="hover:text-accent transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <Facebook size={24} />
          </a>
          {/* Twitter/X icon as generic share */}
          <a href="#" className="hover:text-accent transition-colors">
            <Twitter size={24} />
          </a>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Three's Store. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
