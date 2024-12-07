import type { Config } from 'tailwindcss';
import flowbite from './node_modules/flowbite/plugin';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}',
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
	],

	theme: {
		extend: {}
	},

	plugins: [flowbite]
} satisfies Config;
