import React, { useLayoutEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/images/heroimage.webp",
    alt: "Orthopedic surgeon in Ghaziabad treating joint, bone, and spine patients",
    title: "Best Orthopedic Surgeon In Ghaziabad",
    description:
      "Are You Looking For Best Orthopedic Surgeon In Ghaziabad For Joint Pain Treatment, Knee Replacement,Hip Replacement Or Any Other surgery ? You Can Contact Dr Amit Sharma",
  },
  {
    image: "/images/herobanner.webp",
    alt: "Orthopedic doctor in Indirapuram performing hip and knee surgeries",
    title: "Best Orthopedic Doctor In Indirapuram",
    description:
      "Receive expert surgical care with cutting-edge technology for faster recovery in hip and knee joint replacements in Indrapuram",
  },
];

function Home() {
  const [isClient, setIsClient] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useLayoutEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative w-full h-auto lg:h-[90vh] overflow-hidden"
      aria-label="Home Hero Section"
    >
      {/* <Helmet>
        <title>Best Orthopedic Surgeon in Ghaziabad</title>
        <meta
          name="description"
          content="Are You Looking For Best Orthopedic Surgeon In Ghaziabad For Joint Pain Treatment, Knee Replacement,Hip Replacement Or Any Other surgery ? You Can Contact Dr Amit Sharma"
        />
        <meta
          name="keywords"
          content="Best Orthopedic Surgeon In Ghaziabad, Dr. Amit Sharma"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://dramitsharmaortho.com/" />
      </Helmet> */}

      {/* ✅ Desktop View */}
      {isClient && isDesktop && (
        <div className="w-full h-[90vh] hidden lg:block">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 4000 }}
            loop
            className="w-full h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative w-full h-[90vh] bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  role="img"
                  aria-label={`Slide ${index + 1}`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchpriority={index === 0 ? "high" : "low"}
                    decoding="async"
                    className="hidden"
                  />
                  <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 flex items-center justify-end p-6 xl:p-12 bg-gradient-to-l from-white/80 to-white/0">
                    <div className="max-w-xl bg-white/90 p-6 rounded-lg shadow-lg">
                      {/* ✅ Only first slide uses h1, others use h2 */}
                      {index === 0 ? (
                        <h1 className="text-3xl xl:text-4xl font-bold text-purple-900 mb-4">
                          {slide.title}
                        </h1>
                      ) : (
                        <h2 className="text-3xl xl:text-4xl font-bold text-purple-900 mb-4">
                          {slide.title}
                        </h2>
                      )}
                      <p className="text-gray-700 mb-6 text-base xl:text-lg">
                        {slide.description}
                      </p>
                      <p className="text-xl font-semibold text-purple-800 mb-4">
                        Book Appointment With Best Ortho surgeon
                      </p>
                      <div className="flex flex-col xl:flex-row gap-4 mb-6">
                        <Link
                          to="/contact"
                          className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition text-sm text-center"
                        >
                          Book Appointment With Best Ortho Surgeon
                        </Link>
                        <Link
                          to="/contact"
                          className="bg-white border border-purple-700 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-100 transition text-sm text-center"
                        >
                          Best Orthopedic Clinic, Ghaziabad
                        </Link>
                      </div>
                      <dl className="grid grid-cols-3 gap-4 text-center">
                        <Stat number="8K+" label="Joint Replacements" />
                        <Stat number="50K+" label="Operated Patients" />
                        <Stat number="24+" label="Years of Experience" />
                      </dl>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* ✅ Always Render Mobile View (Default SSR-safe) */}
      {(!isClient || !isDesktop) && (
        <div className="block lg:hidden bg-white text-center px-4 pt-6 pb-10">
          <div className="w-full h-[220px] mb-4 overflow-hidden">
            <picture>
              <source
                srcSet="/images/heroimage3-mobile.webp"
                type="image/webp"
                media="(max-width: 768px)"
              />
              <img
                src="/images/heroimage3-mobile.webp"
                alt="Dr. Amit Sharma Orthopedic Hero"
                width="400"
                height="250"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="w-full h-full object-contain mx-auto"
              />
            </picture>
          </div>
          <h1 className="text-xl font-bold text-purple-900 mb-2">
            Best Orthopedic Surgeon in Ghaziabad
          </h1>
          <p className="text-gray-700 text-sm mb-4">
            We are dedicated to restoring your mobility and enhancing your
            quality of life with personalized treatment plans and advanced
            surgical techniques.
          </p>

          <h2 className="text-base font-semibold text-purple-800 mb-2">
            Book Appointment With Best Ortho surgeon
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Link
              to="/contact"
              className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition-colors duration-200 text-sm"
            >
              Best Orthopedic Hospital Knee and Hip Joint
            </Link>
            <Link
              to="/contact"
              className="bg-white border border-purple-700 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-100 transition-colors duration-200 text-sm"
            >
              City Clinic, Ghaziabad
            </Link>
          </div>
          <dl className="grid grid-cols-3 gap-4 text-center py-10">
            <Stat number="4K+" label="Joint Replacements" small />
            <Stat number="84K+" label="Operated Patients" small />
            <Stat number="24+" label="Years of Experience" small />
          </dl>
        </div>
      )}
    </section>
  );
}

function Stat({ number, label, small = false }) {
  return (
    <div>
      <dt
        className={`font-bold text-purple-900 ${
          small ? "text-xl" : "text-2xl"
        }`}
      >
        {number}
      </dt>
      <dd className={`text-gray-600 ${small ? "text-xs" : "text-sm"}`}>
        {label}
      </dd>
    </div>
  );
}

export default Home;
