import React from "react";

export const CTASection = () => {
  return (
    <div className="">
      <div className="px-6 py-24 sm:px-6 sm:py-24 lg:px-8 ">
        <div className="mx-auto max-w-2xl bg-slate-100 text-center py-12 px-16 rounded-xl">
          <h2 className="text-3xl font-bold tracking-tight text-blue sm:text-4xl">
            Envie d'en discuter ?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-700">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Me contacter
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-blue">
              Découvrir les séances <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
