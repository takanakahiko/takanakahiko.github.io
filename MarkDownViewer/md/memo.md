メモ
# メモ

## Cookieを弄ってセッション維持
### コード.gs
```
function getArrayFromSpreadsheet(spreadsheetId,sheetName) {

  var response = UrlFetchApp.fetch("https://tnp.takushoku-u.ac.jp/campusp/skeitai/start.do");
  var cookies = response.getAllHeaders()["Set-Cookie"];
  var headers = {"Cookie" : cookies.map(function(x){return x.split(';')[0]+';'}).join("")};
  var options ={
    method : 'get',
    followRedirects: true,
    headers : headers
  };
  var text = "?dispatch=login&account=id&password=pass&submit=GO";
  var response = UrlFetchApp.fetch("https://tnp.takushoku-u.ac.jp/campusp/skeitai/login.do"+text,options);
}
```

## 説明

配列型でcookiieが返ってくる。以下例  
`cookies[0] = FJNADDSPID2=XXXXXXXX; Path=/`
`cookies[1] = JSESSIONID=YYYYYYYYYYY; Path=/campusp`  


これを以下の形式にする必要がある  
`{Cookie : FJNADDSPID2=XXXXXXXX;JSESSIONID=YYYYYYYYYYY;}`  


こうする  
`var headers = {"Cookie" : cookies.map(function(x){return x.split(';')[0]+';'}).join("")};`
