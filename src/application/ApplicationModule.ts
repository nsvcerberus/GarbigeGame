import Module from './modules/Module';

export default class ApplicationModule extends Module {
  constructor(data: {template: string},
              modules: [Module, HTMLElement][]) {
    super(data, [], modules);
  }
}