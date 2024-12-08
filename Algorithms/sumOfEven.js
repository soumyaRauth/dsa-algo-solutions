// 1. Sum of Even Numbers in an Array
// Write a recursive function to find the sum of all even numbers in a given array.
// Input: An array of numbers (e.g., [1, 2, 3, 4, 5, 6]).
// Output: The sum of even numbers in the array (e.g., 12 for [1, 2, 3, 4, 5, 6]).
var SumOfEven = function (array) {
    if (array.length == 0) {
        return 0;
    }
    return array[0] % 2 == 0
        ? array[0] + SumOfEven(array.slice(1))
        : SumOfEven(array.slice(1));
};
console.log(SumOfEven([2, 2, 4, 4, 8]));
