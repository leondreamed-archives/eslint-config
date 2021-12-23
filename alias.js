module.exports = (aliasMap) => ({
	'import/resolver': {
		alias: {
			map: Object.entries(aliasMap)
		}
	}
});

