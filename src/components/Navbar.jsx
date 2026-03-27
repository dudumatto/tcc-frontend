// Navbar.jsx
import React from 'react';
import { FiLogOut, FiMenu } from 'react-icons/fi';

export default function Navbar({ onLogout }) {
  return (
    <nav className="w-full flex items-center justify-between py-6 z-20 relative border-b border-gray-800/60 mb-10">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center shadow-sm">
          <div className="w-3 h-3 border-2 border-white rounded-sm"></div>
        </div>
        <span className="text-white text-xl font-medium tracking-wide">CollabResearch</span>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <button className="text-white hover:text-gray-300 transition-colors">Home</button>
        <button className="text-gray-400 hover:text-white transition-colors">Projetos</button>
        <button className="text-gray-400 hover:text-white transition-colors">Perfil</button>

        <div className="h-5 w-px bg-gray-700 mx-2"></div>

        <button
          onClick={onLogout}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <FiLogOut size={18} />
          <span>Sair</span>
        </button>
      </div>

      {/* Menu Mobile */}
      <div className="md:hidden text-gray-300 cursor-pointer hover:text-white transition-colors">
        <FiMenu size={26} />
      </div>
    </nav>
  );
}