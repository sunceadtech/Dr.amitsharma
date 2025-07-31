import React from "react";
import { FaPlayCircle } from "react-icons/fa";

function TestimonialCards() {
  const testimonials = [
    {
      name: "Rahul Verma",
      image: "/images/testimonial1.webp",
      title: "Hip Replacement Surgery in Ghaziabad",
      description:
        "After struggling with intense hip pain for over a year, I chose Dr. Amit Sharma for my hip replacement. The surgery was a success — now I walk pain-free and feel younger again. Truly the best orthopedic surgeon in Ghaziabad!",
      video: "https://www.youtube.com/watch?v=FOIu2Dt1Wvw",
    },
    {
      name: "Sita Devi",
      image: "/images/testimonial2.webp",
      title: "Total Knee Replacement",
      description:
        "Years of knee stiffness had taken away my energy. Dr. Amit Sharma performed my knee replacement with such expertise that I feel active and mobile again. He’s a miracle worker for joint care in Ghaziabad.",
      video: "https://www.youtube.com/shorts/SsTBvblBpzA",
    },
    {
      name: "Anjali Verma",
      image: "/images/testimonial4.webp",
      title: "Spinal Disc Issue Treatment",
      description:
        "I suffered from a bulging disc and couldn’t sit for long hours. Dr. Amit’s spinal care plan brought me full relief. I’m back at work without back pain — highly recommended for anyone with spine issues.",
    },
    {
      name: "Priya Thakur",
      image: "/images/testimonial6.webp",
      title: "ACL Reconstruction Surgery",
      description:
        "After tearing my ACL during a tournament, I was worried about sports forever. Dr. Amit’s surgical skills brought me back to the badminton court within months. His team is world-class for sports injuries!",
    },
    {
      name: "Mr. Ramcena",
      image: "/images/testimonial7.webp",
      title: "International Orthopedic Patient Care",
      description:
        "I traveled from Nigeria for orthopedic treatment in India. Dr. Amit Sharma and his hospital staff offered outstanding care and guidance. The surgery and recovery were smooth and successful.",
    },
    {
      name: "Rekha Sharma",
      image: "/images/testimonial11.webp",
      title: "Shoulder Fracture Surgery",
      description:
        "A severe shoulder fracture made daily tasks painful. Dr. Amit’s precise orthopedic surgery restored my mobility. Within weeks, I could lift my arm fully again. Thank you for giving me my life back.",
    },
    {
      name: "Priya Tiwari",
      image: "/images/testimonial9.webp",
      title: "Elbow Joint Surgery",
      description:
        "I had lost movement in my elbow due to bone stiffness. Thanks to Dr. Amit Sharma, I regained full range of motion after surgery. His approach is modern and highly effective.",
    },
    {
      name: "Manju Kumari",
      image: "/images/testimonial10.webp",
      title: "Complex Fracture Recovery",
      description:
        "After a major accident, I had multiple fractures and limited hope. But Dr. Amit’s expert care and surgical precision helped me recover completely. I now walk and move confidently again.",
    },
  ];

  return (
    <section
      className="max-w-6xl mx-auto px-4 py-12"
      aria-label="Patient testimonials"
    >
      <div className="space-y-8">
        {testimonials.map((t, index) => (
          <article
            key={index}
            className="flex flex-col md:flex-row gap-6 pb-6 border-b border-gray-300"
            role="group"
            aria-labelledby={`testimonial-${index}-name`}
          >
            {/* Patient Image and Optional Video */}
            <div className="relative w-[160px] h-[160px] flex-shrink-0">
              <img
                src={t.image}
                alt={`Photo of ${t.name}`}
                className="w-full h-full object-cover rounded"
                loading="lazy"
                width="160"
                height="160"
              />
              {t.video && (
                <a
                  href={t.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${t.name}'s video about their ${t.title.toLowerCase()}`}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-4xl hover:text-purple-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <FaPlayCircle aria-hidden="true" />
                  <span className="sr-only">
                    Watch {t.name}'s video testimonial on {t.title}
                  </span>
                </a>
              )}
            </div>

            {/* Text Details */}
            <div>
              <h3
                id={`testimonial-${index}-name`}
                className="text-xl font-semibold text-gray-900"
              >
                {t.name}
              </h3>
              <p className="text-purple-600 font-bold mb-2">{t.title}</p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                {t.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TestimonialCards;

