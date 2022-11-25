import Controller from "../Controller";

export default abstract class ButtonController extends Controller {
  constructor(id: string) {
    super(id);
    this.view?.addEventListener('click', () => this.click());
  }

  protected abstract click(): void;
}