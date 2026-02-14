import strawberryImage from '$lib/assets/strawberry.svg';
import chocolateImage from '$lib/assets/chocolate.svg';
import blueberry from '$lib/assets/blueberry.svg';

export default [
	{
		id: 'strawberry',
		name: 'Strawberry',
		title: [
			{ type: 'text', value: 'Stra' },
			{ type: 'image', value: strawberryImage },
			{ type: 'text', value: 'wberry' }
		],
		tagline: 'ultimate.summer.vibes'
	},
	{
		id: 'chocolate',
		name: 'Chocolate',
		title: [
			{ type: 'text', value: 'Chocol' },
			{ type: 'image', value: chocolateImage },
			{ type: 'text', value: 'ate' }
		],
		tagline: 'this.one.is.so.cozy'
	},
	{
		id: 'blueberry',
		name: 'Blueberry',
		title: [
			{ type: 'text', value: 'Blueb' },
			{ type: 'image', value: blueberry },
			{ type: 'text', value: 'erry' }
		],
		tagline: 'you.should.try.this'
	}
];
