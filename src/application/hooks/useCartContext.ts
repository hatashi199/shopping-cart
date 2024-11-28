import { useContext } from 'react';
import { CartContext, CartContextInt } from '../contexts/CartContext';

export const useCartContext = (): CartContextInt => {
	const cartContext = useContext(CartContext);

	if (cartContext === undefined) {
		throw new Error('Context is undefined');
	}

	return cartContext;
};
