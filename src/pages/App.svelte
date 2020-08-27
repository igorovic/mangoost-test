<script>
	import { onMount } from 'svelte';
	import axios from 'axios';

	export let name;
	
	const getMessage = async () =>{
		let m = await axios({
			url: "https://api.mocki.io/v1/e527fc1f"
		});
		return m.data;
	}
	//const message = (async function() {await getMessage()});

	onMount(()=>{
		console.log("mounted");
		name = 'Igor';
	});
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{#await getMessage then message}
	<p>{message}</p>
	{/await}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>