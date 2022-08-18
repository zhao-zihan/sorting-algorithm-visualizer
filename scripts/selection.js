/**
 * #ffd43b min value position
 * #ff6b6b traversing pointer
 * #15aabf current min value
 * #da77f2 swap required
 * #69db7c swap completed
 * #228be6 node sorted
 */

"use strict";

interval = 0;
tracerInterval = 0;

const selectionSort = function () {
  // we're gonna use i outside of the loop for coloring
  for (var i = 0; i < arraySize - 1; i++) {
    var minIdx = i;

    // mark the current min index position until swap
    animation(bars[i], barValue[i], "#ffd43b", interval++);

    tracerAnimation("selection-set-position", true, tracerInterval++);
    tracerAnimation("selection-set-position", false, tracerInterval);

    for (let j = i + 1; j < arraySize; j++) {
      // mark the current visiting bar
      animation(bars[j], barValue[j], "#ff6b6b", interval++);

      tracerAnimation("selection-for-loop", true, tracerInterval++);
      tracerAnimation("selection-for-loop", false, tracerInterval);

      if (barValue[j] < barValue[minIdx]) {
        tracerInterval--;
        tracerAnimation("selection-if-comparison", true, tracerInterval++);

        if (minIdx !== i) {
          animation(bars[minIdx], barValue[minIdx], "#96f2d7", interval);
        }
        minIdx = j;
        animation(bars[minIdx], barValue[minIdx], "#15aabf", interval);

        tracerAnimation("selection-if-comparison", false, tracerInterval);
        tracerAnimation("selection-set-minimum", true, tracerInterval++);
        tracerAnimation("selection-set-minimum", false, tracerInterval--);

        continue;
      }
      // restore bar color after visiting
      animation(bars[j], barValue[j], "#96f2d7", interval);
    }

    // if the min value is already at its correct position
    // then simply mark it as sorted
    if (minIdx === i) {
      animation(bars[minIdx], barValue[minIdx], "#15aabf", interval);

      tracerAnimation("selection-set-minimum", true, tracerInterval++);
      tracerAnimation("selection-set-minimum", false, tracerInterval);

      animation(bars[minIdx], barValue[minIdx], "#228be6", ++interval);
      continue;
    }

    // mark the two bars that will be swapped
    animation(bars[minIdx], barValue[minIdx], "#da77f2", interval);
    animation(bars[i], barValue[i], "#da77f2", interval++);

    tracerAnimation("selection-swap", true, tracerInterval++);

    // defined in bubble sort
    swap(barValue, i, minIdx);

    // display swapped result
    animation(bars[i], barValue[i], "#69db7c", interval);
    animation(bars[minIdx], barValue[minIdx], "#69db7c", interval++);

    tracerAnimation("selection-swap", false, ++tracerInterval);

    // restore swapped new min index position bar color
    // need to do this step first then mark completed with blue
    // since sometimes minIdx === i
    animation(bars[minIdx], barValue[minIdx], "#96f2d7", interval);
    // mark the previous min index position bar as completed
    animation(bars[i], barValue[i], "#228be6", interval++);
    tracerInterval++;
  }

  // eventually the loop ended where i === n - 1
  animation(bars[i], barValue[i], "#228be6", interval++);

  enableButtons();

  interval = 0;
  tracerInterval = 0;
};
