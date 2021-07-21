const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//entry -> output ilk başta zorunlu olan şeylerdir.


module.exports = (env, argv) => {

    const isProduction = argv.mode === 'production'

    return {
    
        mode:'development',
        entry: './src/gorevApp.js',
        //entry: './playground/hoc.js',
        //entry: './src/redux_structure/redux.js',
        output:{
            path:path.join(__dirname,'public'),
            filename:'bundle.js'
        },
        module:{
            rules:[{//Yani node_modules içinde olmayan js dosyaları için babel kullan. Kursta gösterilen içerik çalışmadı, oturup bir saat bütün babel uzantılı dosyaları günelledim. Önemli olan package.json içinde yazanları indirmek ve webpack.config.js içindeki modules kısmının tutması.
                loader:'babel-loader',
                test: /\.js$/,
                exclude:/node_modules/,
                
            },{
                test:/\.s?css$/,
                use:[MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
                /* bu kod ile uygulama gayet güzel çalışıyordu ancak video 134 ve sonrasında edward'ın düzeltmesi ile yukarıdaki hale geldi
                use:[
                    'style-loader',
                    { loader: 'css-loader', options: { url: false } },
                    'sass-loader'
                 ]
                 */

            }]
        },
        plugins:[
            new MiniCssExtractPlugin({
                filename:'styles.css'
            })
        ],
        devtool:isProduction ? 'source-map':'inline-cheap-module-source-map',
        devServer:{
            contentBase:path.join(__dirname,'public'),
            historyApiFallback:true
        }
    };
}



/*loader /* use:{
                loader:'babel-loader',
                options:{
                    presets:["@babel/preset-env","@babel/preset-react"]
                }
            } */