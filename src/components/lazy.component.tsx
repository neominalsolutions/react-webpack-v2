import React, { useEffect, useState } from 'react';

function LazyComponentDemo() {
	const [users, setUsers] = useState<any[]>([]);

	useEffect(() => {
		// 5ms bir load işlemi var
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				setUsers(data);
			});

		// componenten ayrılınca tetiklenir
		() => {
			console.log('remove from dom');
		};
	}, []); // [] state dependencies, [] doma ilk girdiğinde tetikleniyor.

	return (
		<>
			{users.map((item: any) => {
				return <div key={item.id}>{item.name}</div>;
			})}
		</>
	);
}

export default LazyComponentDemo;
