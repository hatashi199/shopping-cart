import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

const App: React.FC = () => {
	return (
		<RouterProvider
			router={router}
			future={{ v7_startTransition: true }}
		/>
	);
};

export default App;
