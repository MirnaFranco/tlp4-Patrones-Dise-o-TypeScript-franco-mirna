import { Professor } from "./Clases/Professor";
import { Student } from "./Clases/Student";

export async function runObserver() {
  console.log("\n=== OBSERVER ===");

  const prof = new Professor();
  const s1 = new Student("Ana");
  const s2 = new Student("Juan");

  // Suscribimos alumnos
  prof.subscribe(s1);
  prof.subscribe(s2);

  // Publica la primera tarea
  prof.publish("Tarea 1: Leer capítulo 1");

  // Juan se da de baja
  prof.unsubscribe(s2);

  // Publica la segunda tarea
  prof.publish("Tarea 2: Resolver ejercicios");
}

