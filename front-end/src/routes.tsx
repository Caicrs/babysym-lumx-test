
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import React from 'react';

const DefaultRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	);
};

export default DefaultRoutes;