function getFile(){
    var req = new XMLHttpRequest(); // XMLHttpRrequestオブジェクトを生成
    req.responseType = "text";
    req.open("get", "test.md", true); // アクセスするファイルを指定
    req.send(null);// HTTPリクエストの発行
    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ
    req.onload = function(){
      marked.setOptions({
          langPrefix: ''
      });
      var md = marked(req.responseText);
      console.log(md);
      document.body.innerHTML = md;
      hljs.initHighlightingOnLoad();
      Array.from(
        document.querySelectorAll("pre code"),
        e => hljs.highlightBlock(e)
      );
    }
}

function test(){
  var md = marked("#aaaaa\naaaaaa\naaaaa");
  console.log(md);
  md = md.replace(/(<p>.*?)(?!<.*)\n(?!.*>)(.*?<\/p>)/, '$1<br>$2');
  console.log(md);
  document.body.innerHTML = md;
}

//window.onload = test;
window.onload = getFile;
