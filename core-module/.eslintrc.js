module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:@typescript-eslint/recommended',
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'comma-dangle': ['error', {
			'arrays': 'always-multiline',
			'objects': 'always-multiline',
			'imports': 'always-multiline',
			'exports': 'always-multiline',
			'functions': 'never'
		}],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/interface-name-prefix': 'off'
	}
};
