import { invoice } from "../classes/invoice";

/* let docOne: Hasformat;
let docTwo: Hasformat;
docOne = new invoice("emma", "website", 200);
docTwo = new payment("emma", "palm tree", 500);

let docs: Hasformat[] = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
 */
interface userProf {
  userName: string;
  userAge: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: userProf = {
  userName: "eman",
  userAge: 30,
  speak(content: string): void {
    console.log(content);
  },
  spend(amount: number): number {
    console.log("i speant ", amount);
    return amount;
  },
};
const greetUser = (person: userProf) => {
  console.log("hello", person.userName);
};
greetUser(me);
console.log(me);

const anchor = document.querySelector("a")!;
/* if (anchor) {
  console.log(anchor.href);
}
 */
//console.log(anchor.href);
//console.log(anchor.href);

const invoiceOne = new invoice(
  "Emmanuel",
  "works on the Emmanuel website",
  300,
);
//console.log(invoiceOne);
const invoiceTwo = new invoice("Basil", "works on the Basil website", 300);
//console.log(invoiceTwo);

const invoices: invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
//console.log(invoices);

//ON PUBLIC MODIFIER
/* invoices.forEach((inv) => {
  console.log(inv.clients, inv.details, inv.amounts, inv.format());
}); */

//ON EACH MODIFIER
invoices.forEach((inv) => {
  console.log(inv.clients, inv.amounts, inv.format());
});
