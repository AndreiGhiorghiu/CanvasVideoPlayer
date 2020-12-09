const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	resolve: {
		alias: {
			"~": path.resolve(__dirname, ""),
			$s: path.resolve(__dirname, "source"),
			$comp: path.resolve(__dirname, "source/components"),
		},
	},
	entry: {
		"video-generator": "./index.js",
	},
	mode: process.env.NODE_ENV,
	output: {
		path: path.resolve(__dirname, "public/assets/js"),
		publicPath: "/assets/js/",
		filename: "[name].js",
	},
	watch: "production" !== process.env.NODE_ENV,
	devtool:
		("production" !== process.env.NODE_ENV && "cheap-eval-source-map") || false,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
						plugins: ["react-html-attrs"],
					},
				},
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "babel-loader",
					},
					{
						loader: "react-svg-loader",
						query: {
							svgo: {
								pretty: true,
								plugins: [
									{
										removeTitle: false,
										removeStyleElement: true,
									},
								],
								floatPrecision: 2,
							},
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: true,
						},
					},
				],
				include: /\.module\.css$/,
			},
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: true,
						},
					},
					"css-loader",
				],
				exclude: /\.module\.css$/,
			},
			{
				test: /\.yaml$/,
				use: "js-yaml-loader",
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "../css/[name].css",
		}),
	],
};
