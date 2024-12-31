function isValid(s) {
    var stack = [];
    var paranthesis = {
        "(": ")",
        "{": "}",
        "[": "]",
    };
    for (var i = 0; i < s.length; i++) {
        if (s[i] in paranthesis) {
            stack.push(paranthesis[s[i]]);
        }
        else {
            var poppedValue = stack.pop();
            if (poppedValue != s[i]) {
                return false;
            }
        }
    }
    if (stack.length == 0) {
        return true;
    }
    else {
        return false;
    }
}
var result = isValid("([]");
console.log(result);
