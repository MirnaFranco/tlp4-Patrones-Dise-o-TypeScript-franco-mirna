import { NotifierFactory } from "./Clases/NotifierFactory";

export async function runFactory() {
  console.log("\=== FACTORY ===");

  const email = NotifierFactory.create("email");
  email.send("ana@mail.com", "Bienvenida Ana!");

  const sms = NotifierFactory.create("sms");
  sms.send("+543704234567", "Tu código es 1234");

  const wsp = NotifierFactory.create("whatsapp");
  wsp.send("+543704334455", "¡Hola desde WhatsApp!");
}
