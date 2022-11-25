export const enum Positions {
  beforebegin = `beforebegin`,
  afterbegin  = `afterbegin`,
  beforeend  = `beforeend`,
  afterend  = `afterend`
}

export default class HtmlManager {
  public add(template: string, parent: HTMLElement = document.body, position: Positions = Positions.beforeend): void {
    parent.insertAdjacentHTML(position, template);
  }
}