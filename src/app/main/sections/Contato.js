import Quote from "@/app/components/Quote";
import React, { useRef } from "react";

export default function Contato() {
  return (
    <>
      <div
        id="contato"
        className="bg-[url('/imgs/bg-quote.png')] bg-cover bg-center px-6 py-12 sm:px-12 sm:py-16 md:px-24 md:py-20 lg:px-32 lg:py-24 xl:px-36 xl:py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-center">
          <div className="pb-8 md:pb-12">
            <h1 className="font-merriweather text-white text-3xl md:text-4xl lg:text-5xl pb-4 md:pb-6 text-center md:text-left">
              Descubra o potencial da Âncora!
            </h1>
            <p className="font-roboto text-white text-base md:text-lg lg:text-xl text-center md:text-left">
              Entre em contato agora mesmo.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-white rounded-lg flex flex-col items-center text-center px-6 py-6 md:py-8">
              <img
                src="/imgs/phone-icon.svg"
                alt="Phone Icon"
                className="mb-2"
              />
              <h2 className="font-dm text-[#3E4095] text-lg md:text-xl">
                Phone
              </h2>
              <p className="font-dm text-[#555555] text-base md:text-lg">
                (800) 123-4567
              </p>
            </div>
            <div className="bg-white rounded-lg flex flex-col items-center text-center px-6 py-6 md:py-8">
              <img
                src="/imgs/email-icon.svg"
                alt="Email Icon"
                className="mb-2"
              />
              <h2 className="font-dm text-[#3E4095] text-lg md:text-xl">
                Email
              </h2>
              <p className="font-dm text-[#555555] text-base md:text-lg">
                kd@kdenterprises.com
              </p>
            </div>
            <div className="bg-white rounded-lg flex flex-col items-center text-center px-6 py-6 md:py-8">
              <img
                src="/imgs/hours-icon.svg"
                alt="Hours Icon"
                className="mb-2"
              />
              <h2 className="font-dm text-[#3E4095] text-lg md:text-xl">
                Hours
              </h2>
              <p className="font-dm text-[#555555] text-base md:text-lg">
                09:00 - 20:00
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <Quote />
        </div>
      </div>
    </>
  );
}
