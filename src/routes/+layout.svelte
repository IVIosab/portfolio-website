<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		padding-top: 5rem;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>
