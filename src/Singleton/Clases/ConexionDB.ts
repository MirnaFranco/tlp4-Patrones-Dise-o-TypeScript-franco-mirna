import { IConexionDB } from "../Interfaces/IConexionDB";

export class ConexionDB implements IConexionDB {
  private static instance: ConexionDB;
  private connected: boolean = false;

  private constructor(
    private host: string,
    private port: number,
    private user: string
  ) {}

  // Método estático que retorna la misma instancia
  static getInstance(host: string, port: number, user: string): ConexionDB {
    if (!ConexionDB.instance) {
      ConexionDB.instance = new ConexionDB(host, port, user);
    }
    return ConexionDB.instance;
  }

  connect(): void {
    if (!this.connected) {
      this.connected = true;
      console.log(` Conectado a DB en ${this.host}:${this.port} como ${this.user}`);
    } else {
      console.log(" Ya existe una conexión activa.");
    }
  }

  disconnect(): void {
    if (this.connected) {
      this.connected = false;
      console.log(" Conexión cerrada.");
    } else {
      console.log(" No hay conexión activa para cerrar.");
    }
  }

  isConnected(): boolean {
    return this.connected;
  }
}
