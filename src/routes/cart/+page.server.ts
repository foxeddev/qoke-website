import { addToCart, getCartProducts, removeFromCart } from '$lib/cart.js';
import { fail } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	return {
		cartProducts: getCartProducts(cookies)
	};
};

export const actions = {
	add: async ({ cookies, request }) => {
		const data = await request.formData();
		const productId = data.get('productId')?.toString();

		if (!productId) {
			return fail(400, { productId, missing: true });
		}

		addToCart(cookies, productId, 1);

		return { success: true };
	},
	remove: async ({ cookies, request }) => {
		const data = await request.formData();
		const productId = data.get('productId')?.toString();

		if (!productId) {
			return fail(400, { productId, missing: true });
		}

		removeFromCart(cookies, productId, 1);

		return { success: true };
	}
};
