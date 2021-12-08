module.exports = (aliases) => ({
	'import/resolver': {
		alias: {
			map: [aliases]
			extensions: ['.ts', '.js', '.vue']
		}
	}
});

