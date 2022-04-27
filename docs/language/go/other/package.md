# Go包

[[TOC]]



:::details 源于

[[吐血整理\]超全golang面试题合集+golang学习指南+golang知识图谱+成长路线 | Go 技术论坛 (learnku.com)](https://learnku.com/articles/56078)

:::

## 常用包

|    常用包     |                             说明                             |
| :-----------: | :----------------------------------------------------------: |
|      fmt      | 实现格式化的输入输出操作，其中的 fmt.Printf () 和 fmt.Println () 是开发者使用最为频繁的函数。 |
|      io       | 实现了一系列非平台相关的 IO 相关接口和实现，比如提供了对 os 中系统相关的 IO 功能的封装。我们在进行流式读写（比如读写文件）时，通常会用到该包。 |
|     bufio     | 它在 io 的基础上提供了缓存功能。在具备了缓存功能后， bufio 可以比较方便地提供 ReadLine 之类的操作。 |
|    strconv    |             提供字符串与基本数据类型互转的能力。             |
|      os       | 本包提供了对操作系统功能的非平台相关访问接口。接口为 Unix 风格。提供的功能包括文件操作、进程管理、信号和用户账号等。 |
|     sync      | 它提供了基本的同步原语。在多个 goroutine 访问共享资源的时候，需要使用 sync 中提供的锁机制。 |
|     flag      | 它提供命令行参数的规则定义和传入参数解析的功能。绝大部分的命令行程序都需要用到这个包。 |
| encoding/json | JSON 目前广泛用做网络程序中的通信格式。本包提供了对 JSON 的基本支持，比如从一个对象序列化为 JSON 字符串，或者从 JSON 字符串反序列化出一个具体的对象等。 |
|     http      | 通过 http 包，只需要数行代码，即可实现一个爬虫或者一个 Web 服务器，这在传统语言中是无法想象的。 |



## 常用第三方包

|                    包                    |                             地址                             |
| :--------------------------------------: | :----------------------------------------------------------: |
|                数据库操作                | [github.com/jinzhu/gorm](https://github.com/jinzhu/gorm) [github.com/go-xorm/xorm](https://github.com/go-xorm/xorm) |
|                 搜索 es                  | [github.com/olivere/elastic](https://github.com/olivere/elastic) |
|              rocketmq 操作               | [github.com/apache/rocketmq-client-go/v2](https://github.com/apache/rocketmq-client-go/v2) |
|              rabbitmq 操作               | [github.com/streadway/amqp](https://github.com/streadway/amqp) |
|                redis 操作                | [github.com/go-redis/redis](https://github.com/go-redis/redis) |
|                etcd 操作                 | [github.com/coreos/etcd/clientv3](https://pkg.go.dev/go.etcd.io/etcd/clientv3) |
|                  kafka                   | [github.com/Shopify/sarama](https://github.com/Shopify/sarama) [github.com/bsm/sarama-cluster](https://github.com/bsm/sarama-cluster) |
|                excel 操作                | [github.com/360EntSecGroup-Skylar/excelize](https://github.com/360EntSecGroup-Skylar/excelize) |
|                 ppt 操作                 | [golang.org/x/tools/cmd/present](https://golang.org/x/tools/cmd/present) |
|               go-svg 操作                | [github.com/ajstarks/svgo](https://github.com/ajstarks/svgo) |
|            go 布隆过滤器实现             | [github.com/AndreasBriese/bbloom](https://github.com/AndreasBriese/bbloom) |
|                json 相关                 | [github.com/bitly/go-simplejson](https://github.com/bitly/go-simplejson) |
|              LRU Cache 实现              | [https://github.com/bluele/gcache ](https://github.com/bluele/gcache)https://github.com/hashicorp/golang-lru |
|            go 运行时函数替换             |                https://github.com/bouk/monkey                |
|                   toml                   | [https://github.com/toml-lang/toml ](https://github.com/toml-lang/toml)https://github.com/naoina/toml |
|                   yaml                   |               https://github.com/go-yaml/yaml                |
|                  viper                   |                https://github.com/spf13/viper                |
|            go key/value 存储             |               https://github.com/etcd-io/bbolt               |
|  基于 ringbuffer 的无锁 golang workpool  |             https://github.com/Dai0522/workpool              |
|              轻量级的协程池              |              https://github.com/ivpusic/grpool               |
|          打印 go 的详细数据结构          |              https://github.com/davecgh/go-spew              |
|        基于 ringbuffer 实现的队列        |               https://github.com/eapache/queue               |
|                   拼音                   |                https://github.com/go-ego/gpy                 |
|                   分词                   |                https://github.com/go-ego/gse                 |
|                   搜索                   |                https://github.com/go-ego/riot                |
|               windows COM                |               https://github.com/go-ego/cedar                |
|                 session                  |             https://github.com/gorilla/sessions              |
|                   路由                   |                https://github.com/gorilla/mux                |
|                websocket                 |             https://github.com/gorilla/websocket             |
|              Action handler              |             https://github.com/gorilla/handlers              |
|                   csrf                   |               https://github.com/gorilla/csrf                |
|                 context                  |              https://github.com/gorilla/context              |
|              过滤 html 标签              |        https://github.com/grokify/html-strip-tags-go         |
|          可配置的 HTML 标签过滤          |          https://github.com/microcosm-cc/bluemonday          |
|         根据 IP 获取地理位置信息         |            https://github.com/ipipdotnet/ipdb-go             |
|             html 转 markdown             |            https://github.com/jaytaylor/html2text            |
|            goroutine 本地存储            |                https://github.com/jtolds/gls                 |
|                 彩色输出                 |    [github.com/mgutz/ansi](https://github.com/mgutz/ansi)    |
|                 表格打印                 | [github.com/olekukonko/tablewriter](https://github.com/olekukonko/tablewriter) |
|         reflect 更高效的反射 API         | [github.com/modern-go/reflect2](https://github.com/modern-go/reflect2) |
| msgfmt (格式化字符串，将 % 更换为变量名) | [github.com/modern-go/msgfmt](https://github.com/modern-go/msgfmt) |
|            可取消的 goroutine            | [github.com/modern-go/concurrent](https://github.com/modern-go/concurrent) |
|                 深度拷贝                 | [github.com/mohae/deepcopy](https://github.com/mohae/deepcopy) |
|             安全的类型转换包             |    [github.com/spf13/cast](https://github.com/spf13/cast)    |
|             从文本中提取链接             |   [github.com/mvdan/xurls](https://github.com/mvdan/xurls)   |
|        字符串格式处理（驼峰转换）        | [godoc.org/github.com/naoina/go-str...](https://godoc.org/github.com/naoina/go-stringutil) |
|              文本 diff 实现              | [github.com/pmezard/go-difflib](https://github.com/pmezard/go-difflib) |
|                uuid 相关                 | [github.com/satori/go.uuid](https://github.com/satori/go.uuid) [github.com/snluu/uuid](https://github.com/snluu/uuid) |
|          去除 UTF 编码中的 BOM           |      [github.com/ssor/bom](https://github.com/ssor/bom)      |
|                 图片缩放                 |   [github.com/nfnt/resize](https://github.com/nfnt/resize)   |
|             生成 mock server             |  [github.com/otokaze/mock](https://github.com/otokaze/mock)  |
|          go 性能上报到 influxdb          | [github.com/rcrowley/go-metrics](https://github.com/rcrowley/go-metrics) |
|           go zookeeper 客户端            | [github.com/samuel/go-zookeeper](https://github.com/samuel/go-zookeeper) |
|                go thrift                 | [github.com/samuel/go-thrift](https://github.com/samuel/go-thrift) |
|               MQTT 客户端                | [github.com/shirou/mqttcli](https://github.com/shirou/mqttcli) |
|                  hbase                   | [github.com/tsuna/gohbase](https://github.com/tsuna/gohbase) |
|          go 性能上报到 influxdb          | [github.com/rcrowley/go-metrics](https://github.com/rcrowley/go-metrics) |
|         go 性能上报到 prometheus         | [github.com/deathowl/go-metrics-pro...](https://github.com/deathowl/go-metrics-prometheus) |
|                 ps utils                 | [github.com/shirou/gopsutil](https://github.com/shirou/gopsutil) |
|                 小数处理                 | [github.com/shopspring/decimal](https://github.com/shopspring/decimal) |
|          结构化日志处理 (json)           | [github.com/sirupsen/logrus](https://github.com/sirupsen/logrus) |
|            命令行程序框架 cli            |    [github.com/urfave/cli](https://github.com/urfave/cli)    |
|           命令行程序框架 cobra           |   [github.com/spf13/cobra](https://github.com/spf13/cobra)   |





## 必看项目

|  项目  |                             地址                             |                       说明                        |
| :----: | :----------------------------------------------------------: | :-----------------------------------------------: |
|  gin   | [github.com/olivere/elastic](https://github.com/olivere/elastic) |    轻量级 web 框架，很多公司都是基于它进行魔改    |
| beego  |   [github.com/beego/beego](https://github.com/beego/beego)   |              也是 web 框架，比较全能              |
| kratos | [github.com/go-kratos/kratos](https://github.com/go-kratos/kratos) |   bilibili 开源的微服务框架，b 站出品必属于精品   |
|  TiDB  |  [github.com/pingcap/tidb](https://github.com/pingcap/tidb)  | 见识过 mysql 性能瓶颈之后你会想要选择的一款数据库 |





## 完整标准库列表

|    包     |      子包      |                             说明                             |
| :-------: | :------------: | :----------------------------------------------------------: |
|   bufio   |     bytes      |                  提供了对字节切片操作的函数                  |
|           |     crypto     |                     收集了常见的加密常数                     |
|           |     errors     |                     实现了操作错误的函数                     |
|           |     Expvar     |    为公共变量提供了一个标准的接口，如服务器中的运算计数器    |
|           |      flag      |                     实现了命令行标记解析                     |
|           |      fmt       |                     实现了格式化输入输出                     |
|           |      hash      |                      提供了哈希函数接口                      |
|           |      html      |            实现了一个 HTML5 兼容的分词器和解析器             |
|           |     image      |                  实现了一个基本的二维图像库                  |
|           |       io       |                 提供了对 I/O 原语的基本接口                  |
|           |      log       |          它是一个简单的记录包，提供最基本的日志功能          |
|           |      math      |                提供了一些基本的常量和数学函数                |
|           |      mine      |                    实现了部分的 MIME 规范                    |
|           |      net       | 提供了一个对 UNIX 网络套接字的可移植接口，包括 TCP/IP、 UDP 域名解析和 UNIX 域套接字 |
|           |       os       |            为操作系统功能实现了一个平台无关的接口            |
|           |      path      |              实现了对斜线分割的文件名路径的操作              |
|           |    reflect     |       实现了运行时反射，允许一个程序以任意类型操作对象       |
|           |     regexp     |                 实现了一个简单的正则表达式库                 |
|           |    runtime     |   包含与 Go 运行时系统交互的操作，如控制 goroutine 的函数    |
|           |      sort      |                  提供对集合排序的基础函数集                  |
|           |    strconv     |            实现了在基本数据类型和字符串之间的转换            |
|           |    strings     |                  实现了操作字符串的简单函数                  |
|           |      sync      |                提供了基本的同步机制，如互斥锁                |
|           |    syscall     |               包含一个低级的操作系统原语的接口               |
|           |    testing     |                  提供对自动测试 Go 包的支持                  |
|           |      time      |                   提供测量和显示时间的功能                   |
|           |    unicode     |                  Unicode 编码相关的基础函数                  |
|  archive  |      tar       |                  实现对 tar 压缩文档的访问                   |
|           |      zip       |               提供对 ZIP 压缩文档的读和写支持                |
| compress  |     bzip2      |                     实现了 bzip2 解压缩                      |
|           |     flate      |       实现了 RFC 1951 中所定义的 DEFLATE 压缩数据格式        |
|           |      gzip      |     实现了 RFC 1951 中所定义的 gzip 格式压缩文件的读和写     |
|           |      lzw       |       实现了 Lempel-Ziv-Welch 编码格式的压缩的数据格式       |
|           |      zlib      |     实现了 RFC 1950 中所定义的 zlib 格式压缩数据的读和写     |
| container |      heap      |       提供了实现 heap.Interface 接口的任何类型的堆操作       |
|           |      lsit      |                       实现了一个双链表                       |
|           |      ring      |                    实现了对循环链表的操作                    |
|  crypto   |      aes       |              实现了 AES 加密（以前的 Rijndael）              |
|           |     cipher     |   实现了标准的密码块模式，该模式可包装进低级的块加密实现中   |
|           |      des       | 实现了数据加密标准（ Data Encryption Standard，DES）和三重数据加密算法（ TripleData Encryption Algorithm， TDEA） |
|           |      dsa       | 实现了 FIPS 186-3 所定义的数据签名算法（ Digital Signature Algorithm） |
|           |     ecdsa      | 实现了 FIPS 186-3 所定义的椭圆曲线数据签名算法（ Elliptic Curve Digital SignatureAlgorithm） |
|           |    elliptic    |               实现了素数域上几个标准的椭圆曲线               |
|           |      hmac      | 实现了键控哈希消息身份验证码（ Keyed-Hash Message Authentication Code，HMAC） |
|           |      md5       |           实现了 RFC 1321 中所定义的 MD5 哈希算法            |
|           |      rand      |              实现了一个加密安全的伪随机数生成器              |
|           |      rc4       | 实现了 RC4 加密，其定义见 Bruce Schneier 的应用密码学（ Applied Cryptography） |
|           |      rsa       |              实现了 PKCS#1 中所定义的 RSA 加密               |
|           |      sha1      |           实现了 RFC 3174 中所定义的 SHA1 哈希算法           |
|           |     sha256     |    实现了 FIPS 180-2 中所定义的 SHA224 和 SHA256 哈希算法    |
|           |     sha512     |    实现了 FIPS 180-2 中所定义的 SHA384 和 SHA512 哈希算法    |
|           |     subtle     |   实现了一些有用的加密函数，但需要仔细考虑以便正确应用它们   |
|           |      tls       |          部分实现了 RFC 4346 所定义的 TLS 1.1 协议           |
|           |      x509      |                可解析 X.509 编码的键值和证书                 |
|           |   x509/pkix    | 包含用于对 X.509 证书、 CRL 和 OCSP 的 ASN.1 解析和序列化的共享的、低级的结构 |
| database  |      sql       |                围绕 SQL 提供了一个通用的接口                 |
|           |   sql/driver   |     定义了数据库驱动所需实现的接口，同 sql 包的使用方式      |
|   debug   |     dwarf      | 提供了对从可执行文件加载的 DWARF 调试信息的访问，这个包对于实现 Go 语言的调试器非常有价值 |
|           |      elf       | 实现了对 ELF 对象文件的访问。 ELF 是一种常见的二进制可执行文件和共享库的文件格式。 Linux 采用了 ELF 格式 |
|           |     gosym      |  访问 Go 语言二进制程序中的调试信息。对于可视化调试很有价值  |
|           |     macho      | 实现了对 [Mach-O 对象文件](http://developer.apple.com/mac/library/documentation/DeveloperTools/Conceptual/MachORuntime/Reference/reference.html)的访问 |
|           |       pe       | 实现了对 PE（ Microsoft Windows Portable Executable）文件的访问 |
| encoding  |    ascii85     | 实现了 ascii85 数据编码，用于 btoa 工具和 Adobe’s PostScript 以及 PDF 文档格式 |
|           |      asn1      | 实现了解析 DER 编码的 ASN.1 数据结构，其定义见 ITU-T Rec X.690 |
|           |     base32     |            实现了 RFC 4648 中所定义的 base32 编码            |
|           |     base64     |            实现了 RFC 4648 中所定义的 base64 编码            |
|           |     binary     | 实现了在无符号整数值和字节串之间的转化，以及对固定尺寸值的读和写 |
|           |      csv       |             可读和写由逗号分割的数值（ csv）文件             |
|           |      gob       | 管理 gob 流 —— 在编码器（发送者）和解码器（接收者）之间进行二进制值交换 |
|           |      hex       |                  实现了十六进制的编码和解码                  |
|           |      json      |       实现了定义于 RFC 4627 中的 JSON 对象的编码和解码       |
|           |      pem       |         实现了 PEM（ Privacy Enhanced Mail）数据编码         |
|           |      xml       |     实现了一个简单的可理解 XML 名字空间的 XML 1.0 解析器     |
|    go     |      ast       |              声明了用于展示 Go 包中的语法树类型              |
|           |     build      |                    提供了构建 Go 包的工具                    |
|           |      doc       |         从一个 Go AST（抽象语法树）中提取源代码文档          |
|           |     parser     |                  实现了一个 Go 源文件解析器                  |
|           |    printer     |               实现了对 AST（抽象语法树）的打印               |
|           |    scanner     |               实现了一个 Go 源代码文本的扫描器               |
|           |     token      | 定义了代表 Go 编程语言中词法标记以及基本操作标记（ printing、 predicates）的常量 |
|   hash    |    adler32     |                    实现了 Adler-32 校验和                    |
|           |     crc32      |          实现了 32 位的循环冗余校验或 CRC-32 校验和          |
|           |     crc64      |          实现了 64 位的循环冗余校验或 CRC-64 校验和          |
|           |      fnv       | 实现了 Glenn Fowler、 Landon Curt Noll 和 Phong Vo 所创建的 FNV-1 和 FNV-1a 未加密哈希函数 |
|   html    |    template    |            它自动构建 HTML 输出，并可防止代码注入            |
|   image   |     color      |                    实现了一个基本的颜色库                    |
|           |      draw      |                       提供一些做图函数                       |
|           |      gif       |                  实现了一个 GIF 图像解码器                   |
|           |      jpeg      |              实现了一个 JPEG 图像解码器和编码器              |
|           |      png       |              实现了一个 PNG 图像解码器和编码器               |
|   index   |  suffixarray   |         通过构建内存索引实现的高速字符串匹配查找算法         |
|    io     |     ioutil     |                  实现了一些实用的 I/O 函数                   |
|    log    |     syslog     |                提供了对系统日志服务的简单接口                |
|   math    |      big       |                实现了多精度的算术运算（大数）                |
|           |     cmplx      |               为复数提供了基本的常量和数学函数               |
|           |      rand      |                     实现了伪随机数生成器                     |
|   mime    |   multipart    |        实现了在 RFC 2046 中定义的 MIME 多个部分的解析        |
|    net    |      http      |               提供了 HTTP 客户端和服务器的实现               |
|           |      mail      |                    实现了对邮件消息的解析                    |
|           |      rpc       | 提供了对一个来自网络或其他 I/O 连接的对象可导出的方法的访问  |
|           |      smtp      | 实现了定义于 RFC 5321 中的简单邮件传输协议（ Simple Mail Transfer Protocol) |
|           |   textproto    | 实现了在 HTTP、 NNTP 和 SMTP 中基于文本的通用的请求 / 响应协议 |
|           |      url       |                   解析 URL 并实现查询转义                    |
|           |    http/cgi    |        实现了定义于 RFC 3875 中的 CGI（通用网关接口）        |
|           |   http/fcgi    |                     实现了 FastCGI 协议                      |
|           | http/httptest  |                   提供了一些 HTTP 测试应用                   |
|           | http/httputil  | 提供了一些 HTTP 应用函数，这些是对 net/http 包中的东西的补充，只不过相对不太常用 |
|           |   http/pprof   | 通过其 HTTP 服务器运行时提供性能测试数据，该数据的格式正是 pprof 可视化工具需要的 |
|           |  rpc/jsonrpc   |   为 rpc 包实现了一个 JSON-RPC ClientCodec 和 ServerCodec    |
|    os     |      exec      |                        可运行外部命令                        |
|           |      user      |                通过名称和 id 进行用户账户检查                |
|   path    |    filepath    | 实现了以与目标操作系统定义文件路径相兼容的方式处理文件名路径 |
|  regexp   |     syntax     |                   将正则表达式解析为语法树                   |
|  runtime  |     debug      |              包含当程序在运行时调试其自身的功能              |
|           |     pprof      |      以 pprof 可视化工具需要的格式写运行时性能测试数据       |
|   sync    |     atomic     |        提供了低级的用于实现同步算法的原子级的内存机制        |
|  testing  |     iotest     |  提供一系列测试目的的类型，实现了 Reader 和 Writer 标准接口  |
|           |     quick      |                 实现了用于黑箱测试的实用函数                 |
|           |     script     |                    帮助测试使用通道的代码                    |
|   text    |    scanner     |            为 UTF-8 文本提供了一个扫描器和分词器             |
|           |   tabwriter    | 实现了一个写筛选器（ tabwriter.Writer），它可将一个输入的 tab 分割的列翻译为适当对齐的文本 |
|           |    template    |     数据驱动的模板引擎，用于生成类似 HTML 的文本输出格式     |
|           | template/parse |                    为 template 构建解析树                    |
|           | unicode/utf16  |               实现了 UTF-16 序列的的编码和解码               |
|           |  unicode/utf8  |          实现了支持以 UTF-8 编码的文本的函数和常数           |





## 其他优秀的开源工具分类



### 音频和音乐

|                              包                              |                             说明                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|       [EasyMIDI](https://github.com/algoGuy/EasyMIDI)        | EasyMidi 是一个简单可靠的库，用于处理标准 Midi 文件（SMF）。 |
|            [flac](https://github.com/mewkiz/flac)            |       支持 FLAC 流的 Native Go FLAC 编码器 / 解码器。        |
|           [gaad](https://github.com/Comcast/gaad)            |                  本机 Go AAC 比特流解析器。                  |
|           [go-sox](https://github.com/krig/go-sox)           |                   用于 go 的 libsox 绑定。                   |
|    [go_mediainfo](https://github.com/zhulik/go_mediainfo)    |                用于 go 的 libmediainfo 绑定。                |
|    [gosamplerate](https://github.com/dh1tw/gosamplerate)     |               用于 go 的 libsamplerate 绑定。                |
|           [id3v2](https://github.com/bogem/id3v2)            |          用于 Go 的快速，稳定的 ID3 解析和编写库。           |
|         [malgo](https://github.com/gen2brain/malgo)          |                         迷你音频库。                         |
|         [minimp3](https://github.com/tosone/minimp3)         |                    轻量级 MP3 解码器库。                     |
|             [mix](https://github.com/go-mix/mix)             |          为音乐应用程序基于序列转到本地音频混合器。          |
|            [mp3](https://github.com/tcolgate/mp3)            |                    Native Go MP3 解码器。                    |
| [music-theory](https://github.com/go-music-theory/music-theory) |                    Go 中的音乐理论模型。                     |
|          [Oto](https://github.com/hajimehoshi/oto)           |                在多个平台上播放声音的低级库。                |
|    [PortAudio](https://github.com/gordonklaus/portaudio)     |             用于 PortAudio 音频 I / O 库的绑定。             |
|        [portmidi](https://github.com/rakyll/portmidi)        |                       绑定 PortMidi。                        |
|        [taglib](https://github.com/wtolson/go-taglib)        |                       为 taglib 绑定。                       |
|         [vorbis](https://github.com/mccoyst/vorbis)          |     “本机” Go Vorbis 解码器（使用 CGO，但没有依赖项）。      |
|       [waveform](https://github.com/mdlayher/waveform)       |            Go 程序包，能够从音频流生成波形图像。             |



### 数据结构

|                              包                              |                             说明                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|   [algorithms](https://github.com/shady831213/algorithms)    |                 算法和数据结构。CLRS 研究。                  |
|    [binpacker](https://github.com/zhuangsirui/binpacker)     |    二进制打包程序和解包程序可帮助用户构建自定义二进制流。    |
|           [bit](https://github.com/yourbasic/bit)            |         具有额外的位旋转功能的 Golang 设置数据结构。         |
|          [bitset](https://github.com/willf/bitset)           |                      实现位集的 Go 包。                      |
|           [bloom](https://github.com/zhenjl/bloom)           |                在 Go 中实现的 Bloom 过滤器。                 |
|         [bloom](https://github.com/yourbasic/bloom)          |                  Golang Bloom 过滤器实现。                   |
|   [boomfilters](https://github.com/tylertreat/BoomFilters)   |              用于处理连续无界流的概率数据结构。              |
| [concurrent-writer](https://github.com/free/concurrent-writer) |                高并发直接替换 bufio.Writer。                 |
|     [conjungo](https://github.com/InVisionApp/conjungo)      |                一个小型，强大而灵活的合并库。                |
| [count-min-log](https://github.com/seiflotfy/count-min-log)  | 执行 Count-Min-Log 草图：使用近似计数器进行近似计数（类似于 Count-Min 草图，但使用较少的内存）。 |
|      [crunch](https://github.com/superwhiskers/crunch)       |        Go 包实现了用于轻松处理各种数据类型的缓冲区。         |
|  [cuckoofilter](https://github.com/seiflotfy/cuckoofilter)   |   Cuckoo 过滤器：是 Go 中实现的计数布隆过滤器的很好替代。    |
|         [deque](https://github.com/edwingeng/deque)          |                     高度优化的双端队列。                     |
|         [deque](https://github.com/gammazero/deque)          |            快速的环形缓冲区双端队列（双端队列）。            |
|            [dict](https://github.com/srfrog/dict)            |              Go 的类似 Python 的字典（dict）。               |
|        [encoding](https://github.com/zhenjl/encoding)        |                      Go 的整数压缩库。                       |
| [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) |                   自适应基数树的 Go 实现。                   |
| [go-datastructures](https://github.com/Workiva/go-datastructures) |           有用，高性能和线程安全的数据结构的集合。           |
|          [go-ef](https://github.com/amallia/go-ef)           |                 Elias-Fano 编码的 Go 实现。                  |
|    [go-geoindex](https://github.com/hailocab/go-geoindex)    |                      内存中的地理索引。                      |
|    [go-mcache](https://github.com/OrlovEvgeny/go-mcache)     |           快速内存键：值存储 / 缓存库。指针缓存。            |
|   [go-rquad](https://github.com/aurelien-rainone/go-rquad)   |          具有有效点定位和邻居发现功能的区域四叉树。          |
|          [gocache](https://github.com/eko/gocache)           | 具有多个存储（内存，memcache，redis 等），可链接，可加载，指标缓存等的完整 Go 缓存库。 |
| [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) |                       并发 FIFO 队列。                       |
|          [gods](https://github.com/emirpasic/gods)           | 数据结构。容器，集合，列表，堆栈，地图，BidiMap，树，HashSet 等。 |
|           [gofal](https://github.com/xxjwxc/gofal)           |                       Go 的小数 api。                        |
|     [golang-set](https://github.com/deckarep/golang-set)     |             Go 的线程安全和非线程安全高性能集。              |
|           [goset](https://github.com/zoumo/goset)            |                  Go 的有用的 Set 集合实现。                  |
|     [goskiplist](https://github.com/ryszard/goskiplist)      |                    Go 中的跳过列表实现。                     |
|            [gota](https://github.com/kniren/gota)            |           Go 的数据框，序列和数据整理方法的实现。            |
|             [hide](https://github.com/emvi/hide)             |    ID 类型，将其编组进 / 出哈希以防止将 ID 发送给客户端。    |
|         [hilbert](https://github.com/google/hilbert)         | Go 程序包，用于在空间填充曲线（例如 Hilbert 和 Peano 曲线）之间映射值。 |
|    [hyperloglog](https://github.com/axiomhq/hyperloglog)     | HyperLogLog 实施，具有稀疏，LogLog-Beta 偏差校正和 TailCut 空间减少功能。 |
|           [iter](https://github.com/disksing/iter)           |                C ++ STL 迭代器和算法的实现。                 |
|     [levenshtein](https://github.com/agext/levenshtein)      | Levenshtein 距离和相似性度量标准，具有可自定义的编辑费用和通用前缀的类似于 Winkler 的奖金。 |
|    [levenshtein](https://github.com/agnivade/levenshtein)    |            在 Go 中计算 levenshtein 距离的实现。             |
|       [mafsa](https://github.com/smartystreets/mafsa)        |               具有最小完美散列的 MA-FSA 实现。               |
|     [merkletree](https://github.com/cbergoon/merkletree)     |  merkle 树的实现，可对数据结构的内容进行有效且安全的验证。   |
|         [mspm](https://github.com/BlackRabbitt/mspm)         |             用于信息检索的多字符串模式匹配算法。             |
|             [null](https://github.com/emvi/null)             |        可空转到类型，可以被编组 / 解组到 / 从 JSON。         |
|    [parsefields](https://github.com/MonaxGT/parsefields)     |   用于解析类似 JSON 的日志的工具，以收集唯一的字段和事件。   |
|       [pipeline](https://github.com/hyfather/pipeline)       |                 具有扇入和扇出的管线的实现。                 |
|           [ptrie](https://github.com/viant/ptrie)            |                        前缀树的实现。                        |
| [remember-go](https://github.com/rocketlaunchr/remember-go)  | 缓存慢速数据库查询的通用接口（由 redis，memcached，ristretto 或内存支持）。 |
|        [ring](https://github.com/TheTannerRyan/ring)         |           围棋实现了高性能，线程安全的布隆过滤器。           |
|     [roaring](https://github.com/RoaringBitmap/roaring)      |                    实施压缩位集的软件包。                    |
|           [set](https://github.com/StudioSol/set)            |      使用 LinkedHashMap 的围棋设置简单的数据结构实现。       |
|      [skiplist](https://github.com/MauriceGit/skiplist)      |                 非常快的 Go Skiplist 实施。                  |
|       [skiplist](https://github.com/gansidui/skiplist)       |                    Go 中的跳过列表实现。                     |
|       [timedmap](https://github.com/zekroTJA/timedmap)       |                 具有过期的键 / 值对的地图。                  |
|          [treap](https://github.com/perdata/treap)           |                使用树堆的持久快速排序的地图。                |
|         [trie](https://github.com/derekparker/trie)          |                     Go 中的 Trie 实现。                      |
|    [ttlcache](https://github.com/diegobernardes/ttlcache)    | 内存中的 LRU 字符串接口 {} 映射，其中包含 golang 的到期时间。 |
|            [typ](https://github.com/gurukami/typ)            |       空类型，安全的原始类型转换和从复杂结构中获取值。       |
|        [willf/bloom](https://github.com/willf/bloom)         |                   Go 包实现 Bloom 过滤器。                   |



### 分布式系统

|                            包                             |                             说明                             |
| :-------------------------------------------------------: | :----------------------------------------------------------: |
|   [celeriac](https://github.com/svcavallar/celeriac.v1)   | 用于在 Go 中添加支持以交互和监视 Celery 工作者，任务和事件的库。 |
|  [consistent](https://github.com/buraksezer/consistent)   |                    具有受限负载的一致哈希                    |
|          [dht](https://github.com/anacrolix/dht)          |                BitTorrent Kademlia DHT 实施。                |
|        [digota](https://github.com/digota/digota)         |                    grpc 电子商务微服务。                     |
|          [dot](https://github.com/dotchain/dot/)          |              使用操作转换 / OT 进行分布式同步。              |
|   [doublejump](https://github.com/edwingeng/doublejump)   |              改进后的 Google 的跳转一致性哈希。              |
|      [dragonboat](https://github.com/lni/dragonboat)      |             Go 中功能齐全的高性能多组 Raft 库。              |
|         [drmaa](https://github.com/dgruber/drmaa)         |         基于 DRMAA 标准的集群调度程序的作业提交库。          |
|        [dynamolock](https://cirello.io/dynamolock)        |               DynamoDB 支持的分布式锁定实现。                |
|     [dynatomic](https://github.com/tylfin/dynatomic)      |               将 DynamoDB 用作原子计数器的库。               |
|    [emitter-io](https://github.com/emitter-io/emitter)    | 使用 MQTT，Websockets 和 love 构建的高性能，分布式，安全和低延迟的发布 - 订阅平台。 |
|    [flowgraph](https://github.com/vectaport/flowgraph)    |                       基于流的编程包。                       |
|        [gleam](https://github.com/chrislusf/gleam)        | 用纯围棋和 Luajit 快速和可扩展的分布式的 map /reduce 系统，具有 Luajit 的高性能结合 Go 的高并发，单独运行或分发。 |
|         [glow](https://github.com/chrislusf/glow)         | 易于使用的可扩展的分布式大数据处理，Map-Reduce，DAG 执行，全部在纯 Go 中进行。 |
|   [go-health](https://github.com/InVisionApp/go-health)   |    health - 用于在服务中启用异步依赖项运行状况检查的库。     |
|       [go-jump](https://github.com/dgryski/go-jump)       |           Google 的 “Jump” 一致性哈希函数的端口。            |
|          [go-kit](https://github.com/go-kit/kit)          | 支持服务发现，负载平衡，可插拔传输，请求跟踪等的微服务工具包 |
|  [go-sundheit](https://github.com/AppsFlyer/go-sundheit)  |   建立用于支持为 golang 服务定义异步服务运行状况检查的库。   |
|         [gorpc](https://github.com/valyala/gorpc)         |         简单，快速和可扩展的 RPC 库，可实现高负载。          |
|        [grpc-go](https://github.com/grpc/grpc-go)         |         gRPC 的 Go 语言实现。基于 HTTP / 2 的 RPC。          |
|     [hprose](https://github.com/hprose/hprose-golang)     |        十分新颖的 RPC 库，现在支持 25 种以上的语言。         |
|      [jsonrpc](https://github.com/osamingo/jsonrpc)       |           jsonrpc 软件包可帮助实现 JSON-RPC 2.0。            |
|        [jsonrpc](https://github.com/ybbus/jsonrpc)        |                JSON-RPC 2.0 HTTP 客户端实现。                |
|     [KrakenD](https://github.com/devopsfaith/krakend)     |             具有中间件的超高性能 API 网关框架。              |
| [liftbridge](https://github.com/liftbridge-io/liftbridge) |                 NATS 的轻量级，容错消息流。                  |
|          [micro](https://github.com/micro/micro)          |        可插拔的 microService 工具箱和分布式系统平台。        |
|         [NATS](https://github.com/nats-io/gnatsd)         |   用于微服务，IoT 和云本机系统的轻量级高性能消息传递系统。   |
|    [outboxer](https://github.com/italolelis/outboxer)     |             Outboxer 是一个实现库模式的 go 库。              |
|            [pglock](https://cirello.io/pglock)            |              PostgreSQL 支持的分布式锁定实现。               |
|         [raft](https://github.com/hashicorp/raft)         |          HashiCorp 的 Raft 共识协议的 Golang 实现。          |
|  [raft](https://github.com/coreos/etcd/tree/master/raft)  |              围棋实施筏一致协议，由 CoreOS 的。              |
|         [rain](https://github.com/cenkalti/rain)          |                   BitTorrent 客户端和库。                    |
|      [redis-lock](https://github.com/bsm/redislock)       |              使用 Redis 的简化分布式锁定实现。               |
|              [resgate](https://resgate.io/)               | 用于构建 REST，实时和 RPC API 的实时 API 网关，其中所有客户端都可以无缝同步。 |
|     [ringpop-go](https://github.com/uber/ringpop-go)      |          Go 应用程序的可扩展，容错应用程序层分片。           |
|         [rpcx](https://github.com/smallnest/rpcx)         |       分布式可插拔 RPC 服务框架，例如阿里巴巴 Dubbo。        |
|       [sleuth](https://github.com/ursiform/sleuth)        | 用于在 HTTP 服务之间进行无主 p2p 自动发现和 RPC 的库（[ZeroMQ](https://github.com/zeromq/libzmq)）。 |
|  [tendermint](https://github.com/tendermint/tendermint)   | 高性能中间件，用于使用 Tendermint 共识和区块链协议将以任何编程语言编写的状态机转换为拜占庭容错复制状态机。 |
|      [torrent](https://github.com/anacrolix/torrent)      |                  BitTorrent 客户端软件包。                   |

### 电子邮件

|                            包                            |                             说明                             |
| :------------------------------------------------------: | :----------------------------------------------------------: |
|      [chasquid](https://blitiri.com.ar/p/chasquid)       |                  用 Go 编写的 SMTP 服务器。                  |
|      [douceur](https://github.com/aymerick/douceur)      |                CSS 内衬为您的 HTML 电子邮件。                |
|     [email](https://github.com/jordan-wright/email)      |              用于 Go 的强大而灵活的电子邮件库。              |
|       [go-dkim](https://github.com/toorop/go-dkim)       |              DKIM 库，用于签名和验证电子邮件。               |
|      [go-imap](https://github.com/emersion/go-imap)      |                用于客户端和服务器的 IMAP 库。                |
|   [go-message](https://github.com/emersion/go-message)   |             Internet 消息格式和邮件消息的流库。              |
| [go-premailer](https://github.com/vanng822/go-premailer) |                 Go 中 HTML 邮件的内联样式。                  |
| [go-simple-mail](https://github.com/xhit/go-simple-mail) | 使用 SMTP 保持活动状态和两个超时发送电子邮件的非常简单的程序包：连接和发送。 |
|      [Hectane](https://github.com/hectane/hectane)       |              提供 HTTP API 的轻型 SMTP 客户端。              |
|      [hermes](https://github.com/matcornic/hermes)       |      Golang 软件包，可生成干净的响应式 HTML 电子邮件。       |
|   [mailchain](https://github.com/mailchain/mailchain)    |        将加密的电子邮件发送到用 Go 编写的区块链地址。        |
|   [mailgun-go](https://github.com/mailgun/mailgun-go)    |            Go 库，用于使用 Mailgun API 发送邮件。            |
|      [MailHog](https://github.com/mailhog/MailHog)       |        通过 Web 和 API 界面进行电子邮件和 SMTP 测试。        |
|   [SendGrid](https://github.com/sendgrid/sendgrid-go)    |            SendGrid 的 Go 库，用于发送电子邮件。             |
|         [smtp](https://github.com/mailhog/smtp)          |                   SMTP 服务器协议状态机。                    |

### 嵌入式脚本语言

|                          包                          |                             说明                             |
| :--------------------------------------------------: | :----------------------------------------------------------: |
|        [anko](https://github.com/mattn/anko)         |             用 Go 语言编写的可编写脚本的解释器。             |
|     [binder](https://github.com/alexeyco/binder)     | 转到基于 [gopher-lua](https://github.com/yuin/gopher-lua) 的 Lua 绑定库。 |
|      [cel-go](https://github.com/google/cel-go)      |    具有渐进式输入功能的快速，便携式，非图灵完整表达评估。    |
|      [expr](https://github.com/antonmedv/expr)       |                    可以评估表达式的引擎。                    |
|      [gentee](https://github.com/gentee/gentee)      |                    可嵌入的脚本编程语言。                    |
|        [gisp](https://github.com/jcla1/gisp)         |                      Go 中的简单 LISP。                      |
| [go-duktape](https://github.com/olebedev/go-duktape) |             Go 的 Duktape JavaScript 引擎绑定。              |
|     [go-lua](https://github.com/Shopify/go-lua)      |                 Lua 5.2 VM 到纯 Go 的端口。                  |
|      [go-php](https://github.com/deuill/go-php)      |                       Go 的 PHP 绑定。                       |
|   [go-python](https://github.com/sbinet/go-python)   |              与 CPython C-API 的幼稚 go 绑定。               |
|      [golua](https://github.com/aarzilli/golua)      |                      Lua C API 的绑定。                      |
|   [gopher-lua](https://github.com/yuin/gopher-lua)   |              用 Go 编写的 Lua 5.1 VM 和编译器。              |
|      [gval](https://github.com/PaesslerAG/gval)      |              用 Go 编写的高度可定制的表达语言。              |
|       [ngaro](https://github.com/db47h/ngaro)        |      可嵌入的 Ngaro VM 实现，支持在 Retro 中编写脚本。       |
|     [otto](https://github.com/robertkrimen/otto)     |               用 Go 编写的 JavaScript 解释器。               |
|       [purl](https://github.com/ian-kent/purl)       |                  Go 中嵌入的 Perl 5.18.2。                   |
|         [tengo](https://github.com/d5/tengo)         |                用于 Go 的字节码编译脚本语言。                |



### 错误处理

|                             包                              |                             说明                             |
| :---------------------------------------------------------: | :----------------------------------------------------------: |
|      [emperror](https://github.com/emperror/emperror)       |          Go 库和应用程序的错误处理工具和最佳实践。           |
|        [errlog](https://github.com/snwfdhmp/errlog)         | 可破解的软件包，用于确定错误的负责任的源代码（以及其他一些快速调试功能）。可插入任何现成的记录器。 |
|        [errors](https://github.com/emperror/errors)         | 下拉更换为标准库的错误包和 github.com/pkg/errors。提供各种错误处理原语。 |
|           [errors](https://github.com/pkg/errors)           |                提供简单错误处理原语的软件包。                |
|       [errors](https://github.com/neuronlabs/errors)        |                简单 golang 错误处理与分类元。                |
|        [errorx](https://github.com/joomcode/errorx)         |         具有堆栈跟踪，错误组成等的功能丰富的错误包。         |
|       [Falcon](https://github.com/SonicRoshan/falcon)       |             一个简单但功能强大的错误处理软件包。             |
| [go-multierror](https://github.com/hashicorp/go-multierror) |      Go（golang）软件包，用于将错误列表表示为单个错误。      |
|         [tracerr](https://github.com/ztrue/tracerr)         |           带有堆栈跟踪和源代码片段的 Golang 错误。           |
|          [werr](https://github.com/txgruppi/werr)           | 错误包装程序为 Go 中的错误类型创建了一个包装程序，该包装程序捕获了调用它的文件，行和堆栈。 |



### 文件

|                              包                              |                             说明                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|           [afero](https://github.com/spf13/afero)            |                   Go 的文件系统抽象系统。                    |
|             [afs](https://github.com/viant/afs)              |    Go 的抽象文件存储（mem，scp，zip，tar，云：s3，gs）。     |
|        [bigfile](https://github.com/bigfile/bigfile)         | 文件传输系统，支持使用 http api，rpc 调用和 ftp 客户端管理文件。 |
|   [checksum](https://github.com/codingsince1985/checksum)    |         计算大型文件的消息摘要，例如 MD5 和 SHA256。         |
|          [flop](https://github.com/homedepot/flop)           | 文件操作库，旨在与 [GNU cp](https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html) 镜像功能奇偶校验。 |
|     [go-csv-tag](https://github.com/artonge/go-csv-tag)      |                tag - 使用标签加载 csv 文件。                 |
| [go-decent-copy](https://github.com/hugocarreira/go-decent-copy) |                      复制 human 文件。                       |
|    [go-exiftool](https://github.com/barasher/go-exiftool)    | ExifTool 的 Go 绑定，这是众所周知的库，用于从文件（图片，PDF，office，…）提取尽可能多的元数据（EXIF，IPTC 等）。 |
|        [go-gtfs](https://github.com/artonge/go-gtfs)         |                   在 go 中加载 gtfs 文件。                   |
|        [notify](https://github.com/rjeczalik/notify)         |    具有简单 API 的文件系统事件通知库，类似于 os /signal。    |
|            [opc](https://github.com/qmuntal/opc)             |      为 Go 加载 Open Packaging Conventions（OPC）文件。      |
|         [parquet](https://github.com/parsyl/parquet)         |   读取和写入 [parquet](https://parquet.apache.org/) 文件。   |
|         [pdfcpu](https://github.com/hhrutter/pdfcpu)         |                         PDF 处理器。                         |
|     [skywalker](https://github.com/dixonwille/skywalker)     |        一种软件包，允许一个人轻松地同时通过文件系统。        |
|            [stl](https://gitlab.com/russoj88/stl)            |     读取和写入 STL（立体光刻）文件的模块。并发读取算法。     |
|          [tarfs](https://github.com/posener/tarfs)           | tar 文件 [`FileSystem` interface](https://godoc.org/github.com/kr/fs#FileSystem) 接口的实现。 |
|              [vfs](https://github.com/C2FO/vfs)              | 跨多种文件系统类型（例如 os，S3 和 GCS）的 Go 的一组可插拔，可扩展且自以为是的文件系统功能。 |

###  金融

|                             包                              |                             说明                             |
| :---------------------------------------------------------: | :----------------------------------------------------------: |
|    [accounting](https://github.com/leekchan/accounting)     |                  golang 的货币和货币格式。                   |
|     [currency](https://github.com/bnkamalesh/currency)      |                  高性能和准确的货币计算包。                  |
|      [decimal](https://github.com/shopspring/decimal)       |                   任意精度定点十进制数字。                   |
|    [go-finance](https://github.com/FlashBoys/go-finance)    |                  Go 中的综合金融市场数据。                   |
|      [go-finance](https://github.com/alpeb/go-finance)      | 金融功能库，用于货币时间价值（年金），现金流量，利率转换，债券和折旧计算。 |
| [go-finance](https://github.com/pieterclaerhout/go-finance) | 获取汇率，通过 VIES 检查增值税号和检查 IBAN 银行帐号的模块。 |
|       [go-money](https://github.com/rhymond/go-money)       |                 Fowler 的 Money 模式的实现。                 |
|         [ofxgo](https://github.com/aclindsa/ofxgo)          |   查询 OFX 服务器和 / 或解析响应（使用示例命令行客户端）。   |
|     [orderbook](https://github.com/i25959341/orderbook)     |                匹配引擎的限价订单在 Golang。                 |
|        [techan](https://github.com/sdcoffey/techan)         |           具有高级市场分析和交易策略的技术分析库。           |
|    [transaction](https://github.com/claygod/transaction)    |        以多线程模式运行的嵌入式帐户嵌入式事务数据库。        |
|        [vat](https://github.com/dannyvankooten/vat)         |                 增值税号验证和欧盟增值税率。                 |

### 游戏开发

|                           包                            |                             说明                             |
| :-----------------------------------------------------: | :----------------------------------------------------------: |
|       [Azul3D](https://github.com/azul3d/engine)        |                用 Go 语言编写的 3D 游戏引擎。                |
|     [Ebiten](https://github.com/hajimehoshi/ebiten)     |                  Go 中死的简单 2D 游戏库。                   |
|       [engo](https://github.com/EngoEngine/engo)        | Engo 是用 Go 语言编写的开源 2D 游戏引擎。它遵循实体组件系统范式。 |
|          [g3n](https://github.com/g3n/engine)           |                       Go 3D 游戏引擎。                       |
| [GarageEngine](https://github.com/vova616/GarageEngine) |      用 Go 语言编写的 2D 游戏引擎，可在 OpenGL 上使用。      |
|       [glop](https://github.com/runningwild/glop)       |       Glop（权力游戏库）是一个相当简单的跨平台游戏库。       |
|    [go-astar](https://github.com/beefsack/go-astar)     |                  A 路径查找算法的 Go 实现。                  |
| [go-collada](https://github.com/GlenKelley/go-collada)  |                Go 包，用于 Collada 文件格式。                |
|      [go-sdl2](https://github.com/veandco/go-sdl2)      | [Simple DirectMedia Layer](https://www.libsdl.org/) 的 Go 绑定。 |
|         [go3d](https://github.com/ungerik/go3d)         |           用于 Go 的面向性能的 2D/3D 数学软件包。            |
|         [gonet](https://github.com/xtaci/gonet)         |              使用 golang 实现的游戏服务器框架。              |
|     [goworld](https://github.com/xiaonanln/goworld)     |    可扩展的游戏服务器引擎，具有空间实体框架和热插拔功能。    |
|        [Leaf](https://github.com/name5566/leaf)         |                    轻量级游戏服务器框架。                    |
|          [nano](https://github.com/lonng/nano)          |      重量轻，设备，高性能的基于 golang 游戏服务器架构。      |
|         [Oak](https://github.com/oakmound/oak)          |                      Pure Go 游戏引擎。                      |
|    [Pitaya](https://github.com/topfreegames/pitaya)     | 可扩展的游戏服务器框架，具有群集支持和通过 C SDK 的 iOS，Android，Unity 等客户端库。 |
|        [Pixel](https://github.com/faiface/pixel)        |                 Go 中的手工制作 2D 游戏库。                  |
|   [raylib-go](https://github.com/gen2brain/raylib-go)   |   去绑定 raylib，简单和易于使用的库，以了解电子游戏编程。    |
|    [termloop](https://github.com/JoelOtter/termloop)    |        Go 的基于终端的游戏引擎，建立在 Termbox 之上。        |

### 地理位置

|                           包                            |                             说明                             |
| :-----------------------------------------------------: | :----------------------------------------------------------: |
|   [geocache](https://github.com/melihmucuk/geocache)    |          适用于基于地理位置的应用程序的内存中缓存。          |
|  [geoserver](https://github.com/hishamkaram/geoserver)  | geoserver 是 Go 软件包，用于通过 GeoServer REST API 操纵 GeoServer 实例。 |
| [gismanager](https://github.com/hishamkaram/gismanager) |     将 GIS 数据（矢量数据）发布到 PostGIS 和 Geoserver。     |
|         [osm](https://github.com/paulmach/osm)          |     用于读取，编写和使用 OpenStreetMap 数据和 API 的库。     |
|          [pbf](https://github.com/maguro/pbf)           |          OpenStreetMap PBF golang 编码器 / 解码器。          |
|      [S2 geometry](https://github.com/golang/geo)       |                     Go 中的 S2 几何库。                      |
|       [Tile38](https://github.com/tidwall/tile38)       |         具有空间索引和实时地理围栏的地理位置数据库。         |
|         [WGS84](https://github.com/wroge/wgs84)         | 库坐标转换和变换（ETRS89，OSGB36，NAD83，RGF93，网络墨卡托 UTM）。 |
|                                                         |                                                              |
### 编译器
|                        包                        |                          说明                           |
| :----------------------------------------------: | :-----------------------------------------------------: |
|  [c4go](https://github.com/Konstantin8105/c4go)  |                将 C 代码转换为 Go 代码。                |
|  [f4go](https://github.com/Konstantin8105/f4go)  |           将 FORTRAN 77 代码转换为 Go 代码。            |
| [gopherjs](https://github.com/gopherjs/gopherjs) |             从 Go 到 JavaScript 的编译器。              |
|     [llgo](https://github.com/go-llvm/llgo)      |                Go 的基于 LLVM 的编译器。                |
| [tardisgo](https://github.com/tardisgo/tardisgo) | Golang 转换为 CPP / CSharp / Java / JavaScript 转译器。 |

### Goroutines
|                              包                              |                             说明                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|          [ants](https://github.com/panjf2000/ants)           |             用于 golang 的高性能 goroutine 池。              |
|      [artifex](https://github.com/borderstech/artifex)       |     Golang 使用基于工作程序的分派的简单内存中作业队列。      |
|         [async](https://github.com/studiosol/async)          |            一种异步执行功能的安全方法，以防万一。            |
|        [breaker](https://github.com/kamilsk/breaker)         |                 使执行流程可中断的灵活机制。                 |
|  [cyclicbarrier](https://github.com/marusama/cyclicbarrier)  |                用于 golang 的 CyclicBarrier。                |
|       [go-floc](https://github.com/workanator/go-floc)       |                     轻松编排 goroutine。                     |
|    [go-flow](https://github.com/kamildrazkiewicz/go-flow)    |                 控制 goroutine 的执行顺序。                  |
| [go-tools/multithreading](https://github.com/nikhilsaraf/go-tools) |        使用带有简单 API 的轻量级库管理 goroutine 池。        |
|     [go-trylock](https://github.com/subchen/go-trylock)      |               支持 Golang 的读写锁的 TryLock。               |
| [go-waitgroup](https://github.com/pieterclaerhout/go-waitgroup) |          sync.WaitGroup 与错误处理和并发控制类似。           |
|      [gohive](https://github.com/loveleshsharma/gohive)      |            Go 的高性能和易于使用的 Goroutine 池。            |
|       [gollback](https://github.com/vardius/gollback)        |       异步简单函数实用程序，用于管理闭包和回调的执行。       |
|      [GoSlaves](https://github.com/themester/GoSlaves)       |                 简单和异步 Goroutine 池库。                  |
|       [goworker](https://github.com/benmanns/goworker)       |              goworker 是基于 Go 的后台工作者。               |
|            [gowp](https://github.com/xxjwxc/gowp)            |                gowp 是并发限制 goroutine 池。                |
|       [gpool](https://github.com/Sherifabdlnaby/gpool)       |     管理可调整大小的上下文感知 goroutine 池以绑定并发。      |
|         [grpool](https://github.com/ivpusic/grpool)          |                    轻巧的 Goroutine 池。                     |
|          [Hunch](https://github.com/AaronJan/Hunch)          | 预感提供功能，如：All，First，Retry，Waterfall 等等，这使得异步流控制更加直观。 |
|          [oversight](https://cirello.io/oversight)           |               监督是 Erlang 监督树的完整实现。               |
|  [parallel-fn](https://github.com/rafaeljesus/parallel-fn)   |                        并行运行功能。                        |
|        [pool](https://github.com/go-playground/pool)         | 有限的消费者 goroutine 池或无限制的 goroutine 池，以便更轻松地处理和取消 goroutine。 |
|        [queue](https://github.com/AnikHasibul/queue)         | 为您提供 sync.WaitGroup 类似的队列组可访问性。帮助您节流和限制 goroutine，等待所有 goroutine 结束等等。 |
|         [routine](https://github.com/x-mod/routine)          | 具有上下文和支持的例程控制：Main，Go，Pool 和一些有用的 Executors。 |
|      [semaphore](https://github.com/kamilsk/semaphore)       | 基于通道和上下文的具有锁定 / 解锁操作超时的信号量模式实现。  |
|      [semaphore](https://github.com/marusama/semaphore)      | 基于 CAS 的快速可调整大小的信号量实现（比基于通道的信号量实现更快）。 |
|             [stl](https://github.com/ssgreg/stl)             |      基于软件交易内存（STM）并发控制机制的软件交易锁。       |
|     [threadpool](https://github.com/shettyh/threadpool)      |                     Golang 线程池实现。                      |
|          [tunny](https://github.com/Jeffail/tunny)           |                       线程池 golang。                        |
|    [worker-pool](https://github.com/vardius/worker-pool)     |            goworker 是一个简单的 Go 异步工作池。             |
|    [workerpool](https://github.com/gammazero/workerpool)     | Goroutine 池，它限制了任务执行的并发性，而不是排队的任务数。 |

### 图形界面  
|                              包                              |                             说明                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|          [app](https://github.com/murlokswarm/app)           | 打包以使用 GO，HTML 和 CSS 创建应用的程序。支持：MacOS，Windows 正在开发中。 |
|           [fyne](https://github.com/fyne-io/fyne)            | 为 Go 设计的跨平台本机 GUI，使用 EFL 呈现。支持：Linux，macOS，Windows。 |
| [go-astilectron](https://github.com/asticode/go-astilectron) | 使用 GO 和 HTML / JS / CSS（由 Electron 支持）构建跨平台 GUI 应用。 |
|           [go-gtk](http://mattn.github.io/go-gtk/)           |                         GTK 的绑定。                         |
|     [go-sciter](https://github.com/sciter-sdk/go-sciter)     | Go 绑定：用于现代桌面 UI 开发的可嵌入 HTML / CSS /script 引擎。跨平台。 |
|           [gotk3](https://github.com/gotk3/gotk3)            |                        GTK3 的绑定。                         |
|           [gowd](https://github.com/dtylman/gowd)            | 使用 GO，HTML，CSS 和 NW.js 进行快速简单的桌面 UI 开发。跨平台。 |
|            [qt](https://github.com/therecipe/qt)             | Go 的 Qt 绑定（支持 Windows /macOS/ Linux / Android /iOS/ Sailfish OS / Raspberry Pi）。 |
|             [ui](https://github.com/andlabs/ui)              |                Go 的平台本地 GUI 库。跨平台。                |
|                 [Wails](https://wails.app/)                  | 使用内置 OS HTML 渲染器的 HTML UI 的 Mac，Windows，Linux 桌面应用程序。 |
|             [walk](https://github.com/lxn/walk)              |               Go 的 Windows 应用程序库工具包。               |
|         [webview](https://github.com/zserge/webview)         | 具有简单双向 JavaScript 绑定的跨平台 Webview 窗口（Windows /macOS/ Linux）。 |
| [go-appindicator](https://github.com/dawidd6/go-appindicator) |              libappindicator3 C 库的 Go 绑定。               |
|  [gosx-notifier](https://github.com/deckarep/gosx-notifier)  |                    Go 的 OSX 桌面通知库。                    |
| [mac-activity-tracker](https://github.com/prashantgupta24/activity-tracker) |        OSX 库，用于通知计算机上的任何（可插入）活动。        |
| [mac-sleep-notifier](https://github.com/prashantgupta24/mac-sleep-notifier) |              golang 中的 OSX 睡眠 / 唤醒通知。               |
|         [robotgo](https://github.com/go-vgo/robotgo)         |       Go 本机跨平台 GUI 系统自动化。控制鼠标，键盘等。       |
|       [systray](https://github.com/getlantern/systray)       |       跨平台的 Go 库，用于在通知区域中放置图标和菜单。       |
|       [trayhost](https://github.com/shurcooL/trayhost)       |  跨平台的 Go 库，用于在主机操作系统的任务栏中放置一个图标。  |

### 图片 

|                            包                            |                             说明                             |
| :------------------------------------------------------: | :----------------------------------------------------------: |
|      [bild](https://github.com/anthonynsimon/bild)       |                 纯 Go 中图像处理算法的集合。                 |
|          [bimg](https://github.com/h2non/bimg)           |        使用 libvips 进行快速有效的图像处理的小包装。         |
|       [cameron](https://github.com/aofei/cameron)        |                      Go 的头像生成器。                       |
|       [canvas](https://github.com/tdewolff/canvas)       |            将矢量图形转换为 PDF，SVG 或光栅图像。            |
|      [darkroom](https://github.com/gojek/darkroom)       | 具有可变存储后端的图像代理和侧重于速度和弹性的图像处理引擎。 |
|    [geopattern](https://github.com/pravj/geopattern)     |               从字符串创建漂亮的生成图像图案。               |
|           [gg](https://github.com/fogleman/gg)           |                     纯 Go 中的 2D 渲染。                     |
|      [gift](https://github.com/disintegration/gift)      |                    图像处理过滤器的包装。                    |
|         [gltf](https://github.com/qmuntal/gltf)          |        高效，强大的 glTF 2.0 读取器，写入器和验证器。        |
|     [go-cairo](https://github.com/ungerik/go-cairo)      |                  用于 cairo 图形库的绑定。                   |
|        [go-gd](https://github.com/bolknote/go-gd)        |                      GD 库的 Go 绑定。                       |
|      [go-nude](https://github.com/koyachi/go-nude)       |                       Go 的裸露检测。                        |
|    [go-opencv](https://github.com/lazywei/go-opencv)     |                     用于 OpenCV 的绑定。                     |
| [go-webcolors](https://github.com/jyotiska/go-webcolors) |            webcolors 库的端口，从 Python 到 Go。             |
|       [gocv](https://github.com/hybridgroup/gocv)        |        使用 OpenCV 3.3 + 进行计算机视觉的 Go 软件包。        |
|  [goimagehash](https://github.com/corona10/goimagehash)  |                     Go 感知图像哈希包。                      |
|     [goimghdr](https://github.com/corona10/goimghdr)     |          imghdr 模块确定 Go 文件中包含的图像类型。           |
|       [govatar](https://github.com/o1egl/govatar)        |              用于生成有趣头像的库和 CMD 工具。               |
|  [image2ascii](https://github.com/qeesung/image2ascii)   |                     将图像转换为 ASCII。                     |
|     [imagick](https://github.com/gographics/imagick)     |           绑定到 ImageMagick 的 MagickWand C API。           |
|     [imaginary](https://github.com/h2non/imaginary)      |         用于图像大小调整的快速，简单的 HTTP 微服务。         |
|   [imaging](https://github.com/disintegration/imaging)   |                    简单的 Go 图像处理包。                    |
|            [img](https://github.com/hawx/img)            |                      选择图像处理工具。                      |
|           [ln](https://github.com/fogleman/ln)           |                  Go 中的 3D 线条艺术渲染。                   |
|       [mergi](https://github.com/noelyahan/mergi)        | 用于图像处理（合并，裁切，调整大小，水印，动画）的 Tool＆Go 库。 |
|         [mort](https://github.com/aldor007/mort)         |              用 Go 编写的存储和图像处理服务器。              |
|           [mpo](https://github.com/donatj/mpo)           |             用于 MPO 3D 照片的解码器和转换工具。             |
|        [picfit](https://github.com/thoas/picfit)         |               用 Go 编写的图像大小调整服务器。               |
|           [pt](https://github.com/fogleman/pt)           |                用 Go 语言编写的路径跟踪引擎。                |
|         [resize](https://github.com/nfnt/resize)         |            使用常见的插值方法为 Go 调整图像大小。            |
|          [rez](https://github.com/bamiaux/rez)           |               在纯 Go 和 SIMD 中调整图像大小。               |
|     [smartcrop](https://github.com/muesli/smartcrop)     |              查找适合任何图像和尺寸的优质作物。              |
| [steganography](https://github.com/auyer/steganography)  |                用于 LSB 隐写术的 Pure Go 库。                |
|   [stegify](https://github.com/DimitarPetrov/stegify)    |    用于 LSB 隐写术的 Go 工具，能够隐藏图像中的任何文件。     |
|         [svgo](https://github.com/ajstarks/svgo)         |                 用于 SVG 生成的 Go 语言库。                  |
|         [tga](https://github.com/ftrvxmtrx/tga)          |       软件包 tga 是 TARGA 图像格式的解码器 / 编码器。        |

### 物联网 

|                            包                             |                           说明                            |
| :-------------------------------------------------------: | :-------------------------------------------------------: |
| [connectordb](https://github.com/connectordb/connectordb) |               量化自我和物联网的开源平台。                |
|        [devices](https://github.com/goiot/devices)        |         IoT 设备库套件，针对 x /exp/io 进行实验。         |
|         [eywa](https://github.com/xcodersun/eywa)         | Project Eywa 本质上是一个连接管理器，用于跟踪连接的设备。 |
|      [flogo](https://github.com/tibcosoftware/flogo)      | Project Flogo 是一个用于 IoT Edge 应用和集成的开源框架。  |
|          [gatt](https://github.com/paypal/gatt)           |           盖特是一个围棋包构建低功耗蓝牙外设。            |
|      [gobot](https://github.com/hybridgroup/gobot/)       |       Gobot 是机器人技术，物理计算和物联网的框架。        |
|         [huego](https://github.com/amimof/huego)          |           适用于 Go 的飞利浦 Hue 扩展客户端库。           |
|           [iot](https://github.com/vaelen/iot/)           |      IoT 是用于实现 Google IoT Core 设备的简单框架。      |
|     [mainflux](https://github.com/Mainflux/mainflux)      |             工业物联网消息和设备管理服务器。              |
|               [periph](https://periph.io/)                |            外设 I / O 与低级别的主板设备接口。            |
|    [sensorbee](https://github.com/sensorbee/sensorbee)    |              用于物联网的轻量级流处理引擎。               |

### JSON 格式 

|                              包                              |                             说明                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|          [ajson](https://github.com/spyzhov/ajson)           |          具有 JSONPath 支持的 golang 的抽象 JSON。           |
|           [gjo](https://github.com/skanehira/gjo)            |              用于创建 JSON 对象的小型实用程序。              |
|          [GJSON](https://github.com/tidwall/gjson)           |                  使用一行代码获取 JSON 值。                  |
|    [go-jsonerror](https://github.com/ddymko/go-jsonerror)    | Go-JsonError 可让我们轻松创建遵循 JsonApi 规范的 json 响应错误。 |
|     [go-respond](https://github.com/nicklaw5/go-respond)     |            Go 包，用于处理常见的 HTTP JSON 响应。            |
|             [gojq](https://github.com/elgs/gojq)             |                   Golang 中的 JSON 查询。                    |
|       [gojson](https://github.com/ChimeraCoder/gojson)       |         从示例 JSON 自动生成 Go（golang）结构定义。          |
|        [JayDiff](https://github.com/yazgazan/jaydiff)        |              用 Go 编写的 JSON diff 实用程序。               |
|         [jettison](https://github.com/wI2L/jettison)         |            用于 Go 的高性能，无反射 JSON 编码器。            |
|      [JSON-to-Go](https://mholt.github.io/json-to-go/)       |                   将 JSON 转换为 Go 结构。                   |
|        [json2go](https://github.com/m-zajac/json2go)         | 高级 JSON 到 Go 结构转换。提供可以解析多个 JSON 文档并创建适合所有 JSON 的结构的包。 |
| [jsonapi-errors](https://github.com/AmuzaTkts/jsonapi-errors) |               根据 JSON API 错误参考进行绑定。               |
|          [jsonf](https://github.com/miolini/jsonf)           |       突出显示格式和获取 JSON 的结构查询的控制台工具。       |
|       [jsongo](https://github.com/ricardolonga/jsongo)       |           Fluent API，可以更轻松地创建 Json 对象。           |
|      [jsonhal](https://github.com/RichardKnop/jsonhal)       | 简单的 Go 包，用于将自定义结构编组为 HAL 兼容的 JSON 响应。  |
|          [kazaam](https://github.com/Qntfy/kazaam)           |               用于 JSON 文档的任意转换的 API。               |
|             [mp](https://github.com/sanbornm/mp)             | 简单的 cli 电子邮件解析器。当前，它使用标准输入并输出 JSON。 |

### 机器学习

|                              包                              |                             说明                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|        [bayesian](https://github.com/jbrukh/bayesian)        |                  贝叶斯分类为 Golang 天真。                  |
|  [CloudForest](https://github.com/ryanbressler/CloudForest)  |   快速，灵活，多线程的决策树集合，用于纯 Go 中的机器学习。   |
|         [eaopt](https://github.com/MaxHalford/eaopt)         |                         进化优化库。                         |
|           [evoli](https://github.com/khezen/evoli)           |                   遗传算法和粒子群优化库。                   |
|         [fonet](https://github.com/Fontinalis/fonet)         |                 用 Go 编写的深度神经网络库。                 |
| [go-cluster](https://github.com/e-XpertSolutions/go-cluster) |            k 模式和 k - 原型聚类算法的 Go 实现。             |
|        [go-deep](https://github.com/patrikeh/go-deep)        |                  Go 中功能丰富的神经网络库                   |
|       [go-fann](https://github.com/white-pony/go-fann)       |            快速人工神经网络（FANN）库的 Go 绑定。            |
|         [go-galib](https://github.com/thoj/go-galib)         |               用 Go /golang 编写的遗传算法库。               |
|        [go-pr](https://github.com/daviddengcn/go-pr)         |                   Go lang 中的模式识别包。                   |
|          [gobrain](https://github.com/goml/gobrain)          |                   用 go 语言编写的神经网络                   |
|          [godist](https://github.com/e-dard/godist)          |                   各种概率分布及相关方法。                   |
|          [goga](https://github.com/tomcraven/goga)           |                      Go 的遗传算法库。                       |
|      [GoLearn](https://github.com/sjwhitworth/golearn)       |                  用于 Go 的通用机器学习库。                  |
|       [golinear](https://github.com/danieldk/golinear)       |                    Go 的 liblinear 绑定。                    |
|     [GoMind](https://github.com/surenderthakran/gomind)      |                   Go 中的简单神经网络库。                    |
|           [goml](https://github.com/cdipaolo/goml)           |                    Go 中的在线机器学习。                     |
|         [Goptuna](https://github.com/c-bata/goptuna)         | 用于 Go 语言编写的黑盒函数的贝叶斯优化框架。一切都会被优化。 |
|   [goRecommend](https://github.com/timkaye11/goRecommend)    |                   用 Go 编写的推荐算法库。                   |
|       [gorgonia](https://github.com/gorgonia/gorgonia)       | 基于图形的计算库，例如 Theano for Go，它提供了用于构建各种机器学习和神经网络算法的原语。 |
|         [gorse](https://github.com/zhenghaoz/gorse)          |          基于 Go 编写的协作过滤的离线推荐系统后端。          |
|       [goscore](https://github.com/asafschers/goscore)       |                用于 PMML 的 Go Scoring API。                 |
|      [gosseract](https://github.com/otiai10/gosseract)       |     使用 Tesseract C ++ 库的 OCR（光学字符识别）软件包。     |
|        [libsvm](https://github.com/datastream/libsvm)        |       基于 LIBSVM 3.14 libsvm 的 golang 版本衍生作品。       |
|           [neat](https://github.com/jinyeom/neat)            |    用于增强拓扑神经演化（NEAT）的即插即用，并行 Go 框架。    |
|      [neural-go](https://github.com/schuyler/neural-go)      |  go - 在 Go 中实现的多层感知器网络，通过反向传播进行训练。   |
|      [ocrserver](https://github.com/otiai10/ocrserver)       | 一个简单的 OCR API 服务器，非常容易被 Docker 和 Heroku 部署。 |
|       [onnx-go](https://github.com/owulveryck/onnx-go)       |             转到开放神经网络交换（ONNX）的接口。             |
|          [probab](https://github.com/ThePaw/probab)          |         概率分布函数。贝叶斯推断。用纯 Go 语言编写。         |
|       [regommend](https://github.com/muesli/regommend)       |                     建议和协作过滤引擎。                     |
|         [shield](https://github.com/eaigner/shield)          |     贝叶斯文本分类器，具有灵活的标记器和 Go 的存储后端。     |
|           [tfgo](https://github.com/galeone/tfgo)            | 易于使用的 Tensorflow 绑定：简化了官方 Tensorflow Go 绑定的使用。在 Go 中定义计算图，加载并执行经过 Python 训练的模型。 |
|           [Varis](https://github.com/Xamber/Varis)           |                      Golang 神经网络。                       |

### 金融

|                              包                              |                             说明                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|       [unioffice](https://github.com/unidoc/unioffice)       | Pure Go 库，用于创建和处理 Office Word（.docx），Excel（.xlsx）和 Powerpoint（.pptx）文档。 |
| [excelize](https://github.com/360EntSecGroup-Skylar/excelize) |    Golang 库用于读取和写入 Microsoft Excel™（XLSX）文件。    |
|        [go-excel](https://github.com/szyhf/go-excel)         | 一个简单而轻便的阅读器，可以将类似于 related-db 的 excel 读取为表格。 |
|   [goxlsxwriter](https://github.com/fterrag/goxlsxwriter)    | libxlsxwriter 的 Golang 绑定，用于编写 XLSX（Microsoft Excel）文件。 |
|            [xlsx](https://github.com/tealeg/xlsx)            | 用于简化在 Go 程序中读取 Microsoft Excel 最新版本使用的 XML 格式的库。 |
|           [xlsx](https://github.com/plandem/xlsx)            | 在 Go 程序中快速 / 安全地读取 / 更新您现有的 Microsoft Excel 文件的方法。 |

### 自然语言处理



|                             包                              |                             说明                             |
| :---------------------------------------------------------: | :----------------------------------------------------------: |
|        [getlang](https://github.com/rylans/getlang)         |                   快速自然语言检测程序包。                   |
|      [go-i18n](https://github.com/nicksnyder/go-i18n/)      |          用于处理本地化文本的软件包和一个随附工具。          |
|       [go-mystem](https://github.com/dveselov/mystem)       |       CGo 与 Yandex.Mystem 的绑定 - 俄罗斯形态分析仪。       |
|         [go-nlp](https://github.com/nuance/go-nlp)          | 用于处理离散概率分布的实用程序和其他可用于执行 NLP 工作的工具。 |
|     [go-pinyin](https://github.com/mozillazg/go-pinyin)     |                CN Hanzi 至 Hanyu 拼音转换器。                |
|       [go-stem](https://github.com/agonopol/go-stem)        |                   搬运程序阻止算法的实现。                   |
|  [go-unidecode](https://github.com/mozillazg/go-unidecode)  |                 Unicode 文本的 ASCII 音译。                  |
|        [go2vec](https://github.com/danieldk/go2vec)         |          用于 word2vec 嵌入的阅读器和实用程序功能。          |
|        [gojieba](https://github.com/yanyiwu/gojieba)        |            这是一个围棋实施解霸其中中国分词算法。            |
| [golibstemmer](https://github.com/rjohnsondev/golibstemmer) |         雪球库 libstemmer 库的绑定，包括 porter 2。          |
|   [gotokenizer](https://github.com/xujiajun/gotokenizer)    | 基于字典和 Goram 语言的 Bigram 语言模型的标记器。（现在仅支持中文细分） |
|     [gounidecode](https://github.com/fiam/gounidecode)      |          Go 的 Unicode 音译器（也称为 unidecode）。          |
|            [gse](https://github.com/go-ego/gse)             |         进行有效的文本分割；支持英语，中文，日语等。         |
|           [icu](https://github.com/goodsign/icu)            | CGO 结合为 ICU4C C 库检测和转换功能。保证与版本 50.1 兼容。  |
|         [kagome](https://github.com/ikawaha/kagome)         |              用纯 Go 语言编写的 JP 形态分析仪。              |
|    [libtextcat](https://github.com/goodsign/libtextcat)     |       libtextcat C 库的 Cgo 绑定。保证与 2.2 版兼容。        |
|         [MMSEGO](https://github.com/awsong/MMSEGO)          |          这是 MMSEG 的 GO 实现，它是中文分词算法。           |
|            [nlp](https://github.com/Shixzie/nlp)            |          从字符串中提取值，并用 nlp 填充您的结构。           |
|         [nlp](https://github.com/james-bowman/nlp)          |          支持 LSA（潜在语义分析）的自然语言处理库。          |
|      [paicehusk](https://github.com/rookii/paicehusk)       |            Paice / Husk 提取算法的 Golang 实现。             |
|    [petrovich](https://github.com/striker2000/petrovich)    | 彼得罗维奇（Petrovich）是库，在给定的语法情况下使用俄语名称。 |
|        [porter](https://github.com/a2800276/porter)         | 这是 Martin Porter 的 Porter 干算法的 C 实现的相当简单的移植。 |
|        [porter2](https://github.com/zhenjl/porter2)         |                  非常快的 Porter 2 提取器。                  |
|          [prose](https://github.com/jdkato/prose)           | 用于文本处理的库，支持标记化，词性标记，命名实体提取等。仅限英语。 |
|        [RAKE.go](https://github.com/Obaied/RAKE.go)         |          快速自动关键字提取算法（RAKE）的 Go 端口。          |
|      [segment](https://github.com/blevesearch/segment)      | 用于执行 Unicode 标准附件＃29 中所述的 Unicode 文本分段的 Go 库 |
|     [sentences](https://github.com/neurosnap/sentences)     |              句子标记器：将文本转换为句子列表。              |
|       [shamoji](https://github.com/osamingo/shamoji)        |            shamoji 是用 Go 编写的单词过滤程序包。            |
|      [snowball](https://github.com/goodsign/snowball)       | Go 的雪球茎端口（cgo 包装器）。提供单词词干提取功能 Snowball 本机。 |
|        [stemmer](https://github.com/dchest/stemmer)         |   用于 Go 编程语言的 Stemmer 软件包。包括英语和德语词干。    |
|         [textcat](https://github.com/pebbe/textcat)         | Go 软件包，用于基于 n-gram 的文本分类，并支持 utf-8 和原始文本。 |
|    [whatlanggo](https://github.com/abadojack/whatlanggo)    | Go 的自然语言检测程序包。支持 84 种语言和 24 种脚本（书写系统，例如拉丁语，西里尔字母等）。 |
|          [when](https://github.com/olebedev/when)           |    自然 EN 和 RU 语言日期 / 时间分析器具有可插拔的规则。     |

### 网络

|                             包                             |                             说明                             |
| :--------------------------------------------------------: | :----------------------------------------------------------: |
|           [arp](https://github.com/mdlayher/arp)           |          包 arp 实现 ARP 协议，如 RFC 826 中所述。           |
| [buffstreams](https://github.com/stabbycutyou/buffstreams) |            通过 TCP 流化协议缓冲区数据变得容易。             |
|     [canopus](https://github.com/zubairhamed/canopus)      |            CoAP 客户端 / 服务器实施（RFC 7252）。            |
|     [cidranger](https://github.com/yl2chen/cidranger)      |                 Go 的快速 IP 到 CIDR 查找。                  |
|         [dhcp6](https://github.com/mdlayher/dhcp6)         |   软件包 dhcp6 实现了 DHCPv6 服务器，如 RFC 3315 中所述。    |
|            [dns](https://github.com/miekg/dns)             |                     使用 DNS 的 Go 库。                      |
|         [ether](https://github.com/songgao/ether)          |          用于发送和接收以太网帧的跨平台 Go 软件包。          |
|      [ethernet](https://github.com/mdlayher/ethernet)      | 程序包 ethernet 实施 IEEE 802.3 以太网 II 帧和 IEEE 802.1Q VLAN 标签的封送处理。 |
|      [fasthttp](https://github.com/valyala/fasthttp)       | 软件包 fasthttp 是 Go 的一种快速 HTTP 实现，比 net /http 快 10 倍。 |
|         [fortio](https://github.com/fortio/fortio)         | 负载测试库和命令行工具，高级回显服务器和 Web UI。允许指定设置的每秒查询负载，并记录延迟直方图和其他有用的统计数据并对其进行图形化。Tcp，Http，gRPC。 |
|           [ftp](https://github.com/jlaffaye/ftp)           |        程序包 ftp 实现 RFC 959 中所述的 FTP 客户端。         |
|          [gev](https://github.com/Allenxuxu/gev)           | gev 是基于 Reactor 模式的轻量级，快速，无阻塞的 TCP 网络库。 |
|         [gmqtt](https://github.com/DrmagicE/gmqtt)         | Gmqtt 是一个灵活的高性能 MQTT 代理库，它完全实现了 MQTT 协议 V3.1.1。 |
|         [gnet](https://github.com/panjf2000/gnet)          | gnet 是一个高性能的，用纯围棋轻便，非阻塞，事件循环网络库。  |
|           [gNxI](https://github.com/google/gnxi)           |         使用 gNMI 和 gNOI 协议的网络管理工具的集合。         |
|    [go-getter](https://github.com/hashicorp/go-getter)     |        Go 库，用于使用 URL 从各种来源下载文件或目录。        |
|    [go-powerdns](https://github.com/joeig/go-powerdns)     |                Golang 的 PowerDNS API 绑定。                 |
|        [go-stun](https://github.com/ccding/go-stun)        |       STUN 客户端的 Go 实现（RFC 3489 和 RFC 5389）。        |
|           [gobgp](https://github.com/osrg/gobgp)           |                 使用 Go 编程语言实现的 BGP。                 |
| [golibwireshark](https://github.com/sunwxg/golibwireshark) | 软件包 golibwireshark 使用 libwireshark 库来解码 pcap 文件并分析解剖数据。 |
|       [gopacket](https://github.com/google/gopacket)       |         Go 库，用于使用 libpcap 绑定进行数据包处理。         |
|       [gopcap](https://github.com/akrennmair/gopcap)       |                      libpcap 的包装器。                      |
|        [goshark](https://github.com/sunwxg/goshark)        | 软件包 goshark 使用 tshark 解码 IP 数据包并创建数据结构以分析数据包。 |
|         [gosnmp](https://github.com/soniah/gosnmp)         |               用于执行 SNMP 操作的本机 Go 库。               |
|       [gosocsvr](https://github.com/rakeki/gosocsvr)       |                    套接字服务器变得简单。                    |
|         [gotcp](https://github.com/gansidui/gotcp)         |           用于快速编写 tcp 应用程序的 Go 软件包。            |
|       [grab](https://github.com/cavaliercoder/grab)        |                  用于管理文件下载的软件包。                  |
|         [graval](https://github.com/koofr/graval)          |                   实验性 FTP 服务器框架。                    |
|       [HTTPLab](https://github.com/gchaincl/httplab)       |          HTTPLabs 可让您检查 HTTP 请求并伪造响应。           |
|        [iplib](https://github.com/c-robinson/iplib)        | 受 python ipaddress 和 ruby ipaddr 启发而使用 IP 地址（net.IP，net.IPNet）的库 |
|         [jazigo](https://github.com/udhos/jazigo)          | Jazigo 是用 Go 语言编写的工具，用于检索多个网络设备的配置。  |
|         [kcp-go](https://github.com/xtaci/kcp-go)          |                 KCP - 快速可靠的 ARQ 协议。                  |
|         [kcptun](https://github.com/xtaci/kcptun)          |          基于 KCP 协议的极其简单和快速的 udp 隧道。          |
|          [lhttp](https://github.com/fanux/lhttp)           |      强大的 websocket 框架，可更轻松地构建 IM 服务器。       |
|        [linkio](https://github.com/ian-kent/linkio)        |         用于读取器 / 写入器接口的网络链接速度模拟。          |
|        [llb](https://github.com/kirillDanshin/llb)         | 这是代理服务器的非常简单但快速的后端。对于零内存分配和快速响应的快速重定向到预定义域很有用。 |
|         [mdns](https://github.com/hashicorp/mdns)          |     Golang 中的简单 mDNS（多播 DNS）客户端 / 服务器库。      |
|    [mqttPaho](https://eclipse.org/paho/clients/golang/)    | Paho Go 客户端提供了一个 MQTT 客户端库，用于通过 TCP，TLS 或 WebSockets 连接到 MQTT 代理。 |
|        [NFF-Go](https://github.com/intel-go/nff-go)        | 用于快速开发云和裸机（以前的 YANFF）的高性能网络功能的框架。 |
|         [packet](https://github.com/aerogo/packet)         | 通过 TCP 和 UDP 发送数据包。如果需要，它可以缓冲消息和热交换连接。 |
| [peerdiscovery](https://github.com/schollz/peerdiscovery)  |     Pure Go 库，用于使用 UDP 多播的跨平台本地对等发现。      |
|     [portproxy](https://github.com/aybabtme/portproxy)     |   简单的 TCP 代理，它将不支持它的 API 添加到 CORS 支持中。   |
|       [publicip](https://github.com/polera/publicip)       | 软件包 publicip 返回您的面向公众的 IPv4 地址（互联网出口）。 |
|    [quic-go](https://github.com/lucas-clemente/quic-go)    |                  在纯 Go 中实现 QUIC 协议。                  |
|           [raw](https://github.com/mdlayher/raw)           |   包 raw 允许在设备驱动程序级别为网络接口读取和写入数据。    |
|            [sftp](https://github.com/pkg/sftp)             | 程序包 sftp 实现 SSH 文件传输协议，如 [filezilla-project.org/specs/draft-...](https://filezilla-project.org/specs/draft-ietf-secsh-filexfer-02.txt) |
|          [ssh](https://github.com/gliderlabs/ssh)          |     用于构建 SSH 服务器的高级 API（包装 crypto /ssh）。      |
|       [sslb](https://github.com/eduardonunesp/sslb)        | 这是一个超级简单的负载均衡器，只是一个实现某种性能的小项目。 |
|           [stun](https://github.com/go-rtc/stun)           |                  实施 RFC 5389 STUN 协议。                   |
|    [tcp_server](https://github.com/firstrow/tcp_server)    |             用于更快地构建 tcp 服务器的 Go 库。              |
|          [tspool](https://github.com/two/tspool)           |         TCP 库使用工作池来提高性能并保护您的服务器。         |
|          [utp](https://github.com/anacrolix/utp)           |                 围棋 UTP 微传输协议的实现。                  |
|         [water](https://github.com/songgao/water)          |                    简单的 TUN / TAP 库。                     |
|         [webrtc](https://github.com/pions/webrtc)          |                  WebRTC API 的纯 Go 实现。                   |
|        [winrm](https://github.com/masterzen/winrm)         |     进入 WinRM 客户端以在 Windows 计算机上远程执行命令。     |
|           [xtcp](https://github.com/xfxdev/xtcp)           | 具有同步全双工通信，安全关闭，自定义协议的 TCP Server Framework。 |



### 视频

|                           包                            |                             说明                             |
| :-----------------------------------------------------: | :----------------------------------------------------------: |
|  [go-astisub](https://github.com/asticode/go-astisub)   | 在 GO 中处理字幕（.srt，.stl，.ttml，.webvtt，.ssa/.ass，图文电视，.smi 等）。 |
|   [go-astits](https://github.com/asticode/go-astits)    |        在 GO 中本地解析和解复用 MPEG 传输流（.ts）。         |
|   [go-m3u8](https://github.com/quangngotan95/go-m3u8)   |           Apple m3u8 播放列表的解析器和生成器库。            |
|        [goav](https://github.com/giorgisio/goav)        |                   FFmpeg 的综合 Go 绑定。                    |
|          [gst](https://github.com/ziutek/gst)           |                      GStreamer 的绑定。                      |
| [libgosubs](https://github.com/wargarblgarbl/libgosubs) |         go 的字幕格式支持。支持.srt，.ttml 和.ass。          |
|     [libvlc-go](https://github.com/adrg/libvlc-go)      |    libvlc 2.X/ 3.X/ 4.X 的绑定（由 VLC 媒体播放器使用）。    |
|         [m3u8](https://github.com/grafov/m3u8)          |        Apple HLS 的 M3U8 播放列表的解析器和生成器库。        |
|         [v4l](https://github.com/korandiz/v4l)          |               用 Go 编写的 Linux 视频捕获库。                |