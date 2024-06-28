import React from "react";
import { Mail, Phone, House } from "lucide-react";

export const ContactSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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
                  vous pouvez me joindre par téléphone, m'envoyer un SMS ou un
                  email.
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
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
