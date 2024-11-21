import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
	return (
		<>
			<header>Header</header>
			<Outlet />
			<footer>Footer</footer>
		</>
	);
};

export default MainLayout;
