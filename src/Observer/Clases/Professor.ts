import { IPublisher } from "../Interfaces/IPublisher";
import { ISubscriber } from "../Interfaces/ISubscriber";

export class Professor implements IPublisher {
  private students: ISubscriber[] = [];

  subscribe(subscriber: ISubscriber): void {
    this.students.push(subscriber);
  }

  unsubscribe(subscriber: ISubscriber): void {
    this.students = this.students.filter(s => s !== subscriber);
  }

  publish(task: string): void {
    console.log(` Profesor publica: ${task}`);
    this.students.forEach(s => s.update(task));
  }
}
