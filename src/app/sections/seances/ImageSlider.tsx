import React, { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { after, before } from "node:test";

interface ImageSliderProps {
  beforeImg: string;
  afterImg: string;
  name: string;
  age: string;
  grade: string;
  caption: string;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
  beforeImg,
  afterImg,
  name,
  age,
  grade,
  caption,
}) => {
  const [position, setPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(Number(e.target.value));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = ((e.clientX - rect.left) / rect.width) * 100;
    setPosition(pos);
  };

  return (
    <main className="grid place-items-center  ">
      <div
        className="relative grid place-content-center overflow-hidden rounded-xl"
        style={{ "--position": `${position}%` } as React.CSSProperties}
        onMouseMove={handleMouseMove}
      >
        <div className="relative w-[500px] h-[350px] max-h-[90vh]">
          <img
            className="absolute inset-0 w-[var(--position)] h-full object-cover object-left filter grayscale"
            src={beforeImg}
            alt="before photo"
          />
          <img
            className="w-full h-full object-cover object-left"
            src={afterImg}
            alt="after photo"
          />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          aria-label="Percentage of before photo shown"
          className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
          onChange={handleSliderChange}
        />
        <div
          className="absolute inset-0 w-[0.2rem] h-full bg-white pointer-events-none"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute bg-white text-black p-2 rounded-full grid place-items-center shadow-md pointer-events-none"
          style={{
            left: `${position}%`,
            transform: "translate(-50%, -50%)",
            top: "50%",
          }}
          aria-hidden="true"
        >
          <ChevronsLeftRight />
        </div>
      </div>
      <div className="max-w-[500px] mt-4">
        <div className="group relative">
          <a className="flex items-center gap-1">
            <span className="font-semibold leading-6 text-gray-900">
              {name}
            </span>
            <span className="inline-block w-1.5 h-1.5 bg-gray-500 rounded-full mx-2"></span>
            <span className="text-sm leading-6 font-normal text-gray-600">
              {age}
            </span>
            <span className="inline-block w-1.5 h-1.5 bg-gray-500 rounded-full mx-2"></span>
            <span className="text-sm leading-6 font-normal text-gray-600">
              {grade}
            </span>
          </a>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
            {caption}
          </p>
        </div>
      </div>
    </main>
  );
};
