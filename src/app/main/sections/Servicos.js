import React, { useRef } from "react";

export default function Servicos() {
  return (
    <>
      <div id="servicos">
        <h1 className="font-merriweather text-[#FECC2B] pt-12 text-3xl text-center ">
          Nossos Serviços
        </h1>
        <div className="pt-8 pb-16 grid grid-cols-1 sm:grid-cols-2 px-1 lg:grid-cols-4 gap-1">
          <img src="/imgs/servicos-1.png" className="w-full" />
          <img src="/imgs/servicos-2.png" className="w-full" />
          <img src="/imgs/servicos-3.png" className="w-full" />
          <img src="/imgs/servicos-4.png" className="w-full" />
        </div>
        <div>
          <img src="/imgs/divider.svg" />
        </div>
      </div>
    </>
  );
}
