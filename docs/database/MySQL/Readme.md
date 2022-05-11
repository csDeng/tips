---

sidebar: false



---



# MYSQL

:::tip

本章的内容，绝大部分都是源于以下链接，拷贝下来只是为了添加一点点自己的小想法

[图解MySQL介绍 | 小林coding (xiaolincoding.com)](https://xiaolincoding.com/mysql/)

[Overview of MySQL Database Service (oracle.com)](https://docs.oracle.com/en-us/iaas/mysql-database/doc/overview-mysql-database-service.html)

[MySQL :: MySQL Internals Manual :: Preface and Legal Notice](https://dev.mysql.com/doc/internals/en/preface.html)

:::



## 索引篇

1. [从数据页的角度来看B+树](./index/data_btree.md)
1. [为什么MYSQL使用B+树作为索引](./index/why_btree.md)
1. [索引失效有哪些](./index/index_no_work.md)
1. [MySQL 使用 like “%x“，索引一定会失效吗？](./index/index_issure.md)
1. [count(*) 和 count(1) 有什么区别？哪个性能最好](./index/count.md)
1. 



## 事务篇

1. [事务的隔离级别是怎么实现的](./transaction/how.md)
2. [幻读是怎么被解决的](./transaction/how_to_solve_illusory_read.md)
3. 



## 锁篇

1. [MySQL的有哪些锁](./lock/has_some_lock.md)
2. 





# 调优篇

1. [分库分表](./optimize/division.md)





## 底层篇

1. [count是怎么运行的](./basic/count_how_work.md)
2. [MySQL的执行顺序](./basic/process.md)
3. 



