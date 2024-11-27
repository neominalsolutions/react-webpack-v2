import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDataFetch } from '../../hooks/useDataFetch';
import { debounce } from '../../utils/debounce';

function DebouncingSamplePage() {
	const [searchText, setSearchText] = useState<string>('');

	const response = useDataFetch(
		`https://services.odata.org/Northwind/Northwind.svc/Products?$filter=substringof('${searchText}', ProductName)&$format=json`
	);

	useEffect(() => {
		return () => {
			console.log('cleaning...');
			// socket terminate
			// timing api clear
			// unsubscription rxjs reactive programing
			// network request cancelation, terminate işlemi.
		};
	}, []);

	console.log('response', response);

	const onSearch = (e: any) => {
		console.log('e', e.target.value);
		setSearchText(e.target.value);
	};

	// bu şekli ile react useMemo yapmazsak bu kod bloğu gereksiz timeOut nesnesi üretecek ve beklide doğru timeout nesnesini clear edemediğimizden dolayı 500 ms ve üzeri bir işleme sebebiyet verebilir.
	// const searchHandler = debounce(onSearch, 500);

	// useEffect(() => {
	// 	console.log('searchText değişti');
	// }, [searchText]);

	const searchHandler = useMemo(() => {
		return debounce(onSearch, 500);
	}, [searchText]);

	if (response.data) {
		return (
			<>
				<input
					className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
					onChange={searchHandler}
					type="text"
				/>

				<ul>
					{response.data.value?.map((item: any) => {
						return <li key={item.ProductID}>{item.ProductName}</li>;
					})}
				</ul>
			</>
		);
	}

	return <></>;
}

export default DebouncingSamplePage;
