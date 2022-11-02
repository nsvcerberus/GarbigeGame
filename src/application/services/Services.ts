import HtmlInserter from "./types/HtmlInserter";

export default class Services {
  private _htmlInserter: HtmlInserter = new HtmlInserter();

  public get htmlInserter(): HtmlInserter {
    return this._htmlInserter;
  }

  /*
  private _services: Map<string, Service> = new Map<string, Service>();

  constructor(services: Service[]) {
    services.forEach(service => this.add(service))
  }

  public add(service: Service): void {
    this._services.set(service.name, service);
  }

  public get<T>(name: string): T {
    return this._services.get(name) as T;
  }
  */
}