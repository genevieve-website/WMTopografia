import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react"; // Ícone de estrela para o Google
import depo1 from "../assets/imagens/instagram .jpg";
import depo2 from "../assets/imagens/whats.jpg";
import depo3 from "../assets/imagens/instagram .jpg";
import depo4 from "../assets/imagens/whats.jpg";

// Estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";

const avaliacoes = [
  {
    id: 1,
    tipo: "whatsapp",
    imagem: depo1, // Caminho do seu print
  },
  {
    id: 2,
    tipo: "google",
    nome: "Ricardo Almeida",
    texto:
      "Atendimento excepcional. O William foi muito preciso na demarcação do meu terreno e entregou a documentação antes do prazo.",
    estrelas: 5,
  },
  {
    id: 3,
    tipo: "whatsapp",
    imagem: depo2, // Caminho do seu print
  },
  {
    id: 4,
    tipo: "google",
    nome: "Construtora Silva",
    texto:
      "Trabalhamos com a WM há 2 anos. Empresa séria, com equipamentos modernos e equipe muito bem preparada para segurança do trabalho.",
    estrelas: 5,
  },
  {
    id: 5,
    tipo: "whatsapp",
    imagem: depo3, // Caminho do seu print
  },
  {
    id: 6,
    tipo: "google",
    nome: "Fernanda Costa",
    texto:
      "Serviço impecável. A equipe foi muito atenciosa e entregou todo o levantamento com muita agilidade.",
    estrelas: 5,
  },
  {
    id: 7,
    tipo: "whatsapp",
    imagem: depo4, // Caminho do seu print
  },
  {
    id: 8,
    tipo: "google",
    nome: "Carlos Mendes",
    texto:
      "Excelente atendimento e precisão técnica. Recomendo a WM para qualquer demanda topográfica.",
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
            <SwiperSlide key={item.id} className="!w-[200px]">
              <div className="h-[400px] w-[200px] flex items-center justify-center">
                {item.tipo === "whatsapp" ? (
                  /* CARD TIPO WHATSAPP (PRINT) */
                  <div className="w-full h-full p-2 bg-slate-100 rounded-3xl shadow-md overflow-hidden border-4 border-white">
                    <img
                      src={item.imagem}
                      alt="Feedback WhatsApp"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                ) : (
                  /* CARD TIPO GOOGLE (TEXTO) */
                  <div className="w-full h-full p-5 bg-slate-50 rounded-3xl shadow-md border border-slate-100 flex flex-col justify-between">
                    <div>
                      <div className="flex gap-1 mb-3">
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
                    <div className="mt-4 flex items-center gap-3">
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
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
