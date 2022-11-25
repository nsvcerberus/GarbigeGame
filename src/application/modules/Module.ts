import Controller from "../../scripts/view/Controller";
import { services } from "../services/Services";

export default abstract class Module {
  private _controllers: Controller[] = [];
  private _modules: Module[];

  constructor(data: { template: string, json?: any},
              controllers?: [{new(id: string): Controller;}, string][],
              modules?: [Module, HTMLElement][]) {
    if(data.json != null) {
      data.template = this.addText(data.template, data.json);
    }

    services.htmlInserter.add(data.template);

    if(controllers != null) {
      controllers.forEach(controller => this._controllers.push(new controller[0](controller[1])));
    }

    if(modules != null) {
      this.setParentForModule(modules);
    }
  }

  private addAnchorsForModules(template: string): [string, string[]] {
    const moduleKeys: string[] = [];
    const regex = /(?<=\{)(module:.*?)(?=\})/g;
    template.match(regex)?.forEach(moduleKey => {
      template = template.replace('{' + moduleKey + '}', '<div id="' + moduleKey.replace('module:','') + '"></div>');
      moduleKeys.push(moduleKey);
    });
    return [template, moduleKeys];
  }

  private addText(template: string, data: any): string {
    const regex = /(?<=\{text:)(.*?)(?=\})/g;
    template.match(regex)?.forEach(fieldData => {
      const text = fieldData.split('.').reduce(function(object, key) {
        return object && object[key];
      }, data);
      template = template.replace('{' + fieldData + '}', '<span>' + text + '</span>');
    });
    return template;
  }

  private setParentForModule(modules: [Module, HTMLElement][]) {
    modules.forEach(data => data[0])
  }

  //private createModule(type: { new(parent: HTMLElement): Module; }, parent: HTMLElement): void {
    //return new type(this._view);
    //new type(parent);
  //}
}