import PageElement from '../../../global/PageElement';
import Layout from './layout/Layout';
import GameplayLayout from './layout/gameplay/GameplayLayout';

const template = require('./template.html').default;
import './style.scss';

export default class Layouts extends PageElement {
  private readonly _layouts: Map<string, Layout> = new Map<string, Layout>();

  constructor(id: string, parent: HTMLElement) {
    super(id, template, parent);
    this.addLayouts();
  }

  private addLayouts(): void {
    new GameplayLayout('layout-gameplay', this._element);
    //this._layouts.set(wastebox.garbigeType, new Layout());
  }
}