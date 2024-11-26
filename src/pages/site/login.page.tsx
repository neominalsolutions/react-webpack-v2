import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
	const navigate = useNavigate();

	const onNavigateToHome = () => {
		navigate('/');
		// ts dosyası üzerinden bir yönlendirme yapar.
	};

	return (
		<>
			Login Page
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={onNavigateToHome}
			>
				onNavigateToHome
			</button>
		</>
	);
}

export default LoginPage;
