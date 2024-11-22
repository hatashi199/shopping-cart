import { ProductRepository } from '../../domain/ProductRepository';

export const getAll = (repository: ProductRepository) => {
	return repository.getAll();
};
