import React, { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

export default function Header({ scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (event, id) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative">
      <header className="bg-gradient-header px-4 md:px-8 lg:px-16 xl:px-32 py-4">
        <nav
          aria-label="Global"
          className="w-full flex items-center justify-between"
        >
          <div className="flex flex-1">
            <a href="#" className="p-2">
              <span className="sr-only">Your Company</span>
              <img
                alt="Logo"
                src="/imgs/ancoraLogo.svg"
                className="h-10 md:h-12 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-3 items-center">
            <a
              href="#"
              onClick={(e) => handleClick(e, "quemsomos")}
              className="text-sm leading-6 text-white font-robotocondensed"
            >
              QUEM SOMOS
            </a>
            <p className="font-robotocondensed text-[#FECC2B] hidden md:block">
              \
            </p>
            <a
              href="#"
              onClick={(e) => handleClick(e, "servicos")}
              className="text-sm leading-6 text-white font-robotocondensed"
            >
              SERVIÇOS
            </a>
            <p className="font-robotocondensed text-[#FECC2B] hidden md:block">
              \
            </p>
            <a
              href="#"
              onClick={(e) => handleClick(e, "galeria")}
              className="text-sm leading-6 text-white font-robotocondensed"
            >
              GALERIA
            </a>
            <p className="font-robotocondensed text-[#FECC2B] hidden md:block">
              \
            </p>
            <a
              href="#"
              onClick={(e) => handleClick(e, "noticias")}
              className="text-sm leading-6 text-white font-robotocondensed"
            >
              NOTÍCIAS
            </a>
            <p className="font-robotocondensed text-[#FECC2B] hidden md:block">
              \
            </p>
            <a
              href="#"
              onClick={(e) => handleClick(e, "contato")}
              className="text-sm leading-6 text-white font-robotocondensed"
            >
              CONTATO
            </a>
            <div className="flex-1 flex justify-end">
              <Button
                onClick={(e) => handleClick(e, "orcamento")}
                text="ORÇAMENTO"
                className="py-0 ml-3"
              />
            </div>
          </PopoverGroup>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-0 z-20 w-full max-w-sm bg-white px-6 py-6">
            <div className="flex items-center justify-between">
              <a href="#" className="p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Logo"
                  src="/imgs/ancoraLogo.svg"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6 space-y-2">
                  <a
                    href="#"
                    onClick={(e) => handleClick(e, "quemsomos")}
                    className="block py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Quem somos
                  </a>
                  <a
                    href="#"
                    onClick={(e) => handleClick(e, "servicos")}
                    className="block py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Serviços
                  </a>
                  <a
                    href="#"
                    onClick={(e) => handleClick(e, "galeria")}
                    className="block py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Galeria
                  </a>
                  <a
                    href="#"
                    onClick={(e) => handleClick(e, "noticias")}
                    className="block py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Notícias
                  </a>
                  <a
                    href="#"
                    onClick={(e) => handleClick(e, "contato")}
                    className="block py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Contato
                  </a>
                </div>
                <div className="py-6 text-center">
                  <Button
                    onClick={(e) => handleClick(e, "orcamento")}
                    text="Orçamento" 
                  />
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div
        className="flex flex-col items-center justify-center h-full bg-cover bg-center px-6 py-12 sm:px-12 sm:py-16 md:px-24 md:py-20 lg:px-32 lg:py-24 xl:px-36 xl:py-32"
        style={{ backgroundImage: "url('/imgs/bg-video.png')" }}
      >
        <img
          src="/imgs/play-button.svg"
          alt="Play Button"
          className="w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32"
        />
        <h1 className="font-merriweather text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white tracking-widest pt-6">
          A ESTRATÉGIA CERTA PARA SUA CAMPANHA
        </h1>
        <Button text="FAÇA SEU ORÇAMENTO" onClick={(e) => handleClick(e, "orcamento")} className="mt-6" />
      </div>
    </div>
  );
}
