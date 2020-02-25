const path = require('path').posix;
const AngularEnvironmentPlugin = require('./plugins/angular-environment-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const { ProvidePlugin } = require('webpack')

var environment = process.env.NODE_ENV;
// environment = 'production';

var plugins = [];
plugins.push(new AngularEnvironmentPlugin());
if (environment === 'production')
    plugins.push(new AngularCompilerPlugin({
        tsConfigPath: 'client/tsconfig.aot.json',
        entryModule: 'client/app/app.module.ts#AppModule'
    }));

var rules = [
    {
        test: /\.(png|svg|jpg|gif|woff2|woff|eot|ttf)$/,
        use: [
            'file-loader'
        ]
    },
    {
        test: /\.html$/,
        use: 'html-loader'
    },
    {
        test: /(.*client\\styles\\.*\.css)|(.*node_modules\\.*\.css)/,
        use: [
            'style-loader',
            'css-loader']
    },
    {
        test: /.*client\\styles\\.*\.(scss|sass)/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader']
    },
    {
        test: /.*client\\app\\.*\.css/,
        use: [
            'to-string-loader',
            'css-loader'
        ]
    },
    {
        test: /.*client\\app\\.*\.(scss|sass)/,
        use: [
            'to-string-loader',
            'css-loader',
            'sass-loader'
        ]
    }
]

if (environment === 'production') {
    rules.unshift(
        {
            test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
            loader: '@ngtools/webpack'
        });
} else {
    rules.unshift(
        {
            test: /\.ts$/,
            use: [
                {
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: 'client/tsconfig.json'
                    }
                },
                { loader: 'angular2-template-loader' }
            ],

        }
    );
}

var entry = {};
if (environment === 'production')
    entry.main = './client/main.aot.ts';
else
    entry.main = './client/main.ts';

var config = {
    entry,
    output: {
        path: path.join(process.cwd(), 'public'),
        filename: '[name].js'
    },
    module: {
        rules
    },
    plugins,
    resolve: {
        extensions: ['.js', '.ts', '.css', '.scss', '.sass', '.json']
    }
}

if (process.env.NODE_ENV !== 'production')
    config.devtool = 'eval-source-map'

module.exports = config;