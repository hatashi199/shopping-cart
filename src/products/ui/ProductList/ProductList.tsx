import { useEffect, useState } from 'react';
import { Product } from '../../domain/Product';
import { createProductsRepository } from '../../infrastructure/shopProducts';
import { getAll } from '../../application/getAll/getAll';
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';

const ProductList: React.FC = () => {
	const [products, setProducts] = useState<Product[] | null>(null);

	const repository = createProductsRepository();

	useEffect(() => {
		const handleAllProducts = async () => {
			const data = await getAll(repository);
			setProducts(data);
		};

		handleAllProducts();
	}, [repository]);

	return (
		<div className='gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 py-10'>
			{products &&
				products.map((item) => (
					<Card
						key={item.id}
						shadow='sm'
						isHoverable
					>
						<CardBody className='overflow-visible p-0 flex-none'>
							<Image
								src={item.image}
								shadow='sm'
								radius='none'
								width='100%'
								alt={item.title}
								className='w-full object-cover h-[250px]'
							/>
						</CardBody>
						<CardFooter className='flex-col gap-4 flex-auto items-start justify-between'>
							<b>{item.title}</b>
							<div className='flex flex-col gap-4'>
								<h3 className='text-default-500 text-lg'>
									{item.price} $
								</h3>
								<Button color='primary'>Add Cart</Button>
							</div>
						</CardFooter>
					</Card>
				))}
		</div>
	);
};

export default ProductList;
