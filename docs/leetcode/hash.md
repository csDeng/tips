# 哈希表



### 1.有效字母的异位词 E

:::details

> 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
>
> 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
>
> 
>
> 示例 1:
>
> 输入: s = "anagram", t = "nagaram"
> 输出: true
> 示例 2:
>
> 输入: s = "rat", t = "car"
> 输出: false
>
>
> 提示:
>
> 1 <= s.length, t.length <= 5 * 104
> s 和 t 仅包含小写字母
>
>
> 进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/valid-anagram
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```go
func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }
    n := len(s)
    hashMap := make(map[byte]int)
    for i:=0; i<n; i++ {
        v := s[i]
        if n,ok := hashMap[v]; ok {
            hashMap[v] = n + 1
        } else {
            hashMap[v] = 1
        }
    }
    for i:=0; i<n; i++  {
        v := t[i]
        if n,ok := hashMap[v]; n > 0 && ok {
            hashMap[v] = n - 1
        } else {
            return false
        }
    }
    return true
}
```

:::



### 2. 两个数组的交集 E

:::details 

> 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
>
> 
>
> 示例 1：
>
> 输入：nums1 = [1,2,2,1], nums2 = [2,2]
> 输出：[2]
> 示例 2：
>
> 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
> 输出：[9,4]
> 解释：[4,9] 也是可通过的
>
>
> 提示：
>
> 1 <= nums1.length, nums2.length <= 1000
> 0 <= nums1[i], nums2[i] <= 1000
> 通过次数295,087提交次数398,258
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/intersection-of-two-arrays
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

* 直接hash

```go
func intersection(nums1 []int, nums2 []int) []int {
    hash := make(map[int]int)
    res := make([]int,0)
    for _, v := range nums1 {
        if _,ok := hash[v]; !ok {
            hash[v] = 1
        }
    }
    for _,v := range nums2 {
        if _,ok := hash[v]; ok {
            delete(hash,v)
            res = append(res,v)
        }
    }
    return res
}
```





:::



### 3.快乐数 E

:::details

> 编写一个算法来判断一个数 n 是不是快乐数。
>
> 「快乐数」 定义为：
>
> 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
> 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
> 如果这个过程 结果为 1，那么这个数就是快乐数。
> 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
>
>  
>
> 示例 1：
>
> 输入：n = 19
> 输出：true
> 解释：
> 12 + 92 = 82
> 82 + 22 = 68
> 62 + 82 = 100
> 12 + 02 + 02 = 1
> 示例 2：
>
> 输入：n = 2
> 输出：false
>
>
> 提示：
>
> 1 <= n <= 231 - 1
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode.cn/problems/happy-number
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```go
var (
    ONE = 1
)
func isHappy(n int) bool {
    hash := make(map[int]struct{})
    for {
        sum := getSum(n)
        if sum == ONE {
            return true
        }
        if _,ok := hash[sum]; ok {
            return false
        } else {
            hash[sum] = struct{}{}
        }
        n = sum
    }
}

func getSum(n int) int {
    sum := 0
    for n > 0 {
        sum += (n%10)*(n%10)
        n /= 10
    }
    return sum
}
```



:::



### 4. 两数之和 E

:::details

> 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
>
> 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
>
> 你可以按任意顺序返回答案。
>
>  
>
> 示例 1：
>
> 输入：nums = [2,7,11,15], target = 9
> 输出：[0,1]
> 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
> 示例 2：
>
> 输入：nums = [3,2,4], target = 6
> 输出：[1,2]
> 示例 3：
>
> 输入：nums = [3,3], target = 6
> 输出：[0,1]
>
>
> 提示：
>
> 2 <= nums.length <= 104
> -109 <= nums[i] <= 109
> -109 <= target <= 109
> 只会存在一个有效答案
> 进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode.cn/problems/two-sum
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```go
func twoSum(nums []int, target int) []int {
    n := len(nums)
    ans := make([]int,0,2)
    need := make(map[int]int)
    var reg int
    for i:=0; i<n; i++ {
        reg = nums[i]
        if val,ok := need[reg]; ok {
            ans = append(ans,val, i)
            break
        } else {
            need[target-reg] = i
        }
    }
    return ans
}
```



:::



### 5. 三数之和





### 6. 四树之和

