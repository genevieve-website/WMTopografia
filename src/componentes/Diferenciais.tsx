import notebookImg from "../assets/imagens/pc-removebg-preview.png";
import { ShieldCheck, HardHat, Zap, Cpu, FileCheck } from "lucide-react";

const diferenciais = [
  {
    titulo: "Documentação em dia",
    desc: "Empresa 100% regularizada.",
    icone: <FileCheck className="w-6 h-6" />, // Ícone reduzido ~40%
  },
  {
    titulo: "Segurança do Trabalho",
    desc: "Integridade da equipe.",
    icone: <HardHat className="w-6 h-6" />,
  },
  {
    titulo: "Prazo e Custo",
    desc: "Gestão sem atrasos.",
    icone: <Zap className="w-6 h-6" />,
  },
  {
    titulo: "Equipamentos Modernos",
    desc: "Máxima precisão tecnológica.",
    icone: <Cpu className="w-6 h-6" />,
  },
  {
    titulo: "Equipe Certificada",
    desc: "Treinamentos atualizados.",
    icone: <ShieldCheck className="w-6 h-6" />,
  },
];

export default function Diferenciais() {
  return (
    <section className="py-4 px-4 md:px-20 bg-slate-50 overflow-hidden">
      {/* Grid principal definido explicitamente */}
      <div className="max-w-8xl mx-auto">
        {/* LADO ESQUERDO: TEXTOS E ICONES REDUZIDOS */}
        <div className="flex flex-col items-start text-left">
          <h2 className="text-[16px] uppercase tracking-[0.2em] text-blue-600 font-bold mb-1">
            Compliance & Qualidade
          </h2>
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3 leading-tight">
            Prontos para atender <br />
            <span className="text-blue-600">qualquer demanda técnica.</span>
          </h3>
          <p className="text-slate-500 text-[12px] md:text-[18px]  mb-6 max-w-lg leading-relaxed">
            Presamos pela segurança e responsabilidade administrativa.
            <br /> Na WM Topografia, precisão e documentação são indispensáveis.
          </p>

          <div className="w-full grid grid-cols-[50%_45%] ">
            {/* GRID DE DIFERENCIAIS (ESTILO MICRO) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2">
              {diferenciais.map((item, index) => (
                <div key={index} className="flex items-center gap-2 group">
                  {/* Ícone reduzido em 40% e padding menor */}
                  <div className="flex-shrink-0 p-3.5 bg-blue-100 rounded text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {item.icone}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-[16px] md:text-[16px] leading-none">
                      {item.titulo}
                    </h4>
                    <p className="text-[12px] md:text-[16px] text-slate-400 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* IMAGEM AO LADO DO GRID DE DIFERENCIAIS */}
            <div className="relative flex justify-end -translate-y-6 md:-translate-y-8">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/4 -translate-y-1/2 w-70 h-65 bg-blue-400/10 blur-[60px] rounded-full pointer-events-none"></div>

              <img
                src={notebookImg}
                alt="Projetos WM"
                className="relative z-30 w-full max-w-[390px] md:max-w-[520px] h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
