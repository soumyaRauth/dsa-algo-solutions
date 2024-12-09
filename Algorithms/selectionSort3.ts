//-Function starts here
const selectionSort3 = (arrayw: Array<number>): Array<number> => {
  if (arrayw.length == 0) {
    return [];
  }
  for (let i = 0; i < arrayw.length - 1; i++) {
    let small = i;
    for (let j = i + 1; j < arrayw.length; j++) {
      if (arrayw[j] < arrayw[small]) {
        small = j;
      }
    }

    if (small != i) {
      let temp = arrayw[i];
      arrayw[i] = arrayw[small];
      arrayw[small] = temp;
    }
  }

  return arrayw;
};

let selectionSort3Test = selectionSort3([30, 60, 10, 3, 6, 2, 8, 4]);

console.log(selectionSort3Test);
