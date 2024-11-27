import axios from 'axios';

export const apiClient = {
	getAll: async <T>(url: string): Promise<T> => {
		const { data } = await axios.get(url);
		return data;
	},
	get: async <T>(url: string, id: number): Promise<T> => {
		const { data } = await axios.get(`${url}${id}`);
		return data;
	}
};
