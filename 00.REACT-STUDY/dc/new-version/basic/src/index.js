import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppProfile from './AppProfile';
import AppCounter from './AppCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <AppProfile /> */}
		<AppCounter />
	</React.StrictMode>
);
