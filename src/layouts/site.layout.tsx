import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Sitelayout = () => {
	return (
		<>
			<header className="h-20 bg-cyan-500 flex justify-start">
				<nav>
					<NavLink
						className={({ isActive }) => (isActive ? 'bg-green-500 p-5' : '')}
						to="/"
					>
						Anasayfa
					</NavLink>{' '}
					<NavLink
						className={({ isActive }) => (isActive ? 'bg-green-500 p-5' : '')}
						to="/about"
					>
						Hakkımızda
					</NavLink>
					<Link className="p-2 text-blue-900 hover:text-blue-500" to="/admin">
						Admin
					</Link>
					<Link
						className="p-2 text-blue-900 hover:text-blue-500"
						to="/admin/users"
					>
						Admin Users
					</Link>
				</nav>
			</header>

			<main className="p-10">
				<Outlet />
			</main>

			<footer className="fixed bottom-0 bg-blue-800 h-10 w-full text-white text-center">
				Footer
			</footer>
		</>
	);
};

export default Sitelayout;
