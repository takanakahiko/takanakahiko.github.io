GoogleAppsScript逆引き辞典03(Googleドライブ内ファイルのコピーを作成する)
# Googleドライブ内ファイルのコピーを作成する

## ひとこと説明
`DriveApp.getFileById(fileID).makeCopy(fileName);`で作成できます。

## 実例
### コード.gs
```
function copyFile(fileID,fileName) {

  //コピー元のファイルを取得します
  var tempFile = DriveApp.getFileById(fileID);

  //新しいファイルを日付の名前でで作成します
  var newfile = tempFile.makeCopy(fileName);

  //ファイルの情報を返却します
  return newfile;
}

function test(fileID,fileName) {

  // コピー元のファイルのid(詳細下記)を指定します
  var id = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

  // コピー後のファイルの名前を指定します
  var name = "コピーテスト";

  //コピーを作成します
  var file = copyFile(id,name);

  //ここでは試しにコピーしたファイルのURLを表示してみます。
  Logger.log("ファイルのURL:"+file.getUrl());
}
```

### test()を実行した出力(例)
```
ファイルのURL:https://docs.google.com/document/d/xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz/edit?usp=drivesdk
```

## 説明

### `var tempFile = DriveApp.getFileById(fileID);`
[DriveApp](https://developers.google.com/apps-script/reference/drive/drive-app)内の[getCalendarById(id)](https://developers.google.com/apps-script/reference/drive/drive-app#getFileById(String))を利用します。  
これで、ファイルを取得できます。  
引数は以下のとおりです。返り値は[File](https://developers.google.com/apps-script/reference/drive/file)です。

| 引数名 | 型 | 説明 |
|:-:|:-:|:-:|
| id | String | ファイルのID(詳細下記) |

ファイルのIDは、Googleドライブでファイルを表示した際のURLに含まれています。  
URLが`https://hoge.google.com/huga/d/ABCDEFGHIJKLMNOPQRSTU012345/edit`の場合、ファイルIDは`ABCDEFGHIJKLMNOPQRSTU012345`になります。


### `var newfile = tempFile.makeCopy(fileName);`
[File](https://developers.google.com/apps-script/reference/drive/file)内の[makeCopy(name)](https://developers.google.com/apps-script/reference/drive/file#makeCopy(String))を利用します。  
これで、ファイルのコピーを作成、ドライブ内に追加できます。  
引数は以下のとおりです。返り値は[File](https://developers.google.com/apps-script/reference/drive/file)です。  

| 引数名 | 型 | 説明 |
|:-:|:-:|:-:|
| name | String | コピー時に付けられるファイル名 |

ちなみに、この場合はコピー元のファイルと同じフォルダーに新しいファイルが作成されます。
フォルダを指定したい場合は[makeCopy(name, destination)](https://developers.google.com/apps-script/reference/drive/file#makeCopy(String,Folder))で行うことができます。
