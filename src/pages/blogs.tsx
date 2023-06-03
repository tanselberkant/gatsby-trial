import * as React from 'react';
import Layout from '../components/layout/Layout';
import Seo from '../components/seo/Seo';
import { graphql } from 'gatsby';

interface BlogsPageProps {
  data: {
    allMdx: {
      nodes: {
        frontmatter: {
          date: string;
          title: string;
          slug: string;
        };
        id: string;
        excerpt: string;
      }[];
    };
  };
}

const BlogsPage: React.FC<BlogsPageProps> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id} className="my-4 border-2 border-purple-400 px-2">
          <div className="flex items-center">
            <h2 className="font-bold text-lg">{node.frontmatter.title}</h2>
            <p className="ml-2">Posted: {node.frontmatter.date}</p>
          </div>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogsPage;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;
