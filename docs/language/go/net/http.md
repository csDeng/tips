## web工作流程

- Web服务器的工作原理可以简单地归纳为
  - 客户机通过TCP/IP协议建立到服务器的TCP连接
  - 客户端向服务器发送HTTP协议请求包，请求服务器里的资源文档
  - 服务器向客户机发送HTTP协议应答包，如果请求的资源包含有动态语言的内容，那么服务器会调用动态语言的解释引擎负责处理“动态内容”，并将处理得到的数据返回给客户端
  - 客户机与服务器断开。由客户端解释HTML文档，在客户端屏幕上渲染图形结果

## HTTP协议

- 超文本传输协议(HTTP，HyperText Transfer Protocol)是互联网上应用最为广泛的一种网络协议，它详细规定了浏览器和万维网服务器之间互相通信的规则，通过因特网传送万维网文档的数据传送协议

- HTTP协议通常承载于TCP协议之上

  ## `talk is cheap , show me the code`

<CodeGroup>
<CodeGroupItem title='server.go' active>

```go
package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func main() {
	//http://127.0.0.1:8000/go
	// 单独写回调函数
	http.HandleFunc("/go", myHandler)
	// addr：监听的地址
	// handler：回调函数
	http.ListenAndServe("127.0.0.1:8000", nil)
}

// handler函数
func myHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.RemoteAddr, "连接成功")
	// 请求方式：GET POST DELETE PUT UPDATE
	fmt.Println("method:", r.Method)
	// /go
	fmt.Println("url:", r.URL.Path)
	fmt.Println("header:", r.Header)
	fmt.Println("body:", r.Body)
	// 回复
	switch r.Method {
	case "GET":
		{
			w.Write([]byte("get"))
		}
	case "POST":
		{
			// 读取body内容
			content, err := ioutil.ReadAll(r.Body)
			if err != nil {
				log.Println("read post body occurs error: ", err)
			}
			fmt.Println("post body:", string(content))
			w.Write([]byte("post"))
		}
	default:
		{
			w.Write([]byte(r.Method))
		}
	}
	fmt.Println("end---")
}

```

</CodeGroupItem>
<CodeGroupItem title='client.go'>

```go
package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"strings"
)

type Data struct {
	Name string `json:"name"`
	Age  int8   `json:"age"`
}

func main() {
	//resp, _ := http.Get("http://www.baidu.com")
	//fmt.Println(resp)
	resp, _ := http.Get("http://127.0.0.1:8000/go")
	ResponseHandler(resp)
	fmt.Println("----")

	data := &Data{
		Name: "hello",
		Age:  18,
	}

	// 转换成json格式
	data_json, err := json.Marshal(data)
	if err != nil {
		log.Println("json.Marshaler error: ", err)
	}
	fmt.Println(string(data_json))
	resp, _ = http.Post("http://127.0.0.1:8000/go", "application/json", strings.NewReader(string(data_json)))
	ResponseHandler(resp)
}

func ResponseHandler(resp *http.Response) {
	defer resp.Body.Close()
	// 200 OK

	fmt.Println(resp.Status)
	fmt.Println(resp.Header)

	buf := make([]byte, 1024)
	for {
		// 接收服务端信息
		n, err := resp.Body.Read(buf)
		if err != nil && err != io.EOF {
			fmt.Println(err)
			return
		} else {
			fmt.Println("读取完毕")
			res := string(buf[:n])
			fmt.Println(res)
			break
		}
	}
}

```
</CodeGroupItem>
</CodeGroup>

结果
<CodeGroup>
<CodeGroupItem title='server' active>

```go
> go run .\server.go
127.0.0.1:54856 连接成功
method: GET
url: /go
header: map[Accept-Encoding:[gzip] User-Agent:[Go-http-client/1.1]]
body: {}
end---
127.0.0.1:54856 连接成功
method: POST
url: /go
header: map[Accept-Encoding:[gzip] Content-Length:[25] Content-Type:[application/json] User-Agent:[Go-http-client/1.1]]
body: &{0xc0000b6048 <nil> <nil> false true {0 0} false false false 0x475080}
post body: {"name":"hello","age":18}
end---

```
</CodeGroupItem>
<CodeGroupItem title='client'>

```go
> go run .\client.go
200 OK
map[Content-Length:[3] Content-Type:[text/plain; charset=utf-8] Date:[Mon, 25 Apr 2022 17:17:31 GMT]]
读取完毕
get
----
{"name":"hello","age":18}
200 OK
map[Content-Length:[4] Content-Type:[text/plain; charset=utf-8] Date:[Mon, 25 Apr 2022 17:17:31 GMT]]
读取完毕
post
```
</CodeGroupItem>
</CodeGroup>





### `http handler`的格式模板

```go
// HandleFunc registers the handler function for the given pattern
// in the DefaultServeMux.
// The documentation for ServeMux explains how patterns are matched.
func HandleFunc(pattern string, handler func(ResponseWriter, *Request)) {
	DefaultServeMux.HandleFunc(pattern, handler)
}
```



