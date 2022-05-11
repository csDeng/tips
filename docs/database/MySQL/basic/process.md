# MySQL的执行顺序

:::tip

本文内容源于：

* [SQL 的 select 语句完整的执行顺序 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/377795994)

* [MySQL :: MySQL Internals Manual :: 12.1 Steps of Select Execution](https://dev.mysql.com/doc/internals/en/select-steps.html)

:::





## select

:::details `dev.mysql`给的解答

Every select is performed in these base steps:

- `JOIN::prepare`

  - Initialization and linking `JOIN` structure to `st_select_lex`.
  - `fix_fields()` for all items (after `fix_fields()`, we know everything about item).
  - Moving `HAVING` to `WHERE` if possible.
  - Initialization procedure if there is one.

  

- `JOIN::optimize`

  - Single select optimization.
  - Creation of first temporary table if needed.

  

- `JOIN::exec`

  - Performing select (a second temporary table may be created).

  

- `JOIN::cleanup`

  - Removing all temporary tables, other cleanup.

  

- `JOIN::reinit`

  - Prepare all structures for execution of `SELECT` (with `JOIN::exec`).

:::



### 民间解答

一个完整的SELECT语句包含可选的几个子句。SELECT语句的定义如下： 
```mysql
<SELECT clause> [<FROM clause>] [<WHERE clause>] [<GROUP BY clause>] [<HAVING clause>] [<ORDER BY clause>] [<LIMIT clause>] 

```

* `SELECT`语句是必选的，其它子句如`WHERE`子句、`GROUP BY`子句等是可选的。 
* 一个`SELECT`语句中，子句的顺序是固定的。例如`GROUP BY`子句不会位于WHERE子句的前面。 

**SQL Select 语句完整的执行顺序：**

```sql

1、from 子句组装来自不同数据源的数据；

2、where 子句基于指定的条件对记录行进行筛选；

3、group by 子句将数据划分为多个分组；

4、使用聚集函数进行计算；

5、使用 having 子句筛选分组；

6、计算所有的表达式；

7、select 的字段；

8、使用 order by 对结果集进行排序。

```

SQL 语言不同于其他编程语言的最明显特征是处理代码的顺序。在大多数据库语言中，代码按编码顺序被处理。

但在 SQL 语句中，第一个被处理的子句式 FROM，而不是第一出现的 SELECT。SQL 查询处理的步骤序号：
```sql
(1) FROM <left_table>

(2) <join_type> JOIN <right_table>

(3) ON <join_condition>

(4) WHERE <where_condition>

(5) GROUP BY <group_by_list>

(6) WITH {CUBE | ROLLUP}

(7) HAVING <having_condition>

(8) SELECT

(9) DISTINCT

(9) ORDER BY <order_by_list>

(10) <TOP_specification> <select_list>

```

以上每个步骤都会产生一个虚拟表，该虚拟表被用作下一个步骤的输入。这些虚拟表对调用者(客户端应用程序或者外部查询)不可用。只有最后一步生成的表才会会给调用者。如果没有在查询中指定某一个子句， 将跳过相应的步骤。

逻辑查询处理阶段简介：

```sql

1、 FROM：对 FROM 子句中的前两个表执行笛卡尔积(交叉联接)，生成虚拟表 VT1。

2、 ON：对 VT1 应用 ON 筛选器，只有那些使为真才被插入到 VT2。

3、 OUTER (JOIN):如果指定了 OUTER JOIN(相对于 CROSS JOIN 或 INNER JOIN)，保留表中未找到匹配

的行将作为外部行添加到 VT2，生成 VT3。如果 FROM 子句包含两个以上的表，则对上一个联接生成的结果表

和下一个表重复执行步骤 1 到步骤 3，直到处理完所有的表位置。

4、 WHERE：对 VT3 应用 WHERE 筛选器，只有使为 true 的行才插入 VT4。

5、 GROUP BY：按 GROUP BY 子句中的列列表对 VT4 中的行进行分组，生成 VT5。

6、 CUTE|ROLLUP：把超组插入 VT5，生成 VT6。

7、 HAVING：对 VT6 应用 HAVING 筛选器，只有使为 true 的组插入到 VT7。

8、 SELECT：处理 SELECT 列表，产生 VT8。

9、 DISTINCT：将重复的行从 VT8 中删除，产品 VT9。

10、 ORDER BY：将 VT9 中的行按 ORDER BY 子句中的列列表顺序，生成一个游标(VC10)。

11、 TOP：从 VC10 的开始处选择指定数量或比例的行，生成表 TV11，并返回给调用者。

```











