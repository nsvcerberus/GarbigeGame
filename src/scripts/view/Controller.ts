export default abstract class Controller {
  protected readonly _view?: HTMLElement;

  constructor(id: string) {
    this._view = document.getElementById(id) ?? undefined;
  }

  public get view(): HTMLElement | never {
    if (this._view != undefined) {
      return this._view;
    }

    throw new Error('Element is undefined!');
  }

  protected show(): void {
    this.view.classList.remove('hide');
  }

  protected hide(): void {
    this.view.classList.add('hide');
  }
}