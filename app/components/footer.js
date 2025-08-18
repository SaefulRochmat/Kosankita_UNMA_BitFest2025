"use client";

import Image from "next/image";

const socialLinks = [
	{ href: "https://facebook.com", icon: "🌐" },
	{ href: "https://instagram.com", icon: "📸" },
	{ href: "https://twitter.com", icon: "🐦" },
];

export default function Footer() {
	return (
		<footer className="w-full bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-900 text-white py-10 mt-16 relative">
			<div className="absolute inset-0 bg-black/30 backdrop-blur-lg" />
			<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
				<div className="flex items-center gap-4">
					<Image
						src="/Image/logo.png"
						alt="Logo"
						width={200}
						height={150}
						className="rounded-xl bg-white/80 p-2"
					/>
					<div>
						<h2 className="text-xl font-bold tracking-tight">
							Universitas CIC
						</h2>
						<p className="text-sm text-blue-100">
							Jl. Cindera Insan No. 1, Cirebon
						</p>
						<p className="text-sm text-blue-100">Telp: (0231) 123456</p>
					</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<span className="font-semibold mb-1">Ikuti Kami</span>
					<div className="flex gap-4">
						{socialLinks.map((s, idx) => (
							<a
								key={idx}
								href={s.href}
								target="_blank"
								rel="noopener"
								className="text-2xl hover:text-yellow-400 transition-all duration-300"
							>
								{s.icon}
							</a>
						))}
					</div>
				</div>
			</div>
			<div className="relative z-10 text-center text-xs text-blue-200 mt-8">
				&copy; {new Date().getFullYear()} Universitas CIC. All rights reserved.
			</div>
		</footer>
	);
}
