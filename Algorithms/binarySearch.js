var binarySearch = function (array, value, left, right) {
    while (left <= right) {
        var middle = Math.floor((left + right) / 2);
        console.log("Middle stump");
        console.log(middle);
        if (array[middle] == value) {
            return middle;
        }
        else if (array[middle] > value) {
            right = middle - 1;
        }
        else if (array[middle] < value) {
            left = middle + 1;
        }
    }
    return -1;
};
var res = binarySearch([1, 2, 3, 4, 5], 1, 0, 4);
console.log("binary search result:", res);
