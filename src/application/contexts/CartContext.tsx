import React, { createContext, useState } from 'react';
import { Cart } from '../../domain/cart/models/Cart';
import { Product } from '../../domain/products/models/Product';
import {
	addToCart,
	removeFromCart
} from '../../domain/cart/services/cartService';
import { saveToLocalStorage } from '../../infrastructure/localStorage';

interface CartContextInt {
	cart: Cart;
	addItem: (product: Product) => boolean;
	removeItem: (product: Product) => boolean;
}

interface CartContextProps {
	children: React.ReactNode;
}

const CartContext = createContext<CartContextInt | undefined>(undefined);

export const CartProvider: React.FC<CartContextProps> = ({
	children
}: CartContextProps) => {
	const [cart, setCart] = useState<Cart>({
		items: [],
		totalPrice: 0
	});

	const addItem = (product: Product): boolean => {
		const updatedCart = addToCart(product, cart);

		if (updatedCart === null) return false;
		setCart(updatedCart);
		saveToLocalStorage<Cart>('cart', cart);

		return true;
	};

	const removeItem = (product: Product): boolean => {
		const updatedCart = removeFromCart(product.id, cart);

		if (updatedCart === null) return false;
		setCart(updatedCart);
		saveToLocalStorage<Cart>('cart', cart);

		return true;
	};

	return (
		<CartContext.Provider value={{ cart, addItem, removeItem }}>
			{children}
		</CartContext.Provider>
	);
};
