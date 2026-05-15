import { Hasformat } from "../interfaces/format.js";

export class invoice implements Hasformat {
  //MODIFIERS PIBLIC, PRIVATE AND READONLY
  /* readonly clients: string;
  private details: string;
  public amounts: number;
  constructor(a: string, b: string, c: number) {
    this.clients = a;
    this.details = b;
    this.amounts = c;
  } */

  constructor(
    readonly clients: string,
    private details: string,
    public amounts: number,
  ) {}
  format() {
    return `${this.clients} owns $${this.amounts} for ${this.details}`;
  }
}
