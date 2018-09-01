var path = require('path');


modules.exports = {
    entry: './app/assets/scripts/App.js',
    output:
        {
            path: path.resolve(__dirname, './app/temp/scripts'),
            filename: 'bundle.js'
        },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test:'/\.js$/',
                exclude: '/node_modules'
            }
        ]
    }
};
