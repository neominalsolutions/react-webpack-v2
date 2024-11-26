import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetailPage() {
	// /:id/:name böyle dinamik route oluştururuz.
	const params = useParams();

	console.log('params', params);

	return (
		<>
			<p>User Detail Page</p>
		</>
	);
}

export default UserDetailPage;
