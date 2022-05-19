# 字符串

## 1. 反转字符串 E

:::details

> 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
>
> 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
>
>  
>
> 示例 1：
>
> 输入：s = ["h","e","l","l","o"]
> 输出：["o","l","l","e","h"]
> 示例 2：
>
> 输入：s = ["H","a","n","n","a","h"]
> 输出：["h","a","n","n","a","H"]
>
>
> 提示：
>
> 1 <= s.length <= 105
> s[i] 都是 ASCII 码表中的可打印字符
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode.cn/problems/reverse-string
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```go
func reverseString(s []byte)  {
    n := len(s)
    if n <= 1 {
        return 
    }
    l,r := 0, n-1
    for l <= r {
        s[l],s[r] = s[r],s[l]
        l++
        r--
    }
    return 
}
```



:::



## 2. 反转字符串2 E

:::details

> 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
>
> 如果剩余字符少于 k 个，则将剩余字符全部反转。
> 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
>
>
> 示例 1：
>
> 输入：s = "abcdefg", k = 2
> 输出："bacdfeg"
> 示例 2：
>
> 输入：s = "abcd", k = 2
> 输出："bacd"
>
>
> 提示：
>
> 1 <= s.length <= 104
> s 仅由小写英文组成
> 1 <= k <= 104
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode.cn/problems/reverse-string-ii
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

> 这道题目其实也是模拟，实现题目中规定的反转规则就可以了。
>
> 一些同学可能为了处理逻辑：每隔2k个字符的前k的字符，写了一堆逻辑代码或者再搞一个计数器，来统计2k，再统计前k个字符。
>
> 其实在遍历字符串的过程中，只要让 i += (2 * k)，i 每次移动 2 * k 就可以了，然后判断是否需要有反转的区间。
>
> 因为要找的也就是每2 * k 区间的起点，这样写，程序会高效很多。
>
> **所以当需要固定规律一段一段去处理字符串的时候，要想想在在for循环的表达式上做做文章。**

```go
package main

import "fmt"

func reverseStr(s string, k int) string {
	temp := []byte(s)
	n := len(temp)
	if n <= 1 || k == 1 {
		return s
	}
	for i := 0; i < n; i += 2 * k {
		if i+k <= n {
			reverse(temp[i : i+k])
		} else {
			reverse(temp[i:n])
		}
	}
	return string(temp)
}

func reverse(s []byte) {
	l, r := 0, len(s)-1
	for l < r {
		s[l], s[r] = s[r], s[l]
		l++
		r--
	}

}

func main() {
	s := "abcdefghijklmn"
	k := 2
	fmt.Println(reverseStr(s, k))
}

```



:::



## 3. 替换空格 E

:::details

> 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
>
>  
>
> 示例 1：
>
> 输入：s = "We are happy."
> 输出："We%20are%20happy."
>
>
> 限制：
>
> 0 <= s 的长度 <= 10000
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode.cn/problems/ti-huan-kong-ge-lcof
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



```go
func replaceSpace(s string) string {
	temp := string(s)
	n := len(s)
	res := []byte{}
	for i := 0; i < n; i++ {
		if temp[i] == ' ' {
			res = append(res, '%')
			res = append(res, '2')
			res = append(res, '0')
		} else {
			res = append(res, temp[i])
		}
	}
	return string(res)
}

```





:::



## 4. 颠倒字符串里的单词



:::details

> 给你一个字符串 s ，颠倒字符串中 单词 的顺序。
>
> 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
>
> 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。
>
> 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。
>
>  
>
> 示例 1：
>
> 输入：s = "the sky is blue"
> 输出："blue is sky the"
> 示例 2：
>
> 输入：s = "  hello world  "
> 输出："world hello"
> 解释：颠倒后的字符串中不能存在前导空格和尾随空格。
> 示例 3：
>
> 输入：s = "a good   example"
> 输出："example good a"
> 解释：如果两个单词间有多余的空格，颠倒后的字符串需要将单词间的空格减少到仅有一个。
>
>
> 提示：
>
> 1 <= s.length <= 104
> s 包含英文大小写字母、数字和空格 ' '
> s 中 至少存在一个 单词
>
>
> 进阶：如果字符串在你使用的编程语言中是一种可变数据类型，请尝试使用 O(1) 额外空间复杂度的 原地 解法。
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode.cn/problems/reverse-words-in-a-string
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



总体思路：

- 先去掉两端的空格
- 双指针从后往前，遇到空格说明遇到单词，单词入栈
- 快指针左移
- 慢指针=快指针
- 循环递归

```go
func reverseWords(s string) string {
    s = strings.TrimSpace(s)
    n := len(s)
    i, j := n-1, n-1
    res := make([]string, 0)
    for i >= 0 {
        for j >= 0 && s[j] != ' ' {
            j--
        }
        // s[j] == ' '
        // 切片左闭右开
        // fmt.Println(s[j+1:i+1], len(s[j+1:i+1]))
        res = append(res, s[j+1:i+1])
        // 左移
        for j >= 0 && s[j] == ' ' {
            j--
        }
        i = j
        j -= 1
    }
    return strings.Join(res, " ")


}
```

:::