import React from "react";
import { Link } from "react-router-dom";

function HomeMeet() {
  return (
    <section
      className="bg-white py-16 px-4"
      aria-labelledby="meet-doctor-heading"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <figure className="w-full">
          <img
            src="/images/drsharma.webp"
            alt="Dr. Amit Sharma - Orthopedic Surgeon in Ghaziabad, expert in joint replacement and sports injuries"
            width={600}
            height={500}
            className="rounded-lg shadow-md w-full mr-8 h-[460px] object-cover"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="sr-only">
            Dr. Amit Sharma – Orthopedic Surgeon & Sports Injury Specialist
          </figcaption>
        </figure>

        {/* Text Section */}
        <article>
          <h3
            id="meet-doctor-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
          >
            Meet{" "}
            <span className="text-purple-700">
              Best Orthopedic Surgeon In Ghaziabad
            </span>
          </h3>

          <p className="text-gray-700 mb-4 leading-relaxed text-[15.5px] [text-align:justify]">
            With over 23 years of surgical experience, Dr. Amit Sharma is a
            renowned orthopedic specialist in Ghaziabad, known for his expertise
            in joint replacement, arthroscopy, trauma surgery, and sports
            injuries. His personal commitment to endurance sports like marathons
            and triathlons deeply informs his patient-centric care.
          </p>

          <p className="text-gray-700 mb-4 text-[15.5px] [text-align:justify]">
            Dr. Sharma blends surgical precision with an athlete’s mindset,
            empowering patients to recover faster, move confidently, and live a
            pain-free life.
          </p>

          <p className="text-gray-700 mb-6 text-[15.5px] [text-align:justify]">
            As the founder of one of Ghaziabad’s most trusted orthopedic
            centers, he has transformed thousands of lives through innovative
            treatments and compassionate care. His approach combines modern
            medical science with personalized rehabilitation strategies,
            ensuring long-term mobility and wellness for every patient.
          </p>

          <Link
            to="/about"
            className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            aria-label="Learn more about Dr. Amit Sharma - orthopedic specialist in Ghaziabad"
          >
            Get To Know About Dr. Sharma
          </Link>
        </article>
      </div>
    </section>
  );
}

export default HomeMeet;
