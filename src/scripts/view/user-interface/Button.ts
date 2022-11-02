import Controller from "../Controller";

export default abstract class Button extends Controller {
  constructor(id:string) {
    super(id);
    this.view?.addEventListener('click', () => this.click());
  }

  protected abstract click(): void;
}