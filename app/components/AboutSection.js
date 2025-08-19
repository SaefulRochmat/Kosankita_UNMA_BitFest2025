"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const values = [
	{
		icon: "💻",
		title: "Sekolah TI",
		desc: "Fokus pada bidang teknologi informasi dan kewirausahaan berbasis IT"
	},
	{
		icon: "🤝",
		title: "Kerjasama Industri",
		desc: "Menjalin kemitraan dengan dunia usaha dan industri untuk pengembangan kurikulum"
	},
	{
		icon: "🌟",
		title: "Kualitas Terjamin",
		desc: "Semua program studi terakreditasi BAN-PT dengan komitmen re-akreditasi berkelanjutan"
	},
	{
		icon: "🌍",
		title: "Tata Kelola Baik",
		desc: "Mendukung masyarakat daerah menuju tata kelola yang baik berbasis teknologi"
	}
];

export default function AboutSection() {
	return (
		<section className="w-full py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden" id="about">
			{/* Background Decorations */}
			<div className="absolute inset-0">
				<div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/40 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-200/25 rounded-full blur-2xl"></div>
				<div className="absolute bottom-10 left-1/3 w-48 h-48 bg-blue-300/20 rounded-full blur-xl"></div>
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
					<h2 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4 tracking-tight">
						Tentang <span className="text-yellow-500">UCIC</span>
					</h2>
					<div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mb-6"></div>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Universitas Catur Insan Cendekia fokus pada bidang teknologi dan kewirausahaan untuk mendukung masyarakat daerah dengan pendidikan tinggi yang terjangkau dan berkualitas
					</p>
				</motion.div>

				{/* Main Content */}
				<div className="space-y-12 mb-20">
					{/* Visi & Misi Section */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-blue-100"
					>
						<div className="text-center mb-10">
							<h3 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
								Visi & Misi Kami
							</h3>
							<div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
						</div>
						
						<div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
							<div className="space-y-6">
								<div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
									<h4 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-3">
										🎯 <span>Visi</span>
									</h4>
									<p className="text-gray-700 leading-relaxed text-lg">
										Menjadi universitas yang berorientasi dalam bidang teknologi dan kewirausahaan, untuk mendukung masyarakat daerah dengan menghasilkan lulusan yang mampu untuk menanggapi perubahan jaman.
									</p>
								</div>
							</div>
							
							<div className="space-y-6">
								<div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
									<h4 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-3">
										🚀 <span>Misi</span>
									</h4>
									<ul className="text-gray-700 space-y-3">
										<li className="flex items-start gap-3">
											<span className="text-blue-800 text-lg font-bold mt-0.5 flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm">1</span>
											<span className="text-base leading-relaxed">Menyelenggarakan pengajaran yang berfokus untuk menghasilkan lulusan-lulusan yang mampu untuk menanggapi perubahan jaman.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-blue-800 text-lg font-bold mt-0.5 flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm">2</span>
											<span className="text-base leading-relaxed">Mendukung dan menciptakan lingkungan yang positif untuk pembelajaran, inovasi, dan penerapan dalam bidang teknologi dan kewirausahaan.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-blue-800 text-lg font-bold mt-0.5 flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm">3</span>
											<span className="text-base leading-relaxed">Menjalankan aktivitas Tri Dharma untuk memberikan kontribusi terhadap masyarakat daerah.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-blue-800 text-lg font-bold mt-0.5 flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-sm">4</span>
											<span className="text-base leading-relaxed">Menyelenggarakan pendidikan tinggi yang terjangkau dalam memperluas akses pendidikan di masyarakat daerah.</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Sejarah & Sambutan Rektor - Side by Side */}
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
						{/* Sejarah Section */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
							className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 rounded-3xl p-6 lg:p-8 shadow-xl border border-blue-100"
						>
							<div className="text-center mb-8">
								<h3 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-4 flex items-center justify-center gap-3">
									📚 <span>Sejarah Perjalanan UCIC</span>
								</h3>
								<div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
								<p className="text-gray-600 mt-4 text-sm lg:text-base">
									Lebih dari 40 tahun konsisten berkiprah di dunia pendidikan teknologi informasi
								</p>
							</div>
							
							<div className="grid grid-cols-2 gap-4">
								<div className="bg-white rounded-xl p-4 shadow-lg border border-yellow-200 hover:shadow-xl transition-shadow duration-300">
									<div className="text-center">
										<div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
											<span className="text-white font-bold text-sm">1984</span>
										</div>
										<h4 className="font-bold text-blue-800 mb-2 text-sm">Awal Perjalanan</h4>
										<p className="text-xs text-gray-600 leading-relaxed">
											Berdiri sebagai Lembaga Pendidikan Kursus dan Pelatihan CIC (Cirebon Institute of Computer)
										</p>
									</div>
								</div>
								
								<div className="bg-white rounded-xl p-4 shadow-lg border border-blue-200 hover:shadow-xl transition-shadow duration-300">
									<div className="text-center">
										<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
											<span className="text-white font-bold text-sm">1999</span>
										</div>
										<h4 className="font-bold text-blue-800 mb-2 text-sm">STMIK CIC</h4>
										<p className="text-xs text-gray-600 leading-relaxed">
											Berkembang menjadi STMIK CIC dengan ijin operasional resmi Mendiknas No. 123/D/O/1999
										</p>
									</div>
								</div>
								
								<div className="bg-white rounded-xl p-4 shadow-lg border border-green-200 hover:shadow-xl transition-shadow duration-300">
									<div className="text-center">
										<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
											<span className="text-white font-bold text-sm">2005</span>
										</div>
										<h4 className="font-bold text-blue-800 mb-2 text-sm">Terakreditasi</h4>
										<p className="text-xs text-gray-600 leading-relaxed">
											Menjadi satu-satunya PT Komputer dengan semua prodi terakreditasi BAN-PT
										</p>
									</div>
								</div>
								
								<div className="bg-white rounded-xl p-4 shadow-lg border border-purple-200 hover:shadow-xl transition-shadow duration-300">
									<div className="text-center">
										<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
											<span className="text-white font-bold text-sm">2019</span>
										</div>
										<h4 className="font-bold text-blue-800 mb-2 text-sm">Universitas</h4>
										<p className="text-xs text-gray-600 leading-relaxed">
											Resmi beralih status menjadi Universitas CIC yang disahkan Kemenristekdik
										</p>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Rector Profile */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							viewport={{ once: true }}
							className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-blue-100"
						>
							<div className="text-center mb-8">
								<h3 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-4">
									Sambutan Rektor
								</h3>
								<div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
							</div>
							
							<div className="flex flex-col items-center text-center gap-6">
								{/* Rector Photo */}
								<div className="flex-shrink-0 mx-auto">
									<div className="relative mx-auto">
										<div className="w-32 h-32 lg:w-40 lg:h-40 relative mx-auto">
											<Image
												src="/Image/Rektor.png"
												alt="Rektor UCIC"
												fill
												className="object-cover rounded-full border-4 border-yellow-400 shadow-2xl"
											/>
										</div>
									</div>
									<div className="text-center mt-4 mx-auto">
										<h4 className="text-lg lg:text-xl font-bold text-blue-800 mb-2">
											Assoc. Prof. Dr. Chandra Lukita, S.E., M.M., M.TI.
										</h4>
										<p className="text-yellow-600 font-semibold text-sm">Rektor Universitas CIC</p>
									</div>
								</div>
								
								{/* Rector Message */}
								<div className="w-full mx-auto">
									<div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 lg:p-6 mx-auto">
										<div className="space-y-3 text-gray-700 text-center">
											<p className="text-sm lg:text-base leading-relaxed">
												<span className="text-blue-800 font-semibold">"</span>Universitas CIC telah berkiprah lebih dari 40 tahun di dunia pendidikan, sejak berdiri sebagai Cirebon Institute of Computer pada 1984.<span className="text-blue-800 font-semibold">"</span>
											</p>
											<p className="text-sm lg:text-base leading-relaxed">
												<span className="text-blue-800 font-semibold">"</span>Sebagai IT School, kami berkomitmen menghasilkan lulusan yang siap bersaing di pasar global dan memberikan kontribusi positif berbasis teknologi informasi kepada dunia usaha dan industri.<span className="text-blue-800 font-semibold">"</span>
											</p>
											<p className="text-sm lg:text-base leading-relaxed text-blue-700 font-medium">
												<span className="text-blue-800 font-semibold">"</span>Insya Allah UCIC mampu menjadi institusi pendidikan tinggi yang menghasilkan SDM siap menghadapi era global.<span className="text-blue-800 font-semibold">"</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Values */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h3 className="text-3xl font-bold text-center text-blue-800 mb-12">
						Nilai-Nilai Kami
					</h3>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{values.map((value, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: idx * 0.1 }}
								viewport={{ once: true }}
								className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
							>
								<div className="text-4xl mb-4">{value.icon}</div>
								<h4 className="text-xl font-bold mb-3">{value.title}</h4>
								<p className="text-blue-100 leading-relaxed">{value.desc}</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
