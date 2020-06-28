// vue.config.js が存在すると、この設定を vue が読んでくれる

module.exports = {
    devServer: {
        // vue の起動ポートの上書き (default の 8080 は go 側で使うため)
        port:4000
    }
}