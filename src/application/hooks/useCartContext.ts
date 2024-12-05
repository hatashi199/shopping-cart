import { useContext } from 'react';

export const useGenericContext = <T>(
	context: React.Context<T | undefined>
): T => {
	const value = useContext(context);

	if (value === undefined) {
		throw new Error('Context is undefined');
	}

	return value;
};
