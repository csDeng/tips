# 本地运行

1. 拉取代码
2. 安装依赖`yarn`
3. 运行 `yarn dev`








# docker部署
为了避免部分`markdown`语法影响打包结果，所以采用本地打包，复制`nginx`容器运行.

```shell
docker run -d -p 8080:80 xx/tips
```


