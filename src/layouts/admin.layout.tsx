import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import AuthGuard from '../guards/auth.guard';

function Adminlayout() {
	const [id, setId] = useState<number>(0);

	return (
		<>
			<AuthGuard>
				<h1>Admin Dashboard</h1>
				<nav>
					<p>Id: {id}</p>
					<Link className="text-blue-600" to={`/admin/users/${id}/ali`}>
						User Detail
					</Link>
					<br></br>
				</nav>
				<div>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						onClick={() => {
							setId(Math.round(Math.random() * 1000));
						}}
					>
						Random Number
					</button>
				</div>
				<main>
					<Outlet />
				</main>
			</AuthGuard>
		</>
	);
}

export default Adminlayout;

// Link, NavLink, Outlet, Navigate, UseLocation, UseParams, useSearchParams, UseNavigate, RouterProvider, Guard
