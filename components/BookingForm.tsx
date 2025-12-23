'use client';
import { useState } from 'react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Aqui podes integrar com uma API ou serviço de email
  };

  if (submitted) {
    return (
      <div className="py-20 text-center animate-fadeIn">
        <div className="text-apple-blue text-5xl mb-4">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <h3 className="text-3xl font-semibold text-apple-dark">Pedido Enviado.</h3>
        <p className="text-gray-500 mt-2">A equipa Olti entrará em contacto em breve.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-apple-blue apple-underline cursor-pointer"
        >
          Novo Agendamento
        </button>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white px-5">
      <div className="max-w-[600px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-semibold tracking-tight text-apple-dark">Agendar Serviço</h2>
          <p className="text-gray-500 text-[19px] mt-2">Escolha o seu plano e nós tratamos do resto.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              required
              type="text" 
              placeholder="Nome completo"
              className="w-full p-4 bg-apple-gray rounded-xl border-none focus:ring-2 focus:ring-apple-blue outline-none transition-all"
            />
            <input 
              required
              type="email" 
              placeholder="E-mail"
              className="w-full p-4 bg-apple-gray rounded-xl border-none focus:ring-2 focus:ring-apple-blue outline-none transition-all"
            />
          </div>

          <select className="w-full p-4 bg-apple-gray rounded-xl border-none focus:ring-2 focus:ring-apple-blue outline-none transition-all appearance-none cursor-pointer">
            <option>Limpeza Residencial</option>
            <option>Limpeza Pós-Obra</option>
            <option>Manutenção Corporativa</option>
            <option>Higienização Profunda</option>
          </select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              required
              type="date" 
              className="w-full p-4 bg-apple-gray rounded-xl border-none focus:ring-2 focus:ring-apple-blue outline-none transition-all"
            />
            <input 
              required
              type="tel" 
              placeholder="Telemóvel"
              className="w-full p-4 bg-apple-gray rounded-xl border-none focus:ring-2 focus:ring-apple-blue outline-none transition-all"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-apple-blue text-white font-semibold rounded-full hover:bg-[#0077ed] transition-colors shadow-lg shadow-blue-500/20"
          >
            Confirmar Intenção de Reserva
          </button>
        </form>
      </div>
    </section>
  );
}