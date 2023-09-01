"use strict";

document.addEventListener("DOMContentLoaded", start);

const Music = {
  author: "",
  title: "",
  year: null,
};

const buttonAdd = document.querySelector("#add");
const buttonRemove = document.querySelector("#remove");
const musicList = document.querySelector("#list");

buttonAdd.addEventListener("click", addToList);
buttonRemove.addEventListener("click", removeFromtList);

function addToList() {
  // Add to list
}
function removeFromtList() {
  // Remove from list
}
