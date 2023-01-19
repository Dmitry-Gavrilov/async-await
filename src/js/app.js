/* eslint-disable max-classes-per-file */
import GameSavingLoader from './GameSavingLoader';

class GameSaving {
  constructor(data) {
    this.id = data.id;
    this.created = data.created;
    this.userInfo = data.userInfo;
  }
}

(async (data) => {
  try {
    const loadGame = GameSavingLoader.load(data);
    const saveGame = new GameSaving(await loadGame);
    return saveGame;
  } catch (error) {
    throw new Error(error);
  }
})();
