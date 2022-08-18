/**
 * #ff6b6b insertion value
 * #ffd43b correct insertion position
 * #228be6 node sorted
 */

"use strict";

interval = 0;
tracerInterval = 0;

const insertionSort = function () {
  for (let i = 1; i < arraySize; i++) {
    // mark the current bar we want to insert
    const key = barValue[i];
    animation(bars[i], barValue[i], "#ff6b6b", interval);

    tracerAnimation("insertion-for-loop-unsorted", true, tracerInterval++);
    tracerAnimation("insertion-for-loop-unsorted", false, tracerInterval);

    let j = i - 1;

    // if the key value is greater than its previous bar value
    // then we are at the correct position to insert the key
    if (barValue[i] >= barValue[j]) {
      // mark the correct position with color yellow
      animation(bars[i], key, "#ffd43b", ++interval);

      tracerAnimation("insertion-insert", true, tracerInterval++);
      tracerAnimation("insertion-insert", false, tracerInterval);

      // if the key is not at the initial position which is i === 1
      // we can be sure all its previous bars have been sorted
      // then just change color for key itself
      if (i !== 1) {
        animation(bars[i], key, "#228be6", ++interval);
      } else {
        // else mark all previous bars including the key as sorted
        for (let k = j; k <= i; k++) {
          animation(bars[k], barValue[k], "#228be6", ++interval);
          tracerInterval++;
        }
        tracerInterval--;
      }

      // no further operations required, continue the outer for-loop
      continue;
    }

    while (j >= 0 && barValue[j] > key) {
      // traverse back
      animation(bars[j], key, "#ff6b6b", ++interval);

      // move bars with higher value one step backwards while we traverse
      barValue[j + 1] = barValue[j];
      animation(bars[j + 1], barValue[j], "#228be6", interval);

      tracerAnimation("insertion-if-comparison", true, tracerInterval++);
      tracerAnimation("insertion-if-comparison", false, tracerInterval--);
      tracerAnimation("insertion-move", true, tracerInterval++);
      tracerAnimation("insertion-move", false, tracerInterval);
      j--;
    }

    // we found the correct position to insert
    // all values after this point is greater than the key value
    barValue[j + 1] = key;

    // mark position with color yellow to notify it is the position for insertion
    animation(bars[j + 1], key, "#ffd43b", ++interval);

    tracerAnimation("insertion-insert", true, tracerInterval++);
    tracerAnimation("insertion-insert", false, tracerInterval);

    // mark position with color blue to show completion of insertion
    animation(bars[j + 1], key, "#228be6", ++interval);
  }
  interval = 0;
  tracerInterval = 0;
};
