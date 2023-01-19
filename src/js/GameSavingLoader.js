import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    const buffer = await read();
    const stringBuffer = await json(buffer);
    return JSON.parse(stringBuffer);
  }
}
