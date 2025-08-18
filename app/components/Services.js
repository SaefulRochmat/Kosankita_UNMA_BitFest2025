"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const menuItems = [
	{
		title: "MyCIC",
		desc: "Akses layanan kampus Anda dengan mudah.",
		href: "/mycic",
		icon: "🎓",
	},
	{
		title: "SiMANTU UCIC",
		desc: "Sistem Manajemen Terpadu Universitas.",
		href: "/simantu",
		icon: "🗂️",
	},
	{
		title: "E-Library",
		desc: "Koleksi literatur digital tersedia 24/7.",
		href: "/elibrary",
		icon: "📚",
	},
	{
		title: "PMB",
		desc: "Penerimaan Calon Mahasiswa Baru.",
		href: "/pmb",
		icon: "📝",
	},
];

export default function Services({ items = menuItems }) {
	return (
		<section className="w-full py-16" id="services">
			<div className="max-w-7xl mx-auto px-4 text-center">
				<h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-2 tracking-tight drop-shadow-lg">
					Layanan Digital UCIC
				</h2>
				<div className="w-44 h-2 bg-yellow-500 mx-auto rounded-full mt-6 mb-12"></div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{items.map((item, idx) => (
						<motion.div
							key={idx}
							whileHover={{
								scale: 1.06,
								boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
							}}
							whileTap={{ scale: 0.97 }}
							className="relative bg-white/70 backdrop-blur-lg shadow-xl rounded-3xl p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
						>
							<span className="text-5xl mb-4 drop-shadow-lg">{item.icon}</span>
							<h3 className="text-xl font-bold text-blue-700 mb-2 tracking-tight">
								{item.title}
							</h3>
							<p className="text-gray-600 text-base mb-6">{item.desc}</p>
							<Link
								href={item.href}
								className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-blue-900 font-semibold shadow hover:scale-105 hover:from-yellow-500 hover:to-yellow-500 transition-all duration-300"
							>
								Kunjungi
								<span className="text-lg">→</span>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
