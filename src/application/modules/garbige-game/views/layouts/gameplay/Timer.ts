import Controller from '../../../../../../scripts/view/Controller';
import { garbigeGameEventEmitter, GameEvents } from '../../../GarbigeGameEventEmitter';
import anime from 'animejs';

export default class Timer extends Controller {
  private readonly _timePerSecond: number;

  constructor(id: string, timePerSecond: number) {
    super(id);
    this._timePerSecond = timePerSecond;
    this.subscribe();
  }

  private subscribe(): void {
    garbigeGameEventEmitter.subscribe(GameEvents.Start, () => this.start());
  }

  public start(): void {
    anime({
      targets: [
        '#' + this.view.id,
        this.view.querySelector('.tip.start')
      ],
      duration: this._timePerSecond * 1000,
      easing: "linear",
      update: function(animation) {
        animation.animatables[0].target.style.setProperty('background', 'conic-gradient(#fff ' + animation.progress + '%, #d3a8f0 ' + animation.progress + '%)');
        animation.animatables[1].target.style.setProperty('transform', 'rotate(' + 360 * animation.progress / 100 + 'deg)');
      }
    }).finished.then(() => {
      garbigeGameEventEmitter.onFinish();
    });
  }
}

