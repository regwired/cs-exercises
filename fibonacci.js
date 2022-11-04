"use strict";

const fibs = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    i < 2 ? result.push(i) : result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
}

console.log(fibs(8));


const fibsRec = (n) => n == 2 ? [0, 1] : [...fibsRec(n - 1), fibsRec(n - 1)[n-2] + fibsRec(n - 1)[n - 3]];

console.log(fibsRec(8));