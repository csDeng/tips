# 1. runtime包

> Package runtime contains operations that interact with Go's runtime system, such as functions to control goroutines. It also includes the low-level type information used by the reflect package; see reflect's documentation for the programmable interface to the run-time type system.

## 1.1. runtime.Gosched()

让出CPU时间片，重新等待安排任务(大概意思就是本来计划的好好的周末出去烧烤，但是你妈让你去相亲,两种情况第一就是你相亲速度非常快，见面就黄不耽误你继续烧烤，第二种情况就是你相亲速度特别慢，见面就是你侬我侬的，耽误了烧烤，但是还馋就是耽误了烧烤你还得去烧烤)

:::details 包中注释

Gosched yields the processor, allowing other goroutines to run. It does not suspend the current goroutine, so execution resumes automatically.

:::



:::details

* 例一

```go
package main

import (
	"fmt"
	"runtime"
	"time"
)

func main() {
	go func(s string) {
		for i := 0; i < 5; i++ {
			fmt.Println(s, i)
		}
	}("world")

	for i := 0; i < 2; i++ {
		/**
		* Gosched yields the processor, allowing other goroutines to run.
		It does not suspend the current goroutine, so execution resumes automatically.
		**/
		runtime.Gosched()
		fmt.Println("hello", i)
	}
	fmt.Println("should exit, but sleep")
	time.Sleep(time.Second)
}

```

输出结果

```shell
world 0
world 1
world 2
world 3
world 4
hello 0
hello 1
should exit, but sleep
```

> 可以看到调用`runtime.Gosched()`，协程先运行了

为了对比，我们把`runtime.Gosched()`注释之后运行，可以获得以下结果

```shell
hello 0
hello 1
should exit, but sleep
world 0
world 1
world 2
world 3
world 4
```

> 可以看到没有调用`runtime.Gosched()`的时候，协程的运行结果是在`sleep`之后才打印的。

此时，我们再注释掉`sleep`，会得到以下结果

```shell
hello 0
hello 1
should exit, but sleep
```

> 可以看到协程的结果没有打印，就已经结束了。

通过控制变量法，我们发现，`runtime.Gosched`确实可以让出时间片，但是调用一次，让出多少次呢？我们用例二来探讨一下。

* 例二

```go
package main

import (
	"fmt"
	"runtime"
)

func f1() {
	fmt.Println("f1")
}

func f2() {
	fmt.Println("f2")
}
func f3() {
	fmt.Println("f3")
}

func main() {
	go f1()
	go f2()
	go f3()
	runtime.Gosched()
	runtime.Gosched()
	fmt.Println("main exit")
}

```

输出结果

```shell
f3
main exit
```

> 结果显示只有`f3`被打印了，说明同时调用两次`runtime.Goshed`也仅仅是让出一次`cpu`

:::



## 1.2. runtime.Goexit()

退出当前协程(一边烧烤一边相亲，突然发现相亲对象太丑影响烧烤，果断让她滚蛋，然后也就没有然后了)

:::details 包中注释

> Goexit terminates the goroutine that calls it. No other goroutine is affected. Goexit runs all deferred calls before terminating the goroutine. Because Goexit is not a panic, any recover calls in those deferred functions will return nil.
>
> Calling Goexit from the main goroutine terminates that goroutine without func main returning. Since func main has not returned, the program continues execution of other goroutines. If all other goroutines exit, the program crashes.

:::

:::details

```go
package main

import (
    "fmt"
    "runtime"
)

func main() {
    go func() {
        defer fmt.Println("A.defer")
        func() {
            defer fmt.Println("B.defer")
            // 结束协程
            runtime.Goexit()
            defer fmt.Println("C.defer")
            fmt.Println("B")
        }()
        fmt.Println("A")
    }()
    for {
    }
}
```

```shell
B.defer
A.defer
exit status 0xc000013a
```

> 不知道大伙有没有注意到`A`没有被打印？ 
>
> `A` 不打印是因为在函数的`IIFE(immediately Invoked Function Expression)`执行时，调用了`runtime.Goexit()`，直接退出了，当前协程

我们给`iife`开启一个协程

```go
package main

import (
	"fmt"
	"runtime"
	"time"
)

func main() {
	go func() {
		defer fmt.Println("A.defer")
		go func() {
			defer fmt.Println("B.defer")
			// 结束协程
			runtime.Goexit()
			defer fmt.Println("C.defer")
			fmt.Println("B")
		}()
		fmt.Println("A")
	}()
	time.Sleep(5 * time.Second)
}

```

输出结果，

```shell
A
A.defer
B.defer
```



:::



## 1.3. runtime.GOMAXPROCS

:::details 包中注释

GOMAXPROCS sets the maximum number of CPUs that can be executing simultaneously and returns the previous setting. It defaults to the value of runtime.NumCPU.  If n < 1, it does not change the current setting. This call will go away when the scheduler improves.

:::

Go运行时的调度器使用`GOMAXPROCS`参数来确定需要使用多少个OS线程来同时执行Go代码。默认值是机器上的CPU核心数。例如在一个8核心的机器上，调度器会把Go代码同时调度到8个OS线程上（GOMAXPROCS是m:n调度中的n）。

Go语言中可以通过`runtime.GOMAXPROCS()`函数设置当前程序并发时占用的CPU逻辑核心数。

Go1.5版本之前，默认使用的是单核心执行。Go1.5版本之后，默认使用全部的CPU逻辑核心数。

我们可以通过将任务分配到不同的CPU逻辑核心上实现并行的效果，这里举个例子：

```go
func a() {
    for i := 1; i < 10; i++ {
        fmt.Println("A:", i)
    }
}

func b() {
    for i := 1; i < 10; i++ {
        fmt.Println("B:", i)
    }
}

func main() {
    runtime.GOMAXPROCS(1)
    go a()
    go b()
    time.Sleep(time.Second)
}
```

:::details 输出

```shell
B: 1
B: 2
B: 3
B: 4
B: 5
B: 6
B: 7
B: 8
B: 9
A: 1
A: 2
A: 3
A: 4
A: 5
A: 6
A: 7
A: 8
A: 9
```

:::

两个任务只有一个逻辑核心，此时是做完一个任务再做另一个任务。 将逻辑核心数设为2，此时两个任务并行执行，代码如下。

```go
func a() {
    for i := 1; i < 10; i++ {
        fmt.Println("A:", i)
    }
}

func b() {
    for i := 1; i < 10; i++ {
        fmt.Println("B:", i)
    }
}

func main() {
    runtime.GOMAXPROCS(2)
    go a()
    go b()
    time.Sleep(time.Second)
}
```

:::details 输出

```shell
B: 1
B: 2
B: 3
B: 4
B: 5
B: 6
B: 7
B: 8
B: 9
A: 1
A: 2
A: 3
A: 4
A: 5
A: 6
A: 7
A: 8
A: 9
```



:::



Go语言中的操作系统线程和goroutine的关系：

- 1.一个操作系统线程对应用户态多个goroutine。
- 2.go程序可以同时使用多个操作系统线程。
- 3.goroutine和OS线程是多对多的关系，即m:n。