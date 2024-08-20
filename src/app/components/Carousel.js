import React from 'react';
import Slider from 'react-slick';

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Mostra 2 slides ao mesmo tempo em telas maiores
    slidesToScroll: 1,
    centerMode: true, // Ativa o modo centralizado
    centerPadding: '15%', // Ajusta o padding para garantir que as imagens laterais fiquem 50% visíveis
    responsive: [
      {
        breakpoint: 1024, // Em telas menores que 1024px
        settings: {
          slidesToShow: 1.5, // Mostra 1.5 slides para manter o efeito de 50% visível
          centerPadding: '10%', // Ajusta o padding para telas menores
        },
      },
      {
        breakpoint: 768, // Em telas menores que 768px
        settings: {
          slidesToShow: 1, // Mostra 1.2 slides
          centerPadding: '5%', // Menos padding para telas pequenas
        },
      },
      {
        breakpoint: 480, // Em telas menores que 480px
        settings: {
          slidesToShow: 1, // Mostra 1 slide por vez
          centerPadding: '0%', // Remove o padding para evitar cortes
        },
      },
    ],
  };

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden">
      <Slider {...settings}>
        <div className="px-3">
          <img src="/imgs/carrossel-1.png" alt="Imagem 1" className="w-full h-auto" />
          <h1 className="font-dm text-[#FECC2B] text-2xl pt-3">
            Commercial Cleaning 
          </h1>
          <p className="font-roboto text-white text-sm leading-6 pr-16">
            Whether your project is large or small, residential or commercial we can deliver a quality project on time.
          </p>
        </div>
        <div className="px-3">
          <img src="/imgs/carrossel-2.png" alt="Imagem 2" className="w-full h-auto" />
          <h1 className="font-dm text-[#FECC2B] text-2xl pt-3">
            Commercial Cleaning
          </h1>
          <p className="font-roboto text-white text-sm leading-6 pr-16">
            Whether your project is large or small, residential or commercial we can deliver a quality project on time.
          </p>
        </div>
        <div className="px-3">
          <img src="/imgs/carrossel-1.png" alt="Imagem 3" className="w-full h-auto" />
          <h1 className="font-dm text-[#FECC2B] text-2xl pt-3">
            Commercial Cleaning 
          </h1>
          <p className="font-roboto text-white text-sm leading-6 pr-16">
            Whether your project is large or small, residential or commercial we can deliver a quality project on time.
          </p>
        </div>
        <div className="px-3">
          <img src="/imgs/carrossel-1.png" alt="Imagem 4" className="w-full h-auto" />
          <h1 className="font-dm text-[#FECC2B] text-2xl pt-3">
            Commercial Cleaning 
          </h1>
          <p className="font-roboto text-white text-sm leading-6 pr-16">
            Whether your project is large or small, residential or commercial we can deliver a quality project on time.
          </p>
        </div>
      </Slider>
    </div>
  );
}
