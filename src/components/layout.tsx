import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

import { rhythm } from "../utils/typography";
import Footer from "../pages/Footer";

interface Props {
  children: any;
}

// The component defining reusable parts of the pages
export class Layout extends React.PureComponent<Props>  {
  public render() {
    return (
      <div>
        <div
          css={css`
      margin: 0 auto;
      max-width: 1300px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
        >
          <Link to={`/blog`}>
            <h3
              css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
            >
              Blogs
      </h3>
          </Link>
          <Link
            to={`/`}
            css={css`
        float: right;
        text-decoration: none;
        color: inherit;
      `}
          >
            Home
    </Link>
          {this.props.children}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
