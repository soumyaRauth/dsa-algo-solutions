// https://leetcode.com/problems/merge-sorted-array/description/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var MergeSortedArray = function (nums1, m, nums2, n) {
    //nums1=[1,3,4,5,5]
    //nums2=[1,3,5,6]
    //m=5,n=4x
    //nums1=[1,1,3,3,4,5,5,5,6]
    nums1 = __spreadArray(__spreadArray([], nums1, true), nums2, true);
    console.log("nums1", nums1);
    var min = 0;
    for (var i = 0; i < nums1.length; i++) {
        if (nums1[i] != 0) {
            for (var j = i + 1; j < nums1.length; j++) {
                if (nums1[j] < nums1[i]) {
                    min = j;
                    var temp = nums1[i];
                    nums1[i] = nums1[j];
                    nums1[j] = temp;
                }
            }
        }
    }
    console.log(nums1);
};
MergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
