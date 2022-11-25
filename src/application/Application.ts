const template = require('./template/template.html').default;
import './template/style.scss';

import Module from './modules/Module';
import ApplicationModule from "./ApplicationModule";
import { garbigeGame } from './modules/garbige-game/GarbigeGame';

const elementPopUp = document.getElementById('pop-up') ?? document.body;

const modules: [Module, HTMLElement][] = [
  [garbigeGame, elementPopUp]
];

new ApplicationModule({template}, modules);