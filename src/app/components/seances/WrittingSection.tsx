import React from "react";
import Spline from "@splinetool/react-spline";
import Card from "./Card"; // Make sure the path is correct based on your file structure

const childrens = [
  {
    id: 1,
    title: "Léa",
    href: "#",
    imageUrlBefore: "/images/before-after/lea/before.png",
    imageUrlAfter: "/images/before-after/lea/after.png",
    age: "8 ans",
    class: "CE1",
    state: "Avant",
  },
  {
    id: 2,
    title: "Thomas",
    href: "#",
    imageUrlBefore: "/images/before-after/thomas/before.png",
    imageUrlAfter: "/images/before-after/thomas/after.png",
    age: "13 ans",
    class: "5e",
    state: "Avant",
  },
  {
    id: 3,
    title: "Valentin",
    href: "#",
    imageUrlBefore: "/images/before-after/lea/before.png",
    imageUrlAfter: "/images/before-after/lea/after.png",
    age: "16 ans",
    class: "2nd",
    state: "Avant",
  },
];

export const WrittingSection = () => {
  return (
    <div className="pt-44">
      <div
        className="absolute right-0 top-0 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative right-0 top-0 aspect-[1155/678] w-[18.0625rem] translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[36.09375rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8  items-center justify-center min-h-screen ">
        <div className="mx-auto max-w-2xl text-center  flex-col ">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-blue sm:text-4xl">
            Améliorer son écriture
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Voici des exemples d'écritures avant et après quelques séances de
            graphothérapie.
          </p>

          {/*<div className="flex justify-center mt-8">
            <Spline scene="https://prod.spline.design/Sex97foPdsxHqnSy/scene.splinecode" />
          </div>*/}
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:mt-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {childrens.map((children) => (
            <Card
              key={children.id}
              beforeImg={children.imageUrlBefore}
              afterImg={children.imageUrlAfter}
              name={children.title}
              age={children.age}
              grade={children.class}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
