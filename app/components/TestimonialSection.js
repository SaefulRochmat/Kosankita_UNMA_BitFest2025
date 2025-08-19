"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const mahasiswaBerprestasi = [
	{
		name: "Kristianto",
		position: "IPK Terbaik Angkatan 2016",
		program: "S1-Teknik Informatika",
		photo: "/Image/Kristianto.png",
		quote: "Raihan IPK Terbaik dari Jurusan Teknik Informatika Angkatan 2016 dengan IPK 4,00.",
		rating: 5
	},
	{
		name: "Noni Apriliani",
		position: "IPK Terbaik Angkatan 2017",
		program: "S1-Teknik Informatika",
		photo: "/Image/Noni_Apriliani.png",
		quote: "Peraih IPK Terbaik dari Jurusan Teknik Informatika Angkatan 2017 dengan Raihan IPK 4,00.",
		rating: 5
	},
	{
		name: "Nopi Fitrianingsih",
		position: "IPK Terbaik Angkatan 2016",
		program: "S1 - Komputerisasi Akuntansi",
		photo: "/Image/Nopi_Fitrianingsih.png",
		quote: "Raihan IPK Terbaik dari Jurusan Komputerisasi Akuntansi Angkatan 2016 dengan IPK 3,95.",
		rating: 5
	}
];

export default function TestimonialSection() {
	const renderStars = (rating) => {
		return [...Array(5)].map((_, i) => (
			<span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
				⭐
			</span>
		));
	};

	return (
		<section className="w-full py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
			{/* Background decorations */}
			<div className="absolute inset-0">
				<div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/15 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-80 h-80 bg-white/8 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/4 w-64 h-64 bg-yellow-300/20 rounded-full blur-2xl"></div>
				<div className="absolute bottom-32 right-1/3 w-56 h-56 bg-blue-400/15 rounded-full blur-xl"></div>
				<div className="absolute top-1/3 right-1/4 w-48 h-48 bg-indigo-300/10 rounded-full blur-xl"></div>
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
					<h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
						Mahasiswa <span className="text-yellow-400">Berprestasi</span>
					</h2>
					<div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mb-6"></div>
					<p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
						Prestasi gemilang mahasiswa UCIC yang telah meraih IPK terbaik di bidang studinya
					</p>
				</motion.div>

				{/* Mahasiswa Berprestasi Grid */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{mahasiswaBerprestasi.map((mahasiswa, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: idx * 0.2 }}
								viewport={{ once: true }}
								className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 h-full min-h-[400px] flex flex-col justify-between hover:scale-105 hover:border-yellow-400/50 shadow-xl hover:shadow-2xl"
							>
								{/* Profile */}
								<div className="flex flex-col items-center mb-6">
									<div className="w-24 h-24 relative mb-4 flex-shrink-0">
										<Image
											src={mahasiswa.photo}
											alt={mahasiswa.name}
											fill
											className="object-cover object-top rounded-full border-4 border-yellow-400 shadow-lg"
										/>
									</div>
									<div className="text-center">
										<h3 className="text-white font-bold text-xl mb-2">{mahasiswa.name}</h3>
										<p className="text-yellow-400 text-sm font-semibold mb-1">{mahasiswa.position}</p>
										<p className="text-blue-200 text-sm">{mahasiswa.program}</p>
									</div>
								</div>

								{/* Rating */}
								<div className="flex justify-center mb-6">
									{renderStars(mahasiswa.rating)}
								</div>

								{/* Quote */}
								<blockquote className="text-white/90 leading-relaxed text-center text-base italic flex-1 flex items-center justify-center mb-6">
									"{mahasiswa.quote}"
								</blockquote>

								{/* Achievement Badge */}
								<div className="text-center">
									<span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
										🏆 Mahasiswa Berprestasi
									</span>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
