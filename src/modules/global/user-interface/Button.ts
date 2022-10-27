import PageElement from "../PageElement";

export default abstract class Button extends PageElement {
  /* constructor(tagId:string) {
    super(tagId);
    this.element?.addEventListener('click', () => this.click());
  } */

  protected abstract click(): void;
}