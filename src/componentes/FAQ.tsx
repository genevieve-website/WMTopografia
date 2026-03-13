// src/componentes/FAQ.tsx
export default function FAQ() {
  const perguntas = [
    {
      q: "Qual o prazo médio para entrega de um levantamento?",
      a: "O prazo varia conforme o tamanho do terreno, mas levantamentos residenciais comuns costumam ser entregues rápidos após a visita técnica.",
    },
    {
      q: "A WM Topografia atende apenas a capital de SP?",
      a: "Atendemos toda a Zona Leste São Paulo, obras residenciais, galpoes, empreendimentos empresariais, particulares e rurais.",
    },
    {
      q: "Como recebo os arquivos do projeto?",
      a: "Entregamos os arquivos em formatos digitais (DWG, PDF) e, se necessário, o memorial descritivo impresso e assinado pelo responsável técnico. Confira todos os métodos de entrega.",
    },
  ];

  return (
    <section className="py-16 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Dúvidas Frequentes
        </h2>
        <div className="space-y-6">
          {perguntas.map((item, i) => (
            <div key={i} className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-blue-700 mb-2">{item.q}</h3>
              <p className="text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
