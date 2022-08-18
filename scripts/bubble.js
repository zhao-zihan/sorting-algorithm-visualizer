/**
 * #ff6b6b traversing pointer
 * #da77f2 swap required
 * #69db7c swap completed
 * #228be6 node sorted
 */

"use strict";

const swap = function (values, position1, position2) {
  const temp = values[position1];
  values[position1] = values[position2];
  values[position2] = temp;
};

let interval = 0;
const bubbleSort = function () {
  for (let i = 0; i < arraySize - 1; i++) {
    // we're gonna use j outside of the loop for coloring
    for (var j = 0; j < arraySize - i - 1; j++) {
      animation(bars[j], barValue[j], "#ff6b6b", interval);
      if (barValue[j] > barValue[j + 1]) {
        // mark bars that we are going to swap
        animation(bars[j], barValue[j], "#da77f2", ++interval);
        animation(bars[j + 1], barValue[j + 1], "#da77f2", interval);

        swap(barValue, j, j + 1);

        // mark swapping completed
        animation(bars[j], barValue[j], "#69db7c", ++interval);
        animation(bars[j + 1], barValue[j + 1], "#69db7c", interval);
      }

      // restore swapped bars' color
      animation(bars[j], barValue[j], "#96f2d7", ++interval);
      animation(bars[j + 1], barValue[j + 1], "#96f2d7", interval);
    }

    // blue means bar has been moved to the correct position
    // immediately mark blue as the current largest bar has been moved to the very end
    animation(bars[j], barValue[j], "#228be6", interval++);
  }

  // the last bar left will be the first bar in the array
  animation(bars[0], barValue[0], "#228be6", ++interval);
  interval = 0;
};
