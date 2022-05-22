import { AxiosInstance } from 'axios';
import { ApiClient } from './apiClient';

interface PerYearData {
  year: number;
  value: number;
}

interface ApiResponseGetPrefecturePopulation {
  message: string | null;
  result: {
    boundaryYear: number;
    data: [
      {
        label: '総人口';
        data: PerYearData[];
      },
      {
        label: '年少人口';
        data: PerYearData[];
      },
      {
        label: '生産年齢人口';
        data: PerYearData[];
      },
      {
        label: '老年人口';
        data: PerYearData[];
      },
    ];
  };
}

export type PopulationPerYear = PerYearData[];

export class PopulationRepository {
  constructor(private client: AxiosInstance = new ApiClient().client) {}

  /**
   * 指定都道府県の総人口を返す
   * @param prefCode
   */
  public async getPrefecturePopulation(
    prefCode: number,
  ): Promise<PopulationPerYear> {
    const { data } = await this.client.get<ApiResponseGetPrefecturePopulation>(
      `/api/v1/population/composition/perYear?prefCode=${prefCode}&cityCode=-`,
    );
    return data.result.data[0].data;
  }
}
