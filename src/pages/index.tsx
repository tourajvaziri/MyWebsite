import * as React from "react";
import Home from "./Home";
import Footer from "./Footer";
import Resume from "./Resume";
import Projects from "./Projects";
const Helmet = require("react-helmet").default;

const IndexPage = () => (
  <div className="container">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Touraj Vaziri | Full Stack Developer</title>
      <link rel="canonical" href="http://www.tourajvaziri.info" />
    </Helmet>
    <Home />
    <Projects />
    <Resume />
    <Footer />
  </div>
);

export default IndexPage;
