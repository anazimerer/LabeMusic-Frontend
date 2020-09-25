import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/routes.js';

export default function App() {

	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	);
}

