export function trC({ name, age, team, role, photo }) {
  return `
  <th class="flex gap-3 px-6 py-4 font-normal text-gray-900 items-center">
    <div class="relative h-10 w-10">
      <img
        class="h-full w-full rounded-full object-cover object-center"
        src="${photo ?? './img/photo.png'}"
        alt=""
      />
      <span
        class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"
      ></span>
    </div>
    <div class="text-sm">
      <div class="font-medium text-gray-700">${name}</div>
    </div>
  </th>
  <td class="px-6 py-4">
    <span
      class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
    >
      <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
      ${age}
    </span>
  </td>
  <td class="px-6 py-4">${role}</td>
  <td class="px-6 py-4">
    <div class="flex gap-2">
      <span
        class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
      >
        ${team}
      </span>
      <span
        class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
      >
        Product
      </span>
      <span
        class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
      >
        Develop
      </span>
    </div>
  </td>
  <td class="px-6 py-4">
    <div class="flex justify-end gap-4">
      <a class="w-[20px]" href="#">
        <img src="./icons/edit.svg" alt="">
      </a>
      <a class="w-[20px]" href="#">
        <img src="./icons/delete.svg" alt="">
      </a>
    </div>
  </td>
  `;
}
