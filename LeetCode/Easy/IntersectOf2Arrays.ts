function intersect(nums1: number[], nums2: number[]): number[] {
  //   let shortest = nums1.length <= nums2.length ? nums1 : nums2;
  //   let longest = nums1.length > nums2.length ? nums1 : nums2;
  //   let i = 0;
  //   let result: number[] = [];
  //   while (i < shortest.length) {
  //     if (longest.indexOf(shortest[i]) != -1) {
  //       result.push(shortest[i]);
  //     }
  //     i++;
  //   }
  //   console.log(result);
  let set = new Set(nums1);
  let result = Array.from(set);
  return result;
}

intersect([3, 1, 1, 1, 2], [1, 1]);
