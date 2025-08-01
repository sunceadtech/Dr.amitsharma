const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const sitemap = new SitemapStream({ hostname: "https://dramitsharmaortho.com" });

const writeStream = createWriteStream("./public/sitemap.xml");

sitemap.pipe(writeStream);

// Manually list your paths
[
  "/",
  "/about",
  "/contact",
  "/blog",
  "/knee-replacement",
  "/hip-replacement",
  "/arthroscopy",
  "/acl-and-pcl-reconstruction",
  "/sports-injury",
  "/arthritis",
  "/osteoporosis",
  "/minimal-invasive-complex-trauma-surgery",
  "/testimonial",
  "/patientinfo",
].forEach((url) => sitemap.write({ url, changefreq: "monthly", priority: 0.9 }));

sitemap.end();

