'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/tentang', label: 'Tentang Kami' },
    { href: '/program', label: 'Program Studi' },
    { href: '/kontak', label: 'Kontak' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-700">
            Universitas CIC
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-blue-700"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col px-4 py-2 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-700 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
