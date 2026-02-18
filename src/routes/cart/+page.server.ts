import { addToCart, getCartProducts, removeFromCart } from '$lib/cart.js';
import { error } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	return {
		cartProducts: getCartProducts(cookies)
	};
};

export const actions = {
	add: async ({ cookies, request }) => {
		const data = await request.formData();
		const productId = data.get('productId')?.toString();
		if (!productId) error(404);

		addToCart(cookies, { productId, count: 1 });
	},
	remove: async ({ cookies, request }) => {
		const data = await request.formData();
		const productId = data.get('productId')?.toString();
		if (!productId) error(404);

		removeFromCart(cookies, { productId, count: 1 });
	}
};
