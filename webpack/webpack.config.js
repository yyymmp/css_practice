const path = require('path')

module.exports= {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            //style load模块 将模块加入到dom
            {  test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {  test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
        ]
    }
}