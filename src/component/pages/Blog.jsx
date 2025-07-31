import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";
function Blog() {
  const blogs = [
    {
      title: "Is Your Knee Pain Getting Worse? Here’s What to Know",
      date: "08-Aug-2024",
      image: "/images/blog1.webp",
      alt: "Person holding knee in pain", // ✅ Alt tag
      excerpt:
        "Knee pain shouldn't be ignored. Learn about common causes, early symptoms, and when it’s time to see an orthopedic specialist.",
      link: "/service-detail/knee-replacement",
    },
    {
      title: "Top 5 Recovery Tips After Orthopedic Surgery",
      date: "18-Jul-2024",
      image: "/images/blog2.webp",
      alt: "Post-surgery recovery with physiotherapy", // ✅ Alt tag
      excerpt:
        "Recover faster and safer with these expert tips—covering physiotherapy, nutrition, rest, and follow-up care after joint surgery.",
      link: "/service-detail/minimal-invasive-complex-trauma-surgery",
    },
    {
      title: "Preventing Sports Injuries: A Guide for Active Adults",
      date: "01-Jun-2024",
      image: "/images/blog3.webp",
      alt: "Athlete stretching before workout", // ✅ Alt tag
      excerpt:
        "Stay in the game longer! Discover how to protect your joints, strengthen muscles, and avoid common sports injuries at any age.",
      link: "/service-detail/sports-injury",
    },
    {
      title: "Are Health Screenings Really That Important?",
      date: "27-May-2024",
      image: "/images/blog5.webp",
      alt: "Doctor discussing health reports with patient", // ✅ Alt tag
      excerpt:
        "Regular health screenings can detect issues early and save lives. Learn which ones matter most for your age and health goals.",
      link: "/about",
    },
    {
      title: "How Part-Time Physicians Are Changing Healthcare",
      date: "09-May-2024",
      image: "/images/blog6.webp",
      alt: "Smiling part-time doctor in clinic", // ✅ Alt tag
      excerpt:
        "The rise of part-time medical professionals is reshaping patient care, work-life balance, and accessibility in healthcare.",
      link: "/about",
    },
    {
      title: "Orthopedic Success Story: A Journey to Pain-Free Living",
      date: "15-Apr-2024",
      image: "/images/blog8.webp",
      alt: "Happy patient walking after joint recovery", // ✅ Alt tag
      excerpt:
        "Follow the inspiring recovery of a patient who overcame chronic joint pain through expert orthopedic care and rehabilitation.",
      link: "/service-detail/arthritis",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best Orthopedic Surgeon Blogs In Ghaziabad | Best Orthopedic Surgeon
          Blogs In Indrapuram
        </title>
        <meta
          name="description"
          content="Best Orthopedic Surgeon Blogs In Ghaziabad, joint replacement, knee Replacement, and latest updates from Dr. Amit Sharma's orthopedic practice."
        />
        <meta
          name="keywords"
          content="Best Orthopedic Surgeon Blogs In Ghaziabad,Best Orthopedic Surgeon
          Blogs In Indrapuram"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://dramitsharmaortho.com/blog" />
        <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dr. Amit Sharma",
        "jobTitle": "Orthopedic Surgeon",
        "image": "https://dramitsharmaortho.com/images/dr-amit.webp",
        "description": "Leading orthopedic and joint replacement surgeon based in Ghaziabad & Indirapuram.",
        "affiliation": {
          "@type": "MedicalOrganization",
          "name": "DrAmitSharmaOrtho Clinic"
        },
        "url": "https://dramitsharmaortho.com/blog",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Indirapuram, Ghaziabad",
          "addressLocality": "Ghaziabad",
          "addressRegion": "UP",
          "postalCode": "201014",
          "addressCountry": "IN"
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
      {/* Hero Banner */}
      <div
        className="relative w-full h-[500px] md:h-[500px] overflow-hidden"
        aria-label="Blog Hero Section"
      >
        <img
          src="/images/blog.webp"
          alt="Orthopedic Blog by Dr. Amit Sharma"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          width="1920"
          height="500"
          decoding="async"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-6 md:px-20">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Best Orthopedic Blogs
            </h1>
            <p className="text-white text-lg md:text-xl mb-6">
              Stay informed with expert insights, recovery tips, and the latest
              updates in orthopedic care and sports injury treatment.
            </p>
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-white">
                <li>
                  <Link
                    to="/"
                    className="hover:underline"
                    aria-label="Go to homepage"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li aria-current="page">
                  <span className="font-semibold">Blogs</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="py-12 bg-gray-50" aria-label="Latest Blog Articles">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">
            Latest Articles from Dr. Amit Sharma
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                itemScope
                itemType="http://schema.org/BlogPosting"
              >
                <header className="relative">
                  <img
                    src={blog.image}
                    alt={`Illustration for: ${blog.alt}`}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                    width="400"
                    height="208"
                    itemProp="image"
                  />
                  <time
                    className="absolute bottom-0 right-0 bg-purple-700 text-white px-3 py-1 text-sm"
                    itemProp="datePublished"
                    dateTime={new Date(blog.date).toISOString()}
                  >
                    {blog.date}
                  </time>
                </header>

                <div className="p-4">
                  <h3
                    className="text-lg font-semibold text-slate-800 mb-2"
                    itemProp="headline"
                  >
                    <Link
                      to={blog.link}
                      aria-label={`Full article: ${blog.title}`}
                      itemProp="url"
                    >
                      {blog.title}
                    </Link>
                  </h3>

                  <p
                    className="text-sm text-gray-600 mb-3"
                    itemProp="description"
                  >
                    {blog.excerpt}
                  </p>

                  <Link
                    to={blog.link}
                    className="text-purple-600 hover:underline text-sm font-medium"
                    aria-label={`Explore more about: ${blog.title}`}
                  >
                    Explore more about "{blog.title}"
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
