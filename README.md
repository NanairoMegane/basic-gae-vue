# How to Deploy to GAE with Vue and Go

# What to do
* ローカル
    - port: 8080 でバックエンド API サーバー(go)を立ち上げる
    - port: 4000 でフロントエンドサーバー(vue)を立ち上げる
    - :4000 にアクセスし、必要に応じて :8080 の API へリクエストを行うことができる
* GAE
    - フロントは vue, バックは go で動かす。

## Go(back end)
### src
- main.go
    + ローカルでは別オリジン(port)からのアクセスが行われるため、それを許可する設定を加える
        * "AllowedOrigins: []string{"http://localhost:4000"}"

### app.yaml
- handler
    + npm run build で生成された dist の中身を読み込ませる
    + vue の routing の api へのリクエストが混同しないように、api へのリクエスト URL は明示的に宣言する

## Vue(front end)
- vue.config.js
    + vue のデフォルト起動ポートも 8080 なので、go と被らないように起動ポート設定を変えておく
- .env.development
        +  .env.development ファイルに書き込んだ設定は、vue-cli での実行時のみ適用される。
    + ローカルで実行した場合と GAE 上で実行した場合で API 側へのリクエスト URL を変えなくてはいけないので、このファイルの仕組みを使う。
    + 今回の実装では axios を用いたリクエストの baseURL にここで定義した VUE_APP_API_ORIGIN 変数を用いている。
    + 従って、ローカル実行時には http://localhost:8080/xxx が用いられ、GAE 上では適用されないのでただの /xxx が用いられることになる
- service/test.js(axios)
    + back へのリクエストは axios を使用している。
    + 上述の通り、固定値にしてしまうとローカル・GAE どちらでも動く仕組みにならないので注意。
