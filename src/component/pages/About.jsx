import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import HomeCrawsel from "../home/HomeCrawsel";
import KneeComp from "../home/KneeComp";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>
          Best Orthopedic Doctor in Ghaziabad | Dr. Amit Sharma |
          DrAmitSharmaOrtho
        </title>
        <meta
          name="description"
          content="Meet Dr. Amit Sharma, leading orthopedic surgeon in Ghaziabad & Indirapuram specializing in joint replacement, sports injuries & trauma care."
        />
        <meta
          name="keywords"
          content="Orthopedic Surgeon Ghaziabad, Dr Amit Sharma, joint replacement, sports injury, trauma surgery Ghaziabad"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Dr. Amit Sharma" />
        <link rel="canonical" href="https://dramitsharmaortho.com/about" />
        <script type="application/ld+json">
          {`
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dr. Amit Sharma Orthopedic Clinic",
    "image": "https://dramitsharmaortho.com/images/logo.png",
    "description": "Orthopedic clinic in Ghaziabad led by Dr. Amit Sharma.",
    "url": "https://dramitsharmaortho.com",
    "telephone": "+91-8750056560",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Indirapuram",
      "addressLocality": "Ghaziabad",
      "addressRegion": "UP",
      "postalCode": "201014",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Priya Sharma"
        },
        "reviewBody": "Priya Sharma shared a positive recovery experience.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rahul Kumar"
        },
        "reviewBody": "Excellent orthopedic care, fully recovered after surgery.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ]
  }
  `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] overflow-hidden"
        aria-label="Introduction to Dr. Amit Sharma"
      >
        <img
          src="/images/main.webp"
          alt="Dr. Amit Sharma - Orthopedic Surgeon in Ghaziabad"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          width="1920"
          height="500"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-6 md:px-20">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              About Dr. Amit Sharma Trusted Orthopedic Specialist in Indirapuram
              & Ghaziabad
            </h1>
            <p className="text-white text-lg md:text-xl mb-6">
              Your trusted orthopedic specialist for joint replacement, sports
              injuries, and trauma care in Ghaziabad.
            </p>
            <nav
              className="flex items-center gap-2 text-sm text-white"
              aria-label="Breadcrumb navigation"
            >
              <Link
                to="/"
                className="hover:underline"
                aria-label="Navigate to Home"
              >
                Home
              </Link>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
              <span className="font-semibold" aria-current="page">
                About Dr. Amit Sharma
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section className="bg-slate-50" aria-labelledby="doctor-profile-heading">
        <div className="text-gray-700 px-4 md:px-14 py-12 space-y-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3">
              <img
                src="/images/doctor2.webp"
                alt="Best Orthopedic Doctor"
                className="w-full rounded shadow-md"
                loading="lazy"
                width="400"
                height="400"
              />
            </div>
            <div className="md:w-2/3 space-y-6">
              <h2
                id="doctor-profile-heading"
                className="text-3xl font-bold text-purple-700"
              >
                Meet Dr. Amit Sharma Leading Orthopedic & Joint Replacement
                Surgeon in Ghaziabad
              </h2>
              <p className="text-base leading-relaxed text-gray-700">
                With <strong>23+ years of orthopedic experience</strong>, Dr.
                Amit Sharma is a board-certified, internationally trained
                orthopedic surgeon in Ghaziabad. His clinical expertise includes{" "}
                <strong>
                  knee and hip replacement, arthroscopy, sports injury treatment
                </strong>
                , and minimally invasive fracture surgery.
                <br />
                <br />
                He has served as the Head of Orthopedics at Dr. Hedgewar
                Hospital for over 8 years and completed senior residencies at
                LNJP (MAMC) and Sant Parmanand Hospitals. He’s a triathlon and
                marathon enthusiast, deeply understanding sports rehab and
                performance.
                <br />
                <br />
                <span className="text-purple-700 font-semibold">
                  Motto:
                </span>{" "}
                “Movement is medicine — restore it right.”
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <ul className="list-disc list-inside text-gray-700">
                  <li>Joint Replacement (Knee & Hip)</li>
                  <li>Advanced Arthroscopic Procedures</li>
                </ul>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Sports Injury Rehabilitation</li>
                  <li>Minimally Invasive Trauma Surgery</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fellowship and Clinics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Qualifications */}
            <div className="border border-gray-300 shadow-sm p-5 rounded-xl flex flex-col h-full bg-white">
              <h3 className="font-semibold mb-4 text-purple-700 text-lg">
                Dr. Amit Sharma’s Qualifications
              </h3>
              <ul className="space-y-2 list-disc pl-5 text-sm text-gray-800">
                <li>MBBS – University Of Agra, 1996</li>
                <li>
                  MS – Orthopaedics – Baba Raghavdas Medical College, Gorakhpur,
                  2000
                </li>
                <li>
                  Kleos Fellowship in Knee Replacement, Arthroscopy & Sports
                  Injuries – North Sydney Orthopedics & Sports Medicine Centre –
                  Sydney
                </li>
                <li>
                  Synthes Fellowship in Minimally Invasive Trauma Surgery – Guro
                  Hospital & Research Institute – Seoul
                </li>
                <li>
                  <strong>Call:</strong>{" "}
                  <a
                    href="tel:+918826629486"
                    className="text-blue-600 underline"
                  >
                    +91 88266 29486
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:amit9851@yahoo.com"
                    className="text-blue-600 underline"
                  >
                    amit9851@yahoo.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Fellowships */}
            <div className="border border-gray-300 shadow-sm p-5 rounded-xl flex flex-col h-full bg-white">
              <h3 className="font-semibold mb-4 text-purple-700 text-lg">
                Dr. Amit Sharma’s Memberships
              </h3>
              <ul className="space-y-2 list-disc pl-5 text-sm text-gray-800">
                <li>
                  <strong>KLEOS Fellowship</strong> in Replacement Surgery,
                  Arthroscopy & Sports Injuries – North Sydney Orthopedics &
                  Sports Medicine Centre, Sydney
                </li>
                <li>
                  <strong>Fellowship</strong> in Minimally Invasive Trauma
                  Surgery – Korea University Medical Centre (KUMC), Seoul
                </li>
                <li>
                  Dr. Amit Sharma, MBBS, MS, is a well-known orthopedic surgeon
                  in Ghaziabad,
                </li>
                <li>
                  <strong>Call:</strong>{" "}
                  <a
                    href="tel:+918826629486"
                    className="text-blue-600 underline"
                  >
                    +91 88266 29486
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:amit9851@yahoo.com"
                    className="text-blue-600 underline"
                  >
                    amit9851@yahoo.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Speciality */}
            <div className="border border-gray-300 shadow-sm p-5 rounded-xl flex flex-col h-full bg-white">
              <h3 className="font-semibold mb-4 text-blue-700 text-lg">
                Dr. Amit Sharma’s Specialities
              </h3>
              <ul className="space-y-2 list-disc pl-5 text-sm text-gray-800">
                <li>Arthroscopy & Sports Injuries</li>
                <li>Primary & Revision Knee & Hip Replacements</li>
                <li>Minimally Invasive Trauma Surgery</li>
                <li>Complex Orthopedic Trauma</li>
                <li>Hip Replacement Surgeory</li>
                <li>Sports Injury Management</li>
                <li>
                  <strong>Call:</strong>{" "}
                  <a
                    href="tel:+918750056560"
                    className="text-blue-600 underline"
                  >
                    +91 87500 56560
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:amit9851@yahoo.com"
                    className="text-blue-600 underline"
                  >
                    amit9851@yahoo.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Link
              to="/services"
              className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition"
              aria-label="View all orthopedic treatments by Dr. Amit Sharma"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <HomeCrawsel />
      <KneeComp />

      {/* Bottom CTA */}
      <section
        className="bg-purple-700 py-6 mt-12"
        aria-label="Appointment Call to Action"
      >
        <div className="w-full text-white px-4 md:px-10 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
          <p className="text-center md:text-left text-sm md:text-lg font-medium">
            Experiencing joint pain, fractures, or ligament issues? Trust Dr.
            Amit Sharma for personalized, world-class orthopedic care.
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-700 font-semibold px-5 py-2 rounded-full hover:bg-purple-100 transition"
            aria-label="Book an appointment with orthopedic expert Dr. Amit Sharma"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;
