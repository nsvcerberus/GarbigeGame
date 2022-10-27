import PageElement from "../../../../../../../global/PageElement";

export default abstract class Result extends PageElement {
  constructor(id: string, template: string, parent: HTMLElement) {
    super(id, template, parent);
  }
}