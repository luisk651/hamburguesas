import { defineStore } from "pinia";
import { db, doc, setDoc } from "~/plugins/firebase";
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
      const aux = (this.basicData.minimumAmountToGiveNormalPrize * (this.normalTicketsCount + 1));
      if (this.normalTicketsCount < this.basicData.normalMaxTickets && this.countPlayers >= aux) {
        status = { status: 4, message: "¡HAS GANADO 5 AÑOS DE PARCHE!" };
      }
    }
    if (this.randomNumber === 2) {
      const aux = this.basicData.minimumAmountToGiveGoldPrize * (this.goldTicketsCount + 1);
      if (this.goldTicketsCount < this.basicData.goldMaximumTickets && this.countPlayers >= aux) {
        status = { status: 3, message: "¡HAS GANADO UNAS VOLETAS!" };
      }
    }
    this.countPlayers += 1;
    saveLocalStorage();
    await saveFirebase();
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
    await saveFirebase();
  }

  function saveLocalStorage() {
    localStorage.countPlayers = countPlayers.value;
    localStorage.normalTicketsCount = normalTicketsCount.value;
    localStorage.goldTicketsCount = goldTicketsCount.value;
    localStorage.playersWinner = JSON.stringify(playersWinner.value);
  }
  async function saveFirebase() {
    try {
      if (!navigator.onLine) {
        return;
      }
      await setDoc(doc(db, "jackpot", "players"), { winners: playersWinner.value });
      await setDoc(doc(db, "jackpot", "config"), { basicData: basicData.value, countPlayers: countPlayers.value, normalTicketsCount: normalTicketsCount.value, goldTicketsCount: goldTicketsCount.value });
    } catch (error) {
      console.log(error);
    }
  }
  return { randomNumber, countPlayers, form, playersWinner, normalTicketsCount, goldTicketsCount, basicData, start, save, saveLocalStorage, saveFirebase };
});
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
