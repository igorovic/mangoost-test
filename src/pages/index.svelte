<script context="module">
	export const message = "I am in context";
</script>
<script>
	//import { onMount } from 'svelte';
	import Nav from '../components/Nav.svelte';
	//import axios from 'axios';

	export let name;
	
	/* const getMessage = async () =>{
		let m = await axios({
			url: "https://api.mocki.io/v1/e527fc1f"
		});
		return m.data.message;
	} */
	//const message = (async function() {await getMessage()});

	/* onMount(()=>{
		console.log("mounted");
		name = 'Igor';
	}); */
</script>

<svelte:head>
	<title>App title</title>
</svelte:head>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	
	<Nav />
	
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