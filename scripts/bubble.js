const swap = function (values, position1, position2) {
  const temp = values[position1];
  values[position1] = values[position2];
  values[position2] = temp;
};

let interval = 0;
const bubbleSort = function () {
  for (let i = 0; i < arraySize - 1; i++) {
    for (var j = 0; j < arraySize - i - 1; j++) {
      if (barValue[j] > barValue[j + 1]) {
        animation(bars[j], barValue[j], "#ff6b6b", ++interval);
        animation(bars[j + 1], barValue[j + 1], "#ff6b6b", interval);

        swap(barValue, j, j + 1);

        animation(bars[j], barValue[j], "#ffd43b", ++interval);
        animation(bars[j + 1], barValue[j + 1], "#ffd43b", interval);
      }
      animation(bars[j], barValue[j], "#96f2d7", ++interval);
    }
    animation(bars[j], barValue[j], "#228be6", ++interval);
  }
  animation(bars[0], barValue[0], "#228be6", ++interval);
  interval = 0;
};
