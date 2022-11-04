"use strict";

const arr = [4, 242, 43448, 8, 6, 2, 1, 4, 3, 776, 533, 33212, 53154, 22, 7, 5, 3];

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  const middleIndex = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middleIndex));
  const right = mergeSort(arr.slice(middleIndex));
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged.push(left[0]);
      left.shift();
    } else {
      merged.push(right[0]);
      right.shift();
    }
  }

  left.length > 0 ? merged.push(...left) : merged.push(...right);
  
  return merged;
};

console.log(mergeSort(arr));