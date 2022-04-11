[[TOC]]

# 函数与方法





## 1. 函数

### 1.1 golang函数特点：

::: tip

• 无需声明原型。

• 支持不定 变参。

• 支持多返回值。

• 支持命名返回参数。 

• 支持匿名函数和闭包。

• 函数也是一种类型，一个函数可以赋值给变量。

:::



:::warning

• 不支持 嵌套 (nested) 一个包不能有两个名字一样的函数。

• 不支持 重载 (overload) 

• 不支持 默认参数 (default parameter)。

:::



### 1.2 函数声明：

函数声明包含一个函数名，参数列表， 返回值列表和函数体。如果函数没有返回值，则返回列表可以省略。函数从第一条语句开始执行，直到执行return语句或者执行函数的最后一条语句。

函数可以没有参数或接受多个参数。

注意类型在变量名之后 。

当两个或多个连续的函数命名参数是同一类型，则除了最后一个类型之外，其他都可以省略。

函数可以返回任意数量的返回值。

使用关键字 `func `定义函数，左大括号依旧不能另起一行。

```go
func test(x, y int, s string) (int, string) {
    // 类型相同的相邻参数，参数类型可合并。 多返回值必须用括号。
    n := x + y          
    return n, fmt.Sprintf(s, n)
}
```

函数是第一类对象，可作为参数传递。建议将复杂签名定义为函数类型，以便于阅读。

:::details 查看示例代码

```go
package main

import "fmt"

func test(fn func() int) int {
    return fn()
}
// 定义函数类型。
type FormatFunc func(s string, x, y int) string 

func format(fn FormatFunc, s string, x, y int) string {
    return fn(s, x, y)
}

func main() {
    s1 := test(func() int { return 100 }) // 直接将匿名函数当参数。

    s2 := format(func(s string, x, y int) string {
        return fmt.Sprintf(s, x, y)
    }, "%d, %d", 10, 20)

    println(s1, s2)
}
```

输出结果：

```shell
100 10, 20
```

:::

有返回值的函数，必须有明确的终止语句，否则会引发编译错误。

你可能会偶尔遇到没有函数体的函数声明，这表示该函数不是以Go实现的。这样的声明定义了函数标识符。

```
package math

func Sin(x float64) float //implemented in assembly language
```



### 1.3 函数参数

函数定义时指出，函数定义时有参数，该变量可称为函数的形参。形参就像定义在函数体内的局部变量。

但当调用函数，传递过来的变量就是函数的实参，函数可以通过两种方式来传递参数：

值传递：指在调用函数时将实际参数复制一份传递到函数中，这样在函数中如果对参数进行修改，将不会影响到实际参数。

```go
func swap(x, y int) int {
       ... ...
  }
```

引用传递：是指在调用函数时将实际参数的地址传递到函数中，那么在函数中对参数所进行的修改，将影响到实际参数。

:::details 查看代码

```go
package main

import (
    "fmt"
)

/* 定义相互交换值的函数 */
func swap(x, y *int) {
    var temp int

    temp = *x /* 保存 x 的值 */
    *x = *y   /* 将 y 值赋给 x */
    *y = temp /* 将 temp 值赋给 y*/

}

func main() {
    var a, b int = 1, 2
    /*
        调用 swap() 函数
        &a 指向 a 指针，a 变量的地址
        &b 指向 b 指针，b 变量的地址
    */
    swap(&a, &b)

    fmt.Println(a, b)
}
```

输出结果：

```shell
2 1
```

:::



在默认情况下，Go 语言使用的是值传递，即在调用过程中不会影响到实际参数。

:::tip

注意1：无论是值传递，还是引用传递，传递给函数的都是变量的副本，不过，值传递是值的拷贝。引用传递是地址的拷贝，一般来说，地址拷贝更为高效。而值拷贝取决于拷贝的对象大小，对象越大，则性能越低。

注意2：map、slice、chan、指针、interface默认以**引用**的方式传递。

:::



不定参数传值 就是函数的参数不是固定的，后面的类型是固定的。（可变参数）

Golang 可变参数本质上就是 `slice`。只能有一个，且必须是最后一个。

在参数赋值时可以不用用一个一个的赋值，可以直接传递一个数组或者切片，特别注意的是在参数后加上“`…`”即可。

```go
func myfunc(args ...int) {    //0个或多个参数
}

func add(a int, args…int) int {    //1个或多个参数
}

func add(a int, b int, args…int) int {    //2个或多个参数
}
```

注意：其中`args`是一个`slice`，我们可以通过`args[index]`依次访问所有参数,通过`len(arg)`来判断传递参数的个数.

任意类型的不定参数： 就是函数的参数和每个参数的类型都不是固定的。

用`interface{}`传递任意类型数据是Go语言的惯例用法，而且`interface{}`是类型安全的。

```go
func myfunc(args ...interface{}) {
}
```

:::details 代码：

```go
package main

import (
    "fmt"
)

func test(s string, n ...int) string {
    var x int
    for _, i := range n {
        x += i
    }

    return fmt.Sprintf(s, x)
}

func main() {
    println(test("sum: %d", 1, 2, 3))
}
```

输出结果：

```go
sum: 6
```

使用 slice 对象做变参时，必须展开。`（slice...）`

```go
package main

import (
    "fmt"
)

func test(s string, n ...int) string {
    var x int
    for _, i := range n {
        x += i
    }

    return fmt.Sprintf(s, x)
}

func main() {
    s := []int{1, 2, 3}
    res := test("sum: %d", s...)    // slice... 展开slice
    println(res)
}
```

:::



### 1.4 函数返回值

`"_"`标识符，用来忽略函数的某个返回值

Go 的返回值可以被命名，并且就像在函数体开头声明的变量那样使用。

返回值的名称应当具有一定的意义，可以作为文档使用。



---



1. 没有参数的 return 语句返回各个返回变量的当前值。这种用法被称作“裸”返回。

2. 直接返回语句仅应当用在像下面这样的短函数中。在长的函数中它们会影响代码的可读性。

:::details 查看代码

```go
package main

import (
    "fmt"
)

func add(a, b int) (c int) {
    c = a + b
    return
}

func calc(a, b int) (sum int, avg int) {
    sum = a + b
    avg = (a + b) / 2

    return
}

func main() {
    var a, b int = 1, 2
    c := add(a, b)
    sum, avg := calc(a, b)
    fmt.Println(a, b, c, sum, avg)
}
```

输出结果：

```shell
1 2 3 3 1
```

:::



3. Golang返回值不能用容器对象接收多返回值。只能用多个变量，或 `"_"` 忽略。



:::details 查看代码

```go
package main

func test() (int, int) {
    return 1, 2
}

func main() {
    // s := make([]int, 2)
    // s = test()   // Error: multiple-value test() in single-value context

    x, _ := test()
    println(x)
}
```

输出结果：

```shell
1
```

:::

4. 多返回值可直接作为其他函数调用实参。

:::details 查看代码

```go
package main

func test() (int, int) {
    return 1, 2
}

func add(x, y int) int {
    return x + y
}

func sum(n ...int) int {
    var x int
    for _, i := range n {
        x += i
    }

    return x
}

func main() {
    println(add(test()))
    println(sum(test()))
}
```

输出结果：

```shell
3
3
```

:::



5. 命名返回参数可看做与形参类似的局部变量，最后由 return 隐式返回。

:::details 查看代码

```go
package main

func add(x, y int) (z int) {
    z = x + y
    return
}

func main() {
    println(add(1, 2))
}
```

输出结果：

```shell
3
```

:::



6. 命名返回参数可被同名局部变量遮蔽，此时需要显式返回。

:::details 查看代码

```go
func add(x, y int) (z int) {
    { // 不能在一个级别，引发 "z redeclared in this block" 错误。
        var z = x + y
        // return   // Error: z is shadowed during return
        return z // 必须显式返回。
    }
}
```

:::

7. 命名返回参数允许 defer 延迟调用通过闭包读取和修改。

:::details 查看代码

```go
package main

func add(x, y int) (z int) {
    defer func() {
        z += 100
    }()

    z = x + y
    return
}

func main() {
    println(add(1, 2)) 
}
```

输出结果：

```go
103
```

:::



8. 显式 return 返回前，会先修改命名返回参数。

:::details 查看代码

```go
package main

func add(x, y int) (z int) {
    defer func() {
        println(z) // 输出: 203
    }()

    z = x + y
    return z + 200 // 执行顺序: (z = z + 200) -> (call defer) -> (return)
}

func main() {
    println(add(1, 2)) // 输出: 203
}
```

输出结果：

```
203
203
```

:::

### 1.5  匿名函数

匿名函数是指不需要定义函数名的一种函数实现方式。1958年LISP首先采用匿名函数。

在Go里面，函数可以像普通变量一样被传递或使用，Go语言支持随时在代码里定义匿名函数。

匿名函数由一个不带函数名的函数声明和函数体组成。匿名函数的优越性在于可以直接使用函数内的变量，不必申明。

```go
package main

import (
    "fmt"
    "math"
)

func main() {
    getSqrt := func(a float64) float64 {
        return math.Sqrt(a)
    }
    fmt.Println(getSqrt(4))
}
```

输出结果：

```shell
2
```

上面先定义了一个名为getSqrt 的变量，初始化该变量时和之前的变量初始化有些不同，使用了func，func是定义函数的，可是这个函数和上面说的函数最大不同就是没有函数名，也就是匿名函数。这里将一个函数当做一个变量一样的操作。

Golang匿名函数可赋值给变量，做为结构字段，或者在 channel 里传送。

:::details 查看代码

```go
package main

func main() {
    // --- function variable ---
    fn := func() { println("Hello, World!") }
    fn()

    // --- function collection ---
    fns := [](func(x int) int){
        func(x int) int { return x + 1 },
        func(x int) int { return x + 2 },
    }
    println(fns[0](100))

    // --- function as field ---
    d := struct {
        fn func() string
    }{
        fn: func() string { return "Hello, World!" },
    }
    println(d.fn())

    // --- channel of function ---
    fc := make(chan func() string, 2)
    fc <- func() string { return "Hello, World!" }
    println((<-fc)())
}
```

输出结果：

```
    Hello, World!
    101
    Hello, World!
    Hello, World!
```

:::

### 1.6 闭包

闭包的应该都听过，但到底什么是闭包呢？

闭包是由函数及其相关引用环境组合而成的实体(即：闭包=函数+引用环境)。

:::details 又臭又长不想看

“官方”的解释是：所谓“闭包”，指的是一个拥有许多变量和绑定了这些变量的环境的表达式（通常是一个函数），因而这些变量也是该表达式的一部分。

维基百科讲，闭包（Closure），是引用了自由变量的函数。这个被引用的自由变量将和这个函数一同存在，即使已经离开了创造它的环境也不例外。所以，有另一种说法认为闭包是由函数和与其相关的引用环境组合而成的实体。闭包在运行时可以有多个实例，不同的引用环境和相同的函数组合可以产生不同的实例。

看着上面的描述，会发现闭包和匿名函数似乎有些像。可是可能还是有些云里雾里的。因为跳过闭包的创建过程直接理解闭包的定义是非常困难的。目前在`JavaScript、Go、PHP、Scala、Scheme、Common Lisp、Smalltalk、Groovy、Ruby、 Python、Lua、objective c、Swift `以及`Java8`以上等语言中都能找到对闭包不同程度的支持。通过支持闭包的语法可以发现一个特点，他们都有垃圾回收(`GC`)机制。 javascript应该是普及度比较高的编程语言了，通过这个来举例应该好理解写。看下面的代码，只要关注script里方法的定义和调用就可以了。

:::

:::details 查看代码（学过js直接跳吧）

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <title></title>
</head>
<body> 
</body>
</html>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js" type="text/javascript"></script>
<script>
function a(){
    var i=0;
    function b(){
        console.log(++i);
        document.write("<h1>"+i+"</h1>");
    }
    return b;
}

$(function(){
    var c=a();
    c();
    c();
    c();
    //a(); //不会有信息输出
    document.write("<h1>=============</h1>");
    var c2=a();
    c2();
    c2();
});

</script>
```

这段代码有两个特点：

函数b嵌套在函数a内部 函数a返回函数b 这样在执行完var c=a()后，变量c实际上是指向了函数b()，再执行函数c()后就会显示i的值，第一次为1，第二次为2，第三次为3，以此类推。 其实，这段代码就创建了一个闭包。因为函数a()外的变量c引用了函数a()内的函数b()，就是说：

当函数a()的内部函数b()被函数a()外的一个变量引用的时候，就创建了一个闭包。 在上面的例子中，由于闭包的存在使得函数a()返回后，a中的i始终存在，这样每次执行c()，i都是自加1后的值。 从上面可以看出闭包的作用就是在a()执行完并返回后，闭包使得Javascript的垃圾回收机制GC不会收回a()所占用的资源，因为a()的内部函数b()的执行需要依赖a()中的变量i。

在给定函数被多次调用的过程中，这些私有变量能够保持其持久性。变量的作用域仅限于包含它们的函数，因此无法从其它程序代码部分进行访问。不过，变量的生存期是可以很长，在一次函数调用期间所创建所生成的值在下次函数调用时仍然存在。正因为这一特点，闭包可以用来完成信息隐藏，并进而应用于需要状态表达的某些编程范型中。 下面来想象另一种情况，如果a()返回的不是函数b()，情况就完全不同了。因为a()执行完后，b()没有被返回给a()的外界，只是被a()所引用，而此时a()也只会被b()引 用，因此函数a()和b()互相引用但又不被外界打扰（被外界引用），函数a和b就会被GC回收。所以直接调用a();是页面并没有信息输出。

下面来说闭包的另一要素引用环境。c()跟c2()引用的是不同的环境，在调用i++时修改的不是同一个i，因此两次的输出都是1。函数a()每进入一次，就形成了一个新的环境，对应的闭包中，函数都是同一个函数，环境却是引用不同的环境。这和c()和c()的调用顺序都是无关的。

:::

####  Go的闭包

Go语言是支持闭包的，这里只是简单地讲一下在Go语言中闭包是如何实现的。 下面我来将之前的JavaScript的闭包例子用Go来实现。

```go
package main

import (
    "fmt"
)

func a() func() int {
    i := 0
    b := func() int {
        i++
        fmt.Println(i)
        return i
    }
    return b
}

func main() {
    c := a()
    c()
    c()
    c()

    a() //不会输出i
}
```

输出结果：

```
    1
    2
    3
```

可以发现，输出和之前的JavaScript的代码是一致的。具体的原因和上面的也是一样的，这说明Go语言是支持闭包的。

闭包复制的是原对象指针，这就很容易解释延迟引用现象。

```go
package main

import "fmt"

func test() func() {
    x := 100
    fmt.Printf("x (%p) = %d\n", &x, x)

    return func() {
        fmt.Printf("x (%p) = %d\n", &x, x)
    }
}

func main() {
    f := test()
    f()
}
```

输出:

```
    x (0xc42007c008) = 100
    x (0xc42007c008) = 100
```

在汇编层 ，test 实际返回的是 FuncVal 对象，其中包含了匿名函数地址、闭包对象指针。当调 匿名函数时，只需以某个寄存器传递该对象即可。

```
    FuncVal { func_address, closure_var_pointer ... }
```

外部引用函数参数局部变量

```go
package main

import "fmt"

// 外部引用函数参数局部变量
func add(base int) func(int) int {
    return func(i int) int {
        base += i
        return base
    }
}

func main() {
    tmp1 := add(10)
    fmt.Println(tmp1(1), tmp1(2))
    // 此时tmp1和tmp2不是一个实体了
    tmp2 := add(100)
    fmt.Println(tmp2(1), tmp2(2))
}
```

返回2个闭包

```go
package main

import "fmt"

// 返回2个函数类型的返回值
func test01(base int) (func(int) int, func(int) int) {
    // 定义2个函数，并返回
    // 相加
    add := func(i int) int {
        base += i
        return base
    }
    // 相减
    sub := func(i int) int {
        base -= i
        return base
    }
    // 返回
    return add, sub
}

func main() {
    f1, f2 := test01(10)
    // base一直是没有消
    fmt.Println(f1(1), f2(2))
    // 此时base是9
    fmt.Println(f1(3), f2(4))
}
```

### 1.7 Go 语言递归函数

递归，就是在运行的过程中调用自己。 一个函数调用自己，就叫做递归函数。

构成递归需具备的条件：

```shell
1.子问题须与原始问题为同样的事，且更为简单。
2.不能无限制地调用本身，须有个出口，化简为非递归状况处理。
```

* 数字阶乘

一个正整数的阶乘（factorial）是所有小于及等于该数的正整数的积，并且0的阶乘为1。自然数n的阶乘写作n!。1808年，基斯顿·卡曼引进这个表示法。

:::details 查看代码

```go
package main

import "fmt"

func factorial(i int) int {
    if i <= 1 {
        return 1
    }
    return i * factorial(i-1)
}

func main() {
    var i int = 7
    fmt.Printf("Factorial of %d is %d\n", i, factorial(i))
}
```

输出结果：

```
    Factorial of 7 is 5040
```

:::

* 斐波那契数列(Fibonacci)

:::details 查看代码

这个数列从第3项开始，每一项都等于前两项之和。

```go
package main

import "fmt"

func fibonaci(i int) int {
    if i == 0 {
        return 0
    }
    if i == 1 {
        return 1
    }
    return fibonaci(i-1) + fibonaci(i-2)
}

func main() {
    var i int
    for i = 0; i < 10; i++ {
        fmt.Printf("%d\n", fibonaci(i))
    }
}
```

输出结果：

```
    0
    1
    1
    2
    3
    5
    8
    13
    21
    34
```

:::

### 1.8 Golang延迟调用：

:::tip defer的特性

1. 关键字 defer 用于注册延迟调用。
2. 这些调用直到 return 前才被执。因此，可以用来做资源清理。
3. 多个defer语句，按先进后出的方式执行。
4. defer语句中的变量，在defer声明时就决定了。

::: 

:::warning defer用途：

1. 关闭文件句柄
2. 锁资源释放
3. 数据库连接释放

:::



#### go语言 defer

go 语言的defer功能强大，对于资源管理非常方便，但是如果没用好，也会有陷阱。

defer 是先进后出

这个很自然,后面的语句会依赖前面的资源，因此如果先前面的资源先释放了，后面的语句就没法执行了。

:::details 查看代码

```go
package main

import "fmt"

func main() {
    var whatever [5]struct{}

    for i := range whatever {
        defer fmt.Println(i)
    }
}
```

```shell
4
3
2
1
0
```

:::

#### defer 碰上闭包

```go
package main

import "fmt"

func main() {
    var whatever [5]struct{}
    for i := range whatever {
        defer func() { fmt.Println(i) }()
    }
}
```

:::details 输出结果：

```shell
4
4
4
4
4
```

:::

其实go说的很清楚,我们一起来看看go spec如何说的

`Each time a "defer" statement executes, the function value and parameters to the call are evaluated as usualand saved anew but the actual function is not invoked.`

也就是说函数正常执行,由于闭包用到的变量 i 在执行的时候已经变成4,所以输出全都是4.

#### defer f.Close

这个大家用的都很频繁,但是go语言编程举了一个可能一不小心会犯错的例子.

```go
package main

import "fmt"

type Test struct {
    name string
}

func (t *Test) Close() {
    fmt.Println(t.name, " closed")
}
func main() {
    ts := []Test{{"a"}, {"b"}, {"c"}}
    for _, t := range ts {
        defer t.Close()
    }
}
```

:::details 输出结果：

```shell
c  closed
c  closed
c  closed
```

这个输出并不会像我们预计的输出c b a,而是输出c c c

可是按照前面的go spec中的说明,应该输出c b a才对啊.

:::

那我们换一种方式来调用一下.

```go
package main

import "fmt"

type Test struct {
    name string
}

func (t *Test) Close() {
    fmt.Println(t.name, " closed")
}
func Close(t Test) {
    t.Close()
}
func main() {
    ts := []Test{{"a"}, {"b"}, {"c"}}
    for _, t := range ts {
        defer Close(t)
    }
}
```

:::details 输出结果：

```
    c  closed
    b  closed
    a  closed
```

这个时候输出的就是c b a

:::

当然,如果你不想多写一个函数,也很简单,可以像下面这样,同样会输出c b a

:::details  看似多此一举的声明

```go
package main

import "fmt"

type Test struct {
    name string
}

func (t *Test) Close() {
    fmt.Println(t.name, " closed")
}
func main() {
    ts := []Test{{"a"}, {"b"}, {"c"}}
    for _, t := range ts {
        t2 := t
        defer t2.Close()
    }
}
```

输出结果：

```
    c  closed
    b  closed
    a  closed
```

:::

通过以上例子，结合

`Each time a "defer" statement executes, the function value and parameters to the call are evaluated as usualand saved anew but the actual function is not invoked.`

这句话。可以得出下面的结论：

defer后面的语句在执行的时候，函数调用的参数会被保存起来，但是不执行。也就是复制了一份。但是并没有说struct这里的this指针如何处理，通过这个例子可以看出go语言并没有把这个明确写出来的this指针当作参数来看待。

多个 defer 注册，按 FILO 次序执行 ( 先进后出 )。哪怕函数或某个延迟调用发生错误，这些调用依旧会被执行。

:::details 查看代码

```go
package main

func test(x int) {
    defer println("a")
    defer println("b")

    defer func() {
        println(100 / x) // div0 异常未被捕获，逐步往外传递，最终终止进程。
    }()

    defer println("c")
}

func main() {
    test(0)
}
```

输出结果:

```
c
b
a
panic: runtime error: integer divide by zero
```

:::



* 延迟调用参数在注册时求值或复制，可用指针或闭包 "延迟" 读取。

:::details 查看代码

```go
package main

func test() {
    x, y := 10, 20

    defer func(i int) {
        println("defer:", i, y) // y 闭包引用
    }(x) // x 被复制

    x += 10
    y += 100
    println("x =", x, "y =", y)
}

func main() {
    test()
}
```

输出结果:

```
    x = 20 y = 120
    defer: 10 120
```

:::



* 滥用 defer 可能会导致性能问题，尤其是在一个 "大循环" 里。

:::details 查看代码

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

var lock sync.Mutex

func test() {
    lock.Lock()
    lock.Unlock()
}

func testdefer() {
    lock.Lock()
    defer lock.Unlock()
}

func main() {
    func() {
        t1 := time.Now()

        for i := 0; i < 10000; i++ {
            test()
        }
        elapsed := time.Since(t1)
        fmt.Println("test elapsed: ", elapsed)
    }()
    func() {
        t1 := time.Now()

        for i := 0; i < 10000; i++ {
            testdefer()
        }
        elapsed := time.Since(t1)
        fmt.Println("testdefer elapsed: ", elapsed)
    }()

}
```

输出结果:

```
    test elapsed:  223.162µs
    testdefer elapsed:  781.304µs
```

:::

### 1.9 defer陷阱

#### defer 与 closure

```go
package main

import (
    "errors"
    "fmt"
)

func foo(a, b int) (i int, err error) {
    defer fmt.Printf("first defer err %v\n", err)
    defer func(err error) { fmt.Printf("second defer err %v\n", err) }(err)
    defer func() { fmt.Printf("third defer err %v\n", err) }()
    if b == 0 {
        err = errors.New("divided by zero!")
        return
    }

    i = a / b
    return
}

func main() {
    foo(2, 0)
}
```

:::details 输出结果：

```
    third defer err divided by zero!
    second defer err <nil>
    first defer err <nil>
```

解释：如果 defer 后面跟的不是一个 closure 最后执行的时候我们得到的并不是最新的值。

:::

#### defer 与 return

```go
package main

import "fmt"

func foo() (i int) {

    i = 0
    defer func() {
        fmt.Println(i)
    }()

    return 2
}

func main() {
    foo()
}
```

:::details 输出结果：

```
    2
```

解释：在有具名返回值的函数中（这里具名返回值为 i），执行 return 2 的时候实际上已经将 i 的值重新赋值为 2。所以defer closure 输出结果为 2 而不是 1。

:::

#### defer nil 函数

```go
package main

import (
    "fmt"
)

func test() {
    var run func() = nil
    defer run()
    fmt.Println("runs")
}

func main() {
    defer func() {
        if err := recover(); err != nil {
            fmt.Println(err)
        }
    }()
    test()
}
```

:::details 输出结果：

```
runs
runtime error: invalid memory address or nil pointer dereference
```

解释：名为 test 的函数一直运行至结束，然后 defer 函数会被执行且会因为值为 nil 而产生 panic 异常。然而值得注意的是，run() 的声明是没有问题，因为在test函数运行完成后它才会被调用。

:::

#### 在错误的位置使用 defer

当 http.Get 失败时会抛出异常。

```go
package main

import "net/http"

func do() error {
    res, err := http.Get("http://www.google.com")
    defer res.Body.Close()
    if err != nil {
        return err
    }

    // ..code...

    return nil
}

func main() {
    do()
}
```

:::details 输出结果：

```
    panic: runtime error: invalid memory address or nil pointer dereference
```

因为在这里我们并没有检查我们的请求是否成功执行，当它失败的时候，我们访问了 Body 中的空变量 res ，因此会抛出异常

#### 解决方案

总是在一次成功的资源分配下面使用 defer ，对于这种情况来说意味着：当且仅当 http.Get 成功执行时才使用 defer

```go
package main

import "net/http"

func do() error {
    res, err := http.Get("http://xxxxxxxxxx")
    if res != nil {
        defer res.Body.Close()
    }

    if err != nil {
        return err
    }

    // ..code...

    return nil
}

func main() {
    do()
}
```

在上述的代码中，当有错误的时候，err 会被返回，否则当整个函数返回的时候，会关闭 res.Body 。

解释：在这里，你同样需要检查 res 的值是否为 nil ，这是 http.Get 中的一个警告。通常情况下，出错的时候，返回的内容应为空并且错误会被返回，可当你获得的是一个重定向 error 时， res 的值并不会为 nil ，但其又会将错误返回。上面的代码保证了无论如何 Body 都会被关闭，如果你没有打算使用其中的数据，那么你还需要丢弃已经接收的数据。

:::



#### 不检查错误

:::details 查看详情

在这里，f.Close() 可能会返回一个错误，可这个错误会被我们忽略掉

```go
package main

import "os"

func do() error {
    f, err := os.Open("book.txt")
    if err != nil {
        return err
    }

    if f != nil {
        defer f.Close()
    }

    // ..code...

    return nil
}

func main() {
    do()
}
```

改进一下

```go
package main

import "os"

func do() error {
    f, err := os.Open("book.txt")
    if err != nil {
        return err
    }

    if f != nil {
        defer func() {
            if err := f.Close(); err != nil {
                // log etc
            }
        }()
    }

    // ..code...

    return nil
}

func main() {
    do()
}
```

再改进一下

通过命名的返回变量来返回 defer 内的错误。

```go
package main

import "os"

func do() (err error) {
    f, err := os.Open("book.txt")
    if err != nil {
        return err
    }

    if f != nil {
        defer func() {
            if ferr := f.Close(); ferr != nil {
                err = ferr
            }
        }()
    }

    // ..code...

    return nil
}

func main() {
    do()
}
```

释放相同的资源

如果你尝试使用相同的变量释放不同的资源，那么这个操作可能无法正常执行。

```go
package main

import (
    "fmt"
    "os"
)

func do() error {
    f, err := os.Open("book.txt")
    if err != nil {
        return err
    }
    if f != nil {
        defer func() {
            if err := f.Close(); err != nil {
                fmt.Printf("defer close book.txt err %v\n", err)
            }
        }()
    }

    // ..code...

    f, err = os.Open("another-book.txt")
    if err != nil {
        return err
    }
    if f != nil {
        defer func() {
            if err := f.Close(); err != nil {
                fmt.Printf("defer close another-book.txt err %v\n", err)
            }
        }()
    }

    return nil
}

func main() {
    do()
}
```

输出结果： defer close book.txt err close ./another-book.txt: file already closed

当延迟函数执行时，只有最后一个变量会被用到，因此，f 变量 会成为最后那个资源 (another-book.txt)。而且两个 defer 都会将这个资源作为最后的资源来关闭

解决方案：

```go
package main

import (
    "fmt"
    "io"
    "os"
)

func do() error {
    f, err := os.Open("book.txt")
    if err != nil {
        return err
    }
    if f != nil {
        defer func(f io.Closer) {
            if err := f.Close(); err != nil {
                fmt.Printf("defer close book.txt err %v\n", err)
            }
        }(f)
    }

    // ..code...

    f, err = os.Open("another-book.txt")
    if err != nil {
        return err
    }
    if f != nil {
        defer func(f io.Closer) {
            if err := f.Close(); err != nil {
                fmt.Printf("defer close another-book.txt err %v\n", err)
            }
        }(f)
    }

    return nil
}

func main() {
    do()
}
```

:::



## 2. 方法

一个方法就是一个包含了接受者的函数，接受者可以是命名类型或者结构体类型的一个值或者是一个指针。

### 2.1. 方法定义

Golang 方法总是绑定对象实例，并隐式将实例作为第一实参 (`receiver`)。

```go
func (recevier type) methodName(参数列表)(返回值列表){
    // 参数和返回值可以省略
}

```



:::tip

• 只能为当前包内命名类型定义方法。

• 参数 `receiver` 可任意命名。如方法中未曾使用 ，可省略参数名。

• 参数 `receiver` 类型可以是` T `或` *T`。基类型` T `不能是接口或指针。 

• 不支持方法重载，`receiver` 只是参数签名的组成部分。

• 可用实例 `value` 或 `pointer` 调用全部方法，编译器自动转换。

:::



所有给定类型的方法属于该类型的方法集。

:::details 方法的基础架构

```go
package main

type Test struct{}

// 无参数、无返回值
func (t Test) method0() {
}

// 单参数、无返回值
func (t Test) method1(i int) {
}

// 多参数、无返回值
func (t Test) method2(x, y int) {
}

// 无参数、单返回值
func (t Test) method3() (i int) {
    return
}

// 多参数、多返回值
func (t Test) method4(x, y int) (z int, err error) {
    return
}

// 无参数、无返回值
func (t *Test) method5() {
}

// 单参数、无返回值
func (t *Test) method6(i int) {
}

// 多参数、无返回值
func (t *Test) method7(x, y int) {
}

// 无参数、单返回值
func (t *Test) method8() (i int) {
    return
}

// 多参数、多返回值
func (t *Test) method9(x, y int) (z int, err error) {
    return
}

func main() {}
```

:::

下面定义一个结构体类型和该类型的一个方法：

:::details 查看代码

```go
package main

import (
    "fmt"
)

//结构体
type User struct {
    Name  string
    Email string
}

//方法
func (u User) Notify() {
    fmt.Printf("%v : %v \n", u.Name, u.Email)
}
func main() {
    // 值类型调用方法
    u1 := User{"golang", "golang@golang.com"}
    u1.Notify()
    // 指针类型调用方法
    u2 := User{"go", "go@go.com"}
    u3 := &u2
    u3.Notify()
}
```

输出结果：

```
    golang : golang@golang.com 
    go : go@go.com
```

解释： 首先我们定义了一个叫做 User 的结构体类型，然后定义了一个该类型的方法叫做 Notify，该方法的接受者是一个 User 类型的值。要调用 Notify 方法我们需要一个 User 类型的值或者指针。

在这个例子中当我们使用指针时，Go 调整和解引用指针使得调用可以被执行。注意，当接受者不是一个指针时，该方法操作对应接受者的值的副本(意思就是即使你使用了指针调用函数，但是函数的接受者是值类型，所以函数内部操作还是对副本的操作，而不是指针操作。

我们修改 Notify 方法，让它的接受者使用指针类型：

```go
package main

import (
    "fmt"
)

//结构体
type User struct {
    Name  string
    Email string
}

//方法
func (u *User) Notify() {
    fmt.Printf("%v : %v \n", u.Name, u.Email)
}
func main() {
    // 值类型调用方法
    u1 := User{"golang", "golang@golang.com"}
    u1.Notify()
    // 指针类型调用方法
    u2 := User{"go", "go@go.com"}
    u3 := &u2
    u3.Notify()
}
```

输出结果：

```
    golang : golang@golang.com 
    go : go@go.com
```

注意：当接受者是指针时，即使用值类型调用那么函数内部也是对指针的操作。

方法不过是一种特殊的函数，只需将其还原，就知道 receiver T 和 `*T` 的差别。

```go
package main

import "fmt"

type Data struct {
    x int
}

func (self Data) ValueTest() { // func ValueTest(self Data);
    fmt.Printf("Value: %p\n", &self)
}

func (self *Data) PointerTest() { // func PointerTest(self *Data);
    fmt.Printf("Pointer: %p\n", self)
}

func main() {
    d := Data{}
    p := &d
    fmt.Printf("Data: %p\n", p)

    d.ValueTest()   // ValueTest(d)
    d.PointerTest() // PointerTest(&d)

    p.ValueTest()   // ValueTest(*p)
    p.PointerTest() // PointerTest(p)
}
```

输出:

```
    Data: 0xc42007c008
    Value: 0xc42007c018
    Pointer: 0xc42007c008
    Value: 0xc42007c020
    Pointer: 0xc42007c008
```

:::



## 3. 普通函数与方法的区别

1.对于普通函数，接收者为值类型时，不能将指针类型的数据直接传递，反之亦然。

2.对于方法（如struct的方法），接收者为值类型时，可以直接用指针类型的变量调用方法，反过来同样也可以。

:::details 查看示例代码

```go
package main

//普通函数与方法的区别（在接收者分别为值类型和指针类型的时候）

import (
    "fmt"
)

//1.普通函数
//接收值类型参数的函数
func valueIntTest(a int) int {
    return a + 10
}

//接收指针类型参数的函数
func pointerIntTest(a *int) int {
    return *a + 10
}

func structTestValue() {
    a := 2
    fmt.Println("valueIntTest:", valueIntTest(a))
    //函数的参数为值类型，则不能直接将指针作为参数传递
    //fmt.Println("valueIntTest:", valueIntTest(&a))
    //compile error: cannot use &a (type *int) as type int in function argument

    b := 5
    fmt.Println("pointerIntTest:", pointerIntTest(&b))
    //同样，当函数的参数为指针类型时，也不能直接将值类型作为参数传递
    //fmt.Println("pointerIntTest:", pointerIntTest(b))
    //compile error:cannot use b (type int) as type *int in function argument
}

//2.方法
type PersonD struct {
    id   int
    name string
}

//接收者为值类型
func (p PersonD) valueShowName() {
    fmt.Println(p.name)
}

//接收者为指针类型
func (p *PersonD) pointShowName() {
    fmt.Println(p.name)
}

func structTestFunc() {
    //值类型调用方法
    personValue := PersonD{101, "hello world"}
    personValue.valueShowName()
    personValue.pointShowName()

    //指针类型调用方法
    personPointer := &PersonD{102, "hello golang"}
    personPointer.valueShowName()
    personPointer.pointShowName()

    //与普通函数不同，接收者为指针类型和值类型的方法，指针类型和值类型的变量均可相互调用
}

func main() {
    structTestValue()
    structTestFunc()
}
```

输出结果：

```shell
valueIntTest: 12
pointerIntTest: 15
hello world
hello world
hello golang
hello golang
```

:::

## 4. 扩展

### 4.1. 表达式

Golang 表达式 ：根据调用者不同，方法分为两种表现形式:

```go
    instance.method(args...) ---> <type>.func(instance, args...)
```

前者称为 method value，后者 method expression。

1. 两者都可像普通函数那样赋值和传参，区别在于 method value 绑定实例，而 method expression 则须显式传参。

:::details 查看示例代码

```go
package main

import "fmt"

type User struct {
    id   int
    name string
}

func (self *User) Test() {
    fmt.Printf("%p, %v\n", self, self)
}

func main() {
    u := User{1, "Tom"}
    u.Test()

    mValue := u.Test
    mValue() // 隐式传递 receiver

    mExpression := (*User).Test
    mExpression(&u) // 显式传递 receiver
}
```

输出结果:

```shell
    0xc42000a060, &{1 Tom}
    0xc42000a060, &{1 Tom}
    0xc42000a060, &{1 Tom}
```

:::

2. 需要注意，method value 会复制 receiver。

:::details 查看示例代码

```go
package main

import "fmt"

type User struct {
    id   int
    name string
}

func (self User) Test() {
    fmt.Println(self)
}

func main() {
    u := User{1, "Tom"}
    mValue := u.Test // 立即复制 receiver，因为不是指针类型，不受后续修改影响。

    u.id, u.name = 2, "Jack"
    u.Test()

    mValue()
}
```

输出结果

```
    {2 Jack}
    {1 Tom}
```

:::



3. 在汇编层面，method value 和闭包的实现方式相同，实际返回 FuncVal 类型对象。

```go
FuncVal { method_address, receiver_copy }
```

4. 可依据方法集转换 method expression，注意 receiver 类型的差异。

:::details 查看示例代码

```go
package main

import "fmt"

type User struct {
    id   int
    name string
}

func (self *User) TestPointer() {
    fmt.Printf("TestPointer: %p, %v\n", self, self)
}

func (self User) TestValue() {
    fmt.Printf("TestValue: %p, %v\n", &self, self)
}

func main() {
    u := User{1, "Tom"}
    fmt.Printf("User: %p, %v\n", &u, u)

    mv := User.TestValue
    mv(u)

    mp := (*User).TestPointer
    mp(&u)

    mp2 := (*User).TestValue // *User 方法集包含 TestValue。签名变为 func TestValue(self *User)。实际依然是 receiver value copy。
    mp2(&u)
}
```

输出:

```shell
User: 0xc42000a060, {1 Tom}
TestValue: 0xc42000a0a0, {1 Tom}
TestPointer: 0xc42000a060, &{1 Tom}
TestValue: 0xc42000a100, {1 Tom}
```

将方法 "还原" 成函数，就容易理解下面的代码了。

```go
package main

type Data struct{}

func (Data) TestValue() {}

func (*Data) TestPointer() {}

func main() {
    var p *Data = nil
    p.TestPointer()

    (*Data)(nil).TestPointer() // method value
    (*Data).TestPointer(nil)   // method expression

    // p.TestValue()            // invalid memory address or nil pointer dereference

    // (Data)(nil).TestValue()  // cannot convert nil to type Data
    // Data.TestValue(nil)      // cannot use nil as type Data in function argument
}
```

:::

### 4.2 自定义error

 抛异常和处理异常

* 系统抛

:::details 查看示例代码

```go
package main

import "fmt"

// 系统抛
func test01() {
   a := [5]int{0, 1, 2, 3, 4}
   a[1] = 123
   fmt.Println(a)
   //a[10] = 11
   index := 10
   a[index] = 10
   fmt.Println(a)
}

func getCircleArea(radius float32) (area float32) {
   if radius < 0 {
      // 自己抛
      panic("半径不能为负")
   }
   return 3.14 * radius * radius
}

func test02() {
   getCircleArea(-5)
}

//
func test03() {
   // 延时执行匿名函数
   // 延时到何时？（1）程序正常结束   （2）发生异常时
   defer func() {
      // recover() 复活 恢复
      // 会返回程序为什么挂了
      if err := recover(); err != nil {
         fmt.Println(err)
      }
   }()
   getCircleArea(-5)
   fmt.Println("这里有没有执行")
}

func test04()  {
   test03()
   fmt.Println("test04")
}

func main() {
   test04()
}
```

输出

```shell
半径不能为负
test04
```

:::

* 返回异常

:::details 查看示例代码

```go
package main

import (
	"errors"
	"fmt"
)

func getCircleArea(radius float32) (area float32, err error) {
	if radius < 0 {
		// 构建个异常对象
		err = errors.New("半径不能为负")
		return
	}
	area = 3.14 * radius * radius
	return
}

func main() {
	area, err := getCircleArea(-5)
	if err != nil {
		fmt.Println("error=>", err)
	} else {
		fmt.Println(area)
	}
}

```

输出

```shell
error=> 半径不能为负
```

:::

* 自定义error：

:::查看示例代码

```go
package main

import (
    "fmt"
    "os"
    "time"
)

type PathError struct {
    path       string
    op         string
    createTime string
    message    string
}

func (p *PathError) Error() string {
    return fmt.Sprintf("path=%s \nop=%s \ncreateTime=%s \nmessage=%s", p.path,
        p.op, p.createTime, p.message)
}

func Open(filename string) error {

    file, err := os.Open(filename)
    if err != nil {
        return &PathError{
            path:       filename,
            op:         "read",
            message:    err.Error(),
            createTime: fmt.Sprintf("%v", time.Now()),
        }
    }

    defer file.Close()
    return nil
}

func main() {
    err := Open("/Users/5lmh/Desktop/go/src/test.txt")
    switch v := err.(type) {
    case *PathError:
        fmt.Println("get path error,", v)
    default:

    }

}
```

输出结果：

```shell
get path error, path=/Users/pprof/Desktop/go/src/test.txt 
op=read 
createTime=2018-04-05 11:25:17.331915 +0800 CST m=+0.000441790 
message=open /Users/pprof/Desktop/go/src/test.txt: no such file or directory
```

:::



