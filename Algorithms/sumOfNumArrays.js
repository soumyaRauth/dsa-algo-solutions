//- Sum of an array
var sumOfNumArray = function (arr, index) {
    if (index === void 0) { index = 0; }
    if (index == arr.length) {
        return 0;
    }
    return arr[index] + sumOfNumArray(arr, index + 1);
};
var sums = sumOfNumArray([2, 4, 5, 6]);
console.log(sums);
