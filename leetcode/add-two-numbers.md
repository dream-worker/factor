2. 两数相加

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// l1 和 l2 都是逆序方式存储的
var l1 = [2,4,3]
var l2 = [5,6,4]
var asc1 , asc2, l3, asc3
var addTwoNumbers = function(l1, l2) {
    // l1 和 l2 元数据为正序数字
    asc1 = l1.reverse().join('')
    asc2 = l2.reverse().join('')
    // 两数相加之和，为所求值数字类型正序 l3
    l3 =  ( Number(asc1) +  Number(asc2))
    // 结果值转为数组且倒序
    asc3 = String(l3).split('').reverse()
    console.log( asc3 )
    return asc3
  
  


};
addTwoNumbers(l1,l2)
```