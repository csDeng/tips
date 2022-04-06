package main

import "fmt"

func twoSum(a [5]int, target int) {
	// 需要的差值 需要该差值的索引
	need := make(map[int]int, 0)
	ans := make(map[int]int, 0)
	var num int
	for i := 0; i < len(a); i++ {
		num = a[i]
		if v, ok := need[num]; ok {
			ans[i] = v
		} else {
			need[target-num] = i
		}
	}
	fmt.Println(ans)
}

func main() {
	b := [5]int{1, 3, 5, 8, 7}
	twoSum(b, 8)
}
