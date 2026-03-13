import wmVideo from "../assets/videos/HeroWM.mp4";
// Importe uma imagem estática para carregar antes do vídeo (Essencial para LCP no SEO)

import posterImg from "../assets/imagens/residencial.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[90vh] overflow-hidden flex items-center"
    >
      {/* 1. Background com Poster para Performance */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={posterImg}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={wmVideo} type="video/mp4" />
      </video>

      {/* 2. Overlay com Gradiente (Melhora leitura e profundidade) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

      <div className="container mx-auto relative z-20 px-6">
        <div className="max-w-4xl text-left">
          {" "}
          {/* Alinhado à esquerda passa mais autoridade técnica */}
          {/* Tag de Contexto - Uppercase para visual técnico */}
          <p className="uppercase tracking-widest text-white font-bold text-sm mb-4">
            Engenharia de Precisão & Geoprocessamento
          </p>
          {/* H1: Onde o SEO acontece. Palavras-chave: Topografia, Precisão, Obra */}
          <h1 className="text-4xl md:text-7xl font-black text-wm-accent mb-6 leading-tight">
            Precisão Centimétrica <br />
            <span className="text-white">
              para <br /> Garantir sua Obra.
            </span>
          </h1>
          {/* Descrição: Foco na dor do cliente (Evitar prejuízo e multas) */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Evite erros de execução e problemas judiciais. Levantamentos
            <strong> Planialtimétricos</strong> e{" "}
            <strong>Georreferenciamento</strong> com certificação técnica
            (SIGEF/INCRA) em toda São Paulo.
          </p>
          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5511970928498?text=Olá!%20William,%20vim%20do%20seu%20site..."
              className="bg-wm-primary  text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-sky-500 transition-all text-center shadow-lg shadow-sky-900/20"
            >
              SOLICITAR ORÇAMENTO AGORA
            </a>

            <a
              href="#servicos"
              className="border border-white/30 bg-wm-accent text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all text-center"
            >
              VER SERVIÇOS
            </a>
          </div>
          {/* Trust Badge / Prova Social rápida */}
          <div className="mt-10 flex items-center gap-2 text-gray-400 text-sm italic">
            <span className="w-8 h-[1px] bg-gray-600"></span>
            Certificação Técnica e Profissionais Registrados no CREA
          </div>
        </div>
      </div>
    </section>
  );
}
