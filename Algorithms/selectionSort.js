var selectionSort = function (arr) {
    //- Selection sort algorithm
    //- Sort by selecting each element and comparing it with the remaining elements
    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
};
var sort = selectionSort([2, 6, 4, 8, 3, 2]);
console.log(sort);
