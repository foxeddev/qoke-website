export type Product = {
	id: string;
	name: string;
	title: { type: text | image; value: string }[];
	tagline: string;
};
