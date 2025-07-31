import React, { useEffect, useMemo, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { FaQuoteLeft } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

/**
 * Use this for any <img> so audits don’t flag:
 * - Requires alt (unless decorative)
 * - Adds title if not supplied (fallback to alt)
 * - Enforces width/height to prevent CLS
 */
function SafeImage({
  src,
  alt,
  title,
  width,
  height,
  loading = "lazy",
  decoding = "async",
  sizes = "(max-width: 768px) 128px, 128px",
  className = "",
  ...rest
}) {
  // If decorative image, pass alt="" intentionally and skip title
  const finalTitle = alt === "" ? undefined : (title || alt);

  return (
    <img
      src={src}
      alt={alt}
      title={finalTitle}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      sizes={sizes}
      className={className}
      {...rest}
    />
  );
}

const testimonials = [
  {
    name: "Mahender Rajput",
    image: "/images/paitent1.webp",
    // Keep alt short & specific; no double words, no “after orthopedic procedure” vagueness
    alt: "Mahender Rajput after tendon surgery",
  },
  {
    name: "Rahul Kumar",
    image: "/images/testimonial1.webp",
    alt: "Rahul Kumar after orthopedic surgery",
  },
  {
    name: "Pushplata Garg",
    image: "/images/testimonial9.webp",
    alt: "Pushplata Garg after knee procedure",
  },
  {
    name: "Mrs. Karan",
    image: "/images/testimonial10.webp",
    alt: "Mrs. Karan after knee replacement",
  },
  {
    name: "Priya Sharma",
    image: "/images/blog6.webp",
    alt: "Priya Sharma after knee surgery",
  },
  {
    name: "Sita Bai",
    image: "/images/testimonial4.webp",
    alt: "Sita Bai after double knee surgery",
  },
];

function HomeCrawsel() {
  // Respect user preference: disable autoplay if prefers-reduced-motion
  const [shouldAutoPlay, setShouldAutoPlay] = useState(true);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => setShouldAutoPlay(!m.matches);
    handle();
    m.addEventListener?.("change", handle);
    return () => m.removeEventListener?.("change", handle);
  }, []);

  // JSON-LD for reviews (rich results)
  const reviewJsonLd = useMemo(() => {
    const reviews = testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewBody:
        // Keep reviewBody generic here; full text can be added if stored with each item
        `${t.name} shared a positive recovery experience.`,
    }));
    return {
      "@context": "https://schema.org",
      "@type": "Physician",
      name: "Dr. Amit Sharma",
      review: reviews,
    };
  }, []);

  return (
    <section
      className="bg-gray-100 py-16 px-4 max-w-8xl"
      aria-labelledby="testimonial-heading"
      role="region"
    >
      {/* Structured data */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />

      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2
          id="testimonial-heading"
          className="text-3xl font-bold text-gray-900 mb-2"
        >
          What Our Patients Say
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base">
          Real stories from patients who found relief and recovery through Dr.
          Amit Sharma’s orthopedic care.
        </p>
      </div>

      <div
        aria-roledescription="carousel"
        aria-label="Patient testimonials"
        aria-live="polite"
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay={shouldAutoPlay}
          interval={5000}
          stopOnHover
          swipeable
          emulateTouch
          useKeyboardArrows
          className="mx-auto w-full md:w-[70vw]"
          statusFormatter={(current, total) => `Slide ${current} of ${total}`}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label || "Previous"}
                aria-label="Previous testimonial"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-md bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label || "Next"}
                aria-label="Next testimonial"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-md bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>
            )
          }
        >
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md flex flex-col items-center text-center space-y-4"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${testimonials.length}`}
            >
              <FaQuoteLeft
                className="text-purple-500 text-2xl mb-2"
                aria-hidden="true" // decorative
              />

              {/* Optional: keep or re-add your full testimonial text here */}
              {/* <blockquote className="text-gray-800 text-base leading-relaxed max-w-md">
                “{t.text}”
              </blockquote> */}

              <div className="w-32 h-32 rounded-full overflow-hidden">
                <SafeImage
                  src={t.image}
                  alt={t.alt}
                  // Title will fallback to alt if not provided
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <figcaption className="text-lg font-semibold text-purple-900 py-4 md:py-8">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default HomeCrawsel;
