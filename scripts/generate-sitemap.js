import { writeFile } from "fs/promises";
import { SitemapStream, streamToPromise } from "sitemap";

// Set your domain
const sitemap = new SitemapStream({ hostname: "https://dramitsharmaortho.com" });

// Static top-level pages
sitemap.write({ url: "/", changefreq: "weekly", priority: 1.0 });
sitemap.write({ url: "/about", changefreq: "monthly", priority: 0.8 });
sitemap.write({ url: "/contact", changefreq: "monthly", priority: 0.8 });
sitemap.write({ url: "/blog", changefreq: "weekly", priority: 0.8 });

// Orthopedic Treatments
sitemap.write({ url: "/service-detail/knee-replacement", changefreq: "monthly", priority: 0.9 });
sitemap.write({ url: "/service-detail/hip-replacement", changefreq: "monthly", priority: 0.9 });
sitemap.write({ url: "/service-detail/arthroscopy", changefreq: "monthly", priority: 0.9 });
sitemap.write({ url: "/service-detail/acl-and-pcl-reconstruction", changefreq: "monthly", priority: 0.9 });
sitemap.write({ url: "/service-detail/sports-injury", changefreq: "monthly", priority: 0.9 });
sitemap.write({ url: "/service-detail/arthritis", changefreq: "monthly", priority: 0.9 });
sitemap.write({ url: "/service-detail/osteoporosis", changefreq: "monthly", priority: 0.9 });
sitemap.write({ url: "/service-detail/minimal-invasive-complex-trauma-surgery", changefreq: "monthly", priority: 0.9 });

// Patient Resources
sitemap.write({ url: "/testimonial", changefreq: "monthly", priority: 0.8 });
sitemap.write({ url: "/patientinfo", changefreq: "monthly", priority: 0.8 });

sitemap.end();

// Save the sitemap file
streamToPromise(sitemap)
  .then((data) => writeFile("public/sitemap.xml", data.toString()))
  .then(() => {
    console.log("✅ Sitemap generated for Dr. Amit Sharma's website!");
  })
  .catch(console.error);
