# 基础相关
## 1. Docker 是什么？
Docker 是基于**容器技术**实现的，容器技术最开始是基于 Linux Container（简称 LXC）技术实现的，通过内核提供的 **Namespace** 和 **Cgroup** 机制，实现了对应用程序的**隔离**以及物理资源的**分配**。
Docker 在容器基础上发展出了一个完善的生态系统，它将容器视为一种打包格式，将应用程序所需的一切，比如依赖库、运行时环境等都集合在了在一起，使得**一次构建，到处运行**。
它将**开发与运维**很好的融合在一起。开发人员可以很轻松的**构建、打包、推送和运行**应用程序。而且还允许我们将容器视为部署单元，以**模块化**的方式发布，降低了系统的运维管理难度。

## 2. 镜像是什么
镜像就像是包含了操作系统的一张光碟，它是一个**模板文件**，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。
另外，镜像是一个**分层**的文件系统，通过一层层的组合，使得我们可以复用这些不同粒度的镜像文件。
## 3. 容器是什么
> 容器的发展来源于我们码头的集装箱的思想，一次打包多方部署，简化上线流程。
> 简单地说，容器就是一个进程+进程的运行环境的简单整体。

容器是镜像的运行实例，我们可以把镜像看成是一个个的构建块，容器根据这些构建块搭建起了一个隔离的，拥有整个包的应用程序。每一个容器都是一个**标准化**单元，确保了在不同机子上也能拥有一致的行为。
## 4. 数据卷是什么
Docker 对数据持久化的解决方案，数据不会随着容器结束而丢失，通过将宿主机的某一文件目录挂载到容器里来实现。在 Docker 里提供了三种方法来实现目录的挂载：

- volumes**：** 属于 Docker 管理的目录，无需自己创建目录。
- bind mounts：自己指定的某个目录，需注意不同操作系统的文件路径格式。
- tmpfs：仅存储在主机系统的**内存**中，不会持久保存在磁盘上。容器可以使用它来共享简单状态或非敏感的信息

## 5. Docker 和虚拟机的区别？
容器技术和虚拟机都提供了**环境隔离**的功能。不同的是。容器是运行在操作系统上的一个进程，它和其他应用程序是共享内核的，由**操作系统**提供虚拟化隔离功能；而虚拟机则是完完全全**另**起了个操作系统，将环境隔离的更加彻底。

## 6. Docker 常用命令有哪些？
容器生命周期管理: run、start/stop/restart、kill、rm、pause/unpause
容器操作：ps、inspect、top
镜像仓库：login、pull、push、search
本地镜像管理：images、rmi、tag、build、history
例如，当我们需要运行一个容器时，则可以执行：
```shell
docker run  nginx:test
```
# 原理相关
## 1. docker 有几种网络模式
### host 模式
在建一个容器时，一般会为容器分配一个独立的 **Network Namespace** 以进行网络隔离。如果我们使用了 **Host** 模式，则不再分配 Network Namespace，而是和**宿主机**共用一个 Network Namespace。此时容器将不再拥有自己的虚拟网卡、IP 和端口，而是和宿主机**共用**一个 IP 和端口。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/21883277/1665308951758-691cf09e-3445-432a-bfd4-cfadd3c1c768.png#averageHue=%23cde9f5&clientId=u85e505b6-74fc-4&errorMessage=unknown%20error&from=paste&height=531&id=u0d3d7a75&originHeight=531&originWidth=662&originalType=binary&ratio=1&rotation=0&showTitle=false&size=94966&status=error&style=none&taskId=uf2ec5a50-e00a-4525-8f6a-ea0a1d40a31&title=&width=662)
### container模式
这个模式指定新创建的容器和已经存在的一个容器共享一个 Network Namespace，而不是和宿主机共享。新创建的容器不会创建自己的网卡，配置自己的 IP，而是和一个指定的容器共享 IP、端口范围等。同样，两个容器除了网络方面，其他的如文件系统、进程列表等还是隔离的。两个容器的进程可以通过 lo 网卡设备通信。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/21883277/1665308967578-72c83fb8-27ca-43e8-a1fe-85f84d7c5a56.png#averageHue=%23b0a352&clientId=u85e505b6-74fc-4&errorMessage=unknown%20error&from=paste&height=475&id=u117bbfb3&originHeight=475&originWidth=845&originalType=binary&ratio=1&rotation=0&showTitle=false&size=127264&status=error&style=none&taskId=u064ba7f7-2b5b-4ecd-a06d-a84ecb2bf61&title=&width=845)
### none模式
使用none模式，Docker容器拥有自己的 Network Namespace，但是，并不为Docker容器进行任何网络配置。也就是说，这个Docker容器没有网卡、IP、路由等信息。需要我们自己为 Docker 容器添加网卡、配置IP等。
这种网络模式下容器只有lo回环网络，没有其他网卡。none模式可以在容器创建时通过`--network=none`来指定。这种类型的网络没有办法联网，封闭的网络能很好的保证容器的安全性。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/21883277/1665308987801-7c97f556-bb10-4f2b-b203-954904f5ce99.png#averageHue=%23b0a454&clientId=u85e505b6-74fc-4&errorMessage=unknown%20error&from=paste&height=418&id=ua12e7a88&originHeight=418&originWidth=848&originalType=binary&ratio=1&rotation=0&showTitle=false&size=103357&status=error&style=none&taskId=u99dd204b-202e-40b5-886f-5c761cb2711&title=&width=848)
### bridge模式
Docker 在主机上会创建一个 docker0 的网桥，每当有容器要创建时，便会为容器分配一个独立的网卡，然后桥接到虚拟网桥上。这其实是一对虚拟网卡，一端放在容器里，另一端放在 docker0 网桥里。当一端有数据达到时，就会把数据包转发到另一端上，这就实现了网络通信。
bridge模式是docker的默认网络模式，不写--net参数，就是bridge模式。使用docker run -p时，docker实际是在iptables做了DNAT规则，实现端口转发功能。可以使用 iptables -t nat -vnL 查看。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/21883277/1665309005983-40d24916-1f46-4d1b-84db-e5979b4d9af8.png#averageHue=%23fcf2d4&clientId=u85e505b6-74fc-4&errorMessage=unknown%20error&from=paste&height=591&id=ue57e03e2&originHeight=591&originWidth=800&originalType=binary&ratio=1&rotation=0&showTitle=false&size=92652&status=error&style=none&taskId=u9a687ec4-b5f1-4c09-9afa-8f3f00b83b4&title=&width=800)
## 2. docker 网络实现在Linux 中的表现是什么？
##  
## 
## 3. Docker 储存后端有哪几种模式？


## 3. Docker 的底层技术是什么?
Docker 在 Linux 的底层技术有：Namespaces（资源隔离）、CGroups （资源限制）、UnionFS （联合文件系统）。其中：

- Namespaces（资源隔离）：将系统的全局资源通过抽象划分，使得在同一 namespace 中的进程看起来拥有自己的全局资源。主要有 `Mount namespaces`（文件系统挂载）、`Network namespaces`（网络）、`User namespaces`（用户）等的资源隔离。
- CGroups（资源限制）：对系统资源的限制，比如 CPU、内存等。
- UnionFS (联合文件系统)：一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录。便于镜像的分层继承。

## 4. `iptable`在 `docker` 中有什么应用

# 应用相关
## 1. 介绍一下 docker 的网络通信
首先 docker 的网络通信主要分以下几种场景：
### 1.1 同主机容器间通信

- ip 通信
> 因为 docker 的 IP是无法确定的，所以比较麻烦，一般不用。

- Docker DNS Server
> `Docker1.0`开始，`docker daemon`实现了一个内嵌的 `DNS Server`，使得容器可以直接通过“容器名”通信。
> 缺点：只能在 `user-defined`网络中使用。  

- `joined`容器
> `joined`容器可以是多个容器共享同一个网络栈，包括网卡以及配置信息。

### 1.2 容器与外界主机通信
容器默认能访问外网，使用了 `NAT`进行网络地址转换。
### 1.3 外界主机与容器通信
使用端口映射之后，就可以利用主机 `ip+端口`经过 `docker-proxy`转发，从而访问到跨主机的`docker`容器。






