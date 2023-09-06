# `Java` 并发基础之`ReentrantReadLock`

`ReentrantReadLock` 属于一种手动获取释放的可重入锁，也就是操作系统中用到的读锁，是`Lock` 的一种实现类。



`Lock` 接口的定义如下：

```java
public interface Lock {
    void lock();
    void lockInterruptibly() throws InterruptedException;
    boolean tryLock();
    boolean tryLock(long time, TimeUnit unit) throws InterruptedException;
    void unlock();
    Condition newCondition();
}
```

* `lock/unlock`普通的获取锁和释放锁方法，会阻塞直到成功.
* `tryLock`尝试获取锁，立即返回，不阻塞，如果获取成功，返回`true`，否则返回`false`。
* `tryLock(long time, TimeUnit unit)` 
  * 尝试获取锁，如果能成功则立即返回`true`，否则阻塞等待
  * 但等待的最长时间由指定的参数设置，在等待的同时响应中断，如果发生了中断，抛出 `InterruptedException`
  * 如果在等待的时间内获得了锁，返回 `true`，否则返回`false`。



---

`Lock`接口的主要实现类是`ReentrantLock`，它的基本用法`lock/unlock`实现了与`synchronized`一样的语义，包括：

> 1. 可重入，一个线程在持有一个锁的前提下，可以继续获得该锁；
> 2. 可以解决竞态条件问题；
> 3. 可以保证内存可见性。

`ReentrantLock`有两个构造方法：

```java
public ReentrantLock()
public ReentrantLock(boolean fair) // 参数fair表示是否保证公平，不指定的情况下，默认为false，表示不保证公平
```

> 所谓公平是指，等待时间最长的线程优先获得锁。保证公平会影响性能，一般也不需要，所以默认不保证，`synchronized`锁也是不保证公平的。

使用显式锁，一定要记得调用`unlock`。一般而言，应该将lock之后的代码包装到`try`语句内，在`finally`语句内释放锁。





## `reentrantLock` 与 `synchrozined` 的区别

相比`synchronized`, `ReentrantLock`可以实现与`synchronized`相同的语义，而且支持以非阻塞方式获取锁，可以响应中断，可以限时，更为灵活。不过，`synchronized`的使用更为简单，写的代码更少，也更不容易出错。



`synchronized` 代表一种声明式编程思维，程序员更多的是表达一种同步声明，由`Java`系统负责具体实现，程序员不知道其实现细节；显式锁代表一种命令式编程思维，程序员实现所有细节。

声明式编程的好处除了简单，还在于性能，在较新版本的`JVM`上，`ReentrantLock`和`synchronized`的性能是接近的，但`Java`编译器和虚拟机可以不断优化`synchronized`的实现，比如自动分析`synchronized`的使用，对于没有锁竞争的场景，自动省略对锁获取/释放的调用。

___



简单总结下，能用`synchronized`就用`synchronized`，不满足要求时再考虑`Reentrant-Lock`。
