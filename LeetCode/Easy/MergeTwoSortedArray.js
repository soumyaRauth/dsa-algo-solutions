/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    nums1.length = m;
    nums1.push.apply(nums1, nums2);
    for (var i = 0; i < nums1.length; i++) {
        for (var j = i + 1; j < nums1.length; j++) {
            if (nums1[j] <= nums1[i]) {
                var temp = nums1[i];
                nums1[i] = nums1[j];
                nums1[j] = temp;
            }
        }
    }
    console.log(nums1);
}
merge([0], 0, [1], 1);
