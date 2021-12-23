require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	extends: [
		"xo",
		"xo-typescript",
		"./xo-plugins.js",
		"plugin:vue/vue3-recommended",
		"prettier"
	],
	plugins: ["simple-import-sort", "vue"],
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 2018,
		sourceType: "module",
	},
	rules: {
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				args: "after-used",
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
				caughtErrorsIgnorePattern: "^_",
			},
		],
	},
	overrides: [
		{
			files: "*.vue",
			rules: {
				"import/no-default-export": "off",
			},
		},
		{
			files: "*.cjs",
			rules: {
				'@typescript-eslint/no-require-imports': 'off',
				'@typescript-eslint/no-var-requires': 'off'
			}
		}
	],
};
