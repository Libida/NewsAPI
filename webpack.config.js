const path = require("path");
const webpack = require("webpack");
const devMode = process.env.NODE_ENV !== "production";

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ghpages = require("gh-pages");

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
    mode: "development",
    entry: "./src/scripts/app",

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
    },

    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/templates/start.pug",
            title: "Page Title"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],

    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                include: [path.resolve(__dirname, "src/scripts")],
                loader: "babel-loader",

                options: {
                    plugins: ["syntax-dynamic-import"],

                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                "targets": {
                                    "node": "10"
                                }
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.pug$/,
                use: ["pug-loader"]
            },
        ]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/
                }
            },

            chunks: "async",
            minChunks: 1,
            minSize: 30000,
            name: true
        }
    },

    devServer: {
        open: true
    }
};

ghpages.publish('dist', function (err) {
});
