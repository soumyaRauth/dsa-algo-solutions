function reverseWords(s) {
    var splitted = s.split("");
    var i = 0;
    var start = 0;
    var end = 0;
    while (i < splitted.length) {
        if (splitted[i] == " ") {
            end = i - 1;
            while (start < end) {
                var temp = splitted[start];
                splitted[start] = splitted[end];
                splitted[end] = temp;
                start++;
                end--;
            }
        }
        i++;
    }
    console.log("splitted");
    console.log(splitted);
    return splitted.join(" ");
}
reverseWords("Let's take LeetCode contest");
