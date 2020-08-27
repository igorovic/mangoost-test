import App from './App.svelte';

/* const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
}); */
export const app = App.render({name: "world"})

export default app;