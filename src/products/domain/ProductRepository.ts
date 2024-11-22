import { Product } from './Product';

export interface ProductRepository {
	getAll: () => Promise<Product[]>;
	getProduct: (id: number) => Promise<Product>;
}
