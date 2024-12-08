// Problem 3: Sum of Array
// Write a recursive function to find the sum of all elements in an array.

const SumOfArray = (array: number[]): number => {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + SumOfArray(array.slice(1));
  }
};
let sum = SumOfArray([6, 1, 2, 3, 4, 5]);
console.log(sum);
