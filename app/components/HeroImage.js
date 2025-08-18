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
		title: "Kampus Hijau UCIC",
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
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				speed={1200}
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
								className="object-cover brightness-75 transition-all duration-700"
								priority={idx === 0}
							/>
							{/* Gradient overlay for better text readability */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
							<div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20">
								<motion.div
									initial={{ opacity: 0, scale: 0.95, y: 40 }}
									animate={{ opacity: 1, scale: 1, y: 0 }}
									transition={{ duration: 0.9, ease: "easeOut" }}
									className="backdrop-blur-md bg-black/30 rounded-xl shadow-2xl p-6 md:p-10"
								>
									<motion.h1
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8, ease: "easeOut" }}
										className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg"
									>
										{slide.title}
									</motion.h1>
									<motion.p
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
										className="text-lg md:text-2xl text-white/90 mb-2 md:mb-4"
									>
										{slide.desc}
									</motion.p>
								</motion.div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
