import { defineStore } from "pinia";

export const game = defineStore("game", () => {
  const randomNumber = ref<number>(0);
  const countPlayers = ref<number>(parseInt(localStorage.countPlayers) ? parseInt(localStorage.countPlayers) : 0);
  const playersWinner = ref<any>(localStorage.playersWinner ? JSON.parse(localStorage.playersWinner) : []);
  const normalTicketsCount = ref<number>(parseInt(localStorage.normalTicketsCount) ? parseInt(localStorage.normalTicketsCount) : 0);
  const goldTicketsCount = ref<number>(parseInt(localStorage.goldTicketsCount) ? parseInt(localStorage.goldTicketsCount) : 0);

  const form = ref<any>({
    name: "",
    email: "",
    cell: "",
    type: {},
  });

  const basicData = ref<any>({
    normalMaxTickets: 283,
    goldMaximumTickets: 2,
    minimumAmountToGiveNormalPrize: 21,
    minimumAmountToGiveGoldPrize: 1500,
  });

  async function start() {
    this.randomNumber = getRandomInt(3);
    let status = { status: 0, message: "MAXIMO NUMERO DE JUGADORES COMPLETADO" };

    if (this.randomNumber === 0) {
      status = { status: 2, message: "¡HAS PERDIDO!" };
    }
    if (this.randomNumber === 1) {
      if (this.normalTicketsCount < this.basicData.normalMaxTickets && this.countPlayers >= this.basicData.minimumAmountToGiveNormalPrize) {
        status = { status: 4, message: "¡HAS GANADO 5 AÑOS DE PARCHE!" };
      }
    }
    if (this.randomNumber === 2) {
      if (this.goldTicketsCount < this.basicData.goldMaximumTickets && this.countPlayers >= this.basicData.minimumAmountToGiveGoldPrize) {
        status = { status: 3, message: "¡HAS GANADO UNAS VOLETAS!" };
      }
    }
    this.countPlayers += 1;
    saveLocalStorage();
    return status;
  }
  async function save() {
    this.playersWinner.push(form.value);
    if (form.value.type === "4") {
      this.normalTicketsCount += 1;
    }
    if (form.value.type === "3") {
      this.goldTicketsCount += 1;
    }
    this.form = {
      name: "",
      email: "",
      cell: "",
      type: {},
    };
    this.randomNumber = 0;

    saveLocalStorage();
  }

  function saveLocalStorage() {
    localStorage.countPlayers = countPlayers.value;

    localStorage.normalTicketsCount = normalTicketsCount.value;
    localStorage.goldTicketsCount = goldTicketsCount.value;
    localStorage.playersWinner = JSON.stringify(playersWinner.value);
  }
  return { randomNumber, countPlayers, form, playersWinner, normalTicketsCount, goldTicketsCount, basicData, start, save, saveLocalStorage };
});
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
