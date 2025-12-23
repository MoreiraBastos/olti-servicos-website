'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const menuData = {
  residencial: [
    { title: "Limpeza Padrão", desc: "O padrão Olti para a sua casa.", link: "#" },
    { title: "Pós-Obra", desc: "Do pó à perfeição total.", link: "#" },
    { title: "Assinaturas", desc: "Planos recorrentes sem burocracia.", link: "#" }
  ],
  corporativo: [
    { title: "Escritórios", desc: "Eficiência que gera produtividade.", link: "#" },
    { title: "Indústrias", desc: "Limpeza técnica especializada.", link: "#" }
  ],
  sobre: [
    { title: "Grupo ELESED", desc: "A Nossa história e visão de futuro.", link: "#" },
    { title: "Carreiras", desc: "Faça parte do time Olti.", link: "#" }
  ]
};

export default function Navbar({ onBlurChange }: { onBlurChange: (isBlurred: boolean) => void }) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleOpen = (menu: string) => {
    setActiveMenu(menu);
    onBlurChange(true);
  };

  const handleClose = () => {
    setActiveMenu(null);
    onBlurChange(false);
  };

  return (
    <nav 
      className="fixed top-0 w-full bg-[#fbfbfd]/80 backdrop-blur-2xl z-[1000] border-b border-black/10 py-3"
      onMouseLeave={handleClose}
    >
      <div className="flex flex-col items-center">
        {/* Logo no centro */}
        <Link href="/" className="mb-2">
          <Image src="/logo.png" alt="Olti Serviços" width={100} height={100} className="object-contain" />
        </Link>
        
        {/* Links centralizados abaixo do logo */}
        <ul className="flex items-center gap-10">
          {Object.keys(menuData).map((key) => (
            <li key={key}>
              <button 
                onMouseEnter={() => handleOpen(key)}
                className={`text-apple-dark text-[12px] opacity-80 hover:opacity-100 transition-opacity uppercase py-2 cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#5b86d7] after:transition-all after:duration-300 hover:after:w-full ${activeMenu === key ? 'after:w-full drop-shadow-[0_0_8px_rgba(91,134,215,0.6)]' : ''}`}
              >
                {key}
              </button>
            </li>
          ))}
          <li>
            <Link href="#" className="text-apple-dark text-[12px] opacity-80 hover:opacity-100 transition-opacity uppercase">
              Suporte
            </Link>
          </li>
        </ul>
      </div>

      {/* Dropdown Animado */}
      <div className={`fixed top-[140px] left-0 w-full bg-[#fbfbfd]/98 backdrop-blur-2xl border-b border-black/5 transition-all duration-500 overflow-hidden ${activeMenu ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="max-w-[1000px] mx-auto py-16 px-5 grid grid-cols-3 gap-10">
          {activeMenu && menuData[activeMenu as keyof typeof menuData].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <h3 className="text-[24px] font-semibold text-apple-dark mb-2">{item.title}</h3>
              <p className="text-[14px] text-gray-500 mb-3">{item.desc}</p>
              <Link href={item.link} className="text-apple-blue text-[14px] apple-underline inline-block">Saiba mais</Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}