const mix = require('laravel-mix');

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

let webpackConfig = {
    plugins:[
        new VuetifyLoaderPlugin(),
        new CaseSensitivePathsPlugin({debug: true})
    ]
}

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig(webpackConfig)
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
