"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    src: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
    title: "Universitas Catur Insan Cendekia",
    desc: "Mencetak Generasi Unggul dan Berdaya Saing",
  },
  {
    src: "https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg",
    title: "Kampus Hijau UNMA",
    desc: "Lingkungan Nyaman untuk Belajar dan Berkembang",
  },
  {
    src: "https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg",
    title: "Fasilitas Modern",
    desc: "Dukung Mahasiswa untuk Meraih Prestasi",
  },
];

export default function HeroImage() {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-screen">
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover brightness-75"
                priority={idx === 0}
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg md:text-2xl"
                >
                  {slide.desc}
                </motion.p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
