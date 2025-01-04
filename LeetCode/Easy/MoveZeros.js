/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    var i = 0;
    var j = 0;
    while (j < nums.length) {
        //if the right pointer is not equal to zero then swap, if equals to 0 move the right pointer to the next position
        if (nums[j] !== 0) {
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        }
        j++;
    }
    return nums;
}
var res = moveZeroes([20, 1, 0, 3, 12, 100]);
console.log(res);
