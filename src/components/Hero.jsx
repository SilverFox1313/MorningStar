import React from "react";
import avatar from "../assets/images/logobg.png";

const Hero = () => {
  return (
    <section className="md:h-[400px] sm:h-[300px] h-[630px] sm:flex lightblack">
      {/* Contenido de texto */}
      <div className="sm:w-1/2 sm:h-full w-full h-1/2 flex-col content-center px-8 py-2">
        <h1 className="md:text-6xl sm:text-4xl text-6xl">Monetiza Tu</h1>
        <h1 className="md:text-6xl sm:text-4xl text-6xl">Tiempo En</h1>
        <div className="flex gap-2">
          <h1 className="md:text-6xl sm:text-4xl text-5xl blue font-bold">FACEBOOK</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="sm:size-[36px] md:size-[60px] size-[50px] orange"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            />
          </svg>
        </div>
        <p className="darkgray mt-2 md:text-base text-sm">
          Genera ingresos mensuales en Facebook, aprende estrategias
          probadas para ganar dinero mientras haces lo que te gusta.
          ¡Transforma tu pasión en un negocio rentable hoy mismo!
        </p>
      </div>

      {/* Imagen */}
      <div className="sm:w-1/2 sm:h-full w-full h-1/2 flex justify-center items-center ">
        <img
          src={avatar}
          alt="avatar"
          className="w-[400px] md:w-[470px] lg:w-[520px]"
        />
      </div>
    </section>
  );
};

export default Hero;
