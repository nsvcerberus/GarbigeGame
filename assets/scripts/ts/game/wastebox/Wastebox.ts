namespace Application.Games {
  export class Wastebox extends PageElement {
    private garbigeType:GarbigeTypes;

    constructor(garbigeType:GarbigeTypes, tagId:string) {
      super(tagId);
      this.garbigeType = garbigeType;
    }

    public getGarbigeType():GarbigeTypes {
      return this.garbigeType;
    }
  }
}