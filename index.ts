require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	extends: [
		"xo",
		"xo-typescript",
		"./xo-plugins.cjs",
		"plugin:vue/vue3-recommended",
		"prettier"
	],
	plugins: ["simple-import-sort", "vue"],
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 2018,
		sourceType: "module",
	},
	overrides: [
		{
			files: "*.vue",
			rules: {
				"import/no-default-export": "off",
			},
		},
	],
};
