import { apiClient } from '../../../infrastructure/shopProducts';
import { Product } from '../models/Product';

export const getAllProducts = (): Promise<Product[]> => {
	const response = apiClient.getAll<Product[]>(
		'https://fakestoreapi.com/products'
	);
	return response;
};

export const getProduct = (id: number): Promise<Product> => {
	const response = apiClient.get<Product>(
		'https://fakestoreapi.com/products',
		id
	);
	return response;
};
