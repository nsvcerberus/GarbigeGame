/* import Layout from "../Layout"; */
import Statistics from "./statistics/Statistics";
const template = require('./template.html').default;

export default class GameplayLayout /* extends Layout */ {
  private readonly _statistics: Statistics;

  constructor(id: string, parent: HTMLElement) {
    /* super(id, template, parent); */
    /* this._statistics = new Statistics('statistics', this._element); */
  }
}