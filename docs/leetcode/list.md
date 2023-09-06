# 链表



### 1. 移除链表元素 E

:::details

> 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
>
>
> 示例 1：
>
> 输入：head = [1,2,6,3,4,5,6], val = 6
> 输出：[1,2,3,4,5]
> 示例 2：
>
> 输入：head = [], val = 1
> 输出：[]
> 示例 3：
>
> 输入：head = [7,7,7,7], val = 7
> 输出：[]
>
>
> 提示：
>
> 列表中的节点数目在范围 [0, 104] 内
> 1 <= Node.val <= 50
> 0 <= val <= 50
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/remove-linked-list-elements
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeElements(head *ListNode, val int) *ListNode {
    if head == nil {
        return head
    }
    for head != nil && head.Val == val {
        head = head.Next
    }
    node := head
    for node !=nil && node.Next != nil {
        if node.Next.Val == val {
            node.Next = node.Next.Next
        } else {
            node = node.Next
        }
    }
    return head

}
```



:::



### 2. 设计链表 M

:::details

> 设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。
>
> 在链表类中实现这些功能：
>
> get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
> addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
> addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
> addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
> deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
>
>
> 示例：
>
> MyLinkedList linkedList = new MyLinkedList();
> linkedList.addAtHead(1);
> linkedList.addAtTail(3);
> linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
> linkedList.get(1);            //返回2
> linkedList.deleteAtIndex(1);  //现在链表是1-> 3
> linkedList.get(1);            //返回3
>
>
> 提示：
>
> 所有val值都在 [1, 1000] 之内。
> 操作次数将在  [1, 1000] 之内。
> 请不要使用内置的 LinkedList 库。
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/design-linked-list
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

* 这道题主要考验个人的代码功底，语言之间的差异（比如Go,将一个一个`node = nil`之后，判断`node==nil`为`false`这个小坑，以及一些引用数据类型的中间变量引起的坑）。

* 在coding之前一定要考虑清楚每一个函数的情况

  - addAthead

    > 1. 空链表添加头节点
    > 2. 非空链表添加头节点

  - addTail

    > 1. 在空链表添加尾节点
    > 2. 非空链表添加尾节点

  - addAtIndex

    > 1. index是头节点
    > 2. index是尾节点
    > 3. index是中间节点

  - deleteAtIndex

    > 跟`addAtIndex`一致，三种情况

  - Get

    > 1. 获取头节点
    > 2. 获取非头节点

```go
var (
	NILVAL = -1
	ZERO   = 0
)

type MyLinkedList struct {
	Val  int
	Next *MyLinkedList
}

func Constructor() MyLinkedList {
	link := MyLinkedList{
		Val:  NILVAL,
		Next: nil,
	}
	return link
}

func (this *MyLinkedList) Get(index int) int {
	for this != nil && index != 0 {
		this = this.Next
		index--
	}
	if index == 0 && this != nil && this.Val != NILVAL {
		return this.Val
	}
	return NILVAL
}

func (this *MyLinkedList) AddAtHead(val int) {
	if this.Val == NILVAL {
		this.Val = val
		return
	}
	reg := &MyLinkedList{
		Val:  this.Val,
		Next: this.Next,
	}
	this.Val = val
	this.Next = reg
}

func (this *MyLinkedList) AddAtTail(val int) {
	if this.Val == NILVAL {
		this.Val = val
		return
	}
	for this != nil && this.Next != nil {
		this = this.Next
	}
	this.Next = &MyLinkedList{
		Val: val,
	}
}

func (this *MyLinkedList) AddAtIndex(index int, val int) {
	if index <= 0 {
		this.AddAtHead(val)
	}
	// 1之前插入，相当于在头节点后面插入
	for this != nil && index != 1 {
		this = this.Next
		index--
	}
	if this != nil && index == 1 {
		reg := this.Next
		this.Next = &MyLinkedList{
			Val:  val,
			Next: reg,
		}
	}
	if this == nil && index == 0 {
		this.AddAtTail(val)
	}
}

func (this *MyLinkedList) DeleteAtIndex(index int) {
	// delete head
	if index == 0 && this != nil && this.Next == nil {
		this.Val = NILVAL
		this = nil
		return
	}
	if index == 0 && this != nil && this.Next != nil {
		this.Val = this.Next.Val
		this.Next = this.Next.Next
		this.Next = nil
		return
	}
	// 如果是删除节点1则不用减
	for this != nil && index != 1 {
		this = this.Next
		index--
	}
	if this != nil && this.Next != nil && index == 1 {
		this.Next = this.Next.Next
	}
}

func (this *MyLinkedList) show() {
	for this != nil {
		fmt.Printf("%d ", this.Val)
		this = this.Next
	}
	fmt.Println()
}
```



:::



### 3. 反转链表 E

:::details

> 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
>
>
> 示例 1：
>
> 输入：head = [1,2,3,4,5]
> 输出：[5,4,3,2,1]
> 示例 2：
>
>
> 输入：head = [1,2]
> 输出：[2,1]
> 示例 3：
>
> 输入：head = []
> 输出：[]
>
>
> 提示：
>
> 链表中节点的数目范围是 [0, 5000]
> -5000 <= Node.val <= 5000
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/reverse-linked-list
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(head *ListNode) *ListNode {
    if head == nil || head.Next == nil {
        return head
    }
    var prev *ListNode
    cur := head
    next := head.Next
    for cur!= nil {
        next = cur.Next
        cur.Next = prev
        prev = cur
        cur = next
    }
    return prev
}
```

:::



### 4. 链表相交 E

:::details

> 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
>
> 图示两个链表在节点 c1 开始相交：
>
> 
>
> 题目数据 保证 整个链式结构中不存在环。
>
> 注意，函数返回结果后，链表必须 保持其原始结构 。
>
> 
>
> 示例 1：
>
> 
>
> 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
> 输出：Intersected at '8'
> 解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
> 从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
> 在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
> 示例 2：
>
> 
>
> 输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
> 输出：Intersected at '2'
> 解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。
> 从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。
> 在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
> 示例 3：
>
> 
>
> 输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
> 输出：null
> 解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
> 由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
> 这两个链表不相交，因此返回 null 。
>
>
> 提示：
>
> listA 中节点数目为 m
> listB 中节点数目为 n
> 0 <= m, n <= 3 * 104
> 1 <= Node.val <= 105
> 0 <= skipA <= m
> 0 <= skipB <= n
> 如果 listA 和 listB 没有交点，intersectVal 为 0
> 如果 listA 和 listB 有交点，intersectVal == listA[skipA + 1] == listB[skipB + 1]
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```go
func getIntersectionNode(headA, headB *ListNode) *ListNode {
    if headA == nil || headB == nil {
        return nil
    }
    pa, pb := headA, headB
    for pa != pb {
        if pa == nil {
            pa = headB
        } else {
            pa = pa.Next
        }
        if pb == nil {
            pb = headA
        } else {
            pb = pb.Next
        }
    }
    return pa
}
```

:::

**示例 1：**

### 5. 环形链表Ⅱ M

:::details

> 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
>
> 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
>
> 不允许修改 链表。
>
> 
>
> 示例 1：
>
> ![img](./pics/list/circularlinkedlist.png)
>
> 输入：head = [3,2,0,-4], pos = 1
> 输出：返回索引为 1 的链表节点
> 解释：链表中有一个环，其尾部连接到第二个节点。
> 示例 2：
>
> ![img](./pics/list/circularlinkedlist_test2.png)
>
> 输入：head = [1,2], pos = 0
> 输出：返回索引为 0 的链表节点
> 解释：链表中有一个环，其尾部连接到第一个节点。
> 示例 3：
>
> ![img](./pics/list/circularlinkedlist_test3.png)
>
> 输入：head = [1], pos = -1
> 输出：返回 null
> 解释：链表中没有环。
>
>
> 提示：
>
> 链表中节点的数目范围在范围 [0, 104] 内
> -105 <= Node.val <= 105
> pos 的值为 -1 或者链表中的一个有效索引
>
>
> 进阶：你是否可以使用 O(1) 空间解决此题？
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/linked-list-cycle-ii
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

* 直接hash

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func detectCycle(head *ListNode) *ListNode {
    hashMap := make(map[*ListNode]int)
    cur := head
    index := 0
    for cur != nil {
        if _,ok := hashMap[cur]; ok {
            return cur
        } else {
            hashMap[cur] = index
            index ++ 
            cur = cur.Next
        }
    }
    return nil
}
```

:::

### 6. 两两相交链表节点 M

:::details

> 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
>
> ![img](./pics/list/swap_ex1.jpg)
>
> 示例 1：
>
> 输入：head = [1,2,3,4]
> 输出：[2,1,4,3]
> 示例 2：
>
> 输入：head = []
> 输出：[]
> 示例 3：
>
> 输入：head = [1]
> 输出：[1]
>
>
> 提示：
>
> 链表中节点的数目在范围 [0, 100] 内
> 0 <= Node.val <= 100
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/swap-nodes-in-pairs
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

在头部加一个空节点，方便操作。

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
    myHead := &ListNode{Next:head}
    var prev, nex *ListNode

    prev = myHead
    for head != nil && head.Next != nil {
        prev.Next = head.Next

        // 先保存下一轮要用的节点，避免覆盖
        nex = head.Next.Next
        head.Next.Next = head
        head.Next = nex

        prev = head
        head = nex
    }
    return myHead.Next
}
```



:::



### 7. 删除链表的倒数第N个节点 M

:::details

> 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
>
> ![19.删除链表的倒数第N个节点](./pics/list/20210510085957392.png)
>
> 示例 1：
>
> 输入：head = [1,2,3,4,5], n = 2
> 输出：[1,2,3,5]
> 示例 2：
>
> 输入：head = [1], n = 1
> 输出：[]
> 示例 3：
>
> 输入：head = [1,2], n = 1
> 输出：[1]
>
> 提示：
>
> 链表中结点的数目为 sz
> 1 <= sz <= 30
> 0 <= Node.val <= 100
> 1 <= n <= sz
>
>
> 进阶：你能尝试使用一趟扫描实现吗？
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
    if head == nil || ( head.Next == nil && n==1 ) {
        return nil
    }
    len := 0
    cur := head
    for cur != nil {
        len ++
        cur = cur.Next
    }
    if len == n {
        return head.Next
    }
    cnt := len - n - 1
    cur = head
    for cnt > 0  {
        cur = cur.Next
        cnt--
    }
    cur.Next = cur.Next.Next
    return head
}
```

```go
// 快慢指针，新加个节点，避免删除头节点的情况出现的错误
func removeNthFromEnd(head *ListNode, n int) *ListNode {
    myHead := &ListNode{Next:head}

    slow, fast := myHead, myHead
    for n > 0 && fast != nil {
        fast = fast.Next
        n--
    } 
    for slow != nil && fast != nil && fast.Next != nil {
        slow = slow.Next
        fast = fast.Next
    }
    slow.Next = slow.Next.Next
    return myHead.Next
}
```

:::