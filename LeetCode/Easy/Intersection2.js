function intersection(nums1, nums2) {
    //find the largest
    var i = 0;
    var j = 0;
    var set = new Set(nums2);
    var result = [];
    while (i < nums1.length) {
        if (set.has(nums1[i])) {
            result.push(nums1[i]);
        }
        i++;
    }
    console.log("result", result);
    return result;
}
intersection([1, 2, 2, 1], [2, 2]);
