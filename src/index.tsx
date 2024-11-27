import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import img from './assets/img/logo.png';
import * as styles from './index.module.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Memoisationlayout from './layouts/memoisation.layout';
import ReactMemoPageSample from './pages/memoisation/react.memo.sample.page';
import UseRefPageSample from './pages/memoisation/useref.sample.page';

const Sitelayout = lazy(() => import('./layouts/site.layout'));
const Adminlayout = lazy(() => import('./layouts/admin.layout'));
const HomePage = lazy(() => import('./pages/site/home.page'));
const AboutPage = lazy(() => import('./pages/site/about.page'));
const LoginPage = lazy(() => import('./pages/site/login.page'));
const UserDetailPage = lazy(() => import('./pages/admin/user.detail.page'));
const UsersPage = lazy(() => import('./pages/admin/user.page'));

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
		path: 'memoisation',
		Component: Memoisationlayout,
		children: [
			{
				path: 'memo',
				Component: ReactMemoPageSample,
			},
			{
				path: 'useref',
				Component: UseRefPageSample,
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

// asenkron bir component yüklemesi yapıldığı için yükleme yapılana kadar fallback compopnent gösterilir.

const FallBackComponent: React.FC = () => {
	return <>... Loading</>;
};

root.render(
	<Suspense fallback={<FallBackComponent />}>
		<RouterProvider router={router}></RouterProvider>
	</Suspense>
);
