GoogleAppsScript逆引き辞典01(ウェブページのHTMLを取得する)
# ウェブページのHTMLを取得する

## ひとこと説明
`UrlFetchApp.fetch(url).getContentText()`で取得できます

## 実例
### コード.gs
```
function getHTML(url) {

  //urlにアクセスした結果をret1に格納します。
  var ret1 = UrlFetchApp.fetch(url);

  //rer1内にあるレスポンス内容を文字列型でret2に格納します。
  var ret2 = ret1.getContentText();

  //結果を返します
  return ret2;
}


function test(){

  //URLからHTMLを受け取ります
  var html = getHTML("http://takanakahiko.me/test.html");

  //取得した内容をログに出します。
  Logger.log(html);
}
```

### test()を実行した出力
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>テスト</title>
  </head>
  <body>
    これはテストです
  </body>
</html>
```

## 説明

### `var ret1 = UrlFetchApp.fetch(url);`
まず、[UrlFetchApp](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app)内の[fetch(url)](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#fetch(String))を利用します。
これでURLに対してアクセスしに行きます。
引数は以下のとおりです。返り値は[HTTPResponse](https://developers.google.com/apps-script/reference/url-fetch/http-response)です。

| 引数名 | 型 | 説明 |
|:-:|:-:|:-:|
| url | String | 取得先のURL |

### `var ret2 = ret1.getContentText();`
次に、[HTTPResponse](https://developers.google.com/apps-script/reference/url-fetch/http-response)内の、[getContentText()](https://developers.google.com/apps-script/reference/url-fetch/http-response#getContentText())を利用します。
これで、レスポンスの内容(HTML)を引き出します。
引数は不要で、返り値はStringです。
