//write binary sort
//-takes a sorted array and takes a number to find and the returns the index of the number in the array
var binarySearch2 = function (arr, num) {
    var first = 0;
    var last = arr.length - 1;
    var result = -1;
    while (first <= last) {
        var mid = Math.floor((first + last) / 2);
        if (arr[mid] == num) {
            result = mid;
            last = mid - 1;
        }
        else if (num > arr[mid]) {
            first = mid + 1;
        }
        else if (num < arr[mid]) {
            last = mid - 1;
        }
    }
    return result;
};
var bs = binarySearch2([1, 3, 2, 2, 3, 4], 2);
console.log(bs);
