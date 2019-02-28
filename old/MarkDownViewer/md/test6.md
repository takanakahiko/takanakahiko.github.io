GoogleAppsScript逆引き辞典03(Google翻訳を利用する)
# Google翻訳を利用する

## ひとこと説明
`LanguageApp.translate(text, from , to);`で取得できます。

## 実例
### コード.gs
```
function test() {

  // 翻訳をかけたい文を指定します
  var text = 'I like GAS.';

  // 翻訳をかける前の言語を指定します
  var from = 'en';

  // 翻訳をかけた後の言語を指定します
  var to = 'ja';

  // 翻訳します
  var japanese = LanguageApp.translate(text, from , to);

  // 翻訳した文を表示します
  Logger.log(japanese);
}
```

### test()を実行した出力(例)
```
私はGASが好き。
```

## 説明

### `var japanese = LanguageApp.translate(text, from , to);`
[LanguageApp](https://developers.google.com/apps-script/reference/language/language-app)内の[translate(text, sourceLanguage, targetLanguage)](https://developers.google.com/apps-script/reference/language/language-app#translate(String,String,String))を利用します。  
これで、文を翻訳することができます。  
引数は以下のとおりです。返り値はStringです。

| 引数名 | 型 | 説明 |
|:-:|:-:|:-:|
| text | String | 翻訳したい文 |
| sourceLanguage | String | 変換前の文の言語コード(詳細下記) |
| targetLanguage | String | 変換後の文の言語コード(詳細下記) |


言語コードは[Translate APIの対応言語](https://cloud.google.com/translate/docs/languages)より選択できます。  
主な言語を下の表に挙げておきます。

| 言語名 | 言語コード |
|:-:|:-:|
| 日本語 | ja |
| 英語 | en |
| スペイン語 | es |
| 韓国語 | ko |
