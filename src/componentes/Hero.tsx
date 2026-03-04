// src/componentes/Hero.tsx
import wmVideo from "../assets/videos/brift.mp4"; // Exemplo: se estiver em src/assets/
// import imagemBG from "../assets/imagens/Scanner.jpg"; // Imagem de backup, se desejar
export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[85vh] overflow-hidden">
      {/* 1. O VÍDEO DE FUNDO (COMO NA IMAGEM DE REFERÊNCIA, MAS COM VÍDEO) */}
      {/*
      <img
        src={imagemBG}
        alt="Topografia WM"
        className="absolute inset-0 w-full h-full object-cover"
      />
      */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={wmVideo} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* 2. OVERLAY ESCURO PARA GARANTIR LEGIBILIDADE DO TEXTO (CONTRÁRIO DO EXEMPLO Grigolato QUE É MAIS CLARO, MAS IMPORTANTE PARA TEXTO BRANCO) */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
        {/* Subtítulo (Seguindo o print exemplo que tem um texto menor) */}
        <p className="uppercase tracking-[0.2em] text-xs font-light mb-5">
          SOLUÇÕES EM TOPOGRAFIA E GEORREFERENCIAMENTO
        </p>

        {/* Título Principal (Texto central grande como no print exemplo) */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-7 leading-tight max-w-5xl">
          Previsão e Precisão <br />{" "}
          <span className="text-sky-400">para sua Obra</span>
        </h1>

        {/* Descrição (Semelhante ao print exemplo) */}
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Levantamentos Planialtimétricos com certificação técnica <br />
          para terrenos de qualquer porte em São Paulo. Melhore seu
          custo-benefício.
        </p>

        {/* Botão de Ação (Adaptado) */}
        <a
          href="https://wa.me/5511970928498?text=Olá!%20William,%20vim%20do%20seu%20site,%20gostaria%20de%20saber%20mais%20informaçoes%20sobre%20seus%20serviços."
          className="bg-white text-gray-950 px-12 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition shadow-2xl flex items-center gap-2"
        >
          SOLICITAR ORÇAMENTO
        </a>
      </div>
    </section>
  );
}
