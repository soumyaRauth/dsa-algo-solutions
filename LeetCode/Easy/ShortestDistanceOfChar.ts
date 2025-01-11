function shortestToChar(s: string, c: string): number[] {
  let answer: number[] = [];
  let n = s.length;
  let cPosition = -n;
  let i = 0;

  while (i < n) {
    if (s[i] === c) {
      cPosition = i;
    }
    answer[i] = i - cPosition;
    i++;
  }

  i = n - 1;
  while (i >= 0) {
    if (s[i] === c) {
      cPosition = i;
    }
    answer[i] = Math.min(answer[i], Math.abs(i - cPosition));
    i--;
  }
  return answer;
}
// [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0];
console.log(shortestToChar("loveleetcode", "e"));
