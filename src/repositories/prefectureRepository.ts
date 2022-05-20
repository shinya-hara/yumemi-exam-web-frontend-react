import { AxiosInstance } from 'axios';
import { ApiClient } from './apiClient';

interface ApiResponseGetList {
  message: string | null;
  result: Prefecture[];
}

export interface Prefecture {
  prefCode: number;
  prefName: string;
}

export class PrefectureRepository {
  constructor(private client: AxiosInstance = new ApiClient().client) {}

  /**
   * 都道府県一覧を返す
   */
  public async getList(): Promise<Prefecture[]> {
    const { data } = await this.client.get<ApiResponseGetList>(
      '/api/v1/prefectures',
    );
    return data.result;
  }
}
