import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Memoisationlayout() {
	return (
		<>
			<nav>
				<Link className="text-blue-500" to="/memoisation/memo">
					React Memo
				</Link>{' '}
				<Link className="text-blue-500" to="/memoisation/useref">
					Use Ref Hook
				</Link>{' '}
			</nav>

			<main className="p-5">
				<Outlet />
			</main>
		</>
	);
}

export default Memoisationlayout;
