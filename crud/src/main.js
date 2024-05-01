import { jedis, titles } from "./db.js";
import { thC } from "./components/thC.js";
import { trC } from "./components/trC.js";

const titlesTable = document.querySelector("#titlesTable");
const usersTable = document.getElementById("usersTable");

// los ideal es que los template strings (componentes) sean funciones
function renderTitlesTable() {
  const titlesHtml = titles.map((title) => thC({ title })).join("");
  titlesTable.innerHTML = titlesHtml;
}

function renderUsersTable(users = jedis) {
  usersTable.innerHTML = "";

  if (!users.length) {
    usersTable.innerHTML = "<td colspan='5'><p class='text-center py-4'>No hay usuarios</p></td>";
    return;
  }

  const fragment = document.createDocumentFragment();

  users.forEach((user) => {
    const tempTr = document.createElement("tr");
    tempTr.className = "hover:bg-gray-50";
    tempTr.innerHTML = trC(user);

    fragment.appendChild(tempTr);
  });

  usersTable.appendChild(fragment);
}

window.addEventListener("DOMContentLoaded", function () {
  renderTitlesTable();

  renderUsersTable();
});
