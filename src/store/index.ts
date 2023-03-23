import { game } from "./game";

const appStore: any = {};

export const registerStore = () => {
  appStore.game = game();
};

export default appStore;
