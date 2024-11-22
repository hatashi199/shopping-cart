import { ProductRepository } from '../../domain/ProductRepository';

export const getProduct = (id: number, repository: ProductRepository) => {
	return repository.getProduct(id);
};
