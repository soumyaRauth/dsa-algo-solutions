//[1,2,3,4,5] target = 7 solve this using two pointer approach
var TwoSum2 = function (nums, target) {
    var pointer1 = 0;
    var pointer2 = nums.length - 1;
    while (pointer1 < pointer2) {
        var sum = nums[pointer1] + nums[pointer2];
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
var target = TwoSum2([1, 2, 3, 4, 5], 17);
console.log(target);
