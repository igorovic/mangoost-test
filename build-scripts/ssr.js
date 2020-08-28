require('svelte/register');

const App = require('../src/pages/App.svelte').default;

const {html, css, head} = App.render({ name: 'world' });

console.log(html);
