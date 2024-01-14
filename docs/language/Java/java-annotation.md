# 从入门到精通：Java注解详解

Java注解是一种非常强大的语法元素，可以为我们的程序带来很多便利。然而，在使用注解时，我们往往会遇到一些问题。本篇博客将系统地介绍Java注解的定义、作用、使用方法以及注意事项，帮助大家更好地掌握Java注解，并在实际开发中运用自如。

## Java注解是什么？

Java注解是一种元数据，它提供了一种在程序中添加元数据的方式，这些元数据可以用于编译时的检查、运行时的检查、代码生成，甚至是代码分析和优化等。

## Java注解的作用

Java注解的作用主要有以下方面：

- 提供编译器额外的代码检查
- 在运行时进行一些额外的操作
- 通过代码生成器自动生成代码

## Java注解的使用方法

Java注解可以用在类、接口、方法、参数、字段等地方，对于不同的使用场景，使用方法也略有不同。

### 定义注解

定义注解使用 @interface 关键字。

```java
public @interface MyAnnotation {

}
```

### 使用注解

使用注解可以使用 `@ 注解名` 的方式，在类、接口、方法、参数、字段等地方添加注解。

```java
@MyAnnotation
public class MyClass {

    @MyAnnotation
    private String myField;

    @MyAnnotation
    public void myMethod(@MyAnnotation String myParam) {
        
    }

}
```

### 注解元素

注解元素可以理解为注解的属性，在定义注解时，可以为注解添加元素。

```java
public @interface MyAnnotation {

    String name();

    int age();

}
```

使用注解时，必须为元素赋值。

```java
@MyAnnotation(name = "张三", age = 18)
public class MyClass {

}
```

当然，一般情况会设置一些默认值

```java
public @interface Report {
    int type() default 0;
    String level() default "info";
    String value() default "";
}
```

注解的参数类似无参数方法，可以用`default`设定一个默认值（强烈推荐）。最常用的参数应当命名为`value`。



### 注解生命周期

Java注解可以有三种生命周期：

- 源码级别：注解只在源码中存在，编译时会被丢弃
- 编译时：注解在编译时被保留，但不会包含在编译后的class文件中
- 运行时：注解在运行时被保留，并且可以通过反射机制读取

指定注解生命周期可以使用 @Retention 注解。

```java
@Retention(RetentionPolicy.RUNTIME)
public @interface MyAnnotation {

}
```

### 元注解

元注解是指用于注解其他注解的注解。Java中定义了4个元注解，分别是 @Retention、@Target、@Documented、@Inherited。

- @Retention：用于指定注解的生命周期

```code
仅编译期：RetentionPolicy.SOURCE；
仅class文件：RetentionPolicy.CLASS；
运行期：RetentionPolicy.RUNTIME。
```



- @Target：用于指定注解可以应用的元素类型

```
类或接口：ElementType.TYPE；
字段：ElementType.FIELD；
方法：ElementType.METHOD；
构造方法：ElementType.CONSTRUCTOR；
方法参数：ElementType.PARAMETER
```

- @Documented：用于指定注解是否包含在JavaDoc中
- @Inherited：用于指定注解是否可以被继承

> 使用`@Inherited`定义子类是否可继承父类定义的`Annotation`。`@Inherited`仅针对`@Target(ElementType.TYPE)`类型的`annotation`有效，并且仅针对`class`的继承，对`interface`的继承无效：



## 注解处理

Java的注解本身对代码逻辑没有任何影响。根据`@Retention`的配置：

- `SOURCE`类型的注解在编译期就被丢掉了；
- `CLASS`类型的注解仅保存在`class`文件中，它们不会被加载进`JVM`；
- `RUNTIME`类型的注解会被加载进`JVM`，并且在运行期可以被程序读取。

如何使用注解完全由工具决定。`SOURCE`类型的注解主要由编译器使用，因此我们一般只使用，不编写。`CLASS`类型的注解主要由底层工具库使用，涉及到`class`的加载，一般我们很少用到。只有`RUNTIME`类型的注解不但要使用，还经常需要编写。

**因此，我们只讨论如何读取`RUNTIME`类型的注解。**

因为注解定义后也是一种`class`，所有的注解都继承自`java.lang.annotation.Annotation`，因此，读取注解，需要使用反射API。

#### Java提供的使用反射API读取`Annotation`的方法包括：

判断某个注解是否存在于`Class`、`Field`、`Method`或`Constructor`：

- `Class.isAnnotationPresent(Class)`
- `Field.isAnnotationPresent(Class)`
- `Method.isAnnotationPresent(Class)`
- `Constructor.isAnnotationPresent(Class)`

例如：

```
// 判断@Report是否存在于Person类:
Person.class.isAnnotationPresent(Report.class);
```

使用反射API读取Annotation：

- `Class.getAnnotation(Class)`
- `Field.getAnnotation(Class)`
- `Method.getAnnotation(Class)`
- `Constructor.getAnnotation(Class)`

例如：

```java
// 获取Person定义的@Report注解:
Report report = Person.class.getAnnotation(Report.class);
int type = report.type();
String level = report.level();
```

##### 使用反射API读取`Annotation`有两种方法。

方法一是先判断`Annotation`是否存在，如果存在，就直接读取：

```java
Class cls = Person.class;
if (cls.isAnnotationPresent(Report.class)) {
    Report report = cls.getAnnotation(Report.class);
    ...
}
```

第二种方法是直接读取`Annotation`，如果`Annotation`不存在，将返回`null`：

```java
Class cls = Person.class;
Report report = cls.getAnnotation(Report.class);
if (report != null) {
   ...
}
```

读取方法、字段和构造方法的`Annotation`和Class类似。但要读取方法参数的`Annotation`就比较麻烦一点，因为方法参数本身可以看成一个数组，而每个参数又可以定义多个注解，所以，一次获取方法参数的所有注解就必须用一个二维数组来表示。例如，对于以下方法定义的注解：

```java
public void hello(@NotNull @Range(max=5) String name, @NotNull String prefix) {
}
```

要读取方法参数的注解，我们先用反射获取`Method`实例，然后读取方法参数的所有注解：

```java
// 获取Method实例:
Method m = ...
// 获取所有参数的Annotation:
Annotation[][] annos = m.getParameterAnnotations();
// 第一个参数（索引为0）的所有Annotation:
Annotation[] annosOfName = annos[0];
for (Annotation anno : annosOfName) {
    if (anno instanceof Range r) { // @Range注解
        r.max();
    }
    if (anno instanceof NotNull n) { // @NotNull注解
        //
    }
}
```

## 纸上得来终觉浅

下面我将用一个简单的例子来演示如何使用Java注解如何在`spring` 中实现时间监控。

好的，下面我将用一个简单的例子来演示如何使用Java注解实现时间监控。

我们通过注解来标记要进行时间监控的方法，然后在方法调用的前后获取时间差，进而实现时间监控的功能。

### 1. 定义注解

首先，我们需要定义一个注解来标记要进行时间监控的方法。这个注解可以命名为 @TimeMonitor。

```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface TimeMonitor {
}
```

上面的代码中，我们定义了一个只能用在方法上的注解，注解名称为 @TimeMonitor。

### 2. 实现时间监控

我们创建一个 TimeMonitorAspect 类，并使用 AspectJ 提供的 @Aspect 注解来标记这是一个切面类。然后，在这个类中，我们定义一个环绕通知方法 timeMonitor，用来进行时间监控。

在 timeMonitor 方法中，我们首先获取当前方法调用的时间，然后执行方法本身，最后再获取方法执行完成后的时间。通过计算这两个时间差，我们就可以得出该方法的执行时间了。

```java
@Aspect
@Component
public class TimeMonitorAspect {

    @Around("@annotation(com.example.annotationdemo.TimeMonitor)")
    public Object timeMonitor(ProceedingJoinPoint joinPoint) throws Throwable {
        long startTime = System.currentTimeMillis();
        Object result = joinPoint.proceed();
        long endTime = System.currentTimeMillis();
        System.out.println(joinPoint.getSignature() + " 方法执行时间：" + (endTime - startTime) + "ms");
        return result;
    }

}
```

###  3. 测试时间监控

最后，我们创建一个测试类 TestTimeMonitor，用来测试时间监控的效果。

在这个类中，我们定义了两个方法，其中的注解 @TimeMonitor 就是用来标记进行时间监控的方法。

```java
public class TestTimeMonitor {

    @TimeMonitor
    public static void method1() throws InterruptedException {
        Thread.sleep(100);
    }

    @TimeMonitor
    public static void method2() throws InterruptedException {
        Thread.sleep(200);
    }

    public static void main(String[] args) throws InterruptedException {
        method1();
        method2();
    }

}
```

当我们运行 TestTimeMonitor 的 main 方法时，控制台输出的内容应该如下所示：

```
void com.example.annotationdemo.TestTimeMonitor.method1() 方法执行时间：100ms
void com.example.annotationdemo.TestTimeMonitor.method2() 方法执行时间：200ms
```

从输出的结果中，我们可以看到通过使用 @TimeMonitor 注解，我们成功地实现了时间监控的功能。

### 4. 时间监控小结

通过这个简单的例子，我们可以看到使用 Java 注解可以极大地方便我们对程序进行更细致的控制和管理，实现类似时间监控的功能非常简单。


## 注意事项

在使用Java注解时，需要注意以下事项：

- 注解不能够继承其他的类或者注解
- 注解的元素必须要有值
- 注解中元素的类型只能是基本类型、String、Class、枚举类型、注解类型以及以上类型的数组
- 注解中元素的默认值需要使用 default 关键字指定



## `spring` 中的小疑问

### 1. `ProceedingJoinPoint` 与 `JoinPoint` 的区别

`JoinPoint`是指在程序执行过程中，可以插入切面的点。例如，在方法执行前、执行后、抛出异常时等都可以插入切面。

>  `JoinPoint`包含了当前程序执行的上下文信息，例如方法名、参数、目标对象等。

`ProceedingJoinPoint` 是 `JoinPoint` 的子接口，它是在方法执行过程中的某个特定点，例如方法执行前、执行后、抛出异常时等。> 

>  `ProceedingJoinPoint` 除了包含 `JoinPoint` 的所有信息外，还包含了一个 `proceed() `方法，该方法用于执行目标方法。

因此，`JoinPoint` 和 `ProceedingJoinPoint` 的区别在于，`ProceedingJoinPoint` 包含了一个`proceed()`方法，该方法用于执行目标方法，而`JoinPoint`则不包含该方法。

在编写AOP切面时，如果需要在目标方法执行前或执行后做一些处理，可以使用`JoinPoint`；如果需要在目标方法执行过程中做一些处理，可以使用`ProceedingJoinPoint`。



### aop 中`@within` 与 `@annotation` 的区别

> @within - limits matching to join points within types that have the given annotation (the execution of methods declared in types with the given annotation when using Spring AOP)
> @annotation - limits matching to join points where the subject of the join point (method being executed in Spring AOP) has the given annotation

在AOP中，`@within` 和 `@annotation` 是用于指定切点表达式的注解。它们用于限定何时应用切面逻辑。

`@within` 注解用于匹配添加了指定注解的类，并拦截类内部的方法。它将匹配具有指定注解的类中的所有方法，无论这些方法是否具有相同的注解。

`@annotation` 注解用于匹配具有指定注解的方法，并拦截这些方法的执行。它只匹配具有指定注解的方法，而不考虑该注解是否存在于类级别。

这些注解可以与切面注解（如 `@Before`、`@After`、`@Around` 等）一起使用，以定义切面在何时应用于目标方法或目标类。

> #### 切点表达式组合
>
> 另外，可以使用&&、||、!、三种运算符来组合切点表达式，表示与或非的关系。

例如有一个场景是，我希望一个注解在类和方法中都起作用。

```java
    @Around("@within(com.xx.annotation.RequiresAdminRoles) || @annotation(com.xx.annotation.RequiresAdminRoles)")
    public Object admin(ProceedingJoinPoint pjp) throws Throwable {
        ...
        Object res = pjp.proceed();
        ...
        return res;
    }
```



## 总结

Java注解是一种非常强大的语法元素，它可以为我们带来很多便利，但在使用注解时也需要注意一些事项。希望通过本篇博客，大家能够更好地掌握Java注解的定义、作用、使用方法以及注意事项，并在实际开发中运用自如。





# 参考

https://docs.spring.io/spring-framework/docs/4.3.15.RELEASE/spring-framework-reference/html/aop.html