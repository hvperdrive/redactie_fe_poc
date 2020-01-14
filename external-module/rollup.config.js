import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import typescript from 'rollup-plugin-typescript2';

export default {
	input: 'public/index.tsx',
	output: [{
		file: 'dist/bundle.esm.js',
		format: 'esm'
	}, {
		file: 'dist/bundle.cjs.js',
		format: 'cjs'
	}],
	plugins: [
		typescript({
			clean: true,
		}),
		commonjs(),
		terser(),
	],
	external: [ // Suppresses warnings about external dependencies
		'react',
	]
}
