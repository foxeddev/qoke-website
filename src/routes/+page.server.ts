import { getProducts } from '$lib/server/products';

export const load = async () => {
	return {
		products: getProducts()
	};
};
