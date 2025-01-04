function intersection(nums1: number[], nums2: number[]): number[] {
  //find the largest

  let i = 0;
  let j = 0;
  let set = new Set(nums2);
  let result: number[] = [];

  while (i < nums1.length) {
    if (set.has(nums1[i])) {
      result.push(nums1[i]);
    }
    i++;
  }

  console.log(`result`, result);
  return result;
}

intersection([1, 2, 2, 1], [2, 2]);
