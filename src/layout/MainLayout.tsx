import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainLayout: React.FC = () => {
	return (
		<>
			<Header />
			<Outlet />
			<footer>Footer</footer>
		</>
	);
};

export default MainLayout;
