import { useCallback, useState } from 'react';
import {
  PopulationPerYear,
  PopulationRepository,
} from '../repositories/populationRepository';
import { Prefecture } from '../repositories/prefectureRepository';

interface PrefecturePopulation {
  [prefCode: number]: {
    prefecture: Prefecture;
    data: PopulationPerYear;
  };
}

export const usePopulation = (
  repository: PopulationRepository = new PopulationRepository(),
) => {
  const [prefecturePopulation, setPrefecturePopulation] =
    useState<PrefecturePopulation>({});

  const getPrefecturePopulation = useCallback(
    async (prefecture: Prefecture) => {
      // Return from cache
      if (prefecturePopulation[prefecture.prefCode])
        return prefecturePopulation[prefecture.prefCode];

      const population = await repository.getPrefecturePopulation(
        prefecture.prefCode,
      );
      setPrefecturePopulation({
        ...prefecturePopulation,
        ...{
          [prefecture.prefCode]: {
            prefecture,
            data: population,
          },
        },
      });
      return population;
    },
    [prefecturePopulation, repository],
  );

  return {
    prefecturePopulation,
    getPrefecturePopulation,
  };
};
