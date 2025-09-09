export interface IConexionDB {
  connect(): void;
  disconnect(): void;
  isConnected(): boolean;
}
