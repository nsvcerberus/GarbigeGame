import PageElement from "../../../../../../global/PageElement";
import Timer from "./timer/Timer";
const template = require('./template.html').default;

export default class Statistics extends PageElement {
  private readonly _timer: Timer;

  constructor(id: string, parent: HTMLElement) {
    super(id, template, parent);
    this._timer = new Timer('timer', this._element, 60);
  }
}