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
                    date(formatString: "DD MMMM, YYYY")
                  }
                  fields {
                    slug
                  }
                  excerpt
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
                background-color: #5cba91;
              `}
            >
            <h1 css={css`
                  text-align: center;
                `}> Latest Blog</h1>
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
                        margin-bottom: ${rhythm(1 / 4)};
                      `}
                    >
                      {node.frontmatter.title}{" "}
                      <span
                        css={css`
                          color: #bbb;
                        `}
                      >
                        — {node.frontmatter.date}
                      </span>
                    </h3>
                    <p>{node.excerpt}</p>
                  </Link>
                </div>
              ))}
         <Link
            to={`/blog`}
            css={css`
        float: right;
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
