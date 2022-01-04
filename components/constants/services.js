import React from 'react';
import { FaCode, FaSearchLocation, FaAndroid } from 'react-icons/fa';
const services = [
  {
    id: 1,
    icon: <FaCode className='service-icon' />,
    title: 'web development',
    text: `Clean, modern designs - optimized for performance, search engines, and converting users to customers.A responsive design makes your website accessible to all users, regardless of their device.`,
  },
  {
    id: 2,
    icon: <FaSearchLocation className='service-icon' />,
    title: 'SEO',
    text: `I follow white hat, ethic and result in oriental techniques to bring a website in the ranking. Search Engine Optimization work takes time and long-term process so please send me a message before ordering this gig so that I can explain what is the S.E.O work process!!`,
  },
  {
    id: 3,
    icon: <FaAndroid className='service-icon' />,
    title: 'mobile development',
    text: `If you are looking for an amazing, professional & responsive App Development to increase your business - you're at the right spot.`,
  },
];

export default services;
