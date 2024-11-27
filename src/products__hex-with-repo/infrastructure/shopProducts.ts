import { ProductRepository } from '../domain/ProductRepository';
import { Product } from '../domain/Product';

import axios from 'axios';

export const createProductsRepository = (): ProductRepository => {
	return {
		getAll: async () => {
			const { data } = await axios.get<Product[]>(
				'https://fakestoreapi.com/products'
			);
			return Promise.resolve(data);
		},
		getProduct: async (id: number) => {
			const { data } = await axios.get<Product>(
				`https://fakestoreapi.com/products/${id}`
			);
			return Promise.resolve(data);
		}
	};
};
