module.exports = {
	plugins: [
		require('postcss-nested'),
		require('autoprefixer'),
		require('cssnano')({
			zindex: false,
		}),
	]
}