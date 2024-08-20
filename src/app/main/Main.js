import React, { useRef } from "react";

import QuemSomos from "./sections/QuemSomos";
import Servicos from "./sections/Servicos";
import Galeria from "./sections/Galeria";
import Orcamento from "./sections/Orcamento";
import Suporte from "./sections/Suporte";
import Noticias from "./sections/Noticias";
import Contato from "./sections/Contato";

export default function Main() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <QuemSomos scrollToSection={scrollToSection}/>
      <Servicos />
      <Galeria />
      <Orcamento />
      <Suporte scrollToSection={scrollToSection}/>
      <Noticias />
      <Contato />
    </>
  );
}
