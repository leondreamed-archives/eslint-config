module.exports = {
	rules: {
		'@typescript-eslint/consistent-type-imports': 'error',
		'import/extensions': [
			'error',
			{
				js: 'never',
				ts: 'never',
			}
		]
	},
}
