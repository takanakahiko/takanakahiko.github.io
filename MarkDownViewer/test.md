# メールを送信する

## ひとこと説明
`GmailApp.sendEmail(recipient, subject, body)`で送信できます。

## 実例
```js:コード.gs
function test(){

  //送信先のメールアドレスを指定します
  var recipient = "xxxxxxx@xxxxx.xxxx";

  //題名を指定します
  var subject = "テストメールです";

  //本文を指定します(改行は\nで行います)
  var body = "こんにちは！\n元気ですか？";

  //メールを送信します
  GmailApp.sendEmail(recipient, subject, body);
}
```

## 説明

### `GmailApp.sendEmail(recipient, subject, body);`
[GmailApp](https://developers.google.com/apps-script/reference/gmail/gmail-app)内の[sendEmail(recipient, subject, body)](https://developers.google.com/apps-script/reference/gmail/gmail-app#sendEmail(String,String,String))を利用します。
これで、送信先・題名・本文を指定してメールを送ることができます。
引数は以下のとおりです。返り値は[GmailApp](https://developers.google.com/apps-script/reference/gmail/gmail-app)です。

| 引数名 | 型 | 説明 |
|:-:|:-:|:-:|
| recipient| String | 送信先のメールアドレス |
| subject| String | 題名 |
| body| String | 本文 |

ちなみに[sendEmail(String,String,String,Object)](https://developers.google.com/apps-script/reference/gmail/gmail-app#sendEmail(String,String,String,Object))でoptionを指定すれば、細かいオプションが指定可能です。
