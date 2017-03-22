var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {

    devtool: 'cheap-module-source-map',

    entry: './src/main.ts',

    output: {

        path: __dirname + "/dist",

        filename: 'app.bundle.js',

        sourceMapFilename: '[file].map',

        chunkFilename: '[id].chunk.js',

        library: 'ac_[name]',
        libraryTarget: 'var',
    },

    module: {

        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts-loader']
            },
            {
                test: /\.(html|css)$/,
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "raw-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]

    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    /**
     * Webpack Development Server configuration
     * Description: The webpack-dev-server is a little node.js Express server.
     * The server emits information about the compilation state to the client,
     * which reacts to those events.
     *
     * See: https://webpack.github.io/docs/webpack-dev-server.html
     */
    devServer: {
        port: 3000,
        host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },

    /*
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    node: {
        global: true,
        crypto: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
}