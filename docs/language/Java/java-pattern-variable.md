# `JDK17` 模式变量 `Pattern variable`



> [`oracle`]( https://docs.oracle.com/en/java/javase/17/language/pattern-matching.html#GUID-A59EF0C7-4CB7-4555-986D-0FD804555C25)

> Pattern matching involves testing whether an object has a particular structure, then extracting data from that object if there's a match. You can already do this with Java; however, pattern matching introduces new language enhancements that enable you to conditionally extract data from objects with code that's more concise and robust.

模式匹配包括测试对象是否具有特定的结构，如果存在匹配，则从该对象中提取数据。你已经可以用Java做到这一点。但是，模式匹配引入了新的语言增强功能，使您能够有条件地使用更简洁和健壮的代码从对象中提取数据。



## `Pattern Matching for the instanceof Operator`

>  Enhance the Java programming language with *pattern matching* for the `instanceof` operator. [Pattern matching](https://cr.openjdk.java.net/~briangoetz/amber/pattern-match.html) allows common logic in a program, namely the conditional extraction of components from objects, to be expressed more concisely and safely.

使用instanceof操作符的模式匹配增强Java编程语言。模式匹配允许程序中的公共逻辑，即从对象中有条件地提取组件，以更简洁和安全的方式表达。



### 为什么引入

在项目开发过程中，我们经常会写以下类似代码，臃肿而难看。这段代码主要是进行类型判断，然后进行类型转换。

```java
if (obj instanceof String) {
    String s = (String) obj;    // grr...
    ...
}
```

* 引入模版变量之后

> A *pattern* is a combination of (1) a *predicate*, or test, that can be applied to a target, and (2) a set of local variables, known as *pattern variables*, that are extracted from the target only if the predicate successfully applies to it.
>
> A *type pattern* consists of a predicate that specifies a type, along with a single pattern variable.
>
> The `instanceof` operator ([JLS 15.20.2](https://docs.oracle.com/javase/specs/jls/se15/html/jls-15.html#jls-15.20.2)) is extended to take a type pattern instead of just a type.

模式是(1)可以应用于目标的谓词或测试，以及(2)一组称为模式变量的局部变量的组合，只有当谓词成功地应用于目标时，这些局部变量才会从目标中提取出来。 

类型模式由指定类型的谓词和单个模式变量组成。 

instanceof操作符(JLS 15.20.2)被扩展为接受类型模式而不仅仅是类型。

```java
if (obj instanceof String s) {
    // Let pattern matching do the work!
    ...
}
```

> (In this code, the phrase `String s` is the type pattern.) The meaning is intuitive. The `instanceof` operator matches the target `obj` to the type pattern as follows: If `obj` is an instance of `String`, then it is cast to `String` and the value is assigned to the variable `s`.

>  Rather than using a coarse approximation for the scope of pattern variables, pattern variables instead use the concept of *flow scoping*. A pattern variable is only in scope where the compiler can deduce that the pattern has definitely matched and the variable will have been assigned a value. This analysis is flow sensitive and works in a similar way to existing flow analyses such as [definite assignment](https://docs.oracle.com/javase/specs/jls/se15/html/jls-16.html).

如果断言失败 `obj` 不是 `String` 则不会为 `s` 赋值。

### 纸上得来终觉浅

```java
if (a instanceof Point p) {
    // p is in scope
    ...
}
// p not in scope here
if (b instanceof Point p) {     // Sure!
        ...
}
```

```java
if (obj instanceof String s && s.length() > 5) {
    flag = s.contains("jdk");
}
```

```java
if (obj instanceof String s || s.length() > 5) {    
  // Error!
    ...
}
```



### 使用模版变量重构 `effective java`部分例子

```java
public final boolean equals(Object o) {
    return (o instanceof CaseInsensitiveString) 
      && ((CaseInsensitiveString) o).s.equalsIgnoreCase(s);
}
```

* 重构后

```java
public final boolean equals(Object o) {
    return (o instanceof CaseInsensitiveString cis) 
      && cis.s.equalsIgnoreCase(s);
}
```





## `Pattern Matching for switch Expressions and Statements`

### 概括

`switch` 通过表达式和语句的模式匹配以及模式语言的扩展来增强 Java 编程语言。扩展模式匹配`switch`允许针对多个模式测试表达式，每个模式都有一个特定的操作，以便可以简洁、安全地表达复杂的面向数据的查询。这是JDK 17 中的[预览语言功能](https://openjdk.java.net/jeps/12)。

### 目标

- `switch`通过允许模式出现在标签中来扩展表达式和语句的表现力和适用性`case`。
- `switch`在需要时允许放松历史上的零敌意。
- 引入两种新的模式：*受保护的模式*，允许使用任意布尔表达式来细化模式匹配逻辑，以及 *括号模式*，以解决一些解析歧义。
- 确保所有现有`switch`表达式和语句继续编译而不进行任何更改并以相同的语义执行。
- 不要引入`switch`与传统`switch` 构造分离的具有模式匹配语义的新的类似表达式或语句。
- `switch`当 case 标签是模式时与 case 标签是传统常量时，不要使表达式或语句的行为有所不同。



### 直接看引入前后的对比

```java
static String formatter(Object o) {
    String formatted = "unknown";
    if (o instanceof Integer i) {
        formatted = String.format("int %d", i);
    } else if (o instanceof Long l) {
        formatted = String.format("long %d", l);
    } else if (o instanceof Double d) {
        formatted = String.format("double %f", d);
    } else if (o instanceof String s) {
        formatted = String.format("String %s", s);
    }
    return formatted;
}
```

* 引入 `switch` 增强之后

```java 
static String formatterPatternSwitch(Object o) {
    return switch (o) {
        case Integer i -> String.format("int %d", i);
        case Long l    -> String.format("long %d", l);
        case Double d  -> String.format("double %f", d);
        case String s  -> String.format("String %s", s);
        default        -> o.toString();
    };
}
```



#### `jdk8`

```java
int dayOfWeek = 3;
String dayName;

switch (dayOfWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
        break;
}

System.out.println("Day of the week: " + dayName);
```



#### `jdk17`

```java
int dayOfWeek = 3;

String dayName = switch (dayOfWeek) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    case 4 -> "Thursday";
    case 5 -> "Friday";
    case 6 -> "Saturday";
    case 7 -> "Sunday";
    default -> "Invalid day";
};

System.out.println("Day of the week: " + dayName);
```



# 总结

拥抱新技术，用就对了～







