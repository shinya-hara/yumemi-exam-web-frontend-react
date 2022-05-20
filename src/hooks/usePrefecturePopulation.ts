import { useEffect, useMemo } from 'react';
import { usePrefecture } from './usePrefecture';

export const usePrefecturePopulation = () => {
  const { getPrefectures, prefectures } = usePrefecture();

  useEffect(() => {
    getPrefectures();
  }, [getPrefectures]);

  const prefectureOptions = useMemo(
    () =>
      prefectures.map((item) => ({
        label: item.prefName,
        value: item.prefCode,
      })),
    [prefectures],
  );

  return {
    prefectures,
    prefectureOptions,
  };
};
