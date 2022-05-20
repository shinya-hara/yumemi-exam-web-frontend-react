import { useCallback, useState } from 'react';
import {
  Prefecture,
  PrefectureRepository,
} from '../repositories/prefectureRepository';

export const usePrefecture = (
  repository: PrefectureRepository = new PrefectureRepository(),
) => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  const getPrefectures = useCallback(async () => {
    const _prefectures = await repository.getList();
    setPrefectures(_prefectures);
  }, []);

  return {
    prefectures,
    getPrefectures,
  };
};
