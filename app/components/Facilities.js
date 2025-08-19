"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const facilities = [
	{
		image: "aula.png",
		name: "Aula UCIC",
		desc: "Gedung perkuliahan modern dengan kapasitas 500 orang, dilengkapi teknologi audio-visual terdepan untuk mendukung pembelajaran interaktif.",
		features: [
			"Kapasitas 500 orang",
			"Audio-Visual HD",
			"AC Central",
			"WiFi Kencang",
		],
		category: "Akademik",
	},
	{
		image: "audit.jpeg",
		name: "Auditorium Cendekia",
		desc: "Auditorium berstandar internasional dengan akustik sempurna untuk seminar, konferensi, dan pertunjukan seni.",
		features: [
			"Akustik Premium",
			"Lighting System",
			"Recording Studio",
			"Live Streaming",
		],
		category: "Event",
	},
	{
		image: "perpustakaan.jpeg",
		name: "Perpustakaan Digital",
		desc: "Pusat pembelajaran modern dengan koleksi digital terlengkap dan ruang belajar yang nyaman untuk mahasiswa.",
		features: [
			"100K+ Buku Digital",
			"Jurnal Internasional",
			"Ruang Diskusi",
			"24/7 Access",
		],
		category: "Pembelajaran",
	},
	{
		image: "rrapat.jpeg",
		name: "Ruang Konferensi",
		desc: "Fasilitas meeting room profesional dengan teknologi video conference untuk mendukung kegiatan akademik dan bisnis.",
		features: [
			"Video Conference",
			"Smart Board",
			"Hybrid Meeting",
			"High-Speed Internet",
		],
		category: "Meeting",
	},
];

const categoryColors = {
	Akademik: "bg-blue-500",
	Event: "bg-purple-500",
	Pembelajaran: "bg-green-500",
	Meeting: "bg-orange-500",
};

export default function Facilities() {
	return (
		<section
			className="w-full py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100 relative overflow-hidden"
			id="facilities"
		>
			{/* Background Decorations */}
			<div className="absolute inset-0">
				<div className="absolute top-16 left-20 w-88 h-88 bg-orange-200/25 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-12 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl"></div>
				<div className="absolute top-2/3 left-1/3 w-60 h-60 bg-yellow-200/35 rounded-full blur-2xl"></div>
				<div className="absolute top-32 right-1/3 w-72 h-72 bg-orange-300/20 rounded-full blur-xl"></div>
			</div>
			<div className="max-w-7xl mx-auto px-4 relative z-10">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 font-semibold text-sm rounded-full mb-4">
						🏢 FASILITAS UNGGULAN
					</span>
					<h2 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4 tracking-tight">
						Fasilitas <span className="text-yellow-500">Terdepan</span>
					</h2>
					<div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mb-6"></div>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Nikmati fasilitas berkelas dunia yang mendukung proses pembelajaran
						dan pengembangan diri mahasiswa
					</p>
				</motion.div>

				{/* Facilities Grid */}
				<div className="space-y-16">
					{facilities.map((facility, idx) => (
						<motion.div
							key={facility.name}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: idx * 0.1 }}
							viewport={{ once: true }}
							className={`group flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 ${
								idx % 2 === 0 ? "" : "lg:flex-row-reverse"
							}`}
						>
							{/* Image Section */}
							<div className="relative lg:w-1/2 lg:h-auto h-64 md:h-96 overflow-hidden flex items-stretch">
								<Image
									src={`/Image/${facility.image}`}
									alt={facility.name}
									fill
									className="object-cover object-center w-full h-full min-h-full max-h-full transition-transform duration-700 group-hover:scale-110"
									sizes="(max-width: 1024px) 100vw, 50vw"
									priority={idx === 0}
								/>

								{/* Overlay gradient */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500"></div>

								{/* Category badge */}
								<div className="absolute top-6 left-6">
									<span
										className={`${
											categoryColors[facility.category]
										} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}
									>
										{facility.category}
									</span>
								</div>

								{/* Floating elements for visual appeal */}
								<div className="absolute top-6 right-6 w-8 h-8 bg-yellow-400/30 rounded-full blur-sm group-hover:scale-150 transition-transform duration-500"></div>
								<div className="absolute bottom-6 right-8 w-6 h-6 bg-white/20 rounded-full blur-sm group-hover:scale-125 transition-transform duration-700"></div>
							</div>

							{/* Content Section */}
							<div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
								<motion.div
									initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: 0.2 }}
									viewport={{ once: true }}
								>
									{/* Title */}
									<h3 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4 group-hover:text-blue-900 transition-colors duration-300">
										{facility.name}
									</h3>

									{/* Description */}
									<p className="text-gray-600 text-lg leading-relaxed mb-6">
										{facility.desc}
									</p>

									{/* Features Grid */}
									<div className="grid grid-cols-2 gap-3 mb-8">
										{facility.features.map((feature, featureIdx) => (
											<motion.div
												key={featureIdx}
												initial={{ opacity: 0, scale: 0.8 }}
												whileInView={{ opacity: 1, scale: 1 }}
												transition={{
													duration: 0.3,
													delay: 0.3 + featureIdx * 0.1,
												}}
												viewport={{ once: true }}
												className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 hover:from-blue-100 hover:to-blue-200 transition-all duration-300"
											>
												<span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
												<span className="text-blue-800 font-medium text-sm">
													{feature}
												</span>
											</motion.div>
										))}
									</div>

									{/* Action Buttons */}
									<div className="flex flex-col sm:flex-row gap-4">
										<button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
											📸 Lihat Galeri
										</button>
										<button className="px-6 py-3 bg-white border-2 border-blue-200 text-blue-700 font-semibold rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-105">
											📋 Info Lengkap
										</button>
									</div>
								</motion.div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
