"use strict";

//document.addEventListener("DOMContentLoaded", start);

const Music = {
  author: "",
  title: "",
  year: null,
};

const buttonAdd = document.querySelector("#add");
const buttonRemove = document.querySelector("#delete");
const musicList = document.querySelector("#list");
buttonAdd.addEventListener("click", addToList);
const authorInput = document.querySelector("#author");
const titleInput = document.querySelector("#title");
const yearInput = document.querySelector("#year");
buttonRemove.addEventListener("click", removeFromtList);

function addToList() {
  const klon = document.querySelector("#newtemp").content.cloneNode(true);
  klon.querySelector("#display").textContent = authorInput.value;
  klon.querySelector("#displaytwo").textContent = titleInput.value;
  klon.querySelector("#displaythree").textContent = yearInput.value;
  musicList.appendChild(klon);
  // Add to list
  // Appendend child musicList?
}
function removeFromtList() {
  // Remove from list
}
