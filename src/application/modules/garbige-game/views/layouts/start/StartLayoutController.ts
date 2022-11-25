import Controller from "../../../../../../scripts/view/Controller";
import { garbigeGameEventEmitter, GameEvents } from "../../../GarbigeGameEventEmitter";

export default class StartLayoutController extends Controller {
  constructor(id: string) {
    super(id);
    this.subscribe();
  }

  private subscribe(): void {
    garbigeGameEventEmitter.subscribe(GameEvents.Start, () => this.hide());
  }
}