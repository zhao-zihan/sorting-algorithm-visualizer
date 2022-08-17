"use strict";

interval = 0;

const selectionSort = function () {
  // we're gonna use i outside of the loop for coloring
  for (var i = 0; i < arraySize - 1; i++) {
    var minIdx = i;

    // mark the current min index position until swap
    animation(bars[i], barValue[i], "#ffd43b", interval++);
    for (let j = i + 1; j < arraySize; j++) {
      // mark the current visiting bar
      animation(bars[j], barValue[j], "#ff6b6b", interval++);
      if (barValue[j] < barValue[minIdx]) {
        minIdx = j;
      }
      // restore bar color after visiting
      animation(bars[j], barValue[j], "#96f2d7", interval);
    }

    // mark the two bars that will be swapped
    animation(bars[minIdx], barValue[minIdx], "#ffd43b", interval++);
    animation(bars[i], barValue[i], "#ffd43b", interval);

    // defined in bubble sort
    swap(barValue, i, minIdx);

    // display swapped result
    animation(bars[i], barValue[i], "#ffd43b", interval);
    animation(bars[minIdx], barValue[minIdx], "#ffd43b", interval++);

    // restore swapped new min index position bar color
    // need to do this step first then mark completed with blue
    // since sometimes minIdx === i
    animation(bars[minIdx], barValue[minIdx], "#96f2d7", interval);
    // mark the previous min index position bar as completed
    animation(bars[i], barValue[i], "#228be6", interval++);
  }

  // eventually the loop ended where i === n - 1
  animation(bars[i], barValue[i], "#228be6", interval++);
  interval = 0;
};
