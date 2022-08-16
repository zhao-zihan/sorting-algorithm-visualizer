"use strict";

const algorithmsEl = document.getElementById("algos-selections");

const timeWorstCompEl = document.querySelector(".time-worst-text");
const timeAverCompEl = document.querySelector(".time-average-text");
const timeBestCompEl = document.querySelector(".time-best-text");
const spaceWorstCompEl = document.querySelector(".space-worst-text");

const arraySizeEl = document.getElementById("size-slider");
const algoSpeedEl = document.getElementById("speed-slider");

const arrayContainerEl = document.querySelector(".arrays-container");

const newArrayBtnEl = document.querySelector(".new-btn");
const letsSortBtnEl = document.querySelector(".sort-btn");

const displayComplexityText = function (tWorst, tAver, tBest, sWorst) {
  timeWorstCompEl.textContent = tWorst;
  timeAverCompEl.textContent = tAver;
  timeBestCompEl.textContent = tBest;
  spaceWorstCompEl.textContent = sWorst;
};

const displayComplexities = function () {
  const algoSelected = this.value;
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

let arraySize = arrayContainerEl.value;
const barValue = [];
const bars = [];

const generateNewArray = function () {
  arrayContainerEl.innerHTML = "";
  for (let i = 0; i < arraySize; i++) {
    barValue[i] = Math.floor(
      Math.random() * (arraySizeEl.max - arraySizeEl.min + 1) + 5
    );
    bars[i] = document.createElement("div");
    arrayContainerEl.append(bars[i]);

    const customStyle = {
      backgroundColor: "#96f2d7",
      // margin: "0 0.25%",
      width: 100 / arraySize + "%",
      height: barValue[i] + "%",
    };
    Object.assign(bars[i].style, customStyle);
  }
};

const updateArraySize = function () {
  arraySize = arraySizeEl.value;
  generateNewArray();
};

newArrayBtnEl.addEventListener("click", generateNewArray);
arraySizeEl.addEventListener("input", updateArraySize);

window.onload = updateArraySize();
