import index from './index.svelte';

const app = new index({
	target: document.getElementById('sapper'),
	hydrate: true,
	props: {
		name: 'world'
	}
});

export default app;