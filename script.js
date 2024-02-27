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
const textProgress = document.querySelector(".text-progress");

randomArray.map((item) => {
  const span = document.createElement("span");
  span.classList.add("letter");
  span.textContent = item;
  textContainer.appendChild(span);
});

console.log(randomArray.join(""));
