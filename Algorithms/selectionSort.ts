const selectionSort = (arr: Array<number>) => {
  //- Selection sort algorithm
  //- Sort by selecting each element and comparing it with the remaining elements
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

let sort = selectionSort([2, 6, 4, 8, 3, 2]);

console.log(sort);
