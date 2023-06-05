import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../../components/seo/Seo';
import Layout from '../../components/layout/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

interface BlogPostProps {
  data: any;
  children: React.ReactNode;
}

const BlogPost: React.FC<BlogPostProps> = (props) => {
  console.log(props);
  const { data, children } = props;

  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image!} alt={data.mdx.frontmatter.hero_image_alt} />

      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: any) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;
