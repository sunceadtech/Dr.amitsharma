import React from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function YoutubeContent() {
  const videoData = [
    {
      url: "https://www.youtube.com/embed/FkfYYFNest8",
      title: "Understanding Frozen Shoulder",
      desc: "What causes frozen shoulder and how it's treated by orthopedic specialists.",
    },
    {
      url: "https://www.youtube.com/embed/yilQsIC8Ryk",
      title: "Treating Meniscus Tear",
      desc: "Minimally invasive arthroscopic solutions and aftercare tips.",
    },
    {
      url: "https://www.youtube.com/embed/ZCuWvhuk6a4",
      title: "Knee Replacement Explained",
      desc: "What to expect before, during, and after knee replacement surgery.",
    },
    {
      url: "https://www.youtube.com/embed/PNFFcErJBDk",
      title: "ACL Injury Management",
      desc: "From diagnosis to rehabilitation – how ACL injuries are treated.",
    },
    {
      url: "https://www.youtube.com/embed/K81JJcpskO4",
      title: "Avoiding Cricket Injuries",
      desc: "Sports safety tips from Dr. Amit Sharma to avoid injuries on the field.",
    },
    {
      url: "https://www.youtube.com/embed/XGQWKovfi6Q",
      title: "Running Myths Busted",
      desc: "Debunking common running myths with orthopedic insights.",
    },
  ];

  return (
    <>
      {/* Doctor Speaks Section */}
      <section
        className="bg-gray-100 py-16 px-4"
        aria-labelledby="doctor-speaks-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-10">
            <p
              id="doctor-speaks-heading"
              className="text-3xl font-bold text-gray-800 mb-2"
            >
              Orthopedic Video Guide: Treatments & Recovery Explained
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              Watch expert insights from Dr. Amit Sharma on joint health, sports
              injuries, and advanced orthopedic treatments.
            </p>
          </header>

          <div
            className="overflow-x-auto scrollbar-hide"
            role="region"
            aria-label="Orthopedic videos by Dr. Amit Sharma"
          >
            <div className="flex space-x-6 min-w-full px-2 sm:px-4">
              {videoData.map((video, index) => (
                <article
                  key={index}
                  className="min-w-[280px] sm:min-w-[320px] bg-white rounded-lg shadow-md border p-3"
                  aria-labelledby={`video-title-${index}`}
                >
                  <div className="aspect-video w-full mb-3 rounded-md overflow-hidden">
                    <LazyLoadComponent>
                      <iframe
                        src={video.url}
                        title={`Dr. Amit Sharma - ${video.title}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                      ></iframe>
                    </LazyLoadComponent>
                  </div>
                  <p
                    id={`video-title-${index}`}
                    className="font-semibold text-center text-sm text-purple-800"
                  >
                    {video.title}
                  </p>
                  <p className="text-center text-gray-600 text-sm">
                    {video.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Joint Health Section */}
      <section
        className="bg-gray-50 py-16 px-4 md:px-10"
        aria-labelledby="joint-health-heading"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image Left */}
          <div>
            <img
              src="/images/herobanner.webp"
              alt="Joint Health Illustration"
              className="rounded-xl shadow-lg w-full h-[450px] md:h-[500px] object-cover"
              loading="lazy"
            />
          </div>

          {/* Text Right */}
          <div className="px-4 md:px-6">
            <h2
              id="joint-health-heading"
              className="text-3xl md:text-4xl font-bold text-purple-800 mb-4"
            >
              Why Is Joint Health Important?
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4 text-justify">
              Healthy joints are the foundation of your body’s mobility and
              balance. Whether you're walking, climbing stairs, or simply
              standing up, joints play a crucial role in supporting these
              movements. Ignoring joint care can lead to discomfort, reduced
              range of motion, and in severe cases, long-term immobility.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4 text-justify">
              At <strong>Dr. Amit Sharma’s Orthopedic Clinic</strong>, we
              believe in proactive joint care. Our approach combines advanced
              orthopedic diagnostics, minimally invasive procedures, and
              personalized rehabilitation plans to ensure your joints remain
              strong and functional. We address conditions like arthritis,
              ligament tears, cartilage damage, and sports injuries with
              precision and care.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4 text-justify">
              Whether you're recovering from an injury, struggling with chronic
              joint pain, or planning a joint replacement, we’re here to support
              your journey toward pain-free movement. Our expert team
              prioritizes fast recovery, minimal downtime, and long-term
              mobility enhancement.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4 text-justify">
              Don't wait for pain to stop your routine. Early consultation and
              proper orthopedic care can prevent complex surgeries and restore
              your active lifestyle. Let us help you take the first step toward
              healthy, pain-free joints today.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-purple-900 mb-8">
            Our Specialized Orthopedic Services
          </h3>
          <div className="grid md:grid-cols-3 gap-6 px-4">
            {[
              "ACL Reconstruction",
              "Knee & Hip Replacements",
              "Sports Injury Treatment",
              "Osteoporosis Treatment",
              "Arthritis Treatment",
              "Minimally Invasive Trauma Surgery",
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white shadow rounded-lg p-5 text-center border border-purple-100"
              >
                <p className="text-purple-800 font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 bg-purple-900 w-full text-white rounded-lg px-6 md:px-10 py-10 shadow-lg max-w-8xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Why Choose Dr. Amit Sharma?
          </h3>
          <ul className="grid md:grid-cols-2 gap-8 list-disc list-inside text-purple-100 text-[15px] leading-relaxed">
            <li>
              <strong>24+ Years of Orthopedic Experience:</strong> Trusted by
              thousands across Delhi NCR with a proven track record in joint
              care and trauma surgery.
            </li>
            <li>
              <strong>50K+ Patients Treated:</strong> Successfully managed
              orthopedic cases ranging from sports injuries to complex joint
              replacements.
            </li>
            <li>
              <strong>Advanced Arthroscopy & Joint Replacement:</strong> Using
              minimally invasive techniques to reduce pain, speed recovery, and
              restore mobility.
            </li>
            <li>
              <strong>In-House Imaging & Diagnostics:</strong> State-of-the-art
              digital X-rays, MRI, and lab services ensure fast and accurate
              assessments.
            </li>
            <li>
              <strong>Patient-Centered Care:</strong> Compassionate,
              multilingual staff and a friendly environment where your comfort
              is our priority.
            </li>
            <li>
              <strong>Quick Appointments & Tailored Treatment:</strong>{" "}
              Personalized orthopedic plans, prompt scheduling, and continuous
              follow-up care.
            </li>
            <li>
              <strong>Expert in Sports Injuries:</strong> Dedicated
              rehabilitation plans to help athletes and active individuals
              return to peak performance safely.
            </li>
            <li>
              <strong>Transparent & Ethical Practice:</strong> Honest diagnosis,
              no unnecessary procedures, and a focus on long-term healing, not
              just short-term fixes.
            </li>
            <li>
              <strong>Modern Infrastructure:</strong> Comfortable waiting areas,
              easy access location in Ghaziabad, and hassle-free appointment
              systems.
            </li>
            <li>
              <strong>Recognized by Medical Institutions:</strong> Regularly
              invited for orthopedic conferences and surgical training workshops
              across India.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default YoutubeContent;
