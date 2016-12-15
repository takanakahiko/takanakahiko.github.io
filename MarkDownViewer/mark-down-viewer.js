function getFile(){
    var req = new XMLHttpRequest(); // XMLHttpRrequestオブジェクトを生成
    req.open("get", "test.md", true); // アクセスするファイルを指定
    req.send(null);// HTTPリクエストの発行
    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ
    req.onload = function(){
      var md = marked(req.responseText);
      document.write(md);
    }
}

getFile();
