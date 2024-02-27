//TODO:
//1 - change checkmark color on incorrect/correct
//2 - add status toast
//3 - typing minigame
//4 - add bar color change on incorrect/correct
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
checkmarkSvg.setAttribute("width", "20");
checkmarkSvg.setAttribute("height", "20");
checkmarkSvg.setAttribute("viewBox", "0 0 24 24");

const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute(
  "d",
  "M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z",
);
path.setAttribute("fill", "#00e0bf");

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

const textContainer = document.querySelector(".text-box");
const randomArray = generateRandomArray(12);
const textProgress = document.querySelector(".progress-container");

randomArray.map((item, index) => {
  const span = document.createElement("span");
  const progress = document.createElement("div");
  const bar = document.createElement("div");
  span.classList.add("letter");
  progress.classList.add("progress-circle-correct");
  progress.appendChild(checkmarkSvg.cloneNode(true));
  bar.classList.add("bar");
  span.textContent = item;
  textContainer.appendChild(span);
  textProgress.appendChild(progress);
  if (index !== randomArray.length - 1) {
    textProgress.appendChild(bar);
  }
});

console.log(randomArray.join(""));
