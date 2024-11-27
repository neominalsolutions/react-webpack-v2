import React, { lazy } from 'react';
import { useSearchParams } from 'react-router-dom';

const LazyComponentDemo = lazy(() => import('../../components/lazy.component'));

function UsersPage() {
	// admin/users?code=1234&size=md
	const [queryString] = useSearchParams();

	console.log('queryString', queryString.get('code'), queryString.get('size'));

	return (
		<>
			<LazyComponentDemo />
		</>
	);
}

export default UsersPage;
