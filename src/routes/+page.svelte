<script lang="ts">
	import bottle from '$lib/assets/bottle.svg';
	import strawberry from '$lib/assets/strawberry.svg';
	import chocolate from '$lib/assets/chocolate.svg';
	import blueberry from '$lib/assets/blueberry.svg';
</script>

<svelte:head>
	<title>Qoke</title>
</svelte:head>

<div class="h-dvh overflow-scroll text-center scroll-smooth snap-mandatory snap-y">
	<header
		id="top"
		class="flex flex-col justify-center items-center gap-2 md:gap-4 bg-purple p-4 h-dvh snap-start"
	>
		<h1 class="font-display text-yellow text-8xl md:text-9xl">
			QO<img
				src={bottle}
				alt=""
				class="inline-block -mr-7 md:-mr-10 -mb-1.5 md:-mb-3 -ml-7 md:-ml-10 size-22 md:size-32 align-baseline"
			/>KE
		</h1>
		<p
			class="bg-pink text-yellow text-2xl md:text-3xl -rotate-2 hover:-rotate-1 hover:scale-125 -skew-2 hover:-skew-1 transition"
		>
			delicious.cool.refreshing
		</p>
	</header>
	<main>
		<aside class="top-0 left-0 fixed m-2 md:m-16 text-left">
			<ul class="flex flex-col items-start gap-1 md:gap-2">
				<li
					class="bg-pink font-bold text-yellow text-2xl md:text-3xl hover:-rotate-1 hover:scale-115 hover:-skew-1 transition"
				>
					<a href="#top">QOKE</a>
				</li>
				<li
					class="bg-pink text-yellow text-xl md:text-2xl hover:-rotate-1 hover:scale-115 hover:-skew-1 transition"
				>
					<a href="#strawberry">STRAWBERRY</a>
				</li>
				<li
					class="bg-pink text-yellow text-xl md:text-2xl hover:-rotate-1 hover:scale-115 hover:-skew-1 transition"
				>
					<a href="#chocolate">CHOCOLATE</a>
				</li>
				<li
					class="bg-pink text-yellow text-xl md:text-2xl hover:-rotate-1 hover:scale-115 hover:-skew-1 transition"
				>
					<a href="#blueberry">BLUEBERRY</a>
				</li>
			</ul>
		</aside>
		<section
			id="strawberry"
			class="flex flex-col justify-center items-center gap-2 md:gap-4 bg-blue p-4 h-dvh snap-start"
		>
			<h2 class="font-display text-yellow text-5xl md:text-8xl">
				STRA<img
					src={strawberry}
					alt=""
					class="inline-block -mr-1 md:-mr-2 -mb-1.5 md:-mb-3 -ml-2.5 md:-ml-5 size-12 md:size-24 align-baseline"
				/>WBERRY
			</h2>
			<p
				class="bg-pink text-yellow text-2xl md:text-3xl -rotate-2 hover:-rotate-1 hover:scale-125 -skew-2 hover:-skew-1 transition"
			>
				ultimate.summer.vibes
			</p>
		</section>
		<section
			id="chocolate"
			class="flex flex-col justify-center items-center gap-2 md:gap-4 bg-cyan p-4 h-dvh snap-start"
		>
			<h2 class="font-display text-pink text-5xl md:text-8xl">
				CHOCOL<img
					src={chocolate}
					alt=""
					class="inline-block -mr-2 md:-mr-4 -mb-2 md:-mb-4 size-12 md:size-24 align-baseline"
				/>ATE
			</h2>
			<p
				class="bg-pink text-yellow text-2xl md:text-3xl -rotate-2 hover:-rotate-1 hover:scale-125 -skew-2 hover:-skew-1 transition"
			>
				this.one.is.so.cozy
			</p>
		</section>
		<section
			id="blueberry"
			class="flex flex-col justify-center items-center gap-2 md:gap-4 bg-blue p-4 h-dvh snap-start"
		>
			<h2 class="font-display text-yellow text-5xl md:text-8xl">
				BLUEB<img
					src={blueberry}
					alt=""
					class="inline-block -mb-2 md:-mb-4 size-12 md:size-24 align-baseline"
				/>ERRY
			</h2>
			<p
				class="bg-pink text-yellow text-2xl md:text-3xl -rotate-2 hover:-rotate-1 hover:scale-125 -skew-2 hover:-skew-1 transition"
			>
				you.should.try.this
			</p>
		</section>
	</main>
	<footer
		class="flex flex-col justify-end items-start gap-8 md:gap-16 bg-purple p-4 md:p-16 min-h-dvh text-left snap-start"
	>
		<div class="flex flex-col gap-2 md:gap-4 max-w-prose">
			<h2 class="font-display text-yellow text-5xl md:text-8xl">ABOUT</h2>
			<p
				class="bg-pink text-yellow text-xl md:text-2xl hover:-rotate-1 hover:scale-105 hover:-skew-1 transition"
			>
				I basically just wanted to get that idea out of my head... <br />
				If you have any idea what product this could be or also want a fancy website like this, check
				out <a href="https://foxeddev.github.io/" class="font-bold">my Portfolio</a>!
			</p>
		</div>
		<div class="flex flex-col gap-2 md:gap-4 max-w-prose">
			<h2 class="font-display text-yellow text-5xl md:text-8xl">SOURCES</h2>
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
