const randomColor = [
  "red",
  "blue",
  "yellow",
  "green",
  " rgb(29, 57, 82)",
  "#1a7124",
  "#942b65",
];
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random(randomColor) * 5);
  document.body.style.background = randomColor[randomIndex];
});
