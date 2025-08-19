"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
	{
		src: "/Image/Gedung A (4).jpeg",
		title: "Universitas Catur Insan Cendekia",
		desc: "Mencetak Generasi Unggul dan Berdaya Saing Global",
		subtitle: "Bergabunglah dengan ribuan mahasiswa sukses UCIC"
	},
	{
		src: "/Image/Gedung UCIC (2).jpeg",
		title: "Kampus Hijau & Modern UCIC",
		desc: "Lingkungan Nyaman untuk Belajar dan Berkembang",
		subtitle: "Fasilitas terdepan mendukung prestasi mahasiswa"
	},
	{
		src: "/Image/audit.jpeg",
		title: "Inovasi & Teknologi Terdepan",
		desc: "Mempersiapkan Pemimpin Masa Depan",
		subtitle: "Kurikulum berbasis industri dan teknologi terkini"
	},
];

export default function HeroImage() {
	const [particles, setParticles] = useState([]);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
		// Generate consistent particle positions only on client side
		const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
			id: i,
			left: Math.random() * 100,
			top: Math.random() * 100,
			delay: Math.random() * 3,
			duration: 2 + Math.random() * 2
		}));
		setParticles(generatedParticles);
	}, []);
	return (
		<div className="relative w-full h-screen overflow-hidden">
			<Swiper
				modules={[Navigation, Pagination, Autoplay, EffectFade]}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				pagination={{ 
					clickable: true,
					bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-3 !h-3',
					bulletActiveClass: 'swiper-pagination-bullet-active !bg-yellow-400 !scale-125'
				}}
				autoplay={{ delay: 6000, disableOnInteraction: false }}
				speed={1500}
				effect="fade"
				fadeEffect={{ crossFade: true }}
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
								className="object-cover brightness-50 transition-all duration-1000 scale-105"
								priority={idx === 0}
							/>
							{/* Advanced gradient overlay */}
							<div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-transparent to-black/70 z-10" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-blue-900/30 z-10" />
							
							{/* Animated particles background */}
							{isClient && (
								<div className="absolute inset-0 z-10">
									{particles.map((particle) => (
										<div
											key={particle.id}
											className="absolute w-1 h-1 bg-yellow-300/30 rounded-full animate-pulse"
											style={{
												left: `${particle.left}%`,
												top: `${particle.top}%`,
												animationDelay: `${particle.delay}s`,
												animationDuration: `${particle.duration}s`
											}}
										/>
									))}
								</div>
							)}

							<div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20">
								<motion.div
									initial={{ opacity: 0, scale: 0.9, y: 60 }}
									animate={{ opacity: 1, scale: 1, y: 0 }}
									transition={{ duration: 1.2, ease: "easeOut" }}
									className="backdrop-blur-lg bg-white/5 rounded-3xl shadow-2xl p-8 md:p-12 border border-white/10 max-w-5xl"
								>
									<motion.div
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8, ease: "easeOut" }}
										className="mb-4"
									>
										<span className="inline-block px-4 py-2 bg-yellow-400 text-blue-900 font-bold text-sm rounded-full mb-4 shadow-lg">
											🏆 UNIVERSITAS TERAKREDITASI BAIK
										</span>
									</motion.div>
									
									<motion.h1
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
										className="text-4xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl leading-tight"
									>
										{slide.title}
									</motion.h1>
									
									<motion.p
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
										className="text-xl md:text-3xl text-yellow-100 mb-3 font-medium"
									>
										{slide.desc}
									</motion.p>
									
									<motion.p
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
										className="text-md md:text-xl text-white/80 mb-8"
									>
										{slide.subtitle}
									</motion.p>

									{/* CTA Buttons */}
									<motion.div
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
										className="flex flex-col sm:flex-row gap-4 justify-center"
									>
										<button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold text-lg rounded-full shadow-xl hover:from-yellow-300 hover:to-yellow-400 hover:scale-105 transition-all duration-300 transform hover:shadow-2xl">
											📚 Daftar Sekarang
										</button>
										<button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold text-lg rounded-full border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 transform">
											🎬 Tonton Video
										</button>
									</motion.div>
								</motion.div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			
			{/* Custom Navigation Buttons */}
			<div className="swiper-button-prev !text-white !w-12 !h-12 !bg-black/30 !rounded-full !backdrop-blur-md !border-2 !border-white/20 hover:!bg-yellow-400 hover:!text-blue-900 !transition-all !duration-300 !left-8 !z-30"></div>
			<div className="swiper-button-next !text-white !w-12 !h-12 !bg-black/30 !rounded-full !backdrop-blur-md !border-2 !border-white/20 hover:!bg-yellow-400 hover:!text-blue-900 !transition-all !duration-300 !right-8 !z-30"></div>
		</div>
	);
}
