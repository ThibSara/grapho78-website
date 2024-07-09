"use client";
import { ArrowDown } from "lucide-react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onSplineLoad: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSplineLoad }) => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative isolate pt-14">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-blue sm:text-6xl">
              La Graphothérapie
            </h1>
            <div
              className="relative overflow-hidden"
              style={{ height: "180px" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Spline
                  scene="https://prod.spline.design/rbboLN2iuGtIJRWR/scene.splinecode"
                  onLoad={onSplineLoad}
                />
              </motion.div>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              La graphothérapie est une discipline qui vise à améliorer
              l’écriture, afin de la rendre plus lisible, rapide, soignée et
              agréable. Cette pratique s&apos;adresse principalement aux
              enfants, aux adolescents ou aux adultes dont l&apos;écriture
              présente des difficultés, qu&apos;elle soit peu lisible ou
              négligée, douloureuse ou trop lente.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.div
                className="flex flex-col items-center justify-center pt-20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, y: [0, 10, 0] }}
                transition={{
                  delay: 2,
                  duration: 0.5,
                  ease: "easeOut",
                  y: {
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                }}
              >
                <div className="text-sm font-semibold leading-6 text-pink">
                  En savoir plus
                </div>

                <ArrowDown
                  size={40}
                  color={"#F89BC0"}
                  onClick={handleScroll}
                  style={{ cursor: "pointer" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
