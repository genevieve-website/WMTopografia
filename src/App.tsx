import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import About from "./componentes/About";
import Projects from "./componentes/Projects";
import Services from "./componentes/Services";
import Parceiro from "./componentes/Parceiros";
import Footer from "./componentes/Footer";
import Depoimentos from "./componentes/Depo";
import Diferenciais from "./componentes/Diferenciais";

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Parceiro />
        <Projects />
        <Services />
        <Depoimentos />
        <Diferenciais />
      </main>
      <Footer />

      {/* Botão WhatsApp Fixo */}
      <a
        href="https://wa.me/5511970928498?text=Olá!%20William,%20vim%20do%20seu%20site,%20gostaria%20de%20saber%20mais%20informaçoes%20sobre%20seus%20serviços."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-9 w-9"
        >
          <path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.987 0 1.763.46 3.42 1.262 4.86L2 22l5.364-1.407c1.4.763 3.001 1.2 4.648 1.2 5.508 0 9.987-4.479 9.987-9.987 0-5.508-4.479-9.987-9.987-9.987zm0 18.286c-1.479 0-2.914-.38-4.175-1.098l-.3-.171-3.102.813.827-3.003-.189-.3a8.236 8.236 0 01-1.25-4.54c0-4.562 3.711-8.273 8.273-8.273s8.273 3.711 8.273 8.273-3.711 8.273-8.273 8.273zM15.87 13.52c-.213-.107-1.262-.622-1.457-.693-.196-.071-.338-.107-.48.107-.142.213-.551.693-.675.835-.125.142-.249.16-.462.053-.213-.107-.9-.331-1.716-1.057-.635-.566-1.063-1.266-1.187-1.479-.125-.213-.013-.328.093-.433.096-.095.213-.249.32-.373.107-.124.142-.213.213-.355.071-.142.036-.267-.018-.373-.053-.107-.48-1.156-.658-1.582-.173-.415-.349-.359-.48-.365l-.409-.007c-.142 0-.373.053-.568.267-.196.213-.746.729-.746 1.777s.764 2.062.871 2.204c.107.142 1.502 2.293 3.639 3.213.508.219.905.35 1.214.448.51.162.973.139 1.339.085.409-.06 1.262-.515 1.439-1.013.178-.498.178-.924.124-1.013-.053-.089-.196-.142-.409-.249z" />
        </svg>
      </a>
    </div>
  );
}
export default App;
