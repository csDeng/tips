:::info
环境

- springboot2.7.18 / 3.2
- jdk17

视频教程 黑马出品
[000-Spring高级49讲-导学_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1P44y1N7QG?p=1&vd_source=620efb0bc3b2b0b7169e8564f7f527a8)
:::
> springboot 进入 debug 模式的三种方式
> 1. `java –jar  xxx.jar   --debug`
> 2. `application.properties`中设置 `debug=true`
> 3. 在 `idea` 启动上面设置 `Run Configurations…` 在 `VM arguments` 中添加 `–Ddebug`


# Bean 相关
## 到底什么是`beanFactory`
:::info
它是 `ApplicationContext`的父接口，是`Spring`的核心容器。![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1700486506156-d258d51a-270b-4048-b5df-25c1bd1517c0.png#averageHue=%231f2023&clientId=u4962bd59-319d-4&from=paste&height=393&id=KPRah&originHeight=786&originWidth=2922&originalType=binary&ratio=2&rotation=0&showTitle=false&size=91593&status=done&style=none&taskId=u9bef44e0-6aac-4085-be39-1cb975bca92&title=&width=1461)
:::
```java

public interface BeanFactory {
    String FACTORY_BEAN_PREFIX = "&";

    Object getBean(String name) throws BeansException;

    <T> T getBean(String name, Class<T> requiredType) throws BeansException;

    Object getBean(String name, Object... args) throws BeansException;

    <T> T getBean(Class<T> requiredType) throws BeansException;

    <T> T getBean(Class<T> requiredType, Object... args) throws BeansException;

    <T> ObjectProvider<T> getBeanProvider(Class<T> requiredType);

    <T> ObjectProvider<T> getBeanProvider(ResolvableType requiredType);

    boolean containsBean(String name);

    boolean isSingleton(String name) throws NoSuchBeanDefinitionException;

    boolean isPrototype(String name) throws NoSuchBeanDefinitionException;

    boolean isTypeMatch(String name, ResolvableType typeToMatch) throws NoSuchBeanDefinitionException;

    boolean isTypeMatch(String name, Class<?> typeToMatch) throws NoSuchBeanDefinitionException;

    @Nullable
    Class<?> getType(String name) throws NoSuchBeanDefinitionException;

    @Nullable
    Class<?> getType(String name, boolean allowFactoryBeanInit) throws NoSuchBeanDefinitionException;

    String[] getAliases(String name);
}

```
## `beanFactory`能干啥
:::info
表面上只有 `getBean()`， 实际上控制反转，基本的依赖注入以及`bean`的生命周期等各种功能，都由它的实现类实现。
:::

## `ApplicationContext`是什么
:::info
`ApplicationContext`是`beanFactory`的继承与扩展关系。
:::

## `ApplicationContext`的功能比 `BeanFactory`多了什么
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1700488751500-1f97118f-801c-4434-a26d-1fcc4b673c7f.png#averageHue=%2332543b&clientId=u4962bd59-319d-4&from=paste&height=200&id=uc8e14271&originHeight=400&originWidth=2204&originalType=binary&ratio=2&rotation=0&showTitle=false&size=57062&status=done&style=none&taskId=u515afa11-0792-4b23-ba49-bc89768b857&title=&width=1102)
:::info
ApplicationContext 除了继承 BeanFactory 外，还继承了：

- MessageSource：使其具备处理国际化资源的能力
- ResourcePatternResolver：使其具备使用通配符进行资源匹配的能力
- EnvironmentCapable：使其具备读取 Spring 环境信息、配置文件信息的能力
- ApplicationEventPublisher：使其具备发布事件的能力 (事件的发布是堵塞同步的哟)
:::
```java
ConfigurableApplicationContext context = SpringApplication.run(ShowBeanApplication.class, args);
// 只加载类路径下面的文件
Resource[] resources = context.getResources("classpath:META-INF/spring.factories");

for (Resource resource : resources) {
    System.out.println(resource);
    System.out.println(resource.getURL());
}

System.out.println("************");

// 包含jar包的文件
Resource[] jarResources = context.getResources("classpath*:META-INF/spring.factories");
for (Resource jarResource : jarResources) {
    System.out.println(jarResource);
}
```
```java
ConfigurableEnvironment environment = context.getEnvironment();
//  获取系统环境变量
Map<String, Object> systemEnvironment = environment.getSystemEnvironment();
systemEnvironment.forEach((k,v)->{
    System.out.println("env >>>>>>>>>>>>> k="+k + "v="+ v);
});

// 获取配置文件的变量
System.out.println(environment.getProperty("server.port"));

```
```java
// --- 事件
public class MyEvent extends ApplicationEvent implements Serializable {
    public MyEvent(Object source) {
        super(source);
    }
}


// --- 监听器
@Component
public class EVListener {
    @EventListener
    public void recv(MyEvent e) {
        System.out.println(("接受到事件: source=" + e.getSource() + "time=" + e.getTimestamp()));
    }
}

// --- 发布事件
ConfigurableApplicationContext context = SpringApplication.run(ShowBeanApplication.class, args);
context.publishEvent(new MyEvent(context));
```
#  容器的实现
## `BeanFactory`的实现
## `ApplicationContext`的实现
### `xml` 配置
:::info
怎么通过 `xml` 配置 `bean`
:::
```java
public class ApplicationContextTest {
    public static void main(String[] args) {
       testClassPathXmlApplicationContext();
       testFileSystemXmlApplicationContext();
    }


    /**
     * 最为经典 基于 classpath 下的xml配置文件来创建
     */
    private static void testClassPathXmlApplicationContext() {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("b01.xml");
        System.out.println(context.getBean(Bean2.class).getBean1());
    }


    /**
     * 基于磁盘路径的 xml 配置文件来创建
     */
    private static void testFileSystemXmlApplicationContext() {
        FileSystemXmlApplicationContext context = new FileSystemXmlApplicationContext("//Users/csjerry/project/java/easy_spring_mvc/learn_spring/show_bean/src/test/resources/b01.xml");
        System.out.println(context.getBean(Bean2.class).getBean1());
    }

    public static class Bean1 {
        Bean1() {
            System.out.println(">>>>>>>>>> 1");
        }
    }

    public static class Bean2 {
        private Bean1 bean1;

        public Bean2() {
            System.out.println(">>>>>>>>>>>> 2.");
        }

        public void setBean1(Bean1 bean1) {
            this.bean1 = bean1;
        }

        public Bean1 getBean1() {
            return bean1;
        }
    }


}

```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
  <bean id="bean1" class="com.example.show_bean.ApplicationContextTest.Bean1"/>
  <bean id="bean2" class="com.example.show_bean.ApplicationContextTest.Bean2">
    <property name="bean1" ref="bean1"/>
  </bean>
</beans>
```
> `xml` 创建 `bean` 的原理
> > 通过`XmlBeanDefinitionReader`的 `loadBeanDefinitions`实现。

```java
 public static void main(String[] args) {
        // xml 读取的原理
        DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();
        System.out.println(">>>>>>>> 读取钱前");
        for (String name : beanFactory.getBeanDefinitionNames()) {
            System.out.println(name);
        }
        System.out.println(">>>>>>> 读取后");
        XmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(beanFactory);
        int i = reader.loadBeanDefinitions(new ClassPathResource("b01.xml"));
//        int i = reader.loadBeanDefinitions(new FileSystemResource("//Users/csjerry/project/java/easy_spring_mvc/learn_spring/show_bean/src/test/resources/b01.xml"));
        System.out.println(">>>>>>>>>> 读取" + i + "bean");
        for (String name : beanFactory.getBeanDefinitionNames()) {
            System.out.println(name);
        }
    }
```

---

### 配置类配置
> 普通 bean

```java
public class ApplicationContextTest {
        testAnnotationConfigApplicationContext();

    }


    /**
     * java 配置类来创建
     */
    private static void testAnnotationConfigApplicationContext() {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(Config.class);
        System.out.println(context.getBean(Bean2.class).getBean1());
    }

    @Configuration
    public static class Config {

        @Bean
        public Bean1 bean1() {
            return new Bean1();
        }

        @Bean
        public Bean2 bean2(Bean1 bean1) {
            Bean2 bean2 = new Bean2();
            bean2.setBean1(bean1);
            return bean2;
        }
    }

    public static class Bean1 {
        Bean1() {
            System.out.println(">>>>>>>>>> 1");
        }
    }

    public static class Bean2 {
        private Bean1 bean1;

        public Bean2() {
            System.out.println(">>>>>>>>>>>> 2.");
        }

        public void setBean1(Bean1 bean1) {
            this.bean1 = bean1;
        }

        public Bean1 getBean1() {
            return bean1;
        }
    }
}

```
> 用于 web 环境 (用错类debug了半天，差点怀疑人生)

```java
public class AnnotationConfigServletWebContext {

    public static void main(String[] args) {
//        public class AnnotationConfigServletWebServerApplicationContext
//              extends ServletWebServerApplicationContext
//                  implements AnnotationConfigRegistry
        AnnotationConfigServletWebServerApplicationContext context =
            new AnnotationConfigServletWebServerApplicationContext(WebConfig.class);

        // AnnotationConfigServletWebApplicationContext
        //          extends GenericWebApplicationContext
        //              implements AnnotationConfigRegistry
        // 注意这个类不会启动 tomcat
//        AnnotationConfigServletWebApplicationContext context = new AnnotationConfigServletWebApplicationContext(WebConfig.class);
        for (String name : context.getBeanDefinitionNames()) {
            System.out.println(">>>>>>>>>>>name="+name);
        }
//
    }

    static class WebConfig {
        // 内嵌 tomcat
        @Bean
        public ServletWebServerFactory servletWebServerFactory () {
            System.out.println(">>>>>>> tomcat");
            return new TomcatServletWebServerFactory();
        }
        // 路径派发
        @Bean
        public DispatcherServlet dispatcherServlet() {
            System.out.println(">>>>>>>> dispatch");
            return new DispatcherServlet();
        }
        // 注册 dispatch 到 tomcat
        @Bean
        public DispatcherServletRegistrationBean registrationBean(DispatcherServlet dispatcherServlet) {
            System.out.println(">>>>>>>>registrationBean");
            return new DispatcherServletRegistrationBean(dispatcherServlet, "/");
        }
        // 使用的是 org.springframework.web.servlet.mvc.Controller
        @Bean("/hello")
        public Controller controller1() {
            System.out.println(">>>>>>>> controller");
            return ((request, response) -> {
                response.getWriter().println("hello");
                return null;
            });
        }
    }
}

```
# Bean 的生命周期
实例化 -> 依赖注入 -> 销毁
> 用到模版方法 的设计模式

## 3.1 Bean 的常见的后处理器
### 测试代码
> `GenericApplicationContext`直接继承 `AbstractApplicationContext`是一个干净的容器。 
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1700984633282-2364f458-a978-4c81-a1b7-14c9340b9983.png#averageHue=%23333c40&clientId=uc8f98469-d25d-4&from=paste&height=391&id=u50c3bf31&originHeight=782&originWidth=2608&originalType=binary&ratio=2&rotation=0&showTitle=false&size=107853&status=done&style=none&taskId=ub1ffd0e6-d4d1-47f8-aeb6-c93664ea7f8&title=&width=1304)

```java

@Slf4j
@ToString
public class Bean1 {
    private Bean2 bean2;

    @Autowired
    public void setBean2(Bean2 bean2) {
        log.info("@Autowired 生效: {}", bean2);
        this.bean2 = bean2;
    }

    private Bean3 bean3;

    @Resource
    public void setBean3(Bean3 bean3) {
        log.info("@Resource 生效: {}", bean3);
        this.bean3 = bean3;
    }

    private String home;

    @Autowired
    public void setHome(@Value("${JAVA_HOME:hello world'}") String home) {
        log.info("@Value 生效: {}", home);
        this.home = home;
    }

    @PostConstruct
    public void init() {
        log.info("@PostConstruct 生效");
    }

    @PreDestroy
    public void destroy() {
        log.info("@PreDestroy 生效");
    }
}


//-

package com.example.show_bean.a04;


public class Bean2 {
}


//- 
package com.example.show_bean.a04;


public class Bean3 {
}


//-
package com.example.show_bean.a04;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Getter
@Setter
@ToString
@ConfigurationProperties(prefix = "java")
public class Bean4 {
    private String home;
    private String version;
}


```
```java
package com.example.show_bean.a04;

import org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor;
import org.springframework.boot.context.properties.ConfigurationPropertiesBindingPostProcessor;
import org.springframework.context.annotation.CommonAnnotationBeanPostProcessor;
import org.springframework.context.annotation.ContextAnnotationAutowireCandidateResolver;
import org.springframework.context.support.GenericApplicationContext;

public class A04Application {
    public static void main(String[] args) {
        // GenericApplicationContext 是一个干净的容器
        GenericApplicationContext context = new GenericApplicationContext();
//        // 解析值注入内容
//        context.getDefaultListableBeanFactory().setAutowireCandidateResolver(new ContextAnnotationAutowireCandidateResolver());
//
//        // @Autowired @Value
//        context.registerBean(AutowiredAnnotationBeanPostProcessor.class);
//
//        // @Resource @PostConstruct @PreDestroy
//        context.registerBean(CommonAnnotationBeanPostProcessor.class);
//
//        // @ConfigurationProperties  获取环境变量信息
//        ConfigurationPropertiesBindingPostProcessor.register(context.getDefaultListableBeanFactory());
        // 用原始方式注册三个 bean
        context.registerBean("bean1", Bean1.class);
        context.registerBean("bean2", Bean2.class);
        context.registerBean("bean3", Bean3.class);
        context.registerBean("bean4", Bean4.class);
        // 初始化容器。执行 beanFactory 后置处理器，添加 bean 后置处理器，初始化所有单例
        context.refresh();
        System.out.println(context.getBean(Bean4.class));

        // 销毁容器
        context.close();
    }
}
```
> 此时，启动类运行，只会打印基础的信息
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1700983440721-0a1fd20b-d1a8-48e4-934d-e983d372ff11.png#averageHue=%232a2b2e&clientId=uc8f98469-d25d-4&from=paste&height=206&id=u315ef633&originHeight=412&originWidth=2812&originalType=binary&ratio=2&rotation=0&showTitle=false&size=181980&status=done&style=none&taskId=u8a16e700-faf9-4931-a6ba-7806de885e0&title=&width=1406)

> 接下来，一步一步地打开后处理器的注释，查看处理器的作用

```
ConfigurationPropertiesBindingPostProcessor.register(context.getDefaultListableBeanFactory());
```
:::info
注册 `getDefaultListableBeanFactory`处理器后，可以拿到系统的环境变量信息。
:::
 ![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1700983608030-3945c6db-73bb-4934-8791-5f2f02681dc8.png#averageHue=%232c2f33&clientId=uc8f98469-d25d-4&from=paste&height=276&id=u3a9bf97e&originHeight=552&originWidth=2836&originalType=binary&ratio=2&rotation=0&showTitle=false&size=280230&status=done&style=none&taskId=ub8213791-ae06-4171-9087-89d4a9c03e0&title=&width=1418)
```java
 context.registerBean(AutowiredAnnotationBeanPostProcessor.class);
```
:::info
注册 `AutowiredAnnotationBeanPostProcessor`之后, `autowired` 生效, 但是值注入失败。
:::
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1700983874118-83409074-dab1-454d-9ee8-0c53508c9922.png#averageHue=%23292a2e&clientId=uc8f98469-d25d-4&from=paste&height=406&id=u661594ac&originHeight=812&originWidth=2776&originalType=binary&ratio=2&rotation=0&showTitle=false&size=550960&status=done&style=none&taskId=uee34c759-9d80-4f13-b60f-6d020929478&title=&width=1388)
```java
context.getDefaultListableBeanFactory().setAutowireCandidateResolver(new ContextAnnotationAutowireCandidateResolver());
```
:::info
替换完 `setAutowireCandidateResolver`之后，值注入成功
:::
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1700983997173-e07abcd2-59f0-4067-ab26-29b087581393.png#averageHue=%232c2d30&clientId=uc8f98469-d25d-4&from=paste&height=362&id=u2fbd8b73&originHeight=724&originWidth=2684&originalType=binary&ratio=2&rotation=0&showTitle=false&size=343667&status=done&style=none&taskId=u8f265f05-c6fd-45ed-ab7f-5d19942e3f6&title=&width=1342)
```java
context.registerBean(CommonAnnotationBeanPostProcessor.class);
```
:::info
注册 `CommonAnnotationBeanPostProcessor`之后，` @Resource @PostConstruct @PreDestroy` 生效。
:::
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1700984147887-94888849-9e40-48e9-91ab-2651e6822097.png#averageHue=%232d2e31&clientId=uc8f98469-d25d-4&from=paste&height=407&id=ud74d164f&originHeight=814&originWidth=2864&originalType=binary&ratio=2&rotation=0&showTitle=false&size=439317&status=done&style=none&taskId=u22701b4c-ab2b-4648-8b6b-aef574ed48e&title=&width=1432)

### 总结
:::warning
通过前文可知

-  `AutowiredAnnotationBeanPostProcessor` 用于解析 `@Autowired 和 @Value ` 注解。
- `CommonAnnotationBeanPostProcessor` 解析  `@Resource @PostConstruct @PreDestroy`
- `getDefaultListableBeanFactory`获取系统环境变量
- `setAutowireCandidateResolver`配合 `AutowiredAnnotationBeanPostProcessor` 进行值注入。
:::

## 3.2  工厂后处理器的模拟实现
:::warning
涉及后处理器 `@ComponentScan, @Bean`
:::
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1700986103715-4be01a6e-b3ad-474e-92e1-a1578b7cd506.png#averageHue=%23303237&clientId=uc8f98469-d25d-4&from=paste&height=165&id=u4f2ab3ba&originHeight=330&originWidth=506&originalType=binary&ratio=2&rotation=0&showTitle=false&size=26251&status=done&style=none&taskId=ua8473f66-7102-4031-b0df-db33c4f7581&title=&width=253)
```java

@Slf4j
public class A05Application {


    public static void main(String[] args) throws IOException {
        GenericApplicationContext context = new GenericApplicationContext();
        context.registerBean("config", Config.class);

        ComponentScan scan = AnnotationUtils.findAnnotation(Config.class, ComponentScan.class);

        CachingMetadataReaderFactory cachingMetadataReaderFactory = new CachingMetadataReaderFactory();

        if(scan != null) {
            String[] strings = scan.basePackages();
            for (String s : strings) {
                System.out.println(">>>>> prev->: " + s);
                //-> classpath*:com/example/show_bean/**/*.class
                s = "classpath*:"+s.replace(".", "/") + "/**/*.class";
                System.out.println(">>>>> post->: "  + s);
                Resource[] resources = context.getResources(s);
                for (Resource resource : resources) {

                    MetadataReader metadataReader = cachingMetadataReaderFactory.getMetadataReader(resource);
                    String className = metadataReader.getClassMetadata().getClassName();
                    System.out.println("类名：" + className);
                    boolean b = metadataReader.getAnnotationMetadata().hasAnnotation(Component.class.getName());
                    System.out.println("是否加了 @Component: " + b);
                    boolean b1 = metadataReader.getAnnotationMetadata().hasMetaAnnotation(Component.class.getName());
                    System.out.println("是否加了 @Component 派生注解: " + b1);
                }
            }
        }
        context.refresh();
    }
}

//- Config

@Component
@ComponentScan(basePackages = "com.example.show_bean.a05.component")
public class Config {

    public Config() {
        System.out.println(">>>>>>>> config init");
    }
}


//- bean2
@Component
public class bean2 {
    public bean2(){
        System.out.println(">>>>>>>>>" + bean2.class.getSimpleName() + "spring init");
    }
}

//- bean3

@Controller
public class bean3 {
    public bean3(){
        System.out.println(">>>>>>>>>" + bean3.class.getSimpleName() + "spring inti ");
    }
}

//- bean4
public class bean4 {
    
    public bean4(){
        System.out.println(">>>>>>>>>" + bean4.class.getSimpleName() + "init");
    }
}
```
运行结果![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1700986285680-71277f7e-c65d-4d47-99bf-90f59cc5069c.png#averageHue=%23242528&clientId=uc8f98469-d25d-4&from=paste&height=321&id=u5a2c9754&originHeight=642&originWidth=2744&originalType=binary&ratio=2&rotation=0&showTitle=false&size=197045&status=done&style=none&taskId=u381bd325-ce72-47c8-933b-3a65e4be6c8&title=&width=1372)
:::warning
修改 Application 代码使之扫描组件注册成 bean
:::
```java
package com.example.show_bean.a05;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.support.AbstractBeanDefinition;
import org.springframework.beans.factory.support.BeanDefinitionBuilder;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.context.annotation.AnnotationBeanNameGenerator;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.core.io.Resource;
import org.springframework.core.type.classreading.CachingMetadataReaderFactory;
import org.springframework.core.type.classreading.MetadataReader;
import org.springframework.stereotype.Component;
import java.io.IOException;

@Slf4j
public class A05Application {


    public static void main(String[] args) throws IOException {
        GenericApplicationContext context = new GenericApplicationContext();
        context.registerBean("config", Config.class);

        ComponentScan scan = AnnotationUtils.findAnnotation(Config.class, ComponentScan.class);

        CachingMetadataReaderFactory cachingMetadataReaderFactory = new CachingMetadataReaderFactory();

        // 根据注解生成 bean 名字
        AnnotationBeanNameGenerator annotationBeanNameGenerator = new AnnotationBeanNameGenerator();

        DefaultListableBeanFactory defaultListableBeanFactory = context.getDefaultListableBeanFactory();
        if(scan != null) {
            String[] strings = scan.basePackages();
            for (String s : strings) {
                System.out.println(">>>>> prev->: " + s);
                //-> classpath*:com/example/show_bean/**/*.class
                s = "classpath*:"+s.replace(".", "/") + "/**/*.class";
                System.out.println(">>>>> post->: "  + s);
                Resource[] resources = context.getResources(s);
                for (Resource resource : resources) {

                    MetadataReader metadataReader = cachingMetadataReaderFactory.getMetadataReader(resource);
                    String className = metadataReader.getClassMetadata().getClassName();
//                    System.out.println("类名：" + className);
                    boolean b = metadataReader.getAnnotationMetadata().hasAnnotation(Component.class.getName());
//                    System.out.println("是否加了 @Component: " + b);
                    boolean b1 = metadataReader.getAnnotationMetadata().hasMetaAnnotation(Component.class.getName());
//                    System.out.println("是否加了 @Component 派生注解: " + b1);
                    if(b || b1) {
                        // 加了 @Component 以及派生注解的 转换成 bean
                        AbstractBeanDefinition beanDefinition = BeanDefinitionBuilder
                            .genericBeanDefinition(className)
                            .getBeanDefinition();
                        String beanName = annotationBeanNameGenerator.generateBeanName(beanDefinition, defaultListableBeanFactory);
                        defaultListableBeanFactory.registerBeanDefinition(beanName, beanDefinition);
                    }
                }
                for (String name : context.getBeanDefinitionNames()) {
                    System.out.println(">>>>>>>>>beanName="+name);
                }
            }
        }

        context.refresh();
    }
}

```
运行  `bean2, bean3` 注册成功， `bean4`没有注册，符合预期。 
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1700986936732-5013220f-2eda-4bd2-a48a-6129341e066e.png#averageHue=%2326272a&clientId=uc8f98469-d25d-4&from=paste&height=279&id=uabcf632c&originHeight=558&originWidth=2706&originalType=binary&ratio=2&rotation=0&showTitle=false&size=174495&status=done&style=none&taskId=u9b750c1c-bcac-4ca1-9ad6-f15d250c2a0&title=&width=1353)
:::warning
将 `bean` 注册部分代码，抽取成一个后处理器， 修改启动类以及新添加后处理器类。
后处理器需要实现  `BeanFactoryPostProcessor`, 他会在 调用 `refresh` 时执行。
:::
```java
@Slf4j
public class A05Application {
    public static void main(String[] args) {
        GenericApplicationContext context = new GenericApplicationContext();
        context.registerBean("config", Config.class);

        // 注册后处理器
        context.registerBean(ComponentScanPostProcessor.class);
        context.refresh();

        for (String name : context.getBeanDefinitionNames()) {
            System.out.println(">>>>>>>>>beanName="+name);
        }
    }
}

//- 

public class ComponentScanPostProcessor implements BeanFactoryPostProcessor {
    @Override
    public void postProcessBeanFactory(@NonNull ConfigurableListableBeanFactory configurableListableBeanFactory) throws BeansException {

        try {
            ComponentScan scan = AnnotationUtils.findAnnotation(Config.class, ComponentScan.class);

            CachingMetadataReaderFactory cachingMetadataReaderFactory = new CachingMetadataReaderFactory();

            // 根据注解生成 bean 名字
            AnnotationBeanNameGenerator annotationBeanNameGenerator = new AnnotationBeanNameGenerator();

            // 获取资源文件
            PathMatchingResourcePatternResolver patternResolver = new PathMatchingResourcePatternResolver();
            if (scan != null) {
                String[] strings = scan.basePackages();
                for (String s : strings) {
                    System.out.println(">>>>> prev->: " + s);
                    //-> classpath*:com/example/show_bean/**/*.class
                    s = "classpath*:" + s.replace(".", "/") + "/**/*.class";
                    System.out.println(">>>>> post->: " + s);
                    Resource[] resources = patternResolver.getResources(s);
                    for (Resource resource : resources) {
                        MetadataReader metadataReader = cachingMetadataReaderFactory.getMetadataReader(resource);
                        String className = metadataReader.getClassMetadata().getClassName();
//                    System.out.println("类名：" + className);
                        boolean b = metadataReader.getAnnotationMetadata().hasAnnotation(Component.class.getName());
//                    System.out.println("是否加了 @Component: " + b);
                        boolean b1 = metadataReader.getAnnotationMetadata().hasMetaAnnotation(Component.class.getName());
//                    System.out.println("是否加了 @Component 派生注解: " + b1);
                        if (b || b1) {
                            // 加了 @Component 以及派生注解的 转换成 bean
                            AbstractBeanDefinition beanDefinition = BeanDefinitionBuilder
                                .genericBeanDefinition(className)
                                .getBeanDefinition();
                            if (configurableListableBeanFactory instanceof DefaultListableBeanFactory defaultListableBeanFactory) {
                                String beanName = annotationBeanNameGenerator.generateBeanName(beanDefinition, defaultListableBeanFactory);
                                defaultListableBeanFactory.registerBeanDefinition(beanName, beanDefinition);
                            }
                        }

                    }

                }
            }
        } catch (Exception e) {
            throw new RuntimeException("注册 bean 失败" + e.getMessage());
        }
    }
}
```

---

:::warning
`@Bean`
:::
```java
package com.example.show_bean.a05;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanFactoryPostProcessor;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.beans.factory.support.AbstractBeanDefinition;
import org.springframework.beans.factory.support.BeanDefinitionBuilder;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.type.MethodMetadata;
import org.springframework.core.type.classreading.CachingMetadataReaderFactory;
import org.springframework.core.type.classreading.MetadataReader;
import org.springframework.lang.NonNull;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.util.Set;

public class BeanPostProcessor implements BeanFactoryPostProcessor {
    @Override
    public void postProcessBeanFactory(@NonNull ConfigurableListableBeanFactory configurableListableBeanFactory) throws BeansException {
        try {
            CachingMetadataReaderFactory cachingMetadataReaderFactory = new CachingMetadataReaderFactory();
            MetadataReader reader = cachingMetadataReaderFactory.getMetadataReader(new ClassPathResource("com/example/show_bean/a05/Config.class"));
            Set<MethodMetadata> annotatedMethods = reader.getAnnotationMetadata().getAnnotatedMethods(Bean.class.getName());
            for (MethodMetadata method : annotatedMethods) {
                String initMethod = method.getAnnotationAttributes(Bean.class.getName()).get("initMethod").toString();
                
                BeanDefinitionBuilder definitionBuilder = BeanDefinitionBuilder.genericBeanDefinition();
                definitionBuilder.setFactoryMethodOnBean(method.getMethodName(), "config");
                // 设置注入模式
                definitionBuilder.setAutowireMode(AbstractBeanDefinition.AUTOWIRE_CONSTRUCTOR);
                if(StringUtils.hasLength(initMethod)) {
                    definitionBuilder.setInitMethodName(initMethod);
                }

                AbstractBeanDefinition bd = definitionBuilder.getBeanDefinition();
                if(configurableListableBeanFactory instanceof DefaultListableBeanFactory defaultListableBeanFactory) {
                    defaultListableBeanFactory.registerBeanDefinition(method.getMethodName(), bd);
                }
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}

```

:::warning
`@Mapper`
:::
```java
@Mapper
public interface Mapper1 {
}


//-
@Mapper
public interface Mapper2 {
}

//- MapperFactoryBean 注册
@Bean
public MapperFactoryBean<Mapper1> mapper1(SqlSessionFactory sqlSessionFactory) {
    MapperFactoryBean<Mapper1> factoryBean = new MapperFactoryBean<>(Mapper1.class);
    factoryBean.setSqlSessionFactory(sqlSessionFactory);
    return factoryBean;
}
@Bean
public MapperFactoryBean<Mapper2> mapper2(SqlSessionFactory sqlSessionFactory) {
    MapperFactoryBean<Mapper2> factoryBean = new MapperFactoryBean<>(Mapper2.class);
    factoryBean.setSqlSessionFactory(sqlSessionFactory);
    return factoryBean;
}

```
`MapperFactoryBean` 只能注册一个 `bean`,  抽象成一个后处理器进行扫描 批量 注册
```java
package com.example.show_bean.a05;

import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.mapper.MapperFactoryBean;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.beans.factory.support.AbstractBeanDefinition;
import org.springframework.beans.factory.support.BeanDefinitionBuilder;
import org.springframework.beans.factory.support.BeanDefinitionRegistry;
import org.springframework.beans.factory.support.BeanDefinitionRegistryPostProcessor;
import org.springframework.context.annotation.AnnotationBeanNameGenerator;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.type.ClassMetadata;
import org.springframework.core.type.classreading.CachingMetadataReaderFactory;
import org.springframework.core.type.classreading.MetadataReader;
import org.springframework.lang.NonNull;

public class MapperPostProcessor implements BeanDefinitionRegistryPostProcessor {
    @Override
    public void postProcessBeanDefinitionRegistry(@NonNull BeanDefinitionRegistry beanDefinitionRegistry) throws BeansException {
        try {
            PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
            Resource[] resources = resolver.getResources("classpath:com/example/show_bean/a05/mapper/**/*.class");
            CachingMetadataReaderFactory factory = new CachingMetadataReaderFactory();

            AnnotationBeanNameGenerator nameGenerator = new AnnotationBeanNameGenerator();
            for (Resource resource : resources) {
                MetadataReader reader = factory.getMetadataReader(resource);
                ClassMetadata classMetadata = reader.getClassMetadata();
                if (classMetadata.isInterface() && reader.getAnnotationMetadata().hasAnnotation(Mapper.class.getName())) {
                    // 是接口且有@Mapper
                    AbstractBeanDefinition beanDefinition = BeanDefinitionBuilder.genericBeanDefinition(MapperFactoryBean.class)
                        .addConstructorArgValue(classMetadata.getClassName())
                        // 按照类型注入 SqlSessionFactory
                        .setAutowireMode(AbstractBeanDefinition.AUTOWIRE_BY_TYPE)
                        .getBeanDefinition();

                    // 生成一个新的 beanDefinitional 生成一个 beanName
                    AbstractBeanDefinition beanDefinition1 = BeanDefinitionBuilder
                        .genericBeanDefinition(classMetadata.getClassName())
                        .getBeanDefinition();
                    String beanName = nameGenerator.generateBeanName(beanDefinition1, beanDefinitionRegistry);
                    beanDefinitionRegistry.registerBeanDefinition(beanName, beanDefinition);
                }
            }

        }catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public void postProcessBeanFactory(@NonNull ConfigurableListableBeanFactory configurableListableBeanFactory) throws BeansException {

    }
}

```

## 3.3 `Aware` 接口以及 `InitializingBean`
> Aware 接口用于注入一些与容器相关的信息，例如
> - `BeanNameAware`注入 `Bean`的名字
> - `BeanFactoryAware`注入 `BeanFactory`容器
> - `ApplicationContextAware`注入 `ApplicationContext`容器
> - `EmbeddedResolverAware`注入 `${}`

```java
public class A06Application {


    public static void main(String[] args) {
        GenericApplicationContext context = new GenericApplicationContext();
        context.registerBean("myBean", MyBean.class);

        context.refresh();

        context.close();
    }
}

//- 

public class MyBean implements BeanNameAware, ApplicationContextAware, InitializingBean {
    @Override
    public void setBeanName(String s) {
        System.out.println("setBeanName" + this.getClass().getSimpleName() + " 名字叫：" + s);
    }

    @Override
    public void setApplicationContext(@NonNull ApplicationContext applicationContext) throws BeansException {
        System.out.println("setBeanName" + this.getClass().getSimpleName() + " applicationContext 容器是：" + applicationContext);
    }

    @Override
    public void afterPropertiesSet() {
        System.out.println("setBeanName" + this.getClass().getSimpleName() + " InitializingBean");
    }
}

```
运行结果![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1701090641011-b4a3e74a-0010-40c8-863e-b5ee544195c3.png#averageHue=%232b2d30&clientId=uc8f98469-d25d-4&from=paste&height=138&id=ue2560f65&originHeight=276&originWidth=2796&originalType=binary&ratio=2&rotation=0&showTitle=false&size=138207&status=done&style=none&taskId=u760d93ba-fecb-46de-91b2-f2ffd41dbaa&title=&width=1398)
> `BeanFactoryAware`注入 `BeanFactory`容器、`ApplicationContextAware`注入 `ApplicationContext`容器、`EmbeddedResolverAware`注入 `${}`使用 `@Autowired`就能实现，为什么还要用 `Aware`接口呢？
> > `@Autowire`的解析需要 bean 后处理器，属于扩展功能，而 `Aware`接口属于内置功能，不需要任何扩展， `Spring`就能识别。
> 某种情况下，扩展功能会失效，而内置功能不会。 

```java
public class MyBean implements BeanNameAware, ApplicationContextAware, InitializingBean {
    @Override
    public void setBeanName(String s) {
        System.out.println("setBeanName" + this.getClass().getSimpleName() + " 名字叫：" + s);
    }

    @Override
    public void setApplicationContext(@NonNull ApplicationContext applicationContext) throws BeansException {
        System.out.println("setBeanName" + this.getClass().getSimpleName() + " applicationContext 容器是：" + applicationContext);
    }

    @Override
    public void afterPropertiesSet() {
        System.out.println("setBeanName" + this.getClass().getSimpleName() + " InitializingBean");
    }

    @Autowired
    public void set(ApplicationContext applicationContext) {
        System.out.println("setBeanName" + this.getClass().getSimpleName() + " @Autowired 注入的 applicationContext 容器是：" + applicationContext);
    }

    @PostConstruct
    public void init() {
        System.out.println("setBeanName" + this.getClass().getSimpleName() + " @PostConstruct InitializingBean");
    }
}
```
如果只是简单地添加 `Autowired，@PostConstruct `在，空容器环境下并不会执行。需要添加相应的后处理器。
```java
public class A06Application {


    public static void main(String[] args) {
        GenericApplicationContext context = new GenericApplicationContext();
        context.registerBean("myBean", MyBean.class);
        context.registerBean(AutowiredAnnotationBeanPostProcessor.class);
        context.registerBean(CommonAnnotationBeanPostProcessor.class);
        context.refresh();

        context.close();
    }
}
```
`Autowired，@PostConstruct ` 正常执行以及注入。

## 3.4 AutoWired 以及 PostConstruct 失效的情况分析
```java
    public static void main(String[] args) {
        GenericApplicationContext context = new GenericApplicationContext();
        context.registerBean("myconfig", MyConfig1.class);
        context.registerBean(AutowiredAnnotationBeanPostProcessor.class);
        context.registerBean(CommonAnnotationBeanPostProcessor.class);
        context.registerBean(ConfigurationClassPostProcessor.class);
        context.refresh();

        context.close();
    }

//-
@Slf4j
@Configuration
public class MyConfig1 {
    @Autowired
    public void setApplicationContext(ApplicationContext applicationContext) {
        log.info("注入 ApplicationContext");
    }

    @PostConstruct
    public void init() {
        log.info("初始化");
    }
}

```
运行之后正常打印。但是加入以下代码之后运行 `Autowired , PostConstruct`失效。
> 在 Config1 中添加了一个被 @Bean 注解标记的 processor1() 方法，用于向容器中添加 BeanFactoryPostProcessor。processor1() 方法成功生效，但 @Autowired 和 @PostConstruct 注解的解析失败了。



```java
@Slf4j
@Configuration
public class MyConfig1 {
    @Autowired
    public void setApplicationContext(ApplicationContext applicationContext) {
        log.info("注入 ApplicationContext");
    }

    @PostConstruct
    public void init() {
        log.info("初始化");
    }

    @Bean
    public BeanFactoryPostProcessor processor1() {
        return processor -> log.info("执行 processor1");
    }
}

```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1701092587908-b5133c30-0133-4ada-8a7a-aa5f661d75a3.png#averageHue=%232f3033&clientId=uc8f98469-d25d-4&from=paste&height=219&id=uf032dc87&originHeight=438&originWidth=2600&originalType=binary&ratio=2&rotation=0&showTitle=false&size=232499&status=done&style=none&taskId=u2344461a-61f7-4ff9-b198-9fcfae2d523&title=&width=1300)
> 对于 `context.refresh()` 方法来说，它主要按照以下顺序干了三件事：
> 1.  执行 `BeanFactory` 后置处理器；
> 2.  添加 `Bean` 后置处理器；
> 3.  创建和初始化单例对象。

比如当 Java 配置类不包括 `BeanFactoryPostProcessor` 时：
![](https://cdn.nlark.com/yuque/__puml/4cab35a2324cb02d15927f3014b23e68.svg#lake_card_v2=eyJ0eXBlIjoicHVtbCIsImNvZGUiOiJAc3RhcnR1bWxcblxucGFydGljaXBhbnQgQXBwbGljYXRpb25Db250ZXh0IGFzIGN0eFxucGFydGljaXBhbnQgQmVhbkZhY3RvcnlQb3N0UHJvY2Vzc29yIGFzIGZhY3Rvcnlwcm9jZXNzb3JcbnBhcnRpY2lwYW50IEJlYW5Qb3N0UHJvY2Vzc29yIGFzIHByb2Nlc3NvclxucGFydGljaXBhbnQgQ29uZmlnIGFzIGNvbmZcbmF1dG9udW1iZXJcbmFjdGl2YXRlIGN0eFxuYWN0aXZhdGUgZmFjdG9yeXByb2Nlc3NvclxuY3R4IC0-IGZhY3Rvcnlwcm9jZXNzb3I6IOaJp-ihjEJlYW5GYWN0b3J5UG9zdFByb2Nlc3NvclxuZGVhY3RpdmF0ZSBmYWN0b3J5cHJvY2Vzc29yXG5hY3RpdmF0ZSBwcm9jZXNzb3JcbmZhY3Rvcnlwcm9jZXNzb3IgLT4gcHJvY2Vzc29yOiDliJvlu7ogQmVhblBvc3RQcm9jZXNzb3JcbnByb2Nlc3NvciAtPiBjdHg6IOazqOWGjHByb2Nlc3NvclxuYWN0aXZhdGUgY29uZlxuY3R4IC0-IGNvbmY6IOWIm-W7uuW5tuWIneWni-WMllxucHJvY2Vzc29yIC0-IGNvbmY6IOS-nei1luazqOWFpeaJqeWxle-8jOWmgihAVmFsdWUsIEBBdXRvd2lyZWQpXG5wcm9jZXNzb3IgLT4gY29uZjog5Yid5aeL5YyW5omp5bGV77yI5aaCIEBQb3N0Q29uc3RydWN077yJXG5kZWFjdGl2YXRlIHByb2Nlc3NvclxuY3R4IC0-IGNvbmY6IOaJp-ihjCBBd2FyZSDku6Xlj4ogSW5pdGlhbGl6aW5nQmVhblxuY29uZiAtPiBjdHg6IOWIm-W7uuaIkOWKn1xuZGVhY3RpdmF0ZSBjb25mXG5cbkBlbmR1bWwiLCJ1cmwiOiJodHRwczovL2Nkbi5ubGFyay5jb20veXVxdWUvX19wdW1sLzRjYWIzNWEyMzI0Y2IwMmQxNTkyN2YzMDE0YjIzZTY4LnN2ZyIsImlkIjoiTHJQa3AiLCJtYXJnaW4iOnsidG9wIjp0cnVlLCJib3R0b20iOnRydWV9LCJjYXJkIjoiZGlhZ3JhbSJ9)`BeanFactoryPostProcessor` 会在 Java 配置类初始化之前执行。
当 Java 配置类中定义了 `BeanFactoryPostProcessor` 时，如果要创建配置类中的 `BeanFactoryPostProcessor` 就必须提前创建和初始化 Java 配置类。
在创建和初始化 Java 配置类时，由于 `BeanPostProcessor` 还未准备好，无法解析配置类中的 `@Autowired` 等注解，导致 `@Autowired` 等注解失效：
![](https://cdn.nlark.com/yuque/__puml/4f7e048cc100be692c3d44bc2a10f514.svg#lake_card_v2=eyJ0eXBlIjoicHVtbCIsImNvZGUiOiJAc3RhcnR1bWxcblxucGFydGljaXBhbnQgQXBwbGljYXRpb25Db250ZXh0IGFzIGN0eFxucGFydGljaXBhbnQgQmVhbkZhY3RvcnlQb3N0UHJvY2Vzc29yIGFzIGZhY3Rvcnlwcm9jZXNzb3JcbnBhcnRpY2lwYW50IEJlYW5Qb3N0UHJvY2Vzc29yIGFzIHByb2Nlc3NvclxucGFydGljaXBhbnQgQ29uZmlnIGFzIGNvbmZcbmF1dG9udW1iZXJcbmFjdGl2YXRlIGN0eFxuYWN0aXZhdGUgY29uZlxuY3R4IC0-IGNvbmY6IOWIm-W7uuW5tuWIneWni-WMllxuY3R4IC0-IGNvbmY6IOaJp-ihjCBBd2FyZSDku6Xlj4ogSW5pdGlhbGl6aW5nQmVhblxuY29uZiAtPiBjdHg6IOWIm-W7uuaIkOWKn1xuZGVhY3RpdmF0ZSBjb25mXG5jdHggLT4gZmFjdG9yeXByb2Nlc3Nvcjog5omn6KGMQmVhbkZhY3RvcnlQb3N0UHJvY2Vzc29yXG5hY3RpdmF0ZSBwcm9jZXNzb3JcbmZhY3Rvcnlwcm9jZXNzb3IgLT4gcHJvY2Vzc29yOiDliJvlu7ogQmVhblBvc3RQcm9jZXNzb3JcbnByb2Nlc3NvciAtPiBjdHg6IOazqOWGjHByb2Nlc3NvclxuXG5cbkBlbmR1bWwiLCJ1cmwiOiJodHRwczovL2Nkbi5ubGFyay5jb20veXVxdWUvX19wdW1sLzRmN2UwNDhjYzEwMGJlNjkyYzNkNDRiYzJhMTBmNTE0LnN2ZyIsImlkIjoiTllqdUUiLCJtYXJnaW4iOnsidG9wIjp0cnVlLCJib3R0b20iOnRydWV9LCJjYXJkIjoiZGlhZ3JhbSJ9)
如果是实现接口，则正常打印
```java
@Slf4j
@Configuration
public class MyConfig2 implements InitializingBean, ApplicationContextAware {
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) {
        log.info("注入 ApplicationContext");
    }


    @Bean
    public BeanFactoryPostProcessor processor1() {
        return processor -> log.info("执行 processor1");
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        log.info("初始化");
    }
}
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1701092771036-d317382c-fd89-42d8-b66b-fee054b2101e.png#averageHue=%232c2e31&clientId=uc8f98469-d25d-4&from=paste&height=279&id=ue1d629dd&originHeight=558&originWidth=2822&originalType=binary&ratio=2&rotation=0&showTitle=false&size=291306&status=done&style=none&taskId=u4ff32464-8bca-4efe-b137-8263af1536c&title=&width=1411)

## 3.5 Bean 的初始化和销毁
初始化和销毁 Bean 的实现有三种：

1.  依赖于后置处理器提供的拓展功能
2.  相关接口的功能
3.  使用 @Bean 注解中的属性进行指定

当同时存在以上三种方式时，它们的执行顺序也将按照上述顺序进行执行。
```java

@SpringBootApplication
public class A07Application {
    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(A07Application.class, args);
        context.close();
    }

    @Bean(initMethod = "init3")
    public Bean1 bean1() {
        return new Bean1();
    }

    @Bean(destroyMethod = "destroy3")
    public Bean2 bean2() {
        return new Bean2();
    }
}

//-
@Slf4j
public class Bean1 implements InitializingBean {
    @PostConstruct
    public void init() {
        log.info("初始化1");
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        log.info("初始化2");
    }

    public void init3() {
        log.info("初始化3");
    }
}

//-

@Slf4j
public class Bean2 implements DisposableBean {
    @PreDestroy
    public void destroy1() {
        log.info("销毁1");
    }

    @Override
    public void destroy() throws Exception {
        log.info("销毁2");
    }

    public void destroy3() {
        log.info("销毁3");
    }
}
```
运行结果![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1701096282858-6b8c7db3-72a3-439f-b9a1-1dda420fb9bb.png#averageHue=%2323272a&clientId=u355306f6-8f8d-4&from=paste&height=463&id=u94e74798&originHeight=926&originWidth=2776&originalType=binary&ratio=2&rotation=0&showTitle=false&size=458122&status=done&style=none&taskId=u5f916a70-4a21-4ee5-8dc3-7f417cbe673&title=&width=1388)
# `Scope` 作用域
## `Scope` 类型
Scope 用于指定 Bean 的作用范围，有如下五个取值：
> - singleton：单例（默认值）。容器启动时创建（未设置延迟），容器关闭时销毁
> - prototype：多例。每次使用时创建，不会自动销毁，需要调用 `DefaultListableBeanFactory#destroyBean() ` 进行销毁
> - request：作用于 Web 应用的请求范围。每次请求用到此 Bean 时创建，请求结束时销毁
> - session：作用于 Web 应用的会话范围。每个会话用到此 Bean 时创建，会话结束时销毁
> - application：作用于 Web 应用的 ServletContext。Web 容器用到此 Bean 时创建，容器关闭时销毁

## `Scope` 失效的解决办法
>  失效原因一：单例里面注入多例
> 原因：在单例里面注入多例 bean 时，只在单例创建的时候注入了一个对象，所以多例没有生效。
> 解决办法：（推迟其他 `Scope Bean`的获取）
> 1.  单例中注入多例 bean 时，使用代理。如加 在 autowired 中使用`@Lazy` 或者在 Component 中使用 代理。
> 2. 使用 `ObjectFactory<T>`
> 3. 使用 `ApplicationContext`
> 

```java
//- 方法一
@Component
@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class A {
}

//- 方法二
@Component
@Getter
public class E {
    @Lazy
    @Autowired
    private A a;
}

//- 方法三
@Component
public class E {

    @Resource
    private ObjectFactory<A> f;

    public A getA() {
        return f.getObject();
    }
}

//- 方法四
@Component
public class E {
    @Resource
    private ApplicationContext applicationContext;

    public A getA() {
        return applicationContext.getBean(A.class);
    }
}
```
```java
@Component
@Getter
public class E {

    @Autowired
    private A a;
}

//-
@Component
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class A {
}

//-
@SpringBootApplication
@Slf4j
public class A08Application {
    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(A08Application.class, args);
        E e = context.getBean(E.class);
        log.info("{}", e.getClass());
        log.info("a = {}", e.getA());
        log.info("a = {}", e.getA());
        log.info("a = {}", e.getA());
        context.close();
    }

}
```
运行发现注入了同一个对象。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1701177313088-bc7601c6-60fa-42de-af82-38ee7bee4a28.png#averageHue=%23252a2d&clientId=u355306f6-8f8d-4&from=paste&height=336&id=ue410fdfd&originHeight=672&originWidth=2836&originalType=binary&ratio=2&rotation=0&showTitle=false&size=434931&status=done&style=none&taskId=u752219e4-ed6c-4e96-a932-d9a6b13f87f&title=&width=1418)

# `Aop`

## `aspectjc`编译器增强
> 静态编译代理

```java

@SpringBootApplication
public class AspectAjcApplication {

    private static final Logger log = LoggerFactory.getLogger(AspectAjcApplication.class);

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(AspectAjcApplication.class, args);
        MyService service = context.getBean(MyService.class);

        log.info("service class: {}", service.getClass());
        service.foo();

    }

}

//- 
/**
 * 没有 使用 @Component spring 管理
 */
@Aspect
public class MyAspect {

    @Before("execution(* com.example.aspect_ajc.MyService.foo())")
    public void before() {
        System.out.println("before()");
    }
}

//-
@Service
public class MyService {

    public void foo() {
        System.out.println("foo()");
    }
}

```
> 注意需要加入 `spring-boot-starter-aop`依赖以及 `aspectj-maven-plugin`插件，且该插件 2023-11-28 最多只能编译到 jdk16 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.7.8</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.example</groupId>
    <artifactId>aspect_01</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>aspect_01</name>
    <description>aspect_01</description>
    <properties>
        <java.version>17</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-aop</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.codehaus.mojo</groupId>
                <artifactId>aspectj-maven-plugin</artifactId>
                <version>1.14.0</version>
                <configuration>
                    <complianceLevel>1.8</complianceLevel>
                    <source>8</source>
                    <target>8</target>
                    <showWeaveInfo>true</showWeaveInfo>
                    <verbose>true</verbose>
                    <Xlint>ignore</Xlint>
                    <encoding>UTF-8</encoding>
                </configuration>
                <executions>
                    <execution>
                        <goals>
                            <!-- use this goal to weave all your main classes -->
                            <goal>compile</goal>
                            <!-- use this goal to weave all your test classes -->
                            <goal>test-compile</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.11.0</version>
                <configuration>
                    <source>8</source>
                    <target>8</target>
                </configuration>
            </plugin>

            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <image>
                        <builder>paketobuildpacks/builder-jammy-base:latest</builder>
                    </image>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>

```
```java
//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.aspect_ajc;

import org.springframework.stereotype.Service;

@Service
public class MyService {
    public MyService() {
    }

    public void foo() {
        MyAspect.aspectOf().before();
        System.out.println("foo()");
    }
}

```

## `agent` 增强
> 运行时增强，需要了解 `SPI`技术，或者读一下[Java Agent (JVM Instrumentation 机制) ](https://cloud.tencent.com/developer/article/1813421) ，如果想了解 agent 的原理可以使用阿里的 `arthas`反编译 指定类查看增强后的代码。

```java

@SpringBootApplication
public class AspectAgentApplication {

    private static final Logger log = LoggerFactory.getLogger(AspectAgentApplication.class);

    public static void main(String[] args) {
//        ConfigurableApplicationContext context = SpringApplication.run(AspectAgentApplication.class, args);
//        MyService service = context.getBean(MyService.class);
//
//        log.info("service class: {}", service.getClass());
//        service.foo();

        new MyService().foo();

    }

}

//-

/**
 * 没有 使用 @Component spring 管理
 */
@Aspect
public class MyAspect {

    @Before("execution(* com.example.aspect_agent.MyService.*())")
    public void before() {
        System.out.println("before()");
    }
}


//-

@Service
public class MyService {

    public void foo() {
        System.out.println("foo()");
        bar();
    }


    public void bar() {
        System.out.println("bar()");
    }
}

//- aop.xml
<aspectj>
    <aspects>
        <!--    切面类全限定类名    -->
        <aspect name="com.example.aspect_agent.MyAspect"/>
        <weaver options="-verbose -showWeaveInfo">
            <!--      被增强方法所在类的全限定类名      -->
            <include within="com.example.aspect_agent.MyService"/>
            <!--    切面类全限定类名    -->
            <include within="com.example.aspect_agent.MyAspect"/>
        </weaver>
    </aspects>
</aspectj>

//- pom.xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.7.8</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.example</groupId>
    <artifactId>aspect_agent</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>aspect_agent</name>
    <description>aspect_agent</description>
    <properties>
        <java.version>17</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-aop</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.11.0</version>
                <configuration>
                    <source>17</source>
                    <target>17</target>
                </configuration>
            </plugin>

            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <image>
                        <builder>paketobuildpacks/builder-jammy-base:latest</builder>
                    </image>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>

```
> 运行前确认 `agent` 的路径，并把 jar 包路径添加到启动类配置中的 `vmoptions`(不同版本的 ide 可能有所差别，可以谷歌) 
> `-javaagent:/Users/xx/.m2/repository/org/aspectj/aspectjweaver/1.9.7/aspectjweaver-1.9.7.jar ` 
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1701182460356-d0a9245a-d719-4f5d-9acc-b09a1b194ca4.png#averageHue=%23070707&clientId=u355306f6-8f8d-4&from=paste&height=178&id=zCysJ&originHeight=356&originWidth=1070&originalType=binary&ratio=2&rotation=0&showTitle=false&size=63076&status=done&style=none&taskId=u45b54eaf-eee6-42fd-82b6-bf98931d2c9&title=&width=535)
> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1701182604723-bee70498-6a69-4e7d-8e02-8e56a58bcb03.png#averageHue=%232d2f33&clientId=u355306f6-8f8d-4&from=paste&height=807&id=wuojt&originHeight=1614&originWidth=2270&originalType=binary&ratio=2&rotation=0&showTitle=false&size=600100&status=done&style=none&taskId=u70c0d8b5-8122-463f-bf31-82078177361&title=&width=1135)

## `jdk`代理
```java
package com.example.proxy;

import java.lang.reflect.Proxy;

public class JdkProxyDemo {
    interface Foo {
        void foo();
    }

    static final class Target implements Foo {
        @Override
        public void foo() {
            System.out.println("target foo");
        }
    }

    public static void main(String[] args) {
        // 目标对象
        Target target = new Target();

        // 用来加载在运行期间动态生成的字节码
        ClassLoader classLoader = JdkProxyDemo.class.getClassLoader();
        Foo proxy = (Foo) Proxy.newProxyInstance(classLoader, new Class[]{Foo.class}, (p, method, params) -> {
            System.out.println("before...");
            // 目标.方法(参数) --> 方法.invoke(目标, 参数)
            Object result = method.invoke(target, params);
            System.out.println("after...");
            // 也返回目标方法执行的结果
            return result;
        });

        proxy.foo();
    }
}
```
> 1. 代理对象和目标对象是兄弟关系，都实现了相同的接口，因此不能将代理对象强转成目标对象类型；
> 2. 代理类与目标类之间没有继承关系，因此目标类可以被 `final` 修饰。


## `cglib`代理

```java
package com.example.proxy;

import org.springframework.cglib.proxy.Enhancer;
import org.springframework.cglib.proxy.MethodInterceptor;

public class CglibProxyDemo {
    static class Target {
        public void foo() {
            System.out.println("target foo");
        }
    }

    public static void main(String[] params) {
        Target target = new Target();

        Target proxy = (Target) Enhancer.create(Target.class, (MethodInterceptor) (obj, method, args, methodProxy) -> {
            System.out.println("before...");
            // 用方法反射调用目标
//            Object result = method.invoke(target, args);
            // 内部没使用反射，需要目标（spring 的选择）
//            Object result = methodProxy.invoke(target, args);
			// 内部没使用反射，需要代理
            Object result = methodProxy.invokeSuper(obj, args);
            System.out.println("after...");
            return result;
        });

        proxy.foo();
    }
}

```
> - 与 `JDK` 动态代理相比，`CGLib` 动态代理无需实现接口
> - 代理对象和目标对象是父子关系，也就是说代理类继承了目标类
> - 由于代理类继承了目标类，因此目标类不能被 final 修饰，否则将出现以下异常信息：
> 
`java.lang.IllegalArgumentException: Cannot subclass final class xx.CglibProxyDemo$Target `


# 代理原理
> 先学会用，后面再补吧～

## `JDK`
`Jdk`代理的最简单模拟， 由前文可知 `JDK`动态代理需要实现接口，所以基于此，进行最简单的模拟。
```java
package com.example.proxy;

public class Jdk {

    interface Foo {
        void foo();
    }


    static class Target implements Foo {

        @Override
        public void foo() {
            System.out.println("foo");
        }
    }

    // 代理类
    static class $Proxy0 implements Foo {

        @Override
        public void foo() {
            // 1. 功能增强
            System.out.println("before");
            // 2. 调用目标
            new Target().foo();
        }
    }

    public static void main(String[] args) {
        Foo f = new $Proxy0();
        f.foo();
    }
}

```
虽然简单实现了代理，但是目前增强是固定的，但是在实际应用中，使用到代理类，方法是不可能固定的，所以接下来进行优化一下。使用抽象类+模版方法设置代理的执行逻辑。
```java
package com.example.proxy;

public class Jdk {

    interface Foo {
        void foo();
    }



    static abstract class InvokeHandler {
        abstract Object invoke();
    }

    // 代理类
    static class $Proxy0 implements Foo {

        private final InvokeHandler invokeHandler;

        $Proxy0(InvokeHandler invokeHandler) {
            this.invokeHandler = invokeHandler;
        }

        @Override
        public void foo() {
            // 1. 功能增强
            System.out.println("before");
            // 2. 调用目标
            invokeHandler.invoke();
        }
    }
    

    public static void main(String[] args) {
        Foo f = new $Proxy0(new InvokeHandler() {
            @Override
            Object invoke() {
                System.out.println(">>>>>>>> foo");
                return null;
            }
        });
        f.foo();
    }
}

```
至此，方法就是可以不再固定。但是很显然，代理的对象不可能永远只有一个方法，所以想办法动态设置。
```java
package com.example.proxy;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class Jdk {

    interface Foo {
        void foo() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException;

        void bar() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException;
    }



    static abstract class InvokeHandler {
        abstract Object invoke(Method method, Object[] params) throws InvocationTargetException, IllegalAccessException;
    }

    // 代理类
    static class $Proxy0 implements Foo {

        private final InvokeHandler invokeHandler;

        $Proxy0(InvokeHandler invokeHandler) {
            this.invokeHandler = invokeHandler;
        }

        @Override
        public void foo() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
            // 1. 功能增强
            System.out.println("before");
            // 2. 调用目标
            invokeHandler.invoke(Foo.class.getMethod("foo"), new Object[0]);
        }

        @Override
        public void bar() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
            // 1. 功能增强
            System.out.println("before");
            // 2. 调用目标
            invokeHandler.invoke(Foo.class.getMethod("bar"), new Object[0]);
        }
    }

    static class Target implements Foo {
        @Override
        public void foo() {
            System.out.println("target foo");
        }

        @Override
        public void bar() {
            System.out.println("target bar");
        }
    }


    public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        Foo f = new $Proxy0(new InvokeHandler() {
            @Override
            Object invoke(Method method, Object[] params) throws InvocationTargetException, IllegalAccessException {
                // 传入代理对象
                method.invoke(new Target(), params);
                return null;
            }

        });
        f.foo();
        f.bar();
    }
}

/**
运行结果
before
target foo
before
target bar
**/

```
到这里，可以发现，多方法的代理对象也可以正常执行。但是如果执行方法有值返回呢，这个也简单，小修改一波。
```java
package com.example.proxy;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class Jdk {

    interface Foo {
        Object foo() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException;

        Object bar() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException;
    }



    static abstract class InvokeHandler {
        abstract Object invoke(Method method, Object[] params) throws InvocationTargetException, IllegalAccessException;
    }

    // 代理类
    static class $Proxy0 implements Foo {

        private final InvokeHandler invokeHandler;

        $Proxy0(InvokeHandler invokeHandler) {
            this.invokeHandler = invokeHandler;
        }

        @Override
        public Object foo() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
            // 1. 功能增强
            System.out.println("before");
            // 2. 调用目标
            return invokeHandler.invoke(Foo.class.getMethod("foo"), new Object[0]);
        }

        @Override
        public Object bar() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
            // 1. 功能增强
            System.out.println("before");
            // 2. 调用目标
            return invokeHandler.invoke(Foo.class.getMethod("bar"), new Object[0]);
        }
    }

    static class Target implements Foo {
        @Override
        public Integer foo() {
            System.out.println("target foo");
            return 1;
        }

        @Override
        public String  bar() {
            System.out.println("target bar");
            return "hello";
        }
    }


    public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        Foo f = new $Proxy0(new InvokeHandler() {
            @Override
            Object invoke(Method method, Object[] params) throws InvocationTargetException, IllegalAccessException {
                // 传入代理对象
                return method.invoke(new Target(), params);
            }

        });
        System.out.println(f.foo());
        System.out.println(f.bar());
    }
}

/**
运行结果
before
target foo
1
before
target bar
hello

**/
```
> 在源码实现中，方法还可以被缓存复用，不需要每次都重新创建。

```java
package com.example.proxy;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

public class Jdk {

    interface Foo {
        Object foo() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException;

        Object bar() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException;
    }



    static abstract class InvokeHandler {
        abstract Object invoke(Method method, Object[] params) throws InvocationTargetException, IllegalAccessException;
    }

    // 代理类
    static class $Proxy0 implements Foo {

        private final InvokeHandler invokeHandler;

        private final Map<String, Method> cache = new HashMap<>();

        $Proxy0(InvokeHandler invokeHandler) {
            this.invokeHandler = invokeHandler;
        }

        @Override
        public Object foo() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
            // 1. 功能增强
            System.out.println("before");
            // 2. 调用目标
            Method foo = cache.getOrDefault("foo", null);
            if(foo == null) {
                foo = Foo.class.getMethod("foo");
                System.out.println(">>>>>> 新创建方法");
                cache.put("foo", foo);
            }

            return invokeHandler.invoke(foo, new Object[0]);
        }

        @Override
        public Object bar() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
            // 1. 功能增强
            System.out.println("before");
            // 2. 调用目标
            Method bar = cache.getOrDefault("bar", null);
            if(bar == null) {
                bar = Foo.class.getMethod("foo");
                System.out.println(">>>>>> 新创建方法");
                cache.put("bar", bar);
            }
            return invokeHandler.invoke(bar, new Object[0]);
        }
    }

    static class Target implements Foo {
        @Override
        public Integer foo() {
            System.out.println("target foo");
            return 1;
        }

        @Override
        public String  bar() {
            System.out.println("target bar");
            return "hello";
        }
    }


    public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        Foo f = new $Proxy0(new InvokeHandler() {
            @Override
            Object invoke(Method method, Object[] params) throws InvocationTargetException, IllegalAccessException {
                // 传入代理对象
                return method.invoke(new Target(), params);
            }

        });
        System.out.println(f.foo());
        System.out.println(f.bar());
        System.out.println(f.foo());
        System.out.println(f.bar());
    }
}

/**
before
>>>>>> 新创建方法
target foo
1
before
>>>>>> 新创建方法
target foo
1
before
target foo
1
before
target foo
1
**/
```
到此，代理方法只会被寻找一次。
> JDK 动态代理生成的代理类是以字节码的形式存在的，并不存在所谓的 .java 文件，但也不是说就没办法看到生成的代理类信息了。不过可以使用 `arthas`反编译，看到字节码。

比如：
```java
package com.example.proxy;

import java.io.IOException;
import java.lang.reflect.Proxy;

public class Jdk1 {
    interface Foo {
        void foo();
    }

    static final class Target implements Foo {
        @Override
        public void foo() {
            System.out.println("target foo");
        }
    }

    public static void main(String[] args) throws IOException {
        // 原始对象
        Target target = new Target();

        // 用来加载在运行期间动态生成的字节码
        ClassLoader classLoader = Jdk1.class.getClassLoader();
        Foo proxy = (Foo) Proxy.newProxyInstance(classLoader, new Class[]{Foo.class}, (p, method, params) -> {
            System.out.println("before...");
            // 目标.方法(参数) --> 方法.invoke(目标, 参数)
            Object result = method.invoke(target, params);
            System.out.println("after...");
            // 也返回目标方法执行的结果
            return result;
        });

        // 打印代理类的全限定类名
        System.out.println(proxy.getClass());

        proxy.foo();

        // 只要不在控制台上输入并回车，程序就不会终端
        System.in.read();
    }


}

```
打印的结果是：
```java
class com.example.proxy.$Proxy0
before...
target foo
after...
```
> arthas 反编译的结果是：

```java
[arthas@60054]$ jad com.example.proxy.$Proxy0

ClassLoader:
+-jdk.internal.loader.ClassLoaders$AppClassLoader@251a69d7
  +-jdk.internal.loader.ClassLoaders$PlatformClassLoader@17747fbe

Location:

/*
 * Decompiled with CFR.
 *
 * Could not load the following classes:
 *  com.example.proxy.Jdk1$Foo
 */
package com.example.proxy;

import com.example.proxy.Jdk1;
import java.lang.invoke.MethodHandles;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.lang.reflect.UndeclaredThrowableException;

final class $Proxy0
extends Proxy
implements Jdk1.Foo {
    private static final Method m0;
    private static final Method m1;
    private static final Method m2;
    private static final Method m3;

    private static MethodHandles.Lookup proxyClassLookup(MethodHandles.Lookup lookup) throws IllegalAccessException {
        if (lookup.lookupClass() == Proxy.class && lookup.hasFullPrivilegeAccess()) {
            return MethodHandles.lookup();
        }
        throw new IllegalAccessException(lookup.toString());
    }

    public $Proxy0(InvocationHandler invocationHandler) {
        super(invocationHandler);
    }

    static {
        try {
            m0 = Class.forName("java.lang.Object").getMethod("hashCode", new Class[0]);
            m1 = Class.forName("java.lang.Object").getMethod("equals", Class.forName("java.lang.Object"));
            m2 = Class.forName("java.lang.Object").getMethod("toString", new Class[0]);
            m3 = Class.forName("com.example.proxy.Jdk1$Foo").getMethod("foo", new Class[0]);
            return;
        }
        catch (NoSuchMethodException noSuchMethodException) {
            throw new NoSuchMethodError(noSuchMethodException.getMessage());
        }
        catch (ClassNotFoundException classNotFoundException) {
            throw new NoClassDefFoundError(classNotFoundException.getMessage());
        }
    }

    public final void foo() {
        try {
            this.h.invoke(this, m3, null);
            return;
        }
        catch (Error | RuntimeException throwable) {
            throw throwable;
        }
        catch (Throwable throwable) {
            throw new UndeclaredThrowableException(throwable);
        }
    }

    

    public final boolean equals(Object object) {
        try {
            return (Boolean)this.h.invoke(this, m1, new Object[]{object});
        }
        catch (Error | RuntimeException throwable) {
            throw throwable;
        }
        catch (Throwable throwable) {
            throw new UndeclaredThrowableException(throwable);
        }
    }

    public final String toString() {
        try {
            return (String)this.h.invoke(this, m2, null);
        }
        catch (Error | RuntimeException throwable) {
            throw throwable;
        }
        catch (Throwable throwable) {
            throw new UndeclaredThrowableException(throwable);
        }
    }

    public final int hashCode() {
        try {
            return (Integer)this.h.invoke(this, m0, null);
        }
        catch (Error | RuntimeException throwable) {
            throw throwable;
        }
        catch (Throwable throwable) {
            throw new UndeclaredThrowableException(throwable);
        }
    }

}

```
##  `CGlib`
> `cglib` 代理类继承目标对象。

```java
public class Target {
    public void save() {
        System.out.println("0");
    }

    public void save(int i) {
        System.out.println(i);
    }

    public void save(long l) {
        System.out.println(l);
    }
}

//- cglib 代理模拟
public class Proxy extends Target{


    private  MethodInterceptor methodInterceptor;

    public void setMethodInterceptor(MethodInterceptor methodInterceptor) {
        this.methodInterceptor = methodInterceptor;
    }


    private static final Method save0;
    private static final Method save1;
    private static final Method save2;

    static {
        try {
            save0 = Target.class.getMethod("save");
            save1 = Target.class.getMethod("save", int.class);
            save2 = Target.class.getMethod("save", long.class);
        } catch (NoSuchMethodException e) {
            throw new RuntimeException(e);
        }
    }



    @Override
    public void save()  {
        try {
            methodInterceptor.intercept(this, save0, new Object[0], null);
        } catch (Throwable e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void save(int i) {
        try {
            methodInterceptor.intercept(this, save1, new Object[]{i}, null);
        } catch (Throwable e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void save(long l) {
        try {
            methodInterceptor.intercept(this, save2, new Object[]{l}, null);
        } catch (Throwable e) {
            throw new RuntimeException(e);
        }
    }
}



//- 测试类
public class ProxyTest {

    public static void main(String[] args) {
        Target target = new Target();

        Proxy proxy = new Proxy();
        proxy.setMethodInterceptor((obj, method, args1, proxy1) -> {
            System.out.println("before----");
            return method.invoke(target, args1);
        });

        proxy.save();
        proxy.save(1);
        proxy.save(2L);
    }
}


```

> `methodProxy` 不经过反射调用方法的原理

在在上述 Proxy 类中，重写了父类中的方法，并在重写的方法中调用了 intercept() 方法，重写的这些方法相当于是带增强功能的方法。
在 JDK 的动态代理中，使用反射对方法进行调用，而在 CGLib 动态代理中，可以使用 `intercept()` 方法中 `MethodProxy` 类型的参数实现不经过反射来调用方法。
接收的 ` MethodProxy ` 类型的参数可以像 `Method` 类型的参数一样，在静态代码块中被实例化。
```java

public class Proxy extends Target{


    private  MethodInterceptor methodInterceptor;

    public void setMethodInterceptor(MethodInterceptor methodInterceptor) {
        this.methodInterceptor = methodInterceptor;
    }


    static Method save0;
    static Method save1;
    static Method save2;
    static MethodProxy save0Proxy;
    static MethodProxy save1Proxy;
    static MethodProxy save2Proxy;

    static {
        try {
            save0 = Target.class.getMethod("save");
            save1 = Target.class.getMethod("save", int.class);
            save2 = Target.class.getMethod("save", long.class);

            save0Proxy = MethodProxy.create(Target.class, Proxy.class, "()V", "save", "saveSuper");
            save1Proxy = MethodProxy.create(Target.class, Proxy.class, "(I)V", "save", "saveSuper");
            save2Proxy = MethodProxy.create(Target.class, Proxy.class, "(J)V", "save", "saveSuper");
        } catch (NoSuchMethodException e) {
            throw new NoSuchMethodError(e.getMessage());
        }

    }


    // >>>>>>>>>>>>>>>>>>>>>>>> 带原始功能的方法
    public void saveSuper() {
        super.save();
    }

    public void saveSuper(int i) {
        super.save(i);
    }

    public void saveSuper(long i) {
        super.save(i);
    }


    // >>>>>>>>>>>>>>>>>>>>>>>> 带增强功能的方法
    @Override
    public void save() {
        try {
            methodInterceptor.intercept(this, save0, new Object[0], save0Proxy);
        } catch (Throwable e) {
            throw new UndeclaredThrowableException(e);
        }
    }


    @Override
    public void save(int i) {
        try {
            methodInterceptor.intercept(this, save1, new Object[]{i}, save1Proxy);
        } catch (Throwable e) {
            throw new UndeclaredThrowableException(e);
        }
    }

    @Override
    public void save(long i) {
        try {
            methodInterceptor.intercept(this, save2, new Object[]{i}, save2Proxy);
        } catch (Throwable e) {
            throw new UndeclaredThrowableException(e);
        }
    }
}


//- 测试类
public class ProxyTest {

    public static void main(String[] args) {
        Target target = new Target();

        Proxy proxy = new Proxy();
        proxy.setMethodInterceptor((obj, method, args1, methodProxy) -> {
            System.out.println("before----");
//            return method.invoke(target, args1);
//            return methodProxy.invoke(target, args1);  // 内部无反射调用 结合目标对象使用
            return methodProxy.invokeSuper(obj, args1); // 内部无反射调用， 结合代理对象使用
        });

        proxy.save();
        proxy.save(1);
        proxy.save(2L);
    }
}
 
```

### `MethodProxy`原理
> 其内部是通过一个 `FastClass`+ 方法签名实现

####  模拟 结合目标对象使用
```java
Target target = new Target();

Target proxy = (Target) Enhancer.create(Target.class, (MethodInterceptor) (obj, method, args, methodProxy) -> {
    System.out.println("before...");
    // 内部没使用反射，需要目标（spring 的选择）
    Object result = methodProxy.invoke(target, args);
    System.out.println("after...");
    return result;
});
```
```java
package com.example.proxy;

import org.springframework.cglib.core.Signature;

public class TargetFastClass {

    static Signature s0 = new Signature("save", "()V");
    static Signature s1 = new Signature("save", "(I)V");
    static Signature s2 = new Signature("save", "(J)V");

    /**
     * <p>获取目标方法的编号</p>
     * <p>
     * Target 目标类中的方法：
     * save()             0
     * save(int)          1
     * save(long)         2
     * </p>
     *
     * @param signature 包含方法名称、参数返回值
     * @return 方法编号
     */
    public int getIndex(Signature signature) {
        if (s0.equals(signature)) {
            return 0;
        }
        if (s1.equals(signature)) {
            return 1;
        }
        if (s2.equals(signature)) {
            return 2;
        }
        return -1;
    }

    /**
     * 根据 getIndex() 方法返回的方法编号正常调用目标对象方法
     *
     * @param index       方法编号
     * @param target       目标对象
     * @param args 调用目标对象方法需要的参数
     * @return 方法返回结果
     */
    public Object invoke(int index, Object target, Object[] args) {
        if (index == 0) {
            ((Target) target).save();
            return null;
        }
        if (index == 1) {
            ((Target) target).save((int) args[0]);
            return null;
        }
        if (index == 2) {
            ((Target) target).save((long) args[0]);
            return null;
        }
        throw new RuntimeException("无此方法");
    }

    public static void main(String[] args) {
        TargetFastClass fastClass = new TargetFastClass();
        int index = fastClass.getIndex(new Signature("save", "()V"));
        fastClass.invoke(index, new Target(), new Object[0]);

        index = fastClass.getIndex(new Signature("save", "(J)V"));
        fastClass.invoke(index, new Target(), new Object[]{2L});
    }
}


```

#### 模拟结合 代理对象使用
```java
Target proxy = (Target) Enhancer.create(Target.class, (MethodInterceptor) (obj, method, args, methodProxy) -> {
    System.out.println("before...");
    // 内部没使用反射，需要代理
    Object result = methodProxy.invokeSuper(obj, args);
    System.out.println("after...");
    return result;
});
```
```java
package com.example.proxy;


import org.springframework.cglib.core.Signature;

public class ProxyFastClass {
    static Signature s0 = new Signature("saveSuper", "()V");
    static Signature s1 = new Signature("saveSuper", "(I)V");
    static Signature s2 = new Signature("saveSuper", "(J)V");

    /**
     * <p>获取代理方法的编号</p>
     * <p>
     * Proxy 代理类中的方法：
     * saveSuper()             0
     * saveSuper(int)          1
     * saveSuper(long)         2
     * </p>
     *
     * @param signature 包含方法名称、参数返回值
     * @return 方法编号
     */
    public int getIndex(Signature signature) {
        if (s0.equals(signature)) {
            return 0;
        }
        if (s1.equals(signature)) {
            return 1;
        }
        if (s2.equals(signature)) {
            return 2;
        }
        return -1;
    }

    /**
     * 根据 getIndex() 方法返回的方法编号正常调用代理对象中带原始功能的方法
     *
     * @param index 方法编号
     * @param proxy 代理对象
     * @param args  调用方法需要的参数
     * @return 方法返回结果
     */
    public Object invoke(int index, Object proxy, Object[] args) {
        if (index == 0) {
            ((Proxy) proxy).saveSuper();
            return null;
        }
        if (index == 1) {
            ((Proxy) proxy).saveSuper((int) args[0]);
            return null;
        }
        if (index == 2) {
            ((Proxy) proxy).saveSuper((long) args[0]);
            return null;
        }
        throw new RuntimeException("无此方法");
    }

    public static void main(String[] args) {
        ProxyFastClass fastClass = new ProxyFastClass();
        int index = fastClass.getIndex(new Signature("saveSuper", "()V"));
        fastClass.invoke(index, new Proxy(), new Object[0]);
        int index1 = fastClass.getIndex(new Signature("saveSuper", "(J)V"));
        fastClass.invoke(index1, new Proxy(), new Object[]{2L});
    }
}


```

# `Spring`选择代理
## `advisor`
切面有 `aspect` 和 `advisor` 两个概念，`aspect` 是多组通知（`advice`）和切点（`pointcut`）的组合，也是实际编码时使用的，`advisor` 则是更细粒度的切面，仅包含一个通知和切点，`aspect` 在生效之前会被拆解成多个 `advisor`。
> DefaultPointcutAdvisor 的继承关系

![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1701787561098-1d4b59b5-7016-4acb-b8d2-3599389968af.png#averageHue=%23344147&clientId=u6f347883-b080-4&from=paste&height=524&id=u1a336d14&originHeight=1048&originWidth=1202&originalType=binary&ratio=2&rotation=0&showTitle=false&size=84101&status=done&style=none&taskId=uc84630c4-00dd-4a44-93d0-fb7ac517d73&title=&width=601)

```java
package com.example.proxy;


import org.aopalliance.intercept.MethodInterceptor;
import org.springframework.aop.aspectj.AspectJExpressionPointcut;
import org.springframework.aop.framework.ProxyFactory;
import org.springframework.aop.support.DefaultPointcutAdvisor;

class MyAdvisor {

    public static void main(String[] args) {
        /*
         * 两个切面概念：
         *  aspect =
         *          通知 1 （advice） + 切点 1（pointcut）
         *          通知 2 （advice） + 切点 2（pointcut）
         *          通知 3 （advice） + 切点 3（pointcut）
         *          ...
         *
         * advisor = 更细粒度的切面，包含一个通知和切点
         * */

        // 1. 备好切点（根据 AspectJ 表达式进行匹配）
        AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
        pointcut.setExpression("execution(* foo())");
        // 2. 备好通知
        MethodInterceptor advice = invocation -> {
            System.out.println("before...");
            Object result = invocation.proceed();
            System.out.println("after...");
            return result;
        };
        // 3. 备好切面
        DefaultPointcutAdvisor advisor = new DefaultPointcutAdvisor(pointcut, advice);
        // 4. 创建代理
        Target1 target = new Target1();
        ProxyFactory factory = new ProxyFactory();
        factory.setTarget(target);
        factory.addAdvisor(advisor);

        I1 proxy = (I1) factory.getProxy();
        System.out.println(proxy.getClass());
        proxy.foo();
        proxy.bar();
    }

    interface I1 {
        void foo();

        void bar();
    }

    static class Target1 implements I1 {

        @Override
        public void foo() {
            System.out.println("target1 foo");
        }

        @Override
        public void bar() {
            System.out.println("target1 bar");
        }
    }

    static class Target2 {
        public void foo() {
            System.out.println("target2 foo");
        }

        public void bar() {
            System.out.println("target2 bar");
        }
    }


}

//-- pom.xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter</artifactId>
    </dependency>
  <dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjweaver</artifactId>
  </dependency>
</dependencies>

```
```shell
class com.example.proxy.MyAdvisor$Target1$$SpringCGLIB$$0
before...
target1 foo
after...
target1 bar
```
> `ProxyFactory` 的父类 `ProxyConfig` 中有个名为 `proxyTargetClass` 的布尔类型成员变量：
> 当 `proxyTargetClass == false`，并且目标对象所在类实现了接口时，将选择 JDK 动态代理；否则选择 CGLib 动态代理；
> 当 `proxyTargetClass == true`，总是选择 `CGLib` 动态代理。

上文中的 `target` 对象的所在类 `Targer1` 实现了 `I1` 接口，最终为什么依旧选择了 CGLib 动态代理作为代理类的创建方式呢？
这是因为并没有显式这是 target 对象的实现类，Spring 认为其并未实现接口。
设置 factory 对象的 interfaces 信息：
`factory.setInterfaces(target.getClass().getInterfaces());`
之后再运行 `main()`，控制台打印出：
```shell
class com.example.proxy.$Proxy0
before...
target1 foo
after...
target1 bar
```
此时选择的动态代理实现方式是 JDK 动态代理。

## 切点匹配

```java
package com.example.proxy;

import org.springframework.aop.aspectj.AspectJExpressionPointcut;
import org.springframework.transaction.annotation.Transactional;

public class MyPointCutMatch {
    public static void main(String[] args) throws NoSuchMethodException {
        AspectJExpressionPointcut pt1 = new AspectJExpressionPointcut();

        // 判断方法是否匹配
        pt1.setExpression("execution(* bar())");
        System.out.println(pt1.matches(T1.class.getMethod("foo"), T1.class));
        System.out.println(pt1.matches(T1.class.getMethod("bar"), T1.class));

        AspectJExpressionPointcut pt2 = new AspectJExpressionPointcut();

        // 判断注解是否匹配
        pt2.setExpression("@annotation(org.springframework.transaction.annotation.Transactional)");
        System.out.println(pt2.matches(T1.class.getMethod("foo"), T1.class));
        System.out.println(pt2.matches(T1.class.getMethod("bar"), T1.class));
    }

    static class T1 {
        @Transactional
        public void foo() {

        }

        public void bar() {

        }
    }

}

```

> Transactional 的实现

```java
package com.example.proxy;

import org.springframework.aop.support.StaticMethodMatcherPointcut;
import org.springframework.core.annotation.MergedAnnotations;
import org.springframework.lang.NonNull;
import org.springframework.lang.NonNullApi;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Method;

public class MyTransactional {
    public static void main(String[] args) throws NoSuchMethodException {

        StaticMethodMatcherPointcut pt3 = new StaticMethodMatcherPointcut() {
            @Override
            public boolean matches(Method method, Class<?> targetClass) {
                // 检查方法上是否添加了 @Transactional 注解
                MergedAnnotations annotations = MergedAnnotations.from(method);
                if (annotations.isPresent(Transactional.class)) {
                    return true;
                }
                // 检查类上或所实现的接口是否添加了 @Transactional 注解
                annotations = MergedAnnotations.from(targetClass, MergedAnnotations.SearchStrategy.TYPE_HIERARCHY);
                return annotations.isPresent(Transactional.class);
            }
        };

        System.out.println(pt3.matches(T1.class.getMethod("foo"), T1.class));
        System.out.println(pt3.matches(T1.class.getMethod("bar"), T1.class));
        System.out.println(pt3.matches(T2.class.getMethod("foo"), T2.class));
        System.out.println(pt3.matches(T3.class.getMethod("foo"), T3.class));
    }

    static class T1 {
        @Transactional
        public void foo() {

        }

        public void bar() {

        }
    }

    @Transactional
    static class T2 {
        public void foo() {

        }
    }

    @Transactional
    interface I3 {
        void foo();
    }

    static class T3 implements I3 {
        @Override
        public void foo() {

        }
    }
}

```
# 从 `@Aspect` 到 `Advisor`
## `AnnotationAwareAspectJAutoProxyCreator`
讲解之前，准备一下类：
> 两个目标类
> 一个使用 `@Aspect` 的高级切面
> 一个利用配置类实现的低级切面 `Advisor`

```java
static class Target1 {
    public void foo() {
        System.out.println("target1 foo");
    }
}

static class Target2 {
    public void bar() {
        System.out.println("target2 bar");
    }
}

/**
 * 高级切面
 */
@Aspect
static class Aspect1 {
    @Before("execution(* foo())")
    public void before() {
        System.out.println("aspect1 before...");
    }

    @After("execution(* foo())")
    public void after() {
        System.out.println("aspect1 after...");
    }
}

@Configuration
static class Config {
    /**
     * 低级切面，由一个切点和一个通知组成
     */
    @Bean
    public Advisor advisor3(MethodInterceptor advice3) {
        AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
        pointcut.setExpression("execution(* foo())");
        return new DefaultPointcutAdvisor(pointcut, advice3);
    }

    @Bean
    public MethodInterceptor advices() {
        return invocation -> {
            System.out.println("advice3 before...");
            Object result = invocation.proceed();
            System.out.println("advice3 after...");
            return result;
        };
    }
}
```
编写 `main()` 方法创建 `Spring` 容器，并添加必要的 `Bean`：
```java
public static void main(String[] args) {
    GenericApplicationContext context = new GenericApplicationContext();
    context.registerBean("aspect1", Aspect1.class);
    context.registerBean("config", Config.class);
    context.registerBean(ConfigurationClassPostProcessor.class);
    context.refresh();

    String[] names = context.getBeanDefinitionNames();
    for (String name : names) {
        System.out.println(name);
    }
}
```
打印如下信息：
```shell
aspect1
config
org.springframework.context.annotation.ConfigurationClassPostProcessor
advisor3
advices

```
> `Spring` 中存在一个名为 `AnnotationAwareAspectJAutoProxyCreator` 的 `Bean` 后置处理器，尽管它的名称中没有 `BeanPostProcessor` 的字样，但它确实是实现了 `BeanPostProcessor` 接口的。

`AnnotationAwareAspectJAutoProxyCreator` 有两个主要作用：

- 找到容器中所有的切面，针对高级切面，将其转换为低级切面；
- 根据切面信息，利用 `ProxyFactory` 创建代理对象。

`AnnotationAwareAspectJAutoProxyCreator` 实现了 `BeanPostProcessor`，可以在 `Bean` 生命周期中的一些阶段对 Bean 进行拓展。`AnnotationAwareAspectJAutoProxyCreator` 可以在 Bean 进行 依赖注入之前、`Bean` 初始化之后 对 `Bean` 进行拓展。
> 重点介绍 `AnnotationAwareAspectJAutoProxyCreator` 中的两个方法：

> `findEligibleAdvisors()`：位于父类 ` AbstractAdvisorAutoProxyCreator ` 中，用于找到符合条件的切面类。低级切面直接添加，高级切面转换为低级切面再添加。

### `findEligibleAdvisors()` 方法
> `findEligibleAdvisors()` 方法接收两个参数：
> `beanClass`：配合切面使用的目标类 `Class` 信息
> `beanName`：当前被代理的 `Bean` 的名称
> ⚠️`findEligibleAdvisors `是一个 `protected`方法，所以测试时需要包名一致 `org.springframework.aop.framework.autoproxy  `

修改 `main`
```java
    public static void main(String[] args) {
        GenericApplicationContext context = new GenericApplicationContext();
        context.registerBean("aspect1", Aspect1.class);
        context.registerBean("config", Config.class);
        context.registerBean(ConfigurationClassPostProcessor.class);
        context.registerBean(AnnotationAwareAspectJAutoProxyCreator.class);
        context.refresh();



        AnnotationAwareAspectJAutoProxyCreator creator = context.getBean(AnnotationAwareAspectJAutoProxyCreator.class);

        // 因为现在 target 类并没有被spring管理，所以第二个参数可以随便填
        List<Advisor> advisors = creator.findEligibleAdvisors(Target1.class, "target1");
        for (Advisor advisor : advisors) {
            System.out.println(advisor);
        }

    }
```
打印以下结果：
```shell
org.springframework.aop.interceptor.ExposeInvocationInterceptor.ADVISOR
org.springframework.aop.support.DefaultPointcutAdvisor: pointcut [AspectJExpressionPointcut: () execution(* foo())]; advice [org.springframework.aop.framework.autoproxy.Aspect2Advisor$Config$$Lambda$116/0x0000009801116cd8@5b799640]
InstantiationModelAwarePointcutAdvisor: expression [execution(* foo())]; advice method [public void org.springframework.aop.framework.autoproxy.Aspect2Advisor$Aspect1.before()]; perClauseKind=SINGLETON
InstantiationModelAwarePointcutAdvisor: expression [execution(* foo())]; advice method [public void org.springframework.aop.framework.autoproxy.Aspect2Advisor$Aspect1.after()]; perClauseKind=SINGLETON

```
打印出 4 个能配合 Target1 使用的切面信息，其中：

- 第一个切面 `ExposeInvocationInterceptor.ADVISOR` 是 `Spring` 为每个代理对象都会添加的切面；
- 第二个切面 `DefaultPointcutAdvisor` 是自行编写的低级切面；
- 第三个和第四个切面 `InstantiationModelAwarePointcutAdvisor` 是由高级切面转换得到的两个低级切面。

若按照 `creator.findEligibleAdvisors(Target2.class, "target2")` 的方式进行调用，控制台不会打印出任何信息，因为没有任何切面能够配合 `Target2` 使用。
### `wrapIfNecessary()` 方法
> `wrapIfNecessary() ` 方法内部调用了 `findEligibleAdvisors() ` 方法，若 `findEligibleAdvisors() ` 方法返回的集合不为空，则表示需要创建代理对象。
> 如果需要创建对象，`wrapIfNecessary() ` 方法返回的是代理对象，否则仍然是原对象。

`wrapIfNecessary() ` 方法接收三个参数：
> `bean`：原始 Bean 实例

> `beanName`：Bean 的名称

> `cacheKey`：用于元数据访问的缓存 key

```java
Object o1 = creator.wrapIfNecessary(new Target1(), "target1", "target1");
System.out.println(o1.getClass());
Object o2 = creator.wrapIfNecessary(new Target2(), "target2", "target2");
System.out.println(o2.getClass());

```
打印：
```shell
class org.springframework.aop.framework.autoproxy.Aspect2Advisor$Target1$$SpringCGLIB$$0
class org.springframework.aop.framework.autoproxy.Aspect2Advisor$Target2

```
`Target1 ` 对象是被代理的，而 `Target2` 依旧是原对象。

如果将 ` o1 ` 转换为 `Target1`，并调用 ` foo() ` 方法，`foo() ` 方法将被增强：
```java
if(o1 instanceof  Target1 t1) {
    t1.foo();
}
```
打印
```shell
advice3 before...
aspect1 before...
target1 foo
aspect1 after...
advice3 after...
```
### 切面的顺序控制
根据上述打印的信息可知，低级切面相比于高级切面先一步被执行，这个执行顺序是可以被控制的。
针对高级切面来说，可以在类上使用 ` @Order` 注解，比如：
在高级切面中，`@Order` 只有放在类上才生效，放在方法上不会生效。比如高级切面中有多个前置通知，这些前置通知对应的方法上使用 ` @Order ` 注解是无法生效的。

针对低级切面，需要设置 `advisor` 的 `order` 值，而不是向高级切面那样使用 `@Order` 注解，使用 `@Order ` 注解设置在 ` advisor3() ` 方法上是无用的：
```java
    /**
     * 高级切面
     */
    @Aspect
    @Order(1)
    static class Aspect1 {
        @Before("execution(* foo())")
        public void before() {
            System.out.println("aspect1 before...");
        }

        @After("execution(* foo())")
        public void after() {
            System.out.println("aspect1 after...");
        }
    }

    @Configuration
    static class Config {
        /**
         * 低级切面，由一个切点和一个通知组成
         */
        @Bean
        public Advisor advisor3(MethodInterceptor advice3) {
            AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
            pointcut.setExpression("execution(* foo())");
            DefaultPointcutAdvisor advisor = new DefaultPointcutAdvisor(pointcut, advice3);
            advisor.setOrder(0);
            return advisor;
        }

        @Bean
        public MethodInterceptor advices() {
            return invocation -> {
                System.out.println("advice3 before...");
                Object result = invocation.proceed();
                System.out.println("advice3 after...");
                return result;
            };
        }
    }
```
### 代理对象创建时机
使用 `AnnotationAwareAspectJAutoProxyCreator` Bean 后置处理器创建代理对象的时机有以下两个选择：

- Bean 的依赖注入之前
- Bean 初始化完成之后

这两个时机二选一，不会重复创建代理对象。
#### 无循环依赖时
```java
package com.example.proxy;

import jakarta.annotation.PostConstruct;
import org.aopalliance.intercept.MethodInterceptor;
import org.springframework.aop.Advisor;
import org.springframework.aop.aspectj.AspectJExpressionPointcut;
import org.springframework.aop.aspectj.annotation.AnnotationAwareAspectJAutoProxyCreator;
import org.springframework.aop.support.DefaultPointcutAdvisor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.CommonAnnotationBeanPostProcessor;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ConfigurationClassPostProcessor;
import org.springframework.context.support.GenericApplicationContext;

public class A17 {

    public static void main(String[] args) {
        GenericApplicationContext context = new GenericApplicationContext();
        context.registerBean(ConfigurationClassPostProcessor.class);
        context.registerBean(Config.class);
        context.refresh();
        context.close();
        // 创建 -> (*) 依赖注入 -> 初始化 (*)

    }

    @Configuration
    static class Config {
        /**
         * 解析 @AspectJ 注解，产生代理
         */
        @Bean
        public AnnotationAwareAspectJAutoProxyCreator annotationAwareAspectJAutoProxyCreator() {
            return new AnnotationAwareAspectJAutoProxyCreator();
        }

        /**
         * 解析 @Autowired
         */
        @Bean
        public AutowiredAnnotationBeanPostProcessor autowiredAnnotationBeanPostProcessor() {
            return new AutowiredAnnotationBeanPostProcessor();
        }

        /**
         * 解析 @PostConstruct
         */
        @Bean
        public CommonAnnotationBeanPostProcessor commonAnnotationBeanPostProcessor() {
            return new CommonAnnotationBeanPostProcessor();
        }

        @Bean
        public Advisor advisor(MethodInterceptor advice) {
            AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
            pointcut.setExpression("execution(* foo())");
            return new DefaultPointcutAdvisor(pointcut, advice);
        }

        @Bean
        public MethodInterceptor advice() {
            return invocation -> {
                System.out.println("before...");
                return invocation.proceed();
            };
        }

        @Bean
        public Bean1 bean1() {
            return new Bean1();
        }

        @Bean
        public Bean2 bean2() {
            return new Bean2();
        }
    }

    static class Bean1 {
        public void foo() {
        }

        public Bean1() {
            System.out.println("Bean1()");
        }

        @PostConstruct
        public void init() {
            System.out.println("Bean1 init()");
        }
    }

    static class Bean2 {
        public Bean2() {
            System.out.println("Bean2()");
        }

        @Autowired
        public void setBean1(Bean1 bean1) {
            System.out.println("Bean2 setBean1(bean1) class is: " + bean1.getClass());
        }

        @PostConstruct
        public void init() {
            System.out.println("Bean2 init()");
        }
    }

}

```
打印
表示为 bean1 创建了隐式代理。
此时代理对象在 Bean 初始化完成之后创建。
之后为 bean2 进行依赖注入时，注入的 bean1 是代理对象。

#### 有循环依赖
打印
首先进行 bean1 的实例化，然后进行 bean1 的依赖注入，但此时容器中并没有 bean2，因此需要进行 bean2 的实例化。
接下来进行 bean2 的依赖注入，向 bean2 中注入 bean1，注入的 bean1 应该是被增强的，即它的代理对象，因此创建 bean1 的代理对象后再完成 bean2 的依赖注入。
接着继续 bean2 的生命周期，完成 bean2 的初始化阶段，最后回到 bean1 的依赖注入阶段，向 bean1 中注入 bean2，最后完成 bean1 的初始化阶段。

### 总结
> 代理对象的创建时机：
> - 无循环依赖时，在 Bean 初始化阶段之后创建；
> - 有循环依赖时，在 Bean 实例化后、依赖注入之前创建，并将代理对象暂存于二级缓存。
> 
Bean 的依赖注入阶段和初始化阶段不应该被增强，仍应被施加于原始对象。


[@CSJerry(csjerry)](/csjerry) 日志打印不全，看不到代理的创建时机



# `SpringMVC`
## `DispatchServlet` 的初始化时机
可以使用 `loadOnStartup`控制，大于 0 在 `tomcat`启动时初始化，否则在请求到来时初始化。
```java
@Bean
public DispatcherServletRegistrationBean dispatcherServletRegistrationBean(DispatcherServlet dispatcherServlet) {
    DispatcherServletRegistrationBean registrationBean = new DispatcherServletRegistrationBean(dispatcherServlet, "/");
    registrationBean.setLoadOnStartup(1);
    return registrationBean;
}
```
## `DispatchServlet`初始化都做了哪些事情

逻辑在 `org.springframework.web.servlet.DispatcherServlet#onRefresh`中
```java

	/**
	 * This implementation calls {@link #initStrategies}.
	 */
	@Override
	protected void onRefresh(ApplicationContext context) {
		initStrategies(context);
	}

	/**
	 * Initialize the strategy objects that this servlet uses.
	 * <p>May be overridden in subclasses in order to initialize further strategy objects.
	 */
	protected void initStrategies(ApplicationContext context) {
		initMultipartResolver(context);
		initLocaleResolver(context);
		initThemeResolver(context);
		initHandlerMappings(context);
		initHandlerAdapters(context);
		initHandlerExceptionResolvers(context);
		initRequestToViewNameTranslator(context);
		initViewResolvers(context);
		initFlashMapManager(context);
	}
```

### `RequestMappingHandlerMapping`
`HandlerMapping`，即处理器映射器，用于建立请求路径与控制器方法的映射关系。
`RequestMappingHandlerMapping` 是 `HandlerMapping` 的一种实现，根据类名可知，它是通过 `@RequestMapping ` 注解来实现路径映射。
当 `Spring` 容器中没有 `HandlerMapping` 的实现时，尽管 `DispatcherServlet ` 在初始化时会添加一些默认的实现，但这些实现不会交由 `Spring ` 管理，而是作为 ` DispatcherServlet ` 的成员变量。
从 `Spring ` 容器中获取 `RequestMappingHandlerMapping`，再获取请求路径与映射器方法的映射关系，并根据给定请求获取控制器方法：
```java
public static void main(String[] args) throws Exception {
    AnnotationConfigServletWebServerApplicationContext context =
            new AnnotationConfigServletWebServerApplicationContext(WebConfig.class);
    // 解析 @RequestMapping 以及派生注解，在初始化时生成路径与控制器方法的映射关系
    RequestMappingHandlerMapping handlerMapping = context.getBean(RequestMappingHandlerMapping.class);
    // 获取映射结果
    Map<RequestMappingInfo, HandlerMethod> handlerMethods = handlerMapping.getHandlerMethods();
    handlerMethods.forEach((k, v) -> System.out.println(k + " = " + v));
    // 根据给定请求获取控制器方法，返回处理器执行链
    HandlerExecutionChain chain = handlerMapping.getHandler(new MockHttpServletRequest("GET", "/test1"));
    System.out.println(chain);
}
```
`getHandler() ` 方法返回的对象时处理器执行链，不仅包含映射器方法，还包含需要执行的拦截器信息。
## 
## 自定义参数解析器
> 假如经常需要使用到请求头中的 Token 信息，自定义 @Token 注解，使用该注解标记控制器方法的哪个参数来获取 Token 信息：

1. 自定义注解
```java
@Target(ElementType.PARAMETER)
@Retention(RetentionPolicy.RUNTIME)
public @interface Token {
}

```

2. 自定义参数解析
```java
public class TokenArgumentResolver implements HandlerMethodArgumentResolver {
    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        return parameter.getParameterAnnotation(Token.class) != null;
    }

    @Override
    public Object resolveArgument(MethodParameter parameter,
                                  ModelAndViewContainer mavContainer,
                                  NativeWebRequest webRequest,
                                  WebDataBinderFactory binderFactory) throws Exception {
        return webRequest.getHeader("token");
    }
}
```

3. 将参数解析器添加到 HandlerAdapter 中：
```java
@SpringBootApplication
@RestController
public class MvcApplication {

    @GetMapping("/hello")
    public String hello(@Token String t) {
        return t;
    }

    @Bean
    public RequestMappingHandlerAdapter myRequestMappingHandlerAdapter() {
        TokenArgumentResolver tokenArgumentResolver = new TokenArgumentResolver();
        RequestMappingHandlerAdapter adapter = new RequestMappingHandlerAdapter();
        adapter.setCustomArgumentResolvers(Collections.singletonList(tokenArgumentResolver));
        return adapter;
    }


    public static void main(String[] args) {
        SpringApplication.run(MvcApplication.class, args);
    }

}
```


## `MVC`的处理流程
当浏览器发送一个请求 [http://localhost:8080/hello](http://localhost:8080/hello) 后，请求到达服务器，其处理流程是：
### 服务器提供了 DispatcherServlet，它使用的是标准 Servlet 技术

   - 路径：默认映射路径为 /，即会匹配到所有请求 URL，可作为请求的统一入口，DispatcherServlet 也被称之为 前控制器。但也有例外：JSP 不会匹配到 DispatcherServlet
   - 其它有路径的 Servlet 匹配优先级也高于 DispatcherServlet
   - 创建：在 SpringBoot 中，由自动配置类 DispatcherServletAutoConfiguration 提供 DispatcherServlet 的 Bean
   - 初始化：DispatcherServlet 初始化时会优先到容器里寻找各种组件，作为它的成员变量
      1. HandlerMapping，初始化时记录映射关系
      2. HandlerAdapter，初始化时准备参数解析器、返回值处理器、消息转换器
      3. HandlerExceptionResolver，初始化时准备参数解析器、返回值处理器、消息转换器
      4. ViewResolver
### DispatcherServlet 利用 RequestMappingHandlerMapping 查找控制器方法
> 例如根据 /hello 路径找到被 @RequestMapping("/hello") 标记的控制器方法，控制器方法会被封装成 HandlerMethod 对象，并结合 匹配到的拦截器 一起返回给 DispatcherServlet。


> HandlerMethod 和 拦截器 合称为 HandlerExecutionChain（调用链）对象。


### DispatcherServlet 接下来会

1. 调用拦截器的 preHandle() 方法，返回一个布尔类型的值。若返回 true，则放行，进行后续调用，反之拦截请求，不进行后续调用；
2. RequestMappingHandlerAdapter 调用处理器方法，准备数据绑定工厂、模型工厂、ModelAndViewContainer、将 HandlerMethod 完善为 ServletInvocableHandlerMethod
   1. @ControllerAdvice 全局增强点 1️⃣：利用 @ModelAttribute 补充模型数据
   2. @ControllerAdvice 全局增强点 2️⃣：利用 @InitBinder 补充自定义类型转换器
   3. 使用 HandlerMethodArgumentResolver 准备参数
   4. @ControllerAdvice 全局增强点 3️⃣：利用 RequestBodyAdvice 接口对请求体增强 
   5.  调用 ServletInvocableHandlerMethod
   6. 使用 HandlerMethodReturnValueHandler 处理返回值
   7. @ControllerAdvice 全局增强点 4️⃣：利用 RequestBodyAdvice 对响应体增强
   8. 根据 ModelAndViewContainer 获取 ModelAndView
      1. 如果返回的 ModelAndView 为 null，不走第 4 步视图解析及渲染流程。例如返回值处理器调用了 HttpMessageConverter 将结果转换为 JSON，这时 ModelAndView 就为 null
      2. 如果返回的 ModelAndView 不为 null，会在第 4 步走视图解析及渲染流程
3. 调用拦截器的 postHandle() 方法
### 处理异常或视图渲染
如果 1~3 步中出现异常，使用 `ExceptionHandlerExceptionResolver` 处理异常流程
@ControllerAdvice 全局增强点 5️⃣：利用 @ExceptionHandler 进行统一异常处理
未出现异常时，进行视图解析及渲染流程
### 调用拦截器的 afterCompletion() 方法



# `ControllerAdvice`
`@ControllerAdvice` 注解是 `Spring3.2` 中新增的注解，学名是 `Controller ` 增强器，作用是给 `Controller` 控制器添加统一的操作或处理。
对于 `@ControllerAdvice`，我们比较熟知的用法是结合 `@ExceptionHandler` 用于全局异常的处理，但其作用不止于此。`ControllerAdvice` 拆开来就是 `Controller + Advice`，关于 `Advice`，在Spring的AOP中，是用来封装一个切面所有属性的，包括切入点和需要织入的切面逻辑。这里ControllerAdvice也可以这么理解，其抽象级别应该是用于对Controller进行切面环绕的，而具体的业务织入方式则是通过结合其他的注解来实现的。@ControllerAdvice是在类上声明的注解，其用法主要有三点：

1. 结合方法型注解@ExceptionHandler，用于捕获Controller中抛出的指定类型的异常，从而达到不同类型的异常区别处理的目的。
2. 结合方法型注解@InitBinder，用于request中自定义参数解析方式进行注册，从而达到自定义指定格式参数的目的。
3. 结合方法型注解@ModelAttribute，表示其注解的方法将会在目标Controller方法执行之前执行。

从上面的讲解可以看出，`@ControllerAdvice` 的用法基本是将其声明在某个 `bean` 上，然后在该 `bean` 的方法上使用其他的注解来指定不同的织入逻辑。不过这里 `@ControllerAdvice` 并不是使用 `AOP` 的方式来织入业务逻辑的，而是 `Spring` 内置对其各个逻辑的织入方式进行了内置支持。


# `SpringBoot`启动过程

## `SpringApplication`的构造方法
`Springboot`的主启动类为：
```java
@SpringBootApplication
public class BootApplication {

    public static void main(String[] args) {
        SpringApplication.run(BootApplication.class, args);
    }

}
```

其中 `SpringApplication#run()` 方法 调用的是如下静态方法：
```java
	/**
	 * Static helper that can be used to run a {@link SpringApplication} from the
	 * specified source using default settings.
	 * @param primarySource the primary source to load
	 * @param args the application arguments (usually passed from a Java main method)
	 * @return the running {@link ApplicationContext}
	 */
	public static ConfigurableApplicationContext run(Class<?> primarySource, String... args) {
		return run(new Class<?>[] { primarySource }, args);
	}

	/**
	 * Static helper that can be used to run a {@link SpringApplication} from the
	 * specified sources using default settings and user supplied arguments.
	 * @param primarySources the primary sources to load
	 * @param args the application arguments (usually passed from a Java main method)
	 * @return the running {@link ApplicationContext}
	 */
	public static ConfigurableApplicationContext run(Class<?>[] primarySources, String[] args) {
		return new SpringApplication(primarySources).run(args);
	}
```
最终使用 new 关键字构造了 `SpringApplication ` 对象，然后调用了非静态 ` run() ` 方法。
```java

	/**
	 * Run the Spring application, creating and refreshing a new
	 * {@link ApplicationContext}.
	 * @param args the application arguments (usually passed from a Java main method)
	 * @return a running {@link ApplicationContext}
	 */
	public ConfigurableApplicationContext run(String... args) {
		Startup startup = Startup.create();
		if (this.registerShutdownHook) {
			SpringApplication.shutdownHook.enableShutdownHookAddition();
		}
		DefaultBootstrapContext bootstrapContext = createBootstrapContext();
		ConfigurableApplicationContext context = null;
		configureHeadlessProperty();
		SpringApplicationRunListeners listeners = getRunListeners(args);
		listeners.starting(bootstrapContext, this.mainApplicationClass);
		try {
			ApplicationArguments applicationArguments = new DefaultApplicationArguments(args);
			ConfigurableEnvironment environment = prepareEnvironment(listeners, bootstrapContext, applicationArguments);
			Banner printedBanner = printBanner(environment);
			context = createApplicationContext();
			context.setApplicationStartup(this.applicationStartup);
			prepareContext(bootstrapContext, context, environment, listeners, applicationArguments, printedBanner);
			refreshContext(context);
			afterRefresh(context, applicationArguments);
			startup.started();
			if (this.logStartupInfo) {
				new StartupInfoLogger(this.mainApplicationClass).logStarted(getApplicationLog(), startup);
			}
			listeners.started(context, startup.timeTakenToStarted());
			callRunners(context, applicationArguments);
		}
		catch (Throwable ex) {
			...
		}
		try {
			if (context.isRunning()) {
				listeners.ready(context, startup.ready());
			}
		}
		catch (Throwable ex) {
			...
		}
		return context;
	}
```
> 构造 SpringApplication 对象时做了如下几件事：
> 1. 获取 Bean Definition 源
> 2. 推断应用类型
> 3. 添加 ApplicationContext 初始化器
> 4. 添加事件监听器
> 5. 主类推断


### 获取 Bean Definition 源
```java
package com.example.boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;
import java.util.Collections;

@SpringBootApplication
public class BootApplication {

    public static void main(String[] args) {
        SpringApplication spring = new SpringApplication(BootApplication.class);

        // 设置 xml 的bean
        spring.setSources(Collections.singleton("classpath:bean.xml"));

        // 创建并初始化 Spring 容器
        ConfigurableApplicationContext context = spring.run(args);
        Arrays.stream(context.getBeanDefinitionNames()).forEach(i -> {
            System.out.println("name: " + i +
                " 来源: " + context.getBeanFactory().getBeanDefinition(i).getResourceDescription());
        });
        context.close();
    }

    static class Bean1 {
    }

    static class Bean2 {
    }

    @Bean
    public Bean2 bean2() {
        return new Bean2();
    }


}

```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:p="http://www.springframework.org/schema/p"
       xmlns:util="http://www.springframework.org/schema/util"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
						http://www.springframework.org/schema/util
						http://www.springframework.org/schema/util/spring-util-4.0.xsd"
>
    <bean id="bean1" class="com.example.boot.BootApplication.Bean1" />
</beans>


```
输出
```java
...
name: bootApplication 来源: null
name: bean1 来源: class path resource [bean.xml]
name: bean2 来源: com.example.boot.BootApplication

...

```
其中来源为 `null`的是 `Spring`内置的。
### 推断应用类型
应用推断主要在 `SpringbootApplication`的构造方法中，`this.webApplicationType = WebApplicationType.deduceFromClasspath();`
```java
    static WebApplicationType deduceFromClasspath() {
        if (ClassUtils.isPresent("org.springframework.web.reactive.DispatcherHandler", (ClassLoader)null) 
            && !ClassUtils.isPresent("org.springframework.web.servlet.DispatcherServlet", (ClassLoader)null) 
            && !ClassUtils.isPresent("org.glassfish.jersey.servlet.ServletContainer", (ClassLoader)null)) {
            return REACTIVE;
        } else {
            String[] var0 = SERVLET_INDICATOR_CLASSES;
            int var1 = var0.length;

            for(int var2 = 0; var2 < var1; ++var2) {
                String className = var0[var2];
                if (!ClassUtils.isPresent(className, (ClassLoader)null)) {
                    // 非 web 
                    return NONE;
                }
            }
        	// servlet
            return SERVLET;
        }
    }
```
当然，我们可以直接使用反射调用这个静态方法，判断当前应用环境
```java
        Method deduceFromClasspath = WebApplicationType.class.getDeclaredMethod("deduceFromClasspath");
        deduceFromClasspath.setAccessible(true);
        System.out.println("\t应用类型为: " + deduceFromClasspath.invoke(null));

```
输出
```shell
应用类型为: SERVLET
```
### 添加 ApplicationContext 初始化器
调用 `SpringApplication` 对象的 ` run() ` 方法时会创建 `ApplicationContext`，最后调用 `ApplicationContext 的 refresh()` 方法完成初始化。
> 在创建与初始化完成之间的一些拓展功能就由 `ApplicationContext` 初始化器完成。

在 ` SpringApplication ` 的构造方法中，添加的初始化器信息从配置文件中读取：
```java
    public SpringApplication(ResourceLoader resourceLoader, Class<?>... primarySources) {
           ...
        this.webApplicationType = WebApplicationType.deduceFromClasspath();
    	//// 初始化器
        this.setInitializers(this.getSpringFactoriesInstances(ApplicationContextInitializer.class));
        this.setListeners(this.getSpringFactoriesInstances(ApplicationListener.class));
        this.mainApplicationClass = this.deduceMainApplicationClass();
    }
```
当然可以调用 SpringApplication 对象的 `addInitializers()` 方法添加自定义初始化器：
> 注意添加初始化器需要在调用 `run`方法之前，因为 `run` 方法会 `refresh`

```java
        // 初始化器
        // 这里用到了函数方法，可以简化代码
        spring.addInitializers(new ApplicationContextInitializer<ConfigurableApplicationContext>() {
            @Override
            public void initialize(ConfigurableApplicationContext applicationContext) {
                System.out.println(">>>>>>>>>>");
                if( applicationContext instanceof GenericApplicationContext genericApplicationContext) {
                    System.out.println(">>>>> 注册 bean3");
                    genericApplicationContext.registerBean("bean3", Bean3.class);
                }
            }
        });

        // 创建并初始化 Spring 容器
        ConfigurableApplicationContext context = spring.run(args);

```
输出
```shell
name: bean3 来源: null
name: bean1 来源: class path resource [bean.xml]
name: bean2 来源: com.example.boot.BootApplication
name: beanNameViewResolver 来源: class path resource [org/springframework/boot/autoconfigure/web/servlet/error/ErrorMvcAutoConfiguration$WhitelabelErrorViewConfiguration.class]
name: beanNameHandlerMapping 来源: class path resource [org/springframework/boot/autoconfigure/web/servlet/WebMvcAutoConfiguration$EnableWebMvcConfiguration.class]
	应用类型为: SERVLET
```
### 添加事件监听器
与添加 ApplicationContext 初始化器一样，在 SpringApplication 的构造方法中，添加的事件监听器信息从配置文件中读取：
```java
    public SpringApplication(ResourceLoader resourceLoader, Class<?>... primarySources) {
           ...
        this.webApplicationType = WebApplicationType.deduceFromClasspath();
    	//// 初始化器
        this.setInitializers(this.getSpringFactoriesInstances(ApplicationContextInitializer.class));

        // 事件监听器
        this.setListeners(this.getSpringFactoriesInstances(ApplicationListener.class));
        this.mainApplicationClass = this.deduceMainApplicationClass();
    }
```
可以调用 `SpringApplication ` 对象的 `addListeners() ` 方法添加自定义事件监听器：
```java
        spring.addListeners(event -> System.out.println("\t事件为: " + event));

        // 创建并初始化 Spring 容器
        ConfigurableApplicationContext context = spring.run(args);
```
输出
```shell
2023-12-12 23:08:04.067  INFO 82643 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
	事件为: org.springframework.boot.web.servlet.context.ServletWebServerInitializedEvent[source=org.springframework.boot.web.embedded.tomcat.TomcatWebServer@54db056b]
	事件为: org.springframework.context.event.ContextRefreshedEvent[source=org.springframework.boot.web.servlet.context.AnnotationConfigServletWebServerApplicationContext@389c4eb1, started on Tue Dec 12 23:08:03 CST 2023]
2023-12-12 23:08:04.073  INFO 82643 --- [           main] com.example.boot.BootApplication         : Started BootApplication in 0.695 seconds (JVM running for 0.9)
	事件为: org.springframework.boot.context.event.ApplicationStartedEvent[source=org.springframework.boot.SpringApplication@5119fb47]
	事件为: org.springframework.boot.availability.AvailabilityChangeEvent[source=org.springframework.boot.web.servlet.context.AnnotationConfigServletWebServerApplicationContext@389c4eb1, started on Tue Dec 12 23:08:03 CST 2023]
	事件为: org.springframework.boot.context.event.ApplicationReadyEvent[source=org.springframework.boot.SpringApplication@5119fb47]
	事件为: org.springframework.boot.availability.AvailabilityChangeEvent[source=org.springframework.boot.web.servlet.context.AnnotationConfigServletWebServerApplicationContext@389c4eb1, started on Tue Dec 12 23:08:03 CST 2023]
	事件为: org.springframework.boot.availability.AvailabilityChangeEvent[source=org.springframework.boot.web.servlet.context.AnnotationConfigServletWebServerApplicationContext@389c4eb1, started on Tue Dec 12 23:08:03 CST 2023]
	事件为: org.springframework.context.event.ContextClosedEvent[source=org.springframework.boot.web.servlet.context.AnnotationConfigServletWebServerApplicationContext@389c4eb1, started on Tue Dec 12 23:08:03 CST 2023]

```
### 主类推断
依然是在 `SpringApplication`的构造方法中，有
```java
    public SpringApplication(ResourceLoader resourceLoader, Class<?>... primarySources) {
           ...
        this.webApplicationType = WebApplicationType.deduceFromClasspath();
    	//// 初始化器
        this.setInitializers(this.getSpringFactoriesInstances(ApplicationContextInitializer.class));

        // 事件监听器
        this.setListeners(this.getSpringFactoriesInstances(ApplicationListener.class));
        // 主类推断
        this.mainApplicationClass = this.deduceMainApplicationClass();
    }
```
```java
    private Class<?> deduceMainApplicationClass() {
        try {
            StackTraceElement[] stackTrace = (new RuntimeException()).getStackTrace();
            StackTraceElement[] var2 = stackTrace;
            int var3 = stackTrace.length;

            for(int var4 = 0; var4 < var3; ++var4) {
                StackTraceElement stackTraceElement = var2[var4];
                if ("main".equals(stackTraceElement.getMethodName())) {
                    return Class.forName(stackTraceElement.getClassName());
                }
            }
        } catch (ClassNotFoundException var6) {
        }

        return null;
    }
```
## `SpringApplication#run(java.lang.String...)`
源码
```java
    public ConfigurableApplicationContext run(String... args) {
        long startTime = System.nanoTime();
        
        DefaultBootstrapContext bootstrapContext = this.createBootstrapContext();
        ConfigurableApplicationContext context = null;
        this.configureHeadlessProperty();

        // 获取事件分发器
        SpringApplicationRunListeners listeners = this.getRunListeners(args);

        
        listeners.starting(bootstrapContext, this.mainApplicationClass);

        try {
            // 封装启动 args
            ApplicationArguments applicationArguments = new DefaultApplicationArguments(args);

            //Environment 即环境对象，是对配置信息的抽象，配置信息的来源有多种，比如：
            //	系统环境变量、properties 配置文件、YAML 配置文件等等。
			// SpringBoot 提供了名为 ApplicationEnvironment 的类表示环境对象，
            //	它是 Spring 中 StandardEnvironment 环境对象的子类。
            ConfigurableEnvironment environment = this.prepareEnvironment(listeners, bootstrapContext, applicationArguments);
            this.configureIgnoreBeanInfo(environment);

            // 打印banner
            Banner printedBanner = this.printBanner(environment);

            
            context = this.createApplicationContext();

            
            context.setApplicationStartup(this.applicationStartup);
            this.prepareContext(bootstrapContext, context, environment, listeners, applicationArguments, printedBanner);

            // 刷新容器
            this.refreshContext(context);

            // 刷新后置处理
            this.afterRefresh(context, applicationArguments);
            Duration timeTakenToStartup = Duration.ofNanos(System.nanoTime() - startTime);
            if (this.logStartupInfo) {
                (new StartupInfoLogger(this.mainApplicationClass)).logStarted(this.getApplicationLog(), timeTakenToStartup);
            }

            listeners.started(context, timeTakenToStartup);
            this.callRunners(context, applicationArguments);
        } catch (Throwable var12) {
            this.handleRunFailure(context, var12, listeners);
            throw new IllegalStateException(var12);
        }

        try {
            Duration timeTakenToReady = Duration.ofNanos(System.nanoTime() - startTime);
            listeners.ready(context, timeTakenToReady);
            return context;
        } catch (Throwable var11) {
            this.handleRunFailure(context, var11, (SpringApplicationRunListeners)null);
            throw new IllegalStateException(var11);
        }
    }
```
> 总结

1. 得到 SpringApplicationRunListeners 事件发布器
> 发布 Application Starting 事件 1️⃣

2. 封装启动 args
3. 准备 Environment 添加命令行参数
4. ConfigurationPropertySources 处理

发布 Application Environment 已准备事件 2️⃣

5. 通过 EnvironmentPostProcessorApplicationListener 进行 env 后处理
> application.properties 由 StandardConfigDataLocationResolver 解析

> spring.application.json

6. 绑定 spring.main 到 SpringApplication 对象
7. 打印 Banner
8. 创建容器
9. 准备容器
> 发布 Application Context 已初始化事件 3️⃣

10. 加载 Bean 定义
> 发布 Application Prepared 事件 4️⃣

11. refresh 容器
> 发布 Application Started 事件 5️⃣

12. 执行 Runner
> 发布 Application Ready 事件 6️⃣

> 这其中有异常，发布 Application Failed 事件 7️⃣


# 自动配置
## 自动配置类原理
```java

public class AutoConfApplication {

    public static void main(String[] args) {
        GenericApplicationContext context = new GenericApplicationContext();
        context.registerBean(ConfigurationClassPostProcessor.class);
        context.registerBean("config", Config.class);
        context.refresh();
        for (String name : context.getBeanDefinitionNames()) {
            System.out.println(">>>" + name);
        }
    }

    @Configuration
    static class Config {

    }

    static class Auto {

        @Bean
        public Bean1 bean1() {
            return new Bean1("自动配置");
        }

        @Bean
        public Bean2 bean2() {
            return new Bean2();
        }

    }

    @Data
    @AllArgsConstructor
    static class Bean1 {
        private String name;
    }

    static class Bean2 { }
}

```
```java
>>>org.springframework.context.annotation.ConfigurationClassPostProcessor
>>>config
```
可以看出 `Auto`没有加 `@Configuration`不会被 `Spring`容器管理，所以不会加载。此时我们进行以下改造
```java
    @Configuration
    @Import({Auto.class})
    static class Config {

    }
```
上述代码的打印结果为：
```shell
>>>org.springframework.context.annotation.ConfigurationClassPostProcessor
>>>config
>>>com.example.auto_conf.AutoConfApplication$Auto
>>>bean1
>>>bean2
```
可以看到模拟自动配置的类正常起作用（bean1, bean2 被加载到容器）。
> 除了使用 `@Import`注解意外，可以使用导入选择器 `ImportSelector`，重写 `selectImports()` 方法，返回需要自动装配的 `Bean` 的全限定类名数组批量导入：

```java

public class AutoConfApplication {

    public static void main(String[] args) {
        GenericApplicationContext context = new GenericApplicationContext();
        context.registerBean(ConfigurationClassPostProcessor.class);
        context.registerBean("config", Config.class);
        context.refresh();
        for (String name : context.getBeanDefinitionNames()) {
            System.out.println(">>>" + name);
        }
    }

    @Configuration
    @Import({MyImportSelector.class})
    static class Config {

    }

    static class MyImportSelector implements ImportSelector {
        @Override
        public String[] selectImports(AnnotationMetadata importingClassMetadata) {
            return new String[]{Auto.class.getName()};
        }
    }

    static class Auto {

        @Bean
        public Bean1 bean1() {
            return new Bean1("自动配置");
        }

        @Bean
        public Bean2 bean2() {
            return new Bean2();
        }

    }

    @Data
    @AllArgsConstructor
    static class Bean1 {
        private String name;
    }

    static class Bean2 { }
}

```
打印 以下结果，说明 `ImportSelector`生效。
```shell
>>>org.springframework.context.annotation.ConfigurationClassPostProcessor
>>>config
>>>com.example.auto_conf.AutoConfApplication$Auto
>>>bean1
>>>bean2
```
但这样的方式相比最初的方式并没有本质区别，甚至更麻烦，还多了一个类。如果 `selectImports()` 方法返回的全限定类名可以从文件中读取，就更方便了。
所以，在当前项目的类路径下创建 `META-INF/spring.factories ` 文件，约定一个 ` key`，对应的 value 即为需要指定装配的 Bean：
```xml
package com.example.auto_conf;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.*;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.io.support.SpringFactoriesLoader;
import org.springframework.core.type.AnnotationMetadata;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

public class AutoConfApplication {

    public static void main(String[] args) {
        GenericApplicationContext context = new GenericApplicationContext();
        context.registerBean(ConfigurationClassPostProcessor.class);
        context.registerBean("config", Config.class);
        context.refresh();
        for (String name : context.getBeanDefinitionNames()) {
            System.out.println(">>>" + name);
        }
    }

    @Configuration
    @Import({MyImportSelector.class})
    static class Config {

    }

    static class MyImportSelector implements ImportSelector {
        @Override
        public String[] selectImports(AnnotationMetadata importingClassMetadata) {
            List<String> names = SpringFactoriesLoader.loadFactoryNames(MyImportSelector.class, null);
            return names.toArray(new String[0]);
        }
    }

    static class Auto {

        @Bean
        public Bean1 bean1() {
            return new Bean1("自动配置");
        }


    }
    static class Auto1 {


        @Bean
        public Bean2 bean2() {
            return new Bean2();
        }

    }

    @Data
    @AllArgsConstructor
    static class Bean1 {
        private String name;
    }

    static class Bean2 { }
}

// spring.factories
# 内部类使用$
com.example.auto_conf.AutoConfApplication$MyImportSelector=\
    com.example.auto_conf.AutoConfApplication.Auto, \
    com.example.auto_conf.AutoConfApplication.Auto1            
```
打印结果
```shell
>>>org.springframework.context.annotation.ConfigurationClassPostProcessor
>>>config
>>>com.example.auto_conf.AutoConfApplication$Auto
>>>bean1
>>>com.example.auto_conf.AutoConfApplication$Auto1
>>>bean2
```
`SpringFactoriesLoader.loadFactoryNames() ` 不仅只扫描当前项目类型路径下的 `META-INF/spring.factories ` 文件，而是会扫描包括 `Jar` 包里类路径下的 `META-INF/spring.factories` 文件。
> 针对 `SpringBoot` 来说，自动装配的 `Bean` 使用如下语句加载：

```java
SpringFactoriesLoader.loadFactoryNames(EnableAutoConfiguration.class, null);
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1702480642084-cd85482c-4056-46b9-a1d3-bb43feb4f7d3.png#averageHue=%2328292d&clientId=u3296e18b-d970-4&from=paste&height=781&id=u5452aaa0&originHeight=1562&originWidth=2526&originalType=binary&ratio=2&rotation=0&showTitle=false&size=488513&status=done&style=none&taskId=ubab768ff-f39b-47de-b0fe-c9ef0fe480f&title=&width=1263)

## `AopAutoConfigurartion`
> 常用工具类

```java
 // 注册常用的后处理器
AnnotationConfigUtils.registerAnnotationConfigProcessors(context.getDefaultListableBeanFactory());
```
示例代码
```java
package com.example.auto_conf;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.*;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.core.io.support.SpringFactoriesLoader;
import org.springframework.core.type.AnnotationMetadata;

import java.util.List;

public class AopAutoConfApplication {

    public static void main(String[] args) {
        GenericApplicationContext context = new GenericApplicationContext();

        // 注册常用的后处理器
        AnnotationConfigUtils.registerAnnotationConfigProcessors(context.getDefaultListableBeanFactory());
        context.registerBean(ConfigurationClassPostProcessor.class);
        context.registerBean("config", Config.class);
        context.refresh();
        for (String name : context.getBeanDefinitionNames()) {
            System.out.println(">>>" + name);
        }

    }

    @Configuration
    @Import({MyImportSelector.class})
    static class Config {

    }

    static class MyImportSelector implements ImportSelector {
        @Override
        public String[] selectImports(AnnotationMetadata importingClassMetadata) {
            return new String[]{AopAutoConfiguration.class.getName()};
        }
    }

}

```
打印以下结果
```java
>>>org.springframework.context.annotation.internalConfigurationAnnotationProcessor
>>>org.springframework.context.annotation.internalAutowiredAnnotationProcessor
>>>org.springframework.context.annotation.internalCommonAnnotationProcessor
>>>org.springframework.context.event.internalEventListenerProcessor
>>>org.springframework.context.event.internalEventListenerFactory
>>>org.springframework.context.annotation.ConfigurationClassPostProcessor
>>>config
>>>com.example.auto_conf.AopAutoConfApplication
```
> 代码添加命令行参数

```java
public static void main(String[] args) {
    GenericApplicationContext context = new GenericApplicationContext();
    StandardEnvironment env = new StandardEnvironment();
    env.getPropertySources().addLast(
        new SimpleCommandLinePropertySource("--spring.aop.auto=false")
    );
    context.setEnvironment(env);
}
```
> `AopAutoConfiguration`类源码

AopAutoConfiguration```java

@AutoConfiguration
// 存在spring.aop=true 或者不存在时生效
@ConditionalOnProperty(prefix = "spring.aop",name = {"auto"}, havingValue = "true",matchIfMissing = true)
public class AopAutoConfiguration {
    public AopAutoConfiguration() {
    }

    @Configuration(
        proxyBeanMethods = false
    )
    @ConditionalOnMissingClass({"org.aspectj.weaver.Advice"})
    @ConditionalOnProperty(prefix = "spring.aop",name = {"proxy-target-class"},havingValue = "true",matchIfMissing = true
    )
    static class ClassProxyingConfiguration {
        ClassProxyingConfiguration() {
        }

        @Bean
        static BeanFactoryPostProcessor forceAutoProxyCreatorToUseClassProxying() {
            return (beanFactory) -> {
                if (beanFactory instanceof BeanDefinitionRegistry registry) {
                    AopConfigUtils.registerAutoProxyCreatorIfNecessary(registry);
                    AopConfigUtils.forceAutoProxyCreatorToUseClassProxying(registry);
                }

            };
        }
    }

    @Configuration(
        proxyBeanMethods = false
    )
    @ConditionalOnClass({Advice.class})
    static class AspectJAutoProxyingConfiguration {
        AspectJAutoProxyingConfiguration() {
        }

        @Configuration(
            proxyBeanMethods = false
        )
        @EnableAspectJAutoProxy(
            proxyTargetClass = true
        )
        @ConditionalOnProperty(prefix = "spring.aop",name = {"proxy-target-class"},havingValue = "true",
            matchIfMissing = true
        )
        static class CglibAutoProxyConfiguration {
            CglibAutoProxyConfiguration() {
            }
        }

        @Configuration(
            proxyBeanMethods = false
        )
        @EnableAspectJAutoProxy(
            proxyTargetClass = false
        )
        @ConditionalOnProperty(prefix = "spring.aop",name = {"proxy-target-class"},havingValue = "false"
        )
        static class JdkDynamicAutoProxyConfiguration {
            JdkDynamicAutoProxyConfiguration() {
            }
        }
    }
}

```
> 从源码中可以看出，`Spring`默认使用 `Cglib`只有 `spring.aop.proxy-target-class=false`的时候才会使用 `Jdk`代理。

## 数据库相关自动配置
代码准备
```xml
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>

        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>2.3.0</version>
        </dependency>

        <dependency>
            <groupId>com.mysql</groupId>
            <artifactId>mysql-connector-j</artifactId>
        </dependency>
    </dependencies>
```
未使用配置文件，而是使用 `StandardEnvironment ` 设置了一些数据库连接信息。
```java
package com.example.auto_conf;

import org.mybatis.spring.boot.autoconfigure.MybatisAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.transaction.TransactionAutoConfiguration;
import org.springframework.context.annotation.*;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.env.SimpleCommandLinePropertySource;
import org.springframework.core.env.StandardEnvironment;
import org.springframework.core.type.AnnotationMetadata;

public class DbAutoConfApplication {

    public static void main(String[] args) {
        GenericApplicationContext context = new GenericApplicationContext();

        StandardEnvironment env = new StandardEnvironment();
        env.getPropertySources().addLast(new SimpleCommandLinePropertySource(
            "--spring.datasource.url=jdbc:mysql://localhost:3306/advanced_spring",
            "--spring.datasource.username=root",
            "--spring.datasource.password=123456"
        ));
        context.setEnvironment(env);
        // 注册常用的后处理器
        AnnotationConfigUtils.registerAnnotationConfigProcessors(context.getDefaultListableBeanFactory());
        context.registerBean(ConfigurationClassPostProcessor.class);
        context.registerBean("config", Config.class);
        context.refresh();
        for (String name : context.getBeanDefinitionNames()) {
            String resourceDescription = context.getBeanDefinition(name).getResourceDescription();
            if (resourceDescription != null){
                System.out.println(name + " 来源: \n" + resourceDescription);
                System.out.println("-----------");
            }

        }


    }

    @Configuration
    @Import({DataSourceAutoConfiguration.class,
        DataSourceTransactionManagerAutoConfiguration.class,
        MybatisAutoConfiguration.class,
        TransactionAutoConfiguration.class
    })
    static class Config {

    }

}

```
打印
```shell
jdbcConnectionDetailsHikariBeanPostProcessor 来源: 
org.springframework.boot.autoconfigure.jdbc.DataSourceConfiguration$Hikari
-----------
dataSource 来源: 
org.springframework.boot.autoconfigure.jdbc.DataSourceConfiguration$Hikari
-----------
jdbcConnectionDetails 来源: 
org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration$PooledDataSourceConfiguration
-----------
hikariPoolDataSourceMetadataProvider 来源: 
org.springframework.boot.autoconfigure.jdbc.metadata.DataSourcePoolMetadataProvidersConfiguration$HikariPoolDataSourceMetadataProviderConfiguration
-----------
transactionManager 来源: 
org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration$JdbcTransactionManagerConfiguration
-----------
sqlSessionFactory 来源: 
org.mybatis.spring.boot.autoconfigure.MybatisAutoConfiguration
-----------
sqlSessionTemplate 来源: 
org.mybatis.spring.boot.autoconfigure.MybatisAutoConfiguration
-----------
org.springframework.transaction.config.internalTransactionAdvisor 来源: 
class path resource [org/springframework/transaction/annotation/ProxyTransactionManagementConfiguration.class]
-----------
transactionAttributeSource 来源: 
class path resource [org/springframework/transaction/annotation/ProxyTransactionManagementConfiguration.class]
-----------
transactionInterceptor 来源: 
class path resource [org/springframework/transaction/annotation/ProxyTransactionManagementConfiguration.class]
-----------
org.springframework.transaction.config.internalTransactionalEventListenerFactory 来源: 
class path resource [org/springframework/transaction/annotation/ProxyTransactionManagementConfiguration.class]
-----------
transactionTemplate 来源: 
org.springframework.boot.autoconfigure.transaction.TransactionAutoConfiguration$TransactionTemplateConfiguration
-----------
```
可以看到 `dataSource 来源: org.springframework.boot.autoconfigure.jdbc.DataSourceConfiguration$Hikari `  

## 条件装配的底层原理
### `@Conditional`
在 `SpringBoot` 的自动配置中，经常看到 `@Conditional ` 注解的使用，使用该注解可以按条件加载配置类。
`@Conditional` 注解并不具备条件判断功能，而是通过指定的 `Class` 列表来进行判断，指定的 ` Class` 需要实现 `Condition ` 接口。
```java

public class ConditionalApplication {

    public static void main(String[] args) {
        GenericApplicationContext context = new GenericApplicationContext();
        context.registerBean(ConfigurationClassPostProcessor.class);
        context.registerBean("config", Config.class);
        context.refresh();

        String[] names = context.getBeanDefinitionNames();
        for (String name : names) {
            System.out.println(name);
        }

    }

    @Configuration
    static class Config {
        @Bean
        @Conditional(MyConditional.class)
        public Bean1 bean1() {
            return new Bean1();
        }
        @Bean
        @Conditional(MyConditional2.class)
        public Bean2 bean2() {
            return new Bean2();
        }
    }

    static class H {}

    static class MyConditional implements Condition {
        @Override
        public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
            return ClassUtils.isPresent("com.example.auto_conf.ConditionalApplication.H", null);
        }
    }

    static class MyConditional2 implements Condition {
        @Override
        public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
            return !ClassUtils.isPresent("com.example.auto_conf.ConditionalApplication.H", null);
        }
    }
    static class Bean1 { }

    static class Bean2 { }
}

```
输出: 把 `H`类注释掉时，`bean2`注册， 否则 `bean1`注册。

### `@ConditionalOnXxx`
`SpringBoot`中 `Bean`存在才生效的源码
```java
package org.springframework.boot.autoconfigure.condition;

@Target({ ElementType.TYPE, ElementType.METHOD })
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Conditional(OnBeanCondition.class)
public @interface ConditionalOnBean {
	...
}

```
> 模仿 `SpringBoot` 的组合注解进行条件注册 `bean`

```java
public class ConditionalApplication {

    public static void main(String[] args) {
        GenericApplicationContext context = new GenericApplicationContext();
        context.registerBean(ConfigurationClassPostProcessor.class);
        context.registerBean("config", Config.class);
        context.refresh();

        String[] names = context.getBeanDefinitionNames();
        for (String name : names) {
            System.out.println(name);
        }

    }

    @Configuration
    static class Config {
        @Bean
        @ConditionalOnClass(className = "com.example.auto_conf.ConditionalApplication.H")
        public Bean1 bean1() {
            return new Bean1();
        }
        @Bean
        @ConditionalOnClass(exist = false, className = "com.example.auto_conf.ConditionalApplication.H")
        public Bean2 bean2() {
            return new Bean2();
        }
    }

    static class H {}

    static class MyConditional implements Condition {
        @Override
        public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
            Map<String, Object> attributes = metadata.getAnnotationAttributes(ConditionalOnClass.class.getName());
            boolean exist = (boolean) attributes.get("exist");
            String className = attributes.get("className").toString();
            boolean present = ClassUtils.isPresent(className, null);
            return exist == present;
        }
    }


    @Retention(RetentionPolicy.RUNTIME)
    @Target({ElementType.METHOD, ElementType.TYPE})
    @Conditional(MyConditional.class)
    @interface ConditionalOnClass {
        boolean exist() default true;

        String className();
    }

    static class Bean1 { }

    static class Bean2 { }
}

```


# `SPI`
`SPI` 机制的基本思想是，定义一个服务接口，多个不同的实现类可以实现这个接口。然后，在`classpath`路径下的 `META-INF/services` 目录中创建一个以服务接口的全限定名命名的文件，文件内容为实现类的全限定名。这样，当程序运行时，可以通过 `ServiceLoader` 工具类来加载所有实现了该服务接口的类。
> 使用 `Java SPI` 的好处是，可以在不修改源代码的情况下，通过配置更换实现类，实现程序的可扩展性。而不需要在代码中显式地引用实现类，从而实现了松耦合的设计。

`SPI` 机制在 `Java` 中被广泛应用，例如 `JDBC` 中的 `Driver` 接口和 `Servlet` 容器中的 `Servlet` 接口等。通过 `SPI` 机制，可以在不同的场景中灵活地替换实现类，提供更多的选择和定制化的功能。同时，`SPI` 机制也增加了程序的灵活性和可维护性。
## 最简单的实例
我们现在需要使用一个内容搜索接口，搜索的实现可能是基于文件系统的搜索，也可能是基于数据库的搜索，甚至是 `rpc` 搜索。
> 基本步骤
> 1. 定义接口
> 2. 在 `META-INF/services `目录下，新建接口全限定名（如果是内部接口或内部类需要使用 `$`）的文件，然后在文件里面加上实现类。
> 3. 使用 `ServiceLoader`加载接口，进行使用

```java
public class SpiApplication {

    public interface Search {
        List<String> searchDoc(String keyword);
    }

    public static class FileSearch implements Search{
        @Override
        public List<String> searchDoc(String keyword) {
            System.out.println("文件搜索 "+keyword);
            return null;
        }
    }
    public static class DatabaseSearch implements Search{
        @Override
        public List<String> searchDoc(String keyword) {
            System.out.println("数据搜索 "+keyword);
            return null;
        }
    }

    public static class RpcSearch implements Search{
        @Override
        public List<String> searchDoc(String keyword) {
            System.out.println("rpc搜索 "+keyword);
            return null;
        }
    }


    public static void main(String[] args) {
        ServiceLoader<Search> s = ServiceLoader.load(Search.class);
        Iterator<Search> iterator = s.iterator();
        while (iterator.hasNext()) {
            Search search =  iterator.next();
            search.searchDoc("hello world");
        }
    }
}

```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1702712302441-88e0dbc3-020b-47f2-90c0-fc3787f3138f.png#averageHue=%2325272a&clientId=u92b12331-c0bf-4&from=paste&height=638&id=ueb4c4760&originHeight=1276&originWidth=2858&originalType=binary&ratio=2&rotation=0&showTitle=false&size=342830&status=done&style=none&taskId=u569ae90c-64c6-405b-8562-debd6bd113b&title=&width=1429)
可以看到输出三行搜索结果，这就是因为 `ServiceLoader.load(Search.class)` 在加载某接口时，会去 `META-INF/services` 下找接口的全限定名文件，再根据里面的内容加载相应的实现类。
这就是 `spi` 的思想，接口的实现由 `provider` 实现，`provider` 只用在提交的 `jar` 包里的 `META-INF/services` 下根据平台定义的接口新建文件，并添加进相应的实现类内容就好。
## 使用 `jar` 包通过 `spi`动态实现接口功能
新增 `jar`包，打包后加载到其他项目运行。
```java
public interface Search {
    List<String> searchDoc(String keyword);
}

//-
public class DefaultSearch implements Search{

    @Override
    public List<String> searchDoc(String keyword) {
        System.out.println("default search");
        return null;
    }
}

//-
public class MainApplicaction {

    public static void main(String[] args) {
        ServiceLoader<Search> s = ServiceLoader.load(Search.class);
        Iterator<Search> iterator = s.iterator();
        while (iterator.hasNext()) {
            Search search =  iterator.next();
            search.searchDoc("hello world");
        }
        System.out.println(">>>> jar main end");
    }


}
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1702714819330-c866cbdc-fdf4-4f38-8b52-7321eac9d7f2.png#averageHue=%232f3235&clientId=u92b12331-c0bf-4&from=paste&height=311&id=uf6baa018&originHeight=622&originWidth=860&originalType=binary&ratio=2&rotation=0&showTitle=false&size=53841&status=done&style=none&taskId=ua4e64204-474a-49de-909f-a4a0fa0c1b6&title=&width=430)
然后 `mvn install`到本地，把 `jar`包导入到其他项目
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21883277/1702714965038-2b47f945-46f4-4f70-9188-aa26173e24d2.png#averageHue=%2325262a&clientId=u92b12331-c0bf-4&from=paste&height=795&id=u38d40209&originHeight=1590&originWidth=2892&originalType=binary&ratio=2&rotation=0&showTitle=false&size=464472&status=done&style=none&taskId=ud0917c74-5d77-4abe-a71e-8f8b36f6e56&title=&width=1446)
```java
package com.example.spi;

import com.example.MainApplicaction;
import com.example.Search;

import java.util.List;

public class SpiApplication {



    public static class FileSearch implements Search {
        @Override
        public List<String> searchDoc(String keyword) {
            System.out.println("文件搜索 "+keyword);
            return null;
        }
    }
    public static class DatabaseSearch implements Search{
        @Override
        public List<String> searchDoc(String keyword) {
            System.out.println("数据搜索 "+keyword);
            return null;
        }
    }

    public static class RpcSearch implements Search{
        @Override
        public List<String> searchDoc(String keyword) {
            System.out.println("rpc搜索 "+keyword);
            return null;
        }
    }


    public static void main(String[] args) {
        MainApplicaction.main(new String[0]);
    }
}

```
运行结果
```shell
文件搜索 hello world
数据搜索 hello world
rpc搜索 hello world
default search
>>>> jar main end
```
> 由此可以看到本项目的 `META-INF/services`的加载顺序在 `jar`包前面。


# `FactoryBean`
`FactoryBean` 是一个接口，可以实现该接口，并指定一个泛型，在重写的方法指定泛型类型对象的创建，然后将实现类交由 `Spring` 管理，最后 `Spring` 容器中会增加泛型类型的 ` Bean`。这个 `Bean` 并不是完全受 `Spring ` 管理，或者说部分受 `Spring` 管理。
首先定义一个 Bean2，交由 Spring 管理，但它不是重点：
```java
@Component
public class Bean2 {

    @PostConstruct
    public void init() {
        System.out.println("bean2 post init");
    }
}
```
然后定义 Bean1，它未交由 Spring 管理，但是在其内部注入了 Bean2、定义初始化方法、实现 Aware 接口。
```java

@Slf4j
public class Bean1 implements BeanFactoryAware {
    private Bean2 bean2;

    @Autowired
    public void setBean2(Bean2 bean2) {
        this.bean2 = bean2;
    }

    public Bean2 getBean2() {
        return this.bean2;
    }

    @PostConstruct
    public void init() {
        log.info("bean1 post init");
    }

    @Override
    public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
        log.info("setBeanFactory({})", beanFactory);
    }
}

```
定义 Bean1FactoryBean，实现 FactoryBean 接口，指定泛型为 Bean1，将其交由 Spring 管理，Bean 的名称是 bean1：
```java

@Slf4j
@Component("bean1")
public class Bean1FactoryBean implements FactoryBean<Bean1> {
    @Override
    public Bean1 getObject() throws Exception {
        Bean1 bean1 = new Bean1();
        log.info("create bean: {}", bean1);
        return bean1;
    }

    @Override
    public Class<?> getObjectType() {
        return Bean1.class;
    }

    @Override
    public boolean isSingleton() {
        return true;
    }
}

```
```java
@ComponentScan
public class FactoryBeanApplication {

    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(FactoryBeanApplication.class);
        Bean1 bean1 = context.getBean("bean1", Bean1.class);
        Bean1 bean2 = context.getBean("bean1", Bean1.class);
        Bean1 bean3 = context.getBean("bean1", Bean1.class);
        System.out.println(bean1);
        System.out.println(bean2);
        System.out.println(bean3);


        context.close();

    }

}
```
输出结果
```shell
...
19:18:42.464 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'factoryBeanApplication'
19:18:42.466 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'bean1'
19:18:42.467 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'bean2'
bean2 post init
19:18:42.478 [main] INFO com.example.factory_bean.Bean1FactoryBean - create bean: com.example.factory_bean.Bean1@3911c2a7
com.example.factory_bean.Bean1@3911c2a7
com.example.factory_bean.Bean1@3911c2a7
com.example.factory_bean.Bean1@3911c2a7
```
Bean1 类型的 Bean 被成功添加到 Spring 容器中，但根据打印的日志信息可以看出这个 Bean 没有经历依赖注入阶段、没有回调 Aware 接口、没有经历初始化阶段，其创建是由重写的 getObject() 方法完成的。

这个 Bean 就真的没有经历 Spring Bean 的生命周期中的任何阶段吗？

定义 Bean1PostProcessor，实现 BeanPostProcessor 接口，在 bean1 初始化前后打印日志信息：
```java
@Slf4j
@Component
public class Bean1PostProcessor implements BeanPostProcessor {


    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        if ("bean1".equals(beanName) && bean instanceof Bean1) {
            log.info("before [{}] init", beanName);
        }
        return bean;

    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        if ("bean1".equals(beanName) && bean instanceof Bean1) {
            log.info("after [{}] init", beanName);
        }
        return bean;
    }
}

```
结果输出
```java
...
19:22:59.718 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'bean1PostProcessor'
19:22:59.722 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'factoryBeanApplication'
19:22:59.723 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'bean1'
19:22:59.723 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'bean2'
bean2 post init
19:22:59.735 [main] INFO com.example.factory_bean.Bean1FactoryBean - create bean: com.example.factory_bean.Bean1@39529185
19:22:59.736 [main] INFO com.example.factory_bean.Bean1PostProcessor - after [bean1] init
com.example.factory_bean.Bean1@39529185
com.example.factory_bean.Bean1@39529185
com.example.factory_bean.Bean1@39529185
```
可以看到 `after [bean1] init`打印，说明bean1 进行了初始化后的增强逻辑，但未进行初始化前的增强逻辑。
创建代理对象的时机就是在初始化后，因此由 FactoryBean 创建的 Bean 可以进行代理增强强。
## `FactoryBean`接口
```java
/**
 * Interface to be implemented by objects used within a {@link BeanFactory} which
 * are themselves factories for individual objects. If a bean implements this
 * interface, it is used as a factory for an object to expose, not directly as a
 * bean instance that will be exposed itself.
 *
 * <p><b>NB: A bean that implements this interface cannot be used as a normal bean.</b>
 * A FactoryBean is defined in a bean style, but the object exposed for bean
 * references ({@link #getObject()}) is always the object that it creates.
 *
 * <p>FactoryBeans can support singletons and prototypes, and can either create
 * objects lazily on demand or eagerly on startup. The {@link SmartFactoryBean}
 * interface allows for exposing more fine-grained behavioral metadata.
 *
 * <p>This interface is heavily used within the framework itself, for example for
 * the AOP {@link org.springframework.aop.framework.ProxyFactoryBean} or the
 * {@link org.springframework.jndi.JndiObjectFactoryBean}. It can be used for
 * custom components as well; however, this is only common for infrastructure code.
 *
 * <p><b>{@code FactoryBean} is a programmatic contract. Implementations are not
 * supposed to rely on annotation-driven injection or other reflective facilities.</b>
 * {@link #getObjectType()} {@link #getObject()} invocations may arrive early in the
 * bootstrap process, even ahead of any post-processor setup. If you need access to
 * other beans, implement {@link BeanFactoryAware} and obtain them programmatically.
 *
 * <p><b>The container is only responsible for managing the lifecycle of the FactoryBean
 * instance, not the lifecycle of the objects created by the FactoryBean.</b> Therefore,
 * a destroy method on an exposed bean object (such as {@link java.io.Closeable#close()}
 * will <i>not</i> be called automatically. Instead, a FactoryBean should implement
 * {@link DisposableBean} and delegate any such close call to the underlying object.
 *
 * <p>Finally, FactoryBean objects participate in the containing BeanFactory's
 * synchronization of bean creation. There is usually no need for internal
 * synchronization other than for purposes of lazy initialization within the
 * FactoryBean itself (or the like).

 */
public interface FactoryBean<T> {

	/**
	 * Return an instance (possibly shared or independent) of the object
	 * managed by this factory.
	 */
	@Nullable
	T getObject() throws Exception;

	/**
	 * Return the type of object that this FactoryBean creates,
	 */
	@Nullable
	Class<?> getObjectType();

	/**
	 * Is the object managed by this factory a singleton? That is,
	 * will {@link #getObject()} always return the same object
	 * (a reference that can be cached)?
	 */
	default boolean isSingleton() {
		return true;
	}

```
其中：

- `getObject()` 用于构造 Bean 对象
- `getObjectType()` 用于返回 Bean 对象的类型，以便可以通过类型从容器中获取 Bean
- `isSingleton()` 每次获取的 Bean 对象是否是单例的

从容器中获取 `Bean` 时可以通过名称获取、可以通过类型获取、也可以通过名称和类型一起获取。如果重写的 `getObjectType() ` 方法返回了 `null`，那么 仅仅 类型从容器中获取 `Bean` 时，将抛出 `NoSuchBeanDefinitionException ` 异常，并提示没有指定类型的 `Bean`。
如果重写的 `isSingleton() ` 方法返回 ` true`，那么每次充容器中获取 Bean 对象都是同一个，反之则不是。

注意： 由 `FactoryBean` 构造的单例 ` Bean ` 不会存放在 `DefaultSingletonBeanRegistry ` 的 `singletonFactories ` 中，而是在 `AbstractAutowireCapableBeanFactory` 的 `factoryBeanInstanceCache` 中。
## 获取 `FactoryBean`
```java
Bean1FactoryBean bean4 = context.getBean(Bean1FactoryBean.class);
System.out.println(bean4);
Object bean5 = context.getBean("&bean1");
System.out.println(bean5);
```
输出
```shell
com.example.factory_bean.Bean1FactoryBean@3427b02d
com.example.factory_bean.Bean1FactoryBean@3427b02d
```

# `@Indexed`
`Spring` 在进行组件扫描时，会遍历项目中依赖的所有 `Jar ` 包中类路径下所有的文件，找到被 ` @Component ` 及其衍生注解标记的类，然后把它们组装成 `BeanDefinition` 添加到 `Spring` 容器中。
如果扫描的返回过大，势必会大大地影响项目启动速度。
为了优化扫描速度，引入以下依赖，`Spring` 将扫描过程提前到编译期：
```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context-indexer</artifactId>
    <optional>true</optional>
</dependency>
```
```java
package com.example.index;

import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ClassPathBeanDefinitionScanner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

public class IndexApplication {

    @Component
    static class Bean1 {}
    @Component
    static class Bean2 {}
    @Component
    static class Bean3 {}

    public static void main(String[] args) {
        DefaultListableBeanFactory factory = new DefaultListableBeanFactory();

        ClassPathBeanDefinitionScanner scanner = new ClassPathBeanDefinitionScanner(factory);
        String packageName = IndexApplication.class.getPackageName();
        System.out.println(">>>>> packageName="+packageName);
        int scan = scanner.scan(packageName);
        System.out.println(">>>>> scan="+scan);
        Arrays.stream(factory.getBeanDefinitionNames()).forEach(System.out::println);
    }

}
```
运行结果
```shell
>>>>> packageName=com.example.index
>>>>> scan=8
indexApplication.Bean1
indexApplication.Bean2
indexApplication.Bean3
org.springframework.context.annotation.internalConfigurationAnnotationProcessor
org.springframework.context.annotation.internalAutowiredAnnotationProcessor
org.springframework.context.annotation.internalCommonAnnotationProcessor
org.springframework.context.event.internalEventListenerProcessor
org.springframework.context.event.internalEventListenerFactory
```
运行完了之后，会生成一份 `target/classes/META-INF/spring.components`文件，里面的内容是(`$ 表示内部类 `)
```shell
com.example.index.IndexApplication$Bean1=org.springframework.stereotype.Component
com.example.index.IndexApplication$Bean2=org.springframework.stereotype.Component
com.example.index.IndexApplication$Bean3=org.springframework.stereotype.Component

```
如果把这个文件的某个 `bean`删除之后，那么这个 `bean`就不会被注册到 `ioc`容器。
它是在引入 `spring-context-indexer` 依赖后，在编译期根据类是否被 `@Indexed ` 注解标记，生成 `spring.components` 文件及内容。
到目前为止，虽然都没显式使用 `@Indexed` 注解，但它包含在 `@Component ` 注解中：
```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Indexed
public @interface Component {

	/**
	 * The value may indicate a suggestion for a logical component name,
	 * to be turned into a Spring bean name in case of an autodetected component.
	 * @return the suggested component name, if any (or empty String otherwise)
	 */
	String value() default "";

}
```
> 导入 `spring-context-indexer` 依赖后，在编译期根据 `@Indexed ` 生成 `META-INF/spring.components` 文件。
> `Spring` 在扫描组件时，如果发现 `META-INF/spring.components ` 文件存在，以它为准加载 `BeanDefinition`，反之遍历包含 `Jar ` 包类路径下所有 `class` 信息。

# `@Value`的底层实现


```java
package com.example.value;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.config.BeanExpressionContext;
import org.springframework.beans.factory.config.DependencyDescriptor;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ContextAnnotationAutowireCandidateResolver;
import org.springframework.stereotype.Component;

import java.lang.reflect.Field;

@Configuration // 自动扫描bean3
public class ValueApplication {

    public static void main(String[] args) throws Exception {
        AnnotationConfigApplicationContext context =
            new AnnotationConfigApplicationContext(ValueApplication.class);
        DefaultListableBeanFactory beanFactory = context.getDefaultListableBeanFactory();

        ContextAnnotationAutowireCandidateResolver resolver =
            new ContextAnnotationAutowireCandidateResolver();
        resolver.setBeanFactory(beanFactory);

        test1(context, resolver);
        test2(context, resolver);
        test3(context, resolver, Bean2.class.getDeclaredField("bean3"));
        System.out.println(">>>>>>>>>>>>>>>>>>>");
        test3(context, resolver, Bean4.class.getDeclaredField("value"));
    }

    private static void test1(AnnotationConfigApplicationContext context,
                              ContextAnnotationAutowireCandidateResolver resolver) throws Exception {
        DependencyDescriptor dd1 =
            new DependencyDescriptor(Bean1.class.getDeclaredField("home"), false);
        // 获取 @Value 的内容
        String value = resolver.getSuggestedValue(dd1).toString();
        System.out.println(value);

        // 解析 ${}
        value = context.getEnvironment().resolvePlaceholders(value);
        System.out.println(value);
    }

    // ${} -> 类型
    private static void test2(AnnotationConfigApplicationContext context,
                              ContextAnnotationAutowireCandidateResolver resolver) throws Exception{
        DependencyDescriptor dd1 =
            new DependencyDescriptor(Bean1.class.getDeclaredField("age"), false);
        // 获取 @Value 的内容
        String value = resolver.getSuggestedValue(dd1).toString();
        System.out.println("@Value 的 value 属性值: " + value);

        // 解析 ${}
        value = context.getEnvironment().resolvePlaceholders(value);
        System.out.println("解析得到的值: " + value);
        System.out.println("解析得到的值的类型: " + value.getClass());
        // 转成字段的类型
        Object age = context.getBeanFactory()
            .getTypeConverter()
            .convertIfNecessary(value, dd1.getDependencyType());
        System.out.println("转换后的类型: " + age.getClass());
    }

    // spel
    private static void test3(AnnotationConfigApplicationContext context,
                              ContextAnnotationAutowireCandidateResolver resolver,
                              Field field) throws Exception {
        DependencyDescriptor dd1 = new DependencyDescriptor(field, false);
        // 获取 @Value 的内容
        String value = resolver.getSuggestedValue(dd1).toString();
        System.out.println("@Value 的 value 属性值: " + value);

        // 解析 ${}
        value = context.getEnvironment().resolvePlaceholders(value);
        System.out.println("解析得到的值: " + value);
        System.out.println("解析得到的值的类型: " + value.getClass());

        // 解析 #{}
        Object bean3 = context.getBeanFactory()
            .getBeanExpressionResolver()
            .evaluate(value, new BeanExpressionContext(context.getBeanFactory(), null));

        // 类型转换
        Object result = context.getBeanFactory()
            .getTypeConverter()
            .convertIfNecessary(bean3, dd1.getDependencyType());
        System.out.println("转换后的类型: " + result.getClass());
    }

    static class Bean1 {
        @Value("${JAVA_HOME}")
        private String home;
        @Value("18")
        private int age;
    }

    static class Bean2 {
        @Value("#{@bean3}")
        private Bean3 bean3;
    }

    @Component("bean3")
    static class Bean3 {
    }

    static class Bean4 {
        @Value("#{'hello, ' + '${JAVA_HOME}'}")
        private String value;
    }


}

```
 输出结果
```shell
${JAVA_HOME}
/Users/xx/Library/Java/JavaVirtualMachines/corretto-17.0.8.1/Contents/Home
@Value 的 value 属性值: 18
解析得到的值: 18
解析得到的值的类型: class java.lang.String
转换后的类型: class java.lang.Integer
@Value 的 value 属性值: #{@bean3}
解析得到的值: #{@bean3}
解析得到的值的类型: class java.lang.String
转换后的类型: class com.example.value.ValueApplication$Bean3
>>>>>>>>>>>>>>>>>>>
@Value 的 value 属性值: #{'hello, ' + '${JAVA_HOME}'}
解析得到的值: #{'hello, ' + '/Users/xx/Library/Java/JavaVirtualMachines/corretto-17.0.8.1/Contents/Home'}
解析得到的值的类型: class java.lang.String
转换后的类型: class java.lang.String
```
用到的几个工具类
## 获取 `@Value`内容
```java
Bean2.class.getDeclaredField("bean3")
DependencyDescriptor dd1 = new DependencyDescriptor(field, false);
// 获取 @Value 的内容
String value = resolver.getSuggestedValue(dd1).toString();
```
## 解析 `${}`内容
```java
value = context.getEnvironment().resolvePlaceholders(value);
```
## 解析 `SPEL`
```java
Object bean3 = context.getBeanFactory()
            .getBeanExpressionResolver()
            .evaluate(value, new BeanExpressionContext(context.getBeanFactory(), null));
```
## 类型转换
```java
Object result = context.getBeanFactory()
    .getTypeConverter()
    .convertIfNecessary(bean3, dd1.getDependencyType());
```
# `@Autowired`


```java
package com.example.autowired;

import org.springframework.beans.factory.ObjectFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.DependencyDescriptor;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ContextAnnotationAutowireCandidateResolver;
import org.springframework.context.annotation.Lazy;
import org.springframework.core.MethodParameter;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;
import java.util.Optional;

// 添加配置类，让Spring扫描
@Configuration
public class AutowiredApplication {

    public static void main(String[] args) throws Exception {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AutowiredApplication.class);
        DefaultListableBeanFactory beanFactory = context.getDefaultListableBeanFactory();

        // 1. 成员变量注入
        System.out.println(
            beanFactory.doResolveDependency(
            new DependencyDescriptor(Bean1.class.getDeclaredField("bean2"), false),
            "bean1",
            null,
            null
            ));

        // 2. 参数注入
        Method setBean2 = Bean1.class.getMethod("setBean2", Bean2.class);
        System.out.println(
            beanFactory.doResolveDependency(
                new DependencyDescriptor(new MethodParameter(setBean2, 0), false),
                "bean1",
                null,
                null
            ));

        // 3. Optional
        DependencyDescriptor dd3 = new DependencyDescriptor(Bean1.class.getDeclaredField("bean3"), false);
        // 增加一层嵌套或者里面的 Optional<T> 的T
        if (Optional.class.equals(dd3.getDependencyType())) {
            dd3.increaseNestingLevel();
            Object result = beanFactory.doResolveDependency(dd3, "bean1", null, null);
            System.out.println(Optional.ofNullable(result));
        }


        // 4. ObjectFactory<T>
        DependencyDescriptor dd4 =
            new DependencyDescriptor(Bean1.class.getDeclaredField("bean4"), false);
        if (ObjectFactory.class.equals(dd4.getDependencyType())) {
            dd4.increaseNestingLevel();
            ObjectFactory<Bean2> objectFactory = () ->
                (Bean2) beanFactory.doResolveDependency(dd4, "bean1", null, null);
            System.out.println(objectFactory.getObject());
        }

        // 5. Lazy 代理对象
        DependencyDescriptor dd5 =
            new DependencyDescriptor(Bean1.class.getDeclaredField("bean5"), false);
        ContextAnnotationAutowireCandidateResolver resolver =
            new ContextAnnotationAutowireCandidateResolver();
        resolver.setBeanFactory(beanFactory);
        // 根据 @Lazy 创建代理对象
        Object proxy = resolver.getLazyResolutionProxyIfNecessary(dd5, "bean1");
        System.out.println(proxy);
        System.out.println(proxy.getClass());


    }


    public static class Bean1 {

        @Autowired
        private Bean2 bean2;


        @Autowired
        public void setBean2(Bean2 bean2) {
            this.bean2 = bean2;
        }

        @Autowired
        private Optional<Bean2> bean3;


        @Autowired
        private ObjectFactory<Bean2> bean4;

        @Autowired
        @Lazy
        private Bean2 bean5;
        
    }

    @Component
    public static class Bean2{}

}

```
输出
```shell
com.example.autowired.AutowiredApplication$Bean2@8c3b9d
com.example.autowired.AutowiredApplication$Bean2@8c3b9d
Optional[com.example.autowired.AutowiredApplication$Bean2@8c3b9d]
com.example.autowired.AutowiredApplication$Bean2@8c3b9d
com.example.autowired.AutowiredApplication$Bean2@8c3b9d
class com.example.autowired.AutowiredApplication$Bean2$$SpringCGLIB$$0
```
`@Lazy` 实现的 延迟注入 （前面讲的 `ObjectFactory ` 和 `ObjectProvider ` 也有延迟注入功能，但与 ` @Lazy ` 的实现不一样）不是不注入，而是注入目标对象的代理对象，当使用到代理对象中的方法时，代理对象就会去 ` Spring ` 容器中寻找真正的目标对象，然后调用目标对象对应的方法。

## 模拟`doResolveDependency`
```java
package com.example.autowired;

import lombok.SneakyThrows;
import org.springframework.beans.factory.BeanFactoryUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.config.BeanDefinitionHolder;
import org.springframework.beans.factory.config.DependencyDescriptor;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ContextAnnotationAutowireCandidateResolver;
import org.springframework.stereotype.Component;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Configuration
public class Autowired2Application {

    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(Autowired2Application.class);
        DefaultListableBeanFactory beanFactory = context.getDefaultListableBeanFactory();
        System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1. 数组类型");
        testArray(beanFactory);
        System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 2. List 类型");
        testList(beanFactory);
        System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 3. applicationContext");
        testApplicationContext(beanFactory);
        System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 4. 泛型");
        testGeneric(beanFactory);
        System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 5. @Qualifier");
        testQualifier(beanFactory);
    }

    @SneakyThrows
    private static void testQualifier(DefaultListableBeanFactory beanFactory) {
        DependencyDescriptor dd5 = new DependencyDescriptor(Target.class.getDeclaredField("service"), true);
        Class<?> type = dd5.getDependencyType();
        ContextAnnotationAutowireCandidateResolver resolver = new ContextAnnotationAutowireCandidateResolver();
        resolver.setBeanFactory(beanFactory);
        for (String name : BeanFactoryUtils.beanNamesForTypeIncludingAncestors(beanFactory, type)) {
            BeanDefinition bd = beanFactory.getMergedBeanDefinition(name);
            // DependencyDescriptor 对象中包含了 @Qualifier 注解信息
            if (resolver.isAutowireCandidate(new BeanDefinitionHolder(bd, name), dd5)) {
                System.out.println(name);
                System.out.println(dd5.resolveCandidate(name, type, beanFactory));
            }
        }
    }

    @SneakyThrows
    private static void testGeneric(DefaultListableBeanFactory beanFactory) {
        DependencyDescriptor dd4 = new DependencyDescriptor(Target.class.getDeclaredField("dao"), true);
        Class<?> type = dd4.getDependencyType();
        ContextAnnotationAutowireCandidateResolver resolver = new ContextAnnotationAutowireCandidateResolver();
        resolver.setBeanFactory(beanFactory);
        // 循环所有的目标类型 Bean 名称
        for (String name : BeanFactoryUtils.beanNamesForTypeIncludingAncestors(beanFactory, type)) {
            BeanDefinition bd = beanFactory.getMergedBeanDefinition(name);
            // 对比 BeanDefinition 的泛型与 DependencyDescriptor 的泛型是否匹配
            if (resolver.isAutowireCandidate(new BeanDefinitionHolder(bd, name), dd4)) {
                System.out.println(name);
                System.out.println(dd4.resolveCandidate(name, type, beanFactory));
            }
        }
    }

    @SneakyThrows
    private static void testApplicationContext(DefaultListableBeanFactory beanFactory) {
        DependencyDescriptor dd3 = new DependencyDescriptor(Target.class.getDeclaredField("applicationContext"), true);
        Field resolvableDependencies = DefaultListableBeanFactory.class.getDeclaredField("resolvableDependencies");
        resolvableDependencies.setAccessible(true);
        Map<Class<?>, Object> dependencies = (Map<Class<?>, Object>) resolvableDependencies.get(beanFactory);
//        dependencies.forEach((k, v) -> {
//            System.out.println("key:" + k + " value: " + v);
//        });
        for (Map.Entry<Class<?>, Object> entry : dependencies.entrySet()) {
            // 左边类型                      右边类型
            if (entry.getKey().isAssignableFrom(dd3.getDependencyType())) {
                System.out.println(entry.getValue());
                break;
            }
        }
    }

    @SneakyThrows
    private static void testList(DefaultListableBeanFactory beanFactory) {
        DependencyDescriptor dd2 = new DependencyDescriptor(Target.class.getDeclaredField("serviceList"), true);
        if (List.class.equals(dd2.getDependencyType())) {
            // 获取泛型信息
            Class<?> resolve = dd2.getResolvableType().getGeneric().resolve();
            System.out.println(resolve);
            List<Object> list = new ArrayList<>();
            String[] names = BeanFactoryUtils.beanNamesForTypeIncludingAncestors(beanFactory, resolve);
            for (String name : names) {
                Object bean = dd2.resolveCandidate(name, resolve, beanFactory);
                list.add(bean);
            }
            System.out.println(list);
        }
    }

    @SneakyThrows
    private static void testArray(DefaultListableBeanFactory beanFactory) {
        DependencyDescriptor dd1 = new DependencyDescriptor(Target.class.getDeclaredField("serviceArray"), true);
        if (dd1.getDependencyType().isArray()) {
            // 获取数组中的元素类型
            Class<?> componentType = dd1.getDependencyType().getComponentType();
            System.out.println(componentType);
            String[] names = BeanFactoryUtils.beanNamesForTypeIncludingAncestors(beanFactory, componentType);
            List<Object> beans = new ArrayList<>();
            for (String name : names) {
                System.out.println(name);
                Object bean = dd1.resolveCandidate(name, componentType, beanFactory);
                beans.add(bean);
            }
            Object array = beanFactory.getTypeConverter().convertIfNecessary(beans, dd1.getDependencyType());
            System.out.println(array);
        }
    }

    static class Target {
        @Autowired
        private Service[] serviceArray;
        @Autowired
        private List<Service> serviceList;
        @Autowired
        private ConfigurableApplicationContext applicationContext;
        @Autowired
        private Dao<Teacher> dao;
        @Autowired
        @Qualifier("service2")
        private Service service;
    }

    interface Dao<T> {

    }

    @Component("dao1")
    static class Dao1 implements Dao<Student> {
    }

    @Component("dao2")
    static class Dao2 implements Dao<Teacher> {
    }

    static class Student {
    }

    static class Teacher {
    }

    interface Service {
    }

    @Component("service1")
    static class Service1 implements Service {
    }

    @Component("service2")
    static class Service2 implements Service {
    }

    @Component("service3")
    static class Service3 implements Service {
    }
}
```
输出 
```shell
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1. 数组类型
interface com.example.autowired.Autowired2Application$Service
service3
service2
service1
[Lcom.example.autowired.Autowired2Application$Service;@1dac5ef
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 2. List 类型
interface com.example.autowired.Autowired2Application$Service
[com.example.autowired.Autowired2Application$Service3@175b9425, com.example.autowired.Autowired2Application$Service2@3098cf3b, com.example.autowired.Autowired2Application$Service1@610f7aa]
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 3. applicationContext
org.springframework.context.annotation.AnnotationConfigApplicationContext@6e3c1e69, started on Thu Dec 21 23:00:38 CST 2023
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 4. 泛型
dao2
com.example.autowired.Autowired2Application$Dao2@71c3b41
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 5. @Qualifier
service2
com.example.autowired.Autowired2Application$Service2@3098cf3b

```
### 整体步骤
#### 获取 `DependencyDescriptor`
```java
DependencyDescriptor dd3 = new DependencyDescriptor(Target.class.getDeclaredField("applicationContext"), true);
```
#### 获取注入的参数类型
> 类型的可能值
> 1. 数组
> 2. 列表
> 3. 特殊 `bean`, 如 `ConfigurableApplicationContext`
> 4. 范型
> 5. 接口类型（多个实现） 

```java
Class<?> type = dd3.getDependencyType();
```
#### 获取候选者
```java
BeanFactoryUtils.beanNamesForTypeIncludingAncestors(beanFactory, type)
```
#### 获取最终 `bean`
```java
Object bean = dd3.resolveCandidate(name, resolve, beanFactory);
```

## 多个 `bean`符合注入条件的处理方式
```java
package com.example.autowired;
import lombok.Data;
import lombok.SneakyThrows;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.BeanFactoryUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.config.DependencyDescriptor;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Configuration
public class Autowired3Application {

        public static void main(String[] args) throws NoSuchFieldException {
            AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(Autowired3Application.class);
            DefaultListableBeanFactory beanFactory = context.getDefaultListableBeanFactory();
            context.register(Target1.class);
            context.register(Target2.class);
            testPrimary(beanFactory);
            testDefault(beanFactory);
        }

        @SneakyThrows
        private static void testDefault(DefaultListableBeanFactory beanFactory) {
            DependencyDescriptor dd = new DependencyDescriptor(Target2.class.getDeclaredField("service3"), false);
            Class<?> type = dd.getDependencyType();
            for (String name : BeanFactoryUtils.beanNamesForTypeIncludingAncestors(beanFactory, type)) {
                if (name.equals(dd.getDependencyName())) {
                    System.out.println("default: " + name);
                }
            }
            Target2 bean = beanFactory.getBean(Target2.class);
            System.out.println("testDefault >>>>>>" + bean.getService3());

        }

        @SneakyThrows
        private static void testPrimary(DefaultListableBeanFactory beanFactory) {
            DependencyDescriptor dd = new DependencyDescriptor(Target1.class.getDeclaredField("service"), false);
            Class<?> type = dd.getDependencyType();
            for (String name : BeanFactoryUtils.beanNamesForTypeIncludingAncestors(beanFactory, type)) {
                if (beanFactory.getMergedBeanDefinition(name).isPrimary()) {
                    System.out.println("primary: " + name);
                }
            }
            Target1 bean = beanFactory.getBean(Target1.class);
            System.out.println("testPrimary >>>>> " + bean.getService());
        }

        @Data
        static class Target1 {
            @Autowired

            private Service service;
        }

        @Data
        static class Target2 {
            @Autowired
            private Service service3;
        }

        interface Service {
        }

        @Component("service1")
        static class Service1 implements Service {
        }

        @Primary
        @Component("service2")
        static class Service2 implements Service {
        }

        @Component("service3")
        static class Service3 implements Service {
        }
    }

```
输出
```shell
primary: service2
testPrimary >>>>> com.example.autowired.Autowired3Application$Service2@6f45df59
default: service3
testDefault >>>>>>com.example.autowired.Autowired3Application$Service2@6f45df59
```
> 优先级： `@Qualifier`> `@Primary` > 名称 


## `doResolveDependency`源码
```java
	public Object doResolveDependency(DependencyDescriptor descriptor, @Nullable String beanName,
			@Nullable Set<String> autowiredBeanNames, @Nullable TypeConverter typeConverter) throws BeansException {

		InjectionPoint previousInjectionPoint = ConstructorResolver.setCurrentInjectionPoint(descriptor);
		try {
			// Step 1: pre-resolved shortcut for single bean match, e.g. from @Autowired
			Object shortcut = descriptor.resolveShortcut(this);
			if (shortcut != null) {
				return shortcut;
			}

			Class<?> type = descriptor.getDependencyType();

			// Step 2: pre-defined value or expression, e.g. from @Value
			Object value = getAutowireCandidateResolver().getSuggestedValue(descriptor);
			if (value != null) {
				if (value instanceof String strValue) {
					String resolvedValue = resolveEmbeddedValue(strValue);
					BeanDefinition bd = (beanName != null && containsBean(beanName) ?
							getMergedBeanDefinition(beanName) : null);
					value = evaluateBeanDefinitionString(resolvedValue, bd);
				}
				TypeConverter converter = (typeConverter != null ? typeConverter : getTypeConverter());
				try {
					return converter.convertIfNecessary(value, type, descriptor.getTypeDescriptor());
				}
				catch (UnsupportedOperationException ex) {
					// A custom TypeConverter which does not support TypeDescriptor resolution...
					return (descriptor.getField() != null ?
							converter.convertIfNecessary(value, type, descriptor.getField()) :
							converter.convertIfNecessary(value, type, descriptor.getMethodParameter()));
				}
			}

			// Step 3a: multiple beans as stream / array / standard collection / plain map
			Object multipleBeans = resolveMultipleBeans(descriptor, beanName, autowiredBeanNames, typeConverter);
			if (multipleBeans != null) {
				return multipleBeans;
			}
			// Step 3b: direct bean matches, possibly direct beans of type Collection / Map
			Map<String, Object> matchingBeans = findAutowireCandidates(beanName, type, descriptor);
			if (matchingBeans.isEmpty()) {
				// Step 3c (fallback): custom Collection / Map declarations for collecting multiple beans
				multipleBeans = resolveMultipleBeansFallback(descriptor, beanName, autowiredBeanNames, typeConverter);
				if (multipleBeans != null) {
					return multipleBeans;
				}
				// Raise exception if nothing found for required injection point
				if (isRequired(descriptor)) {
					raiseNoMatchingBeanFound(type, descriptor.getResolvableType(), descriptor);
				}
				return null;
			}

			String autowiredBeanName;
			Object instanceCandidate;

			// Step 4: determine single candidate
			if (matchingBeans.size() > 1) {
				autowiredBeanName = determineAutowireCandidate(matchingBeans, descriptor);
				if (autowiredBeanName == null) {
					if (isRequired(descriptor) || !indicatesArrayCollectionOrMap(type)) {
						// Raise exception if no clear match found for required injection point
						return descriptor.resolveNotUnique(descriptor.getResolvableType(), matchingBeans);
					}
					else {
						// In case of an optional Collection/Map, silently ignore a non-unique case:
						// possibly it was meant to be an empty collection of multiple regular beans
						// (before 4.3 in particular when we didn't even look for collection beans).
						return null;
					}
				}
				instanceCandidate = matchingBeans.get(autowiredBeanName);
			}
			else {
				// We have exactly one match.
				Map.Entry<String, Object> entry = matchingBeans.entrySet().iterator().next();
				autowiredBeanName = entry.getKey();
				instanceCandidate = entry.getValue();
			}

			// Step 5: validate single result
			if (autowiredBeanNames != null) {
				autowiredBeanNames.add(autowiredBeanName);
			}
			if (instanceCandidate instanceof Class) {
				instanceCandidate = descriptor.resolveCandidate(autowiredBeanName, type, this);
			}
			Object result = instanceCandidate;
			if (result instanceof NullBean) {
				if (isRequired(descriptor)) {
					// Raise exception if null encountered for required injection point
					raiseNoMatchingBeanFound(type, descriptor.getResolvableType(), descriptor);
				}
				result = null;
			}
			if (!ClassUtils.isAssignableValue(type, result)) {
				throw new BeanNotOfRequiredTypeException(autowiredBeanName, type, instanceCandidate.getClass());
			}
			return result;
		}
		finally {
			ConstructorResolver.setCurrentInjectionPoint(previousInjectionPoint);
		}
	}

```
# 事件监听器

