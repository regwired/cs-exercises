"use strict";

const fibs = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    (i < 2) ? result.push(i) : result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
}

console.log(fibs(8));
