import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Memoisationlayout() {
	return (
		<>
			<nav>
				<Link className="text-blue-500" to="/memoisation">
					React Memo
				</Link>{' '}
			</nav>

			<main className="p-5">
				<Outlet />
			</main>
		</>
	);
}

export default Memoisationlayout;
