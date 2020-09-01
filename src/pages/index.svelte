<script context="module">
    export const initialData = {
        props: {
            name: "Igor",
            message: "Bonjour"
        },
        async: {
            url: "https://swapi.dev/api/people/1/"
        }
    };
</script>
<script>
    import Nav from '../components/Nav.svelte';
    import '../javascripts/observer.js';
    export let name;
    export let message;
    
    
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
    <pre>{JSON.stringify($$restProps, null, 2)}</pre>
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