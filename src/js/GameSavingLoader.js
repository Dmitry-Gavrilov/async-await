import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const buffer = await read();
    const stringBuffer = await json(buffer);
    return new GameSaving(JSON.parse(stringBuffer));
  }
}
