<script lang="ts">
	import { enhance } from '$app/forms';

	let { data } = $props();
	let cartProducts = $derived(data.cartProducts);
</script>

<svelte:head>
	<title>Cart | Qoke</title>
</svelte:head>

<div class="flex flex-col h-dvh overflow-hidden text-center scroll-smooth">
	<header
		class="relative flex justify-center items-center gap-2 md:gap-4 bg-purple p-2 text-yellow"
	>
		<h1 class="p-6 font-display text-5xl uppercase">Cart</h1>
		<a
			href="/#main"
			title="Close"
			class="right-0 absolute flex justify-center items-center hover:bg-yellow h-full aspect-square hover:text-purple"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1216"
				height="1312"
				viewBox="0 0 1216 1312"
				class="size-8"
			>
				<path
					fill="currentColor"
					d="M1202 1066q0 40-28 68l-136 136q-28 28-68 28t-68-28L608 976l-294 294q-28 28-68 28t-68-28L42 1134q-28-28-28-68t28-68l294-294L42 410q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294l294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68L880 704l294 294q28 28 28 68"
				/>
			</svg>
		</a>
	</header>
	<main
		class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-yellow h-full overflow-x-hidden overflow-y-scroll"
	>
		{#each cartProducts as cartProduct, index}
			{#if cartProduct}
				<section
					class={`relative flex aspect-square flex-col items-center justify-center gap-2 p-2 md:gap-4 ${index % 2 == 0 ? 'bg-blue' : 'bg-cyan'}`}
				>
					<h2
						class={`font-display text-3xl text-nowrap uppercase md:text-5xl ${index % 2 == 0 ? 'text-yellow' : 'text-pink'}`}
					>
						{#each cartProduct.product.title as titlePart}
							{#if titlePart.type == 'text'}
								{titlePart.value}
							{:else if titlePart.type == 'image'}
								<img
									src={titlePart.value}
									alt=""
									class="inline-block mx-0.5 md:mx-1 -mb-1.5 md:-mb-1.5 w-auto h-12 md:h-12 align-baseline"
								/>
							{/if}
						{/each}
					</h2>
					<p
						class="bg-pink text-1xl text-yellow md:text-2xl -rotate-2 hover:-rotate-1 hover:scale-125 -skew-2 hover:-skew-1 transition"
					>
						{cartProduct.product.tagline}
					</p>
					<form
						method="POST"
						use:enhance
						class="bottom-0 left-0 absolute flex bg-purple w-full text-yellow"
					>
						<input name="productId" type="hidden" value={cartProduct.product.id} />
						<button
							type="submit"
							formaction="/cart/?/remove"
							title="Remove one product"
							class="left-0 absolute flex justify-center items-center hover:bg-yellow h-full aspect-square font-display hover:text-purple text-5xl uppercase cursor-pointer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1408"
								height="1280"
								viewBox="0 0 1408 1280"
								class="size-8"
							>
								<path
									fill="currentColor"
									d="M1408 480v192q0 40-28 68t-68 28H96q-40 0-68-28T0 672V480q0-40 28-68t68-28h1216q40 0 68 28t28 68"
								/>
							</svg>
						</button>
						<p class="p-6 w-full font-display text-5xl uppercase">
							{cartProduct.count}
						</p>
						<button
							type="submit"
							formaction="/cart/?/add"
							title="Add one product"
							class="right-0 absolute flex justify-center items-center hover:bg-yellow h-full aspect-square font-display hover:text-purple text-5xl uppercase cursor-pointer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1408"
								height="1408"
								viewBox="0 0 1408 1408"
								class="size-8"
							>
								<path
									fill="currentColor"
									d="M1408 608v192q0 40-28 68t-68 28H896v416q0 40-28 68t-68 28H608q-40 0-68-28t-28-68V896H96q-40 0-68-28T0 800V608q0-40 28-68t68-28h416V96q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68"
								/>
							</svg>
						</button>
					</form>
				</section>
			{/if}
		{/each}
	</main>
</div>
