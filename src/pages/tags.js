import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/layout';

export default function TagsRoute(props) {
  const {
    data: {
      site: {
        siteMetadata: {
          title,
        },
      },
      allMarkdownRemark: { group },
    },
  } = props;
  return (
    <Layout>
      <Helmet>
        <title>{`All Tags - ${title}`}</title>
      </Helmet>
      <main>
        <h1>Tags</h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue}
                {' '}
                (
                {tag.totalCount}
                )
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { type: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
