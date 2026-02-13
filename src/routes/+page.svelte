<svelte:head>
	<title>QOKE</title>
</svelte:head>

<div class="w-screen h-screen overflow-scroll text-center snap-mandatory snap-y">
	<header
		class="flex flex-col justify-center items-center gap-2 md:gap-4 bg-purple p-4 h-screen snap-start"
	>
		<h1 class="font-display text-yellow text-8xl md:text-9xl">QOKE</h1>
		<p
			class="bg-pink text-yellow text-2xl md:text-3xl -rotate-2 hover:-rotate-1 hover:scale-125 -skew-2 hover:-skew-1 transition"
		>
			delicious.cool.refreshing
		</p>
	</header>
	<main>
		<section
			class="flex flex-col justify-center items-center gap-2 md:gap-4 bg-blue p-4 h-screen snap-start"
		>
			<h2 class="font-display text-yellow text-5xl md:text-8xl">STRAWBERRY</h2>
			<p
				class="bg-pink text-yellow text-2xl md:text-3xl -rotate-2 hover:-rotate-1 hover:scale-125 -skew-2 hover:-skew-1 transition"
			>
				ultimate.summer.vibes
			</p>
		</section>
		<section
			class="flex flex-col justify-center items-center gap-2 md:gap-4 bg-cyan p-4 h-screen snap-start"
		>
			<h2 class="font-display text-pink text-5xl md:text-8xl">CHOCOLATE</h2>
			<p
				class="bg-pink text-yellow text-2xl md:text-3xl -rotate-2 hover:-rotate-1 hover:scale-125 -skew-2 hover:-skew-1 transition"
			>
				this.one.is.so.cozy
			</p>
		</section>
		<section
			class="flex flex-col justify-center items-center gap-2 md:gap-4 bg-blue p-4 h-screen snap-start"
		>
			<h2 class="font-display text-yellow text-5xl md:text-8xl">BLUEBERRY</h2>
			<p
				class="bg-pink text-yellow text-2xl md:text-3xl -rotate-2 hover:-rotate-1 hover:scale-125 -skew-2 hover:-skew-1 transition"
			>
				you.should.try.this
			</p>
		</section>
	</main>
	<footer
		class="flex flex-col justify-end items-start gap-8 md:gap-16 bg-purple p-4 md:p-16 h-screen text-left snap-start"
	>
		<div class="flex flex-col gap-2 md:gap-4">
			<h2 class="font-display text-yellow text-5xl md:text-8xl">ABOUT</h2>
			<p
				class="bg-pink max-w-prose text-yellow text-xl md:text-2xl hover:-rotate-1 hover:scale-105 hover:--skew-1 transition"
			>
				I basically just wanted to get that idea out of my head... <br />
				If you have any idea what product this could be or also want a fancy website like this, check
				out <a href="https://foxeddev.github.io/" class="font-bold">my Portfolio</a>!
			</p>
		</div>
		<div class="flex flex-col gap-2 md:gap-4">
			<h2 class="font-display text-yellow text-5xl md:text-8xl">SOURCES</h2>
			<ul class="flex flex-col items-start gap-2 md:gap-4">
				<li
					class="bg-pink text-yellow text-xl md:text-2xl hover:-rotate-1 hover:scale-115 hover:--skew-1 transition"
				>
					Font for Text:
					<a href="https://fonts.google.com/specimen/Outfit" class="font-bold">Outfit</a>
				</li>
				<li
					class="bg-pink text-yellow text-xl md:text-2xl hover:-rotate-1 hover:scale-115 hover:--skew-1 transition"
				>
					Font for Headings:
					<a href="https://fonts.google.com/specimen/Fascinate" class="font-bold">Fascinate</a>
				</li>
				<li
					class="bg-pink text-yellow text-xl md:text-2xl hover:-rotate-1 hover:scale-115 hover:--skew-1 transition"
				>
					Color Palette:
					<a href="https://coolors.co/palette/9b5de5-f15bb5-fee440-00bbf9-00f5d4" class="font-bold">
						Candy Pop
					</a>
				</li>
			</ul>
		</div>
	</footer>
</div>
