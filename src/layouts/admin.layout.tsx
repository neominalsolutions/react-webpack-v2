import React from 'react';
import { Outlet } from 'react-router-dom';

function Adminlayout() {
	return (
		<>
			<h1>Admin Dashboard</h1>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default Adminlayout;
