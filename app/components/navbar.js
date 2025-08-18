"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	const navLinks = [
		{ href: "/", label: "HOME" },
		{ href: "/", label: "FACULTY" },
		{ href: "#services", label: "SERVICES" },
		{ href: "#facilities", label: "FACILITIES" },
		{ href: "/", label: "ABOUT" },
	];

	return (
		<header className="w-full bg-black/50 fixed top-0 left-0 right-0 z-50 backdrop-blur-lg">
			<div className="flex items-center justify-between mx-25">
				<Image src={"/Image/logo.png"} alt="Logo" width={300} height={100} />
				{/* Desktop Menu */}
				<nav className="hidden md:flex gap-6 text-white">
					{navLinks.map((link, index) => (
						<a
							key={index}
							href={link.href}
							className="font-semibold relative inline-block text-white hover:text-yellow-500 transition-all duration-300 group"
						>
							{link.label}
							<span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
						</a>
					))}
				</nav>
				{/* Hamburger Icon */}
				<button
					className="md:hidden text-yellow-500 focus:outline-none cursor-pointer"
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
				className={`md:hidden fixed top-26 left-0 right-0 w-full bg-black/80 backdrop-blur-lg z-40 transition-all duration-500 ${
					menuOpen
						? "opacity-100 translate-y-0"
						: "opacity-0 -translate-y-8 pointer-events-none"
				}`}
			>
				<nav className="flex flex-col gap-4 py-6 px-8 text-white animate-fade-in">
					{navLinks.map((link, index) => (
						<a
							key={index}
							href={link.href}
							className="font-semibold relative inline-block text-white hover:text-yellow-500 transition-all duration-300 group"
						>
							{link.label}
							<span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
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
