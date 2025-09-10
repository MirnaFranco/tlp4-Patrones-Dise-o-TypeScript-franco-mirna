import { INotifier } from "../Interfaces/INotifier";
import { Channel } from "../Interfaces/channel";
import { EmailNotifier } from "./EmailNotifier";
import { SmsNotifier } from "./SmsNotifier";
import { WhatsappNotifier } from "./WhatsappNotifier";

export class NotifierFactory {
  static create(channel: Channel): INotifier {
    switch (channel) {
      case "email":
        return new EmailNotifier();
      case "sms":
        return new SmsNotifier();
      case "whatsapp":
        return new WhatsappNotifier();
      default:
        throw new Error(" Canal no soportado");
    }
  }
}