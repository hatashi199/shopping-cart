import { Product } from '../../products/models/Product';

export interface Cart {
	items: CartItem[];
	totalPrice: number;
}

export interface CartItem {
	product: Product;
	quantity: number;
}
