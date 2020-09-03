import App from './index.svelte';

const app = new App({
	target: document.getElementById('mangoost'),
	props: {
		name: 'world'
	}
});

export default app;