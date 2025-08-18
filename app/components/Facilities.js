"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const facilities = [
	{
		image: "aula.png",
		name: "Aula UCIC",
		desc: "Fasilitas gedung perkuliahan yang nyaman dan modern.",
	},
	{
		image: "audit.jpeg",
		name: "Auditorium",
		desc: "Auditorium dengan perangkat terbaru.",
	},
	{
		image: "perpustakaan.jpeg",
		name: "Perpustakaan",
		desc: "Akses ribuan koleksi buku dan jurnal digital.",
	},
	{
		image: "rrapat.jpeg",
		name: "Ruang Rapat",
		desc: "Lapangan olahraga untuk mendukung aktivitas fisik.",
	},
];

export default function Facilities() {
	return (
		<section className="w-full" id="facilities">
			<div className="flex flex-col max-w-7xl mx-auto px-4 py-16 gap-12">
				{facilities.map((facility, idx) => (
					<div
						key={facility.name}
						className={`flex flex-col md:flex-row bg-white border border-gray-100 shadow-lg w-full md:w-[90%] rounded-2xl overflow-hidden ${
							idx % 2 === 0 ? "" : "md:flex-row-reverse ms-auto"
						} transition-all duration-300 hover:shadow-2xl`}
					>
						<div className="relative w-full md:w-[50%] h-64 md:h-80">
							<Image
								src={`/Image/${facility.image}`}
								alt={facility.name}
								fill
								className="object-cover object-center w-full h-full"
								sizes="(max-width: 768px) 100vw, 50vw"
								priority={idx === 0}
							/>
						</div>
						<div className="flex-1 m-6 md:m-10 flex flex-col justify-center text-gray-700">
							<h2 className="text-2xl md:text-3xl font-semibold mb-2 text-indigo-700 flex items-center gap-2">
								{facility.name}
							</h2>
							<p className="text-lg md:text-xl">{facility.desc}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
