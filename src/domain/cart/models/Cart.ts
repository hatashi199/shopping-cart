import { Product } from '../../products/models/Product';

export interface Cart {
	items: Product[];
	totalPrice: number;
}
