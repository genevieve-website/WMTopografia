import logoNovaEngefix from "../assets/icons/nOVA.png";
import logoJob from "../assets/icons/JOB.png";
import logoRealPerfil from "../assets/icons/realperfil.png";
import logoVextree from "../assets/icons/VEX.png";
import logoHapa from "../assets/icons/happ.webp";

const parceiros = [
  { id: 1, logo: logoNovaEngefix, alt: "Nova Engefix" },
  { id: 2, logo: logoJob, alt: "JOB Consultoria e Engenharia" },
  { id: 3, logo: logoRealPerfil, alt: "Real Perfil" },
  { id: 4, logo: logoVextree, alt: "Vextree" },
  { id: 5, logo: logoHapa, alt: "Hapa" },
  { id: 6, nome: "ELCF Engenharia Ltda" },
  { id: 7, nome: "CSC Real Incorporação Imobiliária" },
];

export default function Parceiros() {
  return (
    <section className="py-8 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-5 text-center md:text-left">
        <h4 className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold mb-2">
          Empresas que confiam na <span className="text-wm-accent">WM</span>
        </h4>
      </div>

      <div className="relative flex">
        {/* Container da Animação */}
        <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
          {/* Renderizamos a lista duas vezes para o loop infinito sem saltos */}
          {[...parceiros, ...parceiros].map((p, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-6 py-3 bg-slate-50 rounded-xl border border-slate-200 transition-all duration-300 cursor-default"
            >
              {p.logo ? (
                <img
                  src={p.logo}
                  alt={p.alt}
                  className="h-14 w-auto max-w-[180px] object-contain shrink-0"
                />
              ) : (
                <span className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">
                  {p.nome}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
