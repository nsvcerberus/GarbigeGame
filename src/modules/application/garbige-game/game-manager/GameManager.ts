import GameData from './data/GameData'
import GameEventEmitter from './event-emitter/GameEventEmitter'

export default class GameManager {
  private _gameData: GameData = new GameData();
  private _gameEventEmitter:GameEventEmitter = new GameEventEmitter();

  public get gameData(): GameData {
    return this._gameData;
  }

  public get gameEventEmitter(): GameEventEmitter {
    return this._gameEventEmitter;
  }
}