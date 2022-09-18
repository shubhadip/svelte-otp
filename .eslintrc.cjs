module.exports = {
	parser: '@typescript-eslint/parser', // add the TypeScript parser
	plugins: [
		'svelte3',
		'@typescript-eslint' // add the TypeScript plugin
	],
	env: {
    es6: true,
    browser: true
  },
	overrides: [ // this stays the same
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3'
		},{
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
	],
	rules: {
		"@typescript-eslint/no-floating-promises": "warn"

	},
	settings: {
		'svelte3/typescript': true, // load TypeScript as peer dependency
		// ignore style tags in Svelte because of Tailwind CSS
		// See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
		'svelte3/ignore-styles': () => true	
	},
	parserOptions: { // add these parser options
		ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
  extends: [ // then, enable whichever type-aware rules you want to use
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
	ignorePatterns: ['node_modules','coverage','src/__test__',"/jest.config.ts", "CHANGELOG.md"]
};