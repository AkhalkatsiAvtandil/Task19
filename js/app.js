import { results } from "./results.js";

// task1

const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("button clicked");
  button.remove();
});

// task2
const newimg = document.createElement("img");
newimg.src =
  "https://fastly.picsum.photos/id/534/1000/800.jpg?hmac=tFbU1nZ2RnQNroI_ToBhH-LFB8KNjyWoc3bVv5G9Wkw";
newimg.alt = "table";
const section = document.querySelector("section");
section.appendChild(newimg);
