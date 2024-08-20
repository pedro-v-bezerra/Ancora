import React, { useRef } from "react";

export default function Suporte({scrollToSection}) {
  const handleClick = (event, id) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    scrollToSection(id);
  };
  return (
    <>
      <div className="bg-[url('/imgs/bg-video.png')] bg-cover bg-center px-6 py-12 sm:px-12 sm:py-16 md:px-24 md:py-20 lg:px-32 lg:py-24 xl:px-96 xl:py-32">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="font-merriweather text-white text-3xl sm:text-4xl md:text-5xl text-center tracking-widest pb-6 sm:pb-8">
            Conheça o Suporte Âncora Pesquisas
          </h1>
          <p className="font-roboto text-white text-sm sm:text-base md:text-lg text-center pb-4 sm:pb-6 md:pb-8">
            Nossa equipe de suporte está aqui para ajudar você a obter todas as
            informações que precisa. Estamos prontos para responder
          </p>
          <button onClick={(e) => handleClick(e, "contato")} className="font-roboto text-[#FFF8EE] border border-[#FFF8EE] px-6 py-2 sm:px-8 rounded-full">
            ENTRE EM CONTATO
          </button>
        </div>
      </div>
    </>
  );
}
