import { titles } from "./db.js";
import { thC } from "./components/thC.js";
import { renderUsersTable } from "./scripts/read.js";

const titlesTable = document.querySelector("#titlesTable");
export const usersTable = document.getElementById("usersTable");
const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modalContainer = document.querySelector("#modal-container")

// los ideal es que los template strings (componentes) sean funciones
function renderTitlesTable() {
  const titlesHtml = titles.map((title) => thC({ title })).join("");
  titlesTable.innerHTML = titlesHtml;
}

window.addEventListener("DOMContentLoaded", function () {
  openModal.addEventListener("click", function () {
    modal.classList.remove("hidden");
  });

  closeModal.addEventListener("click", function () {
    modal.classList.add("hidden");
  });

  renderTitlesTable();

  renderUsersTable();
});
