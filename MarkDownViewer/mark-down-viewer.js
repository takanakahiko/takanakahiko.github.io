function getFile(){
    var req = new XMLHttpRequest(); // XMLHttpRrequestオブジェクトを生成
    req.responseType = "text";
    var prop = GetQueryString();
    var filename = (prop && prop["page"]) ? prop["page"] : "test.md";
    req.open("get", filename , true); // アクセスするファイルを指定
    req.send(null);// HTTPリクエストの発行
    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ
    req.onload = function(){
      marked.setOptions({
          langPrefix: ''
      });
      var md = marked(req.responseText);
      document.querySelector('#sec_main').innerHTML = md;
      hljs.initHighlightingOnLoad();
      Array.from(
        document.querySelectorAll("pre code"),
        e => (function(){
          e.classList.add("hljs");
          return hljs.highlightBlock(e);
        })()
      );
    }
}

/* thanks https://www.ipentec.com/document/document.aspx?page=javascript-get-parameter */
function GetQueryString() {
  if (1 < document.location.search.length) {
    var query = document.location.search.substring(1);
    var parameters = query.split('&');
    var result = new Object();
    for (var i = 0; i < parameters.length; i++) {
      var element = parameters[i].split('=');
      var paramName = decodeURIComponent(element[0]);
      var paramValue = decodeURIComponent(element[1]);
      result[paramName] = decodeURIComponent(paramValue);
    }
    return result;
  }
  return null;
}

window.onload = getFile;
