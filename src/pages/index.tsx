import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>

      <div className="w-full h-[400px] border-2 border-indigo-400">
        <StaticImage
          objectFit="contain"
          className="w-full h-full "
          alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
