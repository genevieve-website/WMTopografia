import { useState } from "react";
import logo from "../assets/icons/logoWMtopografiaegeo.png";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <a href="#hero" onClick={fecharMenu}>
          <img src={logo} alt="WM Topografia" className="h-14 w-auto" />
        </a>

        <nav className="hidden md:flex space-x-6 text-wm-primary font-medium">
          <a href="#sobre" className="hover:text-wm-accent transition-colors">
            Sobre
          </a>
          <a
            href="#projetos"
            className="hover:text-wm-accent transition-colors"
          >
            Projetos
          </a>
          <a
            href="#servicos"
            className="hover:text-wm-accent transition-colors"
          >
            Serviços
          </a>
          <a
            href="#depoimentos"
            className="hover:text-wm-accent transition-colors"
          >
            Depoimentos
          </a>
          <a href="#contato" className="hover:text-wm-accent transition-colors">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5511970928498?text=Olá!%20William,%20vim%20do%20seu%20site,%20gostaria%20de%20saber%20mais%20informaçoes%20sobre%20seus%20serviços."
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex bg-[#25D366] text-white px-5 py-2 rounded-full font-semibold hover:bg-green-600 transition items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.253 2 11.5c0 2.083.706 4.01 1.9 5.57L2.73 21.6a.8.8 0 00.988.987l4.73-1.254A10.2 10.2 0 0012 22c5.523 0 10-4.253 10-9.5S17.523 2 12 2zm0 18a8.66 8.66 0 01-4.216-1.087l-.301-.17-2.883.764.77-2.807-.197-.314A7.36 7.36 0 014 11.5C4 7.37 7.582 4 12 4s8 3.37 8 7.5-3.582 7.5-8 7.5zm4.19-5.69c-.228-.114-1.348-.654-1.558-.728-.21-.076-.362-.114-.514.113-.152.228-.59.728-.724.88-.133.152-.267.17-.495.057-.228-.114-.962-.351-1.833-1.121-.678-.6-1.136-1.34-1.269-1.567-.133-.228-.014-.351.1-.465.102-.102.228-.267.342-.4.114-.133.152-.228.228-.38.076-.152.038-.285-.02-.4-.057-.114-.514-1.245-.704-1.704-.185-.445-.373-.384-.514-.39l-.438-.008c-.152 0-.4.057-.609.285-.21.228-.8.78-.8 1.9 0 1.121.819 2.204.933 2.356.114.152 1.611 2.46 3.903 3.45.545.235.97.375 1.302.48.547.174 1.045.149 1.438.091.439-.065 1.348-.551 1.539-1.083.19-.532.19-.988.133-1.083-.057-.095-.21-.152-.438-.266z" />
            </svg>
            Fale conosco
          </a>

          <button
            type="button"
            className="md:hidden p-2 text-wm-primary"
            aria-label="Abrir menu"
            onClick={() => setMenuAberto((valorAnterior) => !valorAnterior)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="h-7 w-7"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuAberto && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-3 text-wm-primary font-medium border-t border-slate-200">
          <a href="#sobre" onClick={fecharMenu} className="pt-3">
            Sobre
          </a>
          <a href="#projetos" onClick={fecharMenu}>
            Projetos
          </a>
          <a href="#servicos" onClick={fecharMenu}>
            Serviços
          </a>
          <a href="#depoimentos" onClick={fecharMenu}>
            Depoimentos
          </a>
          <a href="#contato" onClick={fecharMenu}>
            Contato
          </a>
          <a
            href="https://wa.me/5511970928498?text=Olá!%20William,%20vim%20do%20seu%20site,%20gostaria%20de%20saber%20mais%20informaçoes%20sobre%20seus%20serviços."
            target="_blank"
            rel="noreferrer"
            className="mt-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-semibold w-max"
            onClick={fecharMenu}
          >
            Fale conosco
          </a>
        </nav>
      )}
    </header>
  );
}
