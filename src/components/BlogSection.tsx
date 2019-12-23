import * as React from "react";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import { graphql, Link, StaticQuery } from "gatsby";

export default class BlogSection extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              limit: 1
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              totalCount
              edges {
                node {
                  id
                  frontmatter {
                    title
                    date(formatString: "MMM DD, YYYY")
                    excerpt
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div>
            <div
              css={css`
                margin: 0 auto;
                max-width: 500;
                padding: ${rhythm(2)};
                padding-top: ${rhythm(1.5)};
                padding-bottom: ${rhythm(5)};
                background-color: #FED766;
              `}
            >
              <h1 css={css`
                  text-align: center;
                `}> Recent Articles</h1>
              {data.allMarkdownRemark.edges.map(({ node }: { node: any }) => (
                <div key={node.id}>
                  <Link
                    to={node.fields.slug}
                    css={css`
                      text-decoration: none;
                      color: inherit;
                    `}
                  >
                    <h3
                      css={css`
                        margin-bottom: ${rhythm(0.5)};
                        text-decoration: underline;
                        font-style: italic;
                      `}
                    >
                      {node.frontmatter.title}
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p
                    css={css`
                    margin-top: ${rhythm(0.3)};
                  `}
                    >{node.frontmatter.excerpt}</p>
                  </Link>
                </div>
              ))}
              <Link
                to={`/blog`}
                css={css`
                    float: right;
                    display: inline-block;
                    height: auto;
                    width: 8em;
                    line-height: 4.0rem;
                    border-radius: 5em;
                    background:#1AAB8A;
                    color: #252a30;
                    white-space: nowrap;
                    font-size: 1.2rem;
                    font-weight: 700;
                    text-decoration: none;
                    text-align: center;
                    :hover {
                        opacity: 0.7;
                    }
      `}
              >
                All blogs ({data.allMarkdownRemark.totalCount})
    </Link>
            </div>
          </div>
        )}
      />
    );
  }
}
