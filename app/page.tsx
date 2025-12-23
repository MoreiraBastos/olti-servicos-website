'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import BookingForm from '@/components/BookingForm';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <main className="bg-black">
      <Navbar onBlurChange={setIsBlurred} />
      <FloatingButtons />

      <div className={`content-transition bg-white ${isBlurred ? 'blur-[20px] scale-[0.99] pointer-events-none' : ''}`}>

        {/* HERO SECTION */}
        <section
          className="pt-[140px] h-screen flex flex-col items-center justify-center text-center text-white px-5 relative overflow-hidden"
        >
          {/* GIF de fundo */}
          <video
            src="/hero_bg_720p.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover -z-0 pointer-events-none"
          />
          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/30 -z-0"></div>

          <h1 className="text-[40px] md:text-[64px] font-semibold relative z-10">Olti Serviços</h1>
          <p className="text-[18px] md:text-[26px] font-light mt-4 mb-8 relative z-10">O brilho que você vê. A limpeza que você sente.</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-[16px] md:text-[21px] relative z-10">
            <Link href="#" className="text-olti-blue-light apple-underline">Saiba mais &gt;</Link>
            <Link href="#" className="text-olti-blue-light apple-underline">Solicitar orçamento &gt;</Link>
          </div>
        </section>

        {/* SERVICES GRID BENTO STYLE */}
        <h2 className="pt-20 px-5 text-center text-[32px] md:text-[48px] font-semibold text-apple-dark mb-6">Conheça Os Nossos Serviços</h2>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white">
          <ServiceCard
            title="Limpeza Padrão"
            desc="O cuidado que a sua residência merece."
            img="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1074"
          />
          <ServiceCard
            title="Pós-Obra"
            desc="Pronto para morar, em tempo recorde."
            img="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?q=80&w=1171"
          />
        </section>

        {/* INFO SECTION */}
        <section className="py-24 px-5 md:px-10 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="pt-[-10px] text-[28px] md:text-[36px] font-semibold text-apple-dark mb-6">Compromisso com a Excelência</h2>
              <p className="text-[16px] md:text-[21px] text-gray-500 leading-relaxed text-justify">
                A Olti Serviços é parte do <strong className="text-apple-dark">Grupo ELESED</strong>, referência em qualidade e exclusividade. Combinamos tradição e inovação para oferecer serviços de higienização profissional de padrão internacional em Angola. A nossa missão é elevar cada espaço ao mais alto nível de limpeza, conforto e bem-estar.
              </p>
            </div>
            <div
              className="h-[300px] md:h-[400px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/TEAM.png')` }}
            ></div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-1 px-5 md:px-10 text-center max-w-[1000px] mx-auto ">
          <h3 className="pt-0 text-[32px] md:text-[48px] font-semibold text-apple-dark mb-6">Os nossos colaboradores</h3>
          <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white">

            {/*Fotos dos colaboradores da Olti em ação*/}
            <img
              src="/team-member-1.png"
              alt="Colaborador Olti em ação"
              className="w-full h-full object-cover rounded-xl"
            />
            <img
              src="/team-member-2.jpg"
              alt="Equipe Olti Serviços"
              className="w-full h-full object-cover rounded-xl"
            />
            <img
              src="/team-member-3.jpg"
              alt="Colaborador Olti em ação"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white">
            <p className="content-center border-l-amber-100">João António</p>
            <p className="content-center border-l-amber-100">Domingos Manuel</p>
            <p className="content-center border-l-amber-100">Ana Domingos</p>
          </div>
        </section>
        <BookingForm />
        {/* FOOTER */}
        <footer className="bg-apple-gray pt-20 pb-10 px-[10%] border-t border-gray-300 text-[12px] text-gray-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <h4 className="text-apple-dark font-semibold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li><Link href="mailto:contato@oltiservicos.ao" className="apple-underline">contato@oltiservicos.ao</Link></li>
                <li><Link href="tel:+244940078865" className="apple-underline">+244 940 078 865</Link></li>
                <li>Luanda, Angola</li>
              </ul>
            </div>
            <div>
              <h4 className="text-apple-dark font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-5 text-[20px] text-apple-dark">
                <Link href="https://www.instagram.com/oltiservicos/"><i className="fa-brands fa-instagram"></i></Link>
                <Link href="#"><i className="fa-brands fa-tiktok"></i></Link>
                <Link href="https://wa.me/244940078865"><i className="fa-brands fa-whatsapp"></i></Link>
              </div>
            </div>
            <div>
              <h4 className="text-apple-dark font-semibold mb-4">Empresa</h4>
              <p>Uma empresa do <strong className="text-apple-dark uppercase">Grupo ELESED</strong>. Todos os direitos reservados 2025.</p>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-5 flex justify-between">
            <p>Copyright © 2025 Olti Serviços.</p>
            <p>Angola | ELESED Group</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

function ServiceCard({ title, desc, img }: { title: string, desc: string, img: string }) {
  return (
    <div
      className="h-[400px] md:h-[600px] bg-cover bg-center flex flex-col items-center justify-center text-center text-white transition-all duration-300 outline outline-0 outline-transparent hover:outline-2 hover:outline-olti-gold hover:outline-offset-[-15px]"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url('${img}')` }}
    >
      <h2 className="text-[32px] md:text-[42px] font-semibold text-shadow-lg">{title}</h2>
      <p className="text-[16px] md:text-[21px] mt-2 text-shadow-md px-10">{desc}</p>
      <Link href="#" className="mt-6 text-[16px] md:text-[19px] apple-underline">Ver mais</Link>
    </div>
  );
}