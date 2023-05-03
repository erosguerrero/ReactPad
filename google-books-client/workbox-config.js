module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{css,js,ico,html,png,json}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};