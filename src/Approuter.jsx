import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import HomeWrapper from "./component/home/HomeWrapper";
import About from "./component/pages/About";
import Blog from "./component/pages/Blog";
import Contact from "./component/pages/Contact";
import ScrollTop from "./component/pages/ScrollTop";
import Testimonial from "./component/services/Testimonial";
import PaitentInfo from "./component/services/PaitentInfo";
import Knee from "./component/services/Knee";
import HipReplacement from "./component/services/HipReplacement";
import Arthroscopy from "./component/services/Arthroscopy";
import AclandPcl from "./component/services/AclandPcl";
import SportsInjury from "./component/services/SportsInjury";
import Arthritis from "./component/services/Arthritis";
import Osteoprosis from "./component/services/Osteoprosis";
import MinimalInvaise from "./component/services/MinimalInvaise";
import NotFound from "./component/footer/NotFound";
import Services from "./component/services/Services";
import ThankYou from "./component/pages/ThankYou";
const Approuter = () => {
  return (
    <>
      <div>
        <Navbar />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/patientinfo" element={<PaitentInfo />} />
          <Route path="/knee-replacement" element={<Knee />} />
          <Route
            path="/hip-replacement"
            element={<HipReplacement />}
          />
          <Route path="/arthroscopy" element={<Arthroscopy />} />
          <Route
            path="/acl-reconstruction"
            element={<AclandPcl />}
          />
          <Route
            path="/sports-injury"
            element={<SportsInjury />}
          />
          <Route path="/arthritis" element={<Arthritis />} />
          <Route
            path="/osteoporosis"
            element={<Osteoprosis />}
          />
          <Route
            path="/minimal-invasive-complex-trauma-surgery"
            element={<MinimalInvaise />}
          />
          <Route path="/service" element={<Services />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default Approuter;
