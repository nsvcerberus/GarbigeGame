const template = require('./template/template.html').default;
const data = require("./template/data.json");
import './template/style.scss';

import Module from "../Module";
import Controller from "../../../scripts/view/Controller";
import GarbigeGameController from "./views/GarbigeGameController";
import StartLayoutController from './views/layouts/start/StartLayoutController';
import ButtonStartController from './views/layouts/start/ButtonStartController';
import Timer from './views/layouts/gameplay/Timer';
import GameEventEmitter, { GameEvents } from './GameEventEmitter';

export default class GarbigeGame extends Module {
  private readonly _eventEmitter: GameEventEmitter;
  private readonly _controllers: Controller[];

  constructor() {
    super(template, data);
    /* console.log(colorsJson.primaryBright); */
    this._controllers = [
      new GarbigeGameController('garbige-game'),
      new StartLayoutController('garbige-game-layout-start'),
      new ButtonStartController('garbige-game-button-start'),
      new Timer('timer', 60)
    ];
  }
}