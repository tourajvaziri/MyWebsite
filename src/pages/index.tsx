import * as React from "react";
import Home from "./Home";
import Footer from "./Footer";
import Resume from "./Resume";
import Projects from "./Projects";
const Helmet = require("react-helmet").default;
import { graphql } from "gatsby";

const IndexPage = ( {data} : { data: any} ) => (
  <div className="container">
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title}</title>
      <link rel="canonical" href="http://www.tourajvaziri.info" />
    </Helmet>
    <Home />
    <Projects />
    <Resume />
    <Footer />
  </div>
);

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`