import Link from 'next/link';

export default function FloatingButtons() {
  const whatsappNumber = "244940078865";
  const whatsappMessage = encodeURIComponent("Olá, visitei o vosso website e gostaria de saber mais sobre os vossos serviços.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const instagramUrl = "https://www.instagram.com/oltiservicos/";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[999]">
      {/* Botão WhatsApp */}
      <Link 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
        aria-label="Contactar via WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </Link>

      {/* Botão Instagram */}
      <Link 
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
        aria-label="Visitar Instagram"
      >
        <i className="fa-brands fa-instagram"></i>
      </Link>
    </div>
  );
}
