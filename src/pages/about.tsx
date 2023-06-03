import * as React from 'react';
import Layout from '../components/layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';
StaticImage;

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <div className="w-full h-[400px] border-2 border-indigo-400">
        <StaticImage
          objectFit="contain"
          className="w-full h-full "
          alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
          src="../images/about.jpg"
        />
      </div>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Dont know what the hell is this" />
  </>
);
// Step 3: Export your component
export default AboutPage;
