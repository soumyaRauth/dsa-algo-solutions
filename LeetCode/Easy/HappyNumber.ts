function isHappy(n: number): boolean {
 
    const seen = new Set<number>(); 

    while (n != 1) {
      if (seen.has(n)) {
            return false; // Cycle detected, not a happy number
        }
        seen.add(n)
      n = findSquareSum(n);
      
    }
    return true;
  
    
};


function findSquareSum(n:any) {
  let sum = 0;
  let i = 0;
  while (i < n.toString().length) {
    sum = sum + n.toString()[i] ** 2;
    i++;
  }

  return sum;
}


let hp = isHappy(19);
console.log(hp);
