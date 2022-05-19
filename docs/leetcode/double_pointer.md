### 1. 三数之和 M

:::details

> 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
>
> 注意：答案中不可以包含重复的三元组。
>
> 
>
> 示例 1：
>
> 输入：nums = [-1,0,1,2,-1,-4]
> 输出：[[-1,-1,2],[-1,0,1]]
> 示例 2：
>
> 输入：nums = []
> 输出：[]
> 示例 3：
>
> 输入：nums = [0]
> 输出：[]
>
>
> 提示：
>
> 0 <= nums.length <= 3000
> -105 <= nums[i] <= 105
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode.cn/problems/3sum
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

解题思路

> 因为题目要求输出的是value而不是index，所以为了简单起见，我们上来先来一个排序
>
> 然后利用双指针，两头往中间靠
>
> 注意去重

```go
package main

import (
	"fmt"
	"sort"
)

func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	// fmt.Println(nums)
	res := [][]int{}
	n := len(nums)
	for i := 0; i < n-2; i++ {
		l, r := i+1, n-1
		if nums[i] > 0 {
			break
		}
		if i > 0 && nums[i] == nums[i-1] {
			// 去重
			continue
		}
		for l < r {
			in, ln, rn := nums[i], nums[l], nums[r]
			if in+ln+rn == 0 {
				res = append(res, []int{in, ln, rn})
				for l < r && nums[l] == ln {
					l++
				}
				for l < r && nums[r] == rn {
					r--
				}
			} else if in+ln+rn < 0 {
				l++
			} else {
				r--
			}
		}
	}
	return res
}

func main() {
	nums := []int{-1, 0, 1, 2, -1, -4}
	fmt.Println(threeSum(nums))
}

```

:::



### 2. 四数之和 M

:::details

> 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
>
> 0 <= a, b, c, d < n
> a、b、c 和 d 互不相同
> nums[a] + nums[b] + nums[c] + nums[d] == target
> 你可以按 任意顺序 返回答案 。
>
> 
>
> 示例 1：
>
> 输入：nums = [1,0,-1,0,-2,2], target = 0
> 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
> 示例 2：
>
> 输入：nums = [2,2,2,2,2], target = 8
> 输出：[[2,2,2,2]]
>
>
> 提示：
>
> 1 <= nums.length <= 200
> -109 <= nums[i] <= 109
> -109 <= target <= 109
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode.cn/problems/4sum
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```go

func fourSum(nums []int, target int) [][]int {
	sort.Ints(nums)
	// fmt.Println(nums)
	n := len(nums)
	res := [][]int{}
	for i := 0; i < n-3; i++ {
		/**
		* 因为target可以是负数，所以不能这么剪枝
		* 例如 [-5,-4,-3,-2,1,5,4,2] target = -14
		 */
		// if nums[i] > target {
		// 	break
		// }
		// 去重 [a,a,x,y]
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		for j := i + 1; j < n-2; j++ {
			in, jn := nums[i], nums[j]
			twoSum := in + jn
			if j > i+1 && nums[j] == nums[j-1] {
				continue
			}
			l, r := j+1, n-1
			for l < r {
				ln, rn := nums[l], nums[r]
				temp := twoSum + ln + rn
				if temp == target {
					res = append(res, []int{in, jn, ln, rn})
					// 去重
					for l < r && nums[l] == ln {
						l++
					}
					for l < r && nums[r] == rn {
						r--
					}
				} else if temp < target {
					for l < r && nums[l] == ln {
						l++
					}
				} else {
					for l < r && nums[r] == rn {
						r--
					}
				}
			}

		}
	}
	return res
}
```





:::