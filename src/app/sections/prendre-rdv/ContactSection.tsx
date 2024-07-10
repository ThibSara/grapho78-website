import React from "react";
import { Mail, Phone, House } from "lucide-react";

import Image from "next/image";

export const ContactSection = () => {
  return (
    <div
      className="min-h-screen flex items-center"
      style={{ minHeight: "calc(100vh - 6rem)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-full -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative w-full h-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-pink">
                Prendre RDV
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-blue sm:text-4xl">
                Me contacter
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Je consulte sur rendez-vous, au Chesnay (Yvelines). Pour
                  prendre rendez-vous ou obtenir davantage de renseignements,
                  vous pouvez me joindre par téléphone, m&apos;envoyer un SMS ou
                  un email.
                </p>
                <dl className="mt-4 space-y-4 text-base leading-7">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <Phone
                        className="h-7 w-6 text-gray-500"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a
                        className="text-base font-semibold leading-7 text-blue hover:text-sky-700"
                        href="tel:+33 0609992288"
                      >
                        +33 06 09 99 22 88
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <Mail
                        className="h-7 w-6 text-gray-500"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a
                        className="text-base font-semibold leading-7 text-blue hover:text-sky-700"
                        href="mailto:st.grapho@gmail.com"
                      >
                        st.grapho@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <House
                        className="h-7 w-6 text-gray-500"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="text-base font-semibold leading-7 text-blue">
                      8 rue des deux cousins, le Chesnay
                    </dd>
                  </div>
                </dl>
                <p className="mt-8">
                  Je réponds généralement sous 24 heures. Que ce soit pour
                  discuter de vos besoins spécifiques, poser des questions sur
                  les séances de graphothérapie ou organiser un premier
                  rendez-vous, je suis à votre disposition pour vous assister et
                  vous fournir toutes les informations nécessaires.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:pr-4 flex justify-center lg:justify-end">
            <div className="lg:flex-1 lg:mt-8 lg:self-start items-center">
              <div className="container relative aspect-[7/5] w-[20rem] mt-8 lg:mt-0 lg:w-[24rem] max-w-none rounded-2xl bg-gray-50">
                <Image
                  src="/images/sandrine-thibierge.avif"
                  alt=""
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="flex">
                <div className=" container relative aspect-[4/3] w-[12rem]  lg:w-[16rem] mt-5  max-w-none flex-none rounded-2xl bg-gray-50 hidden sm:block">
                  <Image
                    src="/images/seances/2.avif"
                    alt=""
                    fill
                    priority
                    className="rounded-2xl object-cover"
                  />
                </div>
                <div className="container relative  aspect-[4/3] w-[20rem] lg:w-[16rem] mt-5  sm:ml-5 ml-0 max-w-none flex-none rounded-2xl bg-gray-50">
                  <Image
                    src="/images/seances/7.avif"
                    alt=""
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
