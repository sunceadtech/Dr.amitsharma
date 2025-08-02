import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const services = [
  {
    title: "Knee Replacement",
    image: "/images/knee.webp",
    alt: "Knee replacement surgery service",
    link: "/knee-replacement",
    description:
      "Advanced knee joint replacement for arthritis and injury-related pain relief.",
  },
  {
    title: "Hip Replacement",
    image: "/images/hip.webp",
    alt: "Hip replacement orthopedic service",
    link: "/hip-replacement",
    description:
      "Restore mobility and eliminate chronic hip pain with expert hip surgery.",
  },
  {
    title: "ACL Surgery",
    image: "/images/aclpcl.webp",
    alt: "ACL ligament surgery Ghaziabad",
    link: "/acl-surgery",
    description:
      "Minimally invasive ACL reconstruction to treat torn ligaments effectively.",
  },
  {
    title: "Arthroscopy",
    image: "/images/arthroscopy.webp",
    alt: "Arthroscopy procedure treatment",
    link: "/arthroscopy",
    description:
      "Quick recovery joint surgery for sports injuries and ligament issues.",
  },
  {
    title: "Fracture Treatment",
    image: "/images/minimal.webp",
    alt: "Fracture treatment by Dr. Amit Sharma",
    link: "/fracture-treatment",
    description:
      "Precise fracture management and bone healing using modern techniques.",
  },
  {
    title: "Sports Injury",
    image: "/images/sportsinjury.webp",
    alt: "Sports injury specialist orthopedic",
    link: "/sports-injury",
    description:
      "Specialized treatment for ligament tears, dislocations, and athlete recovery.",
  },
];

function Services() {
  return (
    <>
      <Helmet>
        <title>Best Orthopedic Services in Ghaziabad | Dr. Amit Sharma</title>
        <meta
          name="description"
          content="Explore specialized orthopedic services by Dr. Amit Sharma in Ghaziabad including knee replacement, hip surgery, ACL repair, arthritis care, and sports injury treatment."
        />
        <meta
          name="keywords"
          content="Best Orthopedic Services in Ghaziabad, Best Orthopedic Service In Indrapuram"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://dramitsharmaortho.com/services" />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Dr. Amit Sharma Orthopedic Clinic",
        "image": "https://dramitsharmaortho.com/images/heroimage.webp",
        "description": "Explore advanced orthopedic treatments in Ghaziabad including knee, hip, ACL, and sports injury care by Dr. Amit Sharma.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Indirapuram, Ghaziabad",
          "addressLocality": "Ghaziabad",
          "addressRegion": "UP",
          "postalCode": "201014",
          "addressCountry": "IN"
        },
        "openingHours": "Mo-Sa 10:00-19:00",
        "telephone": "+91-8750056560",
        "url": "https://dramitsharmaortho.com/services",
        "medicalSpecialty": "Orthopedic",
        "founder": {
          "@type": "Person",
          "name": "Dr. Amit Sharma",
          "jobTitle": "Orthopedic Surgeon"
        },
        "sameAs": [
          "https://www.facebook.com/dramitsharmaortho",
          "https://www.instagram.com/dramitsharmaortho",
          "https://www.youtube.com/@dramitsharmaortho"
        ]
      }
    `}
        </script>
      </Helmet>
      <main>
        {/* Top Banner */}
        <section
          className="relative w-full h-[250px] md:h-[400px] overflow-hidden"
          aria-label="Orthopedic Services"
        >
          <img
            src="/images/main.webp"
            alt="Orthopedic services banner"
            width="1920"
            height="500"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
              Best Orthopedic Services in Ghaziabad
            </h1>
          </div>
        </section>

        {/* Intro Text for SEO */}
        <section className="px-4 py-8 md:py-12 max-w-5xl mx-auto text-center">
          <p className="text-lg text-gray-700">
            At <strong>Dr. Amit Sharma Orthopedic Clinic</strong>, we offer
            advanced orthopedic treatments including{" "}
            <strong>knee replacement, hip surgery, arthroscopy</strong>, and
            specialized <strong>ACL and fracture care</strong>. We are committed
            to providing the best bone and joint care in{" "}
            <strong>Ghaziabad</strong>.
          </p>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 pb-12 max-w-6xl mx-auto">
          {services.map((service) => (
            <Link
              to={service.link}
              key={service.title}
              className="group border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300 bg-white"
            >
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy"
                width="400"
                height="300"
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {service.title}
                  </h2>
                  <ChevronRight className="text-blue-500" />
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </section>
        <section className="px-4 pb-12 max-w-5xl mx-auto text-gray-700 text-base leading-relaxed">
          <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
            Expert Treatment for Bone, Joint & Muscle Conditions
          </h2>
          <p className="mb-4">
            Dr. Amit Sharma offers specialized care for a wide range of
            orthopedic conditions using the latest medical techniques and
            patient-first approach. From joint preservation to advanced surgical
            solutions, every treatment is designed to restore mobility, reduce
            pain, and improve your quality of life.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
            🔍 Arthroscopy – Minimally Invasive Joint Surgery
          </h3>
          <p className="mb-4">
            Arthroscopy is a modern, less invasive procedure used to diagnose
            and treat joint problems, especially in the knee, shoulder, elbow,
            and ankle. Using a small camera and instruments, we treat torn
            ligaments, cartilage damage, and other joint issues with faster
            recovery and minimal pain. It's ideal for sports injuries and
            early-stage joint degeneration.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
            🦴 Arthritis Management – Regain Joint Comfort
          </h3>
          <p className="mb-4">
            Arthritis causes joint inflammation and stiffness that affects daily
            movement. We treat both <strong>osteoarthritis</strong> (wear and
            tear of cartilage) and <strong>rheumatoid arthritis</strong>{" "}
            (autoimmune condition) with a combination of medications,
            physiotherapy, lifestyle changes, and joint replacement surgery when
            needed.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
            💪 Osteoporosis Treatment – Strengthen Your Bones
          </h3>
          <p className="mb-4">
            Osteoporosis leads to brittle and weak bones, increasing the risk of
            fractures. At our clinic, we assess your bone density and provide
            personalized treatment plans including calcium & vitamin D
            supplements, bone-strengthening medications, and exercises to
            improve balance and bone health, especially in elderly patients.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
            ⚽ Sports Injury Care – Get Back in Action
          </h3>
          <p className="mb-4">
            Whether you're an athlete or a fitness enthusiast, sports injuries
            like ligament tears, muscle strains, and dislocations can disrupt
            your routine. We offer expert diagnosis, minimally invasive
            treatments like arthroscopy, and tailored rehabilitation plans to
            help you recover quickly and return to your sport stronger.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
            🔧 Personalized Recovery Plans
          </h3>
          <p>
            Every patient is different. That’s why Dr. Amit Sharma creates
            customized treatment plans based on your age, lifestyle, activity
            level, and medical history. From conservative therapy to surgical
            intervention, we aim for long-term healing and pain-free living.
          </p>
        </section>

        {/* Internal Link Boosting */}
        <section className="text-center px-4 pb-16">
          <div className="max-w-xl mx-auto bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-base text-gray-700 leading-relaxed">
              Looking for a trusted orthopedic surgeon? Visit our{" "}
              <Link
                to="/"
                className="text-blue-600 font-medium underline hover:text-blue-800 transition"
              >
                homepage
              </Link>{" "}
              or learn more{" "}
              <Link
                to="/about"
                className="text-blue-600 font-medium underline hover:text-blue-800 transition"
              >
                about Dr. Amit Sharma
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Services;
