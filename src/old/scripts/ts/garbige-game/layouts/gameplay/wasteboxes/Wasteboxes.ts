import '../../../../../../stylles/garbige-game/scss/wastebox.scss'

import { GarbigeTypes } from '../../../GarbigeTypes';
import Wastebox from './Wastebox';

export default class Wasteboxes {
  private readonly _wasteboxes:Map<GarbigeTypes, Wastebox> = new Map<GarbigeTypes, Wastebox>();

  constructor(wasteboxes:[GarbigeTypes, string][]) {
    /* wasteboxes.forEach(element => {
      (!this._wasteboxes.has(element[0]))
        this.addWastebox(new Wastebox(element[0], element[1]));
    }); */
  }

  private addWastebox(wastebox:Wastebox):void {
    /* this._wasteboxes.set(wastebox.garbigeType, wastebox); */
  }
}