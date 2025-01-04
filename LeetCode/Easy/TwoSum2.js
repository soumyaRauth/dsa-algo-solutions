"use strict";
//[1,2,3,4,5] target = 7 solve this using two pointer approach
const TwoSum2 = (nums, target) => {
    let pointer1 = 0;
    let pointer2 = nums.length - 1;
    while (pointer1 < pointer2) {
        let sum = nums[pointer1] + nums[pointer2];
        if (sum === target) {
            return [pointer1, pointer2];
        }
        else if (sum < target) {
            pointer1++;
        }
        else if (sum > target) {
            pointer2--;
        }
    }
    return [];
};
let target = TwoSum2([1, 2, 3, 4, 5], 17);
console.log(target);
