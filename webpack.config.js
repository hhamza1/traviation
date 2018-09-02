var path = require('path');


module.exports = {
    mode: "none",
    entry: './app/assets/scripts/App.js',
    output:
        {
            path: path.resolve(__dirname, './app/temp/scripts'),
            filename: 'bundle.js'
        },
    module: {
        rules: [
            {
               
                use: [
                    {loader: 'babel-loader'},
                ],
                test:'/\.js$/',
                exclude: ['/node_modules']
            }
        ]
    }
};
