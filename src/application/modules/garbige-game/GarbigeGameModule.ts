import Controller from "../../../scripts/view/Controller";
import Module from "../Module";
/* import { startLayout } from './views/layouts/start/StartLayout'; */
/* import { application } from '../../Application'; */
/* import ElementController from "../../../scripts/view/ElementController"; */
/* import { garbigeGameController } from "./views/GarbigeGameController";
import StartLayoutController from './views/layouts/start/StartLayoutController';
import ButtonStartController from './views/layouts/start/ButtonStartController';
import Timer from './views/layouts/gameplay/Timer'; */

export default class GarbigeGameModule extends Module {
  constructor(data: {template: string, json?: any},
              controllers?: [{new(id: string): Controller;}, string][]) {
    super(data, controllers);

    /* new GarbigeGame(); */
    /* this._elements = [
      garbigeGameController,
      new StartLayoutController('garbige-game-layout-start'),
      new ButtonStartController('garbige-game-button-start'),
      new Timer('timer', 60)
    ]; */
  }

  //protected createModules(): void {
    /* this._elementsControllers = [
      startLayout
    ]; */
  //}
}

/* export const garbigeGame: GarbigeGame = new GarbigeGame(application.view); */