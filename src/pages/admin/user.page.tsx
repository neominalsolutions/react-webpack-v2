import React from 'react';
import { useSearchParams } from 'react-router-dom';

function UsersPage() {
	// admin/users?code=1234&size=md
	const [queryString] = useSearchParams();

	console.log('queryString', queryString.get('code'), queryString.get('size'));

	return <>Users Page</>;
}

export default UsersPage;
