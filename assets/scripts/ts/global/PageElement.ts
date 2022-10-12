namespace Application {
  export abstract class PageElement {
    protected tagId:string;

    constructor(tagId:string) {
      this.tagId = tagId;
    }

    public getElement():HTMLElement|null {
      return document.getElementById(this.tagId);
    }
  }
}