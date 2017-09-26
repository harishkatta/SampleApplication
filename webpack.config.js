var config = {
    entry: './src/main.js',

    output: {
        path:'./',
        filename: 'bundle.js',
    },

    devServer: {
        inline: true,
        port: 8999
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                //loaders:  ['react-hot', 'babel'],


                query: {
                    presets: ['react','es2015']
                }
            }
        ]
    },
    resolve:{
      extensions:['','.js','.jsx']
    }
}

module.exports = config;
