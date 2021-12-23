/* eslint-env node */

require("@rushstack/eslint-patch/modern-module-resolution");

/**
 * @type import('eslint').Linter.Config
 */
const config = {
	extends: [
		"./xo-plugins.cjs",
		"xo",
		"xo-typescript",
		"plugin:vue/vue3-recommended",
	],
	plugins: [
		"simple-import-sort",
		"vue",
	],
	overrides: [
		{
			files: "*.vue",
			rules: {
				"import/no-default-export": "off",
			},
		},
	],
};

module.exports = config;