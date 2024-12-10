//- Sum of an array

const sumOfNumArray = (arr: Array<number>, index = 0): number => {
  if (index == arr.length) {
    return 0;
  }

  return arr[index] + sumOfNumArray(arr, index + 1);
};

let sums = sumOfNumArray([2, 4, 5, 6]);
console.log(sums);
