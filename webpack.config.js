module.exports = {
	mode: process.env.NODE_ENV || "development",
	entry: "./src/index.ts",
	target: "node",
	output: {
		filename: "bundle.js",
		path: __dirname + "/dist"
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				loader: ["ts-loader"],
				exclude: ["/node_modules/"]
			}
		]
	}
};