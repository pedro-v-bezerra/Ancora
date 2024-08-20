import React, { useRef } from "react";

export default function Galeria() {
  return (
    <>
      <div
        id="galeria"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-80 pt-10"
      >
        <div className="flex flex-col md:flex-row items-center py-8">
          <img src="/imgs/diferencial-1.png" className="w-full md:w-1/2" />
          <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="font-merriweather text-[#FECC2B] text-xl pb-3 leading-8 text-center">
              EXPERTISE DE QUASE DUAS DÉCADAS
            </h1>
            <p className="font-roboto text-[#FFF8EE] text-sm">
              Located in the downtown, and accented by an ever-changing art
              collection from the world class Nazareth Gallery, the Fine Dine
              restaurant location is visually stunning, and is sure to impress
              any special guests you are looking to entertain.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center py-8">
          <img src="/imgs/diferencial-2.png" className="w-full md:w-1/2" />
          <div className="mt-4 md:mt-0 md:mr-8 text-center md:text-left">
            <h1 className="font-merriweather text-[#FECC2B] text-xl pb-3 leading-8 text-center">
              ABORDAGEM PERSONALIZADA E SIGILOSA
            </h1>
            <p className="font-roboto text-[#FFF8EE] text-sm">
              Located in the downtown, and accented by an ever-changing art
              collection from the world class Nazareth Gallery, the Fine Dine
              restaurant location is visually stunning, and is sure to impress
              any special guests you are looking to entertain.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center py-8">
          <img src="/imgs/diferencial-3.png" className="w-full md:w-1/2" />
          <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="font-merriweather text-[#FECC2B] text-xl pb-3 leading-8 text-center">
              COMPROMISSO COM A EXCELÊNCIA
            </h1>
            <p className="font-roboto text-[#FFF8EE] text-sm">
              Located in the downtown, and accented by an ever-changing art
              collection from the world class Nazareth Gallery, the Fine Dine
              restaurant location is visually stunning, and is sure to impress
              any special guests you are looking to entertain.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="/imgs/divider.svg" />
      </div>
    </>
  );
}
