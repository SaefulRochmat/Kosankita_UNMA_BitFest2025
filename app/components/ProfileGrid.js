"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileGrid() {
  return (
    <section className="bg-white py-16 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-5 flex flex-col md:flex-row items-center gap-12 relative">
        
        {/* Wrapper Gambar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full md:w-1/2 flex justify-center"
        >
          <div className="relative">
            {/* Gambar lebih besar dan menembus container */}
            <Image
              src="/Image/Rektor.png"
              alt="Foto Rektor"
              width={750}
              height={900}
              className="border-none object-cover transform hover:scale-105 transition-transform duration-500 
                         relative z-10"
            />
            {/* Efek keluar kontainer di layar besar */}
            <div className="hidden md:block absolute top-0 -left-20 w-full h-full bg-transparent"></div>
          </div>

          {/* Nama Rektor di bawah gambar */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute -bottom-16 text-center w-full text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-900"
          >
            Assoc. Prof. Dr.{" "}
            <motion.span
              initial={{ color: "#1e3a8a" }}
              animate={{ color: ["#1e3a8a", "#2563eb", "#1e3a8a"] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              Chandra Lukita
            </motion.span>
            , S.E., M.M., M.T.I.
          </motion.h1>
        </motion.div>

        {/* Teks Welcome Speech */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-blue-900 md:w-1/2 mt-24 md:mt-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block pb-2">
            Welcome Speech
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
            Selamat datang di Universitas Kami. Kami bangga menjadi lembaga pendidikan tinggi
            yang berkomitmen untuk memberikan kualitas terbaik dalam pendidikan, penelitian, 
            dan pengabdian kepada masyarakat. Dengan semangat inovasi dan kolaborasi, 
            kami mengundang Anda untuk bersama-sama membangun masa depan yang lebih baik.
            <br /><br />
            Kami percaya bahwa setiap individu memiliki potensi luar biasa untuk berkembang 
            dan menjadi agen perubahan positif. Selamat bergabung di lingkungan universitas 
            yang inklusif, dinamis, dan penuh semangat.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
