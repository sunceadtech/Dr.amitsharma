import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function MinimalInvaise() {
  return (
    <>
      <Helmet>
        <title>
          Best Minimally Invasive Complex Trauma Surgery in Ghaziabad | Dr. Amit
          Sharma
        </title>
        <meta
          name="description"
          content="Dr. Amit Sharma is the best orthopedic surgeon in Ghaziabad for minimally invasive complex trauma surgery. Experience faster recovery and expert surgical care with small incisions."
        />
        <meta
          name="keywords"
          content="Best Minimally Invasive Complex Trauma Surgery in Ghaziabad, Best Minimally Invasive Complex Trauma Surgery in Indirapuram"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link
          rel="canonical"
          href="https://dramitsharmaortho.com/minimal-invasive-complex-trauma-surgery"
        />
        {/* JSON-LD Schema.org Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Dr. Amit Sharma Orthopedic Clinic",
        "url": "https://dramitsharmaortho.com/minimal-invasive-complex-trauma-surgery",
        "image": "https://dramitsharmaortho.com/images/heroimage.webp",
        "description": "Dr. Amit Sharma specializes in minimally invasive complex trauma surgeries in Ghaziabad. Trusted orthopedic care for faster healing and better outcomes.",
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
        "medicalSpecialty": "Orthopedic",
        "founder": {
          "@type": "Person",
          "name": "Dr. Amit Sharma"
        }
      }
    `}
        </script>
      </Helmet>

      {/* Banner Section */}
      <section
        className="relative w-full h-[500px] overflow-hidden"
        role="banner"
      >
        <img
          src="/images/service.webp"
          alt="Minimally Invasive Surgery image"
          className="absolute inset-0 w-full h-full object-cover"
          width="1600"
          height="500"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="w-full px-4 sm:px-8 lg:px-24 xl:px-32 max-w-7xl mx-auto text-center md:text-left">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
              Best Minimally Invasive Complex Trauma Surgery in Ghaziabad
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="flex flex-wrap justify-center md:justify-start items-center gap-1 sm:gap-2 text-xs sm:text-sm text-white uppercase">
                <li>
                  <Link
                    to="/"
                    className="hover:underline font-bold text-white/90"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:underline font-bold text-white/90"
                  >
                    Our Services
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li
                  aria-current="page"
                  className="text-white/80 font-bold text-sm sm:text-base"
                >
                  Minimally Invasive Surgeries
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-10 bg-white">
        <div className="max-w-7xl mx-auto lg:flex lg:gap-8 px-2 sm:px-4">
          {/* Article */}
          <article className="lg:w-3/4 w-full">
            <figure className="rounded overflow-hidden shadow-md">
              <img
                src="/images/minimal.webp"
                alt="Minimally Invasive Surgery in Orthopedics"
                className="w-full object-cover"
                loading="lazy"
                decoding="async"
                width="1200"
                height="650"
              />
            </figure>

            <section className="pt-6 space-y-6 text-gray-700 text-[15px]">
              <h2 className="text-3xl font-bold">
                Advancements in Minimally Invasive Orthopedic Trauma Surgery
              </h2>
              <p>
                Minimally invasive surgery (MIS) has transformed orthopedic
                trauma care by allowing complex procedures to be performed
                through small incisions with reduced tissue disruption. This
                leads to faster recovery, less pain, shorter hospital stays, and
                improved cosmetic results compared to traditional open
                surgeries.
              </p>

              <h3 className="text-2xl font-semibold">Key Benefits</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Smaller incisions and minimal muscle damage.</li>
                <li>Faster post-operative recovery and early mobilization.</li>
                <li>Reduced risk of infection and blood loss.</li>
                <li>Less post-operative pain and scarring.</li>
              </ul>

              <h3 className="text-2xl font-semibold">
                Common Procedures Performed Using MIS Techniques
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Intramedullary nailing for fractures of long bones (femur,
                  tibia).
                </li>
                <li>Plating of fractures using percutaneous methods.</li>
                <li>Arthroscopic-assisted fracture fixation.</li>
                <li>Minimally invasive joint preservation surgeries.</li>
              </ul>

              <p className="text-2xl font-semibold">Ideal Candidates for MIS</p>
              <p>
                Patients with traumatic injuries that allow stable fixation
                using advanced techniques and instrumentation. MIS is especially
                beneficial for elderly patients or those with underlying
                conditions that make open surgery riskier.
              </p>

              <p className="text-2xl font-semibold">
                Postoperative Care and Recovery
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Early physiotherapy to regain mobility and function.</li>
                <li>Pain management with minimal use of opioids.</li>
                <li>Regular follow-ups for implant monitoring and healing.</li>
              </ul>

              <hr className="my-6" />

              <div className="bg-blue-50 p-6 rounded text-center">
                <p className="text-xl font-bold mb-2">
                  Ready for Advanced Orthopedic Care?
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                  aria-label="Book appointment with Dr. Amit Sharma"
                >
                  Book an Appointment with Dr. Amit Sharma
                </Link>
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/4 w-full mt-10 lg:mt-0 space-y-6 mb-6">
            {/* Services List */}
            <div className="bg-purple-700 text-white p-4 min-h-[400px] md:min-h-[550px] rounded shadow-sm">
              <p className="text-lg font-semibold text-slate-100 mb-4 md:text-3xl text-center">
                Our Services
              </p>
              <ul className="text-sm md:text-md font-bold divide-y divide-purple-500 text-center">
                {[
                  { path: "/services", label: "View All Orthopedic Services" },
                  {
                    path: "/knee-replacement",
                    label: "Total Knee Replacement",
                  },
                  {
                    path: "/hip-replacement",
                    label: "Hip Replacement Surgery",
                  },
                  {
                    path: "/arthroscopy",
                    label: "Diagnostic & Surgical Arthroscopy",
                  },
                  {
                    path: "/acl-reconstruction",
                    label: "ACL Ligament Reconstruction",
                  },
                  {
                    path: "/sports-injury",
                    label: "Sports Injury Treatment",
                  },
                  {
                    path: "/arthritis",
                    label: "Arthritis Management",
                  },
                  {
                    path: "/osteoporosis",
                    label: "Osteoporosis Treatment",
                  },
                  {
                    path: "/minimal-invasive-complex-trauma-surgery",
                    label: "Minimally Invasive Trauma Surgery",
                  },
                ].map((item, i) => (
                  <li key={i} className="py-3">
                    <Link
                      to={item.path}
                      className="hover:underline inline-block w-full"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* OPD Timings */}
            <div className="bg-white text-gray-800 min-h-[350px] p-4 rounded shadow-sm border">
              <p className="text-lg font-semibold mb-3">OPD TIMINGS</p>
              <ul className="text-sm space-y-2" aria-label="Clinic Timings">
                <li className="flex justify-between">
                  <span>MON to SAT</span>
                  <span>9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>MON to SAT</span>
                  <span>5:00 PM - 7:00 PM</span>
                </li>
                <li className="text-center text-xs mt-2">
                  <p className="font-medium">
                    Yashoda Super Speciality Hospital
                  </p>
                  Ghaziabad <br />
                  Call @{" "}
                  <p className="text-blue-600 hover:underline">8750056560</p>
                </li>
                <li className="flex justify-between mt-4">
                  <span>MON to SAT</span>
                  <span>7:00 PM - 9:00 PM</span>
                </li>
                <li className="text-center text-xs mt-2">
                  <p className="font-medium">City Clinic, Krishna Nagar</p>
                  (Opp. Swarn Cinema, near Surya Hospital), Ghaziabad <br />
                  Call @{" "}
                  <p className="text-blue-600 hover:underline">8826629486</p>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

export default MinimalInvaise;
