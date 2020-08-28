const fs = require('fs');
const path = require('path');
// const vm = require('vm');
const requireFromString = require('require-from-string');
const { listPages } = require('mangoost/dist/lib/pages');
const { compile } = require('svelte/compiler');

function capitalise(name) {
	return name[0].toUpperCase() + name.slice(1);
}

const sveltePages = listPages().filter(x=>x.endsWith('.svelte'));
const filename = path.basename(sveltePages[0]);
const name = path.parse(filename).name
			.replace(/^\d/, '_$&')
            .replace(/[^a-zA-Z0-9_$]/g, '');
            
const compilerOptions = {
    name: capitalise(name),
    dev: true,
    generate: 'ssr',
    hydratable: true,
    format: 'cjs',
    css: false,
    filename,
}


const page = fs.readFileSync(path.join('./src/pages', sveltePages[0]), 'utf-8');

const { js, warnings } = compile(page, compilerOptions);
//const main = compile(Main, compilerOptions);

if (compilerOptions.dev) {
    warnings.forEach(warning => {
        console.warn(`\nSvelte Warning in ${warning.filename}:`);
        console.warn(warning.message);
        console.warn(warning.frame);
    })
}

/* let component = vm.SyntheticModule(['default'], function() {
    const obj = JSON.parse(source);
    this.setExport('default', obj);
}); */

const Paths = path.join('C:\\Users\\petroi\\DEV\\test', 'components');
console.log(Paths);

const component = requireFromString(js.code, {prependPaths: [Paths]}).default;

//console.log(component.render());