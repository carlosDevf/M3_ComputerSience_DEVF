import { jedis } from "../db.js";
import { usersTable } from "../main.js";
import { trC } from "../components/trC.js";
import { deleteUser } from "./delete.js";

export function renderUsersTable(users = jedis) {
  usersTable.innerHTML = "";

  if (!users.length) {
    usersTable.innerHTML =
      "<td colspan='5'><p class='text-center py-4'>No hay usuarios</p></td>";
    return;
  }

  const fragment = document.createDocumentFragment();

  users.forEach((user, index) => {
    const tempTr = document.createElement("tr");
    tempTr.innerHTML = trC({ ...user, index }).trim();

    const deleteButton = tempTr.querySelector("[data-action='delete']");

    if (deleteButton) {
      deleteButton.addEventListener("click", () => deleteUser(deleteButton));
    }

    fragment.appendChild(tempTr);
  });

  usersTable.appendChild(fragment);
}
