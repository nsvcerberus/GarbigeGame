import Controller from '../../../../../../scripts/view/Controller';
/* import { gameEventEmitter, GameEvents } from '../../../GameEventEmitter'; */
import anime from 'animejs';

export default class Timer extends Controller {
  private readonly _timePerSecond: number;
  private readonly _color: String;
  private readonly _tip: HTMLElement;

  constructor(id: string, timePerSecond: number) {
    super(id);
    this._timePerSecond = timePerSecond;
    this.subscribe();
  }

  private subscribe(): void {
    /* gameEventEmitter.subscribe(GameEvents.Start, () => this.start()); */
  }

  public start(): void {
    anime({
      targets: ['#' + this.view.id],
      duration: this._timePerSecond * 1000,
      easing: "linear",
      update: function(animation) {
        animation.animatables[0].target.style.setProperty('background', 'conic-gradient(#fff ' + animation.progress + '%, #d3a8f0 ' + animation.progress + '%)');
      }
    }).finished.then(() => {
      /* gameEventEmitter.onFinish(); */
    });
  }
}