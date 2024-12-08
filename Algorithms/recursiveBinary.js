// 1. Binary Search (Recursive)
// Implement a recursive binary search function that searches for a target value in a sorted array.
// Input: A sorted array and a target value.
// Output: The index of the target value if found, or -1 if not found.
var RecursiveBinary = function (array, value, low, high) {
    if (low === void 0) { low = 0; }
    if (high === void 0) { high = array.length - 1; }
    if (low > high) {
        return -1; // Base case: value not found
    }
    var mid = Math.floor((low + high) / 2);
    if (array[mid] == value) {
        return mid;
    }
    else if (array[mid] < value) {
        return RecursiveBinary(array, value, mid + 1, high);
    }
    else if (array[mid] > value) {
        return RecursiveBinary(array, value, low, mid - 1);
    }
    return -1;
};
var bin = RecursiveBinary([1, 2, 3, 4, 5], 5);
console.log(bin);
