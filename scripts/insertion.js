interval = 0;

const insertionSort = function () {
  for (let i = 1; i < arraySize; i++) {
    // keep a record of the current bar we want to insert, will lose reference later
    const key = barValue[i];
    animation(bars[i], barValue[i], "#ff6b6b", interval);

    let j = i - 1;

    while (j >= 0 && barValue[j] > key) {
      // traverse back
      animation(bars[j], barValue[j], "#ff6b6b", ++interval);

      barValue[j + 1] = barValue[j];
      // mark visited, notice following steps will override values including key
      if (j === i - 1) {
        /*****   IMPORTANT   *****/
        // correct way to display, since insertion sort overwrite values including key values
        // animation(bars[j + 1], barValue[j], "#ff6b6b", interval);

        // but I kept the key value as height for better visualization
        animation(bars[j + 1], key, "#ff6b6b", interval);
      } else {
        animation(bars[j + 1], barValue[j], "#228be6", interval);
      }
      j--;
    }
    // we find the position to insert the key
    animation(bars[j + 1], barValue[j + 1], "#ffd43b", interval);

    barValue[j + 1] = key;

    // at the previous key position, the value has been overridden
    // mark this position with the correct key value again to notify insertion
    animation(bars[i], key, "#ffd43b", interval++);

    // this loop is only for marking sorted area
    for (let k = 0; k <= i; k++) {
      animation(bars[k], barValue[k], "#228be6", interval);
    }
  }
  interval = 0;
};
