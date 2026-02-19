<script lang="ts">
	import { enhance } from '$app/forms';
	import bottle from '$lib/assets/bottle.svg';
	import { redirect } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let { data } = $props();
	let products = $derived(data.products);

	let main: HTMLElement;
	let navigationVisible = $state(false);

	const observeMain = async () => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					navigationVisible = entry.isIntersecting;
				});
			},
			{ threshold: 0.2 }
		);
		observer.observe(main);
	};

	onMount(() => {
		observeMain();
	});
</script>

<svelte:head>
	<title>Qoke</title>
</svelte:head>

<div
	class="h-dvh overflow-x-hidden overflow-y-scroll text-center scroll-smooth snap-mandatory snap-y"
>
	<header
		id="header"
		class="flex flex-col justify-center items-center gap-2 md:gap-4 bg-purple p-2 h-dvh snap-start"
	>
		<h1 class="font-display text-yellow text-8xl md:text-9xl uppercase">
			Qo<img
				src={bottle}
				alt=""
				class="inline-block mx-0.5 md:mx-1 -mb-1.5 md:-mb-3 w-auto h-22 md:h-32 align-baseline"
			/>ke
		</h1>
		<p
			class="bg-pink text-yellow text-2xl md:text-3xl -rotate-2 hover:-rotate-1 hover:scale-125 -skew-2 hover:-skew-1 transition"
		>
			delicious.cool.refreshing
		</p>
	</header>
	<main bind:this={main} id="main">
		{#if navigationVisible}
			<aside
				transition:fly={{ x: '-100%', opacity: 1 }}
				class="top-0 left-0 z-1 fixed pt-2 md:pt-16 pl-2 md:pl-16 text-left"
			>
				<ul class="flex flex-col items-start gap-1 md:gap-2">
					<li
						class="bg-pink font-bold text-yellow text-2xl md:text-3xl uppercase hover:-rotate-1 hover:scale-115 hover:-skew-1 transition"
					>
						<a href="#header">Qoke</a>
					</li>
					{#each products as product}
						<li
							class="bg-pink text-yellow text-xl md:text-2xl uppercase hover:-rotate-1 hover:scale-115 hover:-skew-1 transition"
						>
							<a href={`#${product.id}`}>{product.name}</a>
						</li>
					{/each}
					<li
						class="bg-pink text-yellow text-xl md:text-2xl uppercase hover:-rotate-1 hover:scale-115 hover:-skew-1 transition"
					>
						<a href="#footer">Credits</a>
					</li>
				</ul>
			</aside>
		{/if}
		{#each products as product, index}
			<section
				id={product.id}
				class={`relative flex h-dvh snap-start flex-col items-center justify-center gap-2 p-2 md:gap-4 ${index % 2 == 0 ? 'bg-blue' : 'bg-cyan'}`}
			>
				<h2
					class={`font-display text-5xl text-nowrap uppercase md:text-8xl ${index % 2 == 0 ? 'text-yellow' : 'text-pink'}`}
				>
					{#each product.title as titlePart}
						{#if titlePart.type == 'text'}
							{titlePart.value}
						{:else if titlePart.type == 'image'}
							<img
								src={titlePart.value}
								alt=""
								class="inline-block mx-0.5 md:mx-1 -mb-1.5 md:-mb-3 w-auto h-12 md:h-24 align-baseline"
							/>
						{/if}
					{/each}
				</h2>
				<p
					class="bg-pink text-yellow text-2xl md:text-3xl -rotate-2 hover:-rotate-1 hover:scale-125 -skew-2 hover:-skew-1 transition"
				>
					{product.tagline}
				</p>
				<form method="POST" use:enhance={redirect(303, 'cart')} action="/cart/?/add">
					<input name="productId" type="hidden" value={product.id} />
					<button
						type="submit"
						class={`absolute bottom-0 left-0 w-full cursor-pointer p-6 font-display text-5xl uppercase ${index % 2 == 0 ? 'bg-yellow text-purple hover:bg-purple hover:text-yellow' : 'bg-purple text-yellow hover:bg-yellow hover:text-purple'}`}
					>
						Add to Cart
					</button>
				</form>
			</section>
		{/each}
	</main>
	<footer
		id="footer"
		class="flex flex-col justify-end items-start gap-8 md:gap-16 bg-purple p-2 md:p-16 min-h-dvh text-left snap-start"
	>
		<div class="flex flex-col gap-2 md:gap-4 max-w-prose">
			<h2 class="font-display text-yellow text-5xl md:text-8xl uppercase">About</h2>
			<p
				class="bg-pink text-yellow text-xl md:text-2xl hover:-rotate-1 hover:scale-105 hover:-skew-1 transition"
			>
				I basically just wanted to get that idea out of my head... <br />
				If you have any idea what product this could be or also want a fancy website like this, check
				out <a href="https://foxeddev.github.io/" class="font-bold">my Portfolio</a>!
			</p>
		</div>
		<div class="flex flex-col gap-2 md:gap-4 max-w-prose">
			<h2 class="font-display text-yellow text-5xl md:text-8xl uppercase">Sources</h2>
			<ul class="flex flex-col items-start gap-2 md:gap-4">
				<li
					class="bg-pink text-yellow text-xl md:text-2xl hover:-rotate-1 hover:scale-115 hover:-skew-1 transition"
				>
					Default Font:
					<a href="https://fonts.google.com/specimen/Outfit" class="font-bold">Outfit</a>
				</li>
				<li
					class="bg-pink text-yellow text-xl md:text-2xl hover:-rotate-1 hover:scale-115 hover:-skew-1 transition"
				>
					Heading Font:
					<a href="https://fonts.google.com/specimen/Fascinate" class="font-bold">Fascinate</a>
				</li>
				<li
					class="bg-pink text-yellow text-xl md:text-2xl hover:-rotate-1 hover:scale-115 hover:-skew-1 transition"
				>
					Color Palette:
					<a href="https://coolors.co/palette/9b5de5-f15bb5-fee440-00bbf9-00f5d4" class="font-bold">
						Candy Pop
					</a>
				</li>
				<li
					class="bg-pink text-yellow text-xl md:text-2xl hover:-rotate-1 hover:scale-115 hover:-skew-1 transition"
				>
					Bottle:
					<a
						href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=152915"
						class="font-bold"
					>
						OpenClipart-Vectors
					</a>
					on
					<a
						href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=152915"
						class="font-bold"
					>
						Pixabay
					</a>
					(edited)
				</li>
				<li
					class="bg-pink text-yellow text-xl md:text-2xl hover:-rotate-1 hover:scale-115 hover:-skew-1 transition"
				>
					Strawberry:
					<a
						href="https://pixabay.com/users/kropekk_pl-114936/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=285782"
						class="font-bold"
					>
						Anna
					</a>
					on
					<a
						href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=285782"
						class="font-bold"
					>
						Pixabay
					</a>
					(edited)
				</li>
				<li
					class="bg-pink text-yellow text-xl md:text-2xl hover:-rotate-1 hover:scale-115 hover:-skew-1 transition"
				>
					Chocolate:
					<a
						href="https://pixabay.com/users/bytrangle-6596164/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2896696"
						class="font-bold"
					>
						Trang Le
					</a>
					on
					<a
						href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2896696"
						class="font-bold"
					>
						Pixabay
					</a>
					(edited)
				</li>
				<li
					class="bg-pink text-yellow text-xl md:text-2xl hover:-rotate-1 hover:scale-115 hover:-skew-1 transition"
				>
					Blueberry: Made by myself in <a href="https://www.figma.com/" class="font-bold">Figma</a>
				</li>
			</ul>
		</div>
	</footer>
</div>
