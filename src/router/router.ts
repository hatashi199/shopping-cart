import { createBrowserRouter, replace } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Shop from '../pages/Shop';
import ShopCart from '../pages/ShopCart';
import Product from '../pages/Product';

export const router = createBrowserRouter(
	[
		{
			path: '/',
			Component: MainLayout,
			children: [
				{
					index: true,
					loader: () => replace('/shop')
				},
				{ path: '/shop', Component: Shop },
				{ path: '/shop-cart', Component: ShopCart },
				{ path: '/shop/:productId', Component: Product }
			]
		}
	],
	{
		future: {
			v7_relativeSplatPath: true,
			v7_fetcherPersist: true,
			v7_normalizeFormMethod: true,
			v7_partialHydration: true,
			v7_skipActionErrorRevalidation: true
		}
	}
);
