import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Sidebar from '../Sidebar';
import { useState } from 'react';

const Layout = ({
  children,
  title,
  description,
  twitterHandle,
  currentURL,
  previewImage,
  siteName,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={description} />
        {/* Twitter */}
        <meta name='twitter:card' content='summary' key='twCard' />
        <meta name='twitter:creator' content={twitterHandle} key='twHandle' />

        {/* Open Graph */}
        <meta property='og:url' content={currentURL} key='ogUrl' />
        <meta property='og:image' content={previewImage} key='ogImage' />
        <meta property='og:site_name' content={siteName} key='ogSiteName' />
        <meta property='og:title' content={title} key='ogTitle' />
        <meta property='og:description' content={description} key='ogDesc' />
        <meta property='og:type' content={type} key='ogType' />
      </Head>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
