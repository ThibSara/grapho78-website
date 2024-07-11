"use client";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import PAGES_NAMES from "./constants/PAGES_NAMES";

export function Custom404() {
  return (
    <div className="relative pt-24">
      <div
        className="absolute inset-x-0 top-0 h-full -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative w-full h-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="px-6 py-24 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center py-12 px-16 bg-white rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-blue lg:text-3xl">
            Page introuvable
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-700">
            Découvrez comment la graphothérapie peut transformer votre écriture
            ou celle de votre enfant. Cliquez ici !
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={PAGES_NAMES.HOME.href}
              className="relative block font-medium py-2 bg-pink text-white px-4 rounded-3xl hover:text-slate-200"
            >
              Revenir
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
