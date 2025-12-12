import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import aboutImage from "../assets/towel.png";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <img
              src={aboutImage}
              alt="Soft Towels"
              className="rounded-[3rem] shadow-xl w-full object-cover h-[500px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">
              Our Mission
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Sourcing the Softest Fabrics
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              At Three's Store, we believe comfort shouldn't be a luxury—it
              should be a standard. From our ultra-absorbent towels to our
              delicate baby wear and breathable adult fashion, every item is
              hand-picked for its premium touch and durability.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We are dedicated to bringing you quality that you can feel, at
              prices that make sense. Experience the difference of truly soft
              fabric.
            </p>

            <a
              href="https://wa.me/2348033488710"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors border-b-2 border-primary hover:border-accent pb-1"
            >
              Chat on WhatsApp <MessageCircle size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
