import { titles } from "./db.js";
import { thC } from "./components/thC.js";
import { renderUsersTable } from "./scripts/read.js";

const titlesTable = document.querySelector("#titlesTable");
export const usersTable = document.getElementById("usersTable");

// los ideal es que los template strings (componentes) sean funciones
function renderTitlesTable() {
  const titlesHtml = titles.map((title) => thC({ title })).join("");
  titlesTable.innerHTML = titlesHtml;
}

window.addEventListener("DOMContentLoaded", function () {
  renderTitlesTable();

  renderUsersTable();
});
