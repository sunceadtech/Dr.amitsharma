import React, { useEffect, useState } from "react";

/**
 * SafeImage ensures SEO and CLS compliance.
 */
const SafeImage = ({
  src,
  alt,
  title,
  width = 128,
  height = 128,
  loading = "lazy",
  decoding = "async",
  className = "",
  ...rest
}) => {
  const finalTitle = alt === "" ? undefined : title || alt;

  return (
    <img
      src={src}
      alt={alt}
      title={finalTitle}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      className={`object-cover ${className}`}
      {...rest}
    />
  );
};

const testimonials = [
  {
    name: "Mahender Rajput",
    image: "/images/paitent1.webp",
    alt: "Tendon surgery recovery",
    text: "I had a serious tendon injury that affected my training. Thanks to Dr. Amit Sharma's expert care, I recovered quickly and got back to my fitness routine without complications.",
  },
  {
    name: "Rahul Kumar",
    image: "/images/paitent7.webp",
    alt: "Orthopedic surgery recovery",
    text: "After a severe leg fracture, I was worried about my mobility. Dr. Amit's treatment and rehab plan brought me back to normal life faster than expected. Forever grateful.",
  },
  {
    name: "Pushplata Garg",
    image: "/images/paitent5.webp",
    alt: "Knee pain treatment",
    text: "I suffered from constant knee pain for years. Dr. Amit diagnosed the root cause and recommended the right procedure. I now walk comfortably without any pain.",
  },
  {
    name: "Mrs. Karan",
    image: "/images/testimonial10.webp",
    alt: "Knee replacement result",
    text: "Getting a knee replacement felt overwhelming, but Dr. Amit made the process smooth and stress-free. I can now move freely and live independently again.",
  },
  {
    name: "Priya Sharma",
    image: "/images/blog6.webp",
    alt: "Knee surgery recovery",
    text: "After my injury, even daily walking was painful. Dr. Amit's precise treatment and care helped me regain strength and return to my daily activities pain-free.",
  },
];

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  const goToPrev = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );

  // Autoplay every 5 seconds
  useEffect(() => {
    const autoSlide = setInterval(goToNext, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section
      className="py-12 px-4 bg-gray-50"
      aria-labelledby="patient-testimonials"
      role="region"
    >
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2
          id="patient-testimonials"
          className="text-3xl font-bold text-gray-800"
        >
          What Our Patients Say
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Hear inspiring recovery stories from our patients at Dr. Amit Sharma’s
          orthopedic clinic.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto bg-white rounded-xl shadow p-8 text-center">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-purple-200">
            <SafeImage
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].alt}
              width={128}
              height={128}
              className="w-full h-full"
            />
          </div>
          <p className="text-xl font-semibold text-purple-700">
            {testimonials[currentIndex].name}
          </p>
          <p className="text-gray-600 text-sm mt-2 italic">
            “{testimonials[currentIndex].alt}.”
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={goToPrev}
            aria-label="Previous testimonial"
            className="text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            ← Previous
          </button>
          <button
            onClick={goToNext}
            aria-label="Next testimonial"
            className="text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Indicators */}
      <div className="mt-4 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-purple-600" : "bg-purple-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HomeCarousel;
