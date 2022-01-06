require("@rushstack/eslint-patch/modern-module-resolution");

const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
	extends: [
		"xo",
		"./xo-plugins.js",
		"plugin:vue/vue3-recommended",
		"prettier"
	],
	plugins: ["simple-import-sort", "vue"],
	rules: {
		'import/extensions': ['error', {
			js: 'never',
			ts: 'never',
		}]
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
		},
		{
			files: ["*.ts", "*.vue"],
			extends: [
				"xo",
				"xo-typescript",
				"./xo-plugins.js",
				"plugin:vue/vue3-recommended",
				"prettier"
			],
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
		}
	],
});
