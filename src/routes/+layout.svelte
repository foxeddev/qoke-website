<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Fascinate&family=Outfit:wght@100..900&display=swap"
		rel="stylesheet"
	/>

	<link rel="icon" href={favicon} />
</svelte:head>
{@render children()}
