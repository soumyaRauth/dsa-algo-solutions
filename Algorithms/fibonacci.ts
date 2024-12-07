const Fibonacci = (n: number) => {
  if (n === 0) return 0; // F(0) = 0
  if (n === 1) return 1; // F(1) = 1

  // Recursive case
  return Fibonacci(n - 1) + Fibonacci(n - 2);
};

console.log(Fibonacci(8));
