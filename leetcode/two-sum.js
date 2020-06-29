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