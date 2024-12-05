import Cart from '../application/modules/Cart/Cart';
import TotalCart from '../application/modules/TotalCart/TotalCart';

const ShopCart: React.FC = () => {
	return (
		<section className='grid grid-cols-[60%_30%] justify-between center-box mx-auto py-10 px-5'>
			<Cart />
			<TotalCart />
		</section>
	);
};

export default ShopCart;
