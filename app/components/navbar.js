"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	const navLinks = [
		{ href: "#", label: "HOME" },
		{ href: "#SectionFaculity", label: "FACULTY" },
		{ href: "#services", label: "SERVICES" },
		{ href: "#facilities", label: "FACILITIES" },
		{ href: "#", label: "ABOUT" },
	];

	return (
		<header className="w-full bg-white fixed top-0 left-0 right-0 z-50 shadow">
			<div className="flex items-center justify-between mx-16">
				<Image src={"/Image/logo1.png"} alt="Logo" width={200} height={50} />
				{/* Desktop Menu */}
				<nav className="hidden md:flex gap-6 text-white">
					{navLinks.map((link, index) => (
						<a
							key={index}
							href={link.href}
							className="font-semibold relative inline-block text-blue-500 hover:text-blue-900 transition-all duration-300 group"
						>
							{link.label}
							<span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-blue-900 rounded-full transition-all duration-300 group-hover:w-full"></span>
						</a>
					))}
				</nav>
				{/* Hamburger Icon */}
				<button
					className="md:hidden text-blue-500 focus:outline-none cursor-pointer"
					onClick={toggleMenu}
					aria-label="Toggle menu"
				>
					<svg
						width="32"
						height="32"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
			{/* Mobile Menu */}
			<div
				className={`md:hidden fixed top-30 left--0 right-16 w-full bg-white backdrop-blur-lg z-40 transition-all duration-500 shadow rounded-lg ${
					menuOpen
						? "opacity-100 translate-x-8"
						: "opacity-0 -translate-x-0 pointer-events-none"
				}`}
			>
				<nav className="flex flex-col gap-4 py-6 px-16 text-black animate-fade-out">
					{navLinks.map((link, index) => (
						<a
							key={index}
							href={link.href}
							className="font-semibold relative inline-block text-blue-900 hover:text-blue-500 transition-all duration-300 group"
						>
							{link.label}
							<span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
						</a>
					))}
				</nav>
			</div>
			<style jsx>{`
				@keyframes fade-in {
					from {
						opacity: 0;
						transform: translateY(-16px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fade-in {
					animation: fade-in 0.5s ease;
				}
			`}</style>
		</header>
	);
}
