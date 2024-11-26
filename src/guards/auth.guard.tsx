import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// ara component sayesinde gelen bir route isteğin arasına girip bir kontreol yapabiliyoruz

type AuthGuardProps = {
	children: React.ReactNode;
};

function AuthGuard({ children }: AuthGuardProps) {
	const location = useLocation(); // route değişikliğinde lokasyon bilgilerini aldığımız servis.
	console.log('location', location);

	const token = localStorage.getItem('token');

	if (token) return <>{children}</>;

	return <Navigate to="/login"></Navigate>;
}

export default AuthGuard;
