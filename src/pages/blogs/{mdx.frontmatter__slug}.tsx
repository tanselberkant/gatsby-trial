import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../../components/seo/Seo';
import Layout from '../../components/layout/Layout';

interface BlogPostProps {
  data: any;
  children: React.ReactNode;
}

const BlogPost: React.FC<BlogPostProps> = (props) => {
  console.log(props);
  const { data, children } = props;

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = ({ data }: any) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;
