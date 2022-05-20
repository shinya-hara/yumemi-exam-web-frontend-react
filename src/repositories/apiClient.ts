import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class ApiClient {
  private _client: AxiosInstance;
  private BASE_URL = import.meta.env.VITE_APP_RESAS_API_ENDPOINT as string;
  private API_KEY = import.meta.env.VITE_APP_RESAS_API_KEY as string;

  constructor() {
    const config: AxiosRequestConfig = {
      baseURL: this.BASE_URL,
      headers: {
        'X-API-KEY': this.API_KEY,
      },
    };
    this._client = axios.create(config);
  }

  public get client(): AxiosInstance {
    return this._client;
  }
}
