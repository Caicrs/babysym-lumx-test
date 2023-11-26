
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import React from 'react';
import Search from './pages/Search';

const DefaultRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/search' element={<Search/>} />
		</Routes>
	);
};

export default DefaultRoutes;