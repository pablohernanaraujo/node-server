const path = require('path')
const webpack = require('webpack')

module.exports = {
	devtool: 'source-map',
	entry: {
		vendor: ['react', 'react-dom', 'react-router-dom'],
		main: ['webpack-hot-middleware/client', path.resolve(__dirname, 'src')]
	},
	output: {
		path: path.resolve(__dirname, 'src'),
		filename: '[name].bundle.js',
    sourceMapFilename: '[name].map'
	},
	module: {
		loaders: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_module/,
				loader: 'standard-loader',
				options: {
	        parser: 'babel-eslint'
	      }
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.resolve(__dirname, 'src'),
				query: {
					presets: [ 'react-hmre' ]
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				WEBPACK: true
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		})
	]
};
