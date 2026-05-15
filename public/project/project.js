import { invoice } from "../classes/invoice";
const me = {
    userName: "eman",
    userAge: 30,
    speak(content) {
        console.log(content);
    },
    spend(amount) {
        console.log("i speant ", amount);
        return amount;
    },
};
const greetUser = (person) => {
    console.log("hello", person.userName);
};
greetUser(me);
console.log(me);
const anchor = document.querySelector("a");
/* if (anchor) {
  console.log(anchor.href);
}
 */
//console.log(anchor.href);
//console.log(anchor.href);
const invoiceOne = new invoice("Emmanuel", "works on the Emmanuel website", 300);
//console.log(invoiceOne);
const invoiceTwo = new invoice("Basil", "works on the Basil website", 300);
//console.log(invoiceTwo);
const invoices = [];
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
//# sourceMappingURL=project.js.map