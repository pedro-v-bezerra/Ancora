import React, { useRef } from "react";
export default function QuemSomos({scrollToSection}) {
  const handleClick = (event, id) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    scrollToSection(id);
  };
  return (
    <>
      <div
        id="quemsomos"
        className="flex flex-col items-center px-4 py-6 md:py-10 lg:py-32"
      >
        <img
          src="/imgs/logo-ancora-branca.svg"
          className="w-24 md:w-32 lg:w-40"
          alt="Logo Âncora"
        />
        <h1 className="font-merriweather text-[#FECC2B] pt-6 text-2xl text-center md:text-3xl lg:text-4xl">
          Âncora Pesquisas e Publicidade
        </h1>
        <p className="font-roboto text-[#FFF8EE] text-center max-w-[800px] mt-4 mb-6 md:mt-6 lg:mt-10 lg:mb-10 leading-7">
          A Âncora Pesquisas e Publicidade é uma empresa consolidada no mercado
          de pesquisas eleitorais e publicidade política, com uma trajetória de
          quase duas décadas de experiência e credibilidade. Desde a sua
          fundação, temos nos dedicado a fornecer serviços de alta qualidade e
          precisão, ajudando políticos e profissionais dos mais diversos setores
          a entenderem e alcançarem seus objetivos.
        </p>
        <button onClick={(e) => handleClick(e, "galeria")} className="font-roboto text-[#FFF8EE] border border-[#FFF8EE] px-6 py-2 rounded-full md:px-8 md:py-3 lg:px-10 lg:py-4">
          CONHEÇA MAIS
        </button>
      </div>
    </>
  );
}
