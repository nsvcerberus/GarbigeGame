import PageElement from "../global/PageElement";
/* import GarbigeGame from "./garbige-game/GarbigeGame"; */

const template = require('./template.html').default;
import './style.scss';

export default class Application extends PageElement {
  /* private readonly _garbigeGame: GarbigeGame; */

  constructor(id: string) {
    super(id, template, document.body);
    /* this._garbigeGame = new GarbigeGame('garbige-game', this._element); */
  }

  /* public get garbigeGame(): GarbigeGame {
    return this._garbigeGame;
  } */
}