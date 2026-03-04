import wmLogoGigante from "../assets/icons/WM.png"; // Caminho da sua logo
import aboutBg from "../assets/imagens/colaborador1.jpg";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative py-12 px-6 md:px-20 bg-white overflow-hidden"
    >
      <img
        src={wmLogoGigante}
        alt=""
        aria-hidden="true"
        className="absolute left-0 bottom-0 w-[58%] max-w-none opacity-40 pointer-events-none select-none z-0"
      />
      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LADO ESQUERDO: TEXTO */}
        <div className="relative z-20 overflow-hidden">
          <h2 className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold mb-2">
            Sobre Nós
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-wm-navy mb-6 leading-tight">
            WM Topografia e <br />
            <span className="text-wm-secondary">Georreferenciamento</span>
          </h3>

          {/* A LINHA (IGUAL AO MODELO) */}
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>

          <div className="relative space-y-6 text-gray-700 text-lg leading-relaxed text-justify ">
            <p className="relative z-10">
              A <strong>WM Topografia</strong> nasceu com o objetivo de entregar
              precisão e confiança para o mercado de engenharia e construção
              civil. Especializados em levantamentos planialtimétricos e
              georreferenciamento, utilizamos tecnologia de ponta para garantir
              que cada centímetro do seu projeto seja mapeado com rigor técnico.
            </p>
          </div>
        </div>

        {/* LADO DIREITO: IMAGEM COLABORADOR */}
        <div className="relative flex justify-center items-center md:sticky md:top-24">
          <img
            src={aboutBg}
            alt="Colaborador WM"
            className="w-full max-w-md md:max-w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
