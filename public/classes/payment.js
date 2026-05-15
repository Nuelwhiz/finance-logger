export class payment {
    recipient;
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
    constructor(recipient, details, amounts) {
        this.recipient = recipient;
        this.details = details;
        this.amounts = amounts;
    }
    format() {
        return `${this.recipient} owes  $${this.amounts} for ${this.details}`;
    }
}
//# sourceMappingURL=payment.js.map