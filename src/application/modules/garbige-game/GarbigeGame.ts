const template: string = require('./template/template.html').default;
import './template/style.scss';
const json = require("./template/data.json");

import GarbigeGameModule from "./GarbigeGameModule";
import Controller from '../../../scripts/view/Controller';
import StartLayoutController from './views/layouts/start/StartLayoutController';
import ButtonStartController from './views/layouts/start/ButtonStartController';

const controllers: [{new(id: string): Controller;}, string][] = [
  [StartLayoutController, 'garbige-game-layout-start'],
  [ButtonStartController, 'garbige-game-button-start']
];

export const garbigeGame: GarbigeGameModule = new GarbigeGameModule({template, json}, controllers);