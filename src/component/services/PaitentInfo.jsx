import React from "react";
import { Helmet } from "react-helmet";
import { FaFilePdf } from "react-icons/fa6";
const info = [
  {
    title: "Knee Replacement",
    image: "/images/knee.webp",
    alt: "Total knee replacement surgery illustration",
    description:
      "Learn how total knee replacement can relieve chronic pain and improve mobility through modern orthopedic techniques.",
    // link: "https://en.wikipedia.org/wiki/Knee_replacement",
  },
  {
    title: "Hip Replacement",
    image: "/images/hip.webp",
    alt: "Hip joint replacement surgical procedure image",
    description:
      "Understand hip replacement surgery, its recovery process, and how it restores freedom of movement.",
    // link: "https://en.wikipedia.org/wiki/Hip_replacement",
  },
  {
    title: "ACL Reconstruction",
    image: "/images/aclpcl.webp",
    alt: "ACL reconstruction for sports knee injury recovery",
    description:
      "Find out how ACL reconstruction helps athletes and active individuals return to full function after injury.",
    // link: "https://en.wikipedia.org/wiki/Anterior_cruciate_ligament_reconstruction",
  },
  {
    title: "Shoulder Arthroscopy",
    image: "/images/paitent4.webp",
    alt: "Shoulder arthroscopy showing minimally invasive treatment",
    description:
      "Explore how minimally invasive shoulder arthroscopy treats rotator cuff tears and joint pain effectively.",
    // link: "https://en.wikipedia.org/wiki/Shoulder_problem",
  },
];

const PaitentInfo = () => {
  return (
    <>
   <Helmet>
  <title>Best Orthopedic Treatment In Indrapuram | Dr Amit Sharma</title>
  <meta
    name="description"
    content="Get the best orthopedic treatment in Ghaziabad with Dr. Amit Sharma. Expert in knee replacement, hip surgery, ACL reconstruction & shoulder arthroscopy."
  />
  <meta
    name="keywords"
    content="Best orthopedic treatment in Ghaziabad, Best orthopedic treatment in Indrapuram"
  />
  <meta name="googlebot" content="index, follow" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://dramitsharmaortho.com/patient-info" />

  {/* Structured Data for Patient Info Page */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Dr. Amit Sharma Orthopedic Clinic",
        "url": "https://dramitsharmaortho.com/patient-info",
        "logo": "https://dramitsharmaortho.com/images/dr-amit.webp",
        "image": "https://dramitsharmaortho.com/images/dr-amit.webp",
        "description": "Patient information and treatment options by Dr. Amit Sharma. Specializing in orthopedic care including joint replacements, ACL, fractures and sports injuries.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Indirapuram, Ghaziabad",
          "addressLocality": "Ghaziabad",
          "addressRegion": "UP",
          "postalCode": "201014",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-8826629486",
          "contactType": "paitent Care",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        },
        "medicalSpecialty": "Orthopedic",
        "sameAs": [
          "https://www.facebook.com/dramitsharmaortho",
          "https://www.instagram.com/dramitsharmaortho",
          "https://www.youtube.com/@dramitsharmaortho"
        ]
      }
    `}
  </script>
</Helmet>


      <main className="w-full bg-white">
        {/* Banner */}
        <section className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
          <img
            src="/images/paitentinfo.webp"
            alt="Educational showing orthopedic consultation"
            width={1920}
            height={500}
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center leading-tight drop-shadow">
              Best Orthopedic Treatment In Ghazibad
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Learn About Common Orthopedic Treatments
            </h2>
            <p className="mt-3 md:mt-4 text-white/90 text-base md:text-lg leading-relaxed">
              Explore our trusted resources to understand your condition and
              treatment options provided by{" "}
              <span className="font-semibold">Dr. Amit Sharma</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {info.map((item, idx) => (
              <article
                key={idx}
                className="flex flex-col md:flex-row gap-6 border-b pb-10"
                aria-labelledby={`info-title-${idx}`}
              >
                {/* Image */}
                <div className="w-full md:w-[320px] shrink-0">
                  <img
                    src={item.image}
                    alt={`Illustration of ${item.alt}`}
                    width={320}
                    height={240}
                    className="w-full h-full object-cover rounded-md"
                    loading="lazy"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <p
                    id={`info-title-${idx}`}
                    className="text-xl font-semibold text-gray-800 mb-2"
                  >
                    {item.title}
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {item.description}
                  </p>
                  {/* {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline mt-3 inline-flex items-center gap-2"
                    >
                      <FaFilePdf className="w-4 h-4" />
                      Read more about {item.title}
                    </a>
                  )} */}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default PaitentInfo;
