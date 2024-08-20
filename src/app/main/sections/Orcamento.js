import Form from "@/app/components/Form";
import React, { useRef } from "react";

export default function Orcamento() {
  return (
    <>
      <div
        id="orcamento"
        className="grid grid-cols-1 sm:grid-cols-2 px-8 md:grid-cols-3 px-8 gap-x-24   lg:px-32 xl:px-32 pb-16"
      >
        <h1 className="font-merriweather text-[#FECC2B] py-12 text-3xl text-center md:col-span-3 ">
          Solicite seu Orçamento Personalizado
        </h1>
        <div className="flex justify-center items-center md:col-span-1">
          <img
            src="/imgs/logo-ancora-branca.svg"
            className="w-full h-full object-contain"
          />
        </div>
        <Form />
      </div>
    </>
  );
}
