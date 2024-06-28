import React from "react";
import Spline from "@splinetool/react-spline";

const childrens = [
  {
    id: 1,
    title: "Léa",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    age: "8 ans",
    class: "CE1",
    state: "Avant",
  },
  {
    id: 2,
    title: "Thomas",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    age: "13 ans",
    class: "5e",
    state: "Avant",
  },
  {
    id: 3,
    title: "Valentin",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    age: "16 ans",
    class: "2nd",
    state: "Avant",
  },
];

export const WrittingSection = () => {
  return (
    <div className=" py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Spline scene="https://prod.spline.design/Sex97foPdsxHqnSy/scene.splinecode" />
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Voici des exemples d'écriture avant et après un accompagnement.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {childrens.map((children) => (
            <article
              key={children.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={children.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={children.href}>
                  <span className="absolute inset-0" />
                  {children.title}
                </a>
              </h3>
              <div className="flex flex-wrap items-center justify-between gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <div className="flex items-center">
                  <span className="mr-8">{children.age}</span>
                </div>
                <div className="-ml-4 flex items-center gap-x-4">
                  <div className="flex gap-x-2.5">{children.state}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
