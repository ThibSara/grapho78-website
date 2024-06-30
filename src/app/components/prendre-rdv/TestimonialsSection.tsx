import React from "react";

export const TestimonialsSection = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
      <div className="flex items-center justify-center py-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-blue">
          Vos témoignages
        </h2>
      </div>
      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800 ">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-gray-100 border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Je recommande !
            </h3>
            <p className="my-4">
              La maîtresse était très contente des progrès de louis. Il ne râle
              plus quand il faut écrire dans son cahier. Il a pris confiance en
              lui. Merci beaucoup.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <div className="space-y-0.5 font-medium dark:text-white text-center rtl:text-right ms-3">
              <div>Marie D.</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 ">
                mère de Louis 8 ans
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-gray-100 border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Un grand merci !
            </h3>
            <p className="my-4">
              Notre fille a suivi le stage de 5 séances pour améliorer son
              écriture. Les résultats ont dépassé nos attentes. Elle a même été
              félicité par sa maitresse en fin d&apos;année.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <div className="space-y-0.5 font-medium dark:text-white text-center rtl:text-right ms-3">
              <div>Caroline P.</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                mère de Léa 10 ans
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b hover:bg-gray-100 border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Professionnelle et à l&apos;écoute
            </h3>
            <p className="my-4">
              Merci pour votre professionnalisme et votre écoute. Vous avez su
              mettre en confiance mon fils et lui donner envie de progresser.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <div className="space-y-0.5 font-medium dark:text-white text-center rtl:text-right ms-3">
              <div>Tierry G.</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                père de Thomas 12 ans
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 hover:bg-gray-100 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Merci pour votre bienveillance !
            </h3>
            <p className="my-4">
              Adulte et peu satisfaite de mon écriture depuis toujours,
              j&apos;ai consulté Sandrine Thibierge pour m&apos;aider a
              travailler sur ce complexe. Elle m&apos;a apporté son point de vue
              en toute bienveillance ce qui m&apos;a permis de prendre confiance
              en moi !
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <div className="space-y-0.5 font-medium dark:text-white text-center rtl:text-right ms-3">
              <div>Tessa S.</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                26 ans{" "}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </main>
  );
};
