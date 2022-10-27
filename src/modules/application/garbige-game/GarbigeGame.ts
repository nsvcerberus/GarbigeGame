import PageElement from '../../global/PageElement';
/* import GameManager from './game-manager/GameManager'; */
import Layouts from './layouts/Layouts';

export const template = require('./template.html').default;
import './style.scss';

/* import { GarbigeTypes } from '../../../scripts/ts/garbige-game/GarbigeTypes';
import StartLayout from '../../../scripts/ts/garbige-game/layouts/start/StartLayout';
import Timer from '../../../scripts/ts/garbige-game/layouts/gameplay/timer/Timer';
import ButtonStart from '../../../scripts/ts/garbige-game/layouts/start/ButtonStart'
import Wasteboxes from '../../../scripts/ts/garbige-game/layouts/gameplay/wasteboxes/Wasteboxes'; */

export default class GarbigeGame extends PageElement {
  /* private readonly _gameManager: GameManager; */
  private readonly _layouts: Layouts;

  constructor(id: string, parent: HTMLElement) {
    super(id, template, parent);
    /* this._gameManager = new GameManager(); */
    this._layouts = new Layouts('layouts', this._element);
  }

  /* public get gameManager(): GameManager {
    return this._gameManager;
  } */
}


/* export const gameManager = new GameManager(); */
/* export const startLayout = new StartLayout('layout-start'); */
/* export const buttonStart = new ButtonStart('garbige-game-button-start'); */
/* export const timer = new Timer('timer', 10); */
/* export const wasteboxes = new Wasteboxes([
  [GarbigeTypes.Mixed, "wastebox-recyclables"],
  [GarbigeTypes.Household, "wastebox-mixed"],
  [GarbigeTypes.Recyclables, "wastebox-household"],
  [GarbigeTypes.Dangerous, "wastebox-dangerous"]
]); */