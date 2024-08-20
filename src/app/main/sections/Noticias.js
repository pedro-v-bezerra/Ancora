import Carousel from "@/app/components/Carousel";
import React, { useRef } from "react";

export default function Noticias() {
  return (
    <>
      <div id="noticias" className="pb-24">
        <h1 className="font-merriweather text-[#FECC2B] pt-24 pb-12 text-3xl text-center md:col-span-3 ">
          Notícias e Atualizações
        </h1>
        <Carousel />
      </div>
    </>
  );
}
