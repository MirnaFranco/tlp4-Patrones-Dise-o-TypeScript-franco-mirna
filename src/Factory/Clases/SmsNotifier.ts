import { INotifier } from "../Interfaces/INotifier";

export class SmsNotifier implements INotifier {
  send(to: string, message: string): void {
    if (!/^\+?\d{7,15}$/.test(to)) {
      throw new Error(" Número de teléfono inválido");
    }
    console.log(` SMS enviado a ${to}: ${message}`);
  }
}
