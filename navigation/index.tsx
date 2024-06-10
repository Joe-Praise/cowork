/* write all conatants here e.g  links or array to be looped
const navLinks = [
 {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
]

*/

import { createBrowserRouter } from 'react-router-dom';
// import Entry from '../src/pages';
import Landing from '../src/pages/landingPage';
import About from '../src/pages/about';
import Pricing from '../src/pages/pricing';
import Contact from '../src/pages/contact';
import Blog from '../src/pages/blog';

// export const navLinks = [
// 	{
// 		route: '/about',
// 		label: 'About',
// 	},
// 	{
// 		route: '/pricing',
// 		label: 'Pricing',
// 	},
// 	{
// 		route: '/blog',
// 		label: 'Blog',
// 	},
// 	{
// 		route: '/contact',
// 		label: 'Contact',
// 	},
// 	{
// 		route: '/login',
// 		label: 'Login',
// 	},
// 	{
// 		route: '/sign-up',
// 		label: 'Sign up',
// 	},
// ];

export const routes = {
	// entry: {
	// 	path: '/',
	// },
	landing: {
		path: '/',
	},
	about: {
		path: '/about',
	},
	pricing: {
		path: '/pricing',
	},
	contact: {
		path: '/contact',
	},
	blog: {
		path: '/blog',
		entry: {
			path: '/blog',
		},
		singleBlog: {
			path: '/blog/:id',
		},
	},
};

export const router = createBrowserRouter([
	// {
	// 	path: '/',
	// 	element: <Entry />,
	// },
	{
		path: routes.landing.path,
		element: <Landing />,
	},
	{
		path: routes.about.path,
		element: <About />,
	},
	{
		path: routes.pricing.path,
		element: <Pricing />,
	},
	{
		path: routes.contact.path,
		element: <Contact />,
	},
	{
		path: routes.blog.path,
		element: <Blog />,
	},
]);
