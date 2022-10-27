/* import Button from '../../../../../../application/modules/global/user-interface/Button'; */
import Button from '../../../../../../modules/global/user-interface/Button';
/* import { gameManager } from '../../../../../modules/games/garbige/GarbigeGame' */
import anime from 'animejs'

export default class ButtonStart extends Button {
  private _animationPlaying:Boolean = false;

  /* constructor(tagId:string) {
    super(tagId);
  } */

  protected click(): void {
    if(!this._animationPlaying) {
      this._animationPlaying = true;
      anime({
        /* targets: '#' + this._tagId, */
        scale: [1, 0],
        duration: 560,
        easing: "easeInBack"
      }).finished.then(() => {
        this._animationPlaying = false;
        /* gameManager.gameEventEmitter.onStart(); */
      });
    }
  }

  private get animationPlaying():Boolean {
    return this._animationPlaying;
  }

  private set animationPlaying(state:Boolean) {
    this._animationPlaying = state;
  }
}