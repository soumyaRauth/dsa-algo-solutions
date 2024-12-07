const PowerOfNumber = (n: number, p: number) => {
  if (p == 0) {
    return 1;
  } else {
    return n * PowerOfNumber(n, p - 1);
  }
};

console.log(PowerOfNumber(2, 5));
