function getFile() {
  const req = new XMLHttpRequest() // XMLHttpRrequestオブジェクトを生成
  req.responseType = 'text'
  const prop = GetQueryString()
  const filename = prop && prop.page ? prop.page : 'test.md'
  req.open('get', 'md/' + filename, true) // アクセスするファイルを指定
  req.send(null) // HTTPリクエストの発行
  // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ
  req.onload = function() {
    marked.setOptions({
      langPrefix: ''
    })
    const md = marked(req.responseText)
    document.querySelector('#sec_main').innerHTML = md
    hljs.initHighlightingOnLoad()
    Array.from(document.querySelectorAll('pre code'), e =>
      (function() {
        e.classList.add('hljs')
        return hljs.highlightBlock(e)
      })()
    )
  }
}

/* thanks https://www.ipentec.com/document/document.aspx?page=javascript-get-parameter */
function GetQueryString() {
  if (document.location.search.length > 1) {
    const query = document.location.search.substring(1)
    const parameters = query.split('&')
    const result = new Object()
    for (let i = 0; i < parameters.length; i++) {
      const element = parameters[i].split('=')
      const paramName = decodeURIComponent(element[0])
      const paramValue = decodeURIComponent(element[1])
      result[paramName] = decodeURIComponent(paramValue)
    }
    return result
  }
  return null
}

function gitHubCallBack(json) {
  const parent = document.getElementById('sec_info')
  for (const file of json.data) {
    const ele = document.createElement('a')
    ele.setAttribute('href', './index.html?page=' + file.name)
    ele.innerHTML = file.name + '<br>'
    parent.appendChild(ele)
  }
}

window.onload = getFile
