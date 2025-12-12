import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import heroImage from "../assets/romper.png"; // Using romper as a hero visual or maybe a collage

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 md:pt-20 bg-gradient-to-br from-background to-gray-100 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl filter opacity-70" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl filter opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Comfort for You and Your{" "}
              <span className="text-accent-darker">Little Ones</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Shop our premium collection of adult fashion, soft home towels,
              and cozy baby wear.
            </p>
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/2348033488710"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white border-2 border-transparent hover:border-accent px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-lg transition-all w-full md:w-auto"
              >
                <ShoppingBag size={24} className="text-accent" />
                Shop via WhatsApp
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#collections"
                className="bg-transparent text-primary border-2 border-primary hover:bg-primary/5 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all w-full md:w-auto"
              >
                View Collections →
              </motion.a>
            </div>
          </motion.div>

          {/* Hero Image / Composition */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block relative order-last md:order-last mb-8 md:mb-0"
          >
            {/* We could use a collage here, but for now let's show the romper or a mix */}
            <div className="relative z-10 p-4">
              {/* Placeholders for a collage effect could work well here */}
              <img
                src={heroImage}
                alt="Soft Baby Romper"
                className="rounded-[2rem] shadow-2xl w-full max-w-sm mx-auto object-cover aspect-[4/5]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
