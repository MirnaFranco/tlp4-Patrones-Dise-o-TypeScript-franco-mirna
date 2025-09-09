import { IHttpClient } from "../Interfaces/IHttpClient";

export class SimpleHttpClient {
  constructor(private adapter: IHttpClient) {}

  setAdapter(adapter: IHttpClient) {
    this.adapter = adapter;
  }

  async get<T>(url: string): Promise<T> {
    return this.adapter.get<T>(url);
  }
}
