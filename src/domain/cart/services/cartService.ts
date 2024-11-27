import { Product } from '../../products/models/Product';
import { Cart } from '../models/Cart';

export const addToCart = (product: Product, cart: Cart): Cart | null => {
	try {
		cart.items.push(product);
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
		const finalCart = cart.items.filter((item) => item.id !== id);
		cart.items = [...finalCart];
		return cart;
	} catch (error) {
		console.log('Canno remove from shop cart', error);
		return null;
	}
};
