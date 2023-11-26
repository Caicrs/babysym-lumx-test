
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import React from 'react';
import Search from './pages/Search';
import CollectionById from './pages/CollectionById';

const DefaultRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/search' element={<Search/>} />
			<Route path='/collection/:id' element={<CollectionById/>} />
		</Routes>
	);
};

export default DefaultRoutes;