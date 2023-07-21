"use strict";

let tamagotchi;
const NAME_FORM = document.querySelector("#pet-name-form");
const SCREEN = document.querySelector(".screen-inner");

/**
 * Form for giving Tama a name
 */
function giveTamagotchiName() {
  const nameInput = document.querySelector("#pet-name");

  return nameInput.value;
}

/**
 * Hatch new Tamagotchi
 */
function hatchNewTamagotchi(name) {
  tamagotchi = new Tamagotchi({
    name: name,
  });

  updateTamaScreen(tamagotchi.type);

  setTimeout(() => {
    tamagotchi.hatch();
    updateTamaScreen(`baby baby-${tamagotchi.type} hatch`);
  }, 5000);

  setTimeout(() => {
    updateTamaScreen(`baby baby-${tamagotchi.type}`, "walk");
  }, 7000);
}

/**
 * Update Tamagotchi UI with Tamagotchi type and action
 */
function updateTamaScreen(type, action) {
  SCREEN.innerHTML = `
    <div class="tama ${action}">
      <div class="${type}"></div>
    </div>
  `;
}

/**
 * Start App
 */
function start(evt) {
  evt.preventDefault();
  console.log("app has started!");
  const tamaName = giveTamagotchiName();
  hatchNewTamagotchi(tamaName);
}

NAME_FORM.addEventListener("submit", start);
