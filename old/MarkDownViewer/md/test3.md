GoogleAppsScript逆引き辞典03(Googleカレンダーに終日イベントを作成する)
# Googleカレンダーに終日イベントを作成する

## ひとこと説明
`CalendarApp.getCalendarById(id).createAllDayEvent(title,date);`で作成できます。

## 実例
### コード.gs
```
function createCalender(title,year,month,day) {

  //カレンダーID(詳細下記)からカレンダーを取得します
  var calendar = CalendarApp.getCalendarById('takanakahiko@gmail.com');

  //日付をDateクラスにします(月の計算は注意)
  var date = Date(year,month-1,day);

  //カレンダー内に終日の予定を作成します
  var event = calendar.createAllDayEvent(title,date);

  //作成した予定のデータを結果として返します。
  return event;
}

function test(){

  //タイトル、年、月、日を決めて予定を作成。
  var ret = createCalender("旅行",2016,8,12);

  //ここでは試しにイベント名を表示してみます。
  Logger.log("作成イベント名:"+ ret.getTitle());
}
```

### test()を実行した出力
```
作成イベント名:旅行
```

## 説明

### `var calendar = CalendarApp.getCalendarById('takanakahiko@gmail.com');`
[CalendarApp](https://developers.google.com/apps-script/reference/calendar/calendar-app)内の[getCalendarById(id)](https://developers.google.com/apps-script/reference/calendar/calendar-app#getCalendarById(String))を利用します。
これで、操作するカレンダーを取得できます。
引数は以下のとおりです。返り値は[Calendar](https://developers.google.com/apps-script/reference/calendar/calendar)です。

| 引数名 | 型 | 説明 |
|:-:|:-:|:-:|
| id| String | カレンダーID:[参考リンク](http://www.webshiki.com/javascript/49.html) |


### `var event = calendar.createAllDayEvent(title,date);`
[Calendar](https://developers.google.com/apps-script/reference/calendar/calendar)内の[createAllDayEvent(title,date)](https://developers.google.com/apps-script/reference/calendar/calendar#createAllDayEvent(String,Date))を利用します。
これで、操作するカレンダーに終日イベントを作成、追加できます。
引数は以下のとおりです。返り値は[CalendarEvent](https://developers.google.com/apps-script/reference/calendar/calendar-event)です。

| 引数名 | 型 | 説明 |
|:-:|:-:|:-:|
| title | String | イベント(予定)のタイトル |
| date | Date | イベント(予定)の日付 |


ちなみに[createAllDayEvent(String,Date,Object)](https://developers.google.com/apps-script/reference/calendar/calendar#createAllDayEvent(String,Date,Object))でoptionを指定すれば、細かいオプションが指定可能です。
