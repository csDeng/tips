# 1. Goroutine池

### 1.1.1. worker pool（goroutine池）

- 本质上是生产者消费者模型
- 可以有效控制goroutine数量，防止暴涨
- 需求：
  - 计算一个数字的各个位数之和，例如数字123，结果为1+2+3=6
  - 随机生成数字进行计算

:::details

```go
package main

import (
	"fmt"
	"math/rand"
	"time"
)

type Job struct {
	// id
	Id int
	// 需要计算的随机数
	RandNum int
}

type Result struct {
	// 这里必须传对象实例
	job *Job
	// 求和
	sum int
}

const (
	POOLSIZE = 60
	CHANSIZE = 128
	FORSIZE  = 100
)

func main() {
	// 需要2个管道
	// 1.job管道
	jobChan := make(chan *Job, CHANSIZE)
	// 2.结果管道
	resultChan := make(chan *Result, CHANSIZE)
	// 3.创建工作池
	createPool(POOLSIZE, jobChan, resultChan)
	// 4.开个打印的协程
	go print(resultChan)

	var id int
	// 循环创建job，输入到管道
	for id < FORSIZE {
		id++
		// 生成随机数
		r_num := rand.Int()
		job := &Job{
			Id:      id,
			RandNum: r_num,
		}
		jobChan <- job
	}
	fmt.Println("main should exit, but sleep")
	time.Sleep(10 * time.Second)

}

func print(resultChan chan *Result) {
	// 遍历结果管道打印
	for result := range resultChan {
		fmt.Printf("job id:%v randnum:%v result:%d\n", result.job.Id,
			result.job.RandNum, result.sum)
	}

}

// 创建工作池
// 参数1：开几个协程
func createPool(num int, jobChan chan *Job, resultChan chan *Result) {
	// 根据开协程个数，去跑运行
	for i := 0; i < num; i++ {
		go func(jobChan chan *Job, resultChan chan *Result) {
			// 执行运算
			// 遍历job管道所有数据，进行相加
			for job := range jobChan {
				// 随机数接过来
				r_num := job.RandNum
				// 随机数每一位相加
				// 定义返回值
				var sum int
				for r_num != 0 {
					tmp := r_num % 10
					sum += tmp
					r_num /= 10
				}
				// 想要的结果是Result
				r := &Result{
					job: job,
					sum: sum,
				}
				//运算结果扔到管道
				resultChan <- r
			}
		}(jobChan, resultChan)
	}
}

```



输出

```go
main should exit, but sleep
job id:43 randnum:5018949295715050020 result:72
job id:44 randnum:2568779411109623071 result:79
job id:45 randnum:3902890183311134652 result:69
.
.
.
job id:33 randnum:1460320609597786623 result:84
job id:34 randnum:5600924393587988459 result:104
job id:40 randnum:2781055864473387780 result:93
job id:39 randnum:6382800227808658932 result:87
job id:36 randnum:732830328053361739 result:73
job id:37 randnum:5486140987150761883 result:91
job id:41 randnum:1598098976185383115 result:97
job id:38 randnum:545291762129038907 result:80
job id:42 randnum:4990765271833742716 result:91
```



:::