1. 两数之和

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

示例:
```js
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

解答：
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var nums = [2, 7, 11, 15]
var target = 9
var goodNums = []

var firstVal,firstIndex,secodeVal,secodeIndex
var twoSum = function(nums, target) {
    for (var i = 0; i<= nums.length;i++){
        // 过滤大于target的数值
        if(nums[i]>target){
            break
        } 
       
        // 将满足小于target的值，放入新的数组
        goodNums.push(nums[i])
         // 遍历判断 两者之和是否为target
            for (var t=0; t<= goodNums.length; t++){
                var res = target - nums[t] 
                if(goodNums.indexOf(res) > -1){
                  firstVal = nums[t]
                    // 如果 res 在 goodNums 数组中存在，则二者索引可定
                    // 根据索引拿到第二项的值
                    var tempIndex =  goodNums.indexOf(res)
                    secodeVal = goodNums[tempIndex]                
                    firstIndex = nums.indexOf(firstVal)
                    secodeIndex = nums.indexOf(secodeVal)
                    return [firstIndex,secodeIndex]
                }
                 
                
               
            }
    }
   
};
twoSum(nums,target)
```