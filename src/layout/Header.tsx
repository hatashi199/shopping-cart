import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem
} from '@nextui-org/react';
import ShopLogoIcon from '../icons/ShopLogo';
import CartIcon from '../icons/Cart';

const Header: React.FC = () => {
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
				<NavbarItem className='hidden lg:flex'>
					<CartIcon />
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default Header;
