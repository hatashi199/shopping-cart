import { Product } from '../../products/models/Product';
import { Cart } from '../models/Cart';

export const addToCart = (product: Product, cart: Cart): Cart | null => {
	try {
		const existingCartItem = isInCart(product, cart);

		if (!existingCartItem) {
			cart.items.push({ product, quantity: 1 });
		} else {
			existingCartItem.quantity += 1;
		}

		return { ...cart, totalPrice: cart.totalPrice + product.price };
	} catch (error) {
		console.log('Cannot add to shop cart: ', error);
		return null;
	}
};

export const removeFromCart = (id: number, cart: Cart): Cart | null => {
	try {
		if (!cart.items) {
			return null;
		}

		const updatedItems = cart.items
			.map((item) => {
				if (item.product.id === id) {
					item.quantity -= 1;
				}

				return { ...item };
			})
			.filter((item) => item.quantity > 0);

		const updatedCart = {
			...cart,
			items: updatedItems,
			totalPrice: updatedItems.reduce(
				(total, item) => total + item.product.price * item.quantity,
				0
			)
		};

		return updatedCart;
	} catch (error) {
		console.log('Cannot remove from shop cart', error);
		return null;
	}
};

const isInCart = (product: Product, cart: Cart) => {
	return cart.items.find(
		(item) => JSON.stringify(item.product) === JSON.stringify(product)
	);
};
