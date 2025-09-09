import { ConexionDB } from "./Clases/ConexionDB";

export async function runSingleton() {
  console.log("\=== SINGLETON ===");

  // Primera conexión
  const db1 = ConexionDB.getInstance("localhost", 5432, "admin");
  db1.connect();

  // Intento de obtener otra instancia con otros datos
  const db2 = ConexionDB.getInstance("remotehost", 3306, "user");
  db2.connect();

  // Verificamos que ambas instancias sean la misma
  console.log("¿Misma instancia?", db1 === db2);

  db1.disconnect();
}
