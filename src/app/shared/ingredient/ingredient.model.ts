export class Ingredient {
  private _id: number;

  constructor(public name: string, public amount: number, id?: number) {
    if(id){
      this.id = id;
    }
  }

  get id(): number {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }
}
