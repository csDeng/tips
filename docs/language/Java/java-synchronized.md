---
title: Java 的线程安全机制之`synchronized`
date: 2023-08-31 21:55:20
tags:
- 并发
categories:
- Java
---

# Java 的线程安全机制之`synchronized`

首先，线程表示一条单独的执行流，每个线程有自己的执行计数器，有自己的栈，但可以共享内存，共享内存是实现线程协作的基础，但共享内存有两个问题，竞态条件和内存可见性。解决这些问题可能需要的知识储备：`synchronized`、显式锁、`volatile`、原子变量和`CAS`、写时复制、`ThreadLocal`等。

本篇主要介绍`synchronized`。

## 什么是 `synchronized`

`synchronized` 是 Java 中用于实现线程同步的关键字。它可以应用于方法或代码块，并确保在同一时间只有一个线程可以访问被 `synchronized` 修饰的代码区域。通过在关键代码段中使用 `synchronized`，可以有效地保护共享资源，避免多个线程同时访问导致的数据不一致或竞态条件。

## 为什么使用 `synchronized`

在多线程环境中，共享数据的并发访问可能导致数据的不一致性和线程安全问题。`synchronized` 提供了互斥访问的机制，确保同一时间只有一个线程可以访问共享资源。通过使用 `synchronized`，可以保证线程安全性，避免竞态条件和数据冲突，提高程序的可靠性和稳定性。

## 怎么用？

`Synchronized` 可以通过两种方式使用：修饰方法和修饰代码块。

### 方法级别

方法级别的 `synchronized`：可以使用 `synchronized` 修饰整个方法，将方法声明为 `synchronized`，这样在调用该方法时，会自动获取对象级别的锁（即当前对象实例的锁）。这样可以确保同一时间只有一个线程可以执行该方法，保证方法的原子性和线程安全性。

* 实例方法

```Java
public class SynchronizedExample {
    public synchronized void synchronizedMethod() {
        // 同步的方法代码块
    }
}
```

* 静态方法

```java
public class SynTest {

    public static void main(String[] args) throws InterruptedException {
        for (int i = 0; i < 10; i++) {
            Thread thread = new Thread(() -> {
                try {
                    hello();
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            });
            thread.start();
        }

        Thread.sleep(10000L);
        System.out.println("main exit");
    }

    private synchronized static void hello() throws InterruptedException {
        long id = Thread.currentThread().getId();
        System.out.println("threadId = "+id);
        Thread.sleep(1000L);
        System.out.println("threadId = "+id+"end");
    }

}

```



### 代码块级别

代码块级别的 `synchronized`：可以使用 `synchronized` 修饰代码块，通过指定锁对象来实现同步。**锁对象可以是任意对象，但最好选择共享资源所属的对象作为锁对象，以避免不必要的锁竞争。**通过在代码块前加上 `synchronized` 关键字，并指定锁对象，可以确保同一时间只有一个线程可以执行该代码块。

* 锁实例方法

```java
public class SynchronizedExample {
    private final Object lock = new Object();

    public void synchronizedBlock() {
        synchronized (lock) {
            // 同步的代码块
        }
    }
}
```

* 锁静态方法

```java
public class SynTest {

    public static void main(String[] args) throws InterruptedException {
        for (int i = 0; i < 10; i++) {
            Thread thread = new Thread(() -> {
                try {
                    hello1();
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            });
            thread.start();
        }

        Thread.sleep(10000L);
        System.out.println("main exit");
    }

    private static void hello1() throws InterruptedException {
        synchronized (Lock.class) {
            long id = Thread.currentThread().getId();
            System.out.println("threadId = "+id);
            Thread.sleep(1000L);
            System.out.println("threadId = "+id+"end");
        }

    }
    class Lock{}
}
```





## 总结

使用 `synchronized` 时需要注意以下几点：

- 选择合适的锁对象：应该选择共享资源所属的对象作为锁对象，避免不必要的锁竞争。
- 尽量缩小同步范围：只在必要的代码区域使用 `synchronized`，以减少同步开销，提高并发性能。
- 避免死锁：确保线程在获取锁的过程中不会出现循环等待的情况，以避免死锁的发生。
- 性能问题：`synchronized` 的过度使用可能导致性能问题，应根据具体场景和需求进行权衡和优化。
