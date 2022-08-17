"use strict";

interval = 0;

const partition = function (left, right) {
  // use the leftmost value as pivot
  // mark it as yellow
  const pivot = barValue[left];
  animation(bars[left], barValue[left], "#ffd43b", interval++);

  let i = left;
  let j = right;

  while (i < j) {
    // traverse from left to right to look for leftmost element which is greater than pivot
    do {
      i++;
      if (i >= j) break;
      animation(bars[i], barValue[i], "#ff6b6b", interval++);
      if (barValue[i] > pivot) {
        break;
      }
      animation(bars[i], barValue[i], "#96f2d7", interval);
    } while (barValue[i] <= pivot);

    // traverse from right to left to look for rightmost element which is smaller than pivot
    do {
      j--;
      if (j < i) break;
      animation(bars[j], barValue[j], "#ff6b6b", interval++);
      if (barValue[j] <= pivot) {
        break;
      }
      animation(bars[j], barValue[j], "#96f2d7", interval);
    } while (barValue[j] > pivot);

    // swap elements to make sure all elements on the left are smaller than pivot
    // vice versa
    if (i < j) {
      animation(bars[i], barValue[i], "#da77f2", interval);
      animation(bars[j], barValue[j], "#da77f2", interval++);

      swap(barValue, i, j);

      animation(bars[i], barValue[i], "#228be6", interval);
      animation(bars[j], barValue[j], "#228be6", interval++);
      animation(bars[i], barValue[i], "#96f2d7", interval);
      animation(bars[j], barValue[j], "#96f2d7", interval++);
    }
  }

  // swap pivot to its correct position
  animation(bars[left], barValue[left], "#da77f2", interval);
  animation(bars[j], barValue[j], "#da77f2", interval++);

  swap(barValue, left, j);

  // mark pivot as blue since it is the only element that is at its correct position for sure
  animation(bars[left], barValue[left], "#96f2d7", interval);
  animation(bars[j], barValue[j], "#228be6", interval++);
  return j;
};

const quickSort = function (left, right) {
  if (left < right) {
    const k = partition(left, right);
    quickSort(left, k);
    quickSort(k + 1, right);
  } else {
    return;
  }
};
