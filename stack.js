//STACK data structure implementation in stack
var SIZE_OF_STACK = 4;
var arr = new Array(SIZE_OF_STACK);
var index = -1;
var push = function (element) {
    if (index < SIZE_OF_STACK - 1) {
        index = index + 1;
        console.log("index value", index);
        arr[index] = element;
        console.log(arr);
    }
    else {
        console.log("No space");
    }
};
push(2);
push(4);
push(5);
push(6);
push(27);
