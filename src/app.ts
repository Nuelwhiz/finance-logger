import { listInterface } from "./classes/display.js";
import { invoice } from "./classes/invoice.js";
import { payment } from "./classes/payment.js";
import { Hasformat } from "./interfaces/format.js";

//
//const form = document.querySelector("form")
const form = document.querySelector(".new-item-form") as HTMLFormElement;
//console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new listInterface(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];
  let doc: Hasformat;
  if (type.value === "invoice") {
    doc = new invoice(...values);
  } else {
    doc = new payment(...values);
  }
  list.render(doc, type.value, "end");
  //console.log(doc);
});
