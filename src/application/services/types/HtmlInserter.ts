export default class HtmlInserter {
  public add(template: string, parent: HTMLElement = document.body, position: Positions = Positions.beforeend): void {
    console.log("Template", template);
    parent.insertAdjacentHTML(position, template);
  }
}

export const enum Positions {
  beforebegin = `beforebegin`,
  afterbegin  = `afterbegin`,
  beforeend  = `beforeend`,
  afterend  = `afterend`
}