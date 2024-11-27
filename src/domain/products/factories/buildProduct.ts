import { ProductDTO } from '../dto/ProductDTO';
import { Product } from '../models/Product';

export const buildProduct = (product: ProductDTO): Product => {
	return {
		...product
	};
};
