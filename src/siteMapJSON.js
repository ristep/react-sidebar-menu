import React from 'react';
import { FaPizzaSlice, FaUsers } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { ImUsers } from "react-icons/im";
import { VscInfo } from "react-icons/vsc";

import Home from './pages/home';
import About from './pages/about';
import Contacts  from './pages/contacts';
import Blog from './pages/blog';
import Foods from './pages/foods';

export const siteMapJSON = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome />,
    exact: true,
    component: Home
  },
  {
    title: 'Foods',
    path: '/foods',
    icon: <FaPizzaSlice />,
    component: Foods
  },
  {
    title: 'Contcts',
    path: '/contacts',
    icon: <FaUsers />,
    component: Contacts
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: <ImUsers />,
    component: Blog 
  },
  {
    title: 'About',
    path: '/about',
    icon: <VscInfo />,
    component: About 
  },
  
];
