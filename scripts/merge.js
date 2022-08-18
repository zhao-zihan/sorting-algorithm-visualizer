/**
 * #ffd43b partition point
 * #ff6b6b nodes being merged
 * #228be6 merge completed (sorted)
 */

"use strict";

interval = 0;
tracerInterval = 0;

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
      animation(bars[p1], barValue[p1], "#ff6b6b", interval++);

      tracerAnimation("merge-if-comparison", true, tracerInterval++);
      tracerAnimation("merge-if-comparison", false, tracerInterval--);
      temp[tempIdx++] = barValue[p1++];

      tracerAnimation("merge-merge-left", true, tracerInterval++);
      tracerAnimation("merge-merge-left", false, tracerInterval);
    } else {
      animation(bars[p2], barValue[p2], "#ff6b6b", interval++);
      temp[tempIdx++] = barValue[p2++];

      tracerAnimation("merge-merge-right", true, tracerInterval++);
      tracerAnimation("merge-merge-right", false, tracerInterval);
    }
  }

  // append any value left behind to the end of the temp array
  while (p1 <= mid) {
    animation(bars[p1], barValue[p1], "#ff6b6b", interval++);
    temp[tempIdx++] = barValue[p1++];

    tracerAnimation("merge-merge-left", true, tracerInterval++);
    tracerAnimation("merge-merge-left", false, tracerInterval);
  }

  while (p2 <= right) {
    animation(bars[p2], barValue[p2], "#ff6b6b", interval++);
    temp[tempIdx++] = barValue[p2++];

    tracerAnimation("merge-merge-right", true, tracerInterval++);
    tracerAnimation("merge-merge-right", false, tracerInterval);
  }

  // update sorted array, mark each bar as sorted
  p1 = left;
  for (let j = 0; j < tempIdx; j++) {
    barValue[p1++] = temp[j];
    animation(bars[p1 - 1], barValue[p1 - 1], "#228be6", interval++);

    tracerAnimation("merge-copy-back", true, tracerInterval++);
    tracerAnimation("merge-copy-back", false, tracerInterval);
  }
};

const mergeSort = function (left, right) {
  if (left >= right) {
    return;
  }

  // find mid point and mark it as yellow
  const mid = left + parseInt((right - left) / 2);
  animation(bars[mid], barValue[mid], "#ffd43b", interval++);

  tracerAnimation("merge-partition", true, tracerInterval++);
  tracerAnimation("merge-partition", false, tracerInterval);

  // call function recursively to divide left half and right half
  mergeSort(left, mid);
  mergeSort(mid + 1, right);

  // merge each half
  merge(left, mid, right);
};
