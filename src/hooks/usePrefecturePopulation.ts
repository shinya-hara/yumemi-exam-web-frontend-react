import { useEffect, useMemo, useState } from 'react';
import { PopulationPerYear } from '../repositories/populationRepository';
import { Prefecture } from '../repositories/prefectureRepository';
import { usePopulation } from './usePopulation';
import { usePrefecture } from './usePrefecture';

export const usePrefecturePopulation = () => {
  const { getPrefectures, prefectures } = usePrefecture();
  const { prefecturePopulation, getPrefecturePopulation } = usePopulation();

  const [selectedPrefectures, setSelectedPrefectures] = useState<Prefecture[]>([
    // Set default prefectures if needed
  ]);

  useEffect(() => {
    getPrefectures();
  }, []);

  useEffect(() => {
    Promise.all(selectedPrefectures.map(getPrefecturePopulation));
  }, [getPrefecturePopulation, selectedPrefectures]);

  const prefectureOptions = useMemo(
    () =>
      prefectures.map((item) => ({
        label: item.prefName,
        value: item.prefCode,
      })),
    [prefectures],
  );

  const activePrefecturePopulation = useMemo<
    [number, { prefecture: Prefecture; data: PopulationPerYear }][]
  >(() => {
    return Object.entries(prefecturePopulation)
      .filter(
        (item) =>
          !!selectedPrefectures.find(
            (pref) => pref.prefCode === Number(item[0]),
          ),
      )
      .map((item) => [Number(item[0]), item[1]]);
  }, [prefecturePopulation, selectedPrefectures]);

  const chartData = useMemo(() => {
    const data: { year: number; [prefName: string]: number }[] = [];

    activePrefecturePopulation.forEach(([, prefData]) => {
      prefData.data.forEach((yearData, i) => {
        data[i] ||= { year: yearData.year };
        data[i][prefData.prefecture.prefName] = yearData.value;
      });
    });

    return data;
  }, [activePrefecturePopulation]);

  return {
    prefectures,
    prefectureOptions,
    prefecturePopulation,
    setSelectedPrefectures,
    chartData,
  };
};
