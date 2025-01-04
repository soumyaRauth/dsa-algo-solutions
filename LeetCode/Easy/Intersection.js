function intersection(nums1, nums2) {
    var set = new Set(nums1);
    var result = new Set();
    var i = 0;
    while (i < nums2.length) {
        if (set.has(nums2[i])) {
            result.add(nums2[i]);
        }
    }
    return Array.from(result);
}
intersection([1, 2, 2, 1], [2, 2]);
