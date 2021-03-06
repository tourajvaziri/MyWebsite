import React from "react";
import { css } from "@emotion/core";
import { Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";
import { Layout } from "../components/layout";

// Blog page
interface Props {
  data: any;
}

export default class Blog extends React.PureComponent<Props> {
  public render() {
    return (
      <Layout>
        <div>
          <h1
            css={css`
              display: inline-block;
              border-bottom: 1px solid;
            `}
          >
            My Blogs
          </h1>
          <h4>{this.props.data.allMarkdownRemark.totalCount} Posts</h4>
          {this.props.data.allMarkdownRemark.edges.map(
            ({ node }: { node: any }) => (
              <div key={node.id}
              css={css`
              padding-top: ${rhythm(2)};
            `}>
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
            )
          )}
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
`;
