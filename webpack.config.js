const path = require("path")
module.exports = [ 
    {
        entry: './src/client.ts',
        target: 'web',
        devtool: "source-map",
        output: {
            path: path.resolve(__dirname, "static/js"),
            filename: "./bundle.js",
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.tsx?$/,
                    use: 'awesome-typescript-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
        }
    }
]