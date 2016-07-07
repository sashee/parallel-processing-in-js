const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/app.js",
		inline: "./src/inline.js"
	},
	output: {
		path: "dist",
		filename: "[name]-bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/ ,
				loaders: ["babel-loader?presets[]=es2015"]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html"
		}),
		new HtmlWebpackPlugin({
			template: "src/inline.html",
			filename: "inline.html"
		})
	],
	devtool: "source-map",
	debug: true
};
