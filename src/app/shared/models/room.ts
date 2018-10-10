
export class Room {
  id: number;
  name: string;

  constructor(id: number, name: string) {
      this.name = name;
      this.id = id;
  }

  toString(): string {
    return this.id + ' is for ' + this.name ;
  }

}
