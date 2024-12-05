import { Button, Divider } from '@nextui-org/react';
import { useGenericContext } from '../../hooks/useCartContext';
import { helpers } from '../../utils/helpers';
import { CartContext, CartContextInt } from '../../contexts/CartContext';

const TotalCart: React.FC = () => {
	const { cart } = useGenericContext<CartContextInt>(CartContext);
	const { formatDecimal } = helpers;
	const delivery =
		cart.items.length > 0 ? formatDecimal(7.99, 2) : formatDecimal(0.0, 2);

	return (
		<div className='bg-content1 rounded-large p-4'>
			<h3 className='pb-5'>Total</h3>
			<Divider />
			<ul className='flex flex-col gap-3 py-5'>
				<li className='flex justify-between'>
					<span>Total</span>
					<span>{formatDecimal(cart.totalPrice, 2)} $</span>
				</li>
				<li className='flex justify-between'>
					<span>Delivery</span>
					<span>{formatDecimal(Number(delivery), 2)} $</span>
				</li>
			</ul>
			<Divider />
			<ul className='flex flex-col gap-3 pt-5'>
				<li className='flex justify-between'>
					<span>Subtotal</span>
					<span>
						{formatDecimal(cart.totalPrice + Number(delivery), 2)} $
					</span>
				</li>
			</ul>
			<Button
				className='mt-5 w-full'
				disabled={cart.items.length < 1}
			>
				Buy
			</Button>
		</div>
	);
};

export default TotalCart;
