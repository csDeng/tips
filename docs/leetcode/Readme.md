# 刷题吧

刷题题单主要源于[代码随想录 (programmercarl.com)](https://programmercarl.com/)，实现语言`GO`



## 数组

### 1. 二分查找 E 

:::details

> 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
>
>
> 示例 1:
>
> 输入: nums = [-1,0,3,5,9,12], target = 9
> 输出: 4
> 解释: 9 出现在 nums 中并且下标为 4
> 示例 2:
>
> 输入: nums = [-1,0,3,5,9,12], target = 2
> 输出: -1
> 解释: 2 不存在 nums 中因此返回 -1
>
>
> 提示：
>
> 你可以假设 nums 中的所有元素是不重复的。
> n 将在 [1, 10000]之间。
> nums 的每个元素都将在 [-9999, 9999]之间。
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/binary-search
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

* 解法



* 代码实现

```go
func search(nums []int, target int) int {
    n := len(nums)
    if n == 1 {
        if nums[0] == target {
            return 0
        } else {
            return -1
        }
        
    }
    low, high := 0, n-1
    var mid int 
    for low <= high {
        mid = low + (high-low) / 2
        if nums[mid] == target {
            return mid
        } else if nums[mid] < target {
            low = mid + 1 
        } else {
            high = mid - 1
        }
    }
    return -1

}
```



:::



### 2.移除元素 E

:::details

> 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
>
> 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
>
> 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
>
>  
>
> 说明:
>
> 为什么返回数值是整数，但输出的答案是数组呢?
>
> 请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
>
> 你可以想象内部操作如下:
>
> // nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
> int len = removeElement(nums, val);
>
> // 在函数里修改输入数组对于调用者是可见的。
> // 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
> for (int i = 0; i < len; i++) {
>     print(nums[i]);
> }
>
>
> 示例 1：
>
> 输入：nums = [3,2,2,3], val = 3
> 输出：2, nums = [2,2]
> 解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
> 示例 2：
>
> 输入：nums = [0,1,2,2,3,0,4,2], val = 2
> 输出：5, nums = [0,1,4,0,3]
> 解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
>
>
> 提示：
>
> 0 <= nums.length <= 100
> 0 <= nums[i] <= 50
> 0 <= val <= 100
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/remove-element
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



```go
func removeElement(nums []int, val int) int {
    n := len(nums)
    if n == 0 {
        return 0
    }
    low,high := 0, n-1

    for low < high {
        for low < high && nums[high] == val {
            high --
        }
        if high == 0  || low == high{
            break
        }
        if nums[low] == val && low != high {
            nums[low] = nums[high]
            high--
        }
        if low != high {
            low ++ 
        }
        
    }
    if nums[low] != val {
        low ++
    }
    return low

}
```



:::



### 3. 有序数组的平方 E

:::details

> 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
>
>  
>
> 示例 1：
>
> 输入：nums = [-4,-1,0,3,10]
> 输出：[0,1,9,16,100]
> 解释：平方后，数组变为 [16,1,0,9,100]
> 排序后，数组变为 [0,1,9,16,100]
> 示例 2：
>
> 输入：nums = [-7,-3,2,3,11]
> 输出：[4,9,9,49,121]
>
>
> 提示：
>
> 1 <= nums.length <= 104
> -104 <= nums[i] <= 104
> nums 已按 非递减顺序 排序
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/squares-of-a-sorted-array
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



```go
func sortedSquares(nums []int) []int {
    n := len(nums)
    low, high := 0, n-1
    res := make([]int,n)
    var l, h int
    i := n-1
    for low <= high {
        l,h = nums[low], nums[high]
        if l*l > h*h {
            res[i] = l*l
            low ++
        } else {
            res[i] = h*h
            high --
        }
        i--
    }
    return res
}
```



:::



### 4. 长度最小的子数组  M

:::details

> 给定一个含有 n 个正整数的数组和一个正整数 target 。
>
> 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
>
>  
>
> 示例 1：
>
> 输入：target = 7, nums = [2,3,1,2,4,3]
> 输出：2
> 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
> 示例 2：
>
> 输入：target = 4, nums = [1,4,4]
> 输出：1
> 示例 3：
>
> 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
> 输出：0
>
>
> 提示：
>
> 1 <= target <= 109
> 1 <= nums.length <= 105
> 1 <= nums[i] <= 105
>
>
> 进阶：
>
> 如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



```go
func myMin(a,b int) int {
    if a < b {
        return a
    } else {
        return b
    }
}

func minSubArrayLen(target int, nums []int) int {
    n := len(nums)
    ans := n+1
    left,right := 0,0
    sum := 0
    for right < n {
        sum += nums[right]
        for sum >= target  {
            ans = myMin(ans, right - left + 1)
            sum -= nums[left]
            left ++ 
        }
        right ++
    }
    if ans == n+1 {
        return 0
    }
    return ans
    
}
```



:::



### 5. 螺旋矩阵Ⅱ  M

:::details

> 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
>
>  
>
> 示例 1：
>
> 输入：n = 3
> 输出：[[1,2,3],[8,9,4],[7,6,5]]
> 示例 2：
>
> 输入：n = 1
> 输出：[[1]]
>
>
> 提示：
>
> 1 <= n <= 20
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/spiral-matrix-ii
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```go
func generateMatrix(n int) [][]int {
    matrix := make([][]int,n)
    for i:=0; i<n; i++ {
        matrix[i] = make([]int, n)
    }
    // 左闭右闭
    top, bottom := 0, n-1
    left,right := 0,n-1
    num, total := 1, n*n
    
    for num <= total {
        for i:=left; i<=right; i++ {
            matrix[top][i] = num
            num ++
        } 
        top ++
        for i:= top; i<= bottom; i++ {
            matrix[i][right] = num
            num ++
        }
        right --
        for i:=right; i>=left; i-- {
            matrix[bottom][i] = num
            num ++
        }
        bottom --
        for i:= bottom; i>= top; i-- {
            matrix[i][left] = num
            num ++
        }
        left ++
    }
    return matrix
}
```



:::

## 链表







## 哈希表







## 字符串





## 双指针法





## 栈与队列







## 二叉树





## 回溯





## 贪心





## 动态规划



## 单调栈







