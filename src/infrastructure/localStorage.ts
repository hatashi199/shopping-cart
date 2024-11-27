export const saveToLocalStorage = <T>(key: string, data: T): boolean => {
	try {
		const dataToJson = JSON.stringify(data);
		localStorage.setItem(key, dataToJson);
		return true;
	} catch (error) {
		console.log('Error saving data: ', error);
		return false;
	}
};

export const getFromLocalStorage = <T>(key: string): T | null => {
	try {
		const serializedData = localStorage.getItem(key);

		if (serializedData === null) {
			return null;
		}

		return JSON.parse(serializedData);
	} catch (error) {
		console.log('Error getting data: ', error);
		return null;
	}
};
