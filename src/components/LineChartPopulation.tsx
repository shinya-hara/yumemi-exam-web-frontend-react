import { FC, useMemo } from 'react';
import { Line } from 'recharts';
import { LineChart, getChartLineColor } from './LineChart';

interface Props {
  data: { year: number; [prefName: string]: number }[];
}

export const LineChartPopulation: FC<Props> = ({ data }) => {
  /**
   * 表示項目数
   * dataにはX軸ラベルが含まれるので1引いておく
   */
  const dataCount = useMemo(() => Object.keys(data[0]).length - 1, [data]);

  /**
   * 軸ラベルを除いたデータキーを返す
   * ex: ['北海道', '青森県', ...]
   */
  const dataKeys = useMemo(() => {
    const keys: { [key: string]: number } = Object.assign({}, data[0]);
    delete keys.year;
    return Object.keys(keys);
  }, [data]);

  return (
    <LineChart data={data} xAxisDataKey="year">
      {dataKeys.map((key, i) => (
        <Line
          key={key}
          type="monotone"
          dataKey={key}
          stroke={getChartLineColor(dataCount, i)}
        />
      ))}
    </LineChart>
  );
};
