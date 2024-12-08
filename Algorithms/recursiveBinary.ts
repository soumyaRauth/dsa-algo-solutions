// 1. Binary Search (Recursive)
// Implement a recursive binary search function that searches for a target value in a sorted array.

// Input: A sorted array and a target value.
// Output: The index of the target value if found, or -1 if not found.

const RecursiveBinary = (
  array: Array<number>,
  value: number,
  low: number = 0,
  high: number = array.length - 1
): number => {
  if (low > high) {
    return -1; // Base case: value not found
  }

  let mid = Math.floor((low + high) / 2);
  if (array[mid] == value) {
    return mid;
  } else if (array[mid] < value) {
    return RecursiveBinary(array, value, mid + 1, high);
  } else if (array[mid] > value) {
    return RecursiveBinary(array, value, low, mid - 1);
  }
  return -1;
};

const bin = RecursiveBinary([1, 2, 3, 4, 5], 5);
console.log(bin);
