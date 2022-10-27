import PageElement from "../../../../../../../global/PageElement";
import { application } from "../../../../../../../../application";
import { GameEvents } from "../../../../../game-manager/event-emitter/GameEvents";
const template = require('./template.html').default;
import './style.scss';
import anime from 'animejs';

export default class Timer extends PageElement {
  private readonly _timePerSecond: number;
  /* private readonly _color: String; */

  constructor(id: string, parent: HTMLElement, timePerSecond: number) {
    super(id, template, parent);
    this._timePerSecond = timePerSecond;
    //if (this.element != null)
    //  this._color = this.element.style.backgroundColor;
    this.subscribe();
  }

  private subscribe(): void {
    /* application.garbigeGame.gameManager.gameEventEmitter.subscribe(GameEvents.Start, () => this.start()); */
  }

  public start(): void {
    anime({
      targets: '#' + this._id,
      duration: this._timePerSecond * 1000,
      easing: "linear",
      update: function(animation) {
        animation.animatables[0].target.style.setProperty('background', 'conic-gradient(#fff ' + animation.progress + '%, #d3a8f0 ' + animation.progress + '%)');
      }
    }).finished.then(() => {
      /* application.garbigeGame.gameManager.gameEventEmitter.onFinish(); */
    });
  }
}