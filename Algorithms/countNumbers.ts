//-Write a recursive function to count the number of items in a list

const countItems = (arr: Array<number>, index = 0) => {
  if (index === arr.length) {
    return 0;
  }
  return 1 + countItems(arr, index + 1);
};

const count = countItems([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(count);
