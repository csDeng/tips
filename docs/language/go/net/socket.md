# socket 编程

`Socket`是BSD UNIX的进程通信机制，通常也称作”套接字”，用于描述IP地址和端口，是一个通信链的句柄。`Socket`可以理解为TCP/IP网络的API，它定义了许多函数或例程，程序员可以用它们来开发TCP/IP网络上的应用程序。电脑上运行的应用程序通常通过”套接字”向网络发出请求或者应答网络请求。

## 1. socket图解

Socket是应用层与TCP/IP协议族通信的中间软件抽象层。在设计模式中，Socket其实就是一个门面模式，它把复杂的TCP/IP协议族隐藏在Socket后面，对用户来说只需要调用Socket规定的相关函数，让Socket去组织符合指定的协议数据然后进行通信。

![null](./pics/socket/m_7a3fd62eebab50a962857bf9a421495a_r.png)

- Socket又称“套接字”，应用程序通常通过“套接字”向网络发出请求或者应答网络请求
- 常用的Socket类型有两种：流式Socket和数据报式Socket，流式是一种面向连接的Socket，针对于面向连接的TCP服务应用，数据报式Socket是一种无连接的Socket，针对于无连接的UDP服务应用
- TCP：比较靠谱，面向连接，比较慢
- UDP：不是太靠谱，比较快

举个例子：TCP就像货到付款的快递，送到家还必须见到你人才算一整套流程。UDP就像某快递快递柜一扔就走管你收到收不到，一般直播用UDP。



## 2. TCP 编程

TCP/IP(Transmission Control Protocol/Internet Protocol) 即传输控制协议/网际协议，是一种面向连接（连接导向）的、可靠的、基于字节流的传输层（Transport layer）通信协议，因为是面向连接的协议，数据像水流一样传输，会存在黏包问题。

### TCP服务端

一个TCP服务端可以同时连接很多个客户端，例如世界各地的用户使用自己电脑上的浏览器访问淘宝网。因为Go语言中创建多个goroutine实现并发非常方便和高效，所以我们可以每建立一次链接就创建一个goroutine去处理。

TCP服务端程序的处理流程：

```
    1.监听端口
    2.接收客户端请求建立链接
    3.创建goroutine处理链接。   
```

我们使用Go语言的net包实现的TCP服务端代码如下：

```go
// tcp/server/main.go

// TCP server端

// 处理函数
func process(conn net.Conn) {
    defer conn.Close() // 关闭连接
    for {
        reader := bufio.NewReader(conn)
        var buf [128]byte
        n, err := reader.Read(buf[:]) // 读取数据
        if err != nil {
            fmt.Println("read from client failed, err:", err)
            break
        }
        recvStr := string(buf[:n])
        fmt.Println("收到client端发来的数据：", recvStr)
        conn.Write([]byte(recvStr)) // 发送数据
    }
}

func main() {
    listen, err := net.Listen("tcp", "127.0.0.1:20000")
    if err != nil {
        fmt.Println("listen failed, err:", err)
        return
    }
    for {
        conn, err := listen.Accept() // 建立连接
        if err != nil {
            fmt.Println("accept failed, err:", err)
            continue
        }
        go process(conn) // 启动一个goroutine处理连接
    }
}   
```

将上面的代码保存之后编译成server或server.exe可执行文件。

### TCP客户端

一个TCP客户端进行TCP通信的流程如下：

```
    1.建立与服务端的链接
    2.进行数据收发
    3.关闭链接   
```

使用Go语言的net包实现的TCP客户端代码如下：

```go
// tcp/client/main.go

// 客户端
func main() {
    conn, err := net.Dial("tcp", "127.0.0.1:20000")
    if err != nil {
        fmt.Println("err :", err)
        return
    }
    defer conn.Close() // 关闭连接
    inputReader := bufio.NewReader(os.Stdin)
    for {
        input, _ := inputReader.ReadString('\n') // 读取用户输入
        inputInfo := strings.Trim(input, "\r\n")
        if strings.ToUpper(inputInfo) == "Q" { // 如果输入q就退出
            return
        }
        _, err = conn.Write([]byte(inputInfo)) // 发送数据
        if err != nil {
            return
        }
        buf := [512]byte{}
        n, err := conn.Read(buf[:])
        if err != nil {
            fmt.Println("recv failed, err:", err)
            return
        }
        fmt.Println(string(buf[:n]))
    }
}   
```

将上面的代码编译成client或client.exe可执行文件，先启动server端再启动client端，在client端输入任意内容回车之后就能够在server端看到client端发送的数据，从而实现TCP通信。

## 3.UDP编程

UDP协议（User Datagram Protocol）中文名称是用户数据报协议，是OSI（Open System Interconnection，开放式系统互联）参考模型中一种无连接的传输层协议，不需要建立连接就能直接进行数据发送和接收，属于不可靠的、没有时序的通信，但是UDP协议的实时性比较好，通常用于视频直播相关领域。

### UDP服务端

使用Go语言的net包实现的UDP服务端代码如下：

```go
package main

import (
	"log"
	"net"
)

func main() {
	listen, err := net.ListenUDP("udp", &net.UDPAddr{
		IP:   net.IPv4(127, 0, 0, 1),
		Port: 8080,
	})

	if err != nil {
		log.Fatalln("listen occurs error: ", err)
	}
	defer listen.Close()

	for {
		var data [1024]byte

		n, addr, err := listen.ReadFromUDP(data[:])
		if err != nil {
			log.Fatalln("read from udp occurs error: ", err)
		}

		log.Printf("read from %v , content is %s, length = %d", addr, data[:n], n)

		_, err = listen.WriteToUDP(data[:n], addr)

		if err != nil {
			log.Println("write occurs error: ", err)
			continue
		}

	}
}

```

### UDP客户端

使用Go语言的net包实现的UDP客户端代码如下：

```go
package main

import (
	"fmt"
	"log"
	"net"
)

var Size int16

func init() {
	Size = 1024
	fmt.Println("size = ", Size)
}
func main() {
	socket, err := net.DialUDP("udp", nil, &net.UDPAddr{
		IP:   net.IPv4(127, 0, 0, 1),
		Port: 8080,
	})
	if err != nil {
		log.Fatal("udp dial occurs error: ", err)
	}
	defer socket.Close()

	sendData := []byte("hello world")
	_, err = socket.Write(sendData)
	if err != nil {
		log.Println("write occurs error: ", err)
	}

	data := make([]byte, Size)
	n, remoteAddr, err := socket.ReadFromUDP(data)
	if err != nil {
		log.Printf("read from %v occurs error: %v\r\n", remoteAddr, err)
	}
	log.Printf("recv:%s addr:%v length:%d", data[:n], remoteAddr, n)

}

```

## 4. 实现一个全双工的简易聊天室

**全双工**（**full-duplex**）的系统允许二台设备间同时进行双向资料传输。全双工的系统可以用[复线铁路](https://zh.wikipedia.org/wiki/复线铁路)类比。两个方向的车辆因使用不同的轨道，因此不会互相影响。

一般的[电话](https://zh.wikipedia.org/wiki/電話)、[手机](https://zh.wikipedia.org/wiki/手機)就是全双工的系统，因为在讲话时同时也可以听到对方的声音。

### 需求分析

1. 服务端可以时刻收发信息
2. 客户端也可以时刻收发信息

### 服务端







### 客户端











## Reference

[网络编程 - 地鼠文档 (topgoer.cn)](https://www.topgoer.cn/docs/golang/chapter08)











