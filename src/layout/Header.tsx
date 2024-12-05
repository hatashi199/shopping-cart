import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Switch
} from '@nextui-org/react';
import ShopLogoIcon from '../icons/ShopLogo';
import CartIcon from '../icons/Cart';
import { useGenericContext } from '../application/hooks/useCartContext';
import { Link } from 'react-router-dom';
import {
	CartContext,
	CartContextInt
} from '../application/contexts/CartContext';
import SunIcon from '../icons/Sun';
import MoonIcon from '../icons/Moon';
import {
	ThemeContext,
	ThemeContextInt
} from '../application/contexts/ThemeContext';

const Header: React.FC = () => {
	const { cart } = useGenericContext<CartContextInt>(CartContext);
	const { theme, toggleTheme } =
		useGenericContext<ThemeContextInt>(ThemeContext);

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
					<Switch
						isSelected={theme === 'dark'}
						size='md'
						color='primary'
						thumbIcon={({ isSelected }) =>
							isSelected ? <MoonIcon /> : <SunIcon />
						}
						onChange={toggleTheme}
					/>
					<Link
						to='/shop-cart'
						className='flex justify-center items-center relative text-lg'
					>
						<CartIcon />
						<span className='absolute -right-1 -top-1 z-10 block w-4 h-4 bg-red-500 text-white text-xs text-center font-bold rounded-full'>
							{cart.items.length}
						</span>
					</Link>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default Header;
