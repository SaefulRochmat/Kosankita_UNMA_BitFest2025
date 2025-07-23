"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroImage() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-600 text-white overflow-visible">
      <div className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-8 relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 relative z-30"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Universitas Catur Insan Cendikia
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-blue-100">
            Modern & Futuristic Campus for Future Leaders
          </p>
          <a
            href="#"
            className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition"
          >
            Daftar Sekarang
          </a>
        </motion.div>

        {/* Images */}
        <div className="flex-1 flex justify-center relative min-h-[300px]">
          {/* Mobile view: single image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 block md:hidden"
          >
            <Image
              src="https://www.cic.ac.id/assets/images/slider/904.jpg"
              alt="Gedung Utama"
              width={400}
              height={250}
              className="rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Desktop view: 3 images */}
          <div className="hidden md:flex flex-1 justify-center relative">
            {/* Gambar 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <Image
                src="https://www.cic.ac.id/assets/images/slider/904.jpg"
                alt="Gedung Utama"
                width={800}
                height={420}
                className="rounded-xl shadow-lg"
              />
            </motion.div>

            {/* Gambar 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 20, scale: 1.05 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute z-20 translate-y-64 translate-x-36"
            >
              <Image
                src="https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg"
                alt="Gedung Kedua"
                width={400}
                height={300}
                className="rounded-xl shadow-xl"
              />
            </motion.div>

            {/* Gambar 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 1 }}
              animate={{ opacity: 1, y: 40, scale: 1.1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute z-30 translate-y-48 -translate-56"
            >
              <Image
                src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg"
                alt="Gedung Ketiga"
                width={385}
                height={280}
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
    </section>
  );
}
