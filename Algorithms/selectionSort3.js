//-Function starts here
var selectionSort3 = function (arrayw) {
    if (arrayw.length == 0) {
        return [];
    }
    for (var i = 0; i < arrayw.length - 1; i++) {
        var small = i;
        for (var j = i + 1; j < arrayw.length; j++) {
            if (arrayw[j] < arrayw[small]) {
                small = j;
            }
        }
        if (small != i) {
            var temp = arrayw[i];
            arrayw[i] = arrayw[small];
            arrayw[small] = temp;
        }
    }
    return arrayw;
};
var selectionSort3Test = selectionSort3([30, 60, 10, 3, 6, 2, 8, 4]);
console.log(selectionSort3Test);
