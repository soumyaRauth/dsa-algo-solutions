function reverseWords(s) {
    var splitted = s.split("");
    var index = 0;
    var left = 0;
    while (index <= splitted.length) {
        if (splitted[index] == " " || index == splitted.length) {
            var temp_right = index - 1;
            while (left < temp_right) {
                //-reverseWords
                var temp = splitted[left];
                splitted[left] = splitted[temp_right];
                splitted[temp_right] = temp;
                left++;
                temp_right--;
            }
            left = index + 1;
        }
        index++;
    }
    return splitted.join(" ");
}
reverseWords("Let's take LeetCode contest");
