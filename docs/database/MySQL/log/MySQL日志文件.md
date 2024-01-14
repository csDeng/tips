> > - 官网 [https://dev.mysql.com/doc/refman/8.0/en/server-logs.html](https://dev.mysql.com/doc/refman/8.0/en/server-logs.html)
> - 中文版 [https://mysql.net.cn/doc/refman/8.0/en/server-logs.html](https://mysql.net.cn/doc/refman/8.0/en/server-logs.html)
> - 读英文版辅以中文版，因为有些中文翻译真的让人难以理解～～

> mysql 无法远程登录。
> 修改 `mysql.user`表的 `host`并刷新权限

```sql
use mysql;
update user set host = '%' where user = 'root' limit 1;
FLUSH PRIVILEGES;
```
> 设置 `mysql`时区，`set global time_zone = 'Asia/Shanghai';`
> 需要注意的是 `binlog`使用的时区是服务器时区，服务器时区修改方法如下：
> 设置timezone的时区
> `echo "Asia/Shanghai" > /etc/timezone`
> 设置时间
> `rm -rf /etc/localtime`
> `ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime`

- 参考
相关链接
- [https://www.cnblogs.com/hongdada/p/10983768.html](https://www.cnblogs.com/hongdada/p/10983768.html)
# binlog
## 是什么
### 简介
> The binary log contains “events” that describe database changes such as table creation operations or changes to table data. It also contains events for statements that potentially could have made changes (for example, a [DELETE](https://dev.mysql.com/doc/refman/8.0/en/delete.html) which matched no rows), unless row-based logging is used. The binary log also contains information about how long each statement took that updated data. The binary log has two important purposes:
> - For replication, the binary log on a replication source server provides a record of the data changes to be sent to replicas. The source sends the information contained in its binary log to its replicas, which reproduce those transactions to make the same data changes that were made on the source. See [Section 17.2, “Replication Implementation”](https://dev.mysql.com/doc/refman/8.0/en/replication-implementation.html).
> - Certain data recovery operations require use of the binary log. After a backup has been restored, the events in the binary log that were recorded after the backup was made are re-executed. These events bring databases up to date from the point of the backup. See [Section 7.5, “Point-in-Time (Incremental) Recovery”](https://dev.mysql.com/doc/refman/8.0/en/point-in-time-recovery.html).
> 
The binary log is not used for statements such as [SELECT](https://dev.mysql.com/doc/refman/8.0/en/select.html) or [SHOW](https://dev.mysql.com/doc/refman/8.0/en/show.html) that do not modify data. To log all statements (for example, to identify a problem query), use the general query log. See [Section 5.4.3, “The General Query Log”](https://dev.mysql.com/doc/refman/8.0/en/query-log.html).


二进制文件，通常用于备份与恢复。
> The binary log is resilient to unexpected halts. Only complete events or transactions are logged or read back.

### 产生方式
> [mysqld](https://dev.mysql.com/doc/refman/8.0/en/mysqld.html) appends a numeric extension to the binary log base name to generate binary log file names. The number increases each time the server creates a new log file, thus creating an ordered series of files. The server creates a new file in the series each time any of the following events occurs:
> - The server is started or restarted
> - The server flushes the logs.
> - The size of the current log file reaches [max_binlog_size](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_max_binlog_size).
> 
A binary log file may become larger than [max_binlog_size](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_max_binlog_size) if you are using large transactions because a transaction is written to the file in one piece, never split between files.


`binlog`文件生成的时机：

- 服务器已启动或重新启动
- 服务器刷新日志。
- 当前日志文件的大小达到 [max_binlog_size](https://mysql.net.cn/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_max_binlog_size).（当然文件也可能比文件限制大，比如说一个大事务的数据插入，因为事务数据不允许分离）
> To keep track of which binary log files have been used, [mysqld](https://dev.mysql.com/doc/refman/8.0/en/mysqld.html) also creates a binary log index file that contains the names of the binary log files. By default, this has the same base name as the binary log file, with the extension '.index'. You can change the name of the binary log index file with the [--log-bin-index[=file_name]](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#option_mysqld_log-bin-index) option. You should not manually edit this file while [mysqld](https://dev.mysql.com/doc/refman/8.0/en/mysqld.html) is running; doing so would confuse [mysqld](https://dev.mysql.com/doc/refman/8.0/en/mysqld.html).

日志索引文件，不建议在 `mysql`运行时修改，这样会导致异常。

> By default, the server logs the length of the event as well as the event itself and uses this to verify that the event was written correctly. You can also cause the server to write checksums for the events by setting the [binlog_checksum](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_checksum) system variable. When reading back from the binary log, the source uses the event length by default, but can be made to use checksums if available by enabling the system variable [source_verify_checksum](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_source_verify_checksum) (from MySQL 8.0.26) or [master_verify_checksum](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_master_verify_checksum) (before MySQL 8.0.26). The replication I/O (receiver) thread on the replica also verifies events received from the source. You can cause the replication SQL (applier) thread to use checksums if available when reading from the relay log by enabling the system variable [replica_sql_verify_checksum](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_replica_sql_verify_checksum) (from MySQL 8.0.26) or [slave_sql_verify_checksum](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_slave_sql_verify_checksum) (before MySQL 8.0.26).


可以开启校验和校验文件完整性。
> The format of the events recorded in the binary log is dependent on the binary logging format. Three format types are supported: row-based logging, statement-based logging and mixed-base logging. The binary logging format used depends on the MySQL version. For general descriptions of the logging formats, see [Section 5.4.4.1, “Binary Logging Formats”](https://dev.mysql.com/doc/refman/8.0/en/binary-log-formats.html). For detailed information about the format of the binary log, see [MySQL Internals: The Binary Log](https://dev.mysql.com/doc/internals/en/binary-log.html).


### 文件格式
> The server uses several logging formats to record information in the binary log:
> - Replication capabilities in MySQL originally were based on propagation of SQL statements from source to replica. This is called statement-based logging. You can cause this format to be used by starting the server with `--binlog-format=STATEMENT`.
> - In row-based logging (the default), the source writes events to the binary log that indicate how individual table rows are affected. You can cause the server to use row-based logging by starting it with `--binlog-format=ROW`.
> - A third option is also available: mixed logging. With mixed logging, statement-based logging is used by default, but the logging mode switches automatically to row-based in certain cases as described below. You can cause MySQL to use mixed logging explicitly by starting mysqld with the option `--binlog-format=MIXED`.


文件格式主要有三种，基于语句、基于数据行、混合模式

- `STATEMENT` 导致日志记录是基于语句的。
- `ROW` 导致日志记录基于行。这是默认值。
- `MIXED` 导致日志记录使用混合格式。

> The logging format can also be set or limited by the storage engine being used. This helps to eliminate issues when replicating certain statements between a source and replica which are using different storage engines.
> With statement-based replication, there may be issues with replicating nondeterministic statements. In deciding whether or not a given statement is safe for statement-based replication, MySQL determines whether it can guarantee that the statement can be replicated using statement-based logging. If MySQL cannot make this guarantee, it marks the statement as potentially unreliable and issues the warning, Statement may not be safe to log in statement format.
> You can avoid these issues by using MySQL's row-based replication instead.


日志记录格式也可以由正在使用的存储引擎设置或限制。这有助于消除在使用不同存储引擎的源和副本之间复制某些语句时出现的问题。
对于基于语句的复制，复制非确定性语句可能会出现问题。在决定给定语句对于基于语句的复制是否安全时，MySQL 确定它是否可以保证可以使用基于语句的日志记录来复制该语句。如果 MySQL 不能做出这种保证，它会将语句标记为潜在不可靠并发出警告。您可以改用 MySQL 的基于行的复制来避免这些问题。

##### `statement`

##### `row`
> With the binary log format set to ROW, many changes are written to the binary log using the row-based format. Some changes, however, still use the statement-based format. Examples include all DDL (data definition language) statements such as [CREATE TABLE](https://dev.mysql.com/doc/refman/8.0/en/create-table.html), [ALTER TABLE](https://dev.mysql.com/doc/refman/8.0/en/alter-table.html), or [DROP TABLE](https://dev.mysql.com/doc/refman/8.0/en/drop-table.html).
> When row-based binary logging is used, the [binlog_row_event_max_size](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_row_event_max_size) system variable and its corresponding startup option [--binlog-row-event-max-size](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#option_mysqld_binlog-row-event-max-size) set a soft limit on the maximum size of row events. The default value is 8192 bytes, and the value can only be changed at server startup. Where possible, rows stored in the binary log are grouped into events with a size not exceeding the value of this setting. If an event cannot be split, the maximum size can be exceeded.


将二进制日志格式设置为ROW，许多更改将使用基于行的格式写入二进制日志。但是，一些更改仍然使用基于语句的格式。示例包括所有 DDL（数据定义语言）语句，例如 `CREATE TABLE、 ALTER TABLE或 DROP TABLE`。
使用基于行的二进制日志记录时， `binlog_row_event_max_size ` 系统变量及其相应的启动选项 `--binlog-row-event-max-size` 对行事件的最大大小设置软限制。默认值为 `8192 ` 字节，该值只能在服务器启动时更改。在可能的情况下，存储在二进制日志中的行被分组为大小不超过此设置值的事件。如果无法拆分事件，则可能会超过最大大小。


##### `mixed`


## 怎么办
> You can display the contents of binary log files with the [mysqlbinlog](https://dev.mysql.com/doc/refman/8.0/en/mysqlbinlog.html) utility. This can be useful when you want to reprocess statements in the log for a recovery operation. For example, you can update a MySQL server from the binary log as follows:

```shell
mysqlbinlog log_file | mysql -h server_name
```
> [mysqlbinlog](https://dev.mysql.com/doc/refman/8.0/en/mysqlbinlog.html) also can be used to display the contents of the relay log file on a replica, because they are written using the same format as binary log files. For more information on the [mysqlbinlog](https://dev.mysql.com/doc/refman/8.0/en/mysqlbinlog.html) utility and how to use it, see [Section 4.6.9, “mysqlbinlog — Utility for Processing Binary Log Files”](https://dev.mysql.com/doc/refman/8.0/en/mysqlbinlog.html). For more information about the binary log and recovery operations, see [Section 7.5, “Point-in-Time (Incremental) Recovery”](https://dev.mysql.com/doc/refman/8.0/en/point-in-time-recovery.html).


可以使用 `mysqlbinlog`程序查询二进制文件内容。
> Binary logging is done immediately after a statement or transaction completes but before any locks are released or any commit is done. This ensures that the log is logged in commit order.
> Within an uncommitted transaction, all updates ([UPDATE](https://dev.mysql.com/doc/refman/8.0/en/update.html), [DELETE](https://dev.mysql.com/doc/refman/8.0/en/delete.html), or [INSERT](https://dev.mysql.com/doc/refman/8.0/en/insert.html)) that change transactional tables such as InnoDB tables are cached until a [COMMIT](https://dev.mysql.com/doc/refman/8.0/en/commit.html) statement is received by the server. At that point, [mysqld](https://dev.mysql.com/doc/refman/8.0/en/mysqld.html) writes the entire transaction to the binary log before the COMMIT is executed.
> Modifications to nontransactional tables cannot be rolled back. If a transaction that is rolled back includes modifications to nontransactional tables, the entire transaction is logged with a [ROLLBACK](https://dev.mysql.com/doc/refman/8.0/en/commit.html) statement at the end to ensure that the modifications to those tables are replicated.


二进制日志记录在语句或事务完成后但在释放任何锁或完成任何提交之前立即完成。这确保日志以提交顺序记录。
对非事务性表的更新在执行后立即存储在二进制日志中。
在未提交的事务中，所有更改事务表（例如表）的 更新（[UPDATE](https://mysql.net.cn/doc/refman/8.0/en/update.html)、 [DELETE](https://mysql.net.cn/doc/refman/8.0/en/delete.html)或 ）都会被缓存，直到 服务器收到一条语句。此时，[mysqld](https://mysql.net.cn/doc/refman/8.0/en/mysqld.html)在执行之前将整个事务写入二进制日志 。 [INSERT](https://mysql.net.cn/doc/refman/8.0/en/insert.html)InnoDB[COMMIT](https://mysql.net.cn/doc/refman/8.0/en/commit.html)[COMMIT](https://mysql.net.cn/doc/refman/8.0/en/commit.html)
不能回滚对非事务性表的修改。如果回滚的事务包括对非事务表的修改，则整个事务会 [ROLLBACK](https://mysql.net.cn/doc/refman/8.0/en/commit.html) 在末尾记录一条语句，以确保复制对这些表的修改。
> When a thread that handles the transaction starts, it allocates a buffer of binlog_cache_size to buffer statements. If a statement is bigger than this, the thread opens a temporary file to store the transaction. The temporary file is deleted when the thread ends. From MySQL 8.0.17, if binary log encryption is active on the server, the temporary file is encrypted.


处理 `sql`语句时，语句会被放到一个 缓冲区，如果语句大小大于 `binlog_cache_size`时，语句会被存储到一个临时文件，处理完之后，临时文件被删除。

### 开启 `binlog`

- 查看 `binlog`开启状态。`log_bin`为 `off`说明处于关闭状态。
```shell
mysql> show variables like 'log%';
+----------------------------------------+--------+
| Variable_name                          | Value  |
+----------------------------------------+--------+
| log_bin                                | OFF    |
| log_bin_basename                       |        |
| log_bin_index                          |        |
| log_bin_trust_function_creators        | OFF    |
| log_bin_use_v1_row_events              | OFF    |
| log_builtin_as_identified_by_password  | OFF    |
| log_error                              | stderr |
| log_error_verbosity                    | 3      |
| log_output                             | FILE   |
| log_queries_not_using_indexes          | OFF    |
| log_slave_updates                      | OFF    |
| log_slow_admin_statements              | OFF    |
| log_slow_slave_statements              | OFF    |
| log_statements_unsafe_for_binlog       | ON     |
| log_syslog                             | OFF    |
| log_syslog_facility                    | daemon |
| log_syslog_include_pid                 | ON     |
| log_syslog_tag                         |        |
| log_throttle_queries_not_using_indexes | 0      |
| log_timestamps                         | UTC    |
| log_warnings                           | 2      |
+----------------------------------------+--------+
```

- 开启 `binog`

修改mysql的my.cnf配置文件， 一般默认是在/etc/my.cnf路径下。
```shell
server_id=1
log_bin = mysql-bin
binlog_format = ROW
expire_logs_days = 30
```

- 再次查看 `mysql` `log` 状态。如下，说明  `binlog`已开启，且存储位置是 `/var/lib/mysql/`
```shell
mysql> show variables like 'log%';
+----------------------------------------+--------------------------------+
| Variable_name                          | Value                          |
+----------------------------------------+--------------------------------+
| log_bin                                | ON                             |
| log_bin_basename                       | /var/lib/mysql/mysql-bin       |
| log_bin_index                          | /var/lib/mysql/mysql-bin.index |
| log_bin_trust_function_creators        | OFF                            |
| log_bin_use_v1_row_events              | OFF                            |
| log_builtin_as_identified_by_password  | OFF                            |
| log_error                              | stderr                         |
| log_error_verbosity                    | 3                              |
| log_output                             | FILE                           |
| log_queries_not_using_indexes          | OFF                            |
| log_slave_updates                      | OFF                            |
| log_slow_admin_statements              | OFF                            |
| log_slow_slave_statements              | OFF                            |
| log_statements_unsafe_for_binlog       | ON                             |
| log_syslog                             | OFF                            |
| log_syslog_facility                    | daemon                         |
| log_syslog_include_pid                 | ON                             |
| log_syslog_tag                         |                                |
| log_throttle_queries_not_using_indexes | 0                              |
| log_timestamps                         | UTC                            |
| log_warnings                           | 2                              |
+----------------------------------------+--------------------------------+
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1703394795140-bf1a4869-f988-4232-8581-71e16e27df99.png#averageHue=%23090909&clientId=ucac032cc-6391-4&from=paste&height=153&id=u8f56ad22&originHeight=306&originWidth=1554&originalType=binary&ratio=2&rotation=0&showTitle=false&size=89879&status=done&style=none&taskId=u8358951f-ed00-42d5-bebf-8712f821865&title=&width=777)
### 查看 `binlog`
> binlog 直接查询会乱码，因为存储的是二进制文件。需要使用工具查看，比如 `mysqlbinlog`


```shell
root@4f5d2fa3a08e:/var/lib/mysql# mysqlbinlog mysql-bin.000001
/*!50530 SET @@SESSION.PSEUDO_SLAVE_MODE=1*/;
/*!50003 SET @OLD_COMPLETION_TYPE=@@COMPLETION_TYPE,COMPLETION_TYPE=0*/;
DELIMITER /*!*/;
# at 4
#231224  5:02:10 server id 1  end_log_pos 123 CRC32 0x9d466f78 	Start: binlog v 4, server v 5.7.26-1-log created 231224  5:02:10 at startup
ROLLBACK/*!*/;
BINLOG '
UruHZQ8BAAAAdwAAAHsAAAAAAAQANS43LjI2LTEtbG9nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAABSu4dlEzgNAAgAEgAEBAQEEgAAXwAEGggAAAAICAgCAAAACgoKKioAEjQA
AXhvRp0=
'/*!*/;
# at 123
#231224  5:02:10 server id 1  end_log_pos 154 CRC32 0xd2dd1c56 	Previous-GTIDs
# [empty]
# at 154
#231224  5:03:16 server id 1  end_log_pos 177 CRC32 0xdbfa606c 	Stop
SET @@SESSION.GTID_NEXT= 'AUTOMATIC' /* added by mysqlbinlog */ /*!*/;
DELIMITER ;
# End of log file
/*!50003 SET COMPLETION_TYPE=@OLD_COMPLETION_TYPE*/;
/*!50530 SET @@SESSION.PSEUDO_SLAVE_MODE=0*/;
```
> row 模式下面的 binlog

![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1703399706759-ae211a65-0b5f-40e4-8e71-0f7e7b776867.png#averageHue=%235d5d5d&clientId=ucac032cc-6391-4&from=paste&height=451&id=u6f3fcb6e&originHeight=902&originWidth=2482&originalType=binary&ratio=2&rotation=0&showTitle=false&size=325332&status=done&style=none&taskId=ue866d89a-2b0e-4154-be1d-bb903db82d6&title=&width=1241)
### 其他查看相关命令

- `show binary logs;`查看 binlog 文件列表
```shell
mysql> show binary logs;
+------------------+-----------+
| Log_name         | File_size |
+------------------+-----------+
| mysql-bin.000001 |      1421 |
+------------------+-----------+
1 row in set (0.01 sec)
```

- `show master status;`查看日志状态
```shell
mysql> show master status;
+------------------+----------+--------------+------------------+-------------------+
| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
+------------------+----------+--------------+------------------+-------------------+
| mysql-bin.000001 |     1421 |              |                  |                   |
+------------------+----------+--------------+------------------+-------------------+
1 row in set (0.00 sec)
```

- `flush logs;` 刷新日志

自此刻开始产生一个新编号的binlog日志文件
每当mysqld服务重启时，会自动执行此命令，刷新binlog日志；在mysqldump备份数据时加 -F 选项也会刷新binlog日志；
```shell
mysql> show master status;
+------------------+----------+--------------+------------------+-------------------+
| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
+------------------+----------+--------------+------------------+-------------------+
| mysql-bin.000001 |     1421 |              |                  |                   |
+------------------+----------+--------------+------------------+-------------------+
1 row in set (0.00 sec)

mysql> flush logs;
Query OK, 0 rows affected (0.02 sec)

mysql> show binary logs;
+------------------+-----------+
| Log_name         | File_size |
+------------------+-----------+
| mysql-bin.000001 |      1468 |
| mysql-bin.000002 |       154 |
+------------------+-----------+
2 rows in set (0.01 sec)

mysql> show master status;
+------------------+----------+--------------+------------------+-------------------+
| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
+------------------+----------+--------------+------------------+-------------------+
| mysql-bin.000002 |      154 |              |                  |                   |
+------------------+----------+--------------+------------------+-------------------+
1 row in set (0.01 sec)
```

- `reset master;`重置所有 `binlog`

- `show binlog events;`查看 binlog 事件
```shell
A.查询第一个(最早)的binlog日志：
  mysql> show binlog events; 

B.指定查询 mysql-bin.000021 这个文件：
  mysql> show binlog events in 'mysql-bin.000021';

C.指定查询 mysql-bin.000021 这个文件，从pos点:8224开始查起：
  mysql> show binlog events in 'mysql-bin.000021' from 8224;

D.指定查询 mysql-bin.000021 这个文件，从pos点:8224开始查起，查询10条
  mysql> show binlog events in 'mysql-bin.000021' from 8224 limit 10;

E.指定查询 mysql-bin.000021 这个文件，从pos点:8224开始查起，偏移2行，查询10条
  mysql> show binlog events in 'mysql-bin.000021' from 8224 limit 2,10;
```
文件内容示🍐
```shell
mysql> show binlog events in 'mysql-bin.000001';
+------------------+------+----------------+-----------+-------------+----------------------------------------------------------------------------------------------+
| Log_name         | Pos  | Event_type     | Server_id | End_log_pos | Info                                                                                         |
+------------------+------+----------------+-----------+-------------+----------------------------------------------------------------------------------------------+
| mysql-bin.000001 |    4 | Format_desc    |         1 |         123 | Server ver: 5.7.26-1-log, Binlog ver: 4                                                      |
| mysql-bin.000001 |  123 | Previous_gtids |         1 |         154 |                                                                                              |
| mysql-bin.000001 |  154 | Anonymous_Gtid |         1 |         219 | SET @@SESSION.GTID_NEXT= 'ANONYMOUS'                                                         |
| mysql-bin.000001 |  219 | Query          |         1 |         291 | BEGIN                                                                                        |
| mysql-bin.000001 |  291 | Table_map      |         1 |         344 | table_id: 118 (test.user)                                                                    |
| mysql-bin.000001 |  344 | Write_rows     |         1 |         409 | table_id: 118 flags: STMT_END_F                                                              |
| mysql-bin.000001 |  409 | Xid            |         1 |         440 | COMMIT /* xid=1316 */                                                                        |
| mysql-bin.000001 |  440 | Anonymous_Gtid |         1 |         505 | SET @@SESSION.GTID_NEXT= 'ANONYMOUS'                                                         |
| mysql-bin.000001 |  505 | Query          |         1 |         577 | BEGIN                                                                                        |
| mysql-bin.000001 |  577 | Table_map      |         1 |         630 | table_id: 118 (test.user)                                                                    |
| mysql-bin.000001 |  630 | Delete_rows    |         1 |         680 | table_id: 118 flags: STMT_END_F                                                              |
| mysql-bin.000001 |  680 | Xid            |         1 |         711 | COMMIT /* xid=1674 */                                                                        |
| mysql-bin.000001 |  711 | Anonymous_Gtid |         1 |         776 | SET @@SESSION.GTID_NEXT= 'ANONYMOUS'                                                         |
| mysql-bin.000001 |  776 | Query          |         1 |         848 | BEGIN                                                                                        |
| mysql-bin.000001 |  848 | Table_map      |         1 |         901 | table_id: 118 (test.user)                                                                    |
| mysql-bin.000001 |  901 | Write_rows     |         1 |         955 | table_id: 118 flags: STMT_END_F                                                              |
| mysql-bin.000001 |  955 | Xid            |         1 |         986 | COMMIT /* xid=1804 */                                                                        |
| mysql-bin.000001 |  986 | Anonymous_Gtid |         1 |        1051 | SET @@SESSION.GTID_NEXT= 'ANONYMOUS'                                                         |
| mysql-bin.000001 | 1051 | Query          |         1 |        1202 | use `test`; create table a (
id int unsigned primary key auto_increment,
    num int
)    |
| mysql-bin.000001 | 1202 | Anonymous_Gtid |         1 |        1267 | SET @@SESSION.GTID_NEXT= 'ANONYMOUS'                                                         |
| mysql-bin.000001 | 1267 | Query          |         1 |        1421 | use `test`; CREATE TABLE b(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    num INT
) |
| mysql-bin.000001 | 1421 | Rotate         |         1 |        1468 | mysql-bin.000002;pos=4                                                                       |
+------------------+------+----------------+-----------+-------------+----------------------------------------------------------------------------------------------+
22 rows in set (0.01 sec)

```
### 运维查看 `binlog`
在使用mysqlbinlog查看混合模式的二进制文件时，基于行的部分默认是以base64编码显示
将其中的base64转换成sql:
```shell
 mysqlbinlog --base64-output=decode-rows -v mysql-bin.000001 > res.txt
```
res.txt 的内容
```shell
/*!50530 SET @@SESSION.PSEUDO_SLAVE_MODE=1*/;
/*!50003 SET @OLD_COMPLETION_TYPE=@@COMPLETION_TYPE,COMPLETION_TYPE=0*/;
DELIMITER /*!*/;
# at 4
#231224 13:28:30 server id 1  end_log_pos 123 CRC32 0xc0f50f24 	Start: binlog v 4, server v 5.7.26-1-log created 231224 13:28:30 at startup
ROLLBACK/*!*/;
# at 123
#231224 13:28:30 server id 1  end_log_pos 154 CRC32 0x6cc91d0a 	Previous-GTIDs
# [empty]
# at 154
#231224 13:29:42 server id 1  end_log_pos 219 CRC32 0xf5bcc26f 	Anonymous_GTID	last_committed=0	sequence_number=1	rbr_only=yes
/*!50718 SET TRANSACTION ISOLATION LEVEL READ COMMITTED*//*!*/;
SET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;
# at 219
#231224 13:29:42 server id 1  end_log_pos 291 CRC32 0xc68a921b 	Query	thread_id=267	exec_time=0	error_code=0
SET TIMESTAMP=1703395782/*!*/;
SET @@session.pseudo_thread_id=267/*!*/;
SET @@session.foreign_key_checks=1, @@session.sql_auto_is_null=0, @@session.unique_checks=1, @@session.autocommit=1/*!*/;
SET @@session.sql_mode=1436549152/*!*/;
SET @@session.auto_increment_increment=1, @@session.auto_increment_offset=1/*!*/;
/*!\C utf8mb4 *//*!*/;
SET @@session.character_set_client=45,@@session.collation_connection=224,@@session.collation_server=8/*!*/;
SET @@session.lc_time_names=0/*!*/;
SET @@session.collation_database=DEFAULT/*!*/;
BEGIN
/*!*/;
# at 291
#231224 13:29:42 server id 1  end_log_pos 344 CRC32 0xcff0cc72 	Table_map: `test`.`user` mapped to number 118
# at 344
#231224 13:29:42 server id 1  end_log_pos 409 CRC32 0x075bb3b6 	Write_rows: table id 118 flags: STMT_END_F
### INSERT INTO `test`.`user`
### SET
###   @1=1
###   @2='a'
###   @3='p1'
### INSERT INTO `test`.`user`
### SET
###   @1=2
###   @2='b'
###   @3='p2'
# at 409
#231224 13:29:42 server id 1  end_log_pos 440 CRC32 0x9f0ffa07 	Xid = 1316
COMMIT/*!*/;
# at 440
#231224 14:30:23 server id 1  end_log_pos 505 CRC32 0x02ee3380 	Anonymous_GTID	last_committed=1	sequence_number=2	rbr_only=yes
/*!50718 SET TRANSACTION ISOLATION LEVEL READ COMMITTED*//*!*/;
SET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;
# at 505
#231224 14:30:23 server id 1  end_log_pos 577 CRC32 0x982238b6 	Query	thread_id=350	exec_time=0	error_code=0
SET TIMESTAMP=1703399423/*!*/;
BEGIN
/*!*/;
# at 577
#231224 14:30:23 server id 1  end_log_pos 630 CRC32 0x03e45ce2 	Table_map: `test`.`user` mapped to number 118
# at 630
#231224 14:30:23 server id 1  end_log_pos 680 CRC32 0xa2c1421a 	Delete_rows: table id 118 flags: STMT_END_F
### DELETE FROM `test`.`user`
### WHERE
###   @1=2
###   @2='b'
###   @3='p2'
# at 680
#231224 14:30:23 server id 1  end_log_pos 711 CRC32 0x3475be60 	Xid = 1674
COMMIT/*!*/;
# at 711
#231224 14:31:57 server id 1  end_log_pos 776 CRC32 0x23f46e3f 	Anonymous_GTID	last_committed=2	sequence_number=3	rbr_only=yes
/*!50718 SET TRANSACTION ISOLATION LEVEL READ COMMITTED*//*!*/;
SET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;
# at 776
#231224 14:31:57 server id 1  end_log_pos 848 CRC32 0x26f11bef 	Query	thread_id=369	exec_time=0	error_code=0
SET TIMESTAMP=1703399517/*!*/;
BEGIN
/*!*/;
# at 848
#231224 14:31:57 server id 1  end_log_pos 901 CRC32 0xde002922 	Table_map: `test`.`user` mapped to number 118
# at 901
#231224 14:31:57 server id 1  end_log_pos 955 CRC32 0x26595cf5 	Write_rows: table id 118 flags: STMT_END_F
### INSERT INTO `test`.`user`
### SET
###   @1=3
###   @2='222'
###   @3='3333'
# at 955
#231224 14:31:57 server id 1  end_log_pos 986 CRC32 0xd3f7919a 	Xid = 1804
COMMIT/*!*/;
# at 986
#231224 14:33:42 server id 1  end_log_pos 1051 CRC32 0x2f4e8cad 	Anonymous_GTID	last_committed=3	sequence_number=4	rbr_only=no
SET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;
# at 1051
#231224 14:33:42 server id 1  end_log_pos 1202 CRC32 0xb0d39243 	Query	thread_id=452	exec_time=0	error_code=0
use `test`/*!*/;
SET TIMESTAMP=1703399622/*!*/;
create table a (
id int unsigned primary key auto_increment,
    num int
)
/*!*/;
# at 1202
#231224 14:34:10 server id 1  end_log_pos 1267 CRC32 0xd38832ac 	Anonymous_GTID	last_committed=4	sequence_number=5	rbr_only=no
SET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;
# at 1267
#231224 14:34:10 server id 1  end_log_pos 1421 CRC32 0x00f1f075 	Query	thread_id=466	exec_time=0	error_code=0
SET TIMESTAMP=1703399650/*!*/;
CREATE TABLE b(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    num INT
)
/*!*/;
# at 1421
#231224 14:40:48 server id 1  end_log_pos 1468 CRC32 0xfb426c97 	Rotate to mysql-bin.000002  pos: 4
SET @@SESSION.GTID_NEXT= 'AUTOMATIC' /* added by mysqlbinlog */ /*!*/;
DELIMITER ;
# End of log file
/*!50003 SET COMPLETION_TYPE=@OLD_COMPLETION_TYPE*/;
/*!50530 SET @@SESSION.PSEUDO_SLAVE_MODE=0*/;
```
### 设置文件存储格式

- 全局
```sql
mysql> SET GLOBAL binlog_format = 'STATEMENT';
mysql> SET GLOBAL binlog_format = 'ROW';
mysql> SET GLOBAL binlog_format = 'MIXED';
```

- 会话
```sql
mysql> SET SESSION binlog_format = 'STATEMENT';
mysql> SET SESSION binlog_format = 'ROW';
mysql> SET SESSION binlog_format = 'MIXED';
```

- 为什么会需要会话设置

客户端可能希望在每个会话的基础上设置二进制日志记录的原因有多种：

- 对数据库进行许多小更改的会话可能需要使用基于行的日志记录。
- 执行与子句中的许多行匹配的更新的会话 `WHERE` 可能希望使用基于语句的日志记录，因为记录少量语句比记录许多行更有效。
- 有些语句在源上需要大量执行时间，但只会修改几行。因此，使用基于行的日志记录来复制它们可能是有益的。

> If you are using [InnoDB](https://dev.mysql.com/doc/refman/8.0/en/innodb-storage-engine.html) tables and the transaction isolation level is [READ COMMITTED](https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-isolation-levels.html#isolevel_read-committed) or [READ UNCOMMITTED](https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-isolation-levels.html#isolevel_read-uncommitted), only row-based logging can be used. It is possible to change the logging format to STATEMENT, but doing so at runtime leads very rapidly to errors because InnoDB can no longer perform inserts.

如果您正在使用 `InnoDB` 表并且事务隔离级别为 `READ COMMITTED` 或 `READ UNCOMMITTED`，则只能使用基于行的日志记录。

### 缓冲区大小的调整方式
> The [Binlog_cache_use](https://dev.mysql.com/doc/refman/8.0/en/server-status-variables.html#statvar_Binlog_cache_use) status variable shows the number of transactions that used this buffer (and possibly a temporary file) for storing statements. The [Binlog_cache_disk_use](https://dev.mysql.com/doc/refman/8.0/en/server-status-variables.html#statvar_Binlog_cache_disk_use) status variable shows how many of those transactions actually had to use a temporary file. These two variables can be used for tuning [binlog_cache_size](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_cache_size) to a large enough value that avoids the use of temporary files.
> The [max_binlog_cache_size](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_max_binlog_cache_size) system variable (default 4GB, which is also the maximum) can be used to restrict the total size used to cache a multiple-statement transaction. If a transaction is larger than this many bytes, it fails and rolls back. The minimum value is 4096.


默认 4GB
> If you are using the binary log and row based logging, concurrent inserts are converted to normal inserts for CREATE ... SELECT or [INSERT ... SELECT](https://dev.mysql.com/doc/refman/8.0/en/insert-select.html) statements. This is done to ensure that you can re-create an exact copy of your tables by applying the log during a backup operation. If you are using statement-based logging, the original statement is written to the log.


如果您使用二进制日志和基于行的日志记录，并发插入将转换为普通插入 `CREATE ... SELECT` 或 `INSERT ... SELECT` 语句。这样做是为了确保您可以通过在备份操作期间应用日志来重新创建表的精确副本。如果您使用的是基于语句的日志记录，则原始语句将写入日志。

### 缓冲区写入文件的时机 `sync_binlog`

> By default, the binary log is synchronized to disk at each write (sync_binlog=1). If sync_binlog was not enabled, and the operating system or machine (not only the MySQL server) crashed, there is a chance that the last statements of the binary log could be lost. To prevent this, enable the [sync_binlog](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_sync_binlog) system variable to synchronize the binary log to disk after every N commit groups. See [Section 5.1.8, “Server System Variables”](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html). The safest value for [sync_binlog](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_sync_binlog) is 1 (the default), but this is also the slowest.

`sync_binlog`默认是 1，即每个提交都写入文件，可以设置为 `N`表示 `N`个 `commit`再写入到文件。

> In earlier MySQL releases, there was a chance of inconsistency between the table content and binary log content if a crash occurred, even with [sync_binlog](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_sync_binlog) set to 1. For example, if you are using InnoDB tables and the MySQL server processes a [COMMIT](https://dev.mysql.com/doc/refman/8.0/en/commit.html) statement, it writes many prepared transactions to the binary log in sequence, synchronizes the binary log, and then commits the transaction into InnoDB. If the server unexpectedly exited between those two operations, the transaction would be rolled back by InnoDB at restart but still exist in the binary log. Such an issue was resolved in previous releases by enabling InnoDB support for two-phase commit in XA transactions. In MySQL 8.0, InnoDB support for two-phase commit in XA transactions is always enabled.


在早期的 MySQL 版本中，如果发生崩溃，表内容和二进制日志内容之间有可能不一致，即使 `sync_binlog` 设置为 1。例如，如果您正在使用InnoDB 表并且 MySQL 服务器处理一条 ` COMMIT` 语句，它会写入许多准备好的事务顺序写入二进制日志，同步二进制日志，然后将事务提交到 InnoDB. 如果服务器在这两个操作之间意外退出，事务将在重启时回滚InnoDB，但仍然存在于二进制日志中。InnoDB通过在 XA 事务中启用对两阶段提交的支持，在以前的版本中解决了这样的问题。在 MySQL 8.0 中， InnoDB始终启用 XA 事务中对两阶段提交的支持。

> InnoDB support for two-phase commit in XA transactions ensures that the binary log and InnoDB data files are synchronized. However, the MySQL server should also be configured to synchronize the binary log and the InnoDB logs to disk before committing the transaction. The InnoDB logs are synchronized by default, and sync_binlog=1 ensures the binary log is synchronized. The effect of implicit InnoDB support for two-phase commit in XA transactions and sync_binlog=1 is that at restart after a crash, after doing a rollback of transactions, the MySQL server scans the latest binary log file to collect transaction xid values and calculate the last valid position in the binary log file. The MySQL server then tells InnoDB to complete any prepared transactions that were successfully written to the to the binary log, and truncates the binary log to the last valid position. This ensures that the binary log reflects the exact data of InnoDB tables, and therefore the replica remains in synchrony with the source because it does not receive a statement which has been rolled back.


InnoDB支持 XA 事务中的两阶段提交确保二进制日志和 InnoDB数据文件同步。但是，MySQL服务器还应该配置为InnoDB在提交事务之前将二进制日志和日志同步到磁盘。InnoDB默认同步日志，保证 `sync_binlog=1` 二进制日志同步。`XA ` 事务中隐式 InnoDB支持两阶段提交的效果 `sync_binlog=1` 是，在崩溃后重新启动时，在事务回滚后，MySQL 服务器扫描最新的二进制日志文件以收集事务 `xid` 值并计算最后一个有效位置在二进制日志文件。MySQL 服务器然后告诉InnoDB完成任何已成功写入二进制日志的准备事务，并将二进制日志截断到最后一个有效位置。这确保二进制日志反映 InnoDB表的准确数据，因此副本与源保持同步，因为它没有收到已回滚的语句。

> If the MySQL server discovers at crash recovery that the binary log is shorter than it should have been, it lacks at least one successfully committed InnoDB transaction. This should not happen if sync_binlog=1 and the disk/file system do an actual sync when they are requested to (some do not), so the server prints an error message The binary log file_name is shorter than its expected size. In this case, this binary log is not correct and replication should be restarted from a fresh snapshot of the source's data.


如果 `MySQL` 服务器在崩溃恢复时发现二进制日志比它应该的短，它至少缺少一个成功提交的InnoDB事务。`sync_binlog=1` 如果磁盘/文件系统在请求时进行了实际同步（有些则没有），则不应发生这种情况，因此服务器会打印一条错误消息。在这种情况下，此二进制日志不正确，应从源数据的新快照重新启动复制。 

## 会怎样
> `binlog` 文件的使用场景

### 数据增量同步全文搜索

> 完整项目地址：https://github.com/csDeng/easy_binlog

- 技术栈
   - JDK17
   - redis
   - redis-search
   - mysql
   - docker-compose
   - binlog4j
#### 环境准备

```shell
cd ./docker
docker-compose up --build
```

> 注意，如果登录mysql时，提示无法远程登录，需要谷歌解决一下，把`host`切换成`%`, 然后刷新一下权限


建立`mysql` 表

```sql
create database test;
use test;
create table `user`(
  id bigint unsigned primary key auto_increment,
  name varchar(25),
  pwd varchar(255)
);
```

创建`redis search`索引

```shell
FT.CREATE user PREFIX 1 user: LANGUAGE chinese LANGUAGE_FIELD chinese SCHEMA name TEXT pwd TEXT
```

启动项目
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1703417403313-0c723d19-fc5b-4c74-9715-b6bb3a2845eb.png#averageHue=%2324282b&clientId=ucac032cc-6391-4&from=paste&height=293&id=u6fabfc42&originHeight=586&originWidth=1596&originalType=binary&ratio=2&rotation=0&showTitle=false&size=460064&status=done&style=none&taskId=ud05b03bb-8941-4e22-8aa1-0597cf71420&title=&width=798)

- 在`mysql` 中插入数据

数据成功同步`redis`
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1703417418437-c49b42e9-5969-4050-9432-c544addc1d2e.png#averageHue=%232b353d&clientId=ucac032cc-6391-4&from=paste&height=328&id=u8c244787&originHeight=656&originWidth=1598&originalType=binary&ratio=2&rotation=0&showTitle=false&size=315072&status=done&style=none&taskId=u8c6aa9d8-1ddd-4d5c-9f98-b760713d295&title=&width=799)

数据搜索成功
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1703417432548-950136a3-f3e7-4554-9df8-4ee50b448e1f.png#averageHue=%23292c30&clientId=ucac032cc-6391-4&from=paste&height=450&id=u5c33718b&originHeight=900&originWidth=1596&originalType=binary&ratio=2&rotation=0&showTitle=false&size=733167&status=done&style=none&taskId=u270a4180-918a-49e0-9127-6ee72fce136&title=&width=798)

- 数据宕机后增量同步

![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1703417448526-69cf7a87-0bb1-412c-8cd2-4f11de9d0f7a.png#averageHue=%2333383d&clientId=ucac032cc-6391-4&from=paste&height=332&id=u1bd9b50f&originHeight=664&originWidth=1588&originalType=binary&ratio=2&rotation=0&showTitle=false&size=581808&status=done&style=none&taskId=ub92c2bc2-2491-4e6b-a800-41bfc3727f9&title=&width=794)
#### 项目代码核心代码
##### 依赖文件
```xml

<dependencies>

    <!-- https://mvnrepository.com/artifact/com.gitee.Jmysy/binlog4j-spring-boot-starter -->
    <dependency>
        <groupId>com.gitee.Jmysy</groupId>
        <artifactId>binlog4j-spring-boot-starter</artifactId>
        <version>1.3.0</version>
    </dependency>
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.0.26</version>
    </dependency>
    <!-- https://mvnrepository.com/artifact/com.redislabs/jredisearch -->
    <dependency>
        <groupId>com.redislabs</groupId>
        <artifactId>jredisearch</artifactId>
        <version>2.2.0</version>
    </dependency>
</dependencies>
```
##### 配置文件
```yaml
spring:
  binlog4j:
    redis-config:
      host: 127.0.0.1
      port: 6379
    client-configs:
      master:
        persistence: true # 开启宕机续读
        username: root
        password: root
        host: 127.0.0.1
        port: 3306
        serverId: 1

```
##### 数据域
```java
@Data
public class User {

    private Long id;

    private String name;

    private String pwd;
}

```
##### 项目代码
```java
@SpringBootApplication
@Slf4j
@RestController
public class EasyBinlogApplication {

    private static final JedisPool  jedisPool = new JedisPool("localhost", 6379);

    @GetMapping("/search")
    public String search(@RequestParam("key") String key) {
        System.out.println("start");
        final Client client = new Client("user", "localhost", 6379);
        Query q = new Query(key) // 设置查询条件
            .setLanguage("chinese") // 设置为中文编码
            .limit(0,5);
        // 返回查询结果
        SearchResult res = client.search(q);
        // 输出查询结果
        System.out.println(res.docs);
        return res.docs.toString();
    }

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(EasyBinlogApplication.class);
    }

    @BinlogSubscriber(clientName = "master")
    static class UserEventHandler implements IBinlogEventHandler<User> {
        @Override
        public void onInsert(BinlogEvent<User> binlogEvent) {
            log.info("插入数据:{}", binlogEvent);
            User data = binlogEvent.getData();
            log.info("data={}", data);
            try (Jedis jedis = jedisPool.getResource()){
                HashMap<String, String> map = new HashMap<>();
                map.put("name", data.getName());
                map.put("pwd", data.getPwd());
                Long l = jedis.hset("user:" + data.getId(), map);
                log.info("同步了{}个记录",l);
            }
        }

        @Override
        public void onUpdate(BinlogEvent<User> binlogEvent) {}

        @Override
        public void onDelete(BinlogEvent<User> binlogEvent) {}
    }

}

```
