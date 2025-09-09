import { INotifier } from "../Interfaces/INotifier";

export class EmailNotifier implements INotifier {
  send(to: string, message: string): void {
    if (!to.includes("@")) {
      throw new Error(" Email inválido");
    }
    console.log(` Email enviado a ${to}: ${message}`);
  }
}
