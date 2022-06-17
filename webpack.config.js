const path=require('path')
// 引入html的插件
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    mode:'development',
    entry:'./src/main.js',
    output:{
        path:path.join(__dirname,'lib'),
        filename:'webpack-index.js',
        clean:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'index.html'
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader","css-loader"]
            }
        ]
    }
}