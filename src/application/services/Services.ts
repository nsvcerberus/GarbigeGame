import HtmlManager from "./HtmlManager";

class Services {
  private _htmlManager: HtmlManager = new HtmlManager();

  public get htmlInserter(): HtmlManager {
    return this._htmlManager;
  }
}

export const services = new Services();