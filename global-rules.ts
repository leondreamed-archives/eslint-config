module.exports = {
	rules: {
		'import/no-unassigned-import': 'off',
		'@typescript-eslint/consistent-type-imports': 'error',
		'import/extensions': [
			'error',
			{
				js: 'never',
				ts: 'never',
			},
		],
	},
};
