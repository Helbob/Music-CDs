"use strict";

const cdForm = document.querySelector("#frmCD");

cdForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const author = document.querySelector("#author").value;
  const title = document.querySelector("#title").value;
  const year = document.querySelector("#year").value;

  const tdAuthor = document.createElement("td");
  const tdAuthortxt = document.createTextNode(author);
  tdAuthor.appendChild(tdAuthortxt);

  const tdTitle = document.createElement("td");
  const tdTitletxt = document.createTextNode(title);
  tdAuthor.appendChild(tdTitletxt);

  const tdYear = document.createElement("td");
  const tdYeartxt = document.createTextNode(year);
  tdAuthor.appendChild(tdYeartxt);

  const tdDelete = document.createElement("td");
  const btnDelete = document.createElement("button");
  const imgDelete = document.createElement("img");
  imgDelete.setAttribute("src", "img/delete.png");
  imgDelete.setAttribute("alt", "Delete CD");
  btnDelete.appendChild(imgDelete);

  btnDelete.addEventListener("click", function () {
    this.parentElement.parentElement.remove();

    if (document.querySelectorAll("tr").length === 1) {
      document.querySelector("table").classList.add("hide");
      document.querySelector("table").classList.remove("show");
    }
  });

  tdDelete.appendChild(btnDelete);

  const trNewCD = document.createElement("tr");
  trNewCD.appendChild(tdAuthor);
  trNewCD.appendChild(tdTitle);
  trNewCD.appendChild(tdYear);
  trNewCD.appendChild(tdDelete);

  document.querySelector("tbody").appendChild(trNewCD);

  document.querySelector("table").classList.remove("hide");
  document.querySelector("table").classList.add("show");

  this.reset();
});
