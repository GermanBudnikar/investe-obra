<svelte:options immutable={true}/>

<script>
	import { Slidy } from '@slidy/svelte'
	import pkg from '@slidy/svelte/package.json'
	import { getAspectRatio } from '../../../lib/api.js'

	let index = 4, position = 0, limit = 9
</script>

<header>
	<h1>{pkg.name}@{pkg.version}</h1>
	<p>index: [{index}] position: {Math.trunc(position)}px</p>
</header>

<main>
{#await getPhotos(limit) then slides}
	<Slidy 
		{slides}
		bind:index 
		bind:position
		snap="center"
		thumbnail
		/>
{/await}
</main>

<style>
	@import url('https://unpkg.com/@slidy/svelte/dist/slidy.css');
	main {
		height: 75%
	}
</style>