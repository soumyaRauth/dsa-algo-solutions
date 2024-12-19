/**
 *
 * @param n Dry run on FactRecursion
 * @returns
 */

const FactRecursion = (n: number) => {
  if (n == 0) {
    return 1;
  }

  return n * FactRecursion(n - 1);
};

const rec = FactRecursion(5);
console.log(rec);
