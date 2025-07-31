import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";
import TestimonialCards from "./TestimonialCards";

function Testimonial() {
  return (
    <>
      <Helmet>
        <title>Best Orthopedic Doctor in Indrapuram Ghaziabad</title>
        <meta
          name="description"
          content="Read genuine patient reviews and success stories for Dr. Amit Sharma, the best orthopedic surgeon in Ghaziabad. Learn how expert orthopedic care changed lives."
        />
        <meta
          name="keywords"
          content="Best Orthopedic Surgeon in Ghaziabad, Patient Reviews, Success Stories, Dr. Amit Sharma"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link
          rel="canonical"
          href="https://dramitsharmaortho.com/testimonials"
        />

        {/* Structured Data for Testimonials Page */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "Physician",
          "name": "Dr. Amit Sharma",
          "medicalSpecialty": "Orthopedic Surgery",
          "url": "https://dramitsharmaortho.com"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Dr. Amit Sharma",
          "name": "Verified Patient"
        },
        "reviewBody": "Dr. Amit Sharma provided exceptional care and expert orthopedic treatment. Highly recommended by many satisfied patients in Ghaziabad."
      }
    `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] md:h-[600px] overflow-hidden"
        aria-label="Testimonials Banner"
      >
        <img
          src="/images/testimonial.webp"
          alt="Happy patient after orthopedic treatment"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>

        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-6 md:px-20 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Best Orthopedic Doctor Indrapuram Ghaziabad
            </h1>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Discover how <strong>Dr. Amit Sharma</strong>, one of the{" "}
              <strong>best orthopedic surgeons in Ghaziabad</strong>, has helped
              patients recover from joint pain, fractures, and complex
              surgeries.
            </p>
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm"
            >
              <Link
                to="/"
                className="hover:underline text-white"
                title="Best Orthopedic Doctor in Indrapuram Ghaziabad"
              >
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-white" />
              <span className="font-semibold text-white" aria-current="page">
                Testimonials
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* Testimonial Cards Section */}
      <section
        aria-labelledby="testimonial-heading"
        className="bg-white text-gray-800 py-16"
      >
        <h2 id="testimonial-heading" className="sr-only">
          Testimonials for the best orthopedic surgeon in Ghaziabad – Dr. Amit
          Sharma
        </h2>
        <TestimonialCards />
      </section>
    </>
  );
}

export default Testimonial;
