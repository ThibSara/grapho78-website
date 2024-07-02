"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface CardProps {
  beforeImg: string;
  afterImg: string;
  name: string;
  age: string;
  grade: string;
}

export const Card: React.FC<CardProps> = ({
  beforeImg,
  afterImg,
  name,
  age,
  grade,
}) => {
  const [imageSrc, setImageSrc] = useState(beforeImg);

  const handleMouseEnter = () => {
    setImageSrc(imageSrc === beforeImg ? afterImg : beforeImg);
  };

  return (
    <article
      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
      onMouseEnter={handleMouseEnter}
    >
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence>
          <motion.div
            key={imageSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <Image
              src={imageSrc}
              alt="writing image"
              className="object-cover"
              fill
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative z-10 bg-white bg-opacity-50 backdrop-blur-lg py-4 px-5 rounded-2xl mt-auto">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-800 justify-between flex ">
          <div>
            <span className="absolute inset-0" />
            {name}
          </div>
          <div>
            <span className="absolute inset-0 " />
            {imageSrc === beforeImg ? "Avant" : "Après"}
          </div>
        </h3>
        <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-800">
          <span className="mr-8">{age}</span>
          <div className="-ml-4 flex items-center gap-x-4">
            <svg
              viewBox="0 0 2 2"
              className="-ml-0.7 h-0.5 w-0.7 flex-none fill-white/50"
            >
              <circle cx={2} cy={1} r={1} />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
