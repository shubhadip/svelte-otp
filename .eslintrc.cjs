module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' },{
		files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
		env: {
		  jest: true,
		},
	  }],
	settings: {
		'svelte3/typescript': () => require('typescript'),
		// ignore style tags in Svelte because of Tailwind CSS
		// See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
		'svelte3/ignore-styles': () => true	
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
		extraFileExtensions: ['.svelte'],
	},
	rules: {
		"@typescript-eslint/no-floating-promises": "warn"
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	ignorePatterns: ['CHANGELOG.md','dist','*.cjs','.svelte-kit/','package/','node_modules','coverage','src/__test__',"/jest.config.ts"]
};
