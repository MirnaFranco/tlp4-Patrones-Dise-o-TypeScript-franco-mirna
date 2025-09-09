import { FetchAdapter } from "./Clases/FetchAdapter";
import { AxiosAdapter } from "./Clases/AxiosAdapter";
import { SimpleHttpClient } from "./Clases/SimpleHttpClient";

export async function runAdapter() {
  console.log("\=== ADAPTER ===");

  const client = new SimpleHttpClient(new FetchAdapter());

  // Usando Fetch
  const data1 = await client.get<any>("https://jsonplaceholder.typicode.com/todos/1");
  console.log("FetchAdapter:", data1);

  // Cambiamos a Axios
  client.setAdapter(new AxiosAdapter());
  const data2 = await client.get<any>("https://jsonplaceholder.typicode.com/todos/2");
  console.log("AxiosAdapter:", data2);
}
