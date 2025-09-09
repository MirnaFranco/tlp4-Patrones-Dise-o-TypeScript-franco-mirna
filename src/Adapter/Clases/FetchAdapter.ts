import { IHttpClient } from "../Interfaces/IHttpClient";

export class FetchAdapter implements IHttpClient {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error Fetch: ${response.status}`);
    }
    return response.json() as Promise<T>;
  }
}
