export default abstract class PageElement {
  protected readonly _id: string;
  protected readonly _element: HTMLElement;

  constructor(id: string, template: string, parent: HTMLElement) {
    this._id = id;
    template = this.setIdToTemplate(id, template);
    this.embedTemplateToHTMLElement(template, parent);
    this._element = this.defineElement();
  }

  private setIdToTemplate(id: string, template: string): string {
    return template.replace('{{id}}', id);
  }

  private embedTemplateToHTMLElement(template: string, parent: HTMLElement): void {
    return parent.insertAdjacentHTML('beforeend', template);
  }

  private defineElement(): HTMLElement {
    let element = document.getElementById(this._id);
    return (element == null) ? document.body : element;
  }

  public get element() : HTMLElement {
    return this._element;
  }

  protected show(): void {
    this._element.classList.remove('hide');
  }

  protected hide(): void {
    this._element.classList.add('hide');
  }
}