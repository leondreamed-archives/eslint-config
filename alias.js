module.exports = (aliasMap) => ({
	'import/resolver': {
		alias: {
			map: [Object.entries(aliasMap)],
			extensions: ['.ts', '.js', '.vue']
		}
	}
});

