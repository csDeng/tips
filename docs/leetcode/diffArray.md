# 差分数组



## 拼车 M

:::details

```shell
车上最初有 capacity 个空座位。车 只能 向一个方向行驶（也就是说，不允许掉头或改变方向）

给定整数 capacity 和一个数组 trips ,  trip[i] = [numPassengersi, fromi, toi] 表示第 i 次旅行有 numPassengersi 乘客，接他们和放他们的位置分别是 fromi 和 toi 。这些位置是从汽车的初始位置向东的公里数。

当且仅当你可以在所有给定的行程中接送所有乘客时，返回 true，否则请返回 false。

 

示例 1：

输入：trips = [[2,1,5],[3,3,7]], capacity = 4
输出：false
示例 2：

输入：trips = [[2,1,5],[3,3,7]], capacity = 5
输出：true
 

提示：

1 <= trips.length <= 1000
trips[i].length == 3
1 <= numPassengersi <= 100
0 <= fromi < toi <= 1000
1 <= capacity <= 105

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/car-pooling
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```



### **CSJerry_差分数组_前缀和_go**

- 思路



```
计算路程中每一段的人数
再计算前缀和
```

 

```
var (
    people = 0
    from = 1
    to = 2
    maxLength = 1001
)




func carPooling(trips [][]int, capacity int) bool {
// 建立差分数组
    diff := []int{}
    for i := 0; i < maxLength; i++ {
        diff = append(diff, 0)
    }
    for _, trip := range trips {
        diff[trip[from]] += trip[people]
        diff[trip[to]] -= trip[people]
    }


    // 计算前缀和
    var preSum int = 0
    for i := 0; i < maxLength; i++ {
        preSum += diff[i]
        if preSum > capacity {
            return false
        }
    }
    return true


}
```

 

:::

