import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import imagem1 from "../assets/imagens/colaborador_obraresidencial.jpg";
import imagem2 from "../assets/imagens/drone.jpg";
import imagem3 from "../assets/imagens/colaboradoremObra4.jpg";
import imagem4 from "../assets/imagens/obra_colaborador.jpg";
import imagem5 from "../assets/imagens/colaborador1.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projetos = [
  {
    id: 1,
    title: "Levantamento Planialtimétrico",
    local: "São Paulo - SP",
    img: imagem1,
  },
  {
    id: 2,
    title: "Georreferenciamento Rural",
    local: "Campinas - SP",
    img: imagem2,
  },
  {
    id: 3,
    title: "Loteamento Residencial",
    local: "Atibaia - SP",
    img: imagem3,
  },
  {
    id: 4,
    title: "Demarcação de Divisas",
    local: "São Roque - SP",
    img: imagem4,
  },
  {
    id: 5,
    title: "As Built de Obra Civil",
    local: "Santos - SP",
    img: imagem5,
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold mb-2">
            Portfolio
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            Projetos Recentes
          </h3>
          <div className="w-16 h-1 bg-blue-600 mt-4"></div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-8"
        >
          {projetos.map((proj) => (
            <SwiperSlide key={proj.id}>
              <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg max-w-[360px] mx-auto">
                {/* Imagem do Projeto */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Info do Card */}
                <div className="p-5">
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-2">
                    {proj.local}
                  </p>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">
                    {proj.title}
                  </h4>
                  <button className="text-sm font-semibold text-slate-600 border-b border-slate-300 hover:text-blue-600 hover:border-blue-600 transition-all">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CSS customizado para as setas (estilo minimalista) */}
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #1d4ed8 !important;
          background: white;
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet-active {
          background: #1d4ed8 !important;
        }
      `}</style>
    </section>
  );
}
