/* eslint-disable max-classes-per-file */
import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

(async (data) => {
  try {
    const loadGame = await GameSavingLoader.load(data);
    const saveGame = new GameSaving(loadGame);
    return saveGame;
  } catch (error) {
    throw new Error(error);
  }
})();
