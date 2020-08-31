<script context="module">
    const initialData = {
        "init": "init with this data"
    };
</script>
<script>
    import Nav from '../components/Nav.svelte';
    import {initialData as iNav} from '../components/Nav.svelte';
    export let name;
    export let message;
    console.log(iNav);
</script>

<svelte:head>
    <title>App title</title>
</svelte:head>

<main>
    <h1>Hello {name}!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
    
    <Nav />
    <h2>message</h2>
    <p>{message}</p>
    <p>{initialData.init}</p>
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