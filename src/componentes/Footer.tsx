export default function Footer() {
  return (
    <footer id="contato" className="bg-wm-navy text-white px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-3">
          <h3 className="text-xl font-bold">
            WM Topografia e Georreferenciamento
          </h3>
          <p className="text-sm text-slate-200">CNPJ - 35435435/001-43</p>
          <a
            href="https://wa.me/5511976591326?text=Olá!%20Vim%20pelo%20site%20da%20WM%20Topografia%20e%20gostaria%20de%20mais%20informações."
            target="_blank"
            rel="noreferrer"
            className="block text-sm text-slate-200 hover:text-wm-accent transition-colors"
          >
            Topógrafo Matheus: 11 976591326
          </a>
          <a
            href="https://wa.me/5511970928498?text=Olá!%20Vim%20pelo%20site%20da%20WM%20Topografia%20e%20gostaria%20de%20mais%20informações."
            target="_blank"
            rel="noreferrer"
            className="block text-sm text-slate-200 hover:text-wm-accent transition-colors"
          >
            Topógrafo William: 11 970928498
          </a>
          <p className="text-sm text-slate-200">
            Email: wmtopografia1@gmail.com
          </p>
          <p className="text-sm text-slate-200">
            Endereço: Rua Amapá 174, Recanto Silvestre Fazendinha - Jardim Bahia
            (Fazendinha), Santana de Parnaíba - SP, 06530-240
          </p>
        </div>

        <div className="space-y-5 md:flex md:flex-col md:items-end">
          <div className="space-y-3 md:text-right">
            <a
              href="https://g.page/r/CXSWy2-cknJpEBM/review"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-wm-accent text-white hover:bg-wm-secondary transition-colors font-semibold text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M21.35 11.1h-9.18v2.98h5.27c-.23 1.48-1.78 4.35-5.27 4.35-3.17 0-5.74-2.62-5.74-5.86s2.57-5.86 5.74-5.86c1.8 0 3 .77 3.69 1.43l2.52-2.43C16.77 4.1 14.66 3 12.17 3 6.96 3 2.75 7.21 2.75 12.57S6.96 22.14 12.17 22.14c7.02 0 9.18-4.92 9.18-7.39 0-.5-.05-.86-.12-1.23z" />
              </svg>
              Nos avalie no Google
            </a>

            <div className="flex items-center justify-end gap-3">
              <a
                href="https://www.instagram.com/wm_topo/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full bg-white/15 hover:bg-wm-accent transition-colors flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5z" />
                  <path d="M12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17.75 6.25a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/williamgodoi10?locale=pt_BR"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 rounded-full bg-white/15 hover:bg-wm-accent transition-colors flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v2.3H8v3h2.4v8h3.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/20 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-300">
          WM Topografia e Georreferenciamento - Todos os direitos reservados.
        </p>
        <p className="text-sm text-slate-200 md:text-right">
          Site desenvolvido por{" "}
          <a
            href="https://www.genevieve.com.br/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-white hover:underline"
          >
            Genevieve Web Site
          </a>
        </p>
      </div>
    </footer>
  );
}
