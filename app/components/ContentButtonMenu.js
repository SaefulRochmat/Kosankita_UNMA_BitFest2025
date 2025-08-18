"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const menuItems = [
  {
    title: "MyCIC",
    desc: "Akses layanan kampus Anda dengan mudah.",
    href: "/mycic",
  },
  {
    title: "SiMANTU UCIC",
    desc: "Sistem Manajemen Terpadu Universitas.",
    href: "/simantu",
  },
  {
    title: "E-Library",
    desc: "Koleksi literatur digital tersedia 24/7.",
    href: "/elibrary",
  },
  {
    title: "PMB",
    desc: "Penerimaan Calon Mahasiswa Baru.",
    href: "/pmb",
  },
];

export default function MenuSection({ items = menuItems }) {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
          Layanan Digital UCIC
        </h2>
        <div className="w-36 h-1 bg-yellow-500 mx-auto rounded-full mt-3 mb-10"></div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white shadow-lg rounded-2xl p-6 border border-blue-100 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              <Link
                href={item.href}
                className="inline-block px-4 py-2 rounded-lg bg-yellow-400 text-blue-900 font-medium hover:bg-yellow-500 transition"
              >
                Kunjungi
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
