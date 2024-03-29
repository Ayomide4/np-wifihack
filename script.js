//TODO:
//1 - add status toast
let alphaNumeric = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const checkmarkSvg = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg",
);
checkmarkSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
checkmarkSvg.setAttribute("width", "14");
checkmarkSvg.setAttribute("height", "14");
checkmarkSvg.setAttribute("viewBox", "0 0 24 24");
checkmarkSvg.setAttribute("fill-opacity", "0");

const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute(
  "d",
  "M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z",
);

checkmarkSvg.appendChild(path);

function generateRandomArray(length) {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(
      alphaNumeric[Math.floor(Math.random() * alphaNumeric.length)],
    );
  }
  return randomArray;
}
const randomArray = generateRandomArray(12);
const textInput = document.querySelector(".text-input");
const textContainer = document.querySelector(".text-box");
const textProgress = document.querySelector(".progress-container");
const progressBar = document.querySelector(".progress-bar");
const toastSuccess = document.querySelector(".toast-success");
const toastFail = document.querySelector(".toast-fail");

let fail = false;
let timer = setInterval(() => {
  const computedStyle = getComputedStyle(progressBar);
  const width = parseFloat(computedStyle.getPropertyValue("--width")) || 100;

  if (width <= 0.5) {
    // alert("You lost");
    // window.location.reload();
    toastFail.classList.add("show");
  } else if (!fail) {
    progressBar.style.setProperty("--width", width - 0.25);
  }
}, 15.625);

textInput.addEventListener("blur", () => {
  setTimeout(() => {
    textInput.focus();
  }, 0);
});

document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".progress-circle");
  const bars = document.querySelectorAll(".bar");

  textInput.addEventListener("input", () => {
    let current = textInput.value[textInput.value.length - 1];
    if (current.toUpperCase() === randomArray[textInput.value.length - 1]) {
      if (textInput.value.length === 12) {
        clearInterval(timer);
        toastSuccess.classList.add("show");
      }
      textContainer.children[textInput.value.length - 1].classList.add(
        "correct",
      );
      circles[textInput.value.length - 1].classList.add(
        "progress-circle-correct",
      );
      circles[textInput.value.length - 1].children[0].setAttribute(
        "fill-opacity",
        "1",
        "fill",
        "#00e0bf",
      );
      circles[textInput.value.length - 1].children[0].setAttribute(
        "fill",
        "#00e0bf",
      );
      bars[textInput.value.length - 1].classList.add("bar-correct");
    } else {
      fail = true;
      textContainer.children[textInput.value.length - 1].classList.add(
        "incorrect",
      );
      bars[textInput.value.length - 1].classList.add("bar-incorrect");
      circles[textInput.value.length - 1].classList.add(
        "progress-circle-incorrect",
      );
      circles[textInput.value.length - 1].children[0].setAttribute(
        "fill-opacity",
        "1",
      );
      circles[textInput.value.length - 1].children[0].setAttribute(
        "fill",
        "#ff3d00",
      );
      toastFail.classList.add("show");
    }
  });
});

randomArray.map((item, index) => {
  const span = document.createElement("span");
  const progress = document.createElement("div");
  const bar = document.createElement("div");
  span.classList.add("letter");
  progress.classList.add("progress-circle");
  progress.appendChild(checkmarkSvg.cloneNode(true));
  bar.classList.add("bar");
  span.textContent = item;
  textContainer.appendChild(span);
  textProgress.appendChild(progress);
  if (index !== randomArray.length - 1) {
    textProgress.appendChild(bar);
  }
});
