GoogleAppsScript逆引き辞典03(GoogleドキュメントをPDFに変換する)
# GoogleドキュメントをPDFに変換する

## ひとこと説明
`DriveApp.getFileById(fileId).getAs('application/pdf');`で取得できます。

## 実例
### コード.gs
```
function fileToPdf(fileId){

  //ファイルIDからファイルを取得する
  var file = DriveApp.getFileById(fileId);

  //PDFに変換する
  var pdf = file.getAs('application/pdf');

  //PDFのBlobを返します。
  return pdf;
}

function test(){
  //変換したいGoogleドキュメントのファイルIDを指定する
  var id = "1RDkpaFMeypxRSDdJepPTFoAW9VSXA9PTbo1DQKKcBd8";

  //PDFに変換する
  var pdf = fileToPdf(id);

  //今回はドライブにファイルを生成する
   DriveApp.createFile(pdf).setName("テスト");
}
```

## 説明

### `var file = DriveApp.getFileById(fileId);`
[DriveApp](https://developers.google.com/apps-script/reference/drive/drive-app)内の[getCalendarById(id)](https://developers.google.com/apps-script/reference/drive/drive-app#getFileById(String))を利用します。  
これで、ファイルを取得できます。  
引数は以下のとおりです。返り値は[File](https://developers.google.com/apps-script/reference/drive/file)です。

| 引数名 | 型 | 説明 |
|:-:|:-:|:-:|
| id | String | ファイルのID(詳細下記) |

ファイルのIDは、Googleドライブでファイルを表示した際のURLに含まれています。  
URLが`https://hoge.google.com/huga/d/ABCDEFGHIJKLMNOPQRSTU012345/edit`の場合、ファイルIDは`ABCDEFGHIJKLMNOPQRSTU012345`になります。


### `var pdf = file.getAs('application/pdf');`
[File](https://developers.google.com/apps-script/reference/drive/file)内の[getAs(contentType)](https://developers.google.com/apps-script/reference/drive/file#getAs(String))を利用します。  
これで、ファイルファイルを指定の形式として取得することができます。  
引数は以下のとおりです。
返り値は[Blob](https://developers.google.com/apps-script/reference/drive/file)です。  
Blobですが、ここではGoogleAppsScript独自のクラスです。

| 引数名 | 型 | 説明 |
|:-:|:-:|:-:|
| contentType | String | MIMEでの形式の指定(描き詳細) |

ドキュメントでは、今のところ'application/pdf'のみの対応です。
画像を取得して変換する場合は'image/bmp', 'image/gif', 'image/jpeg', 'image/png'が使えます。
