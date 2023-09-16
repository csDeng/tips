

# Java 函数式编程

Java函数式编程，是一种强大的编程范式，能够让你的代码更加简洁，优雅。Java 8 引入了函数式编程的支持，其中Lambda表达式和函数式接口是函数式编程的两个重要概念。在本篇文章中，我们将会详细介绍Java函数式编程以及常用的函数式接口。

## Lambda表达式

Lambda表达式是一种匿名函数，可以理解为一段可以传递的代码。在 Java 中，Lambda 表达式可以替代只有一个抽象方法的接口。下面是一个Lambda表达式的例子:

```java
() -> System.out.println("Hello World")
```

其中，左侧括号内是Lambda表达式的参数列表（如果没有参数，则为空），箭头“->”将 Lambda 表达式的参数列表和表达式主体分隔开，右侧则是Lambda表达式的主体（也就是Lambda表达式要执行的代码块）。Lambda表达式是使用编写函数式接口的简便方法。

## 函数式接口

函数式接口是指仅包含一个抽象方法的接口。在 Java 中，函数式接口可以使用Lambda表达式来实现，从而实现函数式编程。Java提供了一些常用的函数式接口，如Function、Consumer、Predicate、Supplier等。

按照下面的格式定义，你也能写出函数式接口：



```java
 @FunctionalInterface
 修饰符 interface 接口名称 {
    返回值类型 方法名称(可选参数信息);
    // 其他非抽象方法内容
 }
```



虽然`@FunctionalInterface`注解不是必须的，但是自定义函数式接口最好还是都加上，一是养成良好的编程习惯，二是防止他人修改，一看到这个注解就知道是函数式接口，避免他人往接口内添加抽象方法造成不必要的麻烦。



```java
@FunctionalInterface
public interface MyFunction {
    void print(String s);
}
```

上面我自定义的一个函数式接口，那么这个接口的作用是什么呢？**就是输出一串字符串，属于消费型接口，是模仿Consumer接口写的**，只不过这个没有使用泛型，而是将参数具体类型化了，不知道Consumer没关系，下面会介绍到，其实java8中提供了很多常用的函数式接口，Consumer就是其中之一，一般情况下都不需要自己定义，直接使用就好了。那么怎么使用这个自定义的函数式接口呢？我们可以用函数式接口作为参数，调用时传递Lambda表达式。如果一个方法的参数是Lambda，那么这个参数的类型一定是函数式接口。例如：

```java
public class MyFunctionTest {
    public static void main(String[] args) {
        String text = "试试自定义函数好使不";
        printString(text, System.out::print);
    }

    private static void printString(String text, MyFunction myFunction) {
        myFunction.print(text);
    }
}
```

执行以后就会输出“试试自定义函数好使不”这句话，如果某天需求变了，我不想输出这句话了，想输出别的，那么直接替换text就好了。**函数式编程是没有副作用的，最大的好处就是函数的内部是无状态的，既输入确定输出就确定**。函数式编程还有更多好玩的套路，这就需要靠大家自己探索了。

### Function 函数映射

**抽象方法：** R apply(T t)，传入一个参数，返回想要的结果。

```java
public interface Function<T, R> {
    R apply(T t);
}
```

Function接口接受一个参数并返回结果。我们可以使用andThen方法来将多个函数串联起来，进行组合操作。示例代码：

```java
Function<Integer, String> intToString = Object::toString;
Function<String, String> quote = s -> "'" + s + "'";
Function<Integer, String> quoteIntToString = intToString.andThen(quote);

String result = quoteIntToString.apply(123);
System.out.println(result);
```

**默认方法：**

- `compose(Function before)`，先执行compose方法参数before中的apply方法，然后将执行结果传递给调用compose函数中的apply方法在执行。
  **使用方式：**

```java
 Function<Integer, Integer> function1 = e -> e * 2;
 Function<Integer, Integer> function2 = e -> e * e;

 Integer apply2 = function1.compose(function2).apply(3);
 System.out.println(apply2);
```

还是举一个乘法的例子，compose方法执行流程是先执行function2的表达式也就是3*3=9，然后在将执行结果传给function1的表达式也就是9*2=18，所以最终的结果是18。

- `andThen(Function after)`，先执行调用andThen函数的apply方法，然后在将执行结果传递给andThen方法after参数中的apply方法在执行。它和compose方法整好是相反的执行顺序。
  **使用方式：**

```java
 Function<Integer, Integer> function1 = e -> e * 2;
 Function<Integer, Integer> function2 = e -> e * e;

 Integer apply3 = function1.andThen(function2).apply(3);
 System.out.println(apply3);
```

这里我们和compose方法使用一个例子，所以是一模一样的例子，由于方法的不同，执行顺序也就不相同，那么结果是大大不同的。andThen方法是先执行function1表达式，也就是3*2=6，然后在执行function2表达式也就是6*6=36。结果就是36。

**静态方法：**identity()，获取一个输入参数和返回结果相同的Function实例。

**使用方式：**

```text
 Function<Integer, Integer> identity = Function.identity();
 Integer apply = identity.apply(3);
 System.out.println(apply);
```

平常没有遇到过使用这个方法的场景，总之这个方法的作用就是输入什么返回结果就是什么。

#### 源码



::: details

```java
/*
 * Copyright (c) 2010, 2013, Oracle and/or its affiliates. All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Oracle designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Oracle in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA
 * or visit www.oracle.com if you need additional information or have any
 * questions.
 */
package java.util.function;

import java.util.Objects;

/**
 * Represents a function that accepts one argument and produces a result.
 *
 * <p>This is a <a href="package-summary.html">functional interface</a>
 * whose functional method is {@link #apply(Object)}.
 *
 * @param <T> the type of the input to the function
 * @param <R> the type of the result of the function
 *
 * @since 1.8
 */
@FunctionalInterface
public interface Function<T, R> {

    /**
     * Applies this function to the given argument.
     *
     * @param t the function argument
     * @return the function result
     */
    R apply(T t);

    /**
     * Returns a composed function that first applies the {@code before}
     * function to its input, and then applies this function to the result.
     * If evaluation of either function throws an exception, it is relayed to
     * the caller of the composed function.
     *
     * @param <V> the type of input to the {@code before} function, and to the
     *           composed function
     * @param before the function to apply before this function is applied
     * @return a composed function that first applies the {@code before}
     * function and then applies this function
     * @throws NullPointerException if before is null
     *
     * @see #andThen(Function)
     */
    default <V> Function<V, R> compose(Function<? super V, ? extends T> before) {
        Objects.requireNonNull(before);
        return (V v) -> apply(before.apply(v));
    }

    /**
     * Returns a composed function that first applies this function to
     * its input, and then applies the {@code after} function to the result.
     * If evaluation of either function throws an exception, it is relayed to
     * the caller of the composed function.
     *
     * @param <V> the type of output of the {@code after} function, and of the
     *           composed function
     * @param after the function to apply after this function is applied
     * @return a composed function that first applies this function and then
     * applies the {@code after} function
     * @throws NullPointerException if after is null
     *
     * @see #compose(Function)
     */
    default <V> Function<T, V> andThen(Function<? super R, ? extends V> after) {
        Objects.requireNonNull(after);
        return (T t) -> after.apply(apply(t));
    }

    /**
     * Returns a function that always returns its input argument.
     *
     * @param <T> the type of the input and output objects to the function
     * @return a function that always returns its input argument
     */
    static <T> Function<T, T> identity() {
        return t -> t;
    }
}

```

:::



### Consumer 消费型接口

**抽象方法：** void accept(T t)，接收一个参数进行消费，但无需返回结果。

```java
public interface Consumer<T> {
    void accept(T t);
}
```

Consumer接口接受一个参数，但没有返回值。我们可以使用andThen方法来将多个Consumer组合起来，进行链式操作。示例代码：

```java
List<String> list = Arrays.asList("a", "b", "c");
Consumer<String> print = System.out::print;
Consumer<String> println = System.out::println;

list.forEach(print.andThen(println));
```

#### 源码

::: details

```java
@FunctionalInterface
public interface Consumer<T> {

    /**
     * Performs this operation on the given argument.
     *
     * @param t the input argument
     */
    void accept(T t);

    /**
     * Returns a composed {@code Consumer} that performs, in sequence, this
     * operation followed by the {@code after} operation. If performing either
     * operation throws an exception, it is relayed to the caller of the
     * composed operation.  If performing this operation throws an exception,
     * the {@code after} operation will not be performed.
     *
     * @param after the operation to perform after this operation
     * @return a composed {@code Consumer} that performs in sequence this
     * operation followed by the {@code after} operation
     * @throws NullPointerException if {@code after} is null
     */
    default Consumer<T> andThen(Consumer<? super T> after) {
        Objects.requireNonNull(after);
        return (T t) -> { accept(t); after.accept(t); };
    }
}

```

:::

### Predicate  断言型接口

**抽象方法：** boolean test(T t),传入一个参数，返回一个布尔值。

```java
public interface Predicate<T> {
    boolean test(T t);
}
```

Predicate接口接受一个参数，返回一个布尔值。我们可以使用and、or、negate方法将多个Predicate组合起来，进行复合逻辑的判断。示例代码：

```java
List<String> list = Arrays.asList("cat", "dog", "bird", "lion", "tiger");
Predicate<String> startsWithC = s -> s.startsWith("c");
Predicate<String> endsWithR = s -> s.endsWith("r");
Predicate<String> containsO = s -> s.contains("o");

list.stream()
    .filter(startsWithC.and(endsWithR).or(containsO))
    .forEach(System.out::println);
```

#### 源码

::: details

```java
/*
 * Copyright (c) 2010, 2013, Oracle and/or its affiliates. All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Oracle designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Oracle in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA
 * or visit www.oracle.com if you need additional information or have any
 * questions.
 */
package java.util.function;

import java.util.Objects;

/**
 * Represents a predicate (boolean-valued function) of one argument.
 *
 * <p>This is a <a href="package-summary.html">functional interface</a>
 * whose functional method is {@link #test(Object)}.
 *
 * @param <T> the type of the input to the predicate
 *
 * @since 1.8
 */
@FunctionalInterface
public interface Predicate<T> {

    /**
     * Evaluates this predicate on the given argument.
     *
     * @param t the input argument
     * @return {@code true} if the input argument matches the predicate,
     * otherwise {@code false}
     */
    boolean test(T t);

    /**
     * Returns a composed predicate that represents a short-circuiting logical
     * AND of this predicate and another.  When evaluating the composed
     * predicate, if this predicate is {@code false}, then the {@code other}
     * predicate is not evaluated.
     *
     * <p>Any exceptions thrown during evaluation of either predicate are relayed
     * to the caller; if evaluation of this predicate throws an exception, the
     * {@code other} predicate will not be evaluated.
     *
     * @param other a predicate that will be logically-ANDed with this
     *              predicate
     * @return a composed predicate that represents the short-circuiting logical
     * AND of this predicate and the {@code other} predicate
     * @throws NullPointerException if other is null
     */
    default Predicate<T> and(Predicate<? super T> other) {
        Objects.requireNonNull(other);
        return (t) -> test(t) && other.test(t);
    }

    /**
     * Returns a predicate that represents the logical negation of this
     * predicate.
     *
     * @return a predicate that represents the logical negation of this
     * predicate
     */
    default Predicate<T> negate() {
        return (t) -> !test(t);
    }

    /**
     * Returns a composed predicate that represents a short-circuiting logical
     * OR of this predicate and another.  When evaluating the composed
     * predicate, if this predicate is {@code true}, then the {@code other}
     * predicate is not evaluated.
     *
     * <p>Any exceptions thrown during evaluation of either predicate are relayed
     * to the caller; if evaluation of this predicate throws an exception, the
     * {@code other} predicate will not be evaluated.
     *
     * @param other a predicate that will be logically-ORed with this
     *              predicate
     * @return a composed predicate that represents the short-circuiting logical
     * OR of this predicate and the {@code other} predicate
     * @throws NullPointerException if other is null
     */
    default Predicate<T> or(Predicate<? super T> other) {
        Objects.requireNonNull(other);
        return (t) -> test(t) || other.test(t);
    }

    /**
     * Returns a predicate that tests if two arguments are equal according
     * to {@link Objects#equals(Object, Object)}.
     *
     * @param <T> the type of arguments to the predicate
     * @param targetRef the object reference with which to compare for equality,
     *               which may be {@code null}
     * @return a predicate that tests if two arguments are equal according
     * to {@link Objects#equals(Object, Object)}
     */
    static <T> Predicate<T> isEqual(Object targetRef) {
        return (null == targetRef)
                ? Objects::isNull
                : object -> targetRef.equals(object);
    }
}

```

:::



### Supplier 供给型接口

**抽象方法：**T get()，无参数，有返回值。

```java
public interface Supplier<T> {
    T get();
}
```

Supplier接口不接受任何参数，返回一个结果。我们可以使用get方法来获取结果。示例代码：

```java
Supplier<String> helloSupplier = () -> "Hello";
System.out.println(helloSupplier.get() + " world");
```

#### 源码

::: details

```java
/*
 * Copyright (c) 2012, 2013, Oracle and/or its affiliates. All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Oracle designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Oracle in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA
 * or visit www.oracle.com if you need additional information or have any
 * questions.
 */
package java.util.function;

/**
 * Represents a supplier of results.
 *
 * <p>There is no requirement that a new or distinct result be returned each
 * time the supplier is invoked.
 *
 * <p>This is a <a href="package-summary.html">functional interface</a>
 * whose functional method is {@link #get()}.
 *
 * @param <T> the type of results supplied by this supplier
 *
 * @since 1.8
 */
@FunctionalInterface
public interface Supplier<T> {

    /**
     * Gets a result.
     *
     * @return a result
     */
    T get();
}

```

:::

## 方法引用

方法引用是一种更简洁的Lambda表达式，可以通过方法名称来引用已经存在的方法。方法引用通过 `::` 操作符将方法名与对象或类名分隔开来表示。

下面是一些方法引用的例子：

```java
Function<String, Integer> strToInt = Integer::parseInt;
Supplier<Date> newDate = Date::new;
Consumer<String> print = System.out::print;
```

## 其他函数式接口

### Bi类型接口

`BiConsumer、BiFunction、BiPrediate` 是 `Consumer、Function、Predicate `的扩展，可以传入多个参数，没有 BiSupplier 是因为 Supplier 没有入参。



### 操作基本数据类型的接口

`IntConsumer、IntFunction、IntPredicate、IntSupplier、LongConsumer、LongFunction、LongPredicate、LongSupplier、DoubleConsumer、DoubleFunction、DoublePredicate、DoubleSupplier`。其实常用的函数式接口就那四大接口Consumer、Function、Prediate、Supplier，其他的函数式接口就不一一列举了，有兴趣的可以去java.util.function这个包下详细的看。

## 总结

在本篇文章中，我们介绍了Java函数式编程以及常用的函数式接口。Lambda表达式和函数式接口是函数式编程的两个重要概念，可以让代码更加简洁和灵活。Java提供了一些常用的函数式接口，如Function、Consumer、Predicate、Supplier等，可以通过方法引用更加简洁地实现函数式编程。使用函数式编程，可以让你的代码更加优雅，简洁。

