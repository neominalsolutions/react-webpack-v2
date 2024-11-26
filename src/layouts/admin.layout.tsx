import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthGuard from '../guards/auth.guard';

function Adminlayout() {
	return (
		<>
			<AuthGuard>
				<h1>Admin Dashboard</h1>
				<main>
					<Outlet />
				</main>
			</AuthGuard>
		</>
	);
}

export default Adminlayout;

// Link, NavLink, Outlet, Navigate, UseLocation, UseParams, useSearchParams, UseNavigate, RouterProvider, Guard

