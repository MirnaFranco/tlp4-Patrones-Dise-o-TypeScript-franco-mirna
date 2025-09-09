import { INotifier } from "../Interfaces/INotifier";

export class WhatsappNotifier implements INotifier {
  send(to: string, message: string): void {
    if (!/^\+?\d{7,15}$/.test(to)) {
      throw new Error(" Número de WhatsApp inválido");
    }
    console.log(` WhatsApp enviado a ${to}: ${message}`);
  }
}
