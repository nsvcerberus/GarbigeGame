namespace Application.Games {
  export enum GarbigeTypes {
    Paper,
    Glass,
    Metal,
    Wood
  }

  class Game {
    private readonly wasteboxes:Map<GarbigeTypes, Wastebox>;

    constructor(wasteboxes:Wastebox[]) {
      this.wasteboxes = new Map<GarbigeTypes, Wastebox>();
      wasteboxes.forEach(element => this.addWastebox(element));
    }

    private addWastebox(wastebox:Wastebox):void {
      this.wasteboxes.set(wastebox.getGarbigeType(), wastebox);
    }
  }

  const wasteboxes:Wastebox[] = [
    new Wastebox(GarbigeTypes.Glass, "wastebox-glass"),
    new Wastebox(GarbigeTypes.Metal, "wastebox-metal"),
    new Wastebox(GarbigeTypes.Paper, "wastebox-paper"),
    new Wastebox(GarbigeTypes.Wood, "wastebox-wood")
  ];

  export const gameplay:Game = new Game(wasteboxes);
}