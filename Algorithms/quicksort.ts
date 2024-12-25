const QuickSort = (num: number[]): number[] => {
  //-Finding the basecase
  if (num.length <= 1) {
    return num;
  }

  //-Finding the pivot
  const pivot: number = num[num.length - 1];
  const left: number[] = [];
  const right: number[] = [];

  //-Partitioning
  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] < pivot) {
      left.push(num[i]);
    } else {
      right.push(num[i]);
    }
  }

  return [...QuickSort(left), pivot, ...QuickSort(right)];
};

const sorted = QuickSort([1, 4]);
console.log(sorted);
