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
    <div className="min-h-screen bg-white">
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
    </div>
  );
}

export default App;
