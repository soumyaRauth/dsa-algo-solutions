var reverseString = function (name) {
    //name.slice(0,-1)
    if (name != "") {
        var result = name[name.length - 1];
        name = name.slice(0, -1);
        return result + reverseString(name);
    }
    else {
        return "";
    }
};
console.log(reverseString("pussy"));
