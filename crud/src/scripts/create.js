import { renderUsersTable } from "./read.js";
import { getFormValues } from "../utils/getFormValues.js";
import { jedis } from "../db.js";
import { modal } from "../main.js";

export function createUserTable(event) {
  event.preventDefault();

  const tempUser = getFormValues(event.target);

  jedis.push(tempUser);
  renderUsersTable();

  event.target.reset();
  modal.classList.add("hidden");
}
