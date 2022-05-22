# 前缀和

## [525. 连续数组](https://leetcode.cn/problems/contiguous-array/) M

:::details

给定一个二进制数组 `nums` , 找到含有相同数量的 `0` 和 `1` 的最长连续子数组，并返回该子数组的长度。

**示例 1:**

```
输入: nums = [0,1]
输出: 2
说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
```

**示例 2:**

```
输入: nums = [0,1,0]
输出: 2
说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。
```

**提示：**

- `1 <= nums.length <= 105`
- `nums[i]` 不是 `0` 就是 `1`



### 解题思路

> 因为只会出现0或1，求相同数量的最长连续子数组，所以为了方便，我们把0定义为`-1`，当前缀和等于0时，说明，当前子数组的01相等。

```go
func findMaxLength(nums []int) (maxLength int) {
	n := len(nums)
	/**
	记录前缀和出现的下标
	*/
	hash := map[int]int{0: -1}
	k := 0
	for i := 0; i < n; i++ {
		if nums[i] == 0 {
			k--
		} else {
			k++
		}
		if prevIndex, ok := hash[k]; ok {
			maxLength = max(maxLength, i-prevIndex)
		} else {
			hash[k] = i
		}
	}
	return maxLength
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```

:::



## [523. 连续的子数组和 - 力扣（LeetCode）M](https://leetcode.cn/problems/continuous-subarray-sum/)

:::details

给你一个整数数组 nums 和一个整数 k ，编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：

子数组大小 至少为 2 ，且
子数组元素总和为 k 的倍数。
如果存在，返回 true ；否则，返回 false 。

如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。0 始终视为 k 的一个倍数。

示例 1：

输入：nums = [23,2,4,6,7], k = 6
输出：true
解释：[2,4] 是一个大小为 2 的子数组，并且和为 6 。
示例 2：

输入：nums = [23,2,6,4,7], k = 6
输出：true
解释：[23, 2, 6, 4, 7] 是大小为 5 的子数组，并且和为 42 。 
42 是 6 的倍数，因为 42 = 7 * 6 且 7 是一个整数。
示例 3：

输入：nums = [23,2,6,4,7], k = 13
输出：false


提示：

1 <= nums.length <= 105
0 <= nums[i] <= 109
0 <= sum(nums[i]) <= 231 - 1
1 <= k <= 231 - 1

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/continuous-subarray-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



### 解题思路

> 因为题目要求的是子数组元素总和是k的倍数，也就是说，需要取模运算。
>
> 所以，在求前缀和的时候，直接求余数，当出现相同余数的时候，说明当前子数组的前缀和符合倍数要求，然后判断子数组长度，如果符合条件则直接返回。



```go
func checkSubarraySum(nums []int, k int) bool {
	n := len(nums)
	if n < 2 {
		return false
	}
	/**
	规定空的前缀的结束下标为 -1，
	由于空的前缀的元素和为 0，因此在哈希表中存入键值对 (0,-1)。
	*/
	prevSum := map[int]int{0: -1}
	remainder := 0

	for i, num := range nums {
		remainder = (remainder + num) % k

		if prevIndex, ok := prevSum[remainder]; ok {
			if i-prevIndex >= 2 {
				return true
			}
		} else {
			prevSum[remainder] = i
		}
	}
	return false

}
```







:::