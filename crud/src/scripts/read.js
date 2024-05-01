import { jedis } from "../db.js";
import { usersTable } from "../main.js";
import { trC } from "../components/trC.js";

export function renderUsersTable(users = jedis) {
  usersTable.innerHTML = "";

  if (!users.length) {
    usersTable.innerHTML =
      "<td colspan='5'><p class='text-center py-4'>No hay usuarios</p></td>";
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
