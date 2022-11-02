const template = require('./template/template.html').default;
import './template/style.scss';
import Services from "./services/Services";
import Modules from "./modules/Modules";

class Application {
  private readonly _services: Services = new Services();
  private _modules: Modules;

  constructor() {
    this._services.htmlInserter.add(template);
  }

  public initModules(): void {
    this._modules = new Modules();
  }

  public get services(): Services {
    return this._services;
  }

  public get modules(): Modules {
    return this._modules;
  }
}

export const application: Application = new Application();
application.initModules();