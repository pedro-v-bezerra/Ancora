export default function Footer({scrollToSection}) {
  const handleClick = (event, id) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    scrollToSection(id);
  };
  return (
    <div className="py-10 px-6 sm:px-12 md:px-24 lg:px-32">
      <div className="border-b border-white flex flex-col md:flex-row md:justify-between pb-10">
        <img
          alt="Logo"
          src="/imgs/ancoraLogo.svg"
          className="h-10 md:h-12 w-auto mb-4 md:mb-0"
        />
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-wrap justify-center md:justify-between items-center">
            <a href="#" onClick={(e) => handleClick(e, "quemsomos")} className="font-robotocondensed text-white px-3 py-1">QUEM SOMOS</a>
            <p className="font-robotocondensed text-[#FECC2B] hidden md:block">\</p>
            <a href="#" onClick={(e) => handleClick(e, "servicos")} className="font-robotocondensed text-white px-3 py-1">SERVIÇOS</a>
            <p className="font-robotocondensed text-[#FECC2B] hidden md:block">\</p>
            <a href="#" onClick={(e) => handleClick(e, "galeria")}className="font-robotocondensed text-white px-3 py-1">GALERIA</a>
            <p className="font-robotocondensed text-[#FECC2B] hidden md:block">\</p>
            <a href="#" onClick={(e) => handleClick(e, "noticias")} className="font-robotocondensed text-white px-3 py-1">NOTÍCIAS</a>
            <p className="font-robotocondensed text-[#FECC2B] hidden md:block">\</p>
            <a href="#" onClick={(e) => handleClick(e, "contato")}className="font-robotocondensed text-white px-3 py-1">CONTATO</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center pt-10">
        <div className="flex mb-4 md:mb-0">
          <a href="#" className="mx-2"><img src="/imgs/instagram-icon.svg" alt="Instagram" /></a>
          <a href="#" className="mx-2"><img src="/imgs/youtube-icon.svg" alt="YouTube" /></a>
          <a href="#" className="mx-2"><img src="/imgs/facebook-icon.svg" alt="Facebook" /></a>
        </div>
        <p className="font-roboto text-white text-center md:text-right">Todos os Direitos reservados - 2024</p>
      </div>
    </div>
  );
}
