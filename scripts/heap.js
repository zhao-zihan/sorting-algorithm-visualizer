/**
 * #ffd43b parent node
 * #15aabf left child
 * #ff6b6b right child
 * #da77f2 swap required
 * #69db7c swap completed
 * #228be6 node sorted
 */

"use strict";

interval = 0;
tracerInterval = 0;

const heapify = function (heapSize, index) {
  let largest = index;
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  // mark the current parent node in yellow
  animation(bars[index], barValue[index], "#ffd43b", interval++);
  tracerInterval++;

  // update largest pointer by checking left child
  if (left < heapSize && barValue[left] > barValue[largest]) {
    if (largest != index) {
      animation(bars[largest], barValue[largest], "#96f2d7", interval);
    }
    largest = left;
    animation(bars[left], barValue[left], "#15aabf", interval++);

    tracerAnimation("heap-check-left", true, tracerInterval++);
    tracerAnimation("heap-check-left", false, tracerInterval);
  }

  // update largest pointer by checking right child
  if (right < heapSize && barValue[right] > barValue[largest]) {
    if (largest != index) {
      animation(bars[largest], barValue[largest], "#96f2d7", interval);
    }
    largest = right;
    animation(bars[right], barValue[right], "#ff6b6b", interval++);

    tracerAnimation("heap-check-right", true, tracerInterval++);
    tracerAnimation("heap-check-right", false, tracerInterval);
  }

  // swap parent node with its largest child
  if (largest !== index) {
    animation(bars[largest], barValue[largest], "#da77f2", interval);
    animation(bars[index], barValue[index], "#da77f2", interval++);

    tracerAnimation("heap-swap-parent", true, tracerInterval++);
    tracerInterval++;

    swap(barValue, index, largest);

    animation(bars[largest], barValue[largest], "#69db7c", interval);
    animation(bars[index], barValue[index], "#69db7c", interval++);
    animation(bars[largest], barValue[largest], "#96f2d7", interval);
    animation(bars[index], barValue[index], "#96f2d7", interval);

    tracerAnimation("heap-swap-parent", false, tracerInterval);

    // repeat recursively to ensure largest node is on top
    heapify(heapSize, largest);

    tracerAnimation("heap-heapify-recursively", true, tracerInterval++);
    tracerAnimation("heap-heapify-recursively", false, tracerInterval--);
  }

  animation(bars[index], barValue[index], "#96f2d7", interval);
};

const heapSort = function () {
  const startNode = Math.floor(arraySize / 2) - 1;

  // create a max heap using heapify
  for (let i = startNode; i >= 0; i--) {
    heapify(arraySize, i);

    tracerAnimation("heap-max-heap", true, tracerInterval++);
    tracerAnimation("heap-max-heap", false, tracerInterval--);
  }

  // remove largest node to the end of the array
  for (let j = arraySize - 1; j > 0; j--) {
    animation(bars[0], barValue[0], "#da77f2", interval);
    animation(bars[j], barValue[j], "#da77f2", interval++);

    tracerAnimation("heap-swap-largest", true, tracerInterval++);
    tracerInterval++;

    swap(barValue, 0, j);

    animation(bars[0], barValue[0], "#96f2d7", interval);
    // all nodes at the tail are sorted
    animation(bars[j], barValue[j], "#228be6", interval++);

    tracerAnimation("heap-swap-largest", false, tracerInterval);

    // again, make sure largest node is always on top
    heapify(j, 0);

    tracerAnimation("heap-heapify-largest", true, tracerInterval++);
    tracerAnimation("heap-heapify-largest", false, tracerInterval--);
  }

  animation(bars[0], barValue[0], "#228be6", interval++);

  interval = 0;
  tracerInterval = 0;
};
