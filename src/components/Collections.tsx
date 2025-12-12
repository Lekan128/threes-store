import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import towel from '../assets/towel.png';
import romper from '../assets/romper.png';
import tshirt from '../assets/tshirt.png';

const PRODUCTS = [towel, romper, tshirt, towel, romper, tshirt]; // Repeat for seamless loop
const TESTIMONIALS = [
  {
    name: "Sarah J.",
    text: "The baby rompers are incredibly soft! My little one loves them.",
    rating: 5
  },
  {
    name: "Michael T.",
    text: "Bought a set of towels and I am amazed by the quality. Super absorbent.",
    rating: 5
  },
  {
    name: "Emily R.",
    text: "The t-shirt fit is perfect and the fabric feels so premium. Will buy again!",
    rating: 5
  }
];

export default function Collections() {
  return (
    <section id="collections" className="py-20 bg-background overflow-hidden">
      
      {/* Marquee Section */}
      <div className="mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Our Favorites</h2>
        <div className="relative flex overflow-x-hidden w-full">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: "-50%" }}
            transition={{ 
              ease: "linear", 
              duration: 20, 
              repeat: Infinity 
            }}
            style={{ width: "max-content" }}
          >
            {[...PRODUCTS, ...PRODUCTS].map((img, index) => (
              <div key={index} className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-[2rem] overflow-hidden shadow-lg">
                <img src={img} alt="Product" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Customer Love</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              <h4 className="font-bold text-primary">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
