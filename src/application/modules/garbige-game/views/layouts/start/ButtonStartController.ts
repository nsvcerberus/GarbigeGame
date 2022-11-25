import { garbigeGameEventEmitter } from "../../../GarbigeGameEventEmitter";
import ButtonController from "../../../../../../scripts/view/user-interface/ButtonController";
import anime from 'animejs'

export default class ButtonStartController extends ButtonController {
  private _animationPlaying:Boolean = false;

  protected click(): void {
    if(!this._animationPlaying) {
      this._animationPlaying = true;
      anime({
        targets: '#' + this.view.id,
        scale: [1, 0],
        duration: 600,
        easing: "easeInBack"
      })
      .finished.then(() => {
        this._animationPlaying = false;
        garbigeGameEventEmitter.onStart();
      });
    }
  }
}