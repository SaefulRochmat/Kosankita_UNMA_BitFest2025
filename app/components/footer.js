"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const quickLinks = [
	{ label: "Tentang UCIC", href: "#about" },
	{ label: "Program Studi", href: "#faculty" },
	{ label: "Fasilitas", href: "#facilities" },
	{ label: "Beasiswa", href: "/beasiswa" },
	{ label: "Karir", href: "/karir" },
];

const services = [
	{ label: "PMB Online", href: "/pmb" },
	{ label: "E-Learning", href: "/elearning" },
	{ label: "E-Library", href: "/elibrary" },
	{ label: "SiMANTU", href: "/simantu" },
	{ label: "MyCIC", href: "/mycic" },
];

const contactInfo = [
	{ icon: "📍", text: "Jl. Kesambi Raya No. 202, Kota Cirebon, Jawa Barat 45133" },
	{ icon: "📞", text: "(0231) 123456 / 789012" },
	{ icon: "📧", text: "info@ucic.ac.id" },
	{ icon: "🌐", text: "www.ucic.ac.id" },
];

export default function Footer() {
	return (
		<footer className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
			{/* Background decorations */}
			<div className="absolute inset-0">
				<div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
				<div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gray-400/10 rounded-full blur-xl"></div>
			</div>

			<div className="relative z-10">
				{/* Main Footer Content */}
				<div className="max-w-7xl mx-auto px-4 py-20">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
						{/* University Info */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="lg:col-span-1"
						>
							<div className="flex items-center gap-3 mb-6">
								<div className="relative">
									<Image
										src="/Image/logo.png"
										alt="Logo UCIC"
										width={80}
										height={80}
										className="rounded-xl bg-white/90 p-2 shadow-lg"
									/>
									<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-400/20 rounded-xl blur-sm"></div>
								</div>
								<div>
									<h3 className="text-xl font-bold mb-1">Universitas CIC</h3>
									<p className="text-blue-200 text-sm">Catur Insan Cendekia</p>
								</div>
							</div>
							<p className="text-blue-100 leading-relaxed mb-6">
								Universitas yang berkomitmen mencetak generasi unggul, berkarakter, dan berdaya saing global melalui pendidikan berkualitas tinggi.
							</p>
							
							{/* Accreditation */}
							<div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
								<h4 className="font-semibold mb-2 text-yellow-400">🏆 Terakreditasi</h4>
								<p className="text-sm text-blue-100">BAN-PT dengan peringkat Baik</p>
							</div>
						</motion.div>

						{/* Quick Links */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							viewport={{ once: true }}
						>
							<h4 className="text-xl font-bold mb-6 text-yellow-400">🔗 Tautan Cepat</h4>
							<ul className="space-y-3">
								{quickLinks.map((link, idx) => (
									<li key={idx}>
										<a
											href={link.href}
											className="text-blue-100 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
										>
											<span className="w-1.5 h-1.5 bg-yellow-400 rounded-full group-hover:scale-125 transition-transform duration-300"></span>
											<span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
										</a>
									</li>
								))}
							</ul>
						</motion.div>

						{/* Services */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<h4 className="text-xl font-bold mb-6 text-yellow-400">💻 Layanan Digital</h4>
							<ul className="space-y-3">
								{services.map((service, idx) => (
									<li key={idx}>
										<a
											href={service.href}
											className="text-blue-100 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
										>
											<span className="w-1.5 h-1.5 bg-yellow-400 rounded-full group-hover:scale-125 transition-transform duration-300"></span>
											<span className="group-hover:translate-x-1 transition-transform duration-300">{service.label}</span>
										</a>
									</li>
								))}
							</ul>
						</motion.div>

						{/* Contact Info */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							viewport={{ once: true }}
						>
							<h4 className="text-xl font-bold mb-6 text-yellow-400">📞 Hubungi Kami</h4>
							<div className="space-y-4">
								{contactInfo.map((info, idx) => (
									<div key={idx} className="flex items-center gap-3">
										<span className="text-lg bg-white/10 p-2 rounded-lg flex-shrink-0">{info.icon}</span>
										<p className="text-blue-100 text-sm leading-relaxed">{info.text}</p>
									</div>
								))}
							</div>
						</motion.div>
					</div>
				</div>

				{/* Bottom Bar */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="border-t border-white/20 bg-black/20 backdrop-blur-md"
				>
					<div className="max-w-7xl mx-auto px-4 py-6">
						<div className="flex flex-col md:flex-row justify-between items-center gap-4">
							<div className="text-center md:text-left">
								<p className="text-blue-200 text-sm">
									&copy; {new Date().getFullYear()} Universitas Catur Insan Cendekia. All rights reserved.
								</p>
								<p className="text-blue-300 text-xs mt-1">
									Developed with ❤️ for better education
								</p>
							</div>
							
							<div className="flex items-center gap-6 text-sm text-blue-200">
								<a href="/privacy" className="hover:text-yellow-400 transition-colors duration-300">
									Privacy Policy
								</a>
								<a href="/terms" className="hover:text-yellow-400 transition-colors duration-300">
									Terms of Service
								</a>
								<a href="/sitemap" className="hover:text-yellow-400 transition-colors duration-300">
									Sitemap
								</a>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</footer>
	);
}
