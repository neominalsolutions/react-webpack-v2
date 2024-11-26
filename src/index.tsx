import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import img from './assets/img/logo.png';
import * as styles from './index.module.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sitelayout from './layouts/site.layout';
import Adminlayout from './layouts/admin.layout';
import HomePage from './pages/site/home.page';
import AboutPage from './pages/site/about.page';
import LoginPage from './pages/site/login.page';
import UserDetailPage from './pages/admin/user.detail.page';
import UserPage from './pages/admin/user.page';
import UsersPage from './pages/admin/user.page';

const router = createBrowserRouter([
	{
		path: '',
		Component: Sitelayout,
		children: [
			{
				path: '',
				Component: HomePage,
				// element: <>Home Page</>,
			},
			{
				path: 'about',
				Component: AboutPage,
				// element: <>About Page</>,
			},
			{
				path: 'login',
				Component: LoginPage,
				// element: <>About Page</>,
			},
		],
	},
	{
		path: 'admin',
		Component: Adminlayout,
		children: [
			{
				path: 'users', // /admin/users
				Component: UsersPage,
			},
			{
				path: 'users/:id/:name', // /admin/users/1
				Component: UserDetailPage,
			},
		],
	},
	{
		path: '*', // eşleşmeyen pathlerin bir component üzerinden gösterilmesi için en aşağıdaki node yazarız.
		element: <>Sayfa Bulunamadı</>,
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(<RouterProvider router={router}></RouterProvider>);
