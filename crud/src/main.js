import { jedis, titles } from "./db.js";
import { thC } from "./components/thC.js";

const titlesTable = document.querySelector("#titlesTable");

// los ideal es que los template strings (componentes) sean funciones
function renderTitlesTable(){
  const titlesHtml = titles.map((title) => thC({ title })).join("");
  titlesTable.innerHTML = titlesHtml;
}

window.addEventListener("DOMContentLoaded", function () {
  renderTitlesTable();
});
