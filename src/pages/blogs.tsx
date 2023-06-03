import * as React from 'react';
import Layout from '../components/layout/Layout';
import Seo from '../components/seo/Seo';
import { graphql } from 'gatsby';

interface BlogsPageProps {
  data: {
    allFile: {
      nodes: {
        name: string;
      }[];
    };
  };
}

const BlogsPage: React.FC<BlogsPageProps> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((post: any) => (
          <li className="  bg-purple-300 w-full my-2" key={post.name}>
            {post.name}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogsPage;

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;
