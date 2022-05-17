# 定时器

* Timer：时间到了，执行只执行1次
* Ticker：时间到了，多次执行



## Timer

* 基本使用

:::details

```go 
func main() {
	/**
	* 1. 创建定时器
	**/
	/**
	NewTimer creates a new Timer that will send the current time on its channel
	after at least duration d
	*/
	log.Println(time.Now())
	timer := time.NewTimer(2 * time.Second)
	fmt.Println(<-timer.C)
	fmt.Printf("%T : %v \r\n", timer, timer)
	log.Println(time.Now())
}

```

输出

```shell
2022/05/17 14:16:23 2022-05-17 14:16:23.9679315 +0800 CST m=+0.001999701
2022-05-17 14:16:25.9945183 +0800 CST m=+2.028580001
*time.Timer : &{0xc000048060 {0 1053841046621200 0 0x9c6520 0xc000048060 0 0 0}} 
2022/05/17 14:16:25 2022-05-17 14:16:25.9953948 +0800 CST m=+2.029456501
```

:::

* timer只能用一次

:::details

```go
func main() {
	timer := time.NewTimer(time.Second)

	fmt.Println(<-timer.C)
	fmt.Println("时间到")

	// fmt.Println(<-timer.C)

	fmt.Println("main exit")
}
```

输出

```shell
2022-05-17 14:17:32.8901259 +0800 CST m=+1.014617701
时间到
main exit
```

把注释打开再运行的结果

```shell
2022-05-17 14:18:28.2956576 +0800 CST m=+1.006551901
时间到
fatal error: all goroutines are asleep - deadlock!

goroutine 1 [chan receive]:
main.main()
        one.go:14 +0xfa
exit status 2
```

:::

* 延时

:::details

```go
func main() {
	// 1. sleep
	log.Println("sleep", time.Now())
	time.Sleep(2 * time.Second)
	log.Println("--------sleep-------")
	// 2. <- time.C
	log.Println("<-time.C", time.Now())
	timer := time.NewTimer(2 * time.Second)
	<-timer.C
	log.Println("-------- <-timer.C -------")
	// 3. <- time.After
	log.Println("<- time.After", time.Now())
	<-time.After(2 * time.Second)
	log.Println("--------after-------")
}
```

输出

```shell
2022/05/17 14:19:21 sleep 2022-05-17 14:19:21.6913174 +0800 CST m=+0.002678801
2022/05/17 14:19:23 --------sleep-------
2022/05/17 14:19:23 <-time.C 2022-05-17 14:19:23.7048594 +0800 CST m=+2.016214301
2022/05/17 14:19:25 -------- <-timer.C -------
2022/05/17 14:19:25 <- time.After 2022-05-17 14:19:25.7141672 +0800 CST m=+4.025515701
2022/05/17 14:19:27 --------after-------
```

:::

* Reset

:::details

```go
func main() {
	// 5.重置定时器
	timer5 := time.NewTimer(3 * time.Second)
	timer5.Reset(10 * time.Second)
	fmt.Println(time.Now())
	fmt.Println(<-timer5.C)
}
```

输出

```shell
2022-05-17 14:20:40.9176901 +0800 CST m=+0.002613601
2022-05-17 14:20:50.928108 +0800 CST m=+10.013010401
```



:::



* Stop

:::details

```go
func main() {
	// 4.停止定时器
	timer4 := time.NewTimer(2 * time.Second)
	go func() {
		fmt.Println("定时器开始执行")
		<-timer4.C
		fmt.Println("定时器执行完毕")
	}()
	b := timer4.Stop()
	if b {
		fmt.Println("timer4已经关闭")
	}
}

```

输出

```shell
timer4已经关闭
```

:::



## Ticker

* 跟timer的用法差不多

:::details

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	// 1.获取ticker对象
	ticker := time.NewTicker(2 * time.Second)
	i := 0
	// 子协程
	go func() {
		for {
			//<-ticker.C
			i++
			fmt.Println(<-ticker.C)
			if i == 5 {
				//停止
				ticker.Stop()
			}
		}
	}()
	fmt.Println("main should exit, but sleep")
	time.Sleep(20 * time.Second)
}

```

输出

```shell
main should exit, but sleep
2022-05-17 14:21:43.6481633 +0800 CST m=+2.009463901
2022-05-17 14:21:45.6518969 +0800 CST m=+4.013193301
2022-05-17 14:21:47.6512444 +0800 CST m=+6.012536601
2022-05-17 14:21:49.6423737 +0800 CST m=+8.003661701
2022-05-17 14:21:51.656046 +0800 CST m=+10.017329801
```

:::





## 定时器的源码

:::tip

* 环境

```go
> go version
go version go1.17.7 windows/amd64
```

:::

### timer

:::details

* 部分其他包的函数

> -  runtimeNano  :  runtimeNano returns the current value of the runtime clock in nanoseconds.



```go
// Copyright 2009 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package time

// Sleep pauses the current goroutine for at least the duration d.
// A negative or zero duration causes Sleep to return immediately.
func Sleep(d Duration)

// Interface to timers implemented in package runtime.
// Must be in sync with ../runtime/time.go:/^type timer
type runtimeTimer struct {
	pp       uintptr
	when     int64
	period   int64
	f        func(interface{}, uintptr) // NOTE: must not be closure
	arg      interface{}
	seq      uintptr
	nextwhen int64
	status   uint32
}

// when is a helper function for setting the 'when' field of a runtimeTimer.
// It returns what the time will be, in nanoseconds, Duration d in the future.
// If d is negative, it is ignored. If the returned value would be less than
// zero because of an overflow, MaxInt64 is returned.
func when(d Duration) int64 {
	if d <= 0 {
		return runtimeNano()
	}
	t := runtimeNano() + int64(d)
	if t < 0 {
		// N.B. runtimeNano() and d are always positive, so addition
		// (including overflow) will never result in t == 0.
		t = 1<<63 - 1 // math.MaxInt64
	}
	return t
}

func startTimer(*runtimeTimer)
func stopTimer(*runtimeTimer) bool
func resetTimer(*runtimeTimer, int64) bool
func modTimer(t *runtimeTimer, when, period int64, f func(interface{}, uintptr), arg interface{}, seq uintptr)

// The Timer type represents a single event.
// When the Timer expires, the current time will be sent on C,
// unless the Timer was created by AfterFunc.
// A Timer must be created with NewTimer or AfterFunc.
type Timer struct {
	C <-chan Time
	r runtimeTimer
}

// Stop prevents the Timer from firing.
// It returns true if the call stops the timer, false if the timer has already expired or been stopped.
// Stop does not close the channel, to prevent a read from the channel succeeding incorrectly.
//
// To ensure the channel is empty after a call to Stop, check the
// return value and drain the channel.
// For example, assuming the program has not received from t.C already:
//
// 	if !t.Stop() {
// 		<-t.C
// 	}
//
// This cannot be done concurrent to other receives from the Timer's channel or other calls to the Timer's Stop method.
//
// For a timer created with AfterFunc(d, f), if t.Stop returns false, then the timer
// has already expired and the function f has been started in its own goroutine;
// Stop does not wait for f to complete before returning.
// If the caller needs to know whether f is completed, it must coordinate
// with f explicitly.
func (t *Timer) Stop() bool {
	if t.r.f == nil {
		panic("time: Stop called on uninitialized Timer")
	}
	return stopTimer(&t.r)
}

// NewTimer creates a new Timer that will send
// the current time on its channel after at least duration d.
func NewTimer(d Duration) *Timer {
	c := make(chan Time, 1)
	t := &Timer{
		C: c,
		r: runtimeTimer{
			when: when(d),
			f:    sendTime,
			arg:  c,
		},
	}
	startTimer(&t.r)
	return t
}

// Reset changes the timer to expire after duration d.
// It returns true if the timer had been active, false if the timer had
// expired or been stopped.
//
// For a Timer created with NewTimer, Reset should be invoked only on
// stopped or expired timers with drained channels.
//
// If a program has already received a value from t.C, the timer is known
// to have expired and the channel drained, so t.Reset can be used directly.
// If a program has not yet received a value from t.C, however,
// the timer must be stopped and—if Stop reports that the timer expired
// before being stopped—the channel explicitly drained:
//
// 	if !t.Stop() {
// 		<-t.C
// 	}
// 	t.Reset(d)
//
// This should not be done concurrent to other receives from the Timer's
// channel.
//
// Note that it is not possible to use Reset's return value correctly, as there
// is a race condition between draining the channel and the new timer expiring.
// Reset should always be invoked on stopped or expired channels, as described above.
// The return value exists to preserve compatibility with existing programs.
//
// For a Timer created with AfterFunc(d, f), Reset either reschedules
// when f will run, in which case Reset returns true, or schedules f
// to run again, in which case it returns false.
// When Reset returns false, Reset neither waits for the prior f to
// complete before returning nor does it guarantee that the subsequent
// goroutine running f does not run concurrently with the prior
// one. If the caller needs to know whether the prior execution of
// f is completed, it must coordinate with f explicitly.
func (t *Timer) Reset(d Duration) bool {
	if t.r.f == nil {
		panic("time: Reset called on uninitialized Timer")
	}
	w := when(d)
	return resetTimer(&t.r, w)
}

func sendTime(c interface{}, seq uintptr) {
	// Non-blocking send of time on c.
	// Used in NewTimer, it cannot block anyway (buffer).
	// Used in NewTicker, dropping sends on the floor is
	// the desired behavior when the reader gets behind,
	// because the sends are periodic.
	select {
	case c.(chan Time) <- Now():
	default:
	}
}

// After waits for the duration to elapse and then sends the current time
// on the returned channel.
// It is equivalent to NewTimer(d).C.
// The underlying Timer is not recovered by the garbage collector
// until the timer fires. If efficiency is a concern, use NewTimer
// instead and call Timer.Stop if the timer is no longer needed.
func After(d Duration) <-chan Time {
	return NewTimer(d).C
}

// AfterFunc waits for the duration to elapse and then calls f
// in its own goroutine. It returns a Timer that can
// be used to cancel the call using its Stop method.
func AfterFunc(d Duration, f func()) *Timer {
	t := &Timer{
		r: runtimeTimer{
			when: when(d),
			f:    goFunc,
			arg:  f,
		},
	}
	startTimer(&t.r)
	return t
}

func goFunc(arg interface{}, seq uintptr) {
	go arg.(func())()
}

```





:::





### ticker

:::details

```go
// Copyright 2009 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package time

import "errors"

// A Ticker holds a channel that delivers ``ticks'' of a clock
// at intervals.
type Ticker struct {
	C <-chan Time // The channel on which the ticks are delivered.
	r runtimeTimer
}

// NewTicker returns a new Ticker containing a channel that will send
// the time on the channel after each tick. The period of the ticks is
// specified by the duration argument. The ticker will adjust the time
// interval or drop ticks to make up for slow receivers.
// The duration d must be greater than zero; if not, NewTicker will
// panic. Stop the ticker to release associated resources.
func NewTicker(d Duration) *Ticker {
	if d <= 0 {
		panic(errors.New("non-positive interval for NewTicker"))
	}
	// Give the channel a 1-element time buffer.
	// If the client falls behind while reading, we drop ticks
	// on the floor until the client catches up.
	c := make(chan Time, 1)
	t := &Ticker{
		C: c,
		r: runtimeTimer{
			when:   when(d),
			period: int64(d),
			f:      sendTime,
			arg:    c,
		},
	}
	startTimer(&t.r)
	return t
}

// Stop turns off a ticker. After Stop, no more ticks will be sent.
// Stop does not close the channel, to prevent a concurrent goroutine
// reading from the channel from seeing an erroneous "tick".
func (t *Ticker) Stop() {
	stopTimer(&t.r)
}

// Reset stops a ticker and resets its period to the specified duration.
// The next tick will arrive after the new period elapses.
func (t *Ticker) Reset(d Duration) {
	if t.r.f == nil {
		panic("time: Reset called on uninitialized Ticker")
	}
	modTimer(&t.r, when(d), int64(d), t.r.f, t.r.arg, t.r.seq)
}

// Tick is a convenience wrapper for NewTicker providing access to the ticking
// channel only. While Tick is useful for clients that have no need to shut down
// the Ticker, be aware that without a way to shut it down the underlying
// Ticker cannot be recovered by the garbage collector; it "leaks".
// Unlike NewTicker, Tick will return nil if d <= 0.
func Tick(d Duration) <-chan Time {
	if d <= 0 {
		return nil
	}
	return NewTicker(d).C
}

```



:::



