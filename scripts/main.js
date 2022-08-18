"use strict";

const algorithmsEl = document.getElementById("algos-selections");

const timeWorstCompEl = document.querySelector(".time-worst-text");
const timeAverCompEl = document.querySelector(".time-average-text");
const timeBestCompEl = document.querySelector(".time-best-text");
const spaceWorstCompEl = document.querySelector(".space-worst-text");

const arraySizeEl = document.getElementById("size-slider");
const algoSpeedEl = document.getElementById("speed-slider");

const arrayContainerEl = document.querySelector(".arrays-container");

const speedValueEl = document.querySelector(".speed-value");
const sizeValueEl = document.querySelector(".size-value");

const newArrayBtnEl = document.querySelector(".new-btn");
const letsSortBtnEl = document.querySelector(".sort-btn");
const stopBtnEL = document.querySelector(".stop-btn");

const explanationsEl = document.querySelectorAll(".explanation");
const tracersEl = document.querySelectorAll(".tracer");

/**
 * Set text content on the left complexity section
 *
 * @param {*} tWorst- worst time complexity
 * @param {*} tAver - average time complexity
 * @param {*} tBest - best time complexity
 * @param {*} sWorst - worst space complexity
 */

const displayComplexityText = function (tWorst, tAver, tBest, sWorst) {
  timeWorstCompEl.textContent = tWorst;
  timeAverCompEl.textContent = tAver;
  timeBestCompEl.textContent = tBest;
  spaceWorstCompEl.textContent = sWorst;
};

/**
 * This function will display colors explanation for the algo we selected
 *
 * @param {*} clickedAlgo - the algo that we want to display color explanation for
 */
const displayColorsForClicked = function (clickedAlgo) {
  for (let i = 0; i < explanationsEl.length; i++) {
    if (`${clickedAlgo}-colors` === explanationsEl[i].classList[1]) {
      explanationsEl[i].classList.remove("hidden");
    } else {
      explanationsEl[i].classList.add("hidden");
    }
  }
};

const displayTracerForClicked = function (clickedAlgo) {
  for (let i = 0; i < tracersEl.length; i++) {
    if (`${clickedAlgo}-trace` === tracersEl[i].classList[1]) {
      tracersEl[i].classList.remove("hidden");
    } else {
      tracersEl[i].classList.add("hidden");
    }
  }
};

/**
 * Set complexity details for each algorithm when selected
 * Display colors explanation for each algorithm when selected
 */
let algoSelected;
const displayComplexities = function () {
  algoSelected = this.value;
  switch (algoSelected) {
    case "default":
      displayColorsForClicked("default");
      displayTracerForClicked("default");
      displayComplexityText("", "", "", "");
      generateNewArray();
      break;
    case "bubble":
      displayColorsForClicked("bubble");
      displayTracerForClicked("bubble");
      displayComplexityText("O(n^2)", "O(n^2)", "O(n)", "O(1)");
      generateNewArray();
      break;
    case "selection":
      displayColorsForClicked("selection");
      displayTracerForClicked("selection");
      displayComplexityText("O(n^2)", "O(n^2)", "O(n^2)", "O(1)");
      generateNewArray();
      break;
    case "insertion":
      displayColorsForClicked("insertion");
      displayTracerForClicked("insertion");
      displayComplexityText("O(n^2)", "O(n^2)", "O(n)", "O(1)");
      generateNewArray();
      break;
    case "merge":
      displayColorsForClicked("merge");
      displayTracerForClicked("merge");
      displayComplexityText("O(nlog(n))", "O(nlog(n))", "O(nlog(n))", "O(n)");
      generateNewArray();
      break;
    case "quick":
      displayColorsForClicked("quick");
      displayTracerForClicked("quick");
      displayComplexityText("O(n^2)", "O(nlog(n))", "O(nlog(n))", "O(nlog(n))");
      generateNewArray();
      break;
    case "heap":
      displayColorsForClicked("heap");
      displayTracerForClicked("heap");
      displayComplexityText("O(nlog(n))", "O(nlog(n))", "O(nlog(n))", "O(1)");
      generateNewArray();
      break;
  }
};

algorithmsEl.addEventListener("change", displayComplexities);

let arraySize = arraySizeEl.value;
const barValue = [];
const bars = [];

/**
 * Generate values for bar height, store them in array and style them
 */
const generateNewArray = function () {
  // clear previous arrays every time reloading the function
  arrayContainerEl.innerHTML = "";
  for (let i = 0; i < arraySize; i++) {
    barValue[i] = Math.floor(
      Math.random() * (arraySizeEl.max - arraySizeEl.min + 1) + 5
    );
    bars[i] = document.createElement("div");
    arrayContainerEl.append(bars[i]);

    // style each bar container
    const customStyle = {
      backgroundColor: "#96f2d7",
      width: `${100 / arraySize}%`,
      height: `${barValue[i]}%`,
      borderRadius: "0 0 4px 4px",
    };
    // https://stackoverflow.com/questions/15241915/how-to-change-css-property-using-javascript
    Object.assign(bars[i].style, customStyle);
  }
};

/**
 * Update array based on new size
 */
const updateArraySize = function () {
  arraySize = arraySizeEl.value;
  generateNewArray();
};

// display default values next to the sliders
speedValueEl.textContent = algoSpeedEl.value;
sizeValueEl.textContent = arraySize;

newArrayBtnEl.addEventListener("click", generateNewArray);
arraySizeEl.addEventListener("input", updateArraySize);

// update speed and array size values when dragging sliders
arraySizeEl.addEventListener(
  "input",
  () => (sizeValueEl.textContent = arraySize)
);
algoSpeedEl.addEventListener(
  "input",
  () => (speedValueEl.textContent = algoSpeedEl.value)
);

// display default randomized arrays when users load the page for the first time
updateArraySize();

/**
 * Set delay time based on selected speed & array size
 */
let delay;
const setSpeed = function () {
  const selectedSpeed = +algoSpeedEl.value;
  switch (selectedSpeed) {
    case 1:
      delay = 5000;
      break;
    case 2:
      delay = 2500;
      break;
    case 3:
      delay = 1000;
      break;
    case 4:
      delay = 500;
      break;
    case 5:
      delay = 100;
      break;
  }
  delay /= arraySize / 3;
};

/**
 * This function will update bar height and color once we change it
 *
 * @param {*} bar - the bar we want to update shape and color
 * @param {*} height - the height we assign to the bar
 * @param {*} color - the background color we assign to the bar
 * @param {*} interval - time waited to trigger the animation
 */
const animation = function (bar, height, color, interval) {
  window.setTimeout(() => {
    bar.style.backgroundColor = `${color}`;
    bar.style.height = `${height}%`;
  }, interval * delay);
  // all function are called at the same time, have to create intervals to make animation happen
};

/**
 * This function will update code tracer
 *
 * @param {*} paragraph - the line of code we are tracing
 * @param {*} interval - time waited to trigger the animation
 */

const tracerAnimation = function (paragraph, running, tracerInterval, stop) {
  window.setTimeout(() => {
    if (running) {
      var backgroundColor = "#495057";
      var textColor = "#e7f5ff";
    } else {
      backgroundColor = "#d0bfff";
      textColor = "#000";
    }
    document.querySelector(
      `.${paragraph}`
    ).style.backgroundColor = `${backgroundColor}`;
    document.querySelector(`.${paragraph}`).style.color = `${textColor}`;
  }, tracerInterval * delay);
};

/**
 * Adjust delay time based on BOTH speed & array size
 */
algoSpeedEl.addEventListener("input", setSpeed);
arraySizeEl.addEventListener("input", setSpeed);
// immediately calling setSpeed function
// otherwise no speed will be set for the default value
setSpeed();

const startSorting = function () {
  // enable following code for testing
  // let barCopy = [];
  // for (let i = 0; i < barValue.length; i++) {
  //   barCopy[i] = barValue[i];
  // }
  // barCopy.slice().sort();
  switch (algoSelected) {
    case "default":
      break;
    case "bubble":
      bubbleSort();
      // console.log(arraysAreEqual(barCopy, barValue));
      break;
    case "selection":
      selectionSort();
      // console.log(arraysAreEqual(barCopy, barValue));
      break;
    case "insertion":
      insertionSort();
      // console.log(arraysAreEqual(barCopy, barValue));
      break;
    case "merge":
      mergeSort(0, arraySize - 1);
      // console.log(arraysAreEqual(barCopy, barValue));
      interval = 0;
      tracerInterval = 0;
      break;
    case "quick":
      quickSort(0, arraySize);
      // console.log(arraysAreEqual(barCopy, barValue));
      interval = 0;
      tracerInterval = 0;
      break;
    case "heap":
      heapSort();
      break;
  }
};

letsSortBtnEl.addEventListener("click", startSorting);

stopBtnEL.addEventListener("click", function () {
  window.location.reload();
});

/**
 * This function is for testing custom sorting algorithms
 *
 * @param {*} array1 - bar value copy array
 * @param {*} array2 - bar value array after running custom sorting algo
 * @returns
 */
function arraysAreEqual(array1, array2) {
  array1 = array1.slice().sort(function (a, b) {
    return a - b;
  });
  if (array1.length !== array2.length) return false;
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      console.log(array1[x] + ", " + array2[x]);
      return false;
    }
  }
  return true;
}
