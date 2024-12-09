//What is selection sort? Answer: Selection is a sorting algorithm which sorts an array either from increasing to decreasing or the vice versa on an unsorted array obviously. If we need to do an increasing sort on the unsorted array [3,6,2,8,4] after the sorting we will come up with an array with the result of [2,3,4,6,8]
//let's write this sorting algorithm

const selectionSort = (array: Array<number>): Array<number> => {
  if (array.length == 0) {
    return [];
  }
  //from smaller to the higher
  for (let i = 0; i < array.length - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }

      if (smallest != i) {
        let temp = array[i];
        array[i] = array[smallest];
        array[smallest] = temp;
      }
    }
  }
  return array;
};

let selectionSrt = selectionSort([3, 6, 2, 8, 4]);
console.log(selectionSrt);
