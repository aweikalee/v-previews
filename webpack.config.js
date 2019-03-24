const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname, './'),
    entry: {
        'v-previews': path.resolve(__dirname, './src')
    },
    output: {
        library: 'VPreviews',
        libraryExport: 'default',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                include: path.resolve(__dirname, './src'),
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, './src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                        // cacheDirectory: true // 缓存？
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}
