import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
//import svelte from 'rollup-plugin-svelte';
import svelte from 'mangoost/dist/rollup-plugins/svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';


import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

//const smelte = require("smelte/rollup-plugin-smelte");

const smelteConfig = {
    purge: true,
    output: "public/tailwind.css", // it defaults to static/global.css which is probably what you expect in Sapper
    postcss: [], // Your PostCSS plugins
    whitelist: [], // Array of classnames whitelisted from purging
    whitelistPatterns: [], // Same as above, but list of regexes
    tailwind: {
      theme: {
        extend: {
          spacing: {
            72: "18rem",
            84: "21rem",
            96: "24rem"
          }
        }
      }, // Extend Tailwind theme
      colors: {
        primary: "#b027b0",
        secondary: "#009688",
        error: "#f44336",
        success: "#4caf50",
        alert: "#ff9800",
        blue: "#2196f3",
        dark: "#212121"
      }, // Object of colors to generate a palette from, and then all the utility classes
      darkMode: true,
    }, // Any other props will be applied on top of default Smelte tailwind.config.js
  }


const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	onwarn(warning);

export default {
	
	input: 'src/pages/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js',
	},
	plugins: [
		replace({
			'process.browser': true,
			'process.env.NODE_ENV': JSON.stringify(mode)
		}),
		svelte({
			dev,
			hydratable: true,
			generate: 'ssr',
			emitCss: true,
			css: true
		}),
		//smelte(smelteConfig),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		
		legacy && babel({
			extensions: ['.js', '.mjs', '.html', '.svelte'],
			babelHelpers: 'runtime',
			exclude: ['node_modules/@babel/**'],
			presets: [
				['@babel/preset-env', {
					targets: '> 0.25%, not dead'
				}]
			],
			plugins: [
				'@babel/plugin-syntax-dynamic-import',
				['@babel/plugin-transform-runtime', {
					useESModules: true
				}]
			]
		}),

		!dev && terser({
			module: true
		})
	],

	preserveEntrySignatures: false,
	onwarn,


	

	/* serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			commonjs(),
			!dev && terser()
		],

		preserveEntrySignatures: false,
		onwarn,
	} */
};
