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

		cart.totalPrice += product.price;
		return cart;
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

		const removeFromCart = cart.items.filter(
			(item) => item.product.id !== id
		);
		cart.items = [...removeFromCart];

		return cart;
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
