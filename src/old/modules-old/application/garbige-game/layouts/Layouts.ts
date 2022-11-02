/* import View from '../../../global/view/View'; */
import Layout from './layout/Layout';
import GameplayLayout from './layout/gameplay/GameplayLayout';

const template = require('./template.html').default;
import './style.scss';

export default class Layouts/*  extends View  */{
  private readonly _layouts: Map<string, Layout> = new Map<string, Layout>();

  constructor(id: string, parent: HTMLElement) {
    /* super(id, template, parent); */
    this.addLayouts();
  }

  private addLayouts(): void {
    /* new GameplayLayout('layout-gameplay', this._element); */
    //this._layouts.set(wastebox.garbigeType, new Layout());
  }
}