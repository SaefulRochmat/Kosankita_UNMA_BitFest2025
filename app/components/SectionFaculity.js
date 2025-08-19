"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function SectionFakultas() {
  const [activeTab, setActiveTab] = useState('FTI');

  // Data untuk setiap fakultas
  const facultyData = {
    FTI: {
      title: 'Fakultas Teknologi & Informasi',
      programs: [
        { name: 'Teknik Informatika (S1)', link: '/prodi/teknik-informatika' },
        { name: 'Sistem Informasi (S1)', link: '/prodi/sistem-informasi' },
        { name: 'Desain Komunikasi Visual (S1)', link: '/prodi/desain-komunikasi-visual' },
        { name: 'Manajemen Informatika (D3)', link: '/prodi/manajemen-informatika' },
        { name: 'Komputerisasi Akuntansi (D3)', link: '/prodi/komputerisasi-akuntansi' }
      ]
    },
    FEB: {
      title: 'Fakultas Ekonomi & Bisnis',
      programs: [
        { name: 'Manajemen (S1)', link: '/prodi/manajemen' },
        { name: 'Akuntansi (S1)', link: '/prodi/akuntansi' },
        { name: 'Manajemen Bisnis (D3)', link: '/prodi/manajemen-bisnis' }
      ]
    }
  };

  const tabs = ['FTI', 'FEB'];

  return (
    <div className="w-full bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 py-20 px-4 relative overflow-hidden" id="fakultas">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-16 w-80 h-80 bg-orange-200/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-20 w-72 h-72 bg-amber-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-200/35 rounded-full blur-2xl"></div>
        <div className="absolute top-32 left-1/4 w-56 h-56 bg-orange-300/20 rounded-full blur-xl"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-blue-800">Fakultas & Program Studi</span>
          </h1>
          <div className="w-36 h-1 bg-yellow-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pilihan program studi unggulan dengan kurikulum berbasis industri dan teknologi terkini untuk mempersiapkan lulusan yang kompeten dan siap bersaing
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-10 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-6 py-3 rounded-lg font-semibold text-base md:text-lg lg:text-xl
                transition-all duration-300 ease-in-out transform
                ${activeTab === tab 
                  ? 'bg-blue-600 text-white shadow-lg scale-105 ring-2 ring-blue-300' 
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:scale-102'
                }
                hover:shadow-md active:scale-95
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Program Title with Animation */}
        <div className="text-center mb-10">
          <h2 
            key={activeTab} 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 animate-fade-in"
          >
            {facultyData[activeTab].title}
          </h2>
        </div>

        {/* Program Cards with Stagger Animation */}
        <div className="flex flex-col items-center gap-5">
          {facultyData[activeTab].programs.map((program, index) => (
            <div 
              key={`${activeTab}-${index}`}
              className="w-full max-w-3xl animate-slide-up"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <Link href={program.link}>
                <div className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-6 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-blue-800 cursor-pointer border border-transparent hover:border-yellow-400">
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl group-hover:text-yellow-100 transition-colors duration-300">
                    {program.name}
                  </h3>
                  <div className="w-0 group-hover:w-16 h-1 bg-yellow-400 mx-auto mt-3 transition-all duration-300 rounded-full"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Yellow accent with animation */}
        <div className="flex justify-center mt-12">
          <div className="w-20 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.6s ease-out forwards;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}