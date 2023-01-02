import { createContext, useContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		updateDarkMode(!darkMode);
	};

	useEffect(() => {
		const isDark =
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches);

		setDarkMode(isDark); // 내부
		updateDarkMode(isDark); // 외부
	}, []);

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

function updateDarkMode(darkMode) {
	if (darkMode) {
		document.documentElement.classList.add('dark');
		localStorage.theme = 'dark';
	} else {
		document.documentElement.classList.remove('dark');
		localStorage.theme = 'light';
	}
}

export const useDarkMode = () => useContext(DarkModeContext);
// 함수를 만들어서, 내부적으로 useContext를 이용해서 다크모드 이용할 수 있게 함
// 사용할 부분에서는 함수만 선언해서 사용할 수 있도록
