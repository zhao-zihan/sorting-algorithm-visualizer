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
 * Set complexity details for each algorithm when selected
 */
let algoSelected;
const displayComplexities = function () {
  algoSelected = this.value;
  switch (algoSelected) {
    case "default":
      displayComplexityText("", "", "", "");
      break;
    case "bubble":
      displayComplexityText("O(n^2)", "O(n^2)", "O(n)", "O(1)");
      break;
    case "selection":
      displayComplexityText("O(n^2)", "O(n^2)", "O(n^2)", "O(1)");
      break;
    case "insertion":
      displayComplexityText("O(n^2)", "O(n^2)", "O(n)", "O(1)");
      break;
    case "merge":
      displayComplexityText("O(nlog(n))", "O(nlog(n))", "O(nlog(n))", "O(n)");
      break;
    case "quick":
      displayComplexityText("O(n^2)", "O(nlog(n))", "O(nlog(n))", "O(nlog(n))");
      break;
    case "heap":
      displayComplexityText("O(nlog(n))", "O(nlog(n))", "O(nlog(n))", "O(1)");
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
      delay = 2000;
      break;
    case 2:
      delay = 1000;
      break;
    case 3:
      delay = 500;
      break;
    case 4:
      delay = 100;
      break;
    case 5:
      delay = 20;
      break;
  }
  delay /= arraySize / 2;
  console.log(delay);
};

const animation = function (bar, height, color, interval) {
  window.setTimeout(() => {
    bar.style.backgroundColor = `${color}`;
    bar.style.height = `${height}%`;
  }, interval * delay);
  // all function are called at the same time, have to create intervals to make animation happen
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
  switch (algoSelected) {
    case "default":
      break;
    case "bubble":
      bubbleSort();
      console.log("bubble complete");
      break;
    case "selection":
      selectionSort();
      break;
    case "insertion":
      insertionSort();
      break;
    case "merge":
      mergeSort();
      break;
    case "quick":
      quickSort();
      break;
    case "heap":
      heapSort();
      break;
  }
};

letsSortBtnEl.addEventListener("click", startSorting);
