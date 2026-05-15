import { listInterface } from "./classes/display.js";
import { invoice } from "./classes/invoice.js";
import { payment } from "./classes/payment.js";
//
//const form = document.querySelector("form")
const form = document.querySelector(".new-item-form");
//console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new listInterface(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new invoice(...values);
    }
    else {
        doc = new payment(...values);
    }
    list.render(doc, type.value, "end");
    //console.log(doc);
});
//# sourceMappingURL=app.js.map