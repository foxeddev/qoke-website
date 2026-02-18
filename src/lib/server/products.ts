import products from '$lib/data/products';

export function getProducts() {
	return products;
}

export function getProductById(id: string) {
	return products.find((item) => item.id == id);
}
