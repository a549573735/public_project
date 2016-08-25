var path = require('path');
// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// 模块导入



module.exports = {
    // 入口文件地址，不需要写完，会自动查找
    entry: {
       index:'./entry/index',     
    },

    //输出位置
    output: {
        path: path.join(__dirname, './public/dist'), //配置输出路径，文件地址，使用绝对路径形式
        filename: '[name].js',
        //关于filename 我们有个变量就是 [name] = entry的key  当然还有别的变量比如[id],[hash]等,大家可以自行发挥
        //我们也能把filename写成  filename : [name]/[name].[name].js 也是可以的
        //[name]这里是webpack提供的根据路口文件自动生成的名字
        publicPath: './public/'
            // 公共文件生成的地址
    },
    // 服务器配置相关，自动刷新!
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        grogress: true,
    },
    // 加载器
    module: {
        // 加载器
        loaders: [
            // 解析.vue文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            // 转化ES6的语法
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            // 编译css并自动添加css前缀
            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer'
            },
            //.scss 文件想要编译，scss就需要这些东西！来编译处理
            //install css-loader style-loader sass-loader node-sass --save-dev
            {
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap'
            },
            // 图片转化，小于8K自动转化为base64的编码
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                query: {
                    limit: 8192,
                    name: './images/[name].[ext]?[hash:8]'
                }
                //在这无论是直接loader 后面跟参数(像url跟参一样)url-loader?limit=8192,或者是后面跟着一个对象 query,都是可以的.类似get请求？
            },
            //html模板编译？
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            },
        ]
    },
    // .vue的配置。需要单独出来配置
    vue: {
        loaders: {
            css: 'style!css!autoprefixer'
        }
    },
    // 配置babel转化成es5的语法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },

    // plugins，还没用到
    // 这里我就只用到一个就是生成 独立的css文件,style嵌套在页面里的方式实在是丑得不行
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './views/filters'),
            components: path.join(__dirname, './views/components')
        }
    },
    // plugins: [
    //     // new HtmlwebpackPlugin({
    //     //     title: 'Webpack-demos'
    //     // }),
    //     new OpenBrowserPlugin({
    //         url: 'http://localhost:8080'
    //     })
    // ],
    // 开启source-map调试模式，webpack有多种source-map，在官网文档可以查到
    devtool: 'eval-source-map'
};












    //需要用到glob模块

    // var glob = require('glob');
    // var getEntry = function () {
    //     var entry = {};
    //     //首先我们先读取我们的开发目录
    //     glob.sync('./source/**/*.js').forEach(function (name) {
    //         var n = name.slice(name.lastIndexOf('source/') + 7, name.length - 3);
    //         n = n.slice(0, n.lastIndexOf('/'));
    //         //接着我对路径字符串进行了一些裁剪成想要的路径
    //         entry[n] = name;
    //     });

    //     console.log(entry);
    //     /**
    //     *    entry = {
    //     *               'crowd/index' : './source/crowd/index/index.js',
    //     *               'index/index' : './source/index/index/index.js'
    //     *            }
    //     *
    //     **/
    //     //最后返回entry  给 webpack的entry
    //     return entry;
    // };
