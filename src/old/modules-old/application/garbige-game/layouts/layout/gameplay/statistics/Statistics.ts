/* import View from "../../../../../../global/view/View"; */
import Timer from "../../../../../../../../application/modules/garbige-game/views/layouts/gameplay/Timer";
const template = require('./template.html').default;

export default class Statistics /* extends View */ {
  private readonly _timer: Timer;

  constructor(id: string, parent: HTMLElement) {
    /* super(id, template, parent);
    this._timer = new Timer('timer', this._element, 60); */
  }
}