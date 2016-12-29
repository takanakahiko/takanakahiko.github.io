GoogleAppsScript逆引き辞典03(スプレッドシート内の値を全て取得する)
# スプレッドシート内の値を取得する

## ひとこと説明
`var data =  SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName).getDataRange().getValues();`で取得できます。

## 実例
### コード.gs
```
function getArrayFromSpreadsheet(spreadsheetId,sheetName) {

  //スプレッドシートを取得します
  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);

  //スプレッドシート内のシートを取得します
  var sheet = spreadsheet.getSheetByName(sheetName);

  //スプレッドシート内の
  return sheet.getDataRange().getValues();
}

function test(fileID,fileName) {

  // スプレッドシートのidを指定します
  var id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

  // スプレッドシート内のシートの名前を指定します
  var name = "シート1";

  //二次元配列を取得します
  var file = getArrayFromSpreadsheet(id,name);

  //文字に変換して表示してみます
  Logger.log(JSON.stringify(file));
}
```
### 取得先のシート(例)
![シート内容](img/md5-1.png)

### test()を実行した出力(例)
見やすいように改行をいれています（本来は入りません）
```
[
  ["","朝ごはん","昼ごはん","晩ごはん"],
  ["1日目","菓子パン","カップ麺","お寿司"],
  ["2日目","食パン","ドーナツ","ピザ"],
  ["3日目","バナナ","チキン南蛮","焼うどん"]
]
```

## 説明

### `var spreadsheet = SpreadsheetApp.openById(spreadsheetId);`
[SpreadsheetApp](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app)内の[openById(id)](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#openById(String))を利用します。  
これで、スプレッドシートを取得できます。  
引数は以下のとおりです。返り値は[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html)です。

| 引数名 | 型 | 説明 |
|:-:|:-:|:-:|
| id | String | スプレッドシートのID(詳細下記) |

スプレッドシートのIDは、Googleドライブでファイルを表示した際のURLに含まれています。  
URLが`https://docs.google.com/spreadsheets/d/ABCDEFGHIJKLMNOPQRSTU012345/edit#gid=0`の場合、ファイルIDは`ABCDEFGHIJKLMNOPQRSTU012345`になります。


### `var sheet = spreadsheet.getSheetByName(sheetName);`
[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html)内の[getSheetByName(name)](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getSheetByName(String))を利用します。  
これで、スプレッドシート内のシートを取得できます。  
引数は以下のとおりです。返り値は[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet)です。  

| 引数名 | 型 | 説明 |
|:-:|:-:|:-:|
| name | String | シート名(詳細下記) |

シート名は、Googleドライブでシートを表示した際に、表の下に表示されています。  
特に指定していない場合は「シート1」となっている筈です。

### `return sheet.getDataRange().getValues();`
[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet)内の[getDataRange()](https://developers.google.com/apps-script/reference/spreadsheet/sheet#getDataRange())を利用します。  
これで、シート内のデータがある範囲(Range)を取得できます。  
引数はありません。返り値は[Range](https://developers.google.com/apps-script/reference/spreadsheet/range)です。  


次に続けて、[Range](https://developers.google.com/apps-script/reference/spreadsheet/range)内の[getValues()](https://developers.google.com/apps-script/reference/spreadsheet/range#getValues())を利用します。  
これで、Rangeから実際の値を取得できます。  
引数はありません。返り値は`Object[][]`です。要するに二次元配列です。  


これらのメソッドを繋げて一行で記述しています。
