"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 10;
			setScrolled(isScrolled);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{ href: "#", label: "BERANDA", icon: "🏠" },
		{ href: "#about", label: "TENTANG", icon: "ℹ️" },
		{ href: "#services", label: "LAYANAN", icon: "💻" },
		{ href: "#facilities", label: "FASILITAS", icon: "🏢" },
		{ href: "#fakultas", label: "FAKULTAS", icon: "🎓" },
	];

	return (
		<header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
			scrolled 
				? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100' 
				: 'bg-white/90 backdrop-blur-sm shadow-md'
		}`}>
			<div className="flex items-center justify-between mx-4 md:mx-8 lg:mx-16 py-2">
				{/* Logo Section */}
				<div className="flex items-center gap-3">
					<div className="relative">
						<Image 
							src={"/Image/logo_nav.png"} 
							alt="Logo UCIC" 
							width={scrolled ? 160 : 180} 
							height={scrolled ? 40 : 45}
							className="transition-all duration-300"
						/>
						{/* Glow effect */}
						<div className="absolute inset-0 bg-blue-200/20 rounded-lg blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
					</div>
				</div>

				{/* Desktop Menu */}
				<nav className="hidden lg:flex items-center gap-8">
					{navLinks.map((link, index) => (
						<a
							key={index}
							href={link.href}
							className="group relative inline-flex items-center gap-2 px-4 py-2 text-blue-700 hover:text-blue-900 transition-all duration-300 font-semibold text-sm"
						>
							<span className="text-lg group-hover:scale-110 transition-transform duration-300">
								{link.icon}
							</span>
							<span className="group-hover:translate-x-1 transition-transform duration-300">
								{link.label}
							</span>
							
							{/* Animated underline */}
							<span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
							
							{/* Hover background */}
							<div className="absolute inset-0 bg-blue-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
						</a>
					))}
					
					{/* CTA Button */}
					<button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-2 border-yellow-300 hover:border-yellow-400">
						📞 Hubungi Kami
					</button>
				</nav>

				{/* Mobile Menu Button */}
				<button
					className="lg:hidden relative z-50 p-2 text-blue-600 hover:text-blue-800 focus:outline-none transition-colors duration-300"
					onClick={toggleMenu}
					aria-label="Toggle menu"
				>
					<div className="w-6 h-6 relative">
						<span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
							menuOpen ? 'rotate-45 top-3' : 'top-1'
						}`}></span>
						<span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 top-3 ${
							menuOpen ? 'opacity-0' : 'opacity-100'
						}`}></span>
						<span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
							menuOpen ? '-rotate-45 top-3' : 'top-5'
						}`}></span>
					</div>
				</button>
			</div>

			{/* Mobile Menu */}
			<div className={`lg:hidden fixed top-0 right-0 h-screen w-80 bg-white/95 backdrop-blur-lg z-40 transform transition-all duration-500 shadow-2xl ${
				menuOpen ? 'translate-x-0' : 'translate-x-full'
			}`}>
				<div className="pt-20 pb-8 px-6">
					{/* Mobile menu header */}
					<div className="text-center mb-8">
						<h3 className="text-2xl font-bold text-blue-800 mb-2">Menu Navigasi</h3>
						<div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full"></div>
					</div>

					{/* Mobile Navigation Links */}
					<nav className="space-y-3">
						{navLinks.map((link, index) => (
							<a
								key={index}
								href={link.href}
								onClick={() => setMenuOpen(false)}
								className="group flex items-center gap-4 p-4 text-blue-800 hover:text-blue-900 hover:bg-blue-50 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-200"
								style={{
									animationDelay: `${index * 100}ms`
								}}
							>
								<span className="text-2xl group-hover:scale-110 transition-transform duration-300">
									{link.icon}
								</span>
								<span className="font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
									{link.label}
								</span>
								<span className="ml-auto text-blue-400 group-hover:text-blue-600 transition-colors duration-300">
									→
								</span>
							</a>
						))}
					</nav>

					{/* Mobile CTA */}
					<div className="mt-8 pt-6 border-t border-blue-100">
						<button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
							<span>📞</span>
							<span>Hubungi Kami</span>
						</button>
					</div>

					{/* Social Media Links */}
					<div className="mt-6 text-center">
						<p className="text-sm text-gray-600 mb-3">Ikuti Kami</p>
						<div className="flex justify-center gap-4">
							{['🌐', '📸', '🐦'].map((icon, idx) => (
								<a
									key={idx}
									href="#"
									className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
								>
									{icon}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			{menuOpen && (
				<div 
					className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300"
					onClick={() => setMenuOpen(false)}
				></div>
			)}
		</header>
	);
}
