import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react"; // Ícone de estrela para o Google

// Estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";

const avaliacoes = [
  {
    id: 1,
    tipo: "google",
    nome: "Damiana Leite Melo",
    texto:
      "Muito bom ótimo até atendimento atenção é compromisso,com o cliente.",
    estrelas: 5,
  },
  {
    id: 2,
    tipo: "google",
    nome: "Sérgio Oliveira",
    texto: "Empresa séria, profissionais dedicados!",
    estrelas: 5,
  },
  {
    id: 3,
    tipo: "google",
    nome: "Dgs siq",
    texto:
      "Profissionais excepcionais, desempenham um trabalho com muita excelência e qualidade; com muitos diferenciais, e preço justo.",
    estrelas: 5,
  },
  {
    id: 4,
    tipo: "google",
    nome: "Arthur Henrique",
    texto:
      "Serviço de topografia com tecnologia ,qualidade, transparência e preço justo.",
    estrelas: 5,
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-sm uppercase tracking-[0.3em] text-blue-600 font-bold mb-2">
            Depoimentos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            O que nossos clientes dizem
          </h3>
          <div className="w-20 h-1.5 bg-blue-700 mx-auto mt-4"></div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView="auto"
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-8"
        >
          {avaliacoes.map((item) => (
            <SwiperSlide key={item.id} className="!w-[300px]">
              <div className="h-[320px] w-[300px] flex items-center justify-center">
                {/* CARD TIPO TEXTO */}
                <div className="w-full h-full p-6 bg-slate-50 rounded-3xl shadow-md border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(item.estrelas)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-slate-700 italic text-sm leading-relaxed">
                      "{item.texto}"
                    </p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.nome?.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">
                        {item.nome}
                      </p>
                      <p className="text-xs text-gray-500 font-medium">
                        Avaliação via Google
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botão para ver todas as avaliações */}
        <div className="text-center mt-8">
          <a
            href="https://share.google/V90RjxmHcaVGDIaKP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Conferir Todas as Avaliações
          </a>
        </div>
      </div>

      {/* Ajuste customizado para as bolinhas do Swiper não sumirem no fundo branco */}
      <style>{`
        .swiper-pagination-bullet-active {
          background: #1d4ed8 !important;
          width: 25px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </section>
  );
}
