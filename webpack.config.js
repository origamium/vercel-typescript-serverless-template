module.exports = {
	mode: process.env.NODE_ENV || "development",
	entry: "./src/index.ts",
	target: "node",
	output: {
		filename: "hello.js",
		path: __dirname + "/public"
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