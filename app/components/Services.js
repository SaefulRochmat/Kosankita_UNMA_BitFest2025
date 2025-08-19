"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const menuItems = [
	{
		title: "MyCIC",
		desc: "Portal mahasiswa untuk akses semua layanan kampus dengan mudah dan cepat.",
		href: "/mycic",
		icon: "🎓",
		gradient: "from-blue-500 to-blue-600",
		features: ["Dashboard Mahasiswa", "Jadwal Kuliah", "Nilai & Transkrip"]
	},
	{
		title: "SiMANTU UCIC",
		desc: "Sistem Manajemen Terpadu untuk administrasi dan layanan akademik.",
		href: "/simantu",
		icon: "🗂️",
		gradient: "from-green-500 to-green-600",
		features: ["Administrasi Online", "Pembayaran Digital", "Dokumen Akademik"]
	},
	{
		title: "E-Library",
		desc: "Akses jutaan koleksi buku, jurnal, dan penelitian digital 24/7.",
		href: "/elibrary",
		icon: "📚",
		gradient: "from-purple-500 to-purple-600",
		features: ["Buku Digital", "Jurnal Internasional", "Database Penelitian"]
	},
	{
		title: "PMB Online",
		desc: "Sistem Penerimaan Mahasiswa Baru yang mudah dan transparan.",
		href: "/pmb",
		icon: "📝",
		gradient: "from-orange-500 to-orange-600",
		features: ["Pendaftaran Online", "Tes Online", "Hasil Real-time"]
	},
];

export default function Services({ items = menuItems }) {
	return (
		<section className="w-full py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 relative overflow-hidden" id="services">
			{/* Background Decorations */}
			<div className="absolute inset-0">
				<div className="absolute top-10 right-20 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"></div>
				<div className="absolute bottom-32 left-16 w-72 h-72 bg-emerald-300/25 rounded-full blur-3xl"></div>
				<div className="absolute top-1/3 left-1/2 w-56 h-56 bg-teal-200/35 rounded-full blur-2xl"></div>
				<div className="absolute bottom-16 right-1/4 w-64 h-64 bg-green-300/20 rounded-full blur-xl"></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 text-center relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 font-semibold text-sm rounded-full mb-4">
						💻 LAYANAN DIGITAL TERDEPAN
					</span>
					<h2 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4 tracking-tight">
						Ekosistem Digital <span className="text-yellow-500">UCIC</span>
					</h2>
					<div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mb-6"></div>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Nikmati kemudahan akses layanan kampus melalui platform digital yang terintegrasi dan user-friendly
					</p>
				</motion.div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{items.map((item, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: idx * 0.1 }}
							viewport={{ once: true }}
							whileHover={{
								scale: 1.05,
								y: -10,
								transition: { duration: 0.3 }
							}}
							className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
						>
							{/* Gradient background on hover */}
							<div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
							
							{/* Floating decoration */}
							<div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-yellow-200/50 to-blue-200/50 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
							
							<div className="relative z-10">
								{/* Icon with animation */}
								<motion.div
									whileHover={{ scale: 1.2, rotate: 5 }}
									className="text-6xl mb-6 filter drop-shadow-lg"
								>
									{item.icon}
								</motion.div>
								
								{/* Title */}
								<h3 className="text-2xl font-bold text-blue-800 mb-3 tracking-tight group-hover:text-blue-900 transition-colors duration-300">
									{item.title}
								</h3>
								
								{/* Description */}
								<p className="text-gray-600 text-base mb-6 leading-relaxed">
									{item.desc}
								</p>

								{/* Features List */}
								<div className="mb-8">
									<ul className="space-y-2">
										{item.features.map((feature, featureIdx) => (
											<li key={featureIdx} className="flex items-center text-sm text-gray-500">
												<span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>
												{feature}
											</li>
										))}
									</ul>
								</div>

								{/* CTA Button */}
								<Link
									href={item.href}
									className="group/btn relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-blue-900 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
								>
									<span className="relative z-10">Akses Sekarang</span>
									<motion.span 
										className="relative z-10 text-lg"
										animate={{ x: [0, 5, 0] }}
										transition={{ duration: 1.5, repeat: Infinity }}
									>
										→
									</motion.span>
									
									{/* Hover effect background */}
									<div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
								</Link>
							</div>

							{/* Card border glow effect */}
							<div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-yellow-400/20 via-blue-400/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						</motion.div>
					))}
				</div>

				{/* Additional info section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mt-16 text-center"
				>
					<div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
						<h3 className="text-2xl font-bold mb-4">
							🚀 Semua Layanan Terintegrasi dalam Satu Platform
						</h3>
						<p className="text-blue-100 text-lg mb-6">
							Akses mudah, aman, dan cepat untuk semua kebutuhan akademik Anda
						</p>
						<div className="flex flex-wrap justify-center gap-6 text-sm">
							<span className="flex items-center gap-2">
								<span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
								Tersedia 24/7
							</span>
							<span className="flex items-center gap-2">
								<span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
								Mobile Friendly
							</span>
							<span className="flex items-center gap-2">
								<span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
								Aman & Cepat
							</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
