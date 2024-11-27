import React, { useState } from 'react';
import { useDataFetch } from '../../hooks/useDataFetch';

function CustomHookSamplePage() {
	const [endPoint, setEndPoint] = useState<string>(
		'https://jsonplaceholder.typicode.com/posts'
	);

	// custom Hook sadece component body içerisinde yazılır.
	// method veya function içerisinde çağırılamaz.
	// hook tekrar tekrar bir state değişiminde çağırılmasını istersek. Hook useEffect ile state tahibi yapacak şekilde geliştirmemiz gerekir.
	const { data, loading, errorMessage } = useDataFetch(endPoint);

	// const api2Res = useDataFetch('https://jsonplaceholder.typicode.com/todos');

	// console.log('...rendering');

	if (loading) return <>... loading</>;

	if (errorMessage) return <>{errorMessage}</>;

	if (data)
		return (
			<>
				<p>Api1: {data.length}</p>
				{/* <p>Api2: {api2Res.data.length}</p> */}

				<input
					defaultValue={endPoint}
					className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
					onBlur={(e: any) => {
						setEndPoint(e.target.value);
					}}
				/>
			</>
		);

	return <></>;
}

export default CustomHookSamplePage;
