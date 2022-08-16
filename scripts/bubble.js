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
      if (barValue[j] > barValue[j + 1]) {
        // mark bars that we are going to swap
        animation(bars[j], barValue[j], "#ff6b6b", ++interval);
        animation(bars[j + 1], barValue[j + 1], "#ff6b6b", interval);

        swap(barValue, j, j + 1);

        // yellow means swap completed
        animation(bars[j], barValue[j], "#ffd43b", ++interval);
        animation(bars[j + 1], barValue[j + 1], "#ffd43b", interval);
      }

      // only need restore color for the shorter bar
      animation(bars[j], barValue[j], "#96f2d7", ++interval);
    }

    // blue means bar has been moved to the correct position
    animation(bars[j], barValue[j], "#228be6", ++interval);
  }

  // the last bar left will be the first bar in the array
  animation(bars[0], barValue[0], "#228be6", ++interval);
  interval = 0;
};
