import { Compass, Map, Ruler, HardHat, FileText, Mountain } from "lucide-react";
import image1 from "../assets/imagens/georreferenciamento.jpg";
import image2 from "../assets/imagens/levantamento.jpg";
import image3 from "../assets/imagens/residencial.jpg";
import image4 from "../assets/imagens/colaborador_obraresidencial.jpg";
import image5 from "../assets/imagens/drone.jpg";
import image6 from "../assets/imagens/colaboradoremObra4.jpg";
// Link do William com URL Encoding para a mensagem que você solicitou
const WHATS_WILLIAM =
  "https://wa.me/5511970928498?text=Olá!%20William,%20vim%20do%20seu%20site,%20gostaria%20de%20saber%20mais%20informaçoes%20sobre%20seus%20serviços.";

const servicos = [
  {
    titulo: "Georreferenciamento",
    descricao:
      "Certificação de imóveis rurais e urbanos junto ao INCRA, definindo limites com precisão GPS.",
    icone: <Compass className="w-8 h-8" />,
    imagem: image2,
  },
  {
    titulo: "Levantamento Planialtimétrico",
    descricao:
      "Mapeamento detalhado de todas as características do terreno, incluindo relevo e elementos existentes.",
    icone: <Ruler className="w-8 h-8" />,
    imagem: image1,
  },

  {
    titulo: "Loteamento e Desmembramento",
    descricao:
      "Projetos técnicos para divisão de glebas em lotes, respeitando as normas urbanísticas vigentes.",
    icone: <Map className="w-8 h-8" />,
    imagem: image3,
  },
  {
    titulo: "Levantamento Topográfico para Obras",
    descricao:
      "Transferência precisa dos eixos do projeto para o terreno, garantindo a execução fiel da planta.",
    icone: <HardHat className="w-8 h-8" />,
    imagem: image4,
  },
  {
    titulo: "Levantamento Topográfico de Usocapião",
    descricao:
      "Documentação técnica final que registra exatamente como a obra foi executada para futuras reformas.",
    icone: <FileText className="w-8 h-8" />,
    imagem: image5,
  },
  {
    titulo: "Cálculo de Volume",
    descricao:
      "Medição exata de movimentação de terra (corte e aterro) para controle de custos e logística.",
    icone: <Mountain className="w-8 h-8" />,
    imagem: image6,
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="pt-6 pb-12 px-6 md:px-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* HEADER DA SEÇÃO */}
        <div className="mb-10">
          <h2 className="text-sm uppercase tracking-[0.3em] text-blue-600 font-bold mb-2">
            O que fazemos
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Serviços de <span className="text-wm-accent">Alta Precisão</span>
          </h3>
          <div className="w-20 h-1.5 bg-blue-700"></div>
        </div>

        {/* GRID DE SERVIÇOS: 3 colunas garante 3 em cima e 3 em baixo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicos.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-b-4 border-transparent hover:border-b-blue-500 overflow-hidden min-h-[310px] flex flex-col justify-between"
            >
              {/* Imagem de Fundo com Overlay */}
              <img
                src={item.imagem}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-slate-900/75 group-hover:bg-slate-900/85 transition-colors duration-300" />

              {/* Conteúdo Superior */}
              <div className="relative z-10">
                <div className="text-white mb-4 transition-transform duration-300 group-hover:scale-110">
                  {item.icone}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">
                  {item.titulo}
                </h4>
                <p className="text-slate-200 leading-relaxed text-sm line-clamp-4">
                  {item.descricao}
                </p>
              </div>

              {/* Botão Inferior com Link do William */}
              <div className="relative z-10 mt-6">
                <a
                  href={WHATS_WILLIAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white font-bold text-[11px] tracking-widest uppercase bg-blue-700/80 hover:bg-blue-600 px-5 py-2.5 rounded-md transition-all duration-300 backdrop-blur-sm"
                >
                  Mais Informações
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
