export class invoice {
    clients;
    details;
    amounts;
    //MODIFIERS PIBLIC, PRIVATE AND READONLY
    /* readonly clients: string;
    private details: string;
    public amounts: number;
    constructor(a: string, b: string, c: number) {
      this.clients = a;
      this.details = b;
      this.amounts = c;
    } */
    constructor(clients, details, amounts) {
        this.clients = clients;
        this.details = details;
        this.amounts = amounts;
    }
    format() {
        return `${this.clients} owns $${this.amounts} for ${this.details}`;
    }
}
//# sourceMappingURL=invoice.js.map