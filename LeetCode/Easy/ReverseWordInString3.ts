function reverseWords(s: string): string {
  let splitted = s.split("");
  let i = 0;
  let start = 0;
  let end = 0;
  while (i < splitted.length) {
    if (splitted[i] == " ") {
      end = i - 1;
      while (start < end) {
        let temp = splitted[start];
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
