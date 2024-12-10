function findMax(array: number[], index: number = 0): number {
  // Base case: if index is out of bounds, return the lowest possible number
  if (index === array.length - 1) {
    return array[index];
  }

  // Recursively find the maximum in the rest of the array
  const maxInRest = findMax(array, index + 1);

  // Compare the current element with the maximum from the rest of the array
  return array[index] > maxInRest ? array[index] : maxInRest;
}

// Example usage:
const arr = [3, 1, 4, 1, 5, 9, 2, 6];
const max = findMax(arr);
console.log(max); // Output: 9
