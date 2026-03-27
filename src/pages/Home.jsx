// Home.jsx
import React, { useState } from 'react';
import { FiFolder, FiCompass, FiUsers, FiPlus } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

export default function Home() {
  const [userName] = useState('Eduardo');

  const handleLogout = () => {
    console.log('Ação: Usuário deslogado.');
  };

  const handleCreateProject = () => {
    console.log('Ação: Abrir interface de criação de projeto.');
  };

  const handleNavigation = (route) => {
    console.log(`Ação: Navegando para -> ${route}`);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f5] font-sans flex flex-col selection:bg-gray-300">
      
      <div className="bg-[#111111] relative overflow-hidden flex flex-col pb-48 px-6 md:px-12 lg:px-24 rounded-b-[2.5rem] md:rounded-b-[4rem] shadow-lg">
        
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="absolute left-0 top-1/4 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,25 50,50 T100,50 L100,100 L0,100 Z" fill="transparent" stroke="#ffffff" strokeWidth="0.5" />
            <path d="M0,70 Q30,40 60,70 T100,70 L100,100 L0,100 Z" fill="transparent" stroke="#ffffff" strokeWidth="0.2" />
          </svg>
        </div>

        <Navbar onLogout={handleLogout} />

        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-8 mt-2">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-5">
              Bem-vindo de volta,<br />{userName}.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light">
              Comece a organizar suas ideias científicas. Gerencie projetos, descubra pesquisas e colabore com outros estudantes.
            </p>
          </div>

          <button
            onClick={handleCreateProject}
            className="flex items-center justify-center gap-2 bg-white text-[#111111] hover:bg-gray-200 px-8 py-4 rounded-xl font-medium transition-all shadow-sm active:scale-95 shrink-0"
          >
            <FiPlus size={22} />
            Criar novo projeto
          </button>
        </div>
      </div>

      <div className="flex-1 px-6 md:px-12 lg:px-24 -mt-28 relative z-20 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card
              icon={FiFolder}
              title="Projetos"
              description="Organize e acompanhe o andamento de todas as suas pesquisas e ideias cadastradas na plataforma."
              onClick={() => handleNavigation('Projetos')}
            />
            <Card
              icon={FiCompass}
              title="Descobrir"
              description="Divulgue e descubra novas ideias explorando o banco de projetos de iniciação científica."
              onClick={() => handleNavigation('Descobrir')}
            />
            <Card
              icon={FiUsers}
              title="Colaboração"
              description="Conecte-se com outros estudantes e orientadores para formar equipes de pesquisa interdisciplinares."
              onClick={() => handleNavigation('Colaboração')}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}