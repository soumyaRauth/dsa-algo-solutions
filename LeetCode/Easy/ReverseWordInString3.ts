function reverseWords(s: string): string {
  let splitted = s.split("");

  let index = 0;
  let left = 0;
  while (index <= splitted.length) {
    if (splitted[index] == " " || index == splitted.length) {
      let temp_right = index - 1;

      while (left < temp_right) {
        //-reverseWords
        let temp = splitted[left];
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
