import { results } from "./results.js";

// task1

const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("button clicked");
  button.remove();
});
