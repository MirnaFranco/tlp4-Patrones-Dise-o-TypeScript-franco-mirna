import { ISubscriber } from "../Interfaces/ISubscriber";

export class Student implements ISubscriber {
  constructor(private name: string) {}

  update(task: string): void {
    console.log(` ${this.name} recibió tarea: ${task}`);
  }
}
