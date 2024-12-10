import { Button, Chip, Image } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Product } from '../../../domain/products/models/Product';
import { getProduct } from '../../../domain/products/services/productService';
import StarIcon from '../../../icons/Star';
import { helpers } from '../../utils/helpers';
import { CartContext, CartContextInt } from '../../contexts/CartContext';
import { useGenericContext } from '../../hooks/useCartContext';
import BackIcon from '../../../icons/Back';

const ProductDetails: React.FC = () => {
	const [product, setProduct] = useState<Product | null>(null);
	const { addItem } = useGenericContext<CartContextInt>(CartContext);
	const { formatDecimal } = helpers;
	const { productId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const handleProduct = async () => {
			const data = await getProduct(Number(productId));
			setProduct(data);
		};

		handleProduct();
	}, [productId]);

	return (
		<>
			{product && (
				<section className='grid grid-cols-2 gap-4 center-box mx-auto py-10 px-5'>
					<Image
						alt={product.title}
						src={product.image}
						width={450}
					/>
					<div className='flex flex-col gap-8'>
						<div className='flex items-center justify-between'>
							<div className='flex flex-col gap-2'>
								<h3 className='font-bold text-xl'>
									{product.title}
								</h3>
								<span className='inline-flex gap-2 text-yellow-500'>
									<StarIcon />
									<span className='text-foreground'>{`${product.rating.rate} / 5`}</span>
								</span>
							</div>
							<Button
								className='bg-primary rounded-large'
								onClick={() => navigate(-1)}
							>
								<BackIcon />
							</Button>
						</div>
						<p className='text-justify'>{product.description}</p>
						<div className='flex justify-between'>
							<Chip size='md'>{product.category}</Chip>
							<span className='font-bold text-xl'>
								{formatDecimal(product.price, 2)} $
							</span>
						</div>
						<Button
							onClick={() => addItem(product)}
							className='bg-primary'
						>
							Add to Cart
						</Button>
					</div>
				</section>
			)}
		</>
	);
};

export default ProductDetails;
