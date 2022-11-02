import Controller from "../../../../../../scripts/view/Controller";
/* import { GameEventEmitter, GameEvents } from "../../../GameEventEmitter"; */

export default class StartLayoutController extends Controller {
  constructor(id: string) {
    super(id);
    this.subscribe();
  }

  private subscribe(): void {
    /* gameEventEmitter.subscribe(GameEvents.Start, () => this.hide()); */
  }
}