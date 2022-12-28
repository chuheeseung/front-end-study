import React from 'react';
import { useContext } from 'react';
import { DarkModeContext, DarkModeProvider } from '../context/DarkModeContext';
import './AppTheme.css';

function AppTheme() {
	return (
		<DarkModeProvider>
			<Header />
			<Main />
			<Footer />
		</DarkModeProvider>
	);
}

export default AppTheme;

function Header() {
	return <header className="header">Header</header>;
}

function Main() {
	return (
		<main className="main">
			Main
			<Profile />
			<Products />
		</main>
	);
}

function Profile() {
	return (
		<div>
			Profile
			<User />
		</div>
	);
}

function User() {
	return <div>User</div>;
}

function Products() {
	return (
		<div>
			Products
			<ProductDetail />
		</div>
	);
}

function ProductDetail() {
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

	return (
		<div>
			Product Detail
			<p>
				DarkMode : <span>{darkMode.toString()}</span>
			</p>
			<button onClick={() => toggleDarkMode()}>Toggle</button>
		</div>
	);
}

function Footer() {
	return <footer className="footer">Footer</footer>;
}
