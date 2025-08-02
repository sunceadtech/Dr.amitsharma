import React from "react";
import { Link } from "react-router-dom";

function KneeComp() {
  return (
    <section
      className="relative bg-black text-white overflow-hidden"
      aria-labelledby="knee-health-heading"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" aria-hidden="true" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between relative z-10 gap-12 md:gap-20">
        {/* Image Block */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <picture>
            <source srcSet="/images/kneepan3.webp" type="image/webp" />
            <img
              src="/images/kneepan3.webp"
              alt="Dr. Amit Sharma's knee pain assessment"
              className="w-full h-auto max-w-md md:max-w-lg object-contain rounded-xl shadow-lg"
              width="500"
              height="600"
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>

        {/* Text Block */}
        <div className="w-full md:w-1/2">
          <header>
            <h2
              id="knee-health-heading"
              className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400"
            >
              Unsure About Orthopedic Doctor Nearby?
            </h2>
          </header>
          <p className="text-base md:text-lg mb-6 leading-relaxed text-gray-200 max-h-[450px] overflow-auto pr-2 [text-align:justify]">
            Constant knee pain affecting your mobility? You’re not alone—and
            it's not just about aging. Every year, thousands of
            individuals young athletes, professionals, and elderly
            citizens—struggle with persistent knee problems that silently impact
            their quality of life. The knee is one of the most important joints
            in the human body, enabling motion, flexibility, and balance &nbsp;
            <span className="text-yellow-300 font-semibold">
               So don’t wait for the pain to control your life.
            </span>{" "}
            Take our simple, clinically-backed knee evaluation today and find
            out if surgery is necessary,or if there’s a better, less invasive
            path that can restore your knee strength and flexibility.
          </p>

          <Link
            to="/knee-replacement"
            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md shadow hover:bg-yellow-300 transition-colors duration-300"
            aria-label="Check your knee health and learn more about treatment options"
          >
            Check Your Knee Health
          </Link>
        </div>
      </div>
    </section>
  );
}

export default KneeComp;
