"use strict";

interval = 0;

const merge = function (left, mid, right) {
  let p1 = left;
  let p2 = mid + 1;

  // keep a record of sorted merged array
  const temp = [];
  let tempIdx = 0;

  // two-pointer technique
  // mark visited bars with red color
  while (p1 <= mid && p2 <= right) {
    if (barValue[p1] <= barValue[p2]) {
      animation(bars[p1], barValue[p1], "#ff6b6b", ++interval);
      temp[tempIdx++] = barValue[p1++];
    } else {
      animation(bars[p2], barValue[p2], "#ff6b6b", ++interval);
      temp[tempIdx++] = barValue[p2++];
    }
  }

  // append any value left behind to the end of the temp array
  while (p1 <= mid) {
    animation(bars[p1], barValue[p1], "#ff6b6b", ++interval);
    temp[tempIdx++] = barValue[p1++];
  }

  while (p2 <= right) {
    animation(bars[p2], barValue[p2], "#ff6b6b", ++interval);
    temp[tempIdx++] = barValue[p2++];
  }

  // update sorted array, mark each bar as sorted
  p1 = left;
  for (let j = 0; j < tempIdx; j++) {
    barValue[p1++] = temp[j];
    animation(bars[p1 - 1], barValue[p1 - 1], "#228be6", ++interval);
  }
};

const mergeSort = function (left, right) {
  if (left >= right) {
    return;
  }

  // find mid point and mark it as yellow
  const mid = left + parseInt((right - left) / 2);
  animation(bars[mid], barValue[mid], "#ffd43b", ++interval);

  // call function recursively to divide left half and right half
  mergeSort(left, mid);
  mergeSort(mid + 1, right);

  // merge each half
  merge(left, mid, right);
};
