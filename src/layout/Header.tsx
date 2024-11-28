import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem
} from '@nextui-org/react';
import ShopLogoIcon from '../icons/ShopLogo';
import CartIcon from '../icons/Cart';
import { useCartContext } from '../application/hooks/useCartContext';

const Header: React.FC = () => {
	const { cart } = useCartContext();

	console.log('Header rendered');

	return (
		<Navbar shouldHideOnScroll>
			<NavbarBrand className='inline-flex gap-3'>
				<ShopLogoIcon />
				<span>SC</span>
			</NavbarBrand>
			<NavbarContent
				className='hidden sm:flex gap-4'
				justify='center'
			>
				<NavbarItem>
					<h1>SHOP-CART</h1>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem className='hidden lg:flex text-md'>
					<div className='flex justify-center items-center relative text-lg'>
						<CartIcon />
						<span className='absolute -right-1 -top-1 z-10 block w-4 h-4 bg-red-500 text-white text-xs text-center font-bold rounded-full'>
							{cart.items.length}
						</span>
					</div>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default Header;
