export default abstract class Controller {
  private readonly _view: HTMLElement;

  constructor(id: string) {
    this._view = document.getElementById(id) ?? document.body;
  }

  public get view(): HTMLElement {
    return this._view;
  }

  protected show(): void {
    this.view.classList.remove('hide');
  }

  protected hide(): void {
    this.view.classList.add('hide');
  }
}