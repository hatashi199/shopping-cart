import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';

import App from './App.tsx';

import './css/index.css';
import { CartProvider } from './application/contexts/CartContext.tsx';
import { ThemeProvider } from './application/contexts/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<NextUIProvider>
			<ThemeProvider>
				<CartProvider>
					<main className='text-foreground bg-background'>
						<App />
					</main>
				</CartProvider>
			</ThemeProvider>
		</NextUIProvider>
	</StrictMode>
);
