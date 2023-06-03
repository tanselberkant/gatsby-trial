import * as React from 'react';
import { Link } from 'gatsby';

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div className="w-[1000px] m-auto">
      <nav className="bg-black h-[80px]">
        <ul className="flex justify-center items-center my-auto h-full gap-4 text-white">
          <li className="hover:text-gray-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="text-4xl font-bold text-violet-700 my-2">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
