function intersection(nums1: number[], nums2: number[]): number[] {
  let set = new Set(nums1);
  let result = new Set<number>();
  let i = 0;

  while (i < nums2.length) {
    if (set.has(nums2[i])) {
      result.add(nums2[i]);
    }
  }
  return Array.from(result);
}

intersection([1, 2, 2, 1], [2, 2]);
