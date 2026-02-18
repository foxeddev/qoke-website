import type { Cookies } from '@sveltejs/kit';
import type { CartItem } from './types/cartItem';
import { getProductById } from './server/products';
import type { CartProduct } from './types/cartProduct';

export const addToCart = (cookies: Cookies, cartItem: CartItem) => {
	const cartItems = getCartItems(cookies);
	const itemIndex = cartItems.findIndex((item) => item.productId == cartItem.productId);
	if (itemIndex !== -1) {
		cartItems[itemIndex].count += cartItem.count;
		if (cartItems[itemIndex].count <= 0) {
			cartItems.splice(itemIndex, 1);
		} else if (cartItems[itemIndex].count >= 8) {
			cartItems[itemIndex].count = 8;
		}
	} else {
		cartItems.push(cartItem);
	}
	cookies.set('cart', JSON.stringify(cartItems), { path: '/' });
};

export const removeFromCart = (cookies: Cookies, cartItem: CartItem) => {
	const cartItems = getCartItems(cookies);
	const itemIndex = cartItems.findIndex((item) => item.productId == cartItem.productId);
	if (itemIndex !== -1) {
		cartItems[itemIndex].count -= cartItem.count;
		if (cartItems[itemIndex].count <= 0) {
			cartItems.splice(itemIndex, 1);
		} else if (cartItems[itemIndex].count >= 8) {
			cartItems[itemIndex].count = 8;
		}
	}
	cookies.set('cart', JSON.stringify(cartItems), { path: '/' });
};

export const getCartItems = (cookies: Cookies) => {
	const cartItems: CartItem[] = JSON.parse(cookies.get('cart') ?? '[]');
	return cartItems;
};

export const getCartProducts = (cookies: Cookies) => {
	const cartProducts: CartProduct[] = getCartItems(cookies)
		.map((item) => ({
			product: getProductById(item.productId),
			count: item.count
		}))
		.filter((item) => item.product !== undefined) as CartProduct[];
	return cartProducts;
};
