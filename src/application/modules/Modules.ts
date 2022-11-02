/* import Module from "./Module"; */
import GarbigeGame from "./garbige-game/GarbigeGame";

export default class Modules {
  private readonly _garbigeGame = new GarbigeGame();

  public get garbigeGame(): GarbigeGame {
    return this._garbigeGame;
  }
}