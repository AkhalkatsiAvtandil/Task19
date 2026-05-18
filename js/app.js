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

// task3-4
let imageslist = document.querySelector("#images-list");
const div = document.createElement("div");

let html = "";
results.forEach((results) => {
  html += `<div class="cards-container">
        <img src="${results.webImage.url}" alt="${results.title}" />
        <h2>${results.title}</h2>
        <div class="render"></div>
        <div class="carddiv">
        <button class="details">see more details</button>
        <button class="remove">remove card</button>
        </div>
      </div>`;
});
div.innerHTML = html;
imageslist.appendChild(div);

// task5

const detaiLs = document.querySelector("details");
const remoVe = document.querySelector("remove");

function rendermoredetails() {
  const div = document.createElement("div");
  let html = "";
  results.longTitle.forEach((results) => {
    html += `<p>${results.longTitle}</p>
  <p>"for more information visit here "<a href="#">"Link"</a></p>`;
  });
  div.innerHTML = html;
  detaiLs.appendChild(div);
}
button.addEventListener("click", createContext);
