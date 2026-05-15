import { Hasformat } from "../interfaces/format";

export class listInterface {
  constructor(private container: HTMLUListElement) {}
  render(item: Hasformat, header: string, pos: "start" | "end") {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.textContent = header;
    li.append(h4);

    const p = document.createElement("p");
    p.textContent = item.format();
    li.append(p);
    if (pos === "start") {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
