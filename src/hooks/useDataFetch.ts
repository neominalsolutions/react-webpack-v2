import { useEffect, useState } from 'react';

type useDataFetchState = {
	response: any | any[] | null;
	loading: boolean;
	error: any | null;
};

export const useDataFetch = (endpoint: string) => {
	const [state, setState] = useState<useDataFetchState>({
		response: null,
		loading: false,
		error: { message: '' },
	});

	useEffect(() => {
		setState({ ...state, loading: true });
		fetch(endpoint)
			.then((res) => res.json())
			.then((data) => {
				// return Promise.reject({ message: 'Hata' });
				setState({ ...state, response: data, loading: false });
			})
			.catch((err) => {
				console.log('err', err);
				setState({ ...state, error: err, loading: false });
			});
	}, [endpoint]); // endpoint değişiminde bağlı yeniden tetiklenecek.

	return {
		data: state.response,
		errorMessage: state.error.message,
		loading: state.loading,
	};
};
