const algorithmsEl = document.getElementById("algos-selections");

const timeWorstCompEl = document.querySelector(".time-worst-text");
const timeAverCompEl = document.querySelector(".time-average-text");
const timeBestCompEl = document.querySelector(".time-best-text");
const spaceWorstCompEl = document.querySelector(".space-worst-text");

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
