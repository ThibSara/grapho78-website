import React from "react";

const faqs = [
  {
    id: 1,
    question: "Quand faut-il consulter un spécialiste ?",
    answer:
      "Il est recommandé de consulter lorsque les enseignants expriment des préoccupations, lorsque l’écriture de l’enfant est peu lisible, trop lente, lorsqu&apos;il ressent des douleurs en écrivant ou refuse d’écrire.",
  },
  {
    id: 2,
    question: "Combien de temps dure la rééducation ?",
    answer:
      "La durée de la rééducation varie en fonction des enfants et de leurs difficultés spécifiques. Cependant, dans de nombreux cas, quelques séances peuvent suffire.",
  },
  {
    id: 3,
    question: "Pourquoi est-il important de faire un bilan ?",
    answer:
      "Un bilan permet d&apos;évaluer précisément les difficultés de l’enfant et de déterminer les meilleures stratégies pour y remédier.",
  },
  {
    id: 4,
    question: "Quels sont les signes de difficultés en écriture ?",
    answer:
      "Les signes peuvent inclure une écriture illisible, lente, des douleurs pendant l&apos;écriture, ou un refus d&apos;écrire. Ces signes justifient une évaluation approfondie.",
  },
  {
    id: 5,
    question: "Quelle est la fréquence des séances de rééducation ?",
    answer:
      "La fréquence des séances varie selon les besoins de l&apos;enfant. Elle est généralement déterminée lors du bilan initial et ajustée en fonction des progrès observés.",
  },
];
export const FAQSection = () => {
  return (
    <div className="relative py-24 sm:py-24 lg:py-40 px-6 lg:px-8 mx-auto max-w-7xl">
      <h2 className="text-2xl font-bold tracking-tight text-blue-600 text-center mb-12">
        Vos questions les plus fréquentes
      </h2>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[-3rem] aspect-[1155/678] w-[20rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[-6rem] sm:w-[40rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <dl className="mt-10 space-y-8 divide-y divide-gray-300">
        {faqs.map((faq) => (
          <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
              {faq.question}
            </dt>
            <dd className="mt-4 lg:col-span-7 lg:mt-0">
              <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
