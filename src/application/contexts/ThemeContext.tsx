import { createContext, useEffect, useState } from 'react';
import {
	getFromLocalStorage,
	saveToLocalStorage
} from '../../infrastructure/localStorage';

export interface ThemeContextInt {
	theme: string;
	toggleTheme: () => void;
}

interface ThemeContextProps {
	children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextInt | undefined>(undefined);

const persistanceData = getFromLocalStorage<'light' | 'dark'>('theme');

const ThemeProvider: React.FC<ThemeContextProps> = ({
	children
}: ThemeContextProps) => {
	const [theme, setTheme] = useState<'light' | 'dark'>(
		persistanceData ?? 'light'
	);

	useEffect(() => {
		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(theme);
		saveToLocalStorage<string>('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
		saveToLocalStorage<string>('theme', theme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
