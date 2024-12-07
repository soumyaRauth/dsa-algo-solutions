//STACK data structure implementation in stack
const SIZE_OF_STACK = 4;

let arr = new Array<number | undefined>(SIZE_OF_STACK);

let index: number = -1;
const push = (element: number) => {
  if (index < SIZE_OF_STACK - 1) {
    index = index + 1;
    console.log("index value", index);

    arr[index] = element;
    console.log(arr);
  } else {
    console.log("No space");
  }
};

push(2);
push(4);
push(5);
push(6);
push(27);
