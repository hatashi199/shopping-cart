import React, { createContext, useEffect, useState } from 'react';
import { Cart } from '../../domain/cart/models/Cart';
import { Product } from '../../domain/products/models/Product';
import {
	addToCart,
	removeFromCart
} from '../../domain/cart/services/cartService';
import {
	getFromLocalStorage,
	saveToLocalStorage
} from '../../infrastructure/localStorage';

export interface CartContextInt {
	cart: Cart;
	addItem: (product: Product) => boolean;
	removeItem: (product: Product) => boolean;
}

interface CartContextProps {
	children: React.ReactNode;
}

const INITIAL_CART = {
	items: [],
	totalPrice: 0
};

const persistanceData = getFromLocalStorage<Cart>('cart');

const CartContext = createContext<CartContextInt | undefined>(undefined);

const CartProvider: React.FC<CartContextProps> = ({
	children
}: CartContextProps) => {
	const [cart, setCart] = useState<Cart>(persistanceData ?? INITIAL_CART);

	const addItem = (product: Product): boolean => {
		const updatedCart = addToCart(product, cart);

		if (updatedCart === null) {
			return false;
		}

		setCart({ ...updatedCart });
		saveToLocalStorage<Cart>('cart', updatedCart);

		return true;
	};

	const removeItem = (product: Product): boolean => {
		const updatedCart = removeFromCart(product.id, cart);

		if (updatedCart === null) {
			return false;
		}

		setCart({ ...updatedCart });
		saveToLocalStorage<Cart>('cart', updatedCart);

		return true;
	};

	useEffect(() => {
		console.log('Cart state changed:', cart);
	}, [cart]);

	return (
		<CartContext.Provider value={{ cart, addItem, removeItem }}>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext, CartProvider };
