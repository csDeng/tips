

1. `Cannot resolve plugin org.apache.maven.plugins:maven-install-plugin:jar:3.1.1`

>  详细log
>
> Plugin org.apache.maven.plugins:maven-install-plugin:3.1.1 or one of its dependencies could not be resolved: Failed to read artifact descriptor for org.apache.maven.plugins:maven-install-plugin:jar:3.1.1: 1 problem was encountered while building the effective model
> [ERROR] [FATAL] Non-parseable POM /Users/xx/.m2/repository/org/apache/maven/plugins/maven-install-plugin/3.1.1/maven-install-plugin-3.1.1.pom: unexpected markup <!d (position: START_DOCUMENT seen \r\n<!d... @2:4)  @ line 2, column 4

解决办法：去把对应路径了删了重装，可能原因是不同项目的maven冲突了



